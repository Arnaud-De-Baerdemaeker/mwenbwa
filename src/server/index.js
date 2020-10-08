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
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import express from "express";
import treesRoutes from "./routes/tree.route";
import userRoutes from "./routes/user.route";
// import authRoutes from "./routes/auth.route";
import * as dotenv from "dotenv";
import TreeShema from "./models/tree.model";

const app = express();

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

// TreeShema.find()
//     .limit(20)
//     .then(resp => {
//         resp.forEach(res1 => {
//             console.log(res1.nom_complet);
//         });
//     });


app.use(treesRoutes);
app.use(userRoutes);
// app.use(authRoutes);
app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
