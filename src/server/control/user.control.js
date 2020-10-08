/* eslint-disable no-console */
import db from "../models/index";
import bcrypt from "bcryptjs";

const User = db.user;
// const Tree = db.trees;

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
};
