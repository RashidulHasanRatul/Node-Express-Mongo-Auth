const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    userName: "Rashidul Hasan",
    email: "rhratul12@gmail.com",
  },
  {
    id: uuidv4(),
    userName: " Hasan",
    email: "rhratul10000@gmail.com",
  },
];

module.exports = {users};
