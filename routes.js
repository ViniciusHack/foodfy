const express = require("express");
const recipes = require("./data");
const recipe = require("./controllers/Recipe");
const routes = express.Router();

routes.get("/", function (req, res) {
  return res.render("./users/index", { items: recipes });
});

routes.get("/sobre", function (req, res) {
  return res.render("./users/about");
});

routes.get("/receitas", function (req, res) {
  return res.render("./users/recipes", { items: recipes });
});

routes.get("/receita/:index", (req, res) => {
  const recipeIndex = req.params.index;
  const recipe = recipes.find((recipe) => String(recipe.id) === recipeIndex);

  if (!recipe) {
    return res.send("receita não encontrada");
  }

  return res.render("./users/details", { item: recipe });
});

// ADMIN

routes.get("/admin", (req, res) => {
  return res.redirect("/admin/recipes");
});

routes.get("/admin/recipes", recipe.index);

routes.get("/admin/recipes/create", recipe.create);

routes.get("/admin/recipes/:id", (req, res) => {
  return res.render("admin/create");
});

routes.get("/admin/recipes/:id/edit", (req, res) => {
  return res.render("admin/create");
});

routes.post("/admin/recipes", recipe.post);

module.exports = routes;
