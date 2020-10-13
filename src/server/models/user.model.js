import mongoose from "mongoose";

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: {type: String},
        email: {type: String},
        password: {type: String},
        leaves: {type: Number},
        color: {type: String},
    }),
);

module.exports = User;
