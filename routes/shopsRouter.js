import express from "express";
import shopsControllers from "../controllers/shopsControllers.js";
import validateBody from "../decorators/validateBody.js";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";
import isValidId from "../middlewares/isValidId.js";
import authtenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";

const shopsRouter = express.Router();

shopsRouter.use(authtenticate);

const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
} = shopsControllers;
// contactsRouter.get("/", getAllContacts);

// contactsRouter.get("/:id", isValidId, getOneContact);

// contactsRouter.delete("/:id", isValidId, deleteContact);

// contactsRouter.post(
//   "/",
//   upload.single("avatarURL"),
//   validateBody(createContactSchema),
//   createContact
// );

// contactsRouter.put(
//   "/:id",
//   isValidId,
//   validateBody(updateContactSchema),
//   updateContact
// );

// contactsRouter.patch("/:id/favorite", isValidId, updateStatusContact);

export default shopsRouter;
