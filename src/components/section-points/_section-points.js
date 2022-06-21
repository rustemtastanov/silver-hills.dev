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
					direction: "vertical",
					slideActiveClass: "active",
					speed: 1200,
					autoHeight: true,
					simulateTouch: false
				}
			}
		},
		computed: {
			Slider() {
				return this.$refs.slider;
			}
		},
		mounted() {
			this.Selected = 1;
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