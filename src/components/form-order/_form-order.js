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
		data() {
			return {
				Name: null,
				Phone: null,
				ErrorName: false,
				ErrorPhone: false,
				isLoading: false,
				timer: null
			}
		},
		mounted() {
			const vm = this;
			document.addEventListener("click", function(e) {
				if (!e.target.classList.contains("form-control")) {
					vm.ErrorPhone = false;
					vm.ErrorName = false;
				}
			});
		},
		computed: {
			nameEl() {
				return this.$refs.nameEl;
			},
			phoneEl() {
				return this.$refs.phoneEl;
			}
		},
		methods: {
			checkErrors() {
				let placeholder = this.phoneEl.getAttribute("placeholder");
				let hasPhone    = this.Phone && this.Phone.length==placeholder.length-2;
				this.ErrorName = !this.Name;
				this.ErrorPhone = !hasPhone && this.Name;
			},
			send() {
				const vm = this;
				vm.isLoading = true;
				let data = {
					name: vm.Name,
					phone: vm.Phone,
					utm_source: vm.FormUtm.source,
					utm_medium: vm.FormUtm.medium,
					utm_campaign: vm.FormUtm.campaign,
					utm_term: vm.FormUtm.term,
					utm_content: vm.FormUtm.content
				};
				setTimeout(function() {
				// $.post(vm.Action, data, function(response) {
					vm.isLoading = false;
					vm.Name = null;
					vm.Phone = null;
					vm.$emit("show-response");
					vm.timer = setTimeout(function() {
						vm.$emit("hide-response");
					}, 5000);
					if (typeof dataLayer!="undefined") {
						dataLayer.push({
							"event": "form_sent"
						});
					}
				// });
				}, 500);
			},
			submit(el) {
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