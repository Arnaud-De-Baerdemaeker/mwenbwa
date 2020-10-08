/* eslint-disable no-undef */
/* eslint-disable no-sync */

import db from "../models/index";
const User = db.user;

module.exports = {
    async signup(req, res) {
        try {
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: (req.body.password, 8),
                color: req.body.color,
                leaves: 0,
            });
            await user.save((err, resp) => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }

                addFirstLeaves(resp);
                addFirstTrees(resp);
                addFirstTrees(resp);
                addFirstTrees(resp);

                app.post("/api/auth/signin", signin);
                res.send({message: "User was registered successfully!"});
            });
        } catch (error) {
            res.status(400).json({message: "Error !!"});
        }
    },
};

exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email,
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }

        if (!user) {
            res.status(404).send({message: "User Not found."});
            return;
        }

        const passwordIsValid = (req.body.password, user.password);

        if (!passwordIsValid) {
            res.status(401).send({
                // accessToken: null,
                message: "Invalid Password!",
            });
        }

        // const token = jwt.sign({id: user.id}, config.secret, {
        //     expiresIn: 86400, // 24 hours
        // });

        // res.status(200).send({
        //     _id: user._id,
        //     username: user.username,
        //     email: user.email,
        //     color: user.color,
        //     leaves: user.leaves,
        //     accessToken: token,
        // });
    });
};

// USER PROFILE

exports.resetPassword = req => {
    // eslint-disable-next-line consistent-return
    User.findById(req.body.id, (err, doc) => {
        if (err) {
            return false;
        }
        doc.password = (req.body.password, 10);
        doc.save();
    });
};

exports.deleteUser = req => {
    // eslint-disable-next-line consistent-return
    User.findByIdAndRemove(req.body.id, err => {
        if (err) {
            return false;
        }
    });
};
