import joi from "joi";

import { validationErrors } from "../utils";

const loginValidate = joi.object({
  email: joi
    .string()
    .email()
    .required()
    .messages(validationErrors("Tài khoản")),
  password: joi
    .string()
    .required()
    .min(12)
    .messages(validationErrors("Mật khẩu")),
});

export default loginValidate;
