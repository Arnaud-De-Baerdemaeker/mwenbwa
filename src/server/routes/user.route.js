import controller from "../control/user.control";
// const controller = require("../control/user.control");
import express from "express";

const usersRoutes = express.Router();
// const app = express();

module.exports = usersRoutes.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept",
    );
    next();
});

usersRoutes.post("/api/deleteUserAndTrees", controller.deleteUserAndTrees);

usersRoutes.get("/api/allUsers", controller.allUsers);

usersRoutes.post("/api/getUser", controller.getUser);
