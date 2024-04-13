import Joi from "joi";

const todoSchema = Joi.object({
  name: Joi.string().required(),
  status: Joi.string().required(),
});

export { todoSchema };
