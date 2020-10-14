import controller from "../control/user.control";
import express from "express";

const usersRoutes = express.Router();

usersRoutes.post("/api/postUser", controller.registeraccount);

usersRoutes.delete("/api/deleteUser", controller.deleteUser);

usersRoutes.post("/api/login", controller.login);

// usersRoutes.post("/api/addFirstLeaves", controller.addFirstLeaves);

// usersRoutes.post("/api/addIdleLeaves", controller.addIdleLeaves);

// usersRoutes.post("/api/removeIdleLeaves", controller.removeIdleLeaves);

usersRoutes.get("/api/allUsers", controller.allUsers);

module.exports = usersRoutes;
