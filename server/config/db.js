const mongoose = require("mongoose");
const colour = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MOGO_URL);
    // useNewUrlParser: true,
    // useUnifiedTopology : true,
    console.log(` mongoDB connected successfully ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`mongoDB connection failed",${error}`.bgRed.white);
    process.exit(1);
  }
};


module.exports = connectDB;