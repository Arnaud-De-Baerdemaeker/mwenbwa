import db from "../models/index";

const Log = db.log;

module.exports = {
    async getLogs(req, res) {
        try {
            await Log.find({})
                .limit(20)
                .sort([["dateTime", -1]])
                .exec((err, logs) => {
                    if (err) {
                        res.status(500).send({message: err});
                        return;
                    }

                    res.json(logs);
                });
        } catch (error) {
            res.status(400).json({message: "Error !!"});
        }
    },
};

module.exports = {
    async postLog(req, res) {
        try {
            const log = await new Log({
                playerId: req.body.playerId,
                playerUsername: req.body.playerUsername,
                playerEmail: req.body.playerEmail,
                action: req.body.action,
            });

            await log.save(err => {
                if (err) {
                    res.status(500).send({message: err});
                }
            });
        } catch (error) {
            res.status(400).json({message: "Error !!"});
        }
    },
};
