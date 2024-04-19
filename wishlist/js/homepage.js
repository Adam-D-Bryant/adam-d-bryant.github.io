//N/A for now.

const BIRTHDATE = new Date("2024-08-28T00:00:00");
const INTERVAL_ID = setInterval(updateTimer, 1000);

let timerHover = false;

function updateTimer() {
    let now, diff;
    let sec, min, hr, day;
    
    now = new Date();
    diff = BIRTHDATE-now;

    if (diff <= 0) {
        if (INTERVAL_ID) clearInterval(INTERVAL_ID);
        document.getElementById("timerD").innerHTML = "HAPPY BIRTHDAY!";
        document.getElementById("timerH").innerHTML = ``;
        document.getElementById("timerM").innerHTML = ``;
        document.getElementById("timerS").innerHTML = ``;

        document.getElementById("timerDExtra").innerHTML = ``;
        document.getElementById("timerHExtra").innerHTML = ``;
        document.getElementById("timerMExtra").innerHTML = ``;
        document.getElementById("timerSExtra").innerHTML = ``;
        return;
    }

    sec = (Math.floor(diff / 1000) % 60);
    min = (Math.floor(diff / 60000) % 60);
    hr = (Math.floor(diff / 3600000) % 24);
    day = Math.floor(diff / 86400000);

    document.getElementById("timerD").innerHTML = `${day<=9 ? "0":""}${day}`;
    document.getElementById("timerH").innerHTML = `${hr<=9 ? "0":""}${hr}`;
    document.getElementById("timerM").innerHTML = `${min<=9 ? "0":""}${min}`;
    document.getElementById("timerS").innerHTML = `${sec<=9 ? "0":""}${sec}`;

    document.getElementById("timerDExtra").innerHTML = `${timerHover ? ` Day${day!=1 ? "s":""}, `:`:`}`;
    document.getElementById("timerHExtra").innerHTML = `${timerHover ? ` Hour${hr!=1 ? "s":""}, `:`:`}`;
    document.getElementById("timerMExtra").innerHTML = `${timerHover ? ` Minute${min!=1 ? "s":""}, `:`:`}`;
    document.getElementById("timerSExtra").innerHTML = `${timerHover ? ` Second${sec!=1 ? "s":""}`:``}`;
}

function setHover(v) {
    timerHover = v;

    now = new Date();
    diff = BIRTHDATE-now;

    if (diff <= 0 || document.getElementById("timerD").innerHTML === "[Loading...]") return;

    document.getElementById("timerDExtra").innerHTML = `${timerHover ? " Days, ":":"}`;
    document.getElementById("timerHExtra").innerHTML = `${timerHover ? " Hours, ":":"}`;
    document.getElementById("timerMExtra").innerHTML = `${timerHover ? " Minutes, ":":"}`;
    document.getElementById("timerSExtra").innerHTML = `${timerHover ? " Seconds":""}`;
}

document.getElementById("subtitle").addEventListener("mouseover", function() { setHover(true); });
document.getElementById("subtitle").addEventListener("mouseout", function() { setHover(false); });