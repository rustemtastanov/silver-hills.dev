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
				Counter: 0,
				Duration: 1000
			}
		},
		mounted() {
			const vm = this;
			const el = vm.$el;
			let isEntered;
			const observer = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(entry) {
					let isEnter = entry.isIntersecting;
					if (isEnter && !isEntered) {
						vm.Play();
						isEntered = true;
					}
					if (!isEnter && isEntered && entry.boundingClientRect.y>=0 && !vm.isStart) {
						isEntered = false;
					}
				});
			});
			observer.observe(el);
		},
		methods: {
			Play() {
				let from = 0;
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