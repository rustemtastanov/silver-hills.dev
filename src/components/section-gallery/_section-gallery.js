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
				Direction: "start",
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
			const vm = this;
			vm.initFancy();
			vm.Slider.swiper
				.on("slideNextTransitionStart", function() {
					vm.Direction = this.realIndex+1==vm.Slides.length ? "end" : "next";
				})
				.on("slidePrevTransitionStart", function() {
					vm.Direction = this.realIndex==0 ? "start" : "prev";
				})
				.on("reachBeginning", function() {
					vm.Direction = "start";
				})
				.on("reachEnd", function() {
					vm.Direction = "end";
				});
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