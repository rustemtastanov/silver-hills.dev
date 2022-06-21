/*
	секция Галерея
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initGallery() {
	Vue.component("app-gallery", {
		data() {
			return {
				Slides: GALLERY_DATA,
				options: {
					loop: true,
					direction: "horizontal",
					speed: 1200,
					lazy: {
						loadPrevNext: true
					},
					navigation: {
						nextEl: ".gallery-next",
						prevEl: ".gallery-prev",
						disabledClass: "disabled"
					}
				}
			}
		}
	});
}