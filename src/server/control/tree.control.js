/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable unicorn/no-abusive-eslint-disable */

import Tree from "../models/tree.model";

module.exports = {
    async allTrees(req, res) {
        try {
            const TreeList = await Tree.find();
            res.send(TreeList);
            // console.log(TreeList);
        } catch (error) {
            res.status(400).json({message: "Error !!"});
        }
    },
};
