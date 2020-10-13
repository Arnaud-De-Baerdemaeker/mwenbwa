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
            await Tree.find({name: "For sale"})
                .count()
                .exec((err, count) => {
                    if (err) {
                        res.status(500).send({message: err});
                        return;
                    }
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
    async buyTree(req, res) {
        try {
            await User.findById(req.body._id).exec((err, user) => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }

                if (!user) {
                    res.status(404).send({
                        message: "User not found!",
                    });
                    return;
                }

                Tree.findById(req.body._id).exec((error, tree) => {
                    if (error) {
                        res.status(500).send({message: error});
                        return;
                    }

                    if (!tree) {
                        res.status(404).send({message: "Tree Not found."});
                        return;
                    }

                    if (user.leaves < tree.leaves) {
                        res.send({message: "User doesn't have enough Leaves."});
                        return;
                    }

                    tree.owner.unshift(user.username);
                    tree.save(erro => {
                        if (erro) {
                            res.status(500).send({message: erro});
                        }
                    });

                    user.leaves = user.leaves - tree.leaves;
                    user.save(erro => {
                        if (erro) {
                            res.status(500).json({message: erro});
                        }
                    });
                });
            });
        } catch (error) {
            res.status(400).json({message: "Error !!"});
        }
    },
    async addComment(res, req) {
        try {
            await Tree.findById(req.body.idTree).exec((error, tree) => {
                if (error) {
                    res.status(500).json({message: error});
                    return;
                }

                if (!tree) {
                    res.status(404).json({message: "Tree Not found."});
                    return;
                }

                const name = req.body.username;
                const comment = req.body.comment;

                tree.comments.push({name, comment});
                tree.save(erro => {
                    if (erro) {
                        res.status(500).json({message: erro});
                    }
                });
            });
        } catch (error) {
            res.status(400).json({message: "Error !!"});
        }
    },
};
