import express from "express";
import authtenticate from "../middlewares/authenticate.js";
import statisticsControllers from "../controllers/statisticsControllers.js";

const statisticsRouter = express.Router();

statisticsRouter.use(authtenticate);

const { getStatistics } = statisticsControllers;

statisticsRouter.get("/statistics", getStatistics);

export default statisticsRouter;
