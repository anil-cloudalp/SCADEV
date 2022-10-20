{{! Edited for Horizon Theme }}

<div itemprop="itemListElement" itemtype="http://schema.org/Product" data-item-id="{{itemId}}" data-track-productlist-list="{{track_productlist_list}}" data-track-productlist-category="{{track_productlist_category}}" data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}">
  <div class="wrapper">
		<a class="item-relations-related-item-thumbnail" {{{itemURL}}}>
			<img src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}" />
		</a>
		{{#if isPriceEnabled}}
		<div class="item-relations-related-item-actions">
			<div data-view="CartAddToCart" class="cart-btn"></div>
			<div class="quickview">
				{{#if isEnvironmentBrowser}}
					<div class="item-relations-related-item-quickview">
						<a href="{{url}}" class="item-relations-related-item-quickview" data-toggle="show-in-modal">
							<p class="item-relations-related-item-quickview-icon"><i></i></p>

						</a>
					</div>
				{{/if}}
			</div>

		</div>
		{{/if}}
  </div>

	<a {{{itemURL}}} class="item-relations-related-item-title">
		<span itemprop="name">{{itemName}}</span>
	</a>
	<div class="item-relations-related-item-price" data-view="Item.Price">
	</div>

	{{#if onlyRelated}}
		<div style="text-align:left"><span {{#if qtyAvailable}} style="color:green;" {{else}}  style="color:red"; {{/if}}>{{#if qtyAvailable}} In stock {{else}} Out of stock {{/if}}</span></div>
	{{/if}}

	{{#if showRating}}
	<!-- <div class="item-relations-related-item-rate" data-view="Global.StarRating">
	</div> -->
	{{/if}}

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
