const express = require('express');
const Router = express.Router();

const { getAssociation, addAssociation, reportAssociation, unreportAssociation } = require('../controllers/associationControllers');

Router.route('/:associationUserName').get(getAssociation);
Router.route('/addAssociation').post(addAssociation);
Router.route('/:associationUserName/reportAssociation').post(reportAssociation);
Router.route('/:associationUserName/unreportAssociation').post(unreportAssociation);

module.exports = Router;