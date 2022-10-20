{{!-- Edited for Posh Theme --}}
 {{!-- <div class="facets-item-cell-list facets-list-item-show-mobile" itemprop="itemListElement" data-item-id="{{itemId}}" data-track-productlist-list="{{track_productlist_list}}" data-track-productlist-category="{{track_productlist_category}}" data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}">
	<div class="facets-item-cell-list-left">
		<div class="facets-item-cell-list-image-wrapper">
			{{#if itemIsNavigable}}
				<a class="facets-item-cell-list-anchor" href='{{url}}'>
					<img class="facets-item-cell-list-image" src="{{resizeImage thumbnail.url 'listtable'}}" alt="{{thumbnail.altimagetext}}" itemprop="image">
				</a>
			{{else}}
				<img class="facets-item-cell-list-image" src="{{resizeImage thumbnail.url 'homecell'}}" alt="{{thumbnail.altimagetext}}" itemprop="image">
			{{/if}}
			{{#if isEnvironmentBrowser}}
				<div class="facets-item-cell-list-quick-view-wrapper">
					<a href="{{url}}" class="facets-item-cell-list-quick-view-link" data-toggle="show-in-modal">
						<i class="facets-item-cell-list-quick-view-icon"></i>
						{{translate 'Quick View'}}
					</a>
				</div>
			{{/if}}
		</div>
	</div>
	<div class="facets-item-cell-list-right">
		<div class="facets-item-cell-list-sku">
      <b class="facets-item-cell-list-sku-value" itemprop="sku">
        {{sku}}
      </b>
    </div>

		<h2 class="facets-item-cell-list-title">
			{{#if itemIsNavigable}}
				<a class="facets-item-cell-list-name" href='{{url}}'>
					<span itemprop="name">
						{{name}}
					</span>
				</a>
			{{else}}
				<span itemprop="name">
					{{name}}
				</span>
			{{/if}}
		</h2>

		<div class="facets-item-cell-list-price">
			<div data-view="ItemViews.Price"></div>
		</div>

		<div data-view="Cart.QuickAddToCart"></div>

		{{#if showRating}}
		<div class="facets-item-cell-list-rating" itemprop="aggregateRating" data-view="GlobalViews.StarRating">
		</div>
		{{/if}}

		<div data-view="ItemDetails.Options"></div>

		<div class="facets-item-cell-list-stock">
			<div data-view="ItemViews.Stock" class="facets-item-cell-list-stock-message"></div>
		</div>

		<div data-view="StockDescription"></div>
	</div>
</div> --}}




<div class="facets-item-cell-list facets-item-cell-new-layout" itemprop="itemListElement" data-item-id="{{itemId}}" data-track-productlist-list="{{track_productlist_list}}" data-track-productlist-category="{{track_productlist_category}}" data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}">
	<div class="facets-item-cell-list-right">
		<div class="factes-list-img-sm">
			<div class="facets-item-cell-list-image-wrapper">
			{{#if itemIsNavigable}}
				<a class="facets-item-cell-list-anchor" href='{{url}}'>
					<img class="facets-item-cell-list-image" src="{{resizeImage thumbnail.url 'listtable'}}" alt="{{thumbnail.altimagetext}}" itemprop="image">
				</a>
			{{else}}
				<img class="facets-item-cell-list-image" src="{{resizeImage thumbnail.url 'listtable'}}" alt="{{thumbnail.altimagetext}}" itemprop="image">
			{{/if}}
		</div>
		</div>
		<div class="factes-list-sku-col-sm">
		<div class="facets-item-cell-list-sku">
      <b class="facets-item-cell-list-sku-value" itemprop="sku">
        {{sku}}
      </b>
    </div>
		</div>
		<div class="factes-list-item-name-col-sm">
			<div class="facets-itemid">
				<h2 class="facets-item-cell-list-title">
			{{#if itemIsNavigable}}
				<a class="facets-item-cell-list-name" href='{{url}}'>
					<span itemprop="name">
						{{name}}
					</span>
				</a>
			{{else}}
				<span itemprop="name">
					{{name}}
				</span>
			{{/if}}
		</h2>
		</div>
		</div>
		<div class="factes-list-price">
				<div data-view="Cart.QuickAddToCart"></div>
		</div>
		
		<div class="factes-list-quick-view">
			{{!----	{{#if isEnvironmentBrowser}}----}}
				<div class="facets-item-cell-list-quick-view-wrapper">
					<a href="{{url}}" class="facets-item-cell-list-quick-view-link" data-toggle="show-in-modal">
						<i class="facets-item-cell-list-quick-view-icon"></i>
						{{translate 'Quick View'}}
					</a>
				</div>
			{{!----{{/if}}----}}
		</div>

		 <div class="factes-list-add-to-cart">
			<div class="cart-add-to-cart-factes-list" data-view="ListCartQuickAddToCart"></div>
		</div>

		{{#if showRating}}
		<div class="facets-item-cell-list-rating" itemprop="aggregateRating" data-view="GlobalViews.StarRating">
		</div>
		{{/if}}

		<div data-view="ItemDetails.Options"></div>

		<div class="facets-item-cell-list-stock">
			<div data-view="ItemViews.Stock" class="facets-item-cell-list-stock-message"></div>
		</div>

		<div data-view="StockDescription"></div>
	
	</div>
</div>
	<div class="factes-hr-line"></div>



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
