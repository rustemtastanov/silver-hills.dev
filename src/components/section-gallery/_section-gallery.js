/*
	секция Галерея
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initGallery() {
	Vue.component("app-gallery", {
		props: {
			isPhone: Boolean
		},
		data() {
			return {
				Slides: GALLERY_DATA,
				options: {
					autoHeight: true,
					direction: "horizontal",
					lazy: {
						loadPrevNext: true
					},
					navigation: {
						nextEl: ".gallery-next",
						prevEl: ".gallery-prev",
						disabledClass: "disabled"
					},
					breakpointsInverse: true,
					breakpoints: {
						0: {
							speed: 600
						},
						768: {
							speed: 1200
						}
					}
				}
			}
		}
	});
}