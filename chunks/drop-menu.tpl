<transition name="drop-menu" @enter="modalShow" @after-enter="modalShowed" @after-leave="modalHidden">
	<div class="drop-menu" v-show="ShowDropMenu" :class="{active: appIsLoaded}" :style="'padding-right: '+ scrollBarOffset +'px'">
		<div class="drop-menu-in">
			<scrollactive class="nav-main" active-class="active" tag="nav" :offset="scrollTopOffset" :modify-url="false">
				<li><a href="#about" class="scrollactive-item" @click.prevent="closeDropMenu">О проекте</a></li>
				<li><a href="#gallery" class="scrollactive-item" @click.prevent="closeDropMenu">Галерея</a></li>
				<li><a href="#flats" class="scrollactive-item" @click.prevent="closeDropMenu">Выбрать квартиру</a></li>
				<li class="hidden-xs"><a href="#status" class="scrollactive-item" @click.prevent="closeDropMenu">Ход строительства</a></li>
				<li><a href="#commerce" class="scrollactive-item" @click.prevent="closeDropMenu">Коммерция</a></li>
				<li><a href="#contacts" class="scrollactive-item" @click.prevent="closeDropMenu">Контакты</a></li>
			</scrollactive>
			<div>
				<ul class="nav-social list--inline">
				    [[#3.contacts-instagram:is=``:then=``:else=`
					<li>
						<a href="https://[[#3.contacts-instagram]]" class="link-instagram" target="_blank" rel="noopener" aria-label="instagram"></a>
					</li>
				    `]]
				</ul>
				<a href="/[[#3.about-download]]" download="presentation.pdf" class="drop-menu-download">скачать презентацию, PDF</a>
			</div>
		</div>
		<div class="drop-menu-bg primary hidden-xs">
			<transition name="drop-menu-bg">
				<picture v-show="ShowDropMenu" data-role="lazy">
					<source data-srcset="[[#3.menu-bg:phpthumbon=`w=800&h=667&zc=1&f=webp`]] 1x, [[#3.menu-bg:phpthumbon=`f=webp`]] 2x" type="image/webp" />
					<img width="800" height="667" data-srcset="[[#3.menu-bg:phpthumbon=`w=800&h=667&zc=1`]] 1x, /[[#3.menu-bg]] 2x" alt="bg" class="lazy img--cover" />
				</picture>
			</transition>
		</div>
		<picture class="drop-menu-bg primary visible-xs" data-role="lazy">
			<source data-srcset="[[#3.menu-bg-phone:phpthumbon=`w=493&h=159&zc=1&f=webp`]] 1x, [[#3.menu-bg-phone:phpthumbon=`f=webp`]] 2x" type="image/webp" />
			<img width="394" height="159" data-srcset="[[#3.menu-bg-phone:phpthumbon=`w=493&h=159&zc=1`]] 1x, /[[#3.menu-bg-phone]] 2x" alt="bg" class="lazy img--cover" />
		</picture>
	</div>
</transition>