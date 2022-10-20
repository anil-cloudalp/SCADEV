{{!-- Edited for Posh Theme --}}
{{#if showButton}}
{{#if isCurrentItemPurchasable}}
{{#if hideAddToCartButton}}
	<div class="cart-add-to-cart-button-container">
		<div class="cart-add-to-cart-button">
			<button type="submit" data-type="add-to-cart" data-action="sticky" class="cart-add-to-cart-button-button">
				{{#if isUpdate}}{{translate 'Update'}}{{else}}{{translate 'Order now'}}{{/if}}
			</button/>
		</div>
	</div>
{{/if}}
{{/if}}
{{/if}}



{{!----
Add to Shopping Cart
Use the following context variables when customizing this template: 
	
	isCurrentItemPurchasable (Boolean)
	isUpdate (Boolean)

----}}
