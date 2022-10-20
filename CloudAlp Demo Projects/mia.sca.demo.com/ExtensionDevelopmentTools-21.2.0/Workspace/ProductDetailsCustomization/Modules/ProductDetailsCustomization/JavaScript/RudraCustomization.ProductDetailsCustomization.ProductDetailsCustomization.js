
define(
	'RudraCustomization.ProductDetailsCustomization.ProductDetailsCustomization'
,   [
		'RudraCustomization.ProductDetailsCustomization.ProductDetailsCustomization.View'
	,	'RudraCustomization.ProductDetailsCustomization.FacetsSideBar.View'
	,	'ProductDetails.Full.View'
	,	'Header.MiniCart.View'
	,	'Backbone.CollectionView'
	,	'Backbone'
	,	'Header.MiniCartItemCell.View'
	,	'Header.MiniCartSummary.View'
	,	'ProductDetails.ImageGallery.View'
	,	'PhotoSwipeUI_Default'
	,	'PhotoSwipe'
	]
,   function (
		ProductDetailsCustomizationView
	,	FacetsSideBarView
	,	ProductDetailsFullView
	,	CartSidebar
	,	BackboneCollectionView
	,	Backbone
	,	HeaderMiniCartItemCellView
	,	HeaderMiniCartSummaryView
	,	ProductDetailsImageGalleryView
	,	PhotoSwipeUI_Default
	,	PhotoSwipe

	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html


			_.extend(CartSidebar.prototype,{
				getContext:_.wrap(CartSidebar.prototype.getContext,function getContext(fn){
					var context = fn.apply(this, _.toArray(arguments).slice(1));
						context.CartSidebar = this.options.CartSidebar
					return context;
				}),
				initialize:_.wrap(CartSidebar.prototype.initialize,function initialize(fn){
				    fn.apply(this, _.toArray(arguments).slice(1));
						this.CartSidebar = this.options.CartSidebar;
				}),
				events:_.extend({},CartSidebar.prototype.events,{
					'click [name="remove-mini-cart-item"]': 'removeItem'
				}),
				removeItem: function removeItem(e) {
					e.stopPropagation();
					
					const self = this;
					const product = this.model.get('lines').get(jQuery(e.currentTarget).data('internalid'));
					const remove_promise = this.model.removeLine(product);
				},
				childViews: _.extend({}, CartSidebar.prototype.childViews, {
					'Header.MiniCartSummary': function() {
						return new HeaderMiniCartSummaryView();
					},
					'Header.MiniCartItemCell': function() {
						var self = this;
						return new BackboneCollectionView({
							collection: !this.isLoading ? this.model.get('lines') : new Backbone.Collection(),
							childView: HeaderMiniCartItemCellView,
							viewsPerRow: 1,
							
							childViewOptions:{
								CartSidebar:self.CartSidebar
							}
						});
					}

				}),
			})
			_.extend(HeaderMiniCartItemCellView.prototype,{
				getContext:_.wrap(HeaderMiniCartItemCellView.prototype.getContext, function getContext(fn){
					
					var context = fn.apply(this, _.toArray(arguments).slice(1));
						context.CartSidebar = this.options.CartSidebar;
						context.lineId = this.model.get('internalid');
						
					return context;
				})
			})
			
			
			_.extend(ProductDetailsFullView.prototype,{
				childViews: _.extend({}, ProductDetailsFullView.prototype.childViews, {
					'FacetsSideBar': function () {
						return new FacetsSideBarView({
							
						});
					},
					'CartSidebar': function () {
						return new CartSidebar({
							CartSidebar:true
						});
					},

				}),
			})
			_.extend(ProductDetailsImageGalleryView.prototype,{
				events:_.extend({},ProductDetailsImageGalleryView.prototype.events,{
					'click .photoswipe-zoom': 'initPhotoSwipe'
				}),
				initPhotoSwipe: function(){
		
					var pswpElement = this.$('.pswp')[0];
					
					var items = _.map(this.images,function(img){
						var obj = {
							src: img.url,
							w:'2500',
							h:'2500'
						};
						return obj;
					});
					var options = {       
						history: false,
						focus: false,
			
						showAnimationDuration: 0,
						hideAnimationDuration: 0,
						shareEl: false,
						closeOnScroll:false
					};
					
					var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
					
					gallery.init();
			
				}
			})
			
			
		}
	};
});
