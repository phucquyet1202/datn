import joi from "joi";

import { validationErrors } from "../utils";

const amenitiesValidate = joi.object({
  name: joi.string().required().messages(validationErrors("Tên tiện nghi")),
  features: joi
    .array()
    .optional()
    .items(
      joi.object({
        name: joi.string().required().messages(validationErrors("Tên")),
        surcharge: joi
          .boolean()
          .optional()
          .messages(validationErrors("Phụ phí")),
      })
    )
    .messages(validationErrors("Đặc trưng")),
});

export default amenitiesValidate;
