const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");

const port = 4000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json);

app.get("/", (req, res) => {
  //   console.log(path.join(__dirname + "/index.html"));
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/api/v1/userdata", (req, res) => {
  res.json({
    name: "saurabh",
    email: "saploe@gmail.com",
    password: "hexed",
  });
});

app.listen(port, () => {
  console.log(`server is working on port: ${port}`);
});
