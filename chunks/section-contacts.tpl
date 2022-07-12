<app-contacts inline-template :is-phone="isPhone" :in-view="inView.contacts">
	<section class="section s--contacts inview" data-inview="contacts" id="contacts">
		<div class="contacts-column contacts-left">
			<h3 class="contacts-title">Контакты</h3>
			<a href="#" :href="formatPhone('[[#3.contacts-phone]]')" class="contacts-phone visible-xs">[[#3.contacts-phone]]</a>
			<div class="contacts-address">[[*contacts-address]]</div>
			<div class="contacts-text">[[*contacts-office]]</div>
			[[#3.map-link:is=``:then=``:else=`
			<a href="https://[[#3.map-link]]" target="_blank" rel="noopener" class="contacts-path">посмотреть маршрут, 2gis</a>
			`]]
			<div class="contacts-mode">
				Режим работы
				<div>[[*contacts-mode]]</div>
			</div>
			<ul class="nav-social list--inline">
			    [[#3.contacts-instagram:is=``:then=``:else=`
				<li>
					<a href="https://[[#3.contacts-instagram]]" class="link-instagram" target="_blank" rel="noopener" aria-label="instagram">
						<span>silverhills_almaty</span>
					</a>
				</li>
			    `]]
			</ul>
			<div class="contacts-meta contacts-copyright hidden-xs">[[*contacts-copyright]]</div>
		</div>
		<div class="contacts-column contacts-right">
			<div class="contacts-map">
				<div class="map" ref="mapEl" :data-zoom="MapZoom"></div>
			</div>
			<div class="contacts-meta contacts-copyright visible-xs">[[*contacts-copyright]]</div>
			<a href="#" @click.prevent="showPolicy" class="contacts-meta contacts-policy">Политика конфиденциальности</a>
			[[*contacts-developer:is=``:then=``:else=`
			<div class="contacts-meta contacts-partner">[[*contacts-developer]]</div>
			`]]
		</div>
	</section>
</app-contacts>