const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./router/users.router");
const userReg = require("./router/user-reg.router");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(userRouter, userReg);
app.use((req, res) => {
  res.send("Invalid 400");
});

module.exports = app;
