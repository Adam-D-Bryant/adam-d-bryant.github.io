$(window).on("load", function() {

	function updateTime() {
		var cur = new Date();
		var xmas = new Date(2020, 11, 25);

		var seconds = Math.floor(Math.abs(((cur.getTime() - xmas.getTime()) / (1000)))) % 60;
		var minutes = Math.floor(Math.abs(((cur.getTime() - xmas.getTime()) / (1000 * 60)))) % 60;
		var hours = Math.floor(Math.abs(((cur.getTime() - xmas.getTime()) / (1000 * 3600)))) % 24;
	    var days = Math.floor(Math.abs(((cur.getTime() - xmas.getTime()) / (1000 * 3600 * 24))));

		if (days <= 0 || cur.getTime() > xmas.getTime()){
			$("#christmasDate").hide();
			$("#christmasTime").html("Merry Christmas!");
		}
		else {
			if (days < 10) { days = "0" + days; }
			if (hours < 10) { hours = "0" + hours; }
			if (minutes < 10) { minutes = "0" + minutes; }
			if (seconds < 10) { seconds = "0" + seconds; }

			var txt = "Tick";
			if (seconds % 2 == 0) { txt = "Tock"; }
			$("#christmasDate").html("Christmas is near... ");
			$("#christmasTime").html(days+" : "+hours+" : "+minutes+" : "+seconds);
		}
	}

	setInterval(updateTime, 100);
});