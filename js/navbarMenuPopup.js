document.getElementById("navbarDropDownButton").addEventListener("click", mobileDropDownClick);

function mobileDropDownClick() {
    var mobileNavbar = document.getElementById("navbarMobile");
    var navbar = document.getElementById("navbarNormalSet");

    if (mobileNavbar.classList.contains("navbarMobileShow")) {  //Hide the mobile
        mobileNavbar.classList.add("navbarMobileHide");
        mobileNavbar.classList.remove("navbarMobileShow");
        navbar.style.display = "block";
    }
    else {
        mobileNavbar.classList.add("navbarMobileShow");
        mobileNavbar.classList.remove("navbarMobileHide");
        navbar.style.display = "";
    }
}