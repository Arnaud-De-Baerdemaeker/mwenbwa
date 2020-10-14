/* eslint-disable consistent-return */
/* eslint-disable no-console */
// import db from "../models/index";
import bcrypt from "bcryptjs";
import jwt from "../middlewares/auth-jwt";
import Tree from "../models/tree.model";
import User from "../models/user.model";
// import mongoose from "mongoose";
// const Tree = db.tree;
// const User = db.user;

const addFirstLeaves = async (req, res) => {
    try {
        const usersLeaves = await User.find({leaves: {$exists: true}});
        // const numberOfUsers = await usersLeaves.count;
        let userCount = 0;
        let leaveCount = 0;
        usersLeaves.forEach(user => {
            userCount += 1;
            leaveCount += user.leaves;
        });
        console.log(userCount);
        console.log(leaveCount);
        return leaveCount / userCount;
    } catch (error) {
        return res.status(400).json({message: "Impossible"});
    }
};

module.exports = {
    async allUsers(req, res) {
        try {
            await User.find()
                .sort([["leaves", -1]])
                .exec((err, allUsers) => {
                    if (err) {
                        res.status(500).send({message: err});
                        return;
                    }

                    if (!allUsers) {
                        res.status(404).send({message: "Users Not found."});
                        return;
                    }

                    res.json(allUsers);
                });
        } catch (error) {
            res.status(400).json({message: "Error !!"});
        }
    },
    async registeraccount(req, res) {
        try {
            const {username, email, password, color} = req.body;
            const userExist = await User.findOne({username});
            const emailExist = await User.findOne({email});
            const colorExist = await User.findOne({color});
            if (emailExist) {
                return res.status(400).json({
                    message:
                        "Email already in use ! Maybe you want to connect ?",
                });
            } else if (userExist) {
                return res
                    .status(400)
                    .json({message: "Username already taken !"});
            } else if (colorExist) {
                return res
                    .status(400)
                    .json({message: "This color is already in use !"});
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const startLeave = await addFirstLeaves();

            await User.create({
                username,
                email,
                password: hashedPassword,
                color,
                leaves: startLeave,
            });
            return res.status(200).json({message: `User has been created !`});
        } catch (error) {
            return res
                .status(400)
                .json({message: `Impossible to create account ${error}`});
        }
    },

    async deleteUser(req, res) {
        try {
            await User.deleteOne({username: req.body.username});
            res.json({message: "Account successfully deleted !"});
        } catch (error) {
            res.status(400).json({message: "Error !!"});
        }
    },

    async login(req, res) {
        try {
            const {username, password} = req.body;
            const userLog = await User.findOne({username});
            if (userLog) {
                bcrypt.compare(
                    password,
                    userLog.password,

                    (err, res1) => {
                        if (res1) {
                            res.status(201).json({
                                userId: userLog._id,
                                token: jwt.generateToken(userLog),
                            });
                            return;
                        }
                        return res
                            .status(403)
                            .json({error: "invalid Paswword"});
                    },
                );
            }
            return res.status(404);
            // .json({error: "User not found!"});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    async addIdleLeaves(req, res) {
        try {
            await User.find({}).exec((err, users) => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }
                // console.log(users);
                if (!users) {
                    res.status(404).send({
                        message: "Failed! User not found!",
                    });
                    return;
                }

                users.forEach(user => {
                    Tree.find({owner: user.username}).exec(
                        (error, allTrees) => {
                            if (error) {
                                console.error(error);
                                return;
                            }
                            let totalLeavesTrees = 0;
                            const leavesUser = user.leaves;
                            let newLeavesUser = 0;
                            allTrees.forEach(tree => {
                                totalLeavesTrees += tree.leaves;
                            });

                            newLeavesUser = Math.floor(
                                leavesUser + totalLeavesTrees,
                            );
                            user.leaves = newLeavesUser;

                            user.save(erro => {
                                if (erro) {
                                    res.status(500).send({message: erro});
                                }
                            });

                            console.log(
                                `Add ${totalLeavesTrees} Leaves to ${user.username} total: ${user.leaves}`,
                            );
                        },
                    );
                });
            });
        } catch (error) {
            res.status(400).json({message: "Error !!"});
        }
    },

    async removeIdleLeaves(req, res) {
        try {
            await User.find({}).exec((err, users) => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }

                if (!users) {
                    res.status(404).send({
                        message: "Failed! User not found!",
                    });
                    return;
                }

                users.forEach(user => {
                    const leavesUser = user.leaves;
                    let newLeavesUser = 0;

                    newLeavesUser = Math.floor(leavesUser / 2);

                    user.leaves = newLeavesUser;

                    user.save(error => {
                        if (error) {
                            res.status(500).send({message: error});
                        }
                    });

                    console.log(
                        `Remove ${Math.floor(leavesUser / 2)} Leaves to ${
                            user.username
                        } total: ${user.leaves}`,
                    );
                });
            });
        } catch (error) {
            return res.status(400).json({message: "Error !!"});
        }
    },
};
