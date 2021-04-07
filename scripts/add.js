const ingredientBtn = document.querySelector("#add_ingredient");
const stepBtn = document.querySelector("#add_step");

ingredientBtn.addEventListener("click", function addIngredient() {
  const fieldIngredients = document.querySelectorAll(".field-ingredients");
  const newField = fieldIngredients[fieldIngredients.length - 1].cloneNode(
    true
  );

  if (newField.children[0].value == "") {
    return window.alert("Por favor registre 1 ingrediente de cada vez!");
  }
  newField.children[0].value = "";

  return ingredientBtn.parentNode.insertBefore(newField, ingredientBtn);
});

stepBtn.addEventListener("click", function addStep() {
  const fieldStep = document.querySelectorAll(".field-steps");
  const newField = fieldStep[fieldStep.length - 1].cloneNode(true);

  if (newField.children[0].value == "") {
    return window.alert("Por favor registre 1 ingrediente de cada vez!");
  }
  newField.children[0].value = "";

  return stepBtn.parentNode.insertBefore(newField, stepBtn);
});
