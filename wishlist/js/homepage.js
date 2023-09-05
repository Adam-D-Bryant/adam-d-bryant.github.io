let christmasDate = new Date(2023, 11, 25, 0, 0, 0);
setInterval(function () {
    let curDate = new Date();
    let diff = christmasDate-curDate;
    if (diff <= 0) {
        document.getElementById("message").style.setProperty("display", "flex");
        document.getElementById("timerSection").style.setProperty("display", "none");
    }
    else {
        let days, hours, minutes, seconds;
        let sDays, sHours, sMinutes, sSeconds;

        document.getElementById("message").style.setProperty("display", "none");
        document.getElementById("timerSection").style.setProperty("display", "flex");

        seconds =   Math.floor(diff/1000)       % 60;
        minutes =   Math.floor(diff/60000)      % 60;
        hours =     Math.floor(diff/3600000)    % 24;
        days =      Math.floor(diff/86400000);

        sSeconds = ((seconds < 10) ? "0":"") + seconds;
        sMinutes = ((minutes < 10) ? "0":"") + minutes;
        sHours = ((hours < 10) ? "0":"") + hours;
        sDays = ((days < 10) ? "0":"") + days;

        document.getElementById("timerDays").innerHTML = `${sDays}`;
        document.getElementById("timerHours").innerHTML = `${sHours}`;
        document.getElementById("timerMinutes").innerHTML = `${sMinutes}`;
        document.getElementById("timerSeconds").innerHTML = `${sSeconds}`;
    }
}, 1000);

