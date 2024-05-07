import mongoose from "mongoose";

import { sendResponse } from "../utils";
import { RoomTypeModel } from "../models";
import { RoomTypeValidate } from "../validate";
import { validateMiddleware } from "../middleware";

export const getAll = async (req, res) => {
  try {
    const roomTypeList = await RoomTypeModel.find();

    if (!roomTypeList || roomTypeList.length === 0) {
      return sendResponse(res, 404, "Không có danh sách loại phòng");
    }

    return sendResponse(res, 200, "Danh sách loại phòng", roomTypeList);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy danh sách loại phòng"
    );
  }
};

export const getOne = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return sendResponse(res, 400, "ID không hợp lệ");
    }

    const roomType = await RoomTypeModel.findById(req.params.id);

    if (!roomType || roomType.length === 0) {
      return sendResponse(res, 404, "Không có thông tin loại phòng");
    }

    return sendResponse(res, 200, "Thông tin loại phòng", roomType);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy thông tin loại phòng"
    );
  }
};

export const create = async (req, res) => {
  try {
    req.body.status = 'Đang áp dụng'
    validateMiddleware(req, res, RoomTypeValidate, async () => {
      const data = await RoomTypeModel.create(req.body);

      if (!data) {
        return sendResponse(res, 404, "Thêm loại phòng thất bại");
      }

      return sendResponse(res, 200, "Thêm loại phòng thành công", data);
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thêm loại phòng");
  }
};

export const update = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return sendResponse(res, 400, "ID không hợp lệ");
    }

    // validateMiddleware(req, res, RoomTypeValidate, async () => {
    const data = await RoomTypeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!data) {
      return sendResponse(res, 404, "Cập nhật loại phòng thất bại");
    }

    return sendResponse(res, 200, "Cập nhật loại phòng thành công", data);
    // });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi cập nhật loại phòng");
  }
};

// export const remove = async (req, res) => {
//   try {
//     if (!mongoose.isValidObjectId(req.params.id)) {
//       return sendResponse(res, 400, "ID không hợp lệ");
//     }

//     const data = await RoomTypeModel.findByIdAndDelete(req.params.id);

//     if (!data) {
//       return sendResponse(res, 404, "Xóa loại phòng thất bại");
//     }

//     return sendResponse(res, 200, "Xóa loại phòng thành công");
//   } catch (error) {
//     console.error(error);

//     return sendResponse(res, 500, "Đã có lỗi xảy ra khi xóa loại phòng");
//   }
// };
