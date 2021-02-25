$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Student.", "Aspiring Software Developer.", "Aspiring Web Developer"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});
});