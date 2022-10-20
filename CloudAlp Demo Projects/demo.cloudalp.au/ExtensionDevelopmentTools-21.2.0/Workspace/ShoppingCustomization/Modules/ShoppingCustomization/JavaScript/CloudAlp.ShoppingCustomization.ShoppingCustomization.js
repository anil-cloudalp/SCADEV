
define(
	'CloudAlp.ShoppingCustomization.ShoppingCustomization'
	, [
		'CloudAlp.ShoppingCustomization.ShoppingCustomization.View'
		, 'CloudAlp.ShoppingCustomization.ShoppingCustomizationProductsQuick.View'
		, 'CloudAlp.ShoppingCustomization.BecomeaDealer.View'
		, 'Cart.AddToCart.Button.View'
		, 'Product.Model'
		, 'Facets.ItemCell.View'
		, 'Facets.Browse.CategoryHeading.View'
		, 'ProductDetails.Base.View'
		, 'underscore'
	]
	, function (
		ShoppingCustomizationView
		, ShoppingCustomizationProductsQuickView
		, BecomeaDealerView
		, CartAddToCartButtonView
		, ProductModel
		, FacetsItemCellView
		, FacetsBrowseCategoryHeadingView
		, ProductDetailsBaseView
		, _
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');
				const pageType = container.getComponent('PageType');
				// FacetsItemCellView.prototype.getContext = _.wrap(FacetsItemCellView.prototype.getContext, function getContext(fn) {
				// 	var self = this;
				// 	var context = fn.apply(this, _.toArray(arguments).slice(1));
				// 	var itemtype = self.model.get('storedescription');
				// 	return context;
				// });
				// show store description in plp and quick view.
				_.extend(FacetsItemCellView.prototype, {
					childViews: _.extend({}, FacetsItemCellView.prototype.childViews, {
						'Store.Description': function () {
							const product = new ProductModel({
								item: this.model,
								storedescription: this.model.get('storedescription')
							});

							return new ShoppingCustomizationProductsQuickView({
								model: product,
								application: this.options.application
							});
						},

					})
				});
				//end

				// when the item is gift ceritifcate hide add to cart button
				CartAddToCartButtonView.prototype.getContext = _.wrap(CartAddToCartButtonView.prototype.getContext, function getContext(fn) {
					var self = this;
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					var itemtype = self.model.get('item').get('itemtype');
					var showAddToCartButton = true;

					if (itemtype === "GiftCert") {
						showAddToCartButton = false;
					}
					context.showaddtocartbtn = showAddToCartButton;


					return context;
				});
				//end

				pageType.registerPageType({
					name: 'Become a dealer',
					routes: ['become-a-dealer'],
					view: BecomeaDealerView,
					defaultTemplate: {
						name: 'cloudalp_shoppingcustomization_become_a_dealer.tpl',
						displayName: 'Become a dealer'
					}
				});

			}
		};
	});
