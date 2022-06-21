let vendorsTimer;

function initApp() {

	Vue.use(VueAwesomeSwiper);
	Vue.directive("mask", VueMask.VueMaskDirective);

	Vue.filter("formatMonth", function(value) {
		if (value) return value.split(".")[1];
	});

	Vue.filter("formatYear", function(value) {
		if (value) return value.split(".")[2];
	});

	Vue.filter("formatPage", function(value) {
		let amount = value+1;
		return amount<10 ? "0"+amount : amount;
	});

	Vue.filter("formatAmount", function(value) {
		let amount = value;
		return amount<10 ? "0"+amount : amount;
	});

	new Vue({
		el: "#app",
		data: {
			scrollTopOffset: 0,
			scrollBarWidth: 0,
			scrollBarOffset: 0,
			StatusSlides: [],
			StatusModalShow: false,
			appIsLoaded: false,
			ShowDropMenu: false,
			ShowPolicy: false,
			ShowForm: false,
			ShowResponse: false,
			UTM: {}
		},
		mounted() {
			const vm = this;
			vm.initLazy();
			vm.checkUtm();
			vm.getScrollBarWidth();
			vm.appIsLoaded = true;
			vm.scrollTopOffset = vm.headerEl.clientHeight - 1;
			let hash = location.hash;
			if (hash && hash=="#policy") vm.showPolicy();
			document.addEventListener("keydown", function(e) {
				if (e.code=="Escape") {
					if (vm.StatusModalShow) vm.hideStatus();
					if (vm.ShowPolicy) vm.hidePolicy();
					if (vm.ShowForm) vm.closeForm();
				}
			});
		},
		computed: {
			headerEl() {
				return this.$refs.headerEl;
			},
			scrollBar() {
				return this.$refs.scrollBar;
			}
		},
		watch: {
			scrollBarOffset() {
				document.body.style.paddingRight = this.scrollBarOffset + "px";
			}
		},
		methods: {
			lockScroll() {
				this.scrollBarOffset = this.scrollBarWidth;
				document.body.classList.add("lock");
			},
			checkUtm() {
				const vm = this;
				["source", "medium", "campaign", "term", "content"].forEach(function(name) {
					let id = "utm_"+ name;
					vm.UTM[name] = vm.getParameterByName(id);
				});
			},
			getParameterByName(name) {
				name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				let regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
				let results = regex.exec(location.search);
				return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
			},
			formatPhone(phone) {
				phone = phone.replace(/\s/g, "").replace("(", "").replace(")", "").replace("-", "").replace("-", "");
				if (phone.substr(0, 1)=="8" && phone.indexOf("+")<0) {
					phone = phone.substr(1);
					phone = "+7"+ phone;
				}
				return "tel:" + phone;
			},
			unLockScroll() {
				this.scrollBarOffset = 0;
				document.body.classList.remove("lock");
			},
			getScrollBarWidth() {
				this.scrollBarWidth = this.scrollBar.offsetWidth - this.scrollBar.clientWidth;
				this.scrollBar.classList.add("done");
			},
			initLazy() {
				$(this["$el"]).find('[data-role="lazy"]').filter(":not(.loaded)").find(".lazy").Lazy({
					scrollDirection: "vertical",
					enableThrottle: true,
					chainable: false,
					visibleOnly: true,
					afterLoad: function(element) {
						$(element).parents('[data-role="lazy"]').addClass("loaded");
					}
				});
			},
			toggleDropMenu() {
				this.ShowDropMenu = !this.ShowDropMenu;
			},
			closeDropMenu() {
				this.ShowDropMenu = false;
			},
			modalShow() {
				this.lockScroll();
			},
			modalShowed() {
				this.initLazy();
			},
			modalHidden() {
				if (!this.ShowForm && !this.ShowDropMenu) {
					this.unLockScroll();
				}
				this.ShowResponse = false;
			},
			showStatus(slides) {
				this.StatusSlides = slides;
				this.StatusModalShow = true;
			},
			hideStatus() {
				this.StatusModalShow = false;
			},
			hiddenStatus() {
				this.StatusSlides = {};
			},
			showPolicy() {
				this.ShowPolicy = true;
			},
			hidePolicy() {
				this.ShowPolicy = false;
			},
			openForm() {
				if (this.ShowDropMenu) {
					this.ShowDropMenu = false;
				}
				this.ShowForm = true;
			},
			closeForm() {
				this.ShowForm = false;
			},
			showResponse() {
				const vm = this;
				vm.ShowResponse = true;
				if (!vm.ShowForm) vm.ShowForm = true;
				setTimeout(function() {
					vm.initLazy();
				}, 100);
			},
			hideResponse() {
				this.ShowResponse = false;
			}
		}
	});

}

function checkVendors() {
	if (typeof Vue!="undefined") {
		clearInterval(vendorsTimer);
		initOrder();
		initBenefits();
		initPoints();
		initGallery();
		initTerms();
		initModalStatus();
		initStatus();
		initCommercial();
		initContacts();
		initForms();
		initApp();
	}
}

window.onload = function() {
	vendorsTimer = setInterval(function() {
		checkVendors();
	}, 200);
}