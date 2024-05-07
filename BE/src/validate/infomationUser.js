import joi from "joi";

import { validationErrors } from "../utils";

const infomationUser = joi.object({
    name: joi
        .string()
        .required()
        .messages(validationErrors("Tài khoản")),
    phone: joi
        .string()
        .required()
        .pattern(/^(0|\+84)[3|5|7|8|9][0-9]{8}$/)
        .messages(validationErrors("Số điện thoại")),
    address: joi
        .string()
        .required()
        .messages(validationErrors("Địa chỉ")),
});

export default infomationUser;
