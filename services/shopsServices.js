import Shop from "../models/Shop.js";
import bcrypt from "bcrypt";

// export function listContacts() {
//   return Contact.find();
// }

// export function listContactsByFilter(filter, query) {
//   return Contact.find(filter, "", query);
// }

// export function getContactById(contactId) {
//   return Contact.findById(contactId);
// }

export function getShopByFilter(filter) {
  return Shop.findOne(filter);
}

// export function removeContact(contactId) {
//   return Contact.findByIdAndDelete(contactId);
// }
// export function removeContactByFilter(filter) {
//   return Contact.findOneAndDelete(filter);
// }

export async function addShop(data) {
  const { password } = data;
  const hashPassword = await bcrypt.hash(password, 10);
  const hash = { ...data, password: hashPassword };
  return Shop.create(hash);
}

// export function updateContactById(contactId, data) {
//   return Contact.findByIdAndUpdate(contactId, data);
// }

export async function updateShopByFilter(filter, data) {
  const { password } = data;
  if (password) {
    const hashPassword = await bcrypt.hash(password, 10);
    const hash = { ...data, password: hashPassword };
    return Shop.findOneAndUpdate(filter, hash);
  } else {
    return Shop.findOneAndUpdate(filter, data);
  }
}

// export function updateStatusContactById(contactId, data) {
//   return Contact.findByIdAndUpdate(contactId, data);
// }

// export function updateStatusContactByFilter(filter, data) {
//   return Contact.findOneAndUpdate(filter, data);
// }
