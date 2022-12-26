const express = require("express");
const router = express.Router();

router.get("/user-reg", (req, res) => {
  res.sendFile(__dirname+"/index.html");
});

router.post("/user-reg", (req, res) => {
  const name = req.body.name;
  res.send(name);
});

module.exports = router;
