/*
	секция Коммерческие помещения
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initCommercial() {
	Vue.component("app-commercial", {
		data() {
			return {
				Items: COMMERCIAL_DATA,
				Areas: [],
				SelectedArea: null,
				Selected: {},
				ImageLoaded: false
			}
		},
		mounted() {
			this.getAreas();
		},
		methods: {
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
				areas = vm.unique(areas);
				areas = vm.sort(areas, "asc");
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
			},
			unique: function(array) {
				return array.filter(function(value, index, self) {
					return self.indexOf(value) === index;
				});
			},
			sort: function(array, dir) {
				return array.sort(function(val1, val2) {
					return dir=="asc" ? (val1 > val2 ? 1 : -1) : val1 < val2 ? 1 : -1;
				});
			}
		}
	});
}