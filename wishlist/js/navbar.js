/*
 * navbar.js
 * 18/03/2025
 *
 * Some brief JavaScript code for handling the toggling of the overlay.
 */

function toggleFullscreenOverlay() {
    document.getElementById("navbar-overlay").classList.toggle("expand");
    document.getElementById("navbar-expand-button").classList.toggle("navbar-expand-item-on");
    document.getElementById("navbar-expand-button").classList.toggle("navbar-expand-item-off");
}

document.getElementById("navbar-expand-button").addEventListener("click", toggleFullscreenOverlay);