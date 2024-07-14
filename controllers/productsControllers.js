import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";
import fs from "fs/promises";
import cloudinary from "../helpers/cloudinary.js";
import {
  createProduct,
  findProduct,
  getProductById,
  listProducts,
  listProductsByFilter,
  removeProductByFilter,
  updateByFilter,
} from "../services/productsServices.js";

const getAllProducts = async (_, res) => {
  const result = await listProducts();
  // console.log(id);
  res.json(result);
};
const getAllShopProducts = async (req, res) => {
  const { shopId } = req.params;
  const result = await listProductsByFilter({ shop: shopId });
  if (!result) {
    throw HttpError(404);
  }
  console.log(result);
  res.json(result);
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
  const result = await createProduct({ ...req.body, owner, shop });
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
