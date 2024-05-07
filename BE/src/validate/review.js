import joi from "joi";

import { validationErrors } from "../utils";

const reviewValidate = joi.object({
  id_hotel: joi.string().required().messages(validationErrors("Id khách sạn")),
  rating: joi.number().required().messages(validationErrors("Đánh giá")),
  comment: joi.string().required().messages(validationErrors("Bình luận")),
});

export default reviewValidate;
