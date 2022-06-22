/*
	секция Точки притяжения
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initPoints() {
	Vue.component("app-points", {
		data() {
			return {
				Slides: POINTS_DATA,
				Selected: 0,
				options: {
					loop: true,
					slideActiveClass: "active",
					autoHeight: true,
					lazy: {
						loadPrevNext: true
					},
					breakpointsInverse: true,
					breakpoints: {
						0: {
							direction: "horizontal",
							speed: 600
						},
						768: {
							simulateTouch: false,
							direction: "vertical",
							speed: 1200
						}
					}
				},
				optionsPager: {
					direction: "vertical",
					speed: 600,
					slideActiveClass: "active"
				}
			}
		},
		computed: {
			Pager() {
				return this.$refs.pager;
			},
			Slider() {
				return this.$refs.slider;
			}
		},
		mounted() {
			const vm = this;
			vm.Selected = 1;
			vm.Slider.swiper.on("slideChange", function() {
				let index = this.realIndex;
				vm.Pager.swiper.slideTo(index);
			});
		},
		watch: {
			Selected() {
				const vm = this;
				// console.log(this.Selected, "points-svg-"+ this.Selected)
				vm.Slider.swiper.slideTo(vm.Selected);
				// setTimeout(function() {
				// let el = new Vivus("points-svg-"+ vm.Selected, {
				// 	start: "manual",
				// 	duration: 2000,
				// 	delay: 1000,
				// 	reverseStack: true,
				// 	onReady: function() {
				// 		console.log("onReady")
				// 	}
				// });
				// el.stop().reset().play(2000);
				// }, 200)
				// this.$refs["svg-" + this.Selected][0].querySelectorAll(".path").forEach(function(el, i) {
				// 	console.log(el.getTotalLength())
				// });
			}
		}
	});
}