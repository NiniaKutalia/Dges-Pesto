"use strict"

// burger menu



let navigation = document.getElementById('navbar');
let burgerbar = document.getElementById('burgerBar');

burgerbar.addEventListener('click', function () {
    burgerbar.classList.toggle('activeBar');
    navigation.classList.toggle('activeNav');
})