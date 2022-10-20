{{!-- Edited for Horizon Theme --}}

<div class="product-details-full">
	<div class="product-details-full-breadcrumb">
		<a href="/" title="home">Home</a>
		{{#each breadcrumbs}}
		<i></i>
		<a href="{{url}}" title="{{name}}">{{name}}</a>
		{{/each}}
		<i></i>
		<span>{{pageHeader}}</span>
	</div>
	<div data-cms-area="item_details_banner" data-cms-area-filters="page_type"></div>

	<header class="product-details-full-header">
		<div id="banner-content-top" class="product-details-full-banner-top"></div>
	</header>

	<article class="product-details-full-content" itemscope itemtype="https://schema.org/Product">
		<meta itemprop="url" content="{{itemUrl}}">
		<div id="banner-details-top" class="product-details-full-banner-top-details"></div>

		<section class="product-details-full-main-content">
			
			<div class="product-details-full-main-content-right-side">
				<div class="product-details-full-main-content-left">
					<div class="product-details-full-image-gallery-container">
						<div id="banner-image-top" class="content-banner banner-image-top"></div>
						<div data-view="Product.ImageGallery"></div>
						<div id="banner-image-bottom" class="content-banner banner-image-bottom"></div>
						<div data-cms-area="product_details_full_cms_area_2" data-cms-area-filters="path"></div>
						<div data-cms-area="product_details_full_cms_area_3" data-cms-area-filters="page_type"></div>
					</div>
				</div>

				<div class="product-details-full-main-content-right">

					<div class="product-details-full-divider"></div>
					<div class="product-details-full-content-header">
						<div data-cms-area="product_details_full_cms_area_1" data-cms-area-filters="page_type"></div>
						<h1 class="product-details-full-content-header-title" itemprop="name">{{pageHeader}}</h1>
						<!-- <div class="product-details-full-rating" data-view="Global.StarRating"></div> -->
						<div data-cms-area="item_info" data-cms-area-filters="path"></div>
					</div>

					<div class="product-details-full-main">
						{{#if isItemProperlyConfigured}}
						<form id="product-details-full-form" data-action="submit-form" method="POST">

							<section class="product-details-full-info">
								<div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>
							</section>

							<div data-view="Product.Price"></div>
							{{#if isPriceEnabled}}
								{{#if woo_rrp}}
								<div class="product-details-full-rrp">
									RRP: {{currencySymbol}}{{woo_rrp}}
								</div>
								{{/if}}
							{{/if}}
							<div class="product-details-full-short-description">
								<p>{{{shortDescription}}}</p>
							</div>
							<!--- <div data-view="Quantity.Pricing"></div> --->
							{{#if containsRelatedItems}}
								{{#if qtyAvailable}}
									<div data-view="Quantity.Pricing"></div>
								{{else}}
									{{#if qunatityPricing}}
										<div class="price-related">
											<div data-view="Quantity.Pricing"></div>
												{{#if isPriceEnabled}}
													<div class="related-items-message"><a data-action="gotorelated" class = "go-to-related">Click Here</a> to see in stock related items</div>
												{{/if}}
										</div>
									{{else}}
										{{#if isPriceEnabled}}
											<div class="related-items-message"><a data-action="gotorelated" class = "go-to-related">Click Here</a> to see in stock related items</div>
										{{/if}}
									{{/if}}						
								{{/if}}		
							{{else}}
								<div data-view="Quantity.Pricing"></div>
							{{/if}}

							<div data-cms-area="product_details_full_cms_area_4" data-cms-area-filters="path"></div>



							<section data-view="Product.Options"></section>
							<div data-view="Product.Stock.Info"></div>
							
							
						{{#if isPriceEnabled}}
							<div class="qty-available">{{#if qtyAvailable}}<span>{{qtyAvailable}} in stock</span>{{else}}Please contact us for availability{{/if}}</div>
							{{#if qtyBackOrdered}}<div class="qty-available">Back Ordered Quantity: {{qtyBackOrdered}}</div>{{/if}}
							<div data-view="Quantity"></div>

						<section class="product-details-full-actions">

							<div class="product-details-full-actions-container row">
								{{#if createSalesOrd}}<div data-view="MainActionView" class="col-sm-6" style="padding:0"></div>{{/if}}
								<div data-view="ProductDetails.AddToQuote" class="product-details-full-actions-addtoquote col-sm-6"></div>

								<!--div data-view="AddToProductList" class="product-details-full-actions-addtowishlist"></div-->
							</div>
						</section>
						{{/if}}
						<div data-view="Product.Sku"></div>
						{{#if categories}}
						<div class="product-details-full-category-name-link">
							<span>{{translate 'Category: '}}</span>
							{{#each categories}}
								{{prefix}}<a href="{{url}}">{{name}}</a>
							{{/each}}
						</div>
						{{/if}}

						<div data-view="StockDescription"></div>

						<!-- <div data-view="SocialSharing.Flyout" class="product-details-full-social-sharing"></div> -->

						<div class="product-details-full-main-bottom-banner">
							<div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>
						</div>
					</form>
					{{else}}
					<div data-view="GlobalViewsMessageView.WronglyConfigureItem"></div>
					{{/if}}

					<div id="banner-details-bottom" class="product-details-full-banner-details-bottom" data-cms-area="item_info_bottom" data-cms-area-filters="page_type"></div>
				</div>
			</div>

			<section class="product-details-full-product-information"data-view="Product.Information"></section>

			<div class="product-details-full-content-related-items">
				<div data-view="Related.Items"></div>
			</div>

			<div class="product-details-full-content-correlated-items">
				<div data-view="Correlated.Items"></div>
			</div>
		</div>
		<div class="product-details-full-main-content-sidebar">
			<div data-view="FacetsSideBar"></div>
			<div data-view="CartSidebar"></div>
			{{#with marketingBanners}}
				<a data-hashtag="/product/{{side_banner_item}}" data-touchpoint="home" target="_blank" class="marketing-banners"><img src="{{side_banner}}"/></a>
			{{/with}}
		</div>
	</section>

	<div data-cms-area="product_details_full_cms_area_5" data-cms-area-filters="page_type"></div>
	<div data-cms-area="product_details_full_cms_area_6" data-cms-area-filters="path"></div>



	<div data-cms-area="product_details_full_cms_area_7" data-cms-area-filters="path"></div>

	<!-- <div data-view="ProductReviews.Center"></div> -->

	<div data-cms-area="product_details_full_cms_area_8" data-cms-area-filters="path"></div>


	<div id="banner-details-bottom" class="content-banner banner-details-bottom" data-cms-area="item_details_banner_bottom" data-cms-area-filters="page_type"></div>
</article>
</div>



{{!----
	Use the following context variables when customizing this template:

	model (Object)
	model.item (Object)
	model.item.internalid (Number)
	model.item.type (String)
	model.quantity (Number)
	model.options (Array)
	model.options.0 (Object)
	model.options.0.cartOptionId (String)
	model.options.0.itemOptionId (String)
	model.options.0.label (String)
	model.options.0.type (String)
	model.location (String)
	model.fulfillmentChoice (String)
	pageHeader (String)
	itemUrl (String)
	isItemProperlyConfigured (Boolean)
	isPriceEnabled (Boolean)

	----}}
