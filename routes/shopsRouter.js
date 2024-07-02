import express from "express";
import shopsControllers from "../controllers/shopsControllers.js";
import validateBody from "../decorators/validateBody.js";
import { createShopSchema, updateShopSchema } from "../schemas/shopsSchemas.js";
import isValidId from "../middlewares/isValidId.js";
import authtenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";
import productsControllers from "../controllers/productsControllers.js";
import isValidShopId from "../middlewares/isValidShopId.js";
import isValidProductId from "../middlewares/isValidProductId.js";

const shopsRouter = express.Router();

shopsRouter.use(authtenticate);

const {
  getAllContacts,
  getShopInfo,
  deleteContact,
  createShop,
  updateShop,
  updateStatusContact,
} = shopsControllers;

const {
  getAllProducts,
  getAllShopProducts,
  addProduct,
  updateProductImg,
  getProductInfo,
  updateProduct,
  deleteProduct,
} = productsControllers;

shopsRouter.get("/:shopId", isValidShopId, getShopInfo);

shopsRouter.post(
  "/create",
  upload.single("shopLogoURL"),
  validateBody(createShopSchema),
  createShop
);

shopsRouter.put(
  "/:shopId/update",
  upload.single("shopLogoURL"),
  isValidShopId,
  validateBody(updateShopSchema),
  updateShop
);

shopsRouter.get("/:shopId/all-products", getAllProducts);
shopsRouter.get("/:shopId/product", isValidShopId, getAllShopProducts);
shopsRouter.post("/:shopId/product/add", isValidShopId, addProduct);
shopsRouter.get(
  "/:shopId/product/:productId",
  isValidShopId,
  isValidProductId,
  getProductInfo
);
shopsRouter.put(
  "/:shopId/product/:productId/edit",
  isValidShopId,
  isValidProductId,
  updateProduct
);
shopsRouter.patch(
  "/:shopId/product/:productId/Img",
  upload.single("productImgURL"),
  isValidShopId,
  isValidProductId,
  updateProductImg
);
shopsRouter.delete(
  "/:shopId/product/:productId/delete",
  isValidShopId,
  isValidProductId,
  deleteProduct
);

export default shopsRouter;

// {
//   "shopName": "victor571",
//   "shopOwnerName": "victor57",
//   "shopEmail": "victor51@mail.com.ua",
//   "shopPhone": "+380671112233",
//   "shopStreet": "victory",
//   "shopCity": "kiyv",
//   "shopZip": "10000",
// "password": "88aA991*",
// "shopOwnDelivery": "Yes"
// }
