const http = require("http");
const port = 3000;
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("Routing/index.html", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("Routing/about.html", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/contact") {
    fs.readFile("Routing/contact.html", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  } else {
    fs.readFile("Routing/error.html", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  }
});

server.listen(port, () => {
  console.log(`server is running at ${port}`);
});
