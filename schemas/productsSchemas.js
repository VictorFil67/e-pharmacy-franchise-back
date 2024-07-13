import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  suppliers: Joi.string(),
  stock: Joi.number(),
  category: Joi.string(),
});

// export const updateShopSchema = Joi.object({
//   shopName: Joi.string(),
//   shopOwnerName: Joi.string(),
//   shopEmail: Joi.string().email(),
//   shopPhone: Joi.string(),
//   shopStreet: Joi.string(),
//   shopCity: Joi.string(),
//   shopZip: Joi.number().min(4),
//   password: Joi.string().min(8),
//   shopOwnDelivery: Joi.string(),
// });
