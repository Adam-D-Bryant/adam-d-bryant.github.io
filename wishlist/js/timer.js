const birthdate = new Date(2025, 2, 20);

function refreshTimer() {
    var now = new Date();
    var diff = birthdate - now;

    var sec = (diff / 1000) % 60;
    var min = (diff / 60000) % 60;
    var hour = (diff / 3600000) % 24;
    var day = diff / 86400000;

    document.getElementById("timer").innerHTML = `${day} : ${hour} : ${min} : ${sec}`;
}

setInterval(refreshTimer, 1000);

refreshTimer();