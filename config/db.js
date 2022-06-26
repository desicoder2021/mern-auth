const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoDB_URI");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB connected sucessfully");
  } catch (error) {
    console.log(error.message);
    // exit process wiht a failure code
    process.exit(1);
  }
};

module.exports = connectDB;
