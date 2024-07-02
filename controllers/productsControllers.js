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
import {
  createProduct,
  getProductById,
  listProducts,
  removeProductByFilter,
  updateByFilter,
} from "../services/productsServices.js";

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

const getProductInfo = async (req, res) => {
  const { productId: _id } = req.params;
  console.log(req.params);
  // const { _id: owner } = req.user;
  const result = await getProductById(_id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const deleteProduct = async (req, res) => {
  const { _id: owner } = req.user;
  const { productId: _id } = req.params;
  const result = await removeProductByFilter({ _id, owner });
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

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

const updateProduct = async (req, res) => {
  console.log(req.body);
  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, "Body must have at least one field");
  }
  const { _id: owner } = req.user;
  const { productId: _id } = req.params;
  const result = await updateByFilter({ _id, owner }, { ...req.body });
  res.status(200).json(result);
};

const updateProductImg = async (req, res) => {
  const { _id: owner } = req.user;
  const { productId: _id } = req.params;
  const { url: productImgURL } = await cloudinary.uploader.upload(
    req.file.path,
    {
      folder: "productImges",
    }
  );
  const { path: oldPath } = req.file;

  await fs.rm(oldPath);
  const result = await updateByFilter({ _id, owner }, { productImgURL });
  res.status(200).json(result);
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
  getProductInfo: ctrlWrapper(getProductInfo),
  deleteProduct: ctrlWrapper(deleteProduct),
  addProduct: ctrlWrapper(addProduct),
  updateProduct: ctrlWrapper(updateProduct),
  updateProductImg: ctrlWrapper(updateProductImg),
};
