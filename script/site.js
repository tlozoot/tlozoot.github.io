$(function() {
	if ($(window).width() < 800) {
		$("body").addClass("dense");
	}
	
	$(window).resize(function(e) {
		var w = $(window).width();
		var h = $(window).height();
		if (w < 800) {
			$("body").addClass("dense");
		} else if (w > 800) {
			$("body").removeClass("dense");
		}
	});
	
	$(window).keydown(function(e) {
		if (event.keyCode == 67) {
			$("body").toggleClass("dense");
		} else if (event.keyCode == 84) {
			transition();
		}
	})
});