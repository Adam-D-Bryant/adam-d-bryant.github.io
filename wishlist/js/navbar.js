document.getElementById("navbarMenuButton").addEventListener("click", function() {
    let menu = document.getElementById("menu");
    if (menu.classList.contains("menu-active"))
        menu.classList.remove("menu-active");
    else
        menu.classList.add("menu-active");
} );