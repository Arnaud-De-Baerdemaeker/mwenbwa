/* eslint-disable consistent-return */
/* eslint-disable no-console */
import db from "../models/index";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const User = db.user;
// const Tree = db.tree;

// module.exports = {
//     async allUsers(req, res) {
//         try {
//             await User.find()
//                 .sort([["leaves", -1]])
//                 .exec((err, allUsers) => {
//                     if (err) {
//                         res.status(500).send({message: err});
//                         return;
//                     }

//                     if (!allUsers) {
//                         res.status(404).send({message: "Users Not found."});
//                         return;
//                     }

//                     res.json(allUsers);
//                 });
//         } catch (error) {
//             res.status(400).json({message: "Error !!"});
//         }
//     },
// };

module.exports = {
    async registeraccount(req, res) {
        try {
            const {username, email, password, color, leaves} = req.body;
            const userExist = await User.findOne({username});
            const emailExist = await User.findOne({email});
            const colorExist = await User.findOne({color});
            // console.log(userExist);
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
            await User.create({
                username,
                email,
                password: hashedPassword,
                color,
                leaves,
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
        await User.findOne({email: req.body.email})
            .then(user => {
                if (!user) {
                    return res.status(401).json({error: "User not found!"});
                }
                bcrypt
                    .compare(req.body.password, user.password)
                    .then(valid => {
                        if (!valid) {
                            return res
                                .status(401)
                                .json({error: "Password incorrect!"});
                        }
                        res.status(200).json({
                            userId: user._id,
                            token: jwt.sign(
                                {userId: user._id},
                                "RANDOM_TOKEN_SECRET",
                                {expiresIn: "24h"},
                            ),
                        });
                    })
                    .catch(error => res.status(500).json({error}));
            })
            .catch(error => res.status(500).json({error}));
    },

    async addFirstLeaves(req, res) {
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

                let totUsersLeaves = 0;
                let usersLenght = -1;

                users.forEach(user => {
                    totUsersLeaves += user.leaves;
                    usersLenght += 1;
                });

                const usersLeaves = totUsersLeaves / usersLenght;

                User.findByIdAndUpdate(req._id, {leaves: usersLeaves}).exec(
                    error => {
                        if (error) {
                            res.status(500).send({message: error});
                        }
                    },
                );
            });
        } catch (error) {
            res.status(400).json({message: "Error !!"});
        }
    },

    //     addIdleLeaves(req, res) {
    //         User.find({}).exec((err, users) => {
    //             if (err) {
    //                 res.status(500).send({message: err});
    //                 return;
    //             }

    //             if (!users) {
    //                 res.status(404).send({
    //                     message: "Failed! User not found!",
    //                 });
    //                 return;
    //             }

    //             users.forEach(user => {
    //                 Tree.find({owner: user.username}).exec((error, allTrees) => {
    //                     if (error) {
    //                         console.error(error);
    //                     }

    //                     let totalLeavesTrees = 0;
    //                     const leavesUser = user.leaves;
    //                     let newLeavesUser = 0;

    //                     allTrees.forEach(tree => {
    //                         totalLeavesTrees += tree.leaves;
    //                     });

    //                     newLeavesUser = Math.floor(leavesUser + totalLeavesTrees);
    //                     user.leaves = newLeavesUser;

    //                     user.save(erro => {
    //                         if (erro) {
    //                             res.status(500).send({message: erro});
    //                         }
    //                     });

    //                     console.log(
    //                         `Add ${totalLeavesTrees} Leaves to ${user.username} total: ${user.leaves}`,
    //                     );
    //                 });
    //             });
    //         });
    //     },

    //     async removeIdleLeaves(req, res) {
    //         try {
    //             await User.find({}).exec((err, users) => {
    //                 if (err) {
    //                     res.status(500).send({message: err});
    //                     return;
    //                 }

    //                 if (!users) {
    //                     res.status(404).send({
    //                         message: "Failed! User not found!",
    //                     });
    //                     return;
    //                 }

    //                 users.forEach(user => {
    //                     const leavesUser = user.leaves;
    //                     let newLeavesUser = 0;

    //                     newLeavesUser = Math.floor(leavesUser / 2);

    //                     user.leaves = newLeavesUser;

    //                     user.save(async error => {
    //                         if (error) {
    //                             await res.status(500).send({message: error});
    //                         }
    //                     });

    //                     console.log(
    //                         `Remove ${Math.floor(leavesUser / 2)} Leaves to ${
    //                             user.username
    //                         } total: ${user.leaves}`,
    //                     );
    //                 });
    //             });
    //         } catch (error) {
    //             res.status(400).json({message: "Error !!"});
    //         }
    //     },
};
