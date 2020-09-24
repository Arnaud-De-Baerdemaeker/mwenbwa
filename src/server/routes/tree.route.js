const control = require("../control/tree.control");

module.exports = function (app) {
    app.get("/api/allTrees", control.allTrees);

    app.post("/api/buyTree", control.buyTree);

    app.post("/api/reBuyTree", control.reBuyTree);

    app.post("/api/lockTree", control.lockTree);

    app.post("/api/howManyTrees", control.howManyTrees);

    app.post("/api/addComment", control.addComment);

    app.post("/api/getValueTree", control.getValueTree);
};
