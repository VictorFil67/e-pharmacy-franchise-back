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

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODQxYWYwNTRlNDZmNGVmZmQxZDJhNCIsImlhdCI6MTcyMDAwMzkyNiwiZXhwIjoxNzIwMDA3NTI2fQ.ixAUQmNUfElPM56shdhPxwsK5QQK_e2RBWimgXN4zvA",
//     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODQxYWYwNTRlNDZmNGVmZmQxZDJhNCIsImlhdCI6MTcyMDAwMzkyNiwiZXhwIjoxNzIwNjA4NzI2fQ.fx4pIWwkoVumLx6H1zQYLip_56IWo9naj89YD00kYyQ"

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2RjMWVjODU1MzkzOGE0MTc1ZDg2MCIsImlhdCI6MTcyMDAwMzQ1NCwiZXhwIjoxNzIwMDA3MDU0fQ.5TAgCKXKDaXWezGxJthw6JPXH6Y01-Ajl4k16QWx93c",
//     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2RjMWVjODU1MzkzOGE0MTc1ZDg2MCIsImlhdCI6MTcyMDAwMzQ1NCwiZXhwIjoxNzIwNjA4MjU0fQ.b3Q2IUsii_YSfXyw2O4Ij6iYJGzIgDDRiN-N2R4olNY"
