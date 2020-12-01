const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const recipes = document.querySelectorAll(".recipe");
const footer = document.querySelector('.footer');
const image = modal.querySelector('.img');

for (let recipe of recipes) {
    const source = recipe.getAttribute("id");
    const text = recipe.getAttribute("title")
    const author = recipe.getAttribute("author")

    recipe.addEventListener('click', function() {
        modalOverlay.classList.add("active");
        image.style.backgroundImage = `url('../images/${source}.png')`;
        modal.querySelector("h4").innerText = text
        modal.querySelector("p").innerText = author

    })

}

modal.querySelector('span').addEventListener('click', function() {
    modalOverlay.classList.remove("active");
})

if (recipes.length < 10) {
    footer.classList.add("absolute");
}
