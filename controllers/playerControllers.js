const Player = require('../models/Players');

const getPlayer = (req, res) => {
    Player.findOne({
        playerUserName: req.params.playerUserName
    }).then((data) => {
        if (!data.playerReports) {
            res.send(data);
        } else {
            res.send("ID Reported");
        }
    })
};

const addPlayer = async (req, res) => {
    try {
        const playerData = req.body;
        console.log(playerData);
        await Player.find({playerUserName: playerData.playerUserName}).then((data) => {
            console.log(data.length);
            if (data.length == 0) {
                Player.insertMany(playerData).then(result => {
                    res.sendStatus(201).json(result);
                }).catch(err => {
                    res.sendStatus(500).json({err: "Failed to Add User"});
                });
            } else {
                res.send("Already A user exits");
            }
        });
    } catch (err) {
        console.log(err);
    }
};

const playerRanking = async (req, res) => {

    deletePlayer = () => {
        Player.deleteOne({
            playerUserName: req.params.playerUserName
        }).then((data) => {
            console.log(data);
        });
    }

    insertPlayer = (newPlayerVal) => {
        Player.insertMany(newPlayerVal).then(result => {
            res.sendStatus(201).json(result);
        }).catch(err => {
            res.send(err);
        });
    }

    try {
        const playerRankingUpdate = req.body;
        console.log(playerRankingUpdate);
        await Player.findOne({
            playerUserName: req.params.playerUserName
        }).then((data) => {
            if (data.length == 0) {
                res.send("Data not found");
            } else {
                arr = data.playerStats;

                console.log(arr);

                for (var i=0; i<arr.length; i++) {
                    arr[i].push(playerRankingUpdate.playerRankingUpdate[i]);
                };

                console.log(arr);

                certificate = data.playerCertificates;

                console.log(certificate);

                certificate.push(playerRankingUpdate.playerCertificates);

                const newPlayerVal = data;

                deletePlayer();

                console.log("Player removed");

                console.log(newPlayerVal);

                insertPlayer(newPlayerVal);

                console.log("Player Updated");
            }
        });
    } catch (err) {
        console.log(err);
    }
};

const reportPlayer = async (req, res) => {

    deletePlayer = () => {
        Player.deleteOne({
            playerUserName: req.params.playerUserName
        }).then((data) => {
            console.log(data);
        });
    }

    insertPlayer = (newPlayerVal) => {
        Player.insertMany(newPlayerVal).then(result => {
            res.sendStatus(201).json(result);
        }).catch(err => {
            res.send(err);
        });
    }

    try {
        await Player.findOne({
            playerUserName: req.params.playerUserName
        }).then((data) => {
            if (data == null) {
                res.send("Data not found");
            } else {
                data.playerReports = true;

                deletePlayer();

                insertPlayer(data);
            }
        });
    } catch (err) {
        console.log(err);
    }
};

const unreportPlayer = async (req, res) => {

    deletePlayer = () => {
        Player.deleteOne({
            playerUserName: req.params.playerUserName
        }).then((data) => {
            console.log(data);
        });
    }

    insertPlayer = (newPlayerVal) => {
        Player.insertMany(newPlayerVal).then(result => {
            res.sendStatus(201).json(result);
        }).catch(err => {
            res.send(err);
        });
    }

    try {
        await Player.findOne({
            playerUserName: req.params.playerUserName
        }).then((data) => {
            if (data == null) {
                res.send("Data not found");
            } else {
                data.playerReports = false;

                deletePlayer();

                insertPlayer(data);
            }
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports.getPlayer = getPlayer;
module.exports.addPlayer = addPlayer;
module.exports.playerRanking = playerRanking;
module.exports.reportPlayer = reportPlayer;
module.exports.unreportPlayer = unreportPlayer;