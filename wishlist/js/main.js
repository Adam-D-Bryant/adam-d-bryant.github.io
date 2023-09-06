let toTopButton = document.getElementById("toTopButton");
window.onscroll = function() { onScroll(); };

function onScroll() {
    toTopButton.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block":"none";
}

function goToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
} 

function mobileToggleText(e) {

    if (!window.matchMedia("(max-width: 800px)").matches) return true;

    let nodeI = e.querySelector('.itemImgContainer');
    let nodeT = e.querySelector('.itemTextContainer');

    if (!nodeI || !nodeT) return false;

    nodeI.style.visibility = nodeI.style.visibility == "visible" ? "hidden":"visible";
    nodeT.style.visibility = nodeT.style.visibility == "visible" ? "hidden":"visible";

    return false;
}

function mq(m) {
    if (!m.matches) {
        let a= document.getElementsByClassName("itemImgContainer");
        let b= document.getElementsByClassName("itemTextContainer");
        for(let i=0; i < a.length; i++) a[i].style.visibility = "visible";
        for(let i=0; i < b.length; i++) b[i].style.visibility = "visible";
    }
    else {
        let a= document.getElementsByClassName("itemImgContainer");
        let b= document.getElementsByClassName("itemTextContainer");
        for(let i=0; i < a.length; i++) a[i].style.visibility = "visible";
        for(let i=0; i < b.length; i++) b[i].style.visibility = "hidden";
    }
}



let m = (window.matchMedia("(max-width: 800px)"));  
m.addEventListener("change", mq);

mq(m)