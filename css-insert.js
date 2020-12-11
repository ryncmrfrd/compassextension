console.log("guacamole")

// fontawesome (icon replace)

let menuSprites = document.querySelectorAll(".menu-sprite");

menuSprites.forEach(elem => { 
    elem.classList.add("fas"), 
    elem.classList.remove("menu-sprite") 
});

menuSprites[0].classList.add("fa-home");
menuSprites[0].classList.remove("menu-sprite-house");

menuSprites[1].classList.add("fa-calendar-alt");
menuSprites[1].classList.remove("menu-sprite-calendar2");

menuSprites[2].classList.add("fa-pencil-alt");
menuSprites[2].classList.remove("menu-sprite-pen");

menuSprites[3].classList.add("fa-th");
menuSprites[3].classList.remove("menu-sprite-dots");

menuSprites[4].classList.add("fa-user-friends");
menuSprites[4].classList.remove("menu-sprite-community");

menuSprites[5].classList.add("fa-star");
menuSprites[5].classList.remove("menu-sprite-star");

menuSprites[6].classList.add("fa-user");
menuSprites[6].classList.remove("menu-sprite-user2");

menuSprites[7].classList.add("fa-cog");
menuSprites[7].classList.remove("menu-sprite-gear");

// content chaanges

let seeMoreButtonText = document.querySelector("div#panel-1068-body span div div a");
seeMoreButtonText.innerText = "See More"

let schoolImg = document.querySelector("#container-1077-targetEl div > img")
schoolImg.src = "chrome-extension://fgnjojagffliecljpgfhbbpoelenlehe/Logo-extended-241x221.jpg"