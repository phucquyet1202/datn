import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { UserModel } from "../models";
import { sendResponse } from "../utils";

dotenv.config();

export const isAdminMiddleware = async (req, res, next) => {
  try {
    const accessToken = req?.cookies?.accessToken;

    if (!accessToken) {
      return sendResponse(res, 401, "Bạn chưa đăng nhập");
    }

    const decoded = jwt.verify(accessToken, process.env.SECRET_KEY);
    const user = await UserModel.findById(decoded.id)
      .select("-password -isLockAccount -createdAt -updatedAt")
      .populate({
        path: "id_information",
        select: "-createdAt -updatedAt",
      });

    const listRole = [
      "Admin",
      "Manager",
      "Reservation Manager",
      "Human Resources Manager",
      "Room Manager",
      "Facilities Manager",
    ];

    if (!user || !listRole.includes(user.role)) {
      return sendResponse(res, 403, "Bạn không có quyền truy cập");
    }

    req.user = user;

    next();
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

export const loginMiddleware = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      return sendResponse(res, 401, "Bạn chưa đăng nhập");
    }

    const decoded = jwt.verify(accessToken, process.env.SECRET_KEY);
    const user = await UserModel.findById(decoded.id)
      .select("-password -isLockAccount -createdAt -updatedAt")
      .populate({
        path: "id_information",
        select: "-createdAt -updatedAt",
      });

    if (!user) {
      return sendResponse(res, 401, "Người dùng không tồn tại");
    }

    req.user = user;

    next();
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
