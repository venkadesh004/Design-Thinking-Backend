const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    playerName: {
        type: "String",
        required: true
    },
    playerUserName: {
        type: "String",
        required: false
    },
    playerDist: {
        type: "String",
        required: true,
    },
    playerEmail: {
        type: "String",
        required: true
    },
    playerPhone: {
        type: "String",
        required: true
    },
    gamesApplied: {
        type: "Number",
        required: false
    },
    gamesPlayed: {
        type: "Number",
        required: false
    },
    gamesWon: {
        type: "Number",
        required: false
    },
    playerReports: {
        type: "Boolean",
        required: true,
    },
    playerCertificates: {
        type: 'Array',
        required: false
    },
    playerStats: {
        type: 'Array',
        required: false
    }
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;