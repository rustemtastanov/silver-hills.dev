<transition name="modal-policy" @enter="modalShow" @after-enter="modalShowed" @after-leave="modalHidden">
	<div class="modal-policy" v-show="ShowPolicy" :class="{active: appIsLoaded}">
		<button type="button" class="btn btn--black btn--close hidden-xs" aria-label="close" @click="ShowPolicy=false"></button>
		<img width="291" height="70" data-src="/assets/img/logo-alt.svg" class="img--cover lazy modal-policy-logo hidden-xs" alt="logo" data-role="lazyimg" />
		<img width="8" height="150" data-src="/assets/img/text-vertical-[[++cultureKey]].svg" class="img--cover lazy modal-policy-text hidden-xs" alt="text" data-role="lazyimg" />
		<div class="modal-policy-in">[[*content]]</div>
	</div>
</transition>