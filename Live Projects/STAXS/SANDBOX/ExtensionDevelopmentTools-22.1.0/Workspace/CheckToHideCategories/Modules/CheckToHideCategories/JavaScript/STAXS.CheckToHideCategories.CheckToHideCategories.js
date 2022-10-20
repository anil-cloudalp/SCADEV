
define(
	'STAXS.CheckToHideCategories.CheckToHideCategories'
	, [
		'STAXS.CheckToHideCategories.CheckToHideCategories.View',
		'STAXS.CheckToHideCategories.CheckToHideCategories.Model',
		'Facets.Browse.View',
		'Backbone.CollectionView',
		'Facets.CategoryCell.View',
		'Configuration',
		'Header.Menu.View',
		'Cart.AddToCart.Button.View',
		'Facets.ItemCell.View',
		'Product.Model'
	]
	, function (
		CheckToHideCategoriesView,
		CheckToHideCategoriesModel,
		FacetsBrowseView,
		BackboneCollectionView,
		FacetsCategoryCellView,
		Configuration,
		HeaderMenuView,
		CartAddToCartButtonView,
		FacetsItemCellView,
		ProductModel
	) {

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var employee = false;

            var userprofilecomponent = container.getComponent("UserProfile");

            userprofilecomponent.getUserProfile().done(function (data) {
                if (data.internalid == Configuration.get('HideMyaccountAndCertificatesOnlyAccess').salesRepCustomer) {
                    return employee = true;
                }else{
                    return employee = false;
                }

            });
				
				_.extend(FacetsItemCellView.prototype,{
					childViews: _.extend({}, FacetsItemCellView.prototype.childViews, {
						'ListCartQuickAddToCart': function() {
							const product = new ProductModel({
									item: this.model,
									quantity: this.model.get('_minimumQuantity', true)
							});
	
							return new CartAddToCartButtonView({
									model: product,
									application: this.options.application
							});
					},
					
						})
				});


				var new_model = new CheckToHideCategoriesModel();
				//To get the names of the commerce categories which should not visible
				var promise = new_model.fetch();
				promise.then(function (res) {
					container.checkedCatagories = res;
				});
				container.waitForPromise(promise);
				//To Show only the category names which are not checked
				_.extend(FacetsBrowseView.prototype, {
					childViews: _.extend({}, FacetsBrowseView.prototype.childViews, {
						'Facets.CategoryCells': function () {
							var response_category_names = container.checkedCatagories;
							var originalCategories = this.model.get('category').get('categories') != '' ? this.model.get('category').get('categories') :"";
							
							if(!employee){
								if( !_.isEmpty(originalCategories) ){
									for (var i = 0; i < response_category_names.length; i++) {
										for (var j = 0; j < originalCategories.length; j++) {
											if (response_category_names[i].not_required_categories_id === (originalCategories[j].internalid)) {
											
												originalCategories.splice(j, 1);
												
											}
										}
									}
								}
							}
								
							
							return new BackboneCollectionView({
								childView: FacetsCategoryCellView,
								collection: this.model.get('category')
									? this.model.get('category').get('categories')
									: []
							});
						},

					})
				});
				//To show the main categories which are not checked
				_.extend(HeaderMenuView.prototype, {
					getContext: _.wrap(HeaderMenuView.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));
						if(!employee){
							var response_category_names = container.checkedCatagories;
							for (var k = 0; k < response_category_names.length; k++) {
								for (var l = 0; l < Configuration.navigationData.length; l++) {
									if (response_category_names[k].not_required_categories_name.toUpperCase() === (Configuration.navigationData[l].text).toUpperCase()) {
										Configuration.navigationData.splice(l, 1);
									}
								}
							}
							ret.categories = Configuration.navigationData || [] ;
						}
					return ret;
						// return {
						// 	categories: Configuration.navigationData || [],
						// 	ret: ret
						// }

					})
				});

			}
		};
	});
