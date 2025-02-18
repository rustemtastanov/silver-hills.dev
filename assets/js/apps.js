"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
	секция Заявка
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initOrder() {
  Vue.component("app-order", {
    props: {
      Index: Number
    },
    data: function data() {
      return {};
    },
    mounted: function mounted() {// console.log("mounted", this.Index)
    }
  });
}
/*
	секция Преимущества
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */


function initBenefits() {
  Vue.component("app-benefits", {
    props: {
      inView: Boolean
    },
    data: function data() {
      return {
        Slides: BENEFITS_DATA,
        Selected: 0,
        options: {
          direction: "horizontal",
          slideActiveClass: "active",
          touchReleaseOnEdges: true,
          speed: 1200,
          lazy: {
            loadPrevNext: true
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          watchSlidesProgress: true,
          on: {
            progress: function progress() {
              var swiper = this;

              for (var i = 0; i < swiper.slides.length; i++) {
                var progress = swiper.slides[i].progress;
                var offset = swiper.width * .7;
                var pos = progress * offset;
                swiper.slides[i].querySelector(".img").style.transform = "translate3d(" + pos + "px, 0, 0)";
              }
            },
            touchStart: function touchStart() {
              var swiper = this;

              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },
            setTransition: function setTransition(swiper, speed) {
              var swiper = this;

              for (var i = 0; i < swiper["slides"]["length"]; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".img").style.transition = speed + "ms";
              }
            }
          }
        }
      };
    },
    watch: {
      inView: function inView() {
        var vm = this;
        if (vm.inView) setTimeout(function () {
          vm.init();
        }, 400);
      },
      Selected: function Selected() {
        var vm = this;
        vm.$refs.slider.swiper.autoplay.stop();
        vm.$refs.slider.swiper.slideTo(vm.Selected);
        setTimeout(function () {
          vm.$refs.slider.swiper.autoplay.start();
        }, 5000);
      }
    },
    methods: {
      init: function init() {
        var vm = this;
        var Slider = vm.$refs.slider;

        if (Slider) {
          Slider.swiper.on("slideChange", function () {
            var index = this.realIndex;
            vm.Selected = index;
          });
        }
      }
    }
  });
}
/*
	секция Точки притяжения
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */


function initPoints() {
  Vue.component("app-points", {
    data: function data() {
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
      };
    },
    computed: {
      Pager: function Pager() {
        return this.$refs.pager;
      },
      Slider: function Slider() {
        return this.$refs.slider;
      }
    },
    mounted: function mounted() {
      var vm = this;
      vm.Selected = 1;
      vm.Slider.swiper.on("slideChange", function () {
        var index = this.realIndex;
        vm.Pager.swiper.slideTo(index);
      });
      vm.initObserver();
    },
    methods: {
      initObserver: function initObserver() {
        var vm = this;
        var el = vm.$el;
        var isEntered;
        var observer = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            var isEnter = entry.isIntersecting;

            if (isEnter && !isEntered) {
              isEntered = true;
            }

            if (!isEnter && isEntered && entry.boundingClientRect.y >= 0 && !vm.isStart) {
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
/*
	секция Галерея
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */


function initGallery() {
  Vue.component("app-gallery", {
    props: {
      isPhone: Boolean,
      inView: Boolean
    },
    data: function data() {
      return {
        Slides: GALLERY_DATA,
        Direction: "start",
        options: {
          autoHeight: true,
          direction: "horizontal",
          lazy: {
            loadPrevNext: true
          },
          navigation: {
            nextEl: ".gallery-next",
            prevEl: ".gallery-prev",
            disabledClass: "disabled"
          },
          watchSlidesProgress: true,
          on: {
            progress: function progress() {
              var swiper = this;

              for (var i = 0; i < swiper.slides.length; i++) {
                var progress = swiper.slides[i].progress;
                var offset = swiper.width * .7;
                var pos = progress * offset;
                swiper.slides[i].querySelector(".img").style.transform = "translate3d(" + pos + "px, 0, 0)";
              }
            },
            touchStart: function touchStart() {
              var swiper = this;

              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },
            setTransition: function setTransition(swiper, speed) {
              var swiper = this;

              for (var i = 0; i < swiper["slides"]["length"]; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".img").style.transition = speed + "ms";
              }
            }
          },
          breakpointsInverse: true,
          breakpoints: {
            0: {
              speed: 800
            },
            768: {
              speed: 1200
            }
          }
        }
      };
    },
    watch: {
      inView: function inView() {
        var vm = this;
        if (vm.inView) setTimeout(function () {
          vm.init();
        }, 400);
      }
    },
    computed: {
      Slider: function Slider() {
        return this.$refs.slider;
      }
    },
    methods: {
      init: function init() {
        var vm = this;

        if (vm.Slider) {
          vm.initLightbox();
          vm.Slider.swiper.on("slideNextTransitionStart", function () {
            vm.Direction = this.realIndex + 1 == vm.Slides.length ? "end" : "next";
          }).on("slidePrevTransitionStart", function () {
            vm.Direction = this.realIndex == 0 ? "start" : "prev";
          }).on("reachBeginning", function () {
            vm.Direction = "start";
          }).on("reachEnd", function () {
            vm.Direction = "end";
          });
        }
      },
      initLightbox: function initLightbox() {
        var vm = this;
        var lightBox = GLightbox({
          selector: ".gallery-zoom"
        });
        lightBox.on("slide_changed", function (obj) {
          if (vm.Slider) vm.Slider.swiper.slideTo(obj.current.index);
        });
      }
    }
  });
}
/*
	секция Планировки
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */


function initFlats() {
  Vue.component("app-flats", {
    props: {
      inView: Boolean
    },
    data: function data() {
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
        ImageLoaded: false,
        LightBox: null
      };
    },
    watch: {
      inView: function inView() {
        if (this.inView) this.load();
      }
    },
    methods: {
      load: function load() {
        var vm = this;
        fetch(vm.url).then(function (response) {
          return response.json();
        }).then(function (data) {
          vm.ItemsAll = data;
          vm.init();
        });
      },
      init: function init() {
        var rooms = [];
        var types = [];
        var items = [];
        this.ItemsAll.forEach(function (item) {
          if (item.status == 1) {
            items.push(item);

            if (item.type != 0) {
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
      SelectTypes: function SelectTypes(type) {
        this.Select("type", type);
      },
      SelectRooms: function SelectRooms(rooms) {
        this.Select("rooms", rooms);
      },
      Select: function Select(param, value) {
        this.SelectedRooms = param == "rooms" ? value : null;
        this.SelectedType = param == "type" ? value : null;
        var levels = [];
        this.Items.forEach(function (item) {
          if (param == "type" && item.type == value || param == "rooms" && item.rooms == value) {
            levels.push(item.level);
          }
        });
        levels = unique(levels);
        levels = sort(levels, "asc");
        var level = this.SelectedFlat ? this.SelectedFlat.level : levels[0];
        this.Levels = levels;
        this.SelectedView = "default";
        this.SelectLevel(level);
      },
      SelectLevel: function SelectLevel(level) {
        this.SelectedLevel = level;
        var rooms = this.SelectedRooms;
        var type = this.SelectedType;
        var areas = [];
        this.Items.forEach(function (item) {
          if (type && item.type == type && item.level == level || rooms && item.rooms == rooms && item.level == level) {
            areas.push(item.area);
          }
        });
        areas = unique(areas);
        areas = sort(areas, "asc");
        var area = this.SelectedFlat ? this.SelectedFlat.area : areas.indexOf(this.Flat.area) >= 0 ? this.Flat.area : areas[0];
        this.Areas = areas;
        this.SelectedFlat = false;
        this.SelectArea(area);
      },
      SelectArea: function SelectArea(area) {
        this.SelectedArea = area;
        var rooms = this.SelectedRooms;
        var type = this.SelectedType;
        var level = this.SelectedLevel;
        var blocks = [];
        var items = [];
        this.Items.forEach(function (item) {
          if (rooms && item.rooms == rooms && item.level == level && item.area == area || type && item.type == type && item.level == level && item.area == area) {
            blocks.push(item.block);
            items.push(item);
          }
        });
        blocks = unique(blocks);
        blocks = sort(blocks, "asc");
        this.Blocks = blocks;
        this.Flats = items;
        this.Flat = items[0];
        this.loadImage();
        var vm = this;
        setTimeout(function () {
          vm.initLightbox();
        }, 100);
      },
      initLightbox: function initLightbox() {
        if (this.LightBox) this.LightBox.destroy();
        this.LightBox = GLightbox({
          selector: ".flats-zoom",
          height: "100vh"
        });
        this.LightBox.on("open", function () {
          document.body.classList.add("flats--photo");
        });
        this.LightBox.on("close", function () {
          document.body.classList.remove("flats--photo");
        });
      },
      loadImage: function loadImage() {
        var vm = this;
        var image = new Image();
        image.src = vm.Flat.img;
        vm.ImageLoaded = false;

        image.onload = function () {
          vm.ImageLoaded = true;
          image = null;
        };
      },
      checkStatus: function checkStatus(area, block) {
        var status = "";
        var item = this.ItemsAll.filter(function (item) {
          return item.block == block && item.area == area && item.status == 1;
        })[0];
        if (item) status = "available";
        if (!item || item.status != 1) status = "disabled";
        if (item && this.Flat && item.area == this.Flat.area) status = "selected";
        return status;
      },
      selectFlat: function selectFlat(area, block) {
        var flat = this.Items.find(function (item) {
          return item.area == area && item.block == block;
        });
        this.SelectedFlat = flat;
        this.Select(flat.type ? "type" : "rooms", flat.type ? flat.type : flat.rooms);
      }
    }
  });
}
/*
	секция Условия покупки
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */


function initTerms() {
  Vue.component("app-terms", {
    data: function data() {
      return {
        Items: TERMS_DATA
      };
    }
  });
}
/*
	Модалка / Условия
	-------------------------------------------
	использованные библиотеки:
	- https://vuejs.org/
	- https://github.com/probil/v-mask
 	------------------------------------------- */


function initDropTerms() {
  Vue.component("app-drop-terms", {
    props: {
      Terms: Object
    }
  });
}

;
/*
	секция Ход строительства
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */

function initStatus() {
  Vue.component("app-status", {
    data: function data() {
      return {
        Slides: STATUS_DATA,
        options: {
          direction: "horizontal",
          slideActiveClass: "active",
          slideToClickedSlide: true,
          speed: 600,
          lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 3
          },
          slidesPerView: "auto",
          spaceBetween: 56
        }
      };
    }
  });
}
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
    data: function data() {
      return {
        isLoaded: false,
        options: {
          direction: "horizontal",
          speed: 800,
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
      };
    },
    watch: {
      Selected: function Selected() {
        var vm = this;

        if (typeof vm.Selected.photos != "undefined") {
          setTimeout(function () {
            vm.initPager();
            vm.initVideo();
          }, 100);
        } else vm.checkPlayer();
      }
    },
    created: function created() {
      this.isLoaded = true;
    },
    computed: {
      Amount: function Amount() {
        if (this.Selected.photos) return this.Selected.photos.length;
      }
    },
    methods: {
      initVideo: function initVideo() {
        var vm = this;
        var slider = vm.$refs.modalStatusSlider;
        vm.checkVideo();
        slider.swiper.on("slideChange", function () {
          vm.checkVideo();
        });
      },
      checkPlayer: function checkPlayer() {
        if (this.playing) {
          this.player.stopVideo();
          this.playing = false;
        }
      },
      checkVideo: function checkVideo() {
        var vm = this;
        var slider = vm.$refs.modalStatusSlider;
        var id = vm.Selected.id;
        var index = slider.swiper.realIndex;
        var videoUrl = vm.Selected.photos[index].video;
        var videoId = "video-" + id + "-" + index;
        vm.checkPlayer();

        if (typeof videoUrl != "undefined") {
          var youtubeId = vm.getYoutubeId(videoUrl);
          new YT.Player(videoId, {
            videoId: youtubeId,
            events: {
              "onReady": function onReady(event) {
                vm.player = event.target;
              },
              "onStateChange": function onStateChange(event) {
                if (event.data === 1) vm.playing = true;else vm.playing = false;
              }
            }
          });
        }
      },
      initPager: function initPager() {
        var vm = this;
        var slider = vm.$refs.modalStatusSlider;
        var pager = vm.$refs.modalStatusPager;
        slider.swiper.on("slideChange", function () {
          var index = this.realIndex;
          pager.swiper.slideTo(index);
        });
      },
      getYoutubeId: function getYoutubeId(url) {
        url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
      },
      getYoutubeSrc: function getYoutubeSrc(url) {
        return "https://www.youtube.com/embed/" + vm.getYoutubeId(url);
      }
    }
  });
}
/*
	секция Коммерческие помещения
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */


function initCommercial() {
  Vue.component("app-commercial", {
    props: {
      inView: Boolean
    },
    data: function data() {
      return {
        isLoaded: false,
        Items: [],
        Areas: [],
        SelectedArea: null,
        Selected: {},
        ImageLoaded: false,
        url: URLS.commerce,
        LightBox: null
      };
    },
    watch: {
      inView: function inView() {
        if (this.inView) this.load();
      }
    },
    methods: {
      load: function load() {
        var vm = this;
        fetch(vm.url).then(function (response) {
          return response.json();
        }).then(function (data) {
          vm.Items = data;
          vm.init();
        });
      },
      init: function init() {
        this.isLoaded = true;
        this.getAreas();
      },
      loadImage: function loadImage() {
        var vm = this;
        var image = new Image();
        image.src = vm.Selected.img;
        vm.ImageLoaded = false;

        image.onload = function () {
          vm.ImageLoaded = true;
          image = null;
        };
      },
      getAreas: function getAreas() {
        var vm = this;
        var areas = [];
        vm.Items.forEach(function (item) {
          if (item.status) areas.push(item.area);
        });
        areas = unique(areas);
        areas = sort(areas, "asc");
        vm.Areas = areas;
        vm.selectArea(areas[0]);
      },
      selectArea: function selectArea(area) {
        this.SelectedArea = area;
        this.getItem();
      },
      getItem: function getItem() {
        var area = this.SelectedArea;
        var item = this.Items.find(function (item) {
          return item.area == area;
        });
        this.Selected = item;
        this.loadImage();
        var vm = this;
        setTimeout(function () {
          vm.initLightbox();
        }, 100);
      },
      initLightbox: function initLightbox() {
        if (this.LightBox) this.LightBox.destroy();
        this.LightBox = GLightbox({
          selector: ".commercial-zoom",
          height: "100vh"
        });
        this.LightBox.on("open", function () {
          document.body.classList.add("flats--photo");
        });
        this.LightBox.on("close", function () {
          document.body.classList.remove("flats--photo");
        });
      }
    }
  });
}
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
    data: function data() {
      return {
        MapData: MAP_DATA,
        MapZoom: MAP_DATA.zoom,
        timer: null,
        map: null
      };
    },
    computed: {
      LatLng: function LatLng() {
        return this.MapData.latlng.split(",");
      },
      Sizes: function Sizes() {
        return this.MapData.sizes.split(",");
      },
      Offset: function Offset() {
        return this.MapData.offset.split(",");
      },
      mapEl: function mapEl() {
        return this.$refs.mapEl;
      }
    },
    watch: {
      inView: function inView() {
        if (this.inView) this.init();
      }
    },
    methods: {
      init: function init() {
        var vm = this;
        vm.timer = setInterval(function () {
          vm.check();
        }, 2000);

        MapZoom: MAP_DATA.zoom, vm.MapZoom = vm.isPhone ? vm.MapData.zoom - 1 : vm.MapData.zoom;
      },
      check: function check() {
        var vm = this;

        if (typeof DG != "undefined") {
          clearInterval(vm.timer);
          vm.render();
        }
      },
      render: function render() {
        var vm = this;
        var map;
        var width = vm.Sizes[0];
        var height = vm.Sizes[1];
        var x = vm.Offset[0];
        var y = vm.Offset[1];
        DG.then(function () {
          map = DG.map(vm.mapEl, {
            center: vm.LatLng,
            minZoom: 15,
            maxZoom: 18,
            zoom: vm.isPhone ? vm.MapData.zoom - 1 : vm.MapData.zoom,
            fullscreenControl: false,
            zoomControl: false,
            scrollWheelZoom: true
          });
          var icon = DG.divIcon({
            html: "<div class='map-marker'>" + "<div class='map-marker-img'>" + "<img src='" + vm.MapData.marker + "' class='img--cover' alt='icon' />" + "</div>" + "</div>"
          });
          var marker = DG.marker(vm.LatLng, {
            icon: icon,
            riseOnHover: false,
            alt: "pin"
          }).addTo(map);
          var coords = [];
          document.addEventListener("click", function () {});
          vm.MapData.coords.split("],").forEach(function (value) {
            value = value.replace("[", "").replace("]", "");
            coords.push(value.split(","));
          });
          DG.polygon(coords, {
            "color": "#03abbf",
            "opacity": 1,
            "weight": 0,
            "fillColor": "#03abbf",
            "fillOpacity": 1
          }).addTo(map);
          map.on("zoom", function () {
            vm.MapZoom = map.getZoom();
          });
          vm.map = map;
        });
      }
    }
  });
}
/*
	секция Планировки
	-------------------------------------------
	использованные библиотеки:
	- https://vuejs.org/
	- https://github.com/probil/v-mask
 	------------------------------------------- */


function initForms() {
  Vue.component("app-form", {
    props: {
      FormUtm: Object
    },
    data: function data() {
      return {
        Name: null,
        Phone: null,
        ErrorName: false,
        ErrorPhone: false,
        isLoading: false,
        timer: null,
        hasError: true
      };
    },
    mounted: function mounted() {
      var vm = this;
      document.addEventListener("click", function (e) {
        if (!e.target.classList.contains("form-control")) {
          vm.ErrorPhone = false;
          vm.ErrorName = false;
        }
      });
      $(document).on("af_complete", function (e, response) {
        if (response["success"]) vm.send();
      });
    },
    computed: {
      nameEl: function nameEl() {
        return this.$refs.nameEl;
      },
      phoneEl: function phoneEl() {
        return this.$refs.phoneEl;
      }
    },
    methods: {
      checkErrors: function checkErrors() {
        var placeholder = this.phoneEl.getAttribute("placeholder");
        var hasPhone = this.Phone && this.Phone.length == placeholder.length;
        this.ErrorName = !this.Name;
        this.ErrorPhone = !hasPhone && this.Name;
        this.hasError = !hasPhone || !this.Name;
      },
      send: function send() {
        var vm = this;
        vm.isLoading = false;
        vm.Name = null;
        vm.Phone = null;
        vm.$emit("show-response");
        vm.timer = setTimeout(function () {
          vm.$emit("hide-response");
        }, 5000);

        if (typeof dataLayer != "undefined") {
          dataLayer.push({
            "event": "form_sent"
          });
        }
      },
      submit: function submit(el) {
        this.checkErrors();

        if (!this.ErrorName && !this.ErrorPhone) {
          this.nameEl.blur();
          this.phoneEl.blur();
          this.isLoading = true;
        }
      }
    }
  });
}
/*
	Счетчики
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */


function initCounters() {
  Vue.component("app-counter", {
    template: "<template>\n\t\t\t\t\t\t\t\t<div class=\"counter hidden-xs\">\n\t\t\t\t\t\t\t\t\t{{ Value }}\n\t\t\t\t\t\t\t\t\t<span class=\"coun\">{{ Counter }}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</template>",
    props: {
      Value: Number
    },
    data: function data() {
      return {
        Counter: 0,
        Duration: 1000
      };
    },
    mounted: function mounted() {
      var vm = this;
      var el = vm.$el;
      var isEntered;
      var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          var isEnter = entry.isIntersecting;

          if (isEnter && !isEntered) {
            vm.Play();
            isEntered = true;
          }

          if (!isEnter && isEntered && entry.boundingClientRect.y >= 0 && !vm.isStart) {
            isEntered = false;
          }
        });
      });
      observer.observe(el);
    },
    methods: {
      Play: function Play() {
        var _this = this;

        var from = 0;
        var to = this.Value;
        var frameDuration = 1000 / 60;
        var totalFrames = Math.round(this.Duration / frameDuration);

        var easeOutQuad = function easeOutQuad(t) {
          return t * (2 - t);
        };

        var increasing = true;
        var frame = 0;
        var countTo = to - from;
        if (countTo < 0) countTo * -1;
        var counter = setInterval(function () {
          frame++;
          var progress = easeOutQuad(frame / totalFrames);
          var currentCount = Math.round(countTo * progress);

          if (parseInt(_this.Counter, 10) !== currentCount) {
            _this.Counter = from + currentCount;
          }

          if (frame === totalFrames) clearInterval(counter);
        }, frameDuration);
      }
    }
  });
}

if (!window['YT']) {
  var YT = {
    loading: 0,
    loaded: 0
  };
}

if (!window['YTConfig']) {
  var YTConfig = {
    'host': 'http://www.youtube.com'
  };
}

if (!YT.loading) {
  YT.loading = 1;

  (function () {
    var l = [];

    YT.ready = function (f) {
      if (YT.loaded) {
        f();
      } else {
        l.push(f);
      }
    };

    window.onYTReady = function () {
      YT.loaded = 1;

      for (var i = 0; i < l.length; i++) {
        try {
          l[i]();
        } catch (e) {}
      }
    };

    YT.setConfig = function (c) {
      for (var k in c) {
        if (c.hasOwnProperty(k)) {
          YTConfig[k] = c[k];
        }
      }
    };

    var a = document.createElement('script');
    a.type = 'text/javascript';
    a.id = 'www-widgetapi-script';
    a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vflkvQ6Kw/www-widgetapi.js';
    a.async = true;
    var b = document.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a, b);
  })();
}

var vendorsTimer;

function unique(array) {
  return array.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

function sort(array, dir) {
  return array.sort(function (val1, val2) {
    return dir == "asc" ? val1 > val2 ? 1 : -1 : val1 < val2 ? 1 : -1;
  });
}

function initApp() {
  Vue.use(VueAwesomeSwiper);
  Vue.directive("mask", VueMask.VueMaskDirective);
  Vue.filter("formatMonth", function (value) {
    if (value) return value.split(".")[1];
  });
  Vue.filter("formatYear", function (value) {
    if (value) return value.split(".")[2];
  });
  Vue.filter("formatPage", function (value) {
    var amount = value + 1;
    return amount < 10 ? "0" + amount : amount;
  });
  Vue.filter("formatAmount", function (value) {
    var amount = value;
    return amount < 10 ? "0" + amount : amount;
  });
  new Vue({
    el: "#app",
    data: {
      isPhone: null,
      scrollTopOffset: 0,
      scrollBarWidth: 0,
      scrollBarOffset: 0,
      StatusSlides: [],
      StatusModalShow: false,
      TermsSelected: {},
      TermsDropShow: false,
      appIsLoaded: false,
      ShowDropMenu: false,
      ShowPolicy: false,
      ShowForm: false,
      ShowResponse: false,
      UTM: {},
      lazyLoadInstance: null,
      inView: {
        gallery: false,
        status: false,
        benefits: false,
        contacts: false,
        flats: false,
        commercial: false
      }
    },
    created: function created() {
      var vm = this;
      vm.checkDevice();
      window.addEventListener("resize", function () {
        vm.checkDevice();
      });
    },
    mounted: function mounted() {
      var vm = this;
      vm.initLazy();
      vm.checkUtm();
      vm.getScrollBarWidth();
      vm.appIsLoaded = true;
      vm.scrollTopOffset = vm.headerEl.clientHeight - 1;
      var hash = location.hash;
      if (hash && hash == "#policy") vm.showPolicy();
      document.addEventListener("keydown", function (e) {
        if (e.code == "Escape") {
          if (vm.StatusModalShow) vm.hideStatus();
          if (vm.ShowPolicy) vm.hidePolicy();
          if (vm.ShowForm) vm.closeForm();
          if (vm.TermsDropShow) vm.closeTerms();
        }
      });
      vm.initInView();
      vm.initParallax();
      vm.initAnimations();
    },
    computed: {
      headerEl: function headerEl() {
        return this.$refs.headerEl;
      },
      scrollBar: function scrollBar() {
        return this.$refs.scrollBar;
      }
    },
    watch: {
      scrollBarOffset: function scrollBarOffset() {
        document.body.style.paddingRight = this.scrollBarOffset + "px";
      },
      isPhone: function isPhone() {
        this.updateLazy();
      }
    },
    methods: {
      checkDevice: function checkDevice() {
        if (window.innerWidth < 768) {
          if (!this.isPhone) this.isPhone = true;
        } else {
          if (this.isPhone) this.isPhone = false;
        }
      },
      lockScroll: function lockScroll() {
        this.scrollBarOffset = this.scrollBarWidth;
        document.body.classList.add("lock");
      },
      checkUtm: function checkUtm() {
        var vm = this;
        ["source", "medium", "campaign", "term", "content"].forEach(function (name) {
          var id = "utm_" + name;
          vm.UTM[name] = vm.getParameterByName(id);
        });
      },
      getParameterByName: function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      },
      formatPhone: function formatPhone(phone) {
        phone = phone.replace(/\s/g, "").replace("(", "").replace(")", "").replace("-", "").replace("-", "");

        if (phone.substr(0, 1) == "8" && phone.indexOf("+") < 0) {
          phone = phone.substr(1);
          phone = "+7" + phone;
        }

        return "tel:" + phone;
      },
      unLockScroll: function unLockScroll() {
        this.scrollBarOffset = 0;
        document.body.classList.remove("lock");
      },
      getScrollBarWidth: function getScrollBarWidth() {
        this.scrollBarWidth = this.scrollBar.offsetWidth - this.scrollBar.clientWidth;
        this.scrollBar.classList.add("done");
      },
      updateLazy: function updateLazy() {
        this.lazyLoadInstance.update();
      },
      initLazy: function initLazy() {
        this.lazyLoadInstance = new LazyLoad({
          callback_loaded: function callback_loaded(el) {
            if (el.closest("div") != null) el.closest("div").classList.add("loaded");
            if (el.closest("picture") != null) el.closest("picture").classList.add("loaded");
          }
        });
      },
      toggleDropMenu: function toggleDropMenu() {
        this.ShowDropMenu = !this.ShowDropMenu;
      },
      closeDropMenu: function closeDropMenu() {
        for (var _i = 0, _Object$entries = Object.entries(this.inView); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          this.inView[key] = true;
        }

        ;
        this.ShowForm = false;
        this.ShowResponse = false;
        this.ShowDropMenu = false;
        this.ShowPolicy = false;
      },
      modalShow: function modalShow() {
        this.lockScroll();
      },
      modalShowed: function modalShowed() {
        this.updateLazy();
      },
      modalHidden: function modalHidden() {
        if (!this.ShowForm && !this.ShowDropMenu) {
          this.unLockScroll();
        }

        this.ShowResponse = false;
        this.StatusSlides = {};
      },
      modalTermsHidden: function modalTermsHidden() {
        if (!this.ShowForm && !this.ShowDropMenu) {
          this.unLockScroll();
        }
      },
      showStatus: function showStatus(slides) {
        this.StatusSlides = slides;
        this.StatusModalShow = true;
      },
      hideStatus: function hideStatus() {
        this.StatusModalShow = false;
      },
      showPolicy: function showPolicy() {
        this.ShowPolicy = true;
      },
      hidePolicy: function hidePolicy() {
        this.ShowPolicy = false;
      },
      toggleForm: function toggleForm() {
        this.ShowForm = !this.ShowForm;
      },
      openForm: function openForm() {
        if (this.ShowDropMenu) {
          this.ShowDropMenu = false;
        }

        this.ShowForm = true;
      },
      closeForm: function closeForm() {
        this.ShowForm = false;
      },
      showResponse: function showResponse() {
        var vm = this;
        vm.ShowResponse = true;
        if (vm.TermsDropShow) vm.TermsDropShow = false;
        if (!vm.ShowForm) vm.ShowForm = true;
        setTimeout(function () {
          vm.updateLazy();
        }, 100);
      },
      hideResponse: function hideResponse() {
        this.ShowResponse = false;
        this.ShowForm = false;
      },
      openTerms: function openTerms(Terms) {
        this.TermsSelected = Terms;
        this.TermsDropShow = true;
      },
      closeTerms: function closeTerms() {
        this.TermsDropShow = false;
      },
      initInView: function initInView() {
        var vm = this;
        document.querySelectorAll(".inview").forEach(function (el) {
          var section = el.getAttribute("data-inview");
          var isEntered;
          var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
              var isEnter = entry.isIntersecting;

              if (isEnter && !isEntered) {
                isEntered = true;
                vm.inView[section] = true;
                setTimeout(function () {
                  vm.updateLazy();
                }, 200);
              }
            });
          });
          observer.observe(el);
        });
      },
      initAnimations: function initAnimations() {
        document.querySelectorAll(".anim").forEach(function (el) {
          var threshold = el.getAttribute("data-threshold");
          var isEntered;
          var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
              var isEnter = entry.isIntersecting;

              if (isEnter && !isEntered) {
                el.classList.add("animated");
                isEntered = true;
              }

              if (!isEnter && isEntered && entry.boundingClientRect.y >= 0) {
                el.classList.remove("animated");
                isEntered = false;
              }
            });
          }, {
            threshold: threshold
          });
          observer.observe(el);
        });
      },
      initParallax: function initParallax() {
        var el = document.getElementById("parallax-main");

        window.onscroll = function (e) {
          var y = document.documentElement.scrollTop || document.body.scrollTop;
          var h = window.innerHeight;
          var percent = y * 100 / h / 2;
          el.style.transform = "translate3d(0, " + percent + "% ,0)";
        };
      }
    }
  });
}

function checkVendors() {
  if (typeof Vue != "undefined") {
    clearInterval(vendorsTimer);
    initOrder();
    initBenefits();
    initPoints();
    initGallery();
    initFlats();
    initTerms();
    initModalStatus();
    initStatus();
    initCommercial();
    initContacts();
    initForms();
    initDropTerms();
    initCounters();
    initApp();
  }
}

window.onload = function () {
  vendorsTimer = setInterval(function () {
    checkVendors();
  }, 200);
};