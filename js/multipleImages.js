images = 
[
	["../images/games/laytonMystery.jpg", "../images/games/laytonMystery2.jpg", "../images/games/laytonMystery3.jpg"],
	["../images/food/ferrero.jpg", "../images/food/milkyBar.jpg"],
	["../images/food/crunchyNut.jpg", "../images/food/frootLoops.jpg", "../images/food/sultanaBran.jpg", 
	"../images/food/nutrigrain.jpg", "../images/food/cocoPops.jpg"],
	["../images/misc/cash.jpg", "../images/misc/visa.jpg"]
]

$(window).on("load", function() {

	$(".imgSlideLeft").on("click", function() {
		changeImage($(this), false);
	});

	$(".imgSlideRight").on("click", function() {
		changeImage($(this), true);
	});

});

function changeImage(button, right) {
	var img = button.siblings(".imgSlide");					//The image element itself
	var imgList = getImages(img.attr("src"));					//The sub-array of the image source and its siblings
	var imgPos = getImagePosition(img.attr("src"), imgList);	//The position in the sub-array of the current image

	imgPos += (right ? 1:-1);
	if (imgPos >= imgList.length) { imgPos = 0; }
	else if (imgPos <= -1) { imgPos = imgList.length-1; }

	img.attr("src", imgList[imgPos]);
}

function getImages(src) {
	for (var i = 0; i < images.length; i++) {
		for (var j = 0; j < images[i].length; j++) {
			if (images[i][j] == src) {
				return images[i];
			}
		}
	}

	return -1;
}

function getImagePosition(src, imgs) {
	for (var i = 0; i < imgs.length; i++) {
		if (imgs[i] == src) {
			return i;
		}
	}

	return -1;
}