/*
	модалка - Ход строительства
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initModalStatus() {
	Vue.component("app-modal-status", {
		props: {
			Selected: Object,
			isShowed: Boolean
		},
		data() {
			return {
				isLoaded: false,
				options: {
					direction: "horizontal",
					speed: 600,
					lazy: {
						loadPrevNext: true
					},
					navigation: {
						nextEl: ".modal-status-next",
						prevEl: ".modal-status-prev",
						disabledClass: "disabled"
					}
				},
				optionsPager: {
					direction: "vertical",
					speed: 600,
					slideActiveClass: "active"
				}
			}
		},
		watch: {
			Selected() {
				const vm = this;
				setTimeout(function() {
					vm.initPager();
				}, 100);
			}
		},
		created() {
			this.isLoaded = true;
		},
		computed: {
			Amount() {
				if (this.Selected.photos) return this.Selected.photos.length;
			}
		},
		methods: {
			initPager() {
				const vm = this;
				let slider = vm.$refs.modalStatusSlider;
				let pager  = vm.$refs.modalStatusPager;
				slider.swiper.on("slideChange", function() {
					let index = this.realIndex;
					pager.swiper.slideTo(index);
				});
			}
		}
	});
}