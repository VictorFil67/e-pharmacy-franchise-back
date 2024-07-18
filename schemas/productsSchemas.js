import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  // photo: Joi.any(),
  suppliers: Joi.string(),
  stock: Joi.number(),
  category: Joi.string(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  description: Joi.string(),
  photo: Joi.any(),
  suppliers: Joi.string(),
  stock: Joi.number(),
  category: Joi.string(),
});
