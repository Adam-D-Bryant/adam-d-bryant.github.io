setInterval(updateTimer, 1000);

function updateTimer() {
	now = new Date();
	day = new Date(2022, 7, 28);
	timeDiff = day.getTime() - now.getTime();
	secDiff = Math.floor(timeDiff/1000) % 60;
	minDiff = Math.floor(timeDiff/(1000*60)) % 60;
	hourDiff = Math.floor(timeDiff/(1000*60*60)) % 24;
	dayDiff = Math.floor(timeDiff/(1000*60*60*24));

	str = "";
	str += dayDiff + ":";
	if (hourDiff < 10) { str += "0"; }	str += hourDiff + ":";
	if (minDiff < 10) { str += "0"; }	str += minDiff + ":";
	if (secDiff < 10) { str += "0"; }	str += secDiff;
	document.getElementById("timeUntilTimer").innerHTML = str;
}
