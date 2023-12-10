import Joi from "joi";

export const movieAddSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": `"title" must be exist`,
    "string.base": `"title" must be text`,
  }),
  direction: Joi.string().required().messages({
    "any.required": `"direction" must be exist`,
    "string.base": `"direction" must be text`,
  }),
});

export const movieUpdateSchema = Joi.object({
  title: Joi.string().messages({
    "any.required": `"title" must be exist`,
    "string.base": `"title" must be text`,
  }),
  direction: Joi.string().messages({
    "any.required": `"direction" must be exist`,
    "string.base": `"direction" must be text`,
  }),
});
