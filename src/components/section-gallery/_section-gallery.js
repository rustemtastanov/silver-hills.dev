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
		},
		mounted() {
			this.initFancy();
		},
		computed: {
			Slider() {
				return this.$refs.slider;
			}
		},
		methods: {
			initFancy() {
				const vm = this;
				$(vm.$refs.fancy).fancybox({
					hash: false,
					protect: true,
					transitionEffect: "slide",
					transitionDuration: 800,
					animationDuration: 800,
					clickSlide: false,
					buttons: [
						"close"
					],
					beforeShow: function(current, previous) {
						if (vm.Slider) vm.Slider.swiper.slideTo(current.currIndex);
					}
				});
			}
		}
	});
}