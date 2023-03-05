const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const routes = require("../routes/routes");
const myMiddleware = require("../middleware/middleware");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/socialmediaapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongoose Database");
  })
  .catch((err) => {
    console.log("Error connecting to Database", err);
  });

app.use(express.json());
app.use(myMiddleware);
app.use("/api", routes);

module.exports = express();