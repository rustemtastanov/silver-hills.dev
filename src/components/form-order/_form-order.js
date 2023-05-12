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
		data() {
			return {
				Name: null,
				Phone: null,
				ErrorName: false,
				ErrorPhone: false,
				isLoading: false,
				timer: null,
				hasError: true
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
			$(document).on("af_complete", function(e, response) {
				if (response["success"]) vm.send();
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
				let hasPhone    = this.Phone && this.Phone.length==placeholder.length;
				this.ErrorName = !this.Name;
				this.ErrorPhone = !hasPhone && this.Name;
				this.hasError = !hasPhone || !this.Name;
			},
			send() {
				const vm = this;
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
			},
			submit(el) {
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