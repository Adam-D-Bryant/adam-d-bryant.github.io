let slideIndex = 0;
showSlides(slideIndex);

function shiftSlide(by) {
    slideIndex += by;
    if (slideIndex > 3) { slideIndex -= 4; }
    if (slideIndex < 0) { slideIndex += 4; }

    showSlides(slideIndex);
}

function showSlides(ind) {
    let slidesL = document.getElementById("slidesAreaLeft").getElementsByClassName("slides");
    let slidesM = document.getElementById("slidesAreaMiddle").getElementsByClassName("slides");
    let slidesR = document.getElementById("slidesAreaRight").getElementsByClassName("slides");

    let slidesLHead = document.getElementById("slidesAreaLeft").getElementsByClassName("heading");
    let slidesMHead = document.getElementById("slidesAreaMiddle").getElementsByClassName("heading");
    let slidesRHead = document.getElementById("slidesAreaRight").getElementsByClassName("heading");

    for (i = 0; i < 4; i++) {
        slidesL[(i-1 < 0) ? 3:i-1].style.display = (i == ind) ? "grid":"none";
        slidesM[i].style.display = (i == ind) ? "grid":"none";
        slidesR[(i+1 > 3) ? 0:i+1].style.display = (i == ind) ? "grid":"none";

        slidesLHead[(i-1 < 0) ? 3:i-1].style.display = (i == ind) ? "grid":"none";
        slidesMHead[i].style.display = (i == ind) ? "grid":"none";
        slidesRHead[(i+1 > 3) ? 0:i+1].style.display = (i == ind) ? "grid":"none";
    }

    switch(ind) { 
        case 0: document.getElementById("subTitle").getElementsByTagName("p")[0].innerHTML = "Let's find something to wear!"; break;      //Clothes
        case 1: document.getElementById("subTitle").getElementsByTagName("p")[0].innerHTML = "Let's find something to eat!"; break;      //Food
        case 2: document.getElementById("subTitle").getElementsByTagName("p")[0].innerHTML = "Let's find something to play!"; break;      //Games
        case 3: document.getElementById("subTitle").getElementsByTagName("p")[0].innerHTML = "Let's find something to use!"; break;      //Misc.
        default: document.getElementById("subTitle").getElementsByTagName("p")[0].innerHTML = "Let's explore!"; break;      //N/A
    }

}