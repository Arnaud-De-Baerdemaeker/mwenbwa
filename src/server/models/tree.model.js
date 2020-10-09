import mongoose from "mongoose";

const treesSchema = new mongoose.Schema(
    {
        name: {type: String},
        leaves: {type: Number},
        hauteur_totale: {type: Number},
        diametre_cime: {type: Number},
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
