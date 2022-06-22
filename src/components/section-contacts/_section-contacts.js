/*
	секция Контакты
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initContacts() {
	Vue.component("app-contacts", {
		props: {
			isPhone: Boolean
		},
		data() {
			return {
				MapData: MAP_DATA,
				timer: null,
				map: null
			}
		},
		mounted() {
			const vm = this;
			vm.timer = setInterval(function() {
				vm.check();
			}, 4000);
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
		methods: {
			check() {
				if (typeof DG!="undefined") {
					clearInterval(this.timer);
					this.render();
				}
			},
			render() {
				const vm = this;
				let map;

				let width 	= vm.Sizes[0];
				let height 	= vm.Sizes[1];
				let x 			= vm.Offset[0];
				let y 			= vm.Offset[1];

				DG.then(function() {
					map = DG.map(vm.mapEl, {
						center: vm.LatLng,
						zoom: vm.isPhone ? vm.MapData.zoom-1 : vm.MapData.zoom,
						fullscreenControl: false,
						zoomControl: false,
						scrollWheelZoom: true
					});

					let icon = DG.icon({
						iconUrl: vm.MapData.marker,
						iconSize: [width, height],
						iconAnchor: [width/2 - x, height/2 - y]
					});

					DG.marker(vm.LatLng, {
						icon: icon,
						riseOnHover: false,
						alt: "pin"
					}).addTo(map);

					let coords = [];

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

					vm.map = map;
				});
			}
		}
	});
}