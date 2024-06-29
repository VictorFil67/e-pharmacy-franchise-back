import Shop from "../models/Shop.js";

export function listContacts() {
  return Contact.find();
}

export function listContactsByFilter(filter, query) {
  return Contact.find(filter, "", query);
}

export function getContactById(contactId) {
  return Contact.findById(contactId);
}

export function getShopByFilter(filter) {
  return Shop.findOne(filter);
}

export function removeContact(contactId) {
  return Contact.findByIdAndDelete(contactId);
}
export function removeContactByFilter(filter) {
  return Contact.findOneAndDelete(filter);
}

export function addShop(data) {
  return Shop.create(data);
}

export function updateContactById(contactId, data) {
  return Contact.findByIdAndUpdate(contactId, data);
}

export function updateContactByFilter(filter, data) {
  return Contact.findOneAndUpdate(filter, data);
}

export function updateStatusContactById(contactId, data) {
  return Contact.findByIdAndUpdate(contactId, data);
}

export function updateStatusContactByFilter(filter, data) {
  return Contact.findOneAndUpdate(filter, data);
}
