<div class="facets-item-cell-grid" data-type="item" data-item-id="{{itemId}}" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/Product" data-track-productlist-list="{{track_productlist_list}}" data-track-productlist-category="{{track_productlist_category}}" data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}">
	<meta itemprop="url" content="{{url}}"/>
	<div class="facets-item-cell-grid-content">
		<a class="facets-item-cell-grid-title" href="{{url}}">
				<span itemprop="name">{{name}}</span>
		</a>
		{{#if showImg}}
			<div class="facets-item-cell-grid-image-section">
				<div class="facets-item-cell-grid-image-wrapper">
					<a class="facets-item-cell-grid-link-image" href="{{url}}">
						<img class="facets-item-cell-grid-image" src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}" itemprop="image"/>
					</a>
					{{#if isEnvironmentBrowser}}
						<!--div class="facets-item-cell-grid-quick-view-wrapper">
							<a href="{{url}}" class="facets-item-cell-grid-quick-view-link" data-toggle="show-in-modal">
								<i class="facets-item-cell-grid-quick-view-icon"></i>
								{{translate 'Quick View'}}
							</a>
						</div-->
					{{/if}}
					
				</div>
				{{#if removeLogo}}
				{{else}}
				<a class="product-details-image-gallery-brand" href="{{url}}"><img src="{{ getThemeAssetsPath 'img/NPH_Logo_47x47.png'}}" title="Published by Northwestern Publishing House" alt="NPH LOGO"/></a>
				{{/if}}
				{{#if newBadge}}
					<div class="new_badge_banner"><img src="{{ getThemeAssetsPath 'img/new_icon.png'}}" alt="New"/></div>
				{{/if}}

			</div>
		{{/if}}
		<div class="facets-item-cell-grid-price" data-view="ItemViews.Price"></div>
			{{#if is_purchased}}
				<div class="facets-item-cell-list-price" style="color:#c01a29"> Previously Purchased </div>
			{{/if}}
			{{#if showRating}}
				<div class="facets-item-cell-grid-rating" itemprop="aggregateRating" itemscope="" itemtype="https://schema.org/AggregateRating" data-view="GlobalViews.StarRating">
				</div>
			{{/if}}
		<div data-view="ItemDetails.Options"></div>
		<div class="facets-item-cell-grid-stock">
			<div data-view="ItemViews.Stock" class="facets-item-cell-grid-stock-message"></div>
		</div>
		<div data-view="StockDescription"></div>
		{{#if isOnSale}}
			<div class="on_sale_banner"><img src="/sca-dev-2019-1/img/Sale Icon.png" alt="On Sale"/></div>
		{{/if}}
	</div>
	<div class="facets-item-cell-grid-actions">
		<div data-view="Cart.QuickAddToCart" class="cart-btn"></div>
		<div data-view="AddToProductList" class="add-to-list"></div>
	</div>
</div>




{{!----
Use the following context variables when customizing this template: 
	
	itemId (Number)
	name (String)
	url (String)
	sku (String)
	isEnvironmentBrowser (Boolean)
	thumbnail (Object)
	thumbnail.url (String)
	thumbnail.altimagetext (String)
	itemIsNavigable (Boolean)
	showRating (Boolean)
	rating (Number)

----}}
