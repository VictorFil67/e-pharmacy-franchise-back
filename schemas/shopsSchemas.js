import Joi from "joi";

export const createShopSchema = Joi.object({
  shopName: Joi.string().required(),
  shopOwnerName: Joi.string().required(),
  shopEmail: Joi.string().email().required(),
  shopPhone: Joi.string().required(),
  shopStreet: Joi.string().required(),
  shopCity: Joi.string().required(),
  shopZip: Joi.number().min(4).required(),
  password: Joi.string().min(8).required(),
  shopLogoURL: Joi.any(),
  shopOwnDelivery: Joi.string().required({ allow: ["Yes", "No"] }),
});

export const updateShopSchema = Joi.object({
  shopName: Joi.string(),
  shopOwnerName: Joi.string(),
  shopEmail: Joi.string().email(),
  shopPhone: Joi.string(),
  shopStreet: Joi.string(),
  shopCity: Joi.string(),
  shopZip: Joi.number().min(4),
  password: Joi.string().min(8),
  shopLogoURL: Joi.any(),
  shopOwnDelivery: Joi.string(),
});
