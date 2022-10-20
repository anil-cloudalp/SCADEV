
define(
	'CA.AddToCartExtension.AddToCartModule'
	, [
		'CA.AddToCartExtension.AddToCartModule.View',
		'Facets.ItemCell.View',
		'Product.Model',
		'Cart.AddToCart.Button.View',
		'ItemRelations.RelatedItem.View',
		'ProductDetails.QuickView.View'
	]
	, function (
		AddToCartModuleView,
		FacetsItemCellView,
		ProductModel,
		CartAddToCartButtonView,  	 	
		ItemRelationsRelatedItemView,
		ProductDetailsQuickViewView
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {



				
			
				_.extend(ItemRelationsRelatedItemView.prototype, {
					events: _.extend({}, ItemRelationsRelatedItemView.prototype.events, {
						// 'click [pop-up="true"]' : "cartadd",
						// 'click [data-action = "testing"]' : "test"

						'click [data-action="addtocart"]' : 'cartadd',
						// 'click [pop-up="true"]': "wish"
					}),
					cartadd:function(e){
					
						// if(e.currentTarget.id == 'addtocart'){
						// 	this.parentView.options.application.isClickedAddCart = true;
						// }
						// else{
						// 	this.parentView.options.application.isClickedAddCart = false;
						// }
							console.log("TRiggers")
					},
					childViews: _.extend({}, ItemRelationsRelatedItemView.prototype.childViews, {
						AddToCart: function () {
							const product = new ProductModel({
								item: this.model,
								quantity: this.model.get('_minimumQuantity', true),
								mybutton: true // for button template customisation
							});
							// try {
							// 	if (this.model.attributes.itemoptions_detail) {
							// 		this.itemwithoptionsaddtocart = true;
							// 	}
							// } catch (error) {
							// 	// console.log('error', error)
							// }
							return new CartAddToCartButtonView({
								model: product,
								application: this.parentView.options.application, //this.options.application
							});
						},
					}),

					getContext: _.wrap(ItemRelationsRelatedItemView.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));
						// console.log("WIshlist model", this.model)
						// ret.itemwithoptionswishlist = this.model.get('itemoptions_detail') || this.model.get('itemoptions_detail') == "undefined";
						 ret.itemwithoptionsaddtocart = this.model.get('itemoptions_detail') || this.model.get('itemoptions_detail') == "undefined";
						 console.log("THIS>EVENTS", this.events)

						return ret;
					})
				})

				// var events = FacetsItemCellView.prototype.events;
				// events['click [pop-up="true"]'] = "cartadd"		
				// events['click [data-action = "testing"]'] = "test";

				// FacetsItemCellView.prototype.events = events;

				_.extend(FacetsItemCellView.prototype, {

					initialize: _.wrap(FacetsItemCellView.prototype.initialize, function initialize(fn, options) {
						fn.apply(this, _.toArray(arguments).slice(1));
						
						}),
						// events: _.extend({}, FacetsItemCellView.prototype.events, {
						// 	'click [pop-up="true"]' : "cartadd",
						// 	'click [data-action = "testing"]' : "test"
						// }),

	 				cartadd:function(e){
						console.log("current target", e.currentTarget.id)
						if(e.currentTarget.id == 'addtocart'){
							this.options.application.isClickedAddCart = true;
						}
						else{
							this.options.application.isClickedAddCart = false;
						}
					},

					childViews: _.extend({}, FacetsItemCellView.prototype.childViews, {

						'AddToCart': function () {

							const product = new ProductModel({
								item: this.model,
								quantity: this.model.get('_minimumQuantity', true),
								mybutton: true // for button template customisation
							});

							// try {
							// 	if (this.model.attributes.itemoptions_detail) {
							// 		this.itemwithoptionsaddtocart = true;
							// 	}
							// } catch (error) {

							// }

							return new CartAddToCartButtonView({
								model: product,
								application: this.options.application, //this.options.application
							});
						},

					}),

					getContext: _.wrap(FacetsItemCellView.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));

						ret.itemwithoptionsaddtocart = this.model.get('itemoptions_detail') || this.model.get('itemoptions_detail') == "undefined";
						return ret;
					})

				});

				_.extend(ProductDetailsQuickViewView.prototype, {

					getContext: _.wrap(ProductDetailsQuickViewView.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));
						// ret.addToCartClicked = this.application.isClickedAddCart;
						console.log("quick getcontext", this)
						return ret;
					})
				})


				_.extend(CartAddToCartButtonView.prototype, {

					getContext: _.wrap(CartAddToCartButtonView.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));

						ret.relateditemsaddtocart = this.model.get('mybutton');
						return ret;
					})

				});


			}
		};
	});
