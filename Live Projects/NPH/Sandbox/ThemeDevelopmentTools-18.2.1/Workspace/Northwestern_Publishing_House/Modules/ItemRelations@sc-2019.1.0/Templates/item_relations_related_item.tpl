{{#if isSubItems}}
	<tr itemprop="itemListElement" data-item-id="{{itemId}}" data-track-productlist-list="{{track_productlist_list}}" data-track-productlist-category="{{track_productlist_category}}" data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}">
		
		<td>
			<a {{{itemURL}}}>
				<span itemprop="name">{{itemName}}</span>
			</a>
		</td>
		
		<td>
		<div class="item-relations-related-item-price" data-view="Item.Price"></div>
		</td>
		<td>
		<div class="subitem-qty-container">
			<input type="number" name="sub_item_qty" data-item-id="{{itemId}}" min="1" value="0"/>
		</div>
		</td>
		
</tr>
{{else}}
<div itemprop="itemListElement" data-item-id="{{itemId}}" data-track-productlist-list="{{track_productlist_list}}" data-track-productlist-category="{{track_productlist_category}}" data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}">
	<div class="item-relations-related-item-container">
		<div class="item-relations-related-item-contents">
		<a {{{itemURL}}} class="item-relations-related-item-title">
			<span itemprop="name">{{itemName}}</span>
		</a>
		{{#ifEquals itemId 491}}
		<div class="item-relations-related-item-thumbnail-sec">
		{{/ifEquals}}
			<a class="item-relations-related-item-thumbnail" {{{itemURL}}}>
				<img src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}" />
			</a>
		{{#ifEquals itemId 491}}
			<a class="item-new-badge" {{{itemURL}}}>New!</a>
		</div>
		{{/ifEquals}}
		<div class="item-relations-related-item-price" data-view="Item.Price">
		</div>

		{{#if showRating}}
			<div class="item-relations-related-item-rate" data-view="Global.StarRating">
			</div>
		{{/if}}
		{{#if isOnSale}}
			<div class="on_sale_banner"><img src="/sca-dev-2019-1/img/Sale Icon.png" alt="On Sale"/></div>
		{{/if}}
		</div>
		<div class="item-relations-related-item-actions">
			<div data-view="Cart.QuickAddToCart" class="cart-btn"></div>
			<div data-view="AddToProductList" class="add-to-list"></div>
		</div>
	</div>
</div>
{{/if}}



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
