function toggleDesc(id, mob) {
    let curDisplay = document.getElementsByClassName("itemDesc")[id].style.display;
    document.getElementsByClassName("itemDesc")[id].style.display = (curDisplay == "block") ? "none":"block";
    document.getElementsByClassName("itemImg")[id].style.display = (curDisplay == "block" || !mob) ? "grid":"none";
    document.getElementsByClassName("itemBtn")[id].innerHTML = (curDisplay == "block") ? "MORE DETAILS":"LESS DETAILS";
    if (document.getElementsByClassName("item")[id/2].classList.contains("right")) {
        var spacerID = Math.floor(id/4);
        document.getElementsByClassName("spacer")[spacerID].style.display = (curDisplay != "block") ? "none":"block";
    }
}