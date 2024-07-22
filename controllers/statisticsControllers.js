import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import { getShopClients } from "../services/clientsServices.js";
import { getShopStatistics } from "../services/statisticServices.js";

const getStatistics = async (req, res) => {
  const statisticsResult = await getShopStatistics();
  const recentCustomers = await getShopClients();
  if (!statisticsResult || !recentCustomers) {
    throw HttpError(404);
  }
  const result = {
    statisticsResult,
    recentCustomers,
  };
  res.json(result);
};

export default {
  getStatistics: ctrlWrapper(getStatistics),
  //   getClientProducts: ctrlWrapper(getClientProducts),
};
