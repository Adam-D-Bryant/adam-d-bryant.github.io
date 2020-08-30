pGags = 
[
	"Finding new shirts...", 
	"Looking for new games...", 
	"Fixing bugs (they won't stop appearing!)...",
	"Taking another break...",
	"Finding more shinies and trinkets...",
	"Taking a good, long sip of apple juice...",
	"Munching on an endless supply of chocolate...",
	"Making things look pretty...",
	"Adding images of funny shirts...",
	"Testing out a new feature that probably won't work...",
	"Defending against the cyber pirates...",
	"Re-designing the page...",
	"Adding more buttons...",
	"Squashing bugs (cyber bugs)...",
	"Inhaling chocolate...",
	"Sleeping...",
	"Chugging cups of mocha...",
	"Googling solutions...",
];

nGags = 
[
	"Oh no I broke everything again!",
	"Nothing's working again! Help!",
	"Oh no! What did I do?",
	"Whoops! That wasn't supposed to happen!"
];

pGagNum = pGags.length;
nGagNum = nGags.length;

curGag = Math.floor(Math.random() * pGagNum);

$(window).on("load", function() {
	function changeGag() {

		var positiveGag = true;

		var w = $("#pBar").width();
		var pW = $("#pBar").offsetParent().width();
		w = Math.round(100 * w/pW);

		var add = Math.floor((Math.random() * 16) + 10);
		if (w+add >= 100) { w = Math.floor((Math.random() * 31) + 20); positiveGag = false; }
		else { w += add; }

		if (positiveGag) { 
			var newGag = Math.floor(Math.random() * pGagNum);
			while(newGag == curGag) {
				newGag = Math.floor(Math.random() * pGagNum)
			}
			$("#gagQuote").html(pGags[newGag]);
			curGag = newGag;
		}
		else {
			curGag = -1;
			var newGag = Math.floor(Math.random() * nGagNum);
			$("#gagQuote").html(nGags[newGag]);
		}
		
		$("#pBar").width((w/100) * pW);
	}

	window.setInterval(changeGag, 5000);

	$("#gagQuote").html(pGags[curGag]);
	$("#pBar").width((Math.floor((Math.random() * 16) + 10)/100) * $("#pBar").offsetParent().width());
});