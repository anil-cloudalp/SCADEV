{{#if configSlideData}}
	<div class="home-slider-containers DesktopSliderVew home-page">
		<div class="home-image-sliders bxslider">
			{{#each configSlideData}}
				<div class="home-slide-main-container">
					<div class="home-slide-image-container">
						<div class="img-slides">
							<a href= "{{url}}" target="_blank">
								<img src="{{image}}" alt="" />
							</a>
						</div>
					</div>
				</div>
			{{/each}}
		</div>
	</div>
{{/if}}
{{!-- BX SLIDER FOR MOBILE VIEW --}}
{{#if configSlideMobileData}}
  <div class="MobileSliderVew">
    <div class="home-slider-containers .home-page">
      <div class="home-image-sliders bxslider">
        {{#each configSlideMobileData}}
          <div class="home-slide-main-container">
            <div class="home-slide-image-container">
              <div class="img-slides">
                <a href="{{url}}" target="_blank">
                  <img src="{{image}}" alt="" />
                </a>
              </div>
            </div>
          </div>
        {{/each}}
      </div>
    </div>
  </div>
{{/if}}
{{!-- BX SLIDER FOR MOBILE VIEW END--}}
<div class="home">
<!----<div id="ContainerCarousel">
	{{#each this.CarouselHome}}
		<div class="sdb-hero-banner-carousel" style="background-image: url({{this.imageUrl}})">
			<div class="banner-text">
				<div class="div-rfi" style="background-color: {{this.backgroundtitle}}">
					<p class="rfi-p">{{this.title}}</p>
				</div>
				<div class="div-text" style="background-color: {{this.backgroundsubtitle}}">
					<p class="p-text">{{this.subtitle}}</p>
				</div>
			</div>
		</div>	
	{{/each}}
</div>--->

	<!-- Top Home Banners -->
<!---	<div data-cms-area="sdb-landmark_home_cms_area_slider" data-cms-area-filters="path"></div>---->
	
	<!-- CMS - 3 Columns Section -->
	<div class="cols-icons" data-cms-area="sdb-landmark_home_cms_area_columns01" data-cms-area-filters="path"></div>
	
	<!-- Start Quick Finder Home Section (Custom) -->
	<div data-cms-area="sdb-landmark_home_cms_area_quickfinder" data-cms-area-filters="path"></div>

	<!-- Top Categories -->
	<div data-cms-area="sdb-landmark_home_cms_area_topcategories" data-cms-area-filters="path"></div>

	<!-- 3 Columns Section -->
	<div class="col-three-colors" class="col-three-colors" data-cms-area="sdb-landmark_home_cms_area_columns02" data-cms-area-filters="path"></div>

	<!-- CMS - Title Section -->
<!---	<div class="cols-title" data-cms-area="sdb-landmark_home_cms_area_title" data-cms-area-filters="path"></div>--->
	<div class="home-our-products-section">
			<h1 class="ourproducts-h1">our products<span class="vertical-line"></span> <span
					class="ourproducts-sub-text-one">Engineered</span> <span class="ourproducts-sub-text-two">for your need</span>
			</h1>
		</div>

		<div class="home-our-products-col">
			{{#each ourProducts}}
				<div class="home-our-products-img home-our-prodcts-ext-col-3">
					<a href="{{url}}">
						<img class="img-thumbnail" src="{{image}}" alt="" />
					</a>
				</div>
			{{/each}}
	</div>

	<!-- MOST WANTED Section -->
	<div data-cms-area="sdb-landmark_home_cms_area_merchzone" data-cms-area-filters="path"></div>

	<!-- Full width Banner Section -->
	<div data-cms-area="sdb-landmark_home_cms_area_fullbanner01" data-cms-area-filters="path"></div>

	<!-- 2 Banners Section -->
	<div data-cms-area="sdb-landmark_home_cms_area_halfbanners" data-cms-area-filters="path"></div>

	<!-- Logos Section -->
	<div data-cms-area="sdb-landmark_home_cms_area_logos" data-cms-area-filters="path"></div>

	<!-- Full width Banner Section -->
	<div data-cms-area="sdb-landmark_home_cms_area_fullbanner02" data-cms-area-filters="path"></div>

</div>

{{!----
Use the following context variables when customizing this template:

	imageHomeSize (String)
	imageHomeSizeBottom (String)
	carouselImages (Array)
	bottomBannerImages (Array)

----}}
