import { BillModel } from "../models";
import { sendResponse } from "../utils";
import { BillValidate } from "../validate";
import { validateMiddleware } from "../middleware";

export const getAll = async (req, res) => {
  try {
    const billList = await BillModel.find();

    if (!billList || billList.length === 0) {
      return sendResponse(res, 404, "Không có danh sách hóa đơn");
    }

    return sendResponse(res, 200, "Danh sách hóa đơn", billList);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi lấy danh sách hóa đơn");
  }
};

export const getOne = async (req, res) => {
  try {
    const bill = await BillModel.findById(req.params.id);

    if (!bill || bill.length === 0) {
      return sendResponse(res, 404, "Không có thông tin hóa đơn");
    }

    return sendResponse(res, 200, "Thông tin hóa đơn", bill);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi lấy thông tin hóa đơn");
  }
};

export const create = async (req, res) => {
  try {
    validateMiddleware(req, res, BillValidate, async () => {
      const data = await BillModel.create(req.body);

      if (!data) {
        return sendResponse(res, 404, "Thêm hóa đơn thất bại");
      }

      return sendResponse(res, 200, "Thêm hóa đơn thành công", data);
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thêm hóa đơn");
  }
};

export const update = async (req, res) => {
  try {
    validateMiddleware(req, res, BillValidate, async () => {
      const data = await BillModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      if (!data) {
        return sendResponse(res, 404, "Cập nhật hóa đơn thất bại");
      }

      return sendResponse(res, 200, "Cập nhật hóa đơn thành công", data);
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi cập nhật hóa đơn");
  }
};
