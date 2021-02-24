/*
    CENTRE CONTENT
*/

// tweaked see more button
let btnmore = document.querySelector("div#panel-1072-innerCt div a");
btnmore ? btnmore.innerText = "See More" : "";

let calendarBtnClasses = ["fa-chevron-left", "fa-chevron-right"];
if(true){
    // document.querySelectorAll("#calendardaywidget-1013-tb-prev span span, #calendardaywidget-1013-tb-next span span").forEach((el,i) => {
    //     el.classList.add(...["fas", calendarBtnClasses[i]]);
    //     el.classList.remove(...["x-btn-inner","x-tbar-page-prev","x-tbar-page-next"]);
    // });

    let prev = document.querySelector("#calendardaywidget-1013-tb-prev span span")
    prev.classList.add(...["fas", "fa-chevron-left"]);
    prev.innerHTML = '';

    let next = document.querySelector("#calendardaywidget-1013-tb-next span span")
    next.classList.add(...["fas", "fa-chevron-right"]);
    next.innerHTML = '';
}