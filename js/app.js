window.onload = function () {
	new Swiper(".swiper", {
		// Optional parameters
		loop: true,

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		autoHeight: true,
	});
};
