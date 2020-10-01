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
import mongoose from "mongoose";
import express from "express";
import treesRoutes from "./routes/tree.route";
import * as dotenv from "dotenv";
import {addIdleLeaves, removeIdleLeaves} from "./control/user.control";
import TreeShema from "./models/tree.model";

const app = express();
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);



const {APP_PORT} = process.env;
dotenv.config();
console.log(process.env);
const corsOptions = {
    origin: "http://localhost:8080",
};
app.use(cors(corsOptions));
app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const ConnectionMongoDb = require("./dbconnection");

ConnectionMongoDb();

TreeShema.find()
    .limit(20)
    .then(resp => {
        resp.forEach(res1 => {
            console.log(res1.nom_complet);
        });
    });

// try {
//     mongoose.connect(process.env.ATLAS_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,

//     } );
//     console.log("mongoDB connected");

// } catch(error){
//     console.log(error);
// }

// app.get("/*", (_req,res) => {
//     res.sendFile(path.join(__dirname, "../client/index.html"), err => {
//         if (err) {
//             res.status(500).send(err);
//         }
//     });
// });

// app.get("/hello", (req, res) => {
//     console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
//     res.send("Hello, World!");
// });

app.use(treesRoutes);
app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
addIdleLeaves();
removeIdleLeaves();