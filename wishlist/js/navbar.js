const toggleButton = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");

function toggleMenu() {

    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggleButton.querySelector(".nav-link").innerHTML = "<i class='nav-toggle-icon fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
        toggleButton.querySelector(".nav-link").innerHTML = "<i class='nav-toggle-icon fas fa-times'></i>";
    }
}

toggleButton.addEventListener("click", toggleMenu, false);

function closeMenu(e) {
    if (menu.classList.contains("active")) {
        let isClickInside = false;
        for (let i=0; i < e.target.classList.length; i++) 
            if ((e.target.classList[i]).indexOf("nav") != -1) isClickInside = true;
        if (!isClickInside)
            toggleMenu();
    }
}
document.addEventListener("click", closeMenu, false);

function highlight(e, en, col) {
    let parent = e.parentNode;
    let item = parent.parentNode;
    if (en && !item.classList.contains(`highlight-${col}`)) 
        item.classList.add(`highlight-${col}`);
    else if (!en && item.classList.contains(`highlight-${col}`)) 
        item.classList.remove(`highlight-${col}`);
}

//Clothes
document.querySelector("#nav-link-clothes").addEventListener("mouseenter", function(e) { highlight(e.target, true, "g"); }, false);
document.querySelector("#nav-link-clothes").addEventListener("mouseleave", function(e) { highlight(e.target, false, "g"); }, false);

//Food
document.querySelector("#nav-link-food").addEventListener("mouseenter", function(e) { highlight(e.target, true, "o"); }, false);
document.querySelector("#nav-link-food").addEventListener("mouseleave", function(e) { highlight(e.target, false, "o"); }, false);

//Games
document.querySelector("#nav-link-games").addEventListener("mouseenter", function(e) { highlight(e.target, true, "b"); }, false);
document.querySelector("#nav-link-games").addEventListener("mouseleave", function(e) { highlight(e.target, false, "b"); }, false);

//Misc
document.querySelector("#nav-link-misc").addEventListener("mouseenter", function(e) { highlight(e.target, true, "p"); }, false);
document.querySelector("#nav-link-misc").addEventListener("mouseleave", function(e) { highlight(e.target, false, "p"); }, false);