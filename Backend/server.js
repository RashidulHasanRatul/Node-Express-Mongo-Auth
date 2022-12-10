const http = require("http");
const getRandomFruitsName = require("random-fruits-name");

const myServer = http.createServer((req, res) => {
  res.end(getRandomFruitsName("en"));
});

myServer.listen(3000, () => {
  console.log("Server Run on Port 3000");
});
