exports.index = (req, res) => {
  return res.render("admin/index");
};

exports.create = (req, res) => {
  return res.render("admin/create");
};

exports.post = (req, res) => {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") return res.send("Preencha todos os campos");
  }

  let id = 1;
  const lastRecipe = data.recipes[data.recipes.length - 1];

  if (lastRecipe) {
    id = lastRecipe.id + 1;
  }

  data.recipes.push({
    id,
    ...req.body,
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("ERROR");
    return res.redirect(`/admin/recipes/${id}`);
  });
};

exports.show = (req, res) => {
  return res.render("admin/details");
};

exports.edit = (req, res) => {
  return res.render("admin/edit");
};

exports.put = (req, res) => {
  return res.render("admin/details");
};

exports.delete = (req, res) => {
  return res.render("admin/details");
};
