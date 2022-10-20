<div class="home">
	<div data-cms-area="home_cms_area_manor_1" data-cms-area-filters="path"></div>

	{{#if extraHomeView.isReady}}
	{{#if false}}
		<div class="home-slider-container">
			<div class="home-image-slider">
				<ul data-slider id="home-image-slider-list" class="home-image-slider-list">
					{{#if extraHomeView.showCarousel}}
					{{#each extraHomeView.carousel}}
                		<li class="{{#if text}}caption-on{{/if}} {{#if title}}caption-on{{/if}} {{#if linktext}}caption-on{{/if}}">
                    		<div class="home-slide-main-container
								{{#if imageBehaviour}}
									use-image
								{{else}}
									{{#if backgroundCrop}}
										{{backgroundCrop}}
									{{/if}}
								{{/if}}
								{{#if isAbsoluteUrl}}
									use-image
								{{/if}}">

								{{#if isAbsoluteUrl}}
									<div class="home-slide-image-container use-image" style="background-image:url('{{image}}');">
										<a {{objectToAtrributes item}} class="home-slide-wrap-link">
											<img src="{{image}}" class="home-slide-image {{#if imageMobile}}hide-small{{/if}}">
											{{#if imageMobile}}
												<img src="{{imageMobile}}" class="home-slide-image-mobile" />
											{{/if}}
										</a>
									</div>

									{{else}}

										<div class="home-slide-image-container
											{{#if imageBehaviour}}
												use-image
											{{else}}
											{{#if backgroundCrop}}
												{{backgroundCrop}}
											{{/if}}
											{{/if}}" style="background-image:url('{{getThemeAssetsPathWithDefault image 'img/carousel-home-1.jpg'}}');">
											<a {{objectToAtrributes item}} class="home-slide-wrap-link">
												<img src="{{getThemeAssetsPathWithDefault image 'img/carousel-home-1.jpg'}}" class="home-slide-image {{#if imageMobile}}hide-small{{/if}}">
													{{#if imageMobile}}
														<img src="{{imageMobile}}" class="home-slide-image-mobile" />
													{{/if}}
											</a>
										</div>

									{{/if}}

								<div class="home-slide-caption-container
									{{#if class}}
										{{class}}
									{{else}}
										carousel-center
									{{/if}}
									{{#if text}}
										caption-display
									{{/if}}
									{{#if title}}
										caption-display
									{{/if}}
									{{#if linktext}}
										caption-display
									{{/if}}
									{{#if isAbsoluteUrl}}
										carousel-center-box
									{{/if}}">
									<div class="home-slide-caption {{captionTextAlign}}">
										{{#if title}}<h1 class="home-slide-caption-title" style="color:{{captionColor}}">{{{title}}}</h1> {{/if}}
										{{#if text}}<h2 class="home-slide-caption-text" style="color:{{captionColor}}">{{{text}}}</h2> {{/if}}
										{{#if linktext}}
											<div class="home-slide-caption-button-container">
												<a {{objectToAtrributes item}} class="home-slide-caption-button">
													{{#if linktext}}
														{{linktext}}
													{{else}}
														{{translate 'Shop now'}}
													{{/if}}
												</a>
											</div>
										{{/if}}
									</div>
								</div>
                    		</div>
                		</li>
                		{{/each}}
						{{else}}
						{{#each carouselImages}}
							<li>
								<div class="home-slide-main-container
									{{#if imageBehaviour}}
										use-image
									{{else}}
										{{#if backgroundCrop}}
											{{backgroundCrop}}
										{{/if}}
									{{/if}}">
									<div class="home-slide-image-container" style="background-image:url('{{this}}');">
										<img src="{{this}}">
									</div>

									<div class="home-slide-caption-container">
										<div class="home-slide-caption">
											<h1 class="home-slide-caption-title">SAMPLE HEADLINE</h1>
											<h2 class="home-slide-caption-text">Sample Text</h2>
											<div class="home-slide-caption-button-container">
												<a href="/search" class="home-slide-caption-button">{{translate 'Shop now'}}</a>
											</div>
										</div>
									</div>
								</div>
							</li>
						{{else}}
						<li>
							<div class="home-slide-main-container">
								<div class="home-slide-image-container" style="background-image:url('{{getThemeAssetsPath 'img/carousel-home-1.jpg'}}');">
									<img src="{{getThemeAssetsPath 'img/carousel-home-1.jpg'}}">
								</div>

								<div class="home-slide-caption-container">
									<div class="home-slide-caption">
										<h1 class="home-slide-caption-title">SAMPLE HEADLINE</h1>
										<h2 class="home-slide-caption-text">Sample Text</h2>
										<div class="home-slide-caption-button-container">
											<a href="/search" class="home-slide-caption-button">{{translate 'Shop now'}}</a>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="home-slide-main-container">
								<div class="home-slide-image-container" style="background-image:url('{{getThemeAssetsPath 'img/carousel-home-2.jpg'}}');">
									<img src="{{getThemeAssetsPath 'img/carousel-home-2.jpg'}}">
								</div>

								<div class="home-slide-caption-container">
									<div class="home-slide-caption">
										<h1 class="home-slide-caption-title">SAMPLE HEADLINE</h1>
										<h2 class="home-slide-caption-text">Sample Text</h2>
										<div class="home-slide-caption-button-container">
											<a href="/search" class="home-slide-caption-button">{{translate 'Shop now'}}</a>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="home-slide-main-container">
								<div class="home-slide-image-container" style="background-image:url('{{getThemeAssetsPath 'img/carousel-home-3.jpg'}}');">
									<img src="{{getThemeAssetsPath 'img/carousel-home-3.jpg'}}">
								</div>

								<div class="home-slide-caption-container">
									<div class="home-slide-caption">
										<h1 class="home-slide-caption-title">SAMPLE HEADLINE</h1>
										<h2 class="home-slide-caption-text">Sample Text</h2>
										<div class="home-slide-caption-button-container">
											<a href="/search" class="home-slide-caption-button">{{translate 'Shop now'}}</a>
										</div>
										<div class="home-slide-caption-button-container">
											<a href="/search" class="home-slide-caption-button">Shop Now</a>
										</div>
									</div>
								</div>
							</div>
						</li>
					{{/each}}
					{{/if}}
				</ul>
			</div>
		</div>
	{{/if}}
	{{/if}}

		<!-- CMS ZONE -->
		<div data-cms-area="home_cms_area_manor_2" data-cms-area-filters="path"></div>

		<!-- FIRST INFOBLOCKS -->
		{{#if extraHomeView.showInfoblocks}}
			<div class="home-infoblock-layout">
				{{#each extraHomeView.infoBlocks}}
					<div class="home-infoblock">
						<a {{objectToAtrributes item}} class="home-infoblock-link">
							<img class="home-infoblock-image" src="{{getThemeAssetsPathWithDefault image 'img/banner-bottom-home-1.jpg'}}" alt="{{title}}" />
							{{#if title}}<div class="home-infoblock-text">{{title}}</div>{{/if}}
						</a>
					</div>
				{{/each}}
			</div>
		{{/if}}

		<!-- CMS ZONE -->
		<div data-cms-area="home_cms_area_manor_3" data-cms-area-filters="path"></div>

		<!-- SECOND INFOBLOCKS -->
		{{#if extraHomeView.showInfoblocksMore}}
			<div class="home-infoblock-layout home-infoblock-layout-more">
				{{#each extraHomeView.infoBlocksMore}}
					<div class="home-infoblock">
						<a {{objectToAtrributes item}} class="home-infoblock-link">
							<img class="home-infoblock-image" src="{{getThemeAssetsPathWithDefault image 'img/banner-bottom-home-1.jpg'}}" alt="{{title}}" />
							{{#if title}}<div class="home-infoblock-text">{{title}}</div>{{/if}}
						</a>
					</div>
				{{/each}}
			</div>
		{{/if}}

		<!-- Hero Banner -->
		{{#if extraHomeView.hero}}
			<div class="home-hero">
				<div class="home-hero-image"
					 {{#if extraHomeView.hero.image}}
					 style="background-image:url('{{getThemeAssetsPathWithDefault extraHomeView.hero.image 'img/manor-feature.jpg'}}');"
					 {{/if}}>
					{{#if extraHomeView.hero.image}}
						<img src="{{getThemeAssetsPathWithDefault extraHomeView.hero.image 'img/manor-feature.jpg'}}" />
					{{/if}}
				</div>
				<div class="home-hero-text">
					<div class="flex-zone">
						<div class="flex-content">
							{{#if extraHomeView.hero.text}}{{{extraHomeView.hero.text}}}{{/if}}
							{{#if extraHomeView.hero.linklocation}}
								<a href="{{extraHomeView.hero.linklocation}}">
									{{#if extraHomeView.hero.linktext}}{{extraHomeView.hero.linktext}}
									{{else}}
									{{translate 'Learn More'}}
									{{/if}}
								</a>
							{{/if}}
						</div>
					</div>
				</div>
			</div>
		{{/if}}

		<!-- CMS MERCHANDISING ZONE -->
		<div class="home-merchandizing-zone">
			<div class="home-merchandizing-zone-content">
				<div data-cms-area="home_merchandizing_zone" data-cms-area-filters="path"></div>
			</div>
		</div>

		<!-- CMS ZONE -->
		<div data-cms-area="home_cms_area_manor_7" data-cms-area-filters="path"></div>
</div>

{{!----
Use the following context variables when customizing this template:

	imageHomeSize (String)
	imageHomeSizeBottom (String)
	carouselImages (Array)
	bottomBannerImages (Array)

----}}
