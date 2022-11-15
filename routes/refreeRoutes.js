const express = require('express');
const Router = express.Router();

const { getRefree, addRefree, reportRefree, unreportRefree } = require('../controllers/refreeControllers');

Router.route('/:refreeUserName').get(getRefree);
Router.route('/addRefree').post(addRefree);
Router.route('/:refreeUserName/reportRefree').post(reportRefree);
Router.route('/:refreeUserName/unreportRefree').post(unreportRefree);

module.exports = Router;