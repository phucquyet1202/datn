import joi from "joi";

import { validationErrors } from "../utils";

const registerValidate = joi.object({
  name: joi.string().required().messages(validationErrors("Tên")),
  email: joi.string().email().required().messages(validationErrors("Email")),
  password: joi
    .string()
    .required()
    .min(12)
    .messages(validationErrors("Mật khẩu")),
  confirmPassword: joi
    .string()
    .valid(joi.ref("password"))
    .required()
    .messages(validationErrors("Xác nhận mật khẩu")),
});

export default registerValidate;
