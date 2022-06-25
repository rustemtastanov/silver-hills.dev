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
				isStart: true,
				Selected: 0,
				options: {
					loop: true,
					slideActiveClass: "active",
					autoHeight: true,
					lazy: {
						loadPrevNext: true
					},
					direction: "horizontal",
					speed: 600
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
			vm.initObserver();
		},
		methods: {
			initObserver() {
				const vm = this;
				const el = vm.$el;
				let isEntered;
				const observer = new IntersectionObserver(function(entries, observer) {
					entries.forEach(function(entry) {
						let isEnter = entry.isIntersecting;
						if (isEnter && !isEntered) {
							isEntered = true;
						}
						if (!isEnter && isEntered && entry.boundingClientRect.y>=0 && !vm.isStart) {
							isEntered = false;
							vm.isStart = true;
						}
					});
				});
				observer.observe(el);
			}
		}
	});
}