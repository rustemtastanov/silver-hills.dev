/*
	секция Ход строительства
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initStatus() {
	Vue.component("app-status", {
		data() {
			return {
				Slides: STATUS_DATA,
				options: {
					direction: "horizontal",
					slideActiveClass: "active",
					slideToClickedSlide: true,
					speed: 600,
					lazy: {
						loadPrevNext: true,
						loadPrevNextAmount: 3
					},
					slidesPerView: "auto",
					spaceBetween: 56
				}
			}
		}
	});
}