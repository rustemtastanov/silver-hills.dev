<app-drop-terms inline-template :terms="TermsSelected">
	<transition name="drop-terms" @enter="modalShow" @after-enter="modalShowed" @after-leave="modalTermsHidden">
		<div class="drop-terms hidden-sm hidden-md hidden-lg" v-show="TermsDropShow" :class="{active: appIsLoaded}">
			<div class="drop-terms-in">
				<div class="drop-terms-head">
					<div class="drop-terms-title">{{ Terms.title }}</div>
					<div class="drop-terms-value">{{ Terms.value }}</div>
				</div>
				<div class="drop-terms-text" v-html="Terms.text"></div>
				[[AjaxForm?
                    &snippet=`FormIt`
                    &form=`form-terms`
                    &emailTpl=`email_tpl`
                    &hooks=`email,FormItSaveForm`
                    &validate=`name:required,phone:required`
                    &emailSubject=`silver-hills.kz: Заявка от пользователя сайта`
                    &emailTo=`info@silver-hills.kz`
                    &emailCC=`rustemtastanov@gmail.com`
                    &emailBCC=``
                    &emailFrom=`noreply@silver-hills.kz`
                    &formFields=`name,phone`
                    &submitVar=`terms`
                ]]
			</div>
		</div>
	</transition>
</app-drop-terms>