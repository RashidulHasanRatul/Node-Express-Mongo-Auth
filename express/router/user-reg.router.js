const express = require("express");
const router = express.Router();

router.post("/user-reg", (req, res) => {
  const name = req.body.name;
  const id = req.body.id;
  res.send(`The name is ${name} and The ID is ${id} `);
});

module.exports = router;
