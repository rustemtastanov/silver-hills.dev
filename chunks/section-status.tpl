<app-status inline-template v-on:show-status="showStatus" :in-view="inView.status">
	<section class="section s--status hidden-xs inview" data-inview="status" id="status">
		<h3 class="status-title">Ход строительства</h3>
		<swiper class="swiper status-items" ref="slider" :options="options" v-if="inView">
			<swiper-slide v-for="(Slide, index) in Slides" class="status-slide slide swiper-slide" :class="Slide.photos[0].video ? 'book' : 'album'" :key="index">
				<a href="#" class="link--block" aria-label="zoom" @click.prevent="$emit('show-status', Slide)">
					<div class="img swiper-img">
						<i class="icon icon-video" :class="Slide.photos[0].video ? 'icon-video' : 'icon-zoom'"></i>
						<picture>
							<source :data-srcset="Slide.photos[0].webp +' 1x, '+ Slide.photos[0].webp2x +' 2x'" class="swiper-lazy img--cover" type="image/webp" />
							<img :width="Slide.photos[0].video ? 234 : 568" height="300" :data-srcset="Slide.photos[0].thumb +' 1x, '+ Slide.photos[0].thumb2x +' 2x'" class="swiper-lazy img--cover" alt="thumb" />
						</picture>
					</div>
				</a>
				<div class="date">
					<div class="month">{{ Slide.date|formatMonth }}</div>/ {{ Slide.date|formatYear }}
				</div>
			</swiper-slide>
		</swiper>
		<div class="status-expiry">
			Ввод в эксплуатацию<br /> 
			[[*about-expiry]]
		</div>
	</section>
</app-status>