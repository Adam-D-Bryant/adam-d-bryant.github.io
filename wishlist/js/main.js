let toTopButton = document.getElementById("toTopButton");
window.onscroll = function() { onScroll(); };

function onScroll() {
    toTopButton.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block":"none";
}

function goToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
} 