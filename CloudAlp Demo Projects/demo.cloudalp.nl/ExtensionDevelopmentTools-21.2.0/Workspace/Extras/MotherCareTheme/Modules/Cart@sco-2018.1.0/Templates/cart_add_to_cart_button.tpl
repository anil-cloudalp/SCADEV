{{!-- Edited for Threads Theme --}}

{{#if relateditemsaddtocart}}
	{{#if isCurrentItemPurchasable}}
		<div class="cart-add-to-cart-button-container">
			<div class="cart-add-to-cart-button">
				<button type="submit" data-type="add-to-cart" data-action="sticky" class="related-items-cart-btn">
					<i class="quickshopcart"></i>
					{{#if isUpdate}}{{translate 'Update'}}{{else}}{{translate 'add to cart'}}{{/if}}
				</button />
			</div>
		</div>
	{{/if}}

{{else}}
	{{#if isCurrentItemPurchasable}}
		<div class="cart-add-to-cart-button-container">
			<div class="cart-add-to-cart-button">
				<button type="submit" data-type="add-to-cart" data-action="sticky" class="cart-add-to-cart-button-button">
					{{#if isUpdate}}{{translate 'Update'}}{{else}}{{translate 'add to cart '}}{{/if}}
				</button />
			</div>
		</div>
	{{/if}}
{{/if}}


{{!----
Use the following context variables when customizing this template:

	isCurrentItemPurchasable (Boolean)
	isUpdate (Boolean)

----}}
