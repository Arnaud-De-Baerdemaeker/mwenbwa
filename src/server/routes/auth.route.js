/* eslint-disable no-undef */
import verifySignUp from "../middlewares/verify-sign-up";
import controller from "../control/auth.control";
// const {verifySignUp} = require("../middlewares");
// const controller = require("../control/auth.control");
import express from "express";

const authRoutes = express.Router();

module.exports = authRoutes.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept",
    );
    next();
});

authRoutes.post(
    "/api/auth/signup",
    [verifySignUp.checkDuplicateUsernameOrEmailOrColor],
    controller.signup,
);

// authRoutes.post("/api/auth/signin", controller.signin);

// authRoutes.post("/api/auth/resetPassword", controller.resetPassword);
