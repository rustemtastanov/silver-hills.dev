/*
	секция Коммерческие помещения
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initCommercial() {
	Vue.component("app-commercial", {
		data() {
			return {
				isLoaded: false,
				Items: [],
				Areas: [],
				SelectedArea: null,
				Selected: {},
				ImageLoaded: false,
				url: URLS.commerce
			}
		},
		created() {
			const vm = this;
			fetch(vm.url)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					vm.Items = data;
					vm.init();
				});
		},
		methods: {
			init() {
				this.isLoaded = true;
				this.getAreas();
			},
			loadImage() {
				const vm = this;
				let image = new Image();
				image.src = vm.Selected.img;
				vm.ImageLoaded = false;
				image.onload = function() {
					vm.ImageLoaded = true;
					image = null;
				};
			},
			getAreas() {
				const vm = this;
				let areas = [];
				vm.Items.forEach(function(item) {
					if (item.status) areas.push(item.area);
				});
				areas = unique(areas);
				areas = sort(areas, "asc");
				vm.Areas = areas;
				vm.selectArea(areas[0]);
			},
			selectArea(area) {
				this.SelectedArea = area;
				this.getItem();
			},
			getItem() {
				let area = this.SelectedArea;
				let item = this.Items.find(function(item) {
					return item.area==area;
				});
				this.Selected = item;
				this.loadImage();
				this.initFancy();
			},
			initFancy() {
				$(this.$refs.fancy).fancybox({
					hash: false,
					protect: true,
					animationDuration: 400,
					clickSlide: false,
					buttons: [
						"close"
					],
					beforeShow: function() {
						document.body.classList.add("flats--photo");
					},
					afterClose: function() {
						document.body.classList.remove("flats--photo");
					}
				});
			}
		}
	});
}