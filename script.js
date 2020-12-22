console.log("Loaded :)")

// add "made by tag"

let elem = document.createElement("div");
elem.classList.add("custom_tag");
elem.innerHTML = "<span>Custom stylesheet: </span><a href='https://ryncmrfrd.com'>Ryan Comerford</a>"

let footer = document.querySelector("#c_ftr");
if(footer){
	footer.appendChild(elem);
}

// fontawesome (icon replace)

let menuSprites = document.querySelectorAll(".menu-sprite");

menuSprites.forEach(elem => { 
    elem.classList.add("fas"), 
    elem.classList.remove("menu-sprite") 
});

if(menuSprites[0]){
	menuSprites[0].classList.add("fa-home");
	menuSprites[0].classList.remove("menu-sprite-house");
}

if(menuSprites[1]){
	menuSprites[1].classList.add("fa-calendar-alt");
	menuSprites[1].classList.remove("menu-sprite-calendar2");
}

if(menuSprites[2]){
	menuSprites[2].classList.add("fa-pencil-alt");
	menuSprites[2].classList.remove("menu-sprite-pen");
}

if(menuSprites[3]){
	menuSprites[3].classList.add("fa-th");
	menuSprites[3].classList.remove("menu-sprite-dots");
}

if(menuSprites[4]){
	menuSprites[4].classList.add("fa-user-friends");
	menuSprites[4].classList.remove("menu-sprite-community");
}

if(menuSprites[5]){
	menuSprites[5].classList.add("fa-star");
	menuSprites[5].classList.remove("menu-sprite-star");
}

if(menuSprites[6]){
	menuSprites[6].classList.add("fa-user");
	menuSprites[6].classList.remove("menu-sprite-user2");
}

if(menuSprites[7]){
	menuSprites[7].classList.add("fa-cog");
	menuSprites[7].classList.remove("menu-sprite-gear");
}

// content chaanges

let seeMoreButtonText = document.querySelector("div#panel-1068-body span div div a");
if(seeMoreButtonText) seeMoreButtonText.innerText = "See More";