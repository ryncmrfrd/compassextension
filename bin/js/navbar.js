/*
    NAV BAR
*/

let iconsArrayNavbar = ["fa-home", "fa-calendar-alt", "fa-pencil-alt", "fa-th", "fa-user-friends", "fa-star", "fa-user", "fa-cog"],
	iconsElemsNavbar = document.querySelectorAll(".menu-sprite");
	
if(iconsElemsNavbar){
	iconsElemsNavbar.forEach((elem, i) => { 
		elem.classList.remove("menu-sprite"),
		elem.classList.add("fas", iconsArrayNavbar[i])
	});
}