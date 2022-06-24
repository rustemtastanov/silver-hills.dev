"use strict";

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
    computed: {
      slider: function slider() {
        return this.$refs.slider;
      }
    },
    watch: {
      Selected: function Selected() {
        this.$refs.slider.swiper.slideTo(this.Selected);
      }
    },
    mounted: function mounted() {
      var vm = this;
      vm.$refs.slider.swiper.on("slideChange", function () {
        var index = this.realIndex;
        vm.Selected = index;
      });
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
      isPhone: Boolean
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
          breakpointsInverse: true,
          breakpoints: {
            0: {
              speed: 600
            },
            768: {
              speed: 1200
            }
          }
        }
      };
    },
    mounted: function mounted() {
      var vm = this;
      vm.initFancy();
      vm.Slider.swiper.on("slideNextTransitionStart", function () {
        vm.Direction = this.realIndex + 1 == vm.Slides.length ? "end" : "next";
      }).on("slidePrevTransitionStart", function () {
        vm.Direction = this.realIndex == 0 ? "start" : "prev";
      }).on("reachBeginning", function () {
        vm.Direction = "start";
      }).on("reachEnd", function () {
        vm.Direction = "end";
      });
    },
    computed: {
      Slider: function Slider() {
        return this.$refs.slider;
      }
    },
    methods: {
      initFancy: function initFancy() {
        var vm = this;
        $(vm.$refs.fancy).fancybox({
          hash: false,
          protect: true,
          transitionEffect: "slide",
          transitionDuration: 800,
          animationDuration: 800,
          clickSlide: false,
          buttons: ["close"],
          beforeShow: function beforeShow(current, previous) {
            if (vm.Slider) vm.Slider.swiper.slideTo(current.currIndex);
          }
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
        ImageLoaded: false
      };
    },
    created: function created() {
      var vm = this;
      fetch(vm.url).then(function (response) {
        return response.json();
      }).then(function (data) {
        vm.ItemsAll = data;
        vm.init();
      });
    },
    methods: {
      init: function init() {
        var rooms = [];
        var types = [];
        var items = [];
        this.ItemsAll.forEach(function (item) {
          if (item.status == 1) {
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
        this.initFancy();
      },
      initFancy: function initFancy() {
        $(this.$refs.fancy).fancybox({
          hash: false,
          protect: true,
          animationDuration: 400,
          clickSlide: false,
          buttons: ["close"],
          beforeShow: function beforeShow() {
            document.body.classList.add("flats--photo");
          },
          afterClose: function afterClose() {
            document.body.classList.remove("flats--photo");
          }
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
      };
    },
    watch: {
      Selected: function Selected() {
        var vm = this;
        setTimeout(function () {
          vm.initPager();
        }, 100);
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
      initPager: function initPager() {
        var vm = this;
        var slider = vm.$refs.modalStatusSlider;
        var pager = vm.$refs.modalStatusPager;
        slider.swiper.on("slideChange", function () {
          var index = this.realIndex;
          pager.swiper.slideTo(index);
        });
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
    data: function data() {
      return {
        isLoaded: false,
        Items: [],
        Areas: [],
        SelectedArea: null,
        Selected: {},
        ImageLoaded: false,
        url: URLS.commerce
      };
    },
    created: function created() {
      var vm = this;
      fetch(vm.url).then(function (response) {
        return response.json();
      }).then(function (data) {
        vm.Items = data;
        vm.init();
      });
    },
    methods: {
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
        this.initFancy();
      },
      initFancy: function initFancy() {
        $(this.$refs.fancy).fancybox({
          hash: false,
          protect: true,
          animationDuration: 400,
          clickSlide: false,
          buttons: ["close"],
          beforeShow: function beforeShow() {
            document.body.classList.add("flats--photo");
          },
          afterClose: function afterClose() {
            document.body.classList.remove("flats--photo");
          }
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
      isPhone: Boolean
    },
    data: function data() {
      return {
        MapData: MAP_DATA,
        timer: null,
        map: null
      };
    },
    mounted: function mounted() {
      var vm = this;
      vm.timer = setInterval(function () {
        vm.check();
      }, 4000);
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
    methods: {
      check: function check() {
        if (typeof DG != "undefined") {
          clearInterval(this.timer);
          this.render();
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
            zoom: vm.isPhone ? vm.MapData.zoom - 1 : vm.MapData.zoom,
            fullscreenControl: false,
            zoomControl: false,
            scrollWheelZoom: true
          });
          var icon = DG.icon({
            iconUrl: vm.MapData.marker,
            iconSize: [width, height],
            iconAnchor: [width / 2 - x, height / 2 - y]
          });
          DG.marker(vm.LatLng, {
            icon: icon,
            riseOnHover: false,
            alt: "pin"
          }).addTo(map);
          var coords = [];
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
    template: "#form",
    props: {
      FormClass: String,
      Action: String,
      FormUtm: Object,
      Button: String
    },
    data: function data() {
      return {
        Name: null,
        Phone: null,
        ErrorName: false,
        ErrorPhone: false,
        isLoading: false,
        timer: null
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
        var hasPhone = this.Phone && this.Phone.length == placeholder.length - 2;
        this.ErrorName = !this.Name;
        this.ErrorPhone = !hasPhone && this.Name;
      },
      send: function send() {
        var vm = this;
        vm.isLoading = true;
        var data = {
          name: vm.Name,
          phone: vm.Phone,
          utm_source: vm.FormUtm.source,
          utm_medium: vm.FormUtm.medium,
          utm_campaign: vm.FormUtm.campaign,
          utm_term: vm.FormUtm.term,
          utm_content: vm.FormUtm.content
        };
        setTimeout(function () {
          // $.post(vm.Action, data, function(response) {
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
          } // });

        }, 500);
      },
      submit: function submit(el) {
        this.checkErrors();

        if (!this.ErrorName && !this.ErrorPhone) {
          this.nameEl.blur();
          this.phoneEl.blur();
          this.send();
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
    template: "<template>\n\t\t\t\t\t\t\t\t<div class=\"counter hidden-xs\">\n\t\t\t\t\t\t\t\t\t<span class=\"orig\">{{ Value }}</span>\n\t\t\t\t\t\t\t\t\t<span class=\"coun\">{{ Counter }}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</template>",
    props: {
      Value: Number
    },
    data: function data() {
      return {
        Counter: 1,
        Played: false,
        Duration: 1000,
        From: 1
      };
    },
    mounted: function mounted() {
      var vm = this;
      var el = vm.$el;
      window.addEventListener("scroll", function () {
        var y = window.pageYOffset;
        var o = el.getBoundingClientRect().y;
        if (y >= o && !vm.Played) vm.Play();
      });
    },
    methods: {
      Play: function Play() {
        var _this = this;

        this.Played = true;
        var from = this.From;
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
      parallax: false,
      UTM: {}
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
      if (!vm.isPhone && !vm.parallax) vm.initParallax();
      vm.initAos();
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
        if (!this.isPhone && !this.parallax) this.initParallax();
        if (this.isPhone && this.parallax) this.destroyParallax();
        this.initLazy();
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
      initLazy: function initLazy() {
        $(this["$el"]).find('[data-role="lazy"]').filter(":not(.loaded)").find(".lazy").Lazy({
          scrollDirection: "vertical",
          enableThrottle: true,
          chainable: false,
          visibleOnly: true,
          afterLoad: function afterLoad(element) {
            $(element).parents('[data-role="lazy"]').addClass("loaded");
          }
        });
      },
      toggleDropMenu: function toggleDropMenu() {
        this.ShowDropMenu = !this.ShowDropMenu;
      },
      closeDropMenu: function closeDropMenu() {
        this.ShowForm = false;
        this.ShowResponse = false;
        this.ShowDropMenu = false;
        this.ShowPolicy = false;
      },
      modalShow: function modalShow() {
        this.lockScroll();
      },
      modalShowed: function modalShowed() {
        this.initLazy();
      },
      modalHidden: function modalHidden() {
        if (!this.ShowForm && !this.ShowDropMenu) {
          this.unLockScroll();
        }

        this.ShowResponse = false;
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
      hiddenStatus: function hiddenStatus() {
        this.StatusSlides = {};
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
          vm.initLazy();
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
      initAos: function initAos() {
        AOS.init({
          disable: "mobile",
          once: true
        });
      },
      initParallax: function initParallax() {
        this.parallax = skrollr.init({
          smoothScrolling: false,
          mobileDeceleration: 0.004,
          forceHeight: false
        });
      },
      destroyParallax: function destroyParallax() {
        this.parallax.destroy();
        this.parallax = false;
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