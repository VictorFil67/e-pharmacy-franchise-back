import Product from "../models/Product.js";

export function listProducts() {
  return Product.find();
}

// export function listContactsByFilter(filter, query) {
//   return Contact.find(filter, "", query);
// }

export function getProductById(contactId) {
  return Product.findById(contactId);
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

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2RjMWVjODU1MzkzOGE0MTc1ZDg2MCIsImlhdCI6MTcxOTkzNDEzNCwiZXhwIjoxNzE5OTM3NzM0fQ.kYKEyff3sMVs5XG5AJwzqZByTNoPub1mYfepfmSS--w",
// "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2RjMWVjODU1MzkzOGE0MTc1ZDg2MCIsImlhdCI6MTcxOTkzNDEzNCwiZXhwIjoxNzIwNTM4OTM0fQ.RMxPzRkVCnPdyIe8d1oK04AbvB5b4AGbQgbYKc8h9g8",
