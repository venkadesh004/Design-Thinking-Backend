const Association = require('../models/Association');

const getAssociation = (req, res) => {
    Association.findOne({
        associationUserName: req.params.associationUserName
    }).then((data) => {
        if (!data.associationReport) {
            res.send(data); 
        } else {
            res.send("ID Reported");
        }
    })
};

const addAssociation = async (req, res) => {
    try {
        const associationData = req.body;
        console.log(associationData);
        await Association.find({associationUserName: associationData.associationUserName}).then((data) => {
            console.log(data.length);
            if (data.length == 0) {
                Association.insertMany(associationData).then(result => {
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

const reportAssociation = async (req, res) => {

    deleteAssociation = () => {
        Association.deleteOne({
            associationUserName: req.params.associationUserName
        }).then((data) => {
            console.log(data);
        });
    }

    insertAssociation = (newAssociationVal) => {
        Association.insertMany(newAssociationVal).then(result => {
            res.sendStatus(201).json(result);
        }).catch(err => {
            res.send(err);
        });
    }

    try {
        await Association.findOne({
            associationUserName: req.params.associationUserName
        }).then((data) => {
            if (data == null) {
                res.send("Data not found");
            } else {
                data.associationReport = true;

                deleteAssociation();

                insertAssociation(data);
            }
        });
    } catch (err) {
        console.log(err);
    }
};

const unreportAssociation = async (req, res) => {

    deleteAssociation = () => {
        Association.deleteOne({
            associationUserName: req.params.associationUserName
        }).then((data) => {
            console.log(data);
        });
    }

    insertAssociation = (newAssociationVal) => {
        Association.insertMany(newAssociationVal).then(result => {
            res.sendStatus(201).json(result);
        }).catch(err => {
            res.send(err);
        });
    }

    try {
        await Association.findOne({
            associationUserName: req.params.associationUserName
        }).then((data) => {
            if (data == null) {
                res.send("Data not found");
            } else {
                data.associationReport = false;

                deleteAssociation();

                insertAssociation(data);
            }
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports.getAssociation = getAssociation;
module.exports.addAssociation = addAssociation;
module.exports.reportAssociation = reportAssociation;
module.exports.unreportAssociation = unreportAssociation;