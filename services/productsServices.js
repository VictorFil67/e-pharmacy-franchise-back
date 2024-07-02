import Product from "../models/Product.js";

export function listProducts() {
  return Product.find();
}

// export function listContactsByFilter(filter, query) {
//   return Contact.find(filter, "", query);
// }

export function getProductById(productId) {
  return Product.findById(productId);
}

// export function getProductByFilter(filter) {
//   return Product.findOne(filter);
// }

// export function removeContact(contactId) {
//   return Contact.findByIdAndDelete(contactId);
// }
// export function removeContactByFilter(filter) {
//   return Contact.findOneAndDelete(filter);
// }

export function createProduct(data) {
  return Product.create(data);
}
export const updateByFilter = (filter, data) =>
  Product.findOneAndUpdate(filter, data);

// export function updateContactById(contactId, data) {
//   return Contact.findByIdAndUpdate(contactId, data);
// }

// export function updateShopByFilter(filter, data) {
//   return Shop.findOneAndUpdate(filter, data);
// }

// export function updateStatusContactById(contactId, data) {
//   return Contact.findByIdAndUpdate(contactId, data);
// }

// export function updateStatusContactByFilter(filter, data) {
//   return Contact.findOneAndUpdate(filter, data);
// }

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODQxYWYwNTRlNDZmNGVmZmQxZDJhNCIsImlhdCI6MTcxOTkzMzc0NSwiZXhwIjoxNzE5OTM3MzQ1fQ.3jdHWtrLYiu5y8waNArY9iK6HWsyJfUKhZ30tGsiQw4",
//     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODQxYWYwNTRlNDZmNGVmZmQxZDJhNCIsImlhdCI6MTcxOTkzMzc0NSwiZXhwIjoxNzIwNTM4NTQ1fQ.faTDo8bI2cquY-sWAojMa7EabCcE13t-RpWKDNPEFJ4"

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2RjMWVjODU1MzkzOGE0MTc1ZDg2MCIsImlhdCI6MTcxOTkzODI4MiwiZXhwIjoxNzE5OTQxODgyfQ.7pzWtY0Tl_p1Qg9J6B_Ookhl-XfRgunrwyBhcC1zU9o",
//     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2RjMWVjODU1MzkzOGE0MTc1ZDg2MCIsImlhdCI6MTcxOTkzODI4MiwiZXhwIjoxNzIwNTQzMDgyfQ.9EwG-7eDdKv5etkmbZxl1K2Mi6KlgWiI-Luv_YBOhWw"
