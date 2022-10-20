<!--form class="cart-quickaddtocart" data-action="add-to-cart">
	<div data-view="ProductViewsPrice.Price" class="cart-quickaddtocart-price"></div>
	{{#if showQuickAddToCartButton}}
		<div data-view="AddToCart">
			<input name="quantity" data-action="setquantity" class="cart-quickaddtocart-quantity" type="number" min="{{minimumQuantity}}"{{#if isMaximumQuantity}} max="{{maximumQuantity}}"{{/if}} value="{{quantity}}"/>
		</div>
	{{/if}}
</form-->
<form class="cart-quickaddtocart {{#if isItemWithReferenceTexts}} isItemWithReferenceTexts {{/if}}" data-action="add-to-cart">
<div class="product-details-options-selector-message"></div>
<!--div data-view="ProductViewsPrice.Price" class="cart-quickaddtocart-price"></div-->
{{#if duration }}	
<div class="cart-quickaddtocart-input-wrapper">
	<label class="facets-item-cell-list-options-label">Duration</label>
	<div data-view="ItemDetails.Options"></div>
</div>
{{/if}}
<div class="cart-quickaddtocart-input-wrapper">
	<label class="facets-item-cell-list-options-label">Quantity</label>
	<input name="quantity" data-action="setquantity" class="cart-quickaddtocart-quantity" type="number" min="{{minimumQuantity}}"{{#if isMaximumQuantity}} max="{{maximumQuantity}}"{{/if}} value="{{quantity}}"/>
</div>
<div class="cart-quickaddtocart-input-wrapper">
	<div data-view="AddToCart"></div>
</div>
{{#if showQuickAddToCartButton}}{{/if}}
</form>
<div class="cart-quickaddtocart-featured-description">{{{featuredDescription}}}</div>




{{!----
Use the following context variables when customizing this template: 
	
	itemId (Number)
	showQuickAddToCartButton (Boolean)
	minimumQuantity (Number)
	quantity (Number)

----}}
