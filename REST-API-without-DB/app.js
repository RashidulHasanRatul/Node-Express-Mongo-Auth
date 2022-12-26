const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const { router } = require("../REST-API-without-DB/router/test.route");

app.use(router);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", (req, res, next) => {
  res.send("404 Not Found");
});

module.exports = { app };
