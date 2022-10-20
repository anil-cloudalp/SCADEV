{{!-- Edited for Threads Theme --}}

<div class="product-details-full">
	<div data-cms-area="item_details_banner" data-cms-area-filters="page_type"></div>

	<header class="product-details-full-header">
		<div id="banner-content-top" class="product-details-full-banner-top"></div>
	</header>

	<article class="product-details-full-content">

		<div id="banner-details-top" class="product-details-full-banner-top-details"></div>

		<section class="product-details-full-main-content">
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
                <div class="product-details-full-main">
                    <div class="product-details-full-content-header">
                        <div data-cms-area="product_details_full_cms_area_1" data-cms-area-filters="page_type"></div>
                        <div class="title-wishlist-container">
                                <h1 class="product-details-full-content-header-title" itemprop="name">{{pageHeader}}</h1>
                                <div data-view="AddToProductList" class="product-details-full-actions-addtowishlist"></div>
                        </div>
                        <div class="product-details-full-rating" data-view="Global.StarRating"></div>
                        <div data-cms-area="item_info" data-cms-area-filters="path"></div>
                    </div>
                    {{#if isItemProperlyConfigured}}
                        <form id="product-details-full-form" data-action="submit-form" method="POST">

                            <section class="product-details-full-info">
                                <div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>
                            </section>

                            <div data-view="Product.Sku"></div>

                            <div data-view="Product.Price"></div>
                        <div class="short-review ">
                             <div class="product-reviews-center-global-views-star-rating-container" data-view="Global.StarRating">
                             </div>              
                              <span class="first-review-span">         
                            <a href="{{itemUrl}}/newReview" class="product-reviews-center-container-footer-button">{{translate 'Add your review'}}</a>
                            </span>
                        </div>
               
                 {{!----    <div class="short-review">
						<h4 style="padding-right:10px" class="product-reviews-center-container-header-title-no-reviews">{{translate 'No reviews available'}}</h4>
			 	<span class="first-review-span">
						{{translate 'Be the first to'}} <a href="{{itemUrl}}/newReview" class="product-reviews-center-container-button">{{translate 'Add your review'}}</a>
				</span> 
						</div>
            ----}}    
                            <div data-view="Quantity.Pricing"></div>

                            <div data-view="Product.Stock.Info"></div>

                            <section data-view="Product.Options" class="product-details-full-product-options-container"></section>

                            <div data-cms-area="product_details_full_cms_area_4" data-cms-area-filters="path"></div>

                            {{#if isPriceEnabled}}
                                <div data-view="Quantity"></div>
                                <div class="optional-promo">
                                <i class="optional-promo-tag"></i>
                                <div class="promo-info">
                                extra optional promo message ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                                </div>
                                <section class="product-details-full-actions">

                                    <div class="product-details-full-actions-container">
                                        <div data-view="MainActionView"></div>

                                    </div>
                                     {{!---- <div class="product-details-full-actions-container">
                                      <div data-view="AddToProductList" class="product-details-full-actions-addtowishlist"></div> 

                                        <div data-view="ProductDetails.AddToQuote" class="product-details-full-actions-addtoquote"></div>  
                                    </div> ----}}

                                </section>
                            {{/if}}
                                   <div class="free-delivery">
                                        <i class="delivery-truck"></i>   free delivery when you spend over  &#163;50
                                     </div>
                            <div data-view="StockDescription">
                            </div>

                        {{!-----   <div data-view="SocialSharing.Flyout" class="product-details-full-social-sharing"></div> ----}}  

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

		</section>

        <section class="product-details-full-bottom-content">
            <div data-cms-area="product_details_full_cms_area_5" data-cms-area-filters="page_type"></div>
            <div data-cms-area="product_details_full_cms_area_6" data-cms-area-filters="path"></div>

            <section data-view="Product.Information"></section>

            <div data-cms-area="product_details_full_cms_area_7" data-cms-area-filters="path"></div>

            <div data-view="ProductReviews.Center"></div>

            <div data-cms-area="product_details_full_cms_area_8" data-cms-area-filters="path"></div>

            <div class="product-details-full-content-related-items">
                <div data-view="Related.Items"></div>
            </div>

			<div data-view="RecentlyViewed.Items" class="cart-detailed-recently-viewed"></div>
            
            <div class="product-details-full-content-correlated-items">
                <div data-view="Correlated.Items"></div>
            </div>
            <div id="banner-details-bottom" class="content-banner banner-details-bottom" data-cms-area="item_details_banner_bottom" data-cms-area-filters="page_type"></div>
        </section>
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
