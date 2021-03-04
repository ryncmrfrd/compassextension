/*
    HOME PAGE
*/

// tweaked see more button
let btnmore = document.querySelector("div#panel-1072-innerCt div a");

if(btnmore){
	btnmore.innerText = "More News";
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
let myNewsElems = document.querySelectorAll("#ext-comp-1083, #ext-comp-1083 *");

if(myNewsElems){
	myNewsElems.forEach(elem => {
		elem.setAttribute('style', 'background-color: rgb(255, 255, 255) !important; border: none !important');
	});
}

//change icon for attatched document in news feed

let newsFeedAttatchmentLinksLength = 0,
	newsFeedSeeMoreLinksLength = 0;

var i = setInterval(function(){
	attemptToModifyNewsItems()
}, 100);

document.querySelector("#panel-1072").addEventListener("click", e => {
	var i = setInterval(function(){
		attemptToModifyNewsItems()
	}, 100);
})

function attemptToModifyNewsItems(){
	let newsFeedAttatchmentLinks = document.querySelectorAll(".newsfeed-newsItem-attachments img"),
		newsFeedSeeMoreLinks = document.querySelectorAll(".newsfeed-newsItem-seeMoreCTA a");

	if(newsFeedAttatchmentLinks.length > newsFeedAttatchmentLinksLength && newsFeedSeeMoreLinks.length > newsFeedSeeMoreLinksLength){
		clearInterval(i)
		if(newsFeedAttatchmentLinks && newsFeedSeeMoreLinks){
			newsFeedAttatchmentLinksLength = newsFeedAttatchmentLinks.length;
			newsFeedAttatchmentLinks.forEach(elem => { elem.classList.add(...["fas", "fa-paperclip"]); elem.src = '' });

			newsFeedSeeMoreLinksLength = newsFeedSeeMoreLinks.length;
			newsFeedSeeMoreLinks.forEach(elem => elem.innerText = "See More" );
		}
	};
}