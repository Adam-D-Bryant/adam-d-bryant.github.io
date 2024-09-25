let menuItems = document.getElementsByClassName("menuItem");

function toggleMenu(e, forceOption=undefined) {
    let menu = document.getElementById("menu");

    if (forceOption !== undefined) {
        if (forceOption) menu.classList.add("menu-active");
        else menu.classList.remove("menu-active");
        return;
    }

    if (menu.classList.contains("menu-active")) menu.classList.remove("menu-active");
    else menu.classList.add("menu-active");
}

document.getElementById("navbarMenuButton").addEventListener("click", toggleMenu);

for (let i = 0; i < menuItems.length; i++) menuItems[i].addEventListener("click", function(e) { e.stopPropagation(); });

document.getElementById("menu").addEventListener("click", function() { toggleMenu(false); });