/*
	секция Планировки
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initFlats() {
	Vue.component("app-flats", {
		data() {
			return {
				isLoaded: false,
				ItemsAll: [],
				Items: [],
				Rooms: [],
				Types: [],
				Levels: [],
				Areas: [],
				Flats: [],
				Flat: {},
				Blocks: [],
				url: URLS.flats,
				SelectedRooms: null,
				SelectedType: null,
				SelectedLevel: 0,
				SelectedArea: null,
				SelectedView: "default",
				SelectedFlat: false,
				ImageLoaded: false
			}
		},
		created() {
			const vm = this;
			fetch(vm.url)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					vm.ItemsAll = data;
					vm.init();
				});
		},
		methods: {
			init() {
				let rooms = [];
				let types = [];
				let items = [];
				this.ItemsAll.forEach(function(item) {
					if (item.status==1) {
						items.push(item);
						if (item.type) {
							types.push(item.type);
						} else {
							rooms.push(item.rooms);
						}
					}
				});
				types = unique(types);
				types = sort(types, "asc");
				rooms = unique(rooms);
				rooms = sort(rooms, "asc");
				this.isLoaded = true;
				this.Items = items;
				this.Rooms = rooms;
				this.Types = types;
				this.SelectRooms(rooms[0]);
			},
			SelectTypes(type) {
				this.Select("type", type);
			},
			SelectRooms(rooms) {
				this.Select("rooms", rooms);
			},
			Select(param, value) {
				this.SelectedRooms 	= param == "rooms" ? value : null;
				this.SelectedType 	= param == "type" ? value : null;
				let levels = [];
				this.Items.forEach(function(item) {
					if ( (param=="type" && item.type==value) || (param=="rooms" && item.rooms==value) ) {
						levels.push(item.level);
					}
				});
				levels = unique(levels);
				levels = sort(levels, "asc");
				let level = this.SelectedFlat ? this.SelectedFlat.level : levels[0];
				this.Levels = levels;
				this.SelectedView = "default";
				this.SelectLevel(level);
			},
			SelectLevel(level) {
				this.SelectedLevel = level;
				let rooms = this.SelectedRooms;
				let type 	= this.SelectedType;
				let areas = [];
				this.Items.forEach(function(item) {
					if ( (type && item.type==type && item.level==level) || (rooms && item.rooms==rooms && item.level==level) ) {
						areas.push(item.area);
					}
				});
				areas = unique(areas);
				areas = sort(areas, "asc");
				let area = this.SelectedFlat ? this.SelectedFlat.area : areas.indexOf(this.Flat.area)>=0 ? this.Flat.area : areas[0];
				this.Areas = areas;
				this.SelectedFlat = false;
				this.SelectArea(area);
			},
			SelectArea(area) {
				this.SelectedArea = area;
				let rooms = this.SelectedRooms;
				let type 	= this.SelectedType;
				let level = this.SelectedLevel;
				let blocks = [];
				let items = [];
				this.Items.forEach(function(item) {
					if ( (rooms && item.rooms==rooms && item.level==level && item.area==area) || (type && item.type==type && item.level==level && item.area==area) ) {
						blocks.push(item.block);
						items.push(item);
					}
				});
				blocks = unique(blocks);
				blocks = sort(blocks, "asc");
				this.Blocks = blocks;
				this.Flats = items;
				this.Flat  = items[0];
				this.loadImage();
				this.initFancy();
			},
			initFancy() {
				$(this.$refs.fancy).fancybox({
					hash: false,
					protect: true,
					transitionEffect: "slide",
					transitionDuration: 800,
					animationDuration: 800,
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
			},
			loadImage() {
				const vm = this;
				let image = new Image();
				image.src = vm.Flat.img;
				vm.ImageLoaded = false;
				image.onload = function() {
					vm.ImageLoaded = true;
					image = null;
				};
			},
			checkStatus: function(area, block) {
				var status = "";
				var item = this.ItemsAll.filter(function(item) {
					return item.block==block && item.area==area && item.status==1;
				})[0];
				if (item) status = "available";
				if (!item || item.status!=1) status = "disabled";
				if (item && this.Flat && item.area==this.Flat.area) status = "selected";
				return status;
			},
			selectFlat(area, block) {
				let flat = this.Items.find(function(item) {
					return item.area==area && item.block==block;
				});
				this.SelectedFlat = flat;
				this.Select(flat.type ? "type" : "rooms", flat.type ? flat.type : flat.rooms);
			}
		}
	});
}