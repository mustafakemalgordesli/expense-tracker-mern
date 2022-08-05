const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const cors = require("cors");
const routes = require("./routes");
const errorHandling = require("./middlewares/errorHandling");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  //   origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(helmet());
app.use(logger("dev"));

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.use("/api", routes);
app.use(errorHandling);

app.listen(PORT, () => {
  console.log(PORT + ". port listening");
});
