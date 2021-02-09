/*
    CLASS PAGE
*/

// back/forward button icons
let iconsArray = ["fa-arrow-left", "fa-arrow-right"];

document.querySelectorAll("#button-1067-btnEl, #button-1068-btnEl").forEach((elem, i) => {
    elem.innerHTML = "",
    elem.classList.add("fas", iconsArray[i])
});

// room details icons
let iconsArray2 = ["fa-chalkboard-teacher", "fa-lightbulb", "fa-volume-up",
                   "fa-chalkboard", "fa-tv", "fa-compact-disc", "fa-tint", "fa-burn", 
                   "fa-thermometer-full", "fa-fan", "fa-wheelchair", "fa-deaf"];
    
document.querySelectorAll("#container-1285-targetEl div").forEach(elem => { 
    elem.lastChild.src = "",
    elem.classList.add("fas", iconsArray2[i]),
    elem.classList.remove("location-attribute-icon")
});