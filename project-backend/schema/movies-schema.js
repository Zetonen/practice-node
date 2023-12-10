import Joi from "joi";

export const movieAddSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": `"title" must be exist`,
    "string.base": `"title" must be text`,
  }),
  director: Joi.string().required().messages({
    "any.required": `"director" must be exist`,
    "string.base": `"director" must be text`,
  }),
});

export const movieUpdateSchema = Joi.object({
  title: Joi.string().messages({
    "any.required": `"title" must be exist`,
    "string.base": `"title" must be text`,
  }),
  director: Joi.string().messages({
    "any.required": `"director" must be exist`,
    "string.base": `"director" must be text`,
  }),
});
