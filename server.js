const express = require("express");
const nunjucks = require("nunjucks");
const recipes = require("./data");
const routes = require("./routes");

const server = express();

server.use(express.static("public"));
server.use(express.static("images"));
server.use(express.static("scripts"));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  noCache: true,
  autoescape: false,
});

server.listen(8000, function () {
  console.log("server is running");
});
