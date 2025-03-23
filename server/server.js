const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

// DONTENV

dotenv.config();

// MONGOOB CONNECTION 

connectDB();

// REST OBJECT

const app = express();

// MIDDLEWARE

app.use(cors());  
app.use(express.json());
app.use(morgan("dev"));

// ROUTES

app.use('/api/v1/auth',require('./routes/userRoutes'))

// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Pompom h",
//   });
// });

// PORT

const PORT = process.env.PORT || 8090;

// LISTEN

app.listen(8090, () => {
  console.log(`Server Run ${PORT}`.bgRed.white);
});
