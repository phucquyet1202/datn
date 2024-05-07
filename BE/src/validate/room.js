import joi from "joi";

import { validationErrors } from "../utils";

const roomValidate = joi.object({
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
    .messages(validationErrors("Ảnh phòng")),
  quantity: joi
    .number()
    .min(1)
    .required()
    .messages(validationErrors("Số lượng phòng")),
  // price: joi.number().min(0).required().messages(validationErrors("Giá phòng")),
  status: joi
    .string()
    .optional()
    .messages(validationErrors("Trạng Thái phòng")),
  description: joi
    .string()
    .required()
    .messages(validationErrors("Mô tả phòng")),
  id_amenities: joi
    .array()
    .min(1)
    .required()
    .messages(validationErrors("Id tiện nghi phòng")),
  id_hotel: joi.string().required().messages(validationErrors("Id khách sạn")),
  id_roomType: joi
    .string()
    .required()
    .messages(validationErrors("Id loại phòng")),
  list_rooms: joi
    .array()
    .min(1)
    .required()
    .items(
      joi.object({
        room: joi.number().required().messages(validationErrors('Số phòng'))
      })
    ).messages(validationErrors('Số phòng'))
});

export default roomValidate;
