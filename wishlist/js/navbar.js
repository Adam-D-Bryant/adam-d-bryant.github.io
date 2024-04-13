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