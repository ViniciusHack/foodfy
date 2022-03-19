const recipe = document.querySelector(".recipe");
const btns = recipe?.querySelectorAll("span");
const divRecipes = recipe.children;
const contentDivs = recipe.querySelectorAll(".div-content");
const detailBanner = document.querySelector(".detail-banner");
const img = detailBanner.querySelector("img");
const divImage = detailBanner.querySelector(".image");

const imgSrc = img.getAttribute("src");
console.log(divImage);
divImage.style.backgroundImage = `url(${imgSrc})`;

for (let button of btns) {
  button.addEventListener("click", () => {
    if (button.textContent == "ESCONDER") {
      contentDivs[button.id].classList.remove("visible");
      contentDivs[button.id].classList.add("invisible");
      divRecipes[button.id].style.paddingBottom = "47px";

      return (button.innerText = "MOSTRAR");
    }
    if (button.textContent == "MOSTRAR") {
      contentDivs[button.id].classList.remove("invisible");
      contentDivs[button.id].classList.add("visible");
      divRecipes[button.id].style.paddingBottom = "0";
      return (button.innerText = "ESCONDER");
    }
  });
}
