import controller from "../control/user.control";
import express from "express";

const usersRoutes = express.Router();

// usersRoutes.post("/api/deleteUserAndTrees", controller.deleteUserAndTrees);

// usersRoutes.get("/api/allUsers", controller.allUsers);

usersRoutes.post("/api/postUser", controller.registeraccount);

module.exports = usersRoutes;
