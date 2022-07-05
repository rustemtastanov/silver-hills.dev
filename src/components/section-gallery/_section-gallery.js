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
					watchSlidesProgress: true,
					on: {
						progress: function() {
							var swiper = this;
							for (let i=0; i<swiper.slides.length; i++) {
								let progress 	= swiper.slides[i].progress;
								let offset 		= swiper.width * .7;
								let pos 			= progress * offset;
								swiper.slides[i].querySelector(".img").style.transform = "translate3d(" + pos + "px, 0, 0)";
							}      
						},
						touchStart: function() {
							var swiper = this;
							for (let i=0; i<swiper.slides.length; i++) {
								swiper.slides[i].style.transition = "";
							}
						},
						setTransition: function(swiper, speed) {
							var swiper = this;
							for (let i=0; i<swiper["slides"]["length"]; i++) {
								swiper.slides[i].style.transition = speed + "ms";
								swiper.slides[i].querySelector(".img").style.transition = speed + "ms";
							}
						}
					},
					breakpointsInverse: true,
					breakpoints: {
						0: {
							speed: 800
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
				const vm = this;
				if (vm.inView) setTimeout(function() {
					vm.init();
				}, 400);
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