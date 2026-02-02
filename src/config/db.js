const moongose = require("mongoose");

module.exports = async () => {
    await moongose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
};