const joi = require("joi");

exports.sendOtp = (req, res, next) => {
  const schema = joi.object({
    phoneNo: joi
      .string()
      .pattern(new RegExp(/^-?[\d.]+(?:e-?\d+)?$/))
      .message("Wrong Pattern or Not a valid Number")
      .empty()
      .min(7)
      .max(13)
      .required()
      .messages({
        "string.min": "Number Should be greater than or equal to 7",
        "string.max": "Number Should be less than or equal to 13",
        "string.pattern": "Wrong Pattern",
      }),
  });
  const validation = schema.validate(req.body);
  let { error } = validation;

  if (error) {
    error.status = 422;
    next(error);
  }
  next();
};

exports.verifyOTP = (req, res, next) => {
  const schema = joi.object({
    phoneNo: joi
      .string()
      .pattern(new RegExp(/^-?[\d.]+(?:e-?\d+)?$/))
      .message("Wrong Pattern or Not a valid Number")
      .empty()
      .min(7)
      .max(13)
      .required(),
    mobileotp: joi.string().min(4).max(6).required().messages({
      "string.min": " OTP length is not valid",
    }),
  });
  const validation = schema.validate(req.body);
  let { error } = validation;

  if (error) {
    error.status = 422;
    next(error);
  }
  next();
};
