const fs = require("fs");
const os = require("os");

fs.readFile("test.txt", (err, data) => {
  if (err) {
    console.log("There is a problem to read the file" + err);
  }
  console.log(data);
});

console.log(os.userInfo);
