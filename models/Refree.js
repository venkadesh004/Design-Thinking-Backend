const mongoose = require('mongoose');

const refreeSchema = new mongoose.Schema({
    refreeName: {
        type: "String",
        required: true,
    },
    refreeUserName: {
        type: "String",
        required: true,
    },
    refreePhone: {
        type: "String",
        required: true
    },
    refreeEmail: {
        type: "String",
        required: true
    },
    refreeGames: {
        type: "Array",
        required: true
    },
    refreeCounts: {
        type: "Number",
        required: false
    },
    refreeReports: {
        type: "Boolean",
        required: true
    }
});

const Refree = mongoose.model("Refree", refreeSchema);

module.exports = Refree;