import Statistic from "../models/Statistic.js";

export function getShopStatistics() {
  return Statistic.findOne();
}
