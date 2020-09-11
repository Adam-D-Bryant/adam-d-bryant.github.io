$(window).on("load", function() {

	$(".moreInfoButton").on("click", function() {
		var infoBox = $(this).parents(".item").siblings(".itemInfo");
		
		if (infoBox.css("opacity") == 0) {		//Show info
			infoBox.css("opacity", "1");
			infoBox.children().css("display", "initial");
			$(this).html("<i class=\"fa fa-fw fa-info-circle\"></i> Less Info");
		}
		else {									//Hide info
			infoBox.css("opacity", "0");
			infoBox.children().css("display", "none");
			$(this).html("<i class=\"fa fa-fw fa-info-circle\"></i> More Info");
		}

	});

	$(".moreInfoButton").mouseenter(function() {
		$(this).css("width", "200px");
	});

	$(".moreInfoButton").mouseleave(function() {
		$(this).css("width", "150px");
	});

	$(".linkButton").mouseenter(function() {
		$(this).css("width", "200px");
	});

	$(".linkButton").mouseleave(function() {
		$(this).css("width", "150px");
	});

	$(".itemInfo").children().css("display", "none");
});