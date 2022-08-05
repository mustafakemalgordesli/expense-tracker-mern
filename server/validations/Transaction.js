const Joi = require("joi");

const createValidation = Joi.object({
  text: Joi.string().required(),
  amount: Joi.number().min(0).required(),
  type: Joi.string().valid("income", "expense").required(),
});

module.exports = {
  createValidation,
};
