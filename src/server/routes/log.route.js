import controller from "../control/log.control";

import express from "express";

const logRoutes = express.Router();

logRoutes.post("/api/postLog", controller.postLog);
logRoutes.get("/api/getLogs", controller.getLogs);
module.exports = logRoutes;
