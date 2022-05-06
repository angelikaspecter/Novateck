$(function () {
	$("#navbarSupportedContent ul li a").click(function () {
		$("#navbarSupportedContent ul li a").removeClass("active");
		$(this).toggleClass("active");
	})
});