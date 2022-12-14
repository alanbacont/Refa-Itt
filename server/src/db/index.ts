const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://alanbacon:bxca0807@cluster0.9gxo38o.mongodb.net/Refaccionaria"
  );
  console.log("Mongo connected");
};

module.exports = { connectDB };
