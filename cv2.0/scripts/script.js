// Autor: Hugo Do Nascimento Pereira

// ---------- Variables ----------
const start_container = document.querySelector(".start_container");
const name_container = document.querySelector(".name_container");
const name_div = document.querySelector(".name");
const line = document.querySelector(".line");



// ---------- Listeners ----------

window.onload = name_up_animation();
window.onload = discover_name_animation();

// ---------- Functions ----------

function name_up_animation() {
    setTimeout(() => {
        name_div.style.animation = "name_up_animation 3s ease-in-out forwards";


    }, 1000);
}
function discover_name_animation() {

    setTimeout(() => {
        name_container.style.animation = "discover_name_animation 3s ease-in-out forwards";
    }, 5000);
}