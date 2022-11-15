const express = require('express');
const connectDB = require('./db/db');

const playerRoutes = require('./routes/playerRoutes');
const refreeRoutes = require('./routes/refreeRoutes');
const associationRoutes = require('./routes/associationRoutes');

const bodyParser = require('body-parser');

const app = express();

connectDB();   

app.use(express.json());
app.use(bodyParser.json());

app.use('/players', playerRoutes);
app.use('/refree', refreeRoutes);
app.use('/association', associationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server Started!");
});