$(function() {
	checkWindowScroll(true);
	$(window).scroll(function() {
		checkWindowScroll();
	});
});

function checkWindowScroll(onLoad = false) {
	if ($(window).scrollTop() != 0) {
    	$("body").addClass("scrolled");
    } else {
    	$("body").removeClass("scrolled");
    }
}