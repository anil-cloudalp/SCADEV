<div itemprop="itemListElement" data-item-id="{{itemId}}" data-track-productlist-list="{{track_productlist_list}}"
	data-track-productlist-category="{{track_productlist_category}}"
	data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}">
	<div class="img-container">
		<a class="item-relations-related-item-thumbnail" {{{itemURL}}}>
			<img src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}" />
		</a>

	</div>

	{{log "related items template"  this}}
	{{!----
	<div data-view="Cart.QuickAddToCart"></div>
----}}

		{{#if itemwithoptionswishlist.fields}}
					<div class="wishlist-container">
						<a href="{{model._url}}" class="heart-icon" data-action = "currentview-wishlist" data-toggle="show-in-modal" id="wishlist" pop-up='true'>

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
		<div data-view="AddToProductList"></div>
		{{/if}}

	<div class="related-item-info">
		{{!----<div data-view="AddToProductList"></div>----}}
		<a {{{itemURL}}} class="item-relations-related-item-title">
			<span itemprop="name" class="related-item-title">{{itemName}}</span>
		</a>
		<div class="item-relations-related-item-price" data-view="Item.Price"></div>
		{{!----
	<section data-view="Product.Options" class="product-details-full-product-options-container"></section>

		<div data-view="ItemDetails.Options"></div>

		{{#if itemwithoptionsaddtocart.fields}}
			<button type="submit" class="related-items-cart-btn">
				<a href="{{url}}" data-toggle="show-in-modal">
					<i class="quickshopcart"></i>
					{{translate 'quick shop'}}
				</a>
			</button>
		{{else}}
			<div data-view="AddToCart">
				<input name="quantity" data-action="setquantity" class="" type="number" min="{{minimumQuantity}}"
					{{#if isMaximumQuantity}} max="{{maximumQuantity}}" {{/if}} value="{{quantity}}" />
			</div>

		{{/if}}
		 ----}}

		{{#if itemwithoptionsaddtocart.fields}}
		{{log 'url' model._url}}
		<div class="quick-shop-plp">
		<div class="quick-shop-plp-btn">
			<button type="submit" class="related-items-cart-btn">
				<a href="{{model._url}}" id="addtocart" data-action="addtocart" data-toggle="show-in-modal" pop-up='true'>
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


		{{!----
<div data-view="MainActionView"></div>

	{{#if showRating}}
		<div class="item-relations-related-item-rate" data-view="Global.StarRating">
		</div>
	{{/if}}
----}}
	</div>
</div>




{{!----
Use the following context variables when customizing this template:

	itemURL (String)
	thumbnail (Object)
	thumbnail.url (String)
	thumbnail.altimagetext (String)
	sku (String)
	model (Object)
	model.itemsIds (Number)
	model.options (Array)
	model._matrixParent (Object)
	model._matrixParent.options (Array)
	model._url (String)
	model._name (String)
	model._thumbnail (Object)
	model._thumbnail.url (String)
	model._thumbnail.altimagetext (String)
	model._sku (String)
	model._rating (Number)
	model._ratingsCount (Number)
	model._matrixChilds (Array)
	model._inStockMessage (String)
	model._showInStockMessage (Boolean)
	model._showStockDescription (Boolean)
	model._stockDescriptionClass (String)
	model._quantityavailableforstorepickup_detail (Array)
	model._showQuantityAvailable (Boolean)
	showRating (Boolean)
	itemName (String)
	itemId (Number)

----}}
