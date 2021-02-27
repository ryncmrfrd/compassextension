/*
    CLASS PAGE
*/

// back/forward button icons
let iconsArrayNav = ["fa-arrow-left", "fa-arrow-right"],
	iconElemsNav = document.querySelectorAll("#button-1067-btnEl, #button-1068-btnEl");

if (iconElemsNav){
	iconElemsNav.forEach((elem, i) => {
		elem.innerHTML = "",
		elem.classList.add("fas", iconsArrayNav[i])
	});
}

// room details icons
let iconsArrayRoom = ["fa-chalkboard-teacher", "fa-lightbulb", "fa-volume-up","fa-chalkboard", "fa-tv", "fa-compact-disc", "fa-tint", "fa-burn", "fa-thermometer-full", "fa-fan", "fa-wheelchair", "fa-deaf"],
	iconElemsRoom = document.querySelectorAll("#container-1285-targetEl div");
    
if(iconElemsRoom){
	iconElemsRoom.querySelectorAll("#container-1285-targetEl div").forEach(elem => { 
		elem.lastChild.src = "",
		elem.classList.add("fas", iconsArrayRoom[i]),
		elem.classList.remove("location-attribute-icon")
	});
}