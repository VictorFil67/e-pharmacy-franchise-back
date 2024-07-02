import { isValidObjectId } from "mongoose";
import HttpError from "../helpers/HttpError.js";

const isValidShopId = (req, res, next) => {
  const { shopId } = req.params;
  if (!isValidObjectId(shopId)) {
    return next(HttpError(404, `${id} is not valid id`));
  }
  next();
};

export default isValidShopId;
