"use strict"

// burger menu
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})


