import joi from "joi";

import { validationErrors } from "../utils";

const paymentValidate = joi.object({
  amount: joi
    .number()
    .min(1)
    .required()
    .messages(validationErrors("Tiền thanh toán")),
  bookingId: joi.string().required().messages(validationErrors("Id đơn hàng")),
  total_payment: joi
    .number()
    .min(1)
    .required()
    .messages(validationErrors("Tổng tiền")),
});

export default paymentValidate;
