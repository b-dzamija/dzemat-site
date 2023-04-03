const humbMenu = document.querySelector(".hamburger-menu")
const humbX = document.querySelector(".hamburger-x")
const overlay = document.querySelector(".nav-overlay")
const overlayX = document.querySelector(".overlay-x")
const overlayList = document.querySelector(".nav-overlay-list")

humbMenu.addEventListener("click", function(event) {
    humbMenu.style.opacity = "0";
    humbX.style.transform = "translate(0%)";
    overlay.style.transform = "translate(0%)";
    overlayX.style.transform = "translate(0%)";
    overlayList.style.transform = "translate(0%)";
});

humbX.addEventListener("click", function(event) {
    humbMenu.style.opacity = "1";
    humbX.style.transform = "translate(1000%)";
    overlay.style.transform = "translate(100%)";
    overlayList.style.transform = "translate(100%)";
    overlayX.style.transform = "translate(-100%)";
});

overlayX.addEventListener("click", function(event) {
    humbMenu.style.opacity = "1";
    humbX.style.transform = "translate(1000%)";
    overlay.style.transform = "translate(100%)";
    overlayX.style.transform = "translate(-100%)";    overlayList.style.transform = "translate(100%)";

})

const navLogo1 = document.querySelector("#nav-logo-1");

navLogo1.addEventListener("click", function(event) {
    window.open("../index.html", "_self")
})

const navLogo2 = document.querySelector("#nav-logo-2");

navLogo2.addEventListener("click", function(event) {
    window.open("../index.html", "_self")
})

const xMark = document.querySelectorAll(".fa-xmark")

const allOverlays = document.querySelectorAll(".o-dzematu-overlay")

const dzematCard = document.querySelectorAll(".dzemat-card")
const dzematCardOverlay = document.querySelectorAll(".o-dzematu-overlay")

for (let i = 0; i < dzematCard.length; i++) {
    dzematCard[i].addEventListener("click", function() {
        dzematCardOverlay[i].style.display = "block"
    });
}

// dzematCard.addEventListener("click", (event) => {
//     dzematCardOverlay.style.display = "block"
// })

// const imamCard = document.querySelector(".dzemat-card.imam")
// const imamCardOverlay = document.querySelector(".o-dzematu-overlay.imam")

// imamCard.addEventListener("click", (event) => {
//     imamCardOverlay.style.display = "block"
// })



for (let i = 0; i < xMark.length; i++) {
    xMark[i].addEventListener("click", function() {
        allOverlays[i].style.display = "none"
    });
}


// xMark.addEventListener("click", (event) => {
//     dzematCardOverlay.style.display = "none"
//     imamCardOverlay.style.display = "none"
// })
// const imamCard = document.querySelector(".imam-card")

// const dzematCard = document.querySelector(".dzemat-card")
// const dzematCardOverlay = document.querySelector(".o-dzematu-overlay")



