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
				},
				player: false,
				playing: false
			}
		},
		watch: {
			Selected() {
				const vm = this;
				if (typeof vm.Selected.photos!="undefined") {
					setTimeout(function() {
						vm.initPager();
						vm.initVideo();
					}, 100);
				} else vm.checkPlayer();
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
			initVideo() {
				const vm = this;
				let slider = vm.$refs.modalStatusSlider;
				vm.checkVideo();
				slider.swiper.on("slideChange", function() {
					vm.checkVideo();
				});
			},
			checkPlayer() {
				if (this.playing) {
					this.player.stopVideo();
					this.playing = false;
				}
			},
			checkVideo() {
				const vm = this;
				let slider 		= vm.$refs.modalStatusSlider;
				let id 				= vm.Selected.id;
				let index 		= slider.swiper.realIndex;
				let videoUrl 	= vm.Selected.photos[index].video;
				let videoId 	= "video-" + id + "-" + index;
				vm.checkPlayer();
				if (typeof videoUrl!="undefined") {
					let youtubeId = getYoutubeId(videoUrl);
					new YT.Player(videoId, {
						videoId: youtubeId,
						events: {
							"onReady": function(event) {
								vm.player = event.target;
							},
							"onStateChange": function(event) {
								if (event.data===1) vm.playing = true; else vm.playing = false;
							}
						}
					});
				}
			},
			initPager() {
				const vm = this;
				let slider = vm.$refs.modalStatusSlider;
				let pager  = vm.$refs.modalStatusPager;
				slider.swiper.on("slideChange", function() {
					let index = this.realIndex;
					pager.swiper.slideTo(index);
				});
			},
			getYoutubeSrc(url) {
				return "https://www.youtube.com/embed/" + getYoutubeId(url);
			}
		}
	});
}