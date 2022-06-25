/*
	секция Галерея
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initGallery() {
	Vue.component("app-gallery", {
		props: {
			isPhone: Boolean,
			inView: Boolean
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
		watch: {
			inView() {
				if (this.inView) this.init();
			}
		},
		computed: {
			Slider() {
				return this.$refs.slider;
			}
		},
		methods: {
			init() {
				const vm = this;
				if (vm.Slider) {
					vm.initLightbox();
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
				}
			},
			initLightbox() {
				const vm = this;
				let lightBox = GLightbox({
					selector: ".gallery-zoom"
				});
				lightBox.on("slide_changed", function(obj) {
					if (vm.Slider) vm.Slider.swiper.slideTo(obj.current.index);
				});
			}
		}
	});
}