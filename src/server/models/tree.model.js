import mongoose from "mongoose";

const treesSchema = new mongoose.Schema(
    {
        name: {type: String, default: "For sale"},
        leaves: {type: Number},
        sci_name: {type: String},
        geoloc: {
            lat: {type: Number},
            lon: {type: Number},
        },
        nom_complet: {type: String},
        owner: [{type: String, default: "For sale"}],
        comments: [
            {
                name: {type: String},
                comment: {type: String},
            },
        ],
        lock: {type: Boolean, default: false},
    },
    {collection: "trees"},
);

module.exports = mongoose.model("trees", treesSchema);
