import joi from "joi";

import { validationErrors } from "../utils";

const hotelValidate = joi.object({
  name: joi.string().required().messages(validationErrors("Tên khách sạn")),
  images: joi
    .array()
    .min(1)
    .required()
    .items(
      joi.object({
        name: joi.string().required().messages(validationErrors("Tên")),
        url: joi.string().required().messages(validationErrors("Đường dẫn")),
      })
    )
    .messages(validationErrors("Ảnh khách sạn")),
  address: joi
    .string()
    .required()
    .messages(validationErrors("Địa chỉ khách sạn")),
  phone: joi
    .string()
    .required()
    .pattern(/^(0|\+84)[3|5|7|8|9][0-9]{8}$/)
    .messages(validationErrors("Số điện thoại khách sạn")),
  status: joi
    .string()
    .optional()
    .messages(validationErrors("Trạng thái khách sạn")),
  email: joi.string().required().messages(validationErrors("Email khách sạn")),
  description: joi
    .string()
    .required()
    .messages(validationErrors("Mô tả khách sạn")),
  city: joi.string().required().messages(validationErrors("Tên thành phố")),
  id_amenities: joi
    .array()
    .min(1)
    .required()
    .messages(validationErrors("Tiện nghi khách sạn")),
});

export default hotelValidate;
