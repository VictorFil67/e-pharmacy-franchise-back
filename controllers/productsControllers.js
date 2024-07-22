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
  const { page = 1, limit = 3, category, q } = req.query;
  const skip = (page - 1) * limit;
  const regex = new RegExp(q, "i"); // 'i' makes the search case insensitive
  const query =
    category && q
      ? { category, name: regex }
      : category
      ? { category }
      : { name: regex };

  const result = query
    ? await listProductsByFilter(query, { skip, limit })
    : await listProducts({ skip, limit });
  // console.log(JSON.stringify(result, null, 2));
  if (!result) {
    throw HttpError(404);
  }
  const total = await getProductsCountByFilter(category);
  // console.log(id);
  res.json({ result, total });
};

const getAllShopProducts = async (req, res) => {
  const { shopId } = req.params;
  const { page = 1, limit = 3, category, q } = req.query;
  const skip = (page - 1) * limit;
  const regex = new RegExp(q, "i"); // 'i' makes the search case insensitive
  const query =
    category && q
      ? { shop: shopId, category, name: regex }
      : category
      ? { shop: shopId, category }
      : q
      ? { shop: shopId, name: regex }
      : { shop: shopId };

  const result = await listProductsByFilter(query, { skip, limit });
  if (!result) {
    throw HttpError(404);
  }
  const total = await getProductsCountByFilter({ shop: shopId });
  res.json({ result, total });
};

const getProductInfo = async (req, res) => {
  const { productId: _id, shopId: shop } = req.params;
  const result = await getProductById({ _id, shop });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const deleteProduct = async (req, res) => {
  const { _id: owner } = req.user;
  const { productId: _id, shopId: shop } = req.params;

  // const { photo, name, price, description, suppliers, stock, category } =
  //   await findProduct({
  //     _id,
  //   });
  // data = { photo, name, price, description, suppliers, stock, category };
  // delete data.shop;
  // delete data.owner;

  // const result = await removeProductByFilter({ _id, owner });
  const result = await updateByFilter(
    { _id, shop, owner },
    { shop: null, owner: null }
  );
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
  // console.log(req.body);
  const { _id: owner } = req.user;
  const { productId: _id, shopId: shop } = req.params;

  if (req.file?.path) {
    const { url: photo } = await cloudinary.uploader.upload(req.file.path, {
      folder: "productImges",
    });
    const { path: oldPath } = req.file;

    await fs.rm(oldPath);
    const result = await updateByFilter(
      { _id, shop, owner },
      { ...req.body, photo }
    );
    if (!result) {
      throw HttpError(404);
    }
    res.status(200).json(result);
  } else {
    console.log(req.body);
    if (Object.keys(req.body).length === 0) {
      throw HttpError(400, "Body must have at least one field");
    }
    const { photo } = await findProduct({ _id });
    const result = await updateByFilter(
      { _id, shop, owner },
      { ...req.body, photo }
    );
    if (!result) {
      throw HttpError(404);
    }
    res.status(200).json(result);
  }
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
