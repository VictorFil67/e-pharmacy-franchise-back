import Product from "../models/Product.js";
import mongoose from "mongoose";
import HttpError from "../helpers/HttpError.js";

export function listProducts({ skip, limit }) {
  return Product.find().skip(skip).limit(limit);
}

export function getProductsCountByFilter(filter) {
  return Product.countDocuments(filter);
}

export function listProductsByFilter(filter, query = {}) {
  console.log(filter);
  return Product.find(filter, "", query);
}

export function getProductById({ _id, shop }) {
  return Product.findById({ _id, shop });
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

export function getClient(targetValue) {
  // if (!mongoose.Types.ObjectId.isValid(targetValue)) {
  //   throw HttpError(400, "Invalid ObjectId");
  // }

  // const targetObjectId = new mongoose.Types.ObjectId(targetValue);
  return Product.find({ clients: targetValue });
}
// export function getClient() {
//   return Product.find({
//     reviews: {
//       $elemMatch: {
//         rating: 5,
//       },
//     },
//   });
// }
