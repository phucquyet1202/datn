import joi from "joi";

import { validationErrors } from "../utils";

const bookingValidate = joi.object({
  check_in: joi.date().required().messages(validationErrors("Ngày nhận phòng")),
  check_out: joi.date().required().messages(validationErrors("Ngày trả phòng")),
  id_voucher: joi.string(),
  total_price: joi.number().required().messages(validationErrors("Tổng giá")),
  info: joi
    .object({
      name: joi.string().required(),
      phone: joi
        .string()
        .pattern(/^(0|\+84)[3|5|7|8|9][0-9]{8}$/)
        .required()
        .messages({
          "any.required": "Bạn chưa nhập số điện thoại",
          "string.pattern.base": "Số điện thoại không đúng định dạng! \n",
        }),
      cmt: joi.string().required().length(12).messages({
        "any.required": "Bạn chưa nhập căn cước công dân",
        "string.length": "Căn cước công dân phải có đúng 12 số!",
      }),
    })
    .required(),

  is_deposit_amount: joi
    .boolean()
    .required()
    .messages(validationErrors("Thanh toán trước")),
  city: joi.number().required().messages(validationErrors("Vị trí")),
  payment_method: joi
    .string()
    .optional()
    .valid("VN Pay", "Zalo Pay", "MoMo")
    .default("VN Pay")
    .messages(validationErrors("Phương thức thanh toán")),
  list_room: joi
    .array()
    .min(1)
    .required()
    .items(
      joi.object({
        idRoom: joi.string().required().messages(validationErrors("ID phòng")),
        quantity: joi
          .number()
          .required()
          .messages(validationErrors("Số lượng")),
      })
    )
    .messages(validationErrors("Danh sách phòng")),
  status: joi
    .string()
    .valid(
      "Chờ thanh toán",
      "Đang xử lý",
      "Đã xác nhận",
      "Đã hủy bỏ",
      "Vắng mặt",
      "Đã nhận phòng",
      "Thành Công"
    )
    .default("Chờ thanh toán")
    .messages(validationErrors("Trạng thái")),
});

export default bookingValidate;
