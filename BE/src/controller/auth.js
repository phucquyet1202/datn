import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

import { validateMiddleware } from "../middleware";
import { InformationModel, UserModel } from "../models";
import { RegisterValidate, LoginValidate, infomationUser } from "../validate";
import {
  loginToken,
  sendMailRegister,
  getGoogleOauthToken,
  getGoogleUser,
  sendResponse,
  sendMailOauthRegister,
  generateRandomCode,
  sendRestPassword,
  sendChangedPassword,
  sendForgotPassword,
  sendCheckEmailRegister,
} from "../utils";

dotenv.config();

export const changeRoleUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        role: req.body.role,
      },
      { new: true }
    );

    if (req.user.role !== "Admin")
      return sendResponse(res, 404, "Bạn không có quyền");

    if (!user) return sendResponse(res, 404, "Thất bại");

    return sendResponse(res, 200, "Thành công", user);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const getAll = async (req, res) => {
  try {
    const userList = await UserModel.find()
      .select("-password -createdAt -updatedAt")
      .populate({
        path: "id_information",
        select: "-createdAt -updatedAt",
      });

    if (!userList || userList.length === 0) {
      return sendResponse(res, 404, "Không có danh sách người dùng");
    }

    return sendResponse(res, 200, "Danh sách người dùng", userList);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy danh sách người dùng"
    );
  }
};

export const getInfoUserById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return sendResponse(res, 400, "ID không hợp lệ");
    }

    const user = await UserModel.findById(req.params.id)
      .select("-password -createdAt -updatedAt")
      .populate({
        path: "id_information",
        select: "-createdAt -updatedAt",
      });

    if (!user || user.length === 0) {
      return sendResponse(res, 404, "Không tìm thấy người dùng");
    }

    return sendResponse(res, 200, "Thông tin người dùng", user);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy thông tin người dùng"
    );
  }
};

export const register = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    validateMiddleware(req, res, RegisterValidate, async () => {
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return sendResponse(res, 409, "Email đã tồn tại");
      }

      const randomCode = generateRandomCode(6);

      const hashedPassword = await bcrypt.hash(password, 12);

      const string = jwt.sign(
        {
          email,
          name,
          pa: hashedPassword,
          rc: randomCode,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "3m",
        }
      );

      res.cookie("cra", string, { httpOnly: true });

      sendCheckEmailRegister(email, name, randomCode);

      return sendResponse(res, 200, "Vui lòng kiểm tra email");
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi đăng ký");
  }
};

export const checkMailRegister = async (req, res) => {
  try {
    const { code } = req.body;

    const cra = req?.cookies.cra;

    const decoded = jwt.verify(cra, process.env.SECRET_KEY);

    if (code !== decoded.rc) {
      return sendResponse(res, 401, "Vui lòng đăng ký lại");
    }

    const information = await InformationModel.create({ name: decoded.name });

    const user = await UserModel.create({
      email: decoded.email,
      password: decoded.pa,
      id_information: information._id,
    });

    sendMailRegister(user.name, user.email);

    return sendResponse(res, 200, "Đăng ký thành công");
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return sendResponse(res, 401, "Token đã hết hạn!");
    } else if (error instanceof jwt.NotBeforeError) {
      return sendResponse(res, 401, "Token chưa có hiệu lực!");
    } else if (error instanceof jwt.JsonWebTokenError) {
      return sendResponse(res, 401, "Token không hợp lệ!");
    }

    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    validateMiddleware(req, res, LoginValidate, async () => {
      const user = await UserModel.findOne({ email });
      if (!user) {
        return sendResponse(
          res,
          401,
          "Tài khoản hoặc mật khẩu không chính xác"
        );
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return sendResponse(
          res,
          401,
          "Tài khoản hoặc mật khẩu không chính xác"
        );
      }

      if (user.isLockAccount) {
        return sendResponse(res, 403, "Tài khoản đã bị khóa");
      }

      await loginToken(res, user);

      return sendResponse(res, 200, "Đăng nhập thành công");
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi đăng nhập");
  }
};

export const lockAccount = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return sendResponse(res, 400, "ID không hợp lệ");
    }

    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return sendResponse(res, 404, "Không tìm thấy người dùng");
    }

    if (user.isLockAccount) {
      return sendResponse(res, 403, "Tài khoản đã bị khóa");
    }

    user.isLockAccount = true;
    await user.save();

    return sendResponse(res, 200, "Khóa tài khoản thành công");
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi khóa tài khoản");
  }
};

export const refreshToken = (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    const decoded = jwt.verify(refreshToken, process.env.SECRET_KEY);

    const newAccessToken = jwt.sign(
      { id: decoded.id },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("accessToken", newAccessToken, { httpOnly: true });

    return sendResponse(res, 200, "Làm mới token thành công");
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return sendResponse(res, 401, "Token đã hết hạn!");
    } else if (error instanceof jwt.NotBeforeError) {
      return sendResponse(res, 401, "Token chưa có hiệu lực!");
    } else if (error instanceof jwt.JsonWebTokenError) {
      return sendResponse(res, 401, "Token không hợp lệ!");
    }

    console.error(error);
    return sendResponse(res, 500, "Đã có lỗi xảy ra khi làm mới token");
  }
};

export const getUserByToken = async (req, res) => {
  try {
    const user = req.user;

    return sendResponse(res, 200, "Thông tin người dùng", user);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy thông tin người dùng"
    );
  }
};

export const googleOauth = async (req, res) => {
  const code = req.query.code;
  const pathUrl = req.query.state || "/";

  if (!code) {
    return res.redirect(`${process.env.PUBLIC_URL}/oauth-error`);
  }

  try {
    const { id_token, access_token } = await getGoogleOauthToken(code);
    const { id, name, email, picture } = await getGoogleUser(
      id_token,
      access_token
    );

    const user = await UserModel.findOne({ email });

    if (user) {
      const user = await UserModel.findOneAndUpdate(
        { email },
        { $set: { id_google: id } },
        { new: true, upsert: true }
      );

      await InformationModel.findOneAndUpdate(
        { _id: user.id_information },
        { $set: { image: picture } },
        { new: true, upsert: true }
      );

      if (user.isLockAccount) {
        return sendResponse(res, 403, "Tài khoản đã bị khóa");
      }

      await loginToken(res, user);
    } else {
      const information = await InformationModel.create({
        name,
        image: picture,
      });

      const password = await generateRandomCode(12);
      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await UserModel.create({
        id_google: id,
        email,
        password: hashedPassword,
        id_information: information._id,
      });

      sendMailOauthRegister(name, email, password);

      await loginToken(res, user);
    }

    return res.redirect(`${process.env.PUBLIC_URL}${pathUrl}`);
  } catch (error) {
    console.error(error);

    return res.redirect(`${process.env.PUBLIC_URL}/oauth-error`);
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("accessToken", "", { maxAge: 1 });
    res.cookie("refreshToken", "", { maxAge: 1 });

    return sendResponse(res, 200, "Đăng xuất thành công");
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi đăng xuất");
  }
};

// Đổi mật khẩu
export const getCode = async (req, res) => {
  const user = req.user;

  const randomCode = generateRandomCode(6);

  sendRestPassword(user.id_information.name, user.email, randomCode);

  const code = jwt.sign(
    { email: user.email, code: randomCode },
    process.env.SECRET_KEY,
    {
      expiresIn: "3m",
    }
  );

  res.cookie("changeCode", code, { httpOnly: true });

  return sendResponse(res, 200, "Gửi mã thành công");
};

export const checkCode = async (req, res) => {
  const { code } = req.body;

  try {
    const changeCode = req?.cookies?.changeCode;
    const decoded = jwt.verify(changeCode, process.env.SECRET_KEY);

    if (code !== decoded.code) {
      return sendResponse(res, 400, "Mã bảo mật không chính xác!");
    }

    return sendResponse(res, 200, "Mã bảo mật chính xác");
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return sendResponse(res, 401, "Token đã hết hạn!");
    } else if (error instanceof jwt.NotBeforeError) {
      return sendResponse(res, 401, "Token chưa có hiệu lực!");
    } else if (error instanceof jwt.JsonWebTokenError) {
      return sendResponse(res, 401, "Token không hợp lệ!");
    }

    console.error(error);
    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const changePassword = async (req, res) => {
  const { oldPassword, password, confirmPassword } = req.body;

  try {
    const changeCode = req?.cookies?.changeCode;
    const decoded = jwt.verify(changeCode, process.env.SECRET_KEY);

    const user = await UserModel.findOne({ email: decoded.email });

    if (!user) {
      return sendResponse(res, 404, "User không tồn tại");
    }

    if (password !== confirmPassword) {
      return sendResponse(res, 400, "Hai mật khẩu không khớp!");
    }

    if (password.length < 12) {
      return sendResponse(
        res,
        400,
        "Mật khẩu phải có độ dài từ 12 ký tự trở lên"
      );
    }

    const checkPass = await bcrypt.compare(oldPassword, user.password);
    if (!checkPass) {
      return sendResponse(res, 400, "Mật khẩu cũ không chính xác");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return sendResponse(res, 400, "Không được giống mật khẩu cũ");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const userNew = await UserModel.findOneAndUpdate(
      { email: decoded.email },
      { password: hashedPassword },
      { new: true }
    ).populate("id_information");

    if (!userNew) {
      return sendResponse(res, 404, "Đổi mật khẩu thất bại");
    }

    res.cookie("changeCode", "", { maxAge: 1 });
    sendChangedPassword(userNew?.id_information.name, userNew.email);

    return sendResponse(res, 200, "Đổi mật khẩu thành công");
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return sendResponse(res, 401, "Token đã hết hạn!");
    } else if (error instanceof jwt.NotBeforeError) {
      return sendResponse(res, 401, "Token chưa có hiệu lực!");
    } else if (error instanceof jwt.JsonWebTokenError) {
      return sendResponse(res, 401, "Token không hợp lệ!");
    }

    console.error(error);
    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

// Quên mật khẩu
export const getSecurityCode = async (req, res) => {
  const { email } = req.body;

  const user = await UserModel.findOne({ email })
    .select("-password -createdAt -updatedAt")
    .populate({
      path: "id_information",
      select: "-createdAt -updatedAt",
    });

  if (!user) {
    return res.status(404).json({
      message: "Email không tồn tại",
    });
  }

  const randomCode = generateRandomCode(6);
  const randomString = uuidv4();

  const resetToken = jwt.sign(
    { email, randomCode, randomString },
    process.env.SECRET_KEY,
    { expiresIn: "3m" }
  );

  res.cookie("resetToken", resetToken, { httpOnly: true });

  const resetPasswordUrl = `${process.env.PUBLIC_URL}/forgot-password/${randomString}`;

  sendForgotPassword(
    user.id_information.name,
    user.email,
    randomCode,
    resetPasswordUrl
  );

  return sendResponse(res, 200, "Gửi mã thành công");
};

export const resetPassword = async (req, res) => {
  const { password, randomString, randomCode } = req.body;

  try {
    const resetToken = req?.cookies?.resetToken;
    const decoded = jwt.verify(resetToken, process.env.SECRET_KEY);

    const user = await UserModel.findOne({ email: decoded.email });

    if (!user) {
      return sendResponse(res, 404, "Người dùng không tồn tại");
    }

    if (
      randomString !== decoded.randomString ||
      randomCode !== decoded.randomCode
    ) {
      return sendResponse(res, 400, "Mã bảo mật không chính xác");
    }

    if (password.length < 12) {
      return sendResponse(
        res,
        400,
        "Mật khẩu phải có độ dài từ 12 ký tự trở lên"
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return sendResponse(res, 400, "Không được giống mật khẩu cũ");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const userNew = await UserModel.findOneAndUpdate(
      { email: decoded.email },
      { password: hashedPassword },
      { new: true }
    ).populate("id_information");

    res.cookie("resetToken", "", { maxAge: 1 });
    sendChangedPassword(userNew?.id_information.name, userNew.email);

    return sendResponse(res, 200, "Đổi mật khẩu thành công");
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return sendResponse(res, 401, "Token đã hết hạn!");
    } else if (error instanceof jwt.NotBeforeError) {
      return sendResponse(res, 401, "Token chưa có hiệu lực!");
    } else if (error instanceof jwt.JsonWebTokenError) {
      return sendResponse(res, 401, "Token không hợp lệ!");
    }

    console.error(error);
    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const updateInfo = async (req, res) => {
  try {
    validateMiddleware(req, res, infomationUser, async () => {
      const info = await InformationModel.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      );
      if (!info) {
        return sendResponse(res, 404, "Không cập nhật được thông tin cá nhân");
      }
      return sendResponse(
        res,
        200,
        "Cập nhật được thông tin cá nhân thành công",
        info
      );
    });
  } catch (error) {
    console.log(error);
    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};
