/* eslint-disable no-undef */
import verifySignUp from "../middlewares/verify-sign-up";
import controller from "../control/auth.control";
// const {verifySignUp} = require("../middlewares");
// const controller = require("../control/auth.control");

module.exports = function (app) {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept",
        );
        next();
    });

    app.post(
        "/api/auth/signup",
        [verifySignUp.checkDuplicateUsernameOrEmailOrColor],
        controller.signup,
    );

    app.post("/api/auth/signin", controller.signin);

    app.post("/api/auth/resetPassword", controller.resetPassword);
};