import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import { getShopStatistics } from "../services/statisticServices.js";

const getStatistics = async (req, res) => {
  const result = await getShopStatistics();
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

export default {
  getStatistics: ctrlWrapper(getStatistics),
};
