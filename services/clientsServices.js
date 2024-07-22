import Client from "../models/Client.js";

export function getShopClients() {
  return Client.find();
}

// "clients":["669e765d41705e3b59c3f834","669e765d41705e3b59c3f835","669e765d41705e3b59c3f836", "669e765d41705e3b59c3f837","669e765d41705e3b59c3f838"]
