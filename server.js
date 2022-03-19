const express = require("express");
const nunjucks = require("nunjucks");
const recipes = require("./data");

const server = express();

server.use(express.static("public"));
server.use(express.static("images"));
server.use(express.static("scripts"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  noCache: true,
  autoescape: false,
});

server.get("/", function (req, res) {
  return res.render("index", { items: recipes });
});

server.get("/sobre", function (req, res) {
  return res.render("about");
});

server.get("/receitas", function (req, res) {
  return res.render("recipes", { items: recipes });
});


server.get("/recipes/:index", (req, res)  => {
  const recipeIndex = req.params.index;
  const recipe = recipes.find((recipe) => String(recipe.id) === recipeIndex);
  if (!recipe) {
    return res.send("Recipe not found!");
  }
  return res.render("details", { item: recipe });
})

server.use((req, res) => {
  return res.status(404).render("not-found");
});

server.listen(5600, function () {
  console.log("server is running");
});
