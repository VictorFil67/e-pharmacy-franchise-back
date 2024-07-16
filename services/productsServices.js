import Product from "../models/Product.js";

export function listProducts({ skip, limit }) {
  return Product.find().skip(skip).limit(limit);
}

export function getProductsCountByFilter(filter) {
  return Product.countDocuments(filter);
}

export function listProductsByFilter(filter, query = {}) {
  return Product.find(filter, "", query);
}

export function getProductById(productId) {
  return Product.findById(productId);
}

export function removeProductByFilter(filter) {
  return Product.findOneAndDelete(filter);
}

export function createProduct(data) {
  return Product.create(data);
}
export const updateByFilter = (filter, data) =>
  Product.findOneAndUpdate(filter, data);

export const findProduct = (filter) => Product.findOne(filter);
