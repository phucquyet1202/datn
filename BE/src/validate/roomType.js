import joi from "joi";

import { validationErrors } from "../utils";

const roomTypeValidate = joi.object({
  name: joi.string().required().messages(validationErrors("Tên loại phòng")),
  price: joi.number().min(0).required().messages(validationErrors("Giá phòng")),
  status: joi
    .string()
    .required()
    .messages(validationErrors("Trạng thái phòng")),
  adults: joi
    .number()
    .min(0)
    .required()
    .messages(validationErrors("Số lượng người lớn")),
  children: joi
    .number()
    .min(0)
    .required()
    .messages(validationErrors("Số lượng trẻ em")),
  bed: joi
    .number()
    .min(1)
    .required()
    .messages(validationErrors("Số lượng giường")),
});

export default roomTypeValidate;
