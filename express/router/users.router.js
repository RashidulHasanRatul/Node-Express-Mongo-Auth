const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello From Home ");
});

router.post("/user", (req, res) => {
  console.log(req.user);
  console.log(req.pass);
  const id = req.query.id;
  res.send(`The ID is ${id}`);
});

// request Params Example
router.post("/userID/:id/userAge/:age", (req, res) => {
  const { id, age } = req.params;
  res.send(`The Response is ${id} and ${age}`);
});

// request Header Example
router.post("/headerExample", (req, res) => {
  // const { id, names } = req.header;
  const id = req.header("id");
  const names = req.header("names");
  res.send(`The Response is ${id} and ${names}`);
});
module.exports = router;
