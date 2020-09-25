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
// import {addIdleLeaves, removeIdleLeaves} from "./control/user.control";

const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require('mongoose');
// const express = require("express");
import express from "express";
const app = express();
import * as dotenv from "dotenv";


const {APP_PORT} = process.env;
dotenv.config();
console.log(process.env);
const corsOptions = {
    origin: "http://localhost:8080",
};

app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
});

const data = (data-trees).find({});
console.log(data)
app.get("/*", (req,res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"), err => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World! hahahah");
});
app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
// addIdleLeaves();
// removeIdleLeaves();

