
define(
	'RudraCustomization.FecetsCustomization.FecetsCustomization'
,   [
		'RudraCustomization.FecetsCustomization.FecetsCustomization.View'
	,	'RudraCustomization.FecetsCustomization.FacetsSideBar.View'
	,	'Facets.Browse.View'
	,	'Item.Model'
	,	'Profile.Model'
	,	'Facets.Model'
	,	'Categories.Model'
	,	'Header.MiniCart.View'
	]
,   function (
		FecetsCustomizationView
	,	FacetsSideBarView
	,	FacetsBrowseView
	,	ItemModel
	,	ProfileModel
	,	FacetsModel
	,	CategoriesModel
	,	HeaderMiniCartView
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
			var obj = FacetsBrowseView.prototype.events;
			obj['click [data-navigate]'] = "navigateSections";
			FacetsBrowseView.prototype.events = obj;
			_.extend(FacetsBrowseView.prototype,{
				// initialize:_.wrap(FacetsBrowseView.prototype.initialize,function initialize(fn){
				// 	fn.apply(this, _.toArray(arguments).slice(1));
				// 	console.log(this);
					
				// }),
				
				childViews: _.extend({}, FacetsBrowseView.prototype.childViews, {
					'FacetsSideBar': function () {
						return new FacetsSideBarView({
							model: this.model.get('category'),
                			categoryUrl: this.translator.getCategoryUrl()
						});
					},
					'CartSidebar': function () {
						return new HeaderMiniCartView({
							CartSidebar:true
						});
					},

				}),
				navigateSections: function(e){
		
					var navSec = jQuery(e.currentTarget).attr('data-navigate');
					
					jQuery(navSec)[0].scrollIntoView({
						behavior: "smooth",
						block: "start"
					});
				},
				getContext:_.wrap(FacetsBrowseView.prototype.getContext, function getContext(fn){
					const hasSubcategories = this.model.get('category');
					// console.log(this);
					
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					var catFields = this.model.get('category')
					? this.model.get('category').get('extraFields')
					: [];
					
					
				var featuredItem = {};
				var catFields2 = {};
				
				if(catFields && catFields.length){
					
					if(catFields.length == 1){
						catFields = catFields[0];
					}
					else{
						catFields2 = catFields[0];
						catFields = catFields[1];
					}
						
					
					

					var item;
					if(_.has(catFields,'item')){
						item = new ItemModel(catFields.item);
					}
					else if(_.has(catFields2,'item')){
						
						item = new ItemModel(catFields2.item);
					}
					if(item){
						
						var images = item.getImages();
						featuredItem = {
						name: item.get('storedisplayname2'),
						desc: item.get('storedescription'),
						url: item.get('urlcomponent')?item.get('urlcomponent'): ('/product/' + item.get('internalid')),
						featuredDesc: item.get('featureddescription'),
						image: (images.length > 0)? images[0]: {}
						};
					}
					
				}
				context.hasSubcategories = hasSubcategories,
				context.featuredItem= !_.isEmpty(featuredItem)?featuredItem: false
				// console.log(context);
					return context;
				})
			})

		}
	};
});
