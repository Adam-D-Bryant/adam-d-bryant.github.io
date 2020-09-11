$(window).on("load", function() {

	$(".item").mouseenter(function() {
		var item = $(this).children("a").children(".itemImg");
		item.siblings(".itemParagraph").slideDown(100);
		item.parents(".item").siblings(".item").fadeTo(0, 0.5);
		item.parents(".container-fluid").siblings(".container-fluid").children(".item").fadeTo(0, 0.5);
	});

	$(".item").mouseleave(function() {
		var item = $(this).children("a").children(".itemImg");
		item.siblings(".itemParagraph").slideUp(100);
		item.parents(".item").siblings(".item").fadeTo(0, 1);
		item.parents(".container-fluid").siblings(".container-fluid").children(".item").fadeTo(0, 1);
	});

});