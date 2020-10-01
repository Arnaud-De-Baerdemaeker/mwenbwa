/* eslint-disable no-console */
import mongoose from "mongoose";

const ConnectionMongoDb = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI, {
            useCreateIndex: true,
            authSource: "admin",
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = ConnectionMongoDb;
