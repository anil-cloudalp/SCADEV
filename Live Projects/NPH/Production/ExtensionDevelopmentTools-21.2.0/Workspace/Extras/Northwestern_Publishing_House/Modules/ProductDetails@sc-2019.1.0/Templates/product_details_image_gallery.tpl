<div class="product-details-image-gallery">
	{{#if showImages}}
		{{#if showImageSlider}}
			<ul class="bxslider" data-slider>
				{{#each images}}
					<li data-zoom class="product-details-image-gallery-container">
						<img
							src="{{resizeImage url ../imageResizeId}}"
							alt="{{altimagetext}}"
							itemprop="image"
							data-loader="false">
					</li>
				{{/each}}
			</ul>
			<div class="product-details-image-gallery-moreviews">
				<p>More Views</p>
				<div>
					{{#if lookInside}}
					<a href={{lookInside}} target="_blank"><img src="/media/images/Look-Insd_192x68.png" alt="Look Inside"/></a>
					{{/if}}
					{{#if audioSample}}
					<a href={{audioSample}} target="_blank"><img src="/media/images/Audio-Smpl_192x68.png" alt="Audio Sample"/></a>
					{{/if}}
				</div>
			</div>
		{{else}}
			{{#with firstImage}}
				<div class="product-details-image-gallery-detailed-image" data-zoom>
					<img
						class="center-block"
						src="{{resizeImage url ../imageResizeId}}"
						alt="{{altimagetext}}"
						itemprop="image"
						data-loader="false">
				</div>
			{{/with}}
			<div class="product-details-image-gallery-moreviews2">
				{{#if lookInside}}
				<a href={{lookInside}} target="_blank"><img src="/media/images/Look-Insd_192x68.png" alt="Look Inside"/></a>
				{{/if}}
				{{#if audioSample}}
				<a href={{audioSample}} target="_blank"><img src="/media/images/Audio-Smpl_192x68.png" alt="Audio Sample"/></a>
				{{/if}}
			</div>
		{{/if}}
	{{/if}}
	{{#if removeLogo}}
	{{else}}
	<div class="product-details-image-gallery-brand"><img src="{{ getThemeAssetsPath 'img/NPH_Logo_47x47.png'}}" title="Published by Northwestern Publishing House" alt="NPH LOGO"/></div>
	{{/if}}
	{{#if isOnSale}}
		<div class="on_sale_banner"><img src="/sca-dev-2019-1/img/Sale Icon.png" alt="On Sale"/></div>
	{{/if}}
	{{#if newBadge}}
		<div class="new_badge_banner"><img src="{{ getThemeAssetsPath 'img/new_icon.png'}}" alt="New"/></div>
	{{/if}}
	<div class="product-details-image-gallery-bottom">
		{{#if kindleUrl}}
		<a href={{kindleUrl}} target="_blank"><img src="/media/images/kindle.jpg" alt="Kindle"/></a>
		{{/if}}
		{{#if nookUrl}}
		<a href={{nookUrl}} target="_blank"><img src="/media/images/nook.jpg" alt="Nook"/></a>
		{{/if}}
	</div>
	<!--div data-view="SocialSharing.Flyout.Hover"></div-->
</div>



{{!----
Use the following context variables when customizing this template:

	imageResizeId (String)
	images (Array)
	firstImage (Object)
	firstImage.altimagetext (String)
	firstImage.url (String)
	showImages (Boolean)
	showImageSlider (Boolean)

----}}
