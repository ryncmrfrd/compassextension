/*
    TOP BLUE BAR
*/

let iconsArray = ["fa-home", "fa-calendar-alt", "fa-pencil-alt", "fa-th",
                  "fa-user-friends", "fa-star", "fa-user", "fa-cog"];

document.querySelectorAll(".menu-sprite").forEach((elem, i) => { 
    elem.classList.remove("menu-sprite"),
    elem.classList.add("fas", iconsArray[i])
});