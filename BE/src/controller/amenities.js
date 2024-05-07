import mongoose from "mongoose";

import { sendResponse } from "../utils";
import { AmenitiesModel } from "../models";
import { AmenitiesValidate } from "../validate";
import { validateMiddleware } from "../middleware";

export const getAll = async (req, res) => {
  try {
    const amenitiesList = await AmenitiesModel.find();

    if (!amenitiesList || amenitiesList.length === 0) {
      return sendResponse(res, 404, "Không có danh sách tiện nghi");
    }

    return sendResponse(res, 200, "Danh sách tiện nghi", amenitiesList);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy danh sách tiện nghi"
    );
  }
};

export const getOne = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return sendResponse(res, 400, "ID không hợp lệ");
    }

    const amenities = await AmenitiesModel.findById(req.params.id);

    if (!amenities || amenities.length === 0) {
      return sendResponse(res, 404, "Không có thông tin tiện nghi");
    }

    return sendResponse(res, 200, "Thông tin tiện nghi", amenities);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy thông tin tiện nghi"
    );
  }
};

export const create = async (req, res) => {
  try {
    validateMiddleware(req, res, AmenitiesValidate, async () => {
      const data = await AmenitiesModel.create(req.body);

      if (!data) {
        return sendResponse(res, 404, "Thêm tiện nghi thất bại");
      }

      return sendResponse(res, 200, "Thêm tiện nghi thành công", data);
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thêm tiện nghi");
  }
};

export const update = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return sendResponse(res, 400, "ID không hợp lệ");
    }

    // validateMiddleware(req, res, AmenitiesValidate, async () => {
    const data = await AmenitiesModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!data) {
      return sendResponse(res, 404, "Cập nhật tiện nghi thất bại");
    }

    return sendResponse(res, 200, "Cập nhật tiện nghi thành công", data);
    // });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi cập nhật tiện nghi");
  }
};

// export const remove = async (req, res) => {
//   try {
//     if (!mongoose.isValidObjectId(req.params.id)) {
//       return sendResponse(res, 400, "ID không hợp lệ");
//     }

//     const data = await AmenitiesModel.findByIdAndDelete(req.params.id);

//     if (!data) {
//       return sendResponse(res, 404, "Xóa tiện nghi thất bại");
//     }

//     return sendResponse(res, 200, "Xóa tiện nghi thành công");
//   } catch (error) {
//     console.error(error);

//     return sendResponse(res, 500, "Đã có lỗi xảy ra khi xóa tiện nghi");
//   }
// };
