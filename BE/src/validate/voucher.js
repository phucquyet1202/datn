import joi from "joi";

import { validationErrors } from "../utils";

const voucherValidate = joi.object({
  voucherCode: joi.string().required().messages(validationErrors("Code")),
  issueDate: joi.date().required().messages(validationErrors("Ngày bắt đầu")),
  expiryDate: joi.date().required().messages(validationErrors("Ngày kết thúc")),
  discountValue: joi.number().required().messages(validationErrors("Giá giảm")),
  description: joi.string().required().messages(validationErrors("Mô tả")),
  roomType: joi
    .string()
    .required()
    .messages(validationErrors("Loại phòng áp dụng")),
});

export default voucherValidate;
