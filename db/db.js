const mongoose = require('mongoose');

const connectDB = async () => {
    const dbURL = "mongodb+srv://venkadesh:venkadesh@designthinking.kws17mh.mongodb.net/?retryWrites=true&w=majority";

    await mongoose.connect(dbURL, (err) => {
        if (err) {
            console.log("MongoDB connection was failed!");
            console.log(err);
            return
        } else {
            console.log("Mongo connection was successful!");
            return
        }
    });
};

module.exports = connectDB;