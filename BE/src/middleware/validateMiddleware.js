export const validateMiddleware = (req, res, validationLogic, next) => {
  try {
    const { error } = validationLogic.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    next();
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Có lỗi xảy ra khi validate");
  }
};

export const validateFormMiddleware = (req, res, validationLogic, next) => {
  try {
    const { error } = validationLogic.validate(req.fields, {
      abortEarly: false,
    });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    next();
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Có lỗi xảy ra khi validate");
  }
};
