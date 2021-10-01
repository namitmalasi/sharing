const mongoose = require("mongoose");
require("dotenv").config();

function connectDB() {
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;

  connection.once("open", () => {
    try {
      console.log("Database connected");
    } catch (err) {
      console.log(`Connection failed: ${err}`);
    }
  });
}

module.exports = connectDB;
