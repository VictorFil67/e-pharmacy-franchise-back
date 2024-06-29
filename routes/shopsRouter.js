import express from "express";
import shopsControllers from "../controllers/shopsControllers.js";
import validateBody from "../decorators/validateBody.js";
import {
  createShopSchema,
  // updateContactSchema,
} from "../schemas/shopsSchemas.js";
import isValidId from "../middlewares/isValidId.js";
import authtenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";

const shopsRouter = express.Router();

shopsRouter.use(authtenticate);

const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createShop,
  updateContact,
  updateStatusContact,
} = shopsControllers;
// contactsRouter.get("/", getAllContacts);

// contactsRouter.get("/:id", isValidId, getOneContact);

// contactsRouter.delete("/:id", isValidId, deleteContact);

shopsRouter.post(
  "/create",
  // upload.single("avatarURL"),
  validateBody(createShopSchema),
  createShop
);

// contactsRouter.put(
//   "/:id",
//   isValidId,
//   validateBody(updateContactSchema),
//   updateContact
// );

// contactsRouter.patch("/:id/favorite", isValidId, updateStatusContact);

export default shopsRouter;
