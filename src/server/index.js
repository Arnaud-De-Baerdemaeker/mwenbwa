/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');
import express from "express";
const app = express();
import * as dotenv from "dotenv";
import {addIdleLeaves, removeIdleLeaves} from "./control/user.control";

const {APP_PORT} = process.env;
dotenv.config();
console.log(process.env);
const corsOptions = {
    origin: "http://localhost:8080",
};
app.use(cors(corsOptions));
app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require("./models/index");
const ConnectionMongoDb = require("./dbconnection");

ConnectionMongoDb();

// Routes
require("./routes/auth.route")(app);
require("./routes/user.route")(app);
require("./routes/tree.route")(app);
require("./routes/log.route")(app);

app.get("/*", (_req,res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"), err => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
addIdleLeaves();
removeIdleLeaves();