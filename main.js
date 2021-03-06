//cd github/mattiskleine.github.io
//https://codepen.io/sosuke/pen/Pjoqqp

const express = require("express");
const app = express();
const port = 2222;

app.listen(port, () => {
  console.log("Application started and Listening on port " + port);
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
