$(function () {
	new Swiper(".swiper", {
		// Optional parameters
		loop: true,

		// Navigation arrows
		navigation: {
			nextEl: ".banner-slider-next",
			prevEl: ".banner-slider-prev",
		},

		autoHeight: true,
		autoplay: {
			delay: 2000,
		},
	});

	$("#header-mobile-button").on("click", function (e) {
		$("#header-nav").slideToggle("mobile");
	});
});
