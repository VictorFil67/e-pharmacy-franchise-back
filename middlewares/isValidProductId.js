import { isValidObjectId } from "mongoose";
import HttpError from "../helpers/HttpError.js";

const isValidProductId = (req, res, next) => {
  const { productId } = req.params;
  if (!isValidObjectId(productId)) {
    return next(HttpError(404, `${id} is not valid id`));
  }
  next();
};

export default isValidProductId;
