/*
	секция Ход строительства
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initStatus() {
	Vue.component("app-status", {
		props: {
			inView: Boolean
		},
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
		},
		watch: {
			inView() {
				if (this.inView) this.init();
			}
		},
		methods: {
			init() {},
			getPoster(url) {
				let id = getYoutubeId(url);
				return "https://i3.ytimg.com/vi/"+ id +"/hqdefault.jpg";
			}
		}
	});
}