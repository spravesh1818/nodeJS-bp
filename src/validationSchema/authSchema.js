import Joi from "joi";

const authLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const authSignUpSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export { authLoginSchema, authSignUpSchema };
