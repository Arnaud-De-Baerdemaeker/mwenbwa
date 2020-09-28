/* eslint-disable no-console */
const mongoose = require("mongoose");

const ConnectionMongoDb = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI, {
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
