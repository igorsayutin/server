const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const fs = require("fs");
const bodyParser = require("body-parser");

app.get("/todos", function(req, res) {
  res.sendFile("D://Code/server/public/todos.json");
});

app.use(bodyParser.json());

app.post("/todos", function(req, res) {
  let jsonString = JSON.stringify(req.body);
  fs.writeFile("D://Code/server/public/todos.json", jsonString, function(err) {
    if (err) throw err;
  });
});

server.listen(1337, "localhost");
