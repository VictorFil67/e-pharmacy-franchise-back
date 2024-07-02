import Product from "../models/Product.js";

export function listProducts() {
  return Product.find();
}

export function listProductsByFilter(filter, query) {
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

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODQxYWYwNTRlNDZmNGVmZmQxZDJhNCIsImlhdCI6MTcxOTkzMzc0NSwiZXhwIjoxNzE5OTM3MzQ1fQ.3jdHWtrLYiu5y8waNArY9iK6HWsyJfUKhZ30tGsiQw4",
//     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODQxYWYwNTRlNDZmNGVmZmQxZDJhNCIsImlhdCI6MTcxOTkzMzc0NSwiZXhwIjoxNzIwNTM4NTQ1fQ.faTDo8bI2cquY-sWAojMa7EabCcE13t-RpWKDNPEFJ4"

//  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2RjMWVjODU1MzkzOGE0MTc1ZDg2MCIsImlhdCI6MTcxOTk0MzU5NCwiZXhwIjoxNzE5OTQ3MTk0fQ.VK0CJ-gas8Uig6gI66tC-8LS0sUOcyoA8AwTVvy65pk",
//     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2RjMWVjODU1MzkzOGE0MTc1ZDg2MCIsImlhdCI6MTcxOTk0MzU5NCwiZXhwIjoxNzIwNTQ4Mzk0fQ.dMLwL17DB054qW50ZNVd_uvN2754GLjX04G81HOeXtk"
