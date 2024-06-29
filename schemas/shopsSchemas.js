import Joi from "joi";

export const createShopSchema = Joi.object({
  shopName: Joi.string().required(),
  shopOwnerName: Joi.string().required(),
  shopEmail: Joi.string().email().required(),
  shopPhone: Joi.string().required(),
  shopStreet: Joi.string().required(),
  shopCity: Joi.string().required(),
  shopZip: Joi.string().required(),
  password: Joi.string().required(),
  shopOwnDelivery: Joi.string().required({ allow: ["Yes", "No"] }),
  // favorite: Joi.boolean(),
});

// export const updateContactSchema = Joi.object({
//   name: Joi.string(),
//   email: Joi.string().email(),
//   phone: Joi.string(),
//   favorite: Joi.boolean(),
// });
