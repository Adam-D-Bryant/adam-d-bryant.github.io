$(window).on("load", function() {

	function updateTime() {
		var cur = new Date();
		var xmas = new Date(2020, 11, 25);

		var seconds = Math.floor(Math.abs(((cur.getTime() - xmas.getTime()) / (1000)))) % 60;
		var minutes = Math.floor(Math.abs(((cur.getTime() - xmas.getTime()) / (1000 * 60)))) % 60;
		var hours = Math.floor(Math.abs(((cur.getTime() - xmas.getTime()) / (1000 * 3600)))) % 24;
	    var days = Math.floor(Math.abs(((cur.getTime() - xmas.getTime()) / (1000 * 3600 * 24))));

		if (days < 1 || cur.getTime() > xmas.getTime()){
			$("#christmasDate").html("Merry Christmas!");
		}
		else {
			var txt = "Time until Christmas: ";
			txt += (days + " day" + (days != 1 ? "s":"") + ", ");
			txt += (hours + " hour" + (hours != 1 ? "s":"") + ", ");
			txt += (minutes + " minute" + (minutes != 1 ? "s":"") + " and ");
			txt += (seconds + " second" + (seconds != 1 ? "s":"") + "!");
			$("#christmasDate").html(txt);
		}
	}

	setInterval(updateTime, 100);
});