import express from "express";
import authtenticate from "../middlewares/authenticate.js";
import statisticsControllers from "../controllers/statisticsControllers.js";
import productsControllers from "../controllers/productsControllers.js";

const statisticsRouter = express.Router();

statisticsRouter.use(authtenticate);

const { getStatistics } = statisticsControllers;
const { getClientProducts } = productsControllers;

statisticsRouter.get("/statistics", getStatistics);
statisticsRouter.get("/statistics/:clientId/goods", getClientProducts);

export default statisticsRouter;
