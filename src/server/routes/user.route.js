import controller from "../control/user.control";
import express from "express";

const usersRoutes = express.Router();

usersRoutes.post("/api/postUser", controller.registeraccount);

usersRoutes.delete("/api/deleteUser", controller.deleteUser);

// usersRoutes.get("/api/allUsers", controller.allUsers);

module.exports = usersRoutes;
