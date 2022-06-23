/*
	Счетчики
	--------------------------------------
	использованные библиотеки:
 	-------------------------------------- */
function initCounters() {
	Vue.component("app-counter", {
		template: `<template>
								<div class="counter hidden-xs">
									<span class="orig">{{ Value }}</span>
									<span class="coun">{{ Counter }}</span>
								</div>
							</template>`,
		props: {
			Value: Number
		},
		data() {
			return {
				Counter: 1,
				Played: false,
				Duration: 1000,
				From: 1
			}
		},
		mounted() {
			const vm = this;
			const el = vm.$el;
			window.addEventListener("scroll", function() {
				let y = window.pageYOffset;
				let o = el.getBoundingClientRect().y;
				if (y>=o && !vm.Played) vm.Play();
			});
		},
		methods: {
			Play() {
				this.Played = true;
				let from = this.From;
				let to   = this.Value;
				const frameDuration = 1000/60;
				const totalFrames = Math.round(this.Duration/frameDuration);
				const easeOutQuad = t => t*(2-t);
				let increasing = true;
				let frame = 0;
				const countTo = to - from;
				if (countTo<0) countTo * -1;
				const counter = setInterval( () => {
					frame++;
					const progress = easeOutQuad(frame/totalFrames);
					const currentCount = Math.round(countTo*progress);
					if (parseInt(this.Counter, 10)!==currentCount) {
						this.Counter = from + currentCount;
					}
					if (frame===totalFrames) clearInterval(counter);
				}, frameDuration);
			}
		}
	});
}