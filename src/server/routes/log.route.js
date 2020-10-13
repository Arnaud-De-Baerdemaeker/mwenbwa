import controller from "../control/log.control";
// const controller = require("../control/log.control");
import express from "express";

const logRoutes = express.Router();

module.exports = logRoutes.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept",
    );
    next();
});

logRoutes.get("/api/getLogs", controller.getLogs);

logRoutes.post("/api/postLog", controller.postLog);
