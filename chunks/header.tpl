<header class="header gscrollbar-fixer" :style="'padding-right: '+ scrollBarOffset +'px'" ref="headerEl">
	<div class="container header-in">
		<scrollactive class="header-column header-left" tag="div" offset="0" :modify-url="false">
			<a href="#main" class="link--block header-logo scrollactive-item" aria-label="logo" @click.prevent="closeDropMenu"></a>
		</scrollactive>
		<scrollactive class="header-column header-right" tag="div" :offset="scrollTopOffset" :modify-url="false">
			<a href="#flats" class="btn--unstyled btn--top btn--flats scrollactive-item hidden-xs" @click="closeDropMenu">выбрать квартиру</a>
			<button type="button" class="btn btn--top btn--call hidden-xs" @click="openForm" :class="{'toggled': ShowForm}">
				<span class="text-default">позвонить</span>
				<span class="text-over">заявка</span>
			</button>
			<div class="btn btn--top btn--contacts hidden-xs">
				<span class="text-default">
					<a href="#" :href="formatPhone('[[#3.contacts-phone]]')">[[#3.contacts-phone]]</a>
				</span>
				<span class="text-over">
					<a href="#" :href="formatPhone('[[#3.contacts-phone]]')">позвонить</a>
				</span>
			</div>
			<div class="btn btn--top btn--contacts hidden-sm hidden-md hidden-lg" @click.prevent="toggleForm" :class="{'toggled': ShowForm, 'hide': TermsDropShow || ShowPolicy}">
				<i class="icon icon-call"></i>
				<i class="icon icon-close"></i>
			</div>
			<button type="button" class="btn btn--top btn--nav" aria-label="menu" :class="{'toggled': ShowDropMenu, 'hide': ShowForm || ShowPolicy || TermsDropShow}" @click="toggleDropMenu">
				<span class="bg"></span>
				<span class="line"></span>
			</button>
			<button type="button" class="btn btn--black btn--close btn--close-policy visible-xs" :class="{'toggled': ShowPolicy}" @click="hidePolicy"></button>
			<button type="button" class="btn btn--black btn--close btn--close-terms visible-xs" :class="{'toggled': TermsDropShow}" @click="closeTerms"></button>
		</scrollactive>
	</div>
</header>