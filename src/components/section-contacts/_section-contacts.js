/*
	секция Контакты
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initContacts() {
	Vue.component("app-contacts", {
		props: {
			isPhone: Boolean,
			inView: Boolean
		},
		data() {
			return {
				MapData: MAP_DATA,
				MapZoom: MAP_DATA.zoom,
				timer: null,
				map: null
			}
		},
		computed: {
			LatLng() {
				return this.MapData.latlng.split(",");
			},
			Sizes() {
				return this.MapData.sizes.split(",");
			},
			Offset() {
				return this.MapData.offset.split(",");
			},
			mapEl() {
				return this.$refs.mapEl;
			}
		},
		watch: {
			inView() {
				if (this.inView) this.init();
			}
		},
		methods: {
			init() {
				const vm = this;
				vm.timer = setInterval(function() {
					vm.check();
				}, 2000);
				MapZoom: MAP_DATA.zoom,
				vm.MapZoom = vm.isPhone ? vm.MapData.zoom-1 : vm.MapData.zoom;
			},
			check() {
				const vm = this;
				if (typeof DG!="undefined") {
					clearInterval(vm.timer);
					vm.render();
				}
			},
			render() {
				const vm = this;
				let map;

				const width 	= vm.Sizes[0];
				const height 	= vm.Sizes[1];
				const x 			= vm.Offset[0];
				const y 			= vm.Offset[1];

				DG.then(function() {
					map = DG.map(vm.mapEl, {
						center: vm.LatLng,
						minZoom: 15,
						maxZoom: 18,
						zoom: vm.isPhone ? vm.MapData.zoom-1 : vm.MapData.zoom,
						fullscreenControl: false,
						zoomControl: false,
						scrollWheelZoom: true
					});

					const icon = DG.divIcon({
						html: "<div class='map-marker'>" +
										"<div class='map-marker-img'>" +
											"<img src='" + vm.MapData.marker + "' class='img--cover' alt='icon' />" +
										"</div>" +
									"</div>"
					});

					const marker = DG.marker(vm.LatLng, {
						icon: icon,
						riseOnHover: false,
						alt: "pin"
					}).addTo(map);

					let coords = [];

					document.addEventListener("click", function() {
					});

					vm.MapData.coords.split("],").forEach(function(value) {
						value = value.replace("[", "").replace("]", "");
						coords.push(value.split(","));
					});

					DG.polygon(coords, {
						"color": "#03abbf",
						"opacity": 1,
						"weight": 0,
						"fillColor": "#03abbf",
						"fillOpacity": 1,
					}).addTo(map);

					map.on("zoom", function() {
						vm.MapZoom = map.getZoom();
					});

					vm.map = map;
				});
			}
		}
	});
}