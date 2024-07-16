import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";
import fs from "fs/promises";
import cloudinary from "../helpers/cloudinary.js";
import {
  createProduct,
  findProduct,
  getProductById,
  getProductsCountByFilter,
  listProducts,
  listProductsByFilter,
  removeProductByFilter,
  updateByFilter,
} from "../services/productsServices.js";

const getAllProducts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const result = await listProducts({ skip, limit });
  if (!result) {
    throw HttpError(404);
  }
  const total = await getProductsCountByFilter();
  // console.log(id);
  res.json({ result, total });
};

const getAllShopProducts = async (req, res) => {
  const { shopId } = req.params;
  const { page = 1, limit = 3 } = req.query;
  const skip = (page - 1) * limit;
  const result = await listProductsByFilter({ shop: shopId }, { skip, limit });
  if (!result) {
    throw HttpError(404);
  }
  const total = await getProductsCountByFilter({ shop: shopId });
  // console.log(result);
  res.json({ result, total });
};

const getProductInfo = async (req, res) => {
  const { productId: _id } = req.params;
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
    throw HttpError(403, `You don't have access to this action!`);
  }
  res.status(200).json(result);
};

const addProduct = async (req, res) => {
  const { _id: owner } = req.user;
  const { shopId: shop } = req.params;
  const { url: photo } = await cloudinary.uploader.upload(req.file.path, {
    folder: "productImges",
  });
  const { path: oldPath } = req.file;

  await fs.rm(oldPath);
  const result = await createProduct({ ...req.body, photo, owner, shop });
  res.status(201).json(result);
};

const addProductFromCatalog = async (req, res) => {
  const { productId: _id, shopId: shop } = req.params;
  const { _id: owner } = req.user;
  const product = await findProduct({ _id, shop });
  if (product) {
    throw HttpError(
      409,
      "The shop  already has this medicine. Please choose another product."
    );
  }
  const result = await updateByFilter({ _id }, { owner, shop });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const updateProduct = async (req, res) => {
  console.log(req.body);
  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, "Body must have at least one field");
  }
  const { _id: owner } = req.user;
  const { productId: _id } = req.params;
  const result = await updateByFilter({ _id, owner }, { ...req.body });
  if (!result) {
    throw HttpError(403, `You don't have access to this action!`);
  }
  res.status(200).json(result);
};

const updateProductImg = async (req, res) => {
  const { _id: owner } = req.user;
  const { productId: _id } = req.params;
  const { url: photo } = await cloudinary.uploader.upload(req.file.path, {
    folder: "productImges",
  });
  const { path: oldPath } = req.file;

  await fs.rm(oldPath);
  const result = await updateByFilter({ _id, owner }, { photo });
  res.status(200).json(result);
};

export default {
  getAllProducts: ctrlWrapper(getAllProducts),
  getAllShopProducts: ctrlWrapper(getAllShopProducts),
  getProductInfo: ctrlWrapper(getProductInfo),
  deleteProduct: ctrlWrapper(deleteProduct),
  addProduct: ctrlWrapper(addProduct),
  addProductFromCatalog: ctrlWrapper(addProductFromCatalog),
  updateProduct: ctrlWrapper(updateProduct),
  updateProductImg: ctrlWrapper(updateProductImg),
};
