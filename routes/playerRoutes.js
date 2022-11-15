const express = require('express');
const Router = express.Router();

const { getPlayer, addPlayer, playerRanking, reportPlayer, unreportPlayer } = require('../controllers/playerControllers');

Router.route('/:playerUserName').get(getPlayer);
Router.route('/addPlayer').post(addPlayer);
Router.route('/:playerUserName/playerRanking').post(playerRanking);
Router.route('/:playerUserName/reportPlayer').post(reportPlayer);
Router.route('/:playerUserName/unreportPlayer').post(unreportPlayer);

module.exports = Router;