
const { app } = require("../REST-API-without-DB/app");
const PORT = 4000;

app.listen(PORT, (err) => {
  console.log(`Server is running Port at ${PORT}`);
});


