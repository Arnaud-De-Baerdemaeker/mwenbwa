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
    async addTrees(req, res) {
        try {
            const treesForSale = await Tree.find({name: "For sale"})
                .count()
                .exec((err, count) => {
                    if (err) {
                        res.status(500).send({message: err});
                        return;
                    }
                    // console.log(treesForSale);
                    const random = Math.floor(Math.random() * count);

                    Tree.findOne()
                        .skip(random)
                        .exec((error, tree) => {
                            if (error) {
                                res.status(500).send({message: error});
                                return;
                            }
                            tree.save(erro => {
                                if (erro) {
                                    res.status(500).send({message: erro});
                                }
                            });
                        });
                });
        } catch (error) {
            res.status(400).json({message: "Error !!"});
        }
    },
    async deleteTreeNull(req, res) {
        try {
            const treeArray = await Tree.find({geoloc: "null"});
            console.log(treeArray);
            treeArray.forEach(async element => {
                try {
                    await Tree.deleteOne({
                        __id: element.id,
                    });
                } catch (error) {
                    console.log(error);
                }
            });
        } catch (error) {
            res.status(400).json({message: "Error !!"});
        }
    },
};
