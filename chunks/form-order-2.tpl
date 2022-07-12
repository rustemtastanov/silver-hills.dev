<app-form inline-template :form-utm="UTM" v-on:show-response="showResponse" v-on:hide-response="hideResponse">
	<form action="/" class="order-2" id="formOrder2" :data-error="hasError" :data-loading="isLoading" @submit.prevent="submit()" novalidate>
	    <input type="hidden" name="formorder2" value="order" />
		<input type="hidden" name="utm_source" :value="FormUtm.source" />
		<input type="hidden" name="utm_medium" :value="FormUtm.medium" />
		<input type="hidden" name="utm_campaign" :value="FormUtm.campaign" />
		<input type="hidden" name="utm_term" :value="FormUtm.term" />
		<input type="hidden" name="utm_content" :value="FormUtm.content" />
		<div class="form-group">
			<input type="text" class="form-control" name="name" @input="ErrorName=false" ref="nameEl" placeholder="Ваше имя" v-model="Name" required />
			<div class="form-error" :class="{active: ErrorName}">Заполните поле</div>
		</div>
		<div class="form-group">
			<input type="tel" class="form-control" name="phone" @input="ErrorPhone=false" ref="phoneEl" placeholder="+7 (___) ___ __ __" v-mask="'+7 ### ###-##-##'" v-model="Phone" required />
			<div class="form-error" :class="{active: ErrorPhone}">Заполните поле</div>
		</div>
		<div class="form-controls">
			<button type="submit" class="btn btn--fill btn--submit btn--block btn--white">
				<span>отправить заявку</span>
			</button>
		</div>
	</form>
</app-form>