const CHRISTMAS_DATE = new Date(2024,11,25);

function updateClock() {
    var now = new Date();
    var diff = CHRISTMAS_DATE - now;

    var s = Math.floor(diff/1000) % 60;
    var m = Math.floor(diff/60000) % 60;
    var h = Math.floor(diff/3600000) % 24;
    var d = Math.floor(diff/86400000);

    d = (d < 10) ? "0" + d:d;
    h = (h < 10) ? "0" + h:h;
    m = (m < 10) ? "0" + m:m;
    s = (s < 10) ? "0" + s:s;

    document.getElementById("timerTextD").innerHTML = (diff <= 0) ? "00":d;
    document.getElementById("timerTextH").innerHTML = (diff <= 0) ? "00":h;
    document.getElementById("timerTextM").innerHTML = (diff <= 0) ? "00":m;
    document.getElementById("timerTextS").innerHTML = (diff <= 0) ? "00":s;
}

updateClock();
setInterval(updateClock, 1000);