const mongoose = require('mongoose');

const associationScheme = new mongoose.Schema({
    associationName: {
        type: "String",
        required: true,
    },
    associationUserName: {
        type: "String",
        required: true
    },
    associationPhone: {
        type: "String",
        required: true
    },
    associationEmail: {
        type: "String",
        required: true
    },
    associationSports: {
        type: "String",
        required: true
    },
    associationAddress: {
        type: "String",
        required: true
    },
    associationDetails: {
        type: "String",
        required: true
    },
    associationReport: {
        type: "boolean",
        required: true,
    }
});

const Association = mongoose.model("Association", associationScheme);

module.exports = Association;