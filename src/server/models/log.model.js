import mongoose from "mongoose";

const Schema = mongoose.Schema;

const logSchema = new Schema(
    {
        playerId: {type: String},
        playerUsername: {type: String},
        playerEmail: {type: String},
        action: {type: String},
        dateTime: {type: Date, default: Date.now},
    },
    {collection: "logs"},
);

module.exports = mongoose.model("logs", logSchema);
