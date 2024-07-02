import Product from "../models/Product.js";

export function listProducts() {
  return Product.find();
}

// export function listContactsByFilter(filter, query) {
//   return Contact.find(filter, "", query);
// }

// export function getContactById(contactId) {
//   return Contact.findById(contactId);
// }

// export function getShopByFilter(filter) {
//   return Shop.findOne(filter);
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
