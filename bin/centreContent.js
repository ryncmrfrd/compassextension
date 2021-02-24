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