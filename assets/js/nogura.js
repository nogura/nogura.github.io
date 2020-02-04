$(function() {
	checkWindowScroll(true);
	$(window).scroll(function() {
		checkWindowScroll();
	});
});

function checkWindowScroll(onLoad = false) {
	if ($(window).scrollTop() != 0) {
    	$("body").addClass("scrolled");
    	if (onLoad) {
			$(".mainMenu .mainLogo").hide();
			$(".mainMenu .alterLogo").show();
    	} else {
    		$(".mainMenu .mainLogo").fadeOut(100, function() {
				$(".mainMenu .alterLogo").fadeIn();
			});
    	}
    } else {
    	$("body").removeClass("scrolled");
    	if (onLoad) {
			$(".mainMenu .mainLogo").show();
			$(".mainMenu .alterLogo").hide();
    	} else {
			$(".mainMenu .alterLogo").fadeOut(150, function() {
				$(".mainMenu .mainLogo").fadeIn();
			});
    	}
    }
}