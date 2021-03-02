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
let myNewsElems = document.querySelectorAll("#ext-comp-1083, #ext-comp-1083 *");

if(myNewsElems){
	myNewsElems.forEach(elem => {
		elem.setAttribute('style', 'background-color: rgb(255, 255, 255) !important; border: none !important');
	});
}

//change icon for attatched document in news feed

let newFeedAttatchmentLinksLength = 0,
	whiteImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP89+//TwAJ8wP2putNTgAAAABJRU5ErkJggg==";

var i = setInterval(function(){
	let newFeedAttatchmentLinks = document.querySelectorAll(".newsfeed-newsItem-attachments img");
	console.log(newFeedAttatchmentLinks, newFeedAttatchmentLinks.length);

	if(newFeedAttatchmentLinks.length > 0){
		clearInterval(i)
		if(newFeedAttatchmentLinks){
			newFeedAttatchmentLinksLength = newFeedAttatchmentLinks.length;
			hasChagedIcons = true;
			newFeedAttatchmentLinks.forEach((elem, i) => {
				elem.classList.add(...["fas", "fa-paperclip"]);
				elem.src = whiteImg;
			});
		}
	};
}, 100);

document.querySelector("#panel-1072").addEventListener("click", e => {
	var i = setInterval(function(){
		let newFeedAttatchmentLinks = document.querySelectorAll(".newsfeed-newsItem-attachments img");
		console.log(newFeedAttatchmentLinks, newFeedAttatchmentLinks.length);
	
		if(newFeedAttatchmentLinks.length > newFeedAttatchmentLinksLength){
			clearInterval(i)
			if(newFeedAttatchmentLinks){
				newFeedAttatchmentLinksLength = newFeedAttatchmentLinks.length;
				hasChagedIcons = true;
				newFeedAttatchmentLinks.forEach((elem, i) => {
					elem.classList.add(...["fas", "fa-paperclip"]);
					elem.src = whiteImg;
				});
			}
		};
	}, 100);
})