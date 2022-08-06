const mongoose = require("mongoose");

const db = mongoose.connection;

db.once("open", () => {
  console.log("MongoDb Connection Successful");
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("MongoDb Connection UnSuccessfull");
  }
};

module.exports = connectDB;
