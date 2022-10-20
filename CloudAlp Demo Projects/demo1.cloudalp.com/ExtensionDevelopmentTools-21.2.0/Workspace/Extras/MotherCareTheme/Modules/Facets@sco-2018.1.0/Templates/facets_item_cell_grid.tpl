{{!-- Edited for Threads Theme

 --}}

<div class="facets-item-cell-grid" data-type="item" data-item-id="{{itemId}}" itemprop="itemListElement"
	data-track-productlist-list="{{track_productlist_list}}"
	data-track-productlist-category="{{track_productlist_category}}"
	data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}">

	<div class="img-container">
		<a class="facets-item-cell-grid-link-image" href="{{url}}">


			<img class="facets-item-cell-grid-image" src="{{ resizeImage thumbnail.url 'product_list_pag'}}"
				alt="{{thumbnail.altimagetext}}" itemprop="image" />

		</a>
		{{#if isEnvironmentBrowser}}
			<div class="facets-item-cell-grid-quick-view-wrapper">
				<a href="{{url}}" class="facets-item-cell-grid-quick-view-link" data-toggle="show-in-modal" pop-up='true'>
					<i class="facets-item-cell-grid-quick-view-icon"></i>
					{{translate 'Quick View'}}
				</a>
			</div>
		{{/if}}

	</div>
	
		{{#if itemwithoptionswishlist.fields}}
					<div class="wishlist-container">
						<a href="{{url}}" class="heart-icon" data-action = "currentview-wishlist" data-toggle="show-in-modal" id="wishlist" pop-up='true'>

					 	{{#if matrixitemhaswishlist}}

							<i class="wishlist-pink -{{itemId}}" class="settingoptions" data-type="change-icon" data-action="show-productlist-control" data-toggle="showFlyout" type="button">
							</i>
							{{else}}
							{{log "item id" itemId}}
							<i class="wishlist -{{itemId}}" class="settingoptions" data-type="change-icon" data-action="show-productlist-control" data-toggle="showFlyout" type="button" >
							</i>
							{{/if}}
						</a>
					</div>
						
		{{else}}
	<div class="plp-wishlist" data-view="WishList"></div>
		{{/if}}
		

	<div class="facets-item-cell-grid-details">
		<a class="facets-item-cell-grid-title" href="{{url}}">
			<span itemprop="name">{{name}}</span>
		</a>

		<div class="facets-item-cell-grid-price" data-view="ItemViews.Price">
		</div>

		<div data-view="Cart.QuickAddToCart"></div>

		{{!-- {{#if showRating}}
			<div class="facets-item-cell-grid-rating" itemprop="aggregateRating" data-view="GlobalViews.StarRating">
			</div>
		{{/if}} --}}

		<div data-view="ItemDetails.Options"></div>


		{{#if itemwithoptionsaddtocart.fields}}
			<div class="quick-shop-plp">
				<div class="quick-shop-plp-btn">
					<button type="submit" class="related-items-cart-btn">
						<a href="{{url}}" id="addtocart" data-action="addtocart" data-toggle="show-in-modal" pop-up='true'>
							<i class="quickshopcart"></i>
							{{translate 'add to cart'}}
						</a>
						</button>
		{{else}}
			<div data-view="AddToCart">
				{{!-- <input name="quantity" data-action="setquantity" class="" type="number" min="{{minimumQuantity}}"
					{{#if isMaximumQuantity}} max="{{maximumQuantity}}" {{/if}} value="{{quantity}}" /> --}}
			</div>
				</div>
			</div>
		{{/if}}


		{{!-- <div data-view="AddToCart"></div> --}}



		<div class="facets-item-cell-grid-stock">
			<div data-view="ItemViews.Stock" class="facets-item-cell-grid-stock-message"></div>
		</div>

		<div data-view="StockDescription"></div>
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
