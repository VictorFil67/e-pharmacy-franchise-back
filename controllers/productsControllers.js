import {
  addShop,
  // listContactsByFilter,
  getShopByFilter,
  // removeContactByFilter,
  // updateStatusContactByFilter,
  updateShopByFilter,
} from "../services/shopsServices.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";
import fs from "fs/promises";
import cloudinary from "../helpers/cloudinary.js";
import { createProduct, listProducts } from "../services/productsServices.js";

const getAllProducts = async (req, res) => {
  console.log(req.query);
  // const { page = 1, limit = 20, favorite } = req.query;
  // const skip = (page - 1) * limit;
  // const { _id: owner } = req.user;
  // const result = !favorite
  //   ? await listContactsByFilter({ owner }, { skip, limit })
  //   : await listContactsByFilter({ owner, favorite }, { skip, limit });
  const result = await listProducts();
  console.log(result);
  res.json(result);
};

// const getShopInfo = async (req, res) => {
//   const { id } = req.params;
//   console.log(req.params);
//   const { _id: owner } = req.user;
//   const result = await getShopByFilter({ _id: id, owner });
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.json(result);
// };

// const deleteContact = async (req, res) => {
//   const { id } = req.params;
//   console.log(req.user);
//   const { _id: owner } = req.user;
//   const result = await removeContactByFilter({ _id: id, owner });
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.status(200).json(result);
// };

const addProduct = async (req, res) => {
  const { _id: owner } = req.user;
  // const { url: shopLogoURL } = await cloudinary.uploader.upload(req.file.path, {
  //   folder: "shopLogos",
  // });
  // const { path: oldPath } = req.file;

  // await fs.rm(oldPath);
  const result = await createProduct({ ...req.body, owner });
  res.status(201).json(result);
};

// const updateShop = async (req, res) => {
//   console.log(req.body);
//   if (Object.keys(req.body).length === 0) {
//     throw HttpError(400, "Body must have at least one field");
//   }
//   const { id } = req.params;
//   const { _id: owner } = req.user;
//   const { url: shopLogoURL } = await cloudinary.uploader.upload(req.file.path, {
//     folder: "shopLogos",
//   });
//   const { path: oldPath } = req.file;

//   await fs.rm(oldPath);
//   const result = await updateShopByFilter(
//     { _id: id, owner },
//     { ...req.body, shopLogoURL }
//   );
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.status(200).json(result);
// };

// const updateStatusContact = async (req, res) => {
//   const { id } = req.params;
//   const { _id: owner } = req.user;
//   const result = await updateStatusContactByFilter(
//     { _id: id, owner },
//     req.body
//   );
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.status(200).json(result);
// };

export default {
  getAllProducts: ctrlWrapper(getAllProducts),
  // getShopInfo: ctrlWrapper(getShopInfo),
  // deleteContact: ctrlWrapper(deleteContact),
  addProduct: ctrlWrapper(addProduct),
  // updateShop: ctrlWrapper(updateShop),
  // updateStatusContact: ctrlWrapper(updateStatusContact),
};
