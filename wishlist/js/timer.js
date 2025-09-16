/*
 * timer.js
 * 19/03/2025
 *
 * calculates and sets the timer (for the main page index.html)
 */

const birthdate = new Date(2025, 11, 25);
var interval;

function refreshTimer() {
    var now = new Date();
    var diff = birthdate - now;

    if (diff < 0) {
        //document.getElementById("timerHB").classList.remove("hideTimerSection");
        document.getElementById("timerD").classList.add("hideTimerSection");
        document.getElementById("timerH").classList.add("hideTimerSection");
        document.getElementById("timerM").classList.add("hideTimerSection");
        document.getElementById("timerS").classList.add("hideTimerSection");

        document.getElementById("timerD").innerHTML = "MERRY CHRISTMAS!";

        clearInterval(interval);
        return;
    }

    var sec = Math.max(Math.floor(diff / 1000) % 60, 0);
    var min = Math.max(Math.floor(diff / 60000) % 60, 0);
    var hour = Math.max(Math.floor(diff / 3600000) % 24, 0);
    var day = Math.max(Math.floor(diff / 86400000), 0);

    var secText = `${sec<10?"0":""}${sec}`;
    var minText = `${min<10?"0":""}${min}`;
    var hourText = `${hour<10?"0":""}${hour}`;
    var dayText = `${day<10?"0":""}${day}`;

    document.getElementById("timerD").innerHTML = `${dayText}`;
    document.getElementById("timerH").innerHTML = `${hourText}`;
    document.getElementById("timerM").innerHTML = `${minText}`;
    document.getElementById("timerS").innerHTML = `${secText}`;
}

interval = setInterval(refreshTimer, 1000);

refreshTimer();