<transition name="drop-form" @enter="modalShow" @after-enter="modalShowed" @after-leave="modalHidden">
	<div class="drop-form" v-show="ShowForm" :class="{active: appIsLoaded}">
		<button type="button" class="btn btn--black btn--close hidden-xs" aria-label="close" @click="closeForm"></button>
		<div class="drop-form-in">
			<img width="291" height="70" data-src="/assets/img/logo.svg" class="img--cover lazy drop-form-logo" alt="logo" data-role="lazyimg" />
			<img width="54" height="52" data-src="/assets/img/logo-icon.png" data-retina="/assets/img/logo-icon@2x.png" class="img--cover lazy drop-form-icon hidden-xs" alt="icon" data-role="lazyimg" />
			<img width="108" height="104" data-src="/assets/img/logo-icon.png" data-retina="/assets/img/logo-icon@2x.png" class="img--cover lazy drop-form-icon visible-xs" alt="icon" data-role="lazyimg" />
			<img width="8" height="150" data-src="/assets/img/text-vertical-[[++cultureKey]].svg" class="img--cover lazy drop-form-text hidden-xs" alt="text" data-role="lazyimg" />
			<div v-show="!ShowResponse">
			    [[AjaxForm?
                    &snippet=`FormIt`
                    &form=`form-drop`
                    &emailTpl=`email_tpl`
                    &hooks=`email,FormItSaveForm`
                    &validate=`name:required,phone:required`
                    &emailSubject=`silver-hills.kz: Заявка от пользователя сайта`
                    &emailTo=`info@silver-hills.kz`
                    &emailCC=`rustemtastanov@gmail.com`
                    &emailBCC=``
                    &emailFrom=`noreply@silver-hills.kz`
                    &formFields=`name,phone`
                    &submitVar=`drop`
                ]]
			</div>
			<div v-show="ShowResponse">
				<div class="drop-form-response">
					Спасибо!<br /> 
					мы Вам перезвоним
				</div>
			</div>
		</div>
		<div class="drop-form-bg-wrapper" v-show="!ShowResponse">
			<picture class="drop-form-bg primary hidden-xs" data-role="lazy">
				<source data-srcset="[[#3.form-bg:phpthumbon=`w=1326&h=407&zc=1&f=webp`]] 1x, [[#3.form-bg:phpthumbon=`f=webp`]] 2x" type="image/webp" />
				<img width="1326" height="407" data-srcset="[[#3.form-bg:phpthumbon=`w=1326&h=407&zc=1`]] 1x, /[[#3.form-bg]] 2x" alt="bg" class="lazy img--cover" />
			</picture>
			<picture class="drop-form-bg primary visible-xs" data-role="lazy">
				<source data-srcset="[[#3.form-bg-phone:phpthumbon=`w=394&h=190&zc=1&f=webp`]] 1x, [[#3.form-bg-phone:phpthumbon=`f=webp`]] 2x" type="image/webp" />
				<img width="394" height="190" data-srcset="[[#3.form-bg-phone:phpthumbon=`w=394&h=190&zc=1`]] 1x, /[[#3.form-bg-phone]] 2x" alt="bg" class="lazy img--cover" />
			</picture>
		</div>
		<div class="drop-form-bg-wrapper" v-show="ShowResponse">
			<picture class="drop-form-bg primary hidden-xs" data-role="lazy">
				<source data-srcset="[[#3.form-response:phpthumbon=`w=1326&h=407&zc=1&f=webp`]] 1x, [[#3.form-response:phpthumbon=`f=webp`]] 2x" type="image/webp" />
				<img width="1326" height="407" data-srcset="[[#3.form-response:phpthumbon=`w=1326&h=407&zc=1`]] 1x, /[[#3.form-response]] 2x" alt="bg" class="lazy img--cover" />
			</picture>
			<picture class="drop-form-bg primary visible-xs" data-role="lazy">
				<source data-srcset="[[#3.form-response-phone:phpthumbon=`w=394&h=190&zc=1&f=webp`]] 1x, [[#3.form-response-phone:phpthumbon=`f=webp`]] 2x" type="image/webp" />
				<img width="394" height="190" data-srcset="[[#3.form-response-phone:phpthumbon=`w=394&h=190&zc=1`]] 1x, /[[#3.form-response-phone]] 2x" alt="bg" class="lazy img--cover" />
			</picture>
		</div>
	</div>
</transition>