import express from "express";
import shopsControllers from "../controllers/shopsControllers.js";
import validateBody from "../decorators/validateBody.js";
import { createShopSchema, updateShopSchema } from "../schemas/shopsSchemas.js";
import isValidId from "../middlewares/isValidId.js";
import authtenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";

const shopsRouter = express.Router();

shopsRouter.use(authtenticate);

const {
  getAllContacts,
  getShopInfo,
  deleteContact,
  createShop,
  updateShop,
  updateStatusContact,
} = shopsControllers;
// contactsRouter.get("/", getAllContacts);

shopsRouter.get("/:id", isValidId, getShopInfo);

// contactsRouter.delete("/:id", isValidId, deleteContact);

shopsRouter.post(
  "/create",
  upload.single("shopLogoURL"),
  validateBody(createShopSchema),
  createShop
);

shopsRouter.put(
  "/:id/update",
  isValidId,
  validateBody(updateShopSchema),
  updateShop
);

// contactsRouter.patch("/:id/favorite", isValidId, updateStatusContact);

export default shopsRouter;

// {
//   "shopName": "victor571",
//   "shopOwnerName": "victor57",
//   "shopEmail": "victor51@mail.com.ua",
//   "shopPhone": "+380671112233",
//   "shopStreet": "victory",
//   "shopCity": "kiyv",
//   "shopZip": "10000",
// "password": "88aA991*",
// "shopOwnDelivery": "Yes"
// }
