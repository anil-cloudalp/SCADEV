<div class="cart-detailed">


	<div data-cms-area="cart_detailed_cms_area_1" data-cms-area-filters="path"></div>

	<div class="cart-detailed-body">

     {{#if isPriceEnabled}}
     	{{#if createSalesOrd}}
     	<div data-view="Quick.Order"></div>
     	{{/if}}
     {{/if}}
	 {{#unless showLines}}
	    <div class="cart-detailed-body-empty-cart">
				<p class="empty-cart-message">{{translate 'Your cart is currently empty.'}}</p>
				<p class="return-to-shop-button">
					<a href="#shop-main" data-touchpoint="home" data-hashtag="#shop-main">Return to shop</a>
				</p>

	    </div>
	 {{/unless}}
		<section class="{{#if showLines}}cart-detailed-left {{else}}cart-detailed-empty{{/if}}">

			{{#if showLines}}
			<div data-confirm-message class="cart-detailed-confirm-message"></div>

			<div class="cart-detailed-item-view-cell-actionable-table cart-detailed-table-row-with-border">
				<div class="cart-detailed-item-view-cell-actionable-table-header">
					<div class="cart-detailed-item-view-cell-actionable-table-remove-th">
						<span class="head-label"></span>
					</div>
					<div class="cart-detailed-item-view-cell-actionable-table-img-th">
						<span class="head-label"></span>
					</div>
					<div class="cart-detailed-item-view-cell-actionable-table-product-th">
					  <span class="head-label">Product</span>
					</div>
					<div class="cart-detailed-item-view-cell-actionable-table-price-th">
						<span class="head-label">Price</span>
					</div>
					<div class="cart-detailed-item-view-cell-actionable-table-quantity-th">
						<span class="head-label">Quantity</span>
					</div>
					<div class="cart-detailed-item-view-cell-actionable-table-total-th">
						<span class="head-label">Total</span>
					</div>
				</div>
				<div data-view="Item.ListNavigable">
				</div>
			</div>

			<div class="cart-detailed-item-free-info" data-view="FreeGift.Info"></div>
			<div class="cart-detailed-item-free" data-view="Item.FreeGift"></div>
			{{/if}}

			<div data-cms-area="cart_detailed_cms_area_2" data-cms-area-filters="path"></div>
		</section>

		{{#if showLines}}
		<section class="cart-detailed-right">
			<div data-view="Cart.Summary"></div>
		</section>
		{{/if}}
	</div>
	<div class="cart-detailed-footer">

	</div>

	<div data-cms-area="cart_detailed_cms_area_3" data-cms-area-filters="path"></div>
</div>




{{!----
Use the following context variables when customizing this template:

	model (Object)
	model.addresses (Array)
	model.addresses.0 (Object)
	model.addresses.0.zip (String)
	model.addresses.0.country (String)
	model.addresses.0.company (undefined)
	model.addresses.0.internalid (String)
	model.shipmethods (Array)
	model.lines (Array)
	model.lines.0 (Object)
	model.lines.0.item (Object)
	model.lines.0.item.internalid (Number)
	model.lines.0.item.type (String)
	model.lines.0.quantity (Number)
	model.lines.0.internalid (String)
	model.lines.0.options (Array)
	model.lines.0.location (String)
	model.lines.0.fulfillmentChoice (String)
	model.paymentmethods (Array)
	model.internalid (String)
	model.confirmation (Object)
	model.confirmation.addresses (Array)
	model.confirmation.shipmethods (Array)
	model.confirmation.lines (Array)
	model.confirmation.paymentmethods (Array)
	model.multishipmethods (Array)
	model.lines_sort (Array)
	model.lines_sort.0 (String)
	model.latest_addition (undefined)
	model.promocodes (Array)
	model.ismultishipto (Boolean)
	model.shipmethod (undefined)
	model.billaddress (undefined)
	model.shipaddress (String)
	model.isPaypalComplete (Boolean)
	model.touchpoints (Object)
	model.touchpoints.logout (String)
	model.touchpoints.customercenter (String)
	model.touchpoints.serversync (String)
	model.touchpoints.viewcart (String)
	model.touchpoints.login (String)
	model.touchpoints.welcome (String)
	model.touchpoints.checkout (String)
	model.touchpoints.continueshopping (String)
	model.touchpoints.home (String)
	model.touchpoints.register (String)
	model.touchpoints.storelocator (String)
	model.agreetermcondition (Boolean)
	model.summary (Object)
	model.summary.discounttotal_formatted (String)
	model.summary.taxonshipping_formatted (String)
	model.summary.taxondiscount_formatted (String)
	model.summary.itemcount (Number)
	model.summary.taxonhandling_formatted (String)
	model.summary.total (Number)
	model.summary.tax2total (Number)
	model.summary.discountedsubtotal (Number)
	model.summary.taxtotal (Number)
	model.summary.discounttotal (Number)
	model.summary.discountedsubtotal_formatted (String)
	model.summary.taxondiscount (Number)
	model.summary.handlingcost_formatted (String)
	model.summary.taxonshipping (Number)
	model.summary.taxtotal_formatted (String)
	model.summary.totalcombinedtaxes_formatted (String)
	model.summary.handlingcost (Number)
	model.summary.totalcombinedtaxes (Number)
	model.summary.giftcertapplied_formatted (String)
	model.summary.shippingcost_formatted (String)
	model.summary.discountrate (String)
	model.summary.taxonhandling (Number)
	model.summary.tax2total_formatted (String)
	model.summary.discountrate_formatted (String)
	model.summary.estimatedshipping (Number)
	model.summary.subtotal (Number)
	model.summary.shippingcost (Number)
	model.summary.estimatedshipping_formatted (String)
	model.summary.total_formatted (String)
	model.summary.giftcertapplied (Number)
	model.summary.subtotal_formatted (String)
	model.options (Object)
	showLines (Boolean)
	lines (Array)
	productsAndItemsCount (String)
	productCount (Number)
	itemCount (Number)
	pageHeader (String)

----}}
