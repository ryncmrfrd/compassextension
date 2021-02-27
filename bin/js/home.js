/*
    HOME PAGE
*/

// tweaked see more button
let btnmore = document.querySelector("div#panel-1072-innerCt div a");

if(btnmore){
	btnmore.innerText = "See More";
}

// change forward/backward calendar chevrons
let calendarBtnClasses = ["fa-chevron-left", "fa-chevron-right"],
	calendarBtns = document.querySelectorAll("#calendardaywidget-1013-tb-prev > span > span, #calendardaywidget-1013-tb-next > span > span");

if(calendarBtns){
	calendarBtns.forEach((elem, i) => {
		console.log(calendarBtnClasses[i])
		elem.classList.add(...["fas", calendarBtnClasses[i]]);
		elem.innerHTML = '';
	});
}

//change school logo to higher res version
let schoolLogoElem = document.querySelector("#component-1089 img");

if(schoolLogoElem){
	schoolLogoElem.src = "/Download/Cdn/LoginPageLogo/161331433355.jpg";
}

//change looking ahead header background colour
let lookingAheadElem = document.querySelector("#toolbar-1065");

if(lookingAheadElem){
	lookingAheadElem.style.backgroundColor = "#1287fa";
}

//change bg colour of "my news" title
let myNewsElem = document.querySelector("#ext-comp-1083");

if(myNewsElem){
	myNewsElem.setAttribute('style', 'background-color: rgb(255, 255, 255) !important');
}