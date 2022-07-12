<section class="section s--main">
	<span class="anchor main-anchor" id="main"></span>
	<div class="main-bg primary visible-xs" data-role="lazy">
		<picture>
			<source data-srcset="[[#3.main-bg-phone:phpthumbon=`w=402&h=559&zc=1&f=webp`]] 1x, [[#3.main-bg-phone:phpthumbon=`f=webp`]] 2x" type="image/webp" />
			<img width="402" height="559" data-srcset="[[#3.main-bg-phone:phpthumbon=`w=402&h=559&zc=1`]] 1x, /[[#3.main-bg-phone]] 2x" alt="bg" class="lazy img--cover" />
		</picture>
		<h1 class="main-title visible-xs">[[*main-title]]</h1>
	</div>
	<div class="main-content">
		<h1 class="main-title hidden-xs">[[*main-title]]</h1>
		<div class="main-address">[[*contacts-address]]</div>
		[[#3.main-price:is=``:then=``:else=`
		<div class="main-price visible-xs">
			<small>тенге/м²</small>
			<sub>от</sub> <strong>[[#3.main-price]]</strong>
		</div>
		`]]
	</div>
	<picture class="main-bg primary hidden-xs" data-role="lazy" id="parallax-main">
		<source data-srcset="[[#3.main-bg:phpthumbon=`w=1326&h=667&zc=1&f=webp`]] 1x, [[#3.main-bg:phpthumbon=`f=webp`]] 2x" type="image/webp" />
		<img width="1326" height="667" data-srcset="[[#3.main-bg:phpthumbon=`w=1326&h=667&zc=1`]] 1x, /[[#3.main-bg]] 2x" alt="bg" class="lazy img--cover" />
	</picture>
</section>