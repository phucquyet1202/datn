import joi from "joi";

import { validationErrors } from "../utils";

const bannerValidate = joi.object({
    name: joi.string().required().messages(validationErrors("Tên ảnh")),
    url: joi.string().required().messages(validationErrors("Đường link ảnh")),
});

export default bannerValidate;
