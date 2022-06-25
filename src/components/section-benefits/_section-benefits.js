/*
	секция Преимущества
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initBenefits() {
	Vue.component("app-benefits", {
		props: {
			inView: Boolean
		},
		data() {
			return {
				Slides: BENEFITS_DATA,
				Selected: 0,
				options: {
					direction: "horizontal",
					slideActiveClass: "active",
					touchReleaseOnEdges: true,
					speed: 1200,
					lazy: {
						loadPrevNext: true
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
					}
				}
			}
		},
		watch: {
			inView() {
				if (this.inView) this.init();
			},
			Selected() {
				this.$refs.slider.swiper.slideTo(this.Selected);
			}
		},
		methods: {
			init() {
				const vm = this;
				const Slider = vm.$refs.slider;
				if (Slider) {
					Slider.swiper.on("slideChange", function() {
						let index = this.realIndex;
						vm.Selected = index;
					});
				}
			}
		}
	});
}