/*
    CENTRE CONTENT
*/

// tweaked see more button
let btnmore = document.querySelector("div#panel-1072-innerCt div a");
btnmore ? btnmore.innerText = "See More" : "";

// change forward/backward calendar chevrons
let calendarBtns = document.querySelectorAll("#calendardaywidget-1013-tb-prev > span > span, #calendardaywidget-1013-tb-next > span > span"),
	calendarBtnClasses = ["fa-chevron-left", "fa-chevron-right"];

calendarBtns.forEach((elem, i) => {
	console.log(calendarBtnClasses[i])
	elem.classList.add(...["fas", calendarBtnClasses[i]]);
	elem.innerHTML = '';
});

//change school logo to higher res version
document.querySelector("#component-1089 img").src = "/Download/Cdn/LoginPageLogo/161331433355.jpg"

//change looking ahead header background colour
document.querySelector("#toolbar-1065").style.backgroundColor = "#1287fa"

//change bg colour of "my news" title
document.querySelector("#ext-comp-1083").setAttribute('style', 'background-color: rgb(255, 255, 255) !important');