const Refree = require('../models/Refree');

const getRefree = (req, res) => {
    Refree.findOne({
        refreeUserName: req.params.refreeUserName
    }).then((data) => {
        if (!data.refreeReports) {
            res.send(data);
        } else {
            res.send("ID reported");
        }
    })
};

const addRefree = async (req, res) => {
    try {
        const refreeData = req.body;
        console.log(refreeData);
        await Refree.find({refreeUserName: refreeData.refreeUserName}).then((data) => {
            console.log(data.length);
            if (data.length == 0) {
                Refree.insertMany(refreeData).then(result => {
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

const reportRefree = async (req, res) => {

    deleteRefree = () => {
        Refree.deleteOne({
            refreeUserName: req.params.refreeUserName
        }).then((data) => {
            console.log(data);
        });
    }

    insertRefree = (newRefreeVal) => {
        Refree.insertMany(newRefreeVal).then(result => {
            res.sendStatus(201).json(result);
        }).catch(err => {
            res.send(err);
        });
    }

    try {
        await Refree.findOne({
            refreeUserName: req.params.refreeUserName
        }).then((data) => {
            if (data == null) {
                res.send("Data not found");
            } else {
                data.refreeReports = true;

                deleteRefree();

                insertRefree(data);
            }
        });
    } catch (err) {
        console.log(err);
    }
};

const unreportRefree = async (req, res) => {

    deleteRefree = () => {
        Refree.deleteOne({
            refreeUserName: req.params.refreeUserName
        }).then((data) => {
            console.log(data);
        });
    }

    insertRefree = (newRefreeVal) => {
        Refree.insertMany(newRefreeVal).then(result => {
            res.sendStatus(201).json(result);
        }).catch(err => {
            res.send(err);
        });
    }

    try {
        await Refree.findOne({
            refreeUserName: req.params.refreeUserName
        }).then((data) => {
            if (data == null) {
                res.send("Data not found");
            } else {
                data.refreeReports = false;

                deleteRefree();

                insertRefree(data);
            }
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports.getRefree = getRefree;
module.exports.addRefree = addRefree;
module.exports.reportRefree = reportRefree;
module.exports.unreportRefree = unreportRefree;