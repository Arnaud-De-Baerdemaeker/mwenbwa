import controller from "../control/log.control";
// const controller = require("../control/log.control");

module.exports = function (app) {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept",
        );
        next();
    });

    app.get("/api/getLogs", controller.getLogs);

    app.post("/api/postLog", controller.postLog);
};
