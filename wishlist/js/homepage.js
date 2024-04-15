//N/A for now.

const BIRTHDATE = new Date("2024-08-28T00:00:00");
const INTERVAL_ID = setInterval(updateTimer, 1000);

function updateTimer() {
    let now, diff;
    let sec, min, hr, day;
    
    now = new Date();
    diff = BIRTHDATE-now;

    if (diff <= 0) {
        if (INTERVAL_ID) clearInterval(INTERVAL_ID);
        document.getElementById("timer").innerHTML = "HAPPY BIRTHDAY!";
        return;
    }

    sec = (Math.floor(diff / 1000) % 60);
    min = (Math.floor(diff / 60000) % 60);
    hr = (Math.floor(diff / 3600000) % 24);
    day = Math.floor(diff / 86400000);

    document.getElementById("timer").innerHTML = `${day<=9 ? "0":""}${day}:${hr<=9 ? "0":""}${hr}:${min<=9 ? "0":""}${min}:${sec<=9 ? "0":""}${sec}`;
}