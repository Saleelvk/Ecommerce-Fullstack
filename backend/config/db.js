const mongoose = require("mongoose");

const connectDb = async () => {
    await mongoose.connect(process.env.Mongo_url)
        .then(() => {
            console.log("database connected");
        })
        .catch((err) => {
            console.log("database connection error", err);
        })
}

module.exports = connectDb;
