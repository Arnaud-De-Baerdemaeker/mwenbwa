import treeControl from "../control/tree.control";
import express from "express";

const routes = express.Router();

routes.get("/api/allTrees", treeControl.allTrees);

routes.post("/api/buyTree", treeControl.buyTree);

routes.post("/api/reBuyTree", treeControl.reBuyTree);

routes.post("/api/lockTree", treeControl.lockTree);

routes.post("/api/howManyTrees", treeControl.howManyTrees);

routes.post("/api/addComment", treeControl.addComment);

routes.post("/api/getValueTree", treeControl.getValueTree);
module.exports = routes;
