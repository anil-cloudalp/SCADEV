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

		{{/if}}
	{{/if}}
	<!-- <div data-view="SocialSharing.Flyout.Hover"></div> -->
	<div class="photoswipe-zoom"></div>
</div>

<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

    <div class="pswp__bg"></div>


    <div class="pswp__scroll-wrap">

       
        <div class="pswp__container">
            
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>

        <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar">

                <!--  Controls are self-explanatory. Order can be changed. -->

                <div class="pswp__counter"></div>

                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                <button class="pswp__button pswp__button--share" title="Share"></button>

                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div> 
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>

          </div>

        </div>

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
