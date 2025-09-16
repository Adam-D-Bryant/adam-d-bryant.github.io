/*
 * navbar.js
 * 19/03/2025
 *
 * Some brief JavaScript code for handling the toggling of the overlay.
 */

function toggleFullscreenOverlay() {
    document.getElementById("navbar-overlay").classList.toggle("expand");
    document.getElementById("navbar-expand-button").classList.toggle("navbar-expand-item-on");
    document.getElementById("navbar-expand-button").classList.toggle("navbar-expand-item-off");

    document.getElementsByTagName("html")[0].classList.toggle("disable-scroll");
    document.getElementsByTagName("body")[0].classList.toggle("disable-scroll");
}

function forceCloseFullscreenOverlay() {
    document.getElementById("navbar-overlay").classList.remove("expand");
    document.getElementById("navbar-expand-button").classList.remove("navbar-expand-item-on");
    document.getElementById("navbar-expand-button").classList.add("navbar-expand-item-off");

    document.getElementsByTagName("html")[0].classList.remove("disable-scroll");
    document.getElementsByTagName("body")[0].classList.remove("disable-scroll");
}

document.getElementById("navbar-expand-button").addEventListener("click", toggleFullscreenOverlay);

for(let i = 0; i < document.getElementsByClassName("navbar-overlay-item").length; i++) {
    document.getElementsByClassName("navbar-overlay-item")[i].addEventListener("click", forceCloseFullscreenOverlay);
}