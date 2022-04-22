"use strict"

document.addEventListener("DOMContentLoaded", init);

function init() {
    const $links = document.querySelectorAll(".menu-links a");
    $links.forEach(link => {
        link.addEventListener("click", closeNav);
    });

    window.onscroll = function () { displayButton() };

    const $scrollToTopButton = document.querySelector("#go-to-top button");
    $scrollToTopButton.addEventListener("click", goToTop)
}

function closeNav(e) {
    const $checkBox = document.querySelector("#openmenu");
    $checkBox.checked = false;
}

function displayButton() {
    const $scrollToTopButton = document.querySelector("#go-to-top button");

    if (document.documentElement.scrollTop > 20) {
        $scrollToTopButton.style.display = "block";
    } else {
        $scrollToTopButton.style.display = "none";
    }
}

function goToTop(e) {
    e.preventDefault();

    document.documentElement.scrollTop = 0;
}
