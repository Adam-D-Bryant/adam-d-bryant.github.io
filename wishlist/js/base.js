const toggleButtons = document.querySelectorAll(".toggleArea");

function toggleButtonClick(e) {

    let rArea = e.target.previousSibling.previousSibling;
    let lArea = rArea.previousSibling.previousSibling;

    if (lArea.classList.contains("itemAreaActive")) {
        lArea.classList.remove("itemAreaActive"); rArea.classList.add("itemAreaActive");
        e.target.innerHTML = (rArea.classList.contains("imgArea")) ? ">>":"<<";
    }
    else if (rArea.classList.contains("itemAreaActive")) {
        lArea.classList.add("itemAreaActive");
        rArea.classList.remove("itemAreaActive");
        e.target.innerHTML = (lArea.classList.contains("imgArea")) ? ">>":"<<";
    }
}

toggleButtons.forEach(el => { el.addEventListener("click", toggleButtonClick, false); });