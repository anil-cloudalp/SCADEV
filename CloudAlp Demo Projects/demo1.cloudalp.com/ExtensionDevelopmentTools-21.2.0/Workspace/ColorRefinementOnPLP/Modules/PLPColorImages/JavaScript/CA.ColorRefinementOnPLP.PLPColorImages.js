
define(
	'CA.ColorRefinementOnPLP.PLPColorImages'
	, [
		'CA.ColorRefinementOnPLP.PLPColorImages.View',
		'Facets.ItemCell.View',
		'ProductDetails.Full.View',
		'RecentlyViewedItems.View',
		'ItemRelations.RelatedItem.View',
		'ProductViews.Option.View',
		'Backbone.CollectionView',
		'Cart.AddToCart.Button.View',
		'Product.Model',
		'Utils',
		'underscore',
		'SC.Configuration'

	]
	, function (
		PLPColorImagesView,
		FacetsItemCellView,
		ProductDetailsFullView,
		RecentlyViewedItemsView,
		ItemRelationsRelatedItemView,
		ProductViewsOptionView,
		BackboneCollectionView,
		CartAddToCartButtonView,
		ProductModel,
		Utils,
		_,
		Configuration
	) {

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');

				_.extend(ItemRelationsRelatedItemView.prototype, {
					childViews: _.extend({}, ItemRelationsRelatedItemView.prototype.childViews, {
						'ItemDetails.Options': function () {
							const options_configuration = Configuration.get('ItemOptions.optionsConfiguration', []);

							return new BackboneCollectionView({
								collection: _.filter(this.model.get('options').sortBy('index'), function (
									option
								) {
									const option_configuration = _.findWhere(options_configuration, {
										cartOptionId: option.get('cartOptionId')
									});
									return option_configuration && option_configuration.showSelectorInList;
								}),
								childView: ProductViewsOptionView,
								viewsPerRow: 1,
								childViewOptions: {
									item: this.model,
									templateName: 'facetCell',
									showLink: true,
									hideLabel: true,
									showSmall: true
								}
							});
						}

					})
				});

				_.extend(FacetsItemCellView.prototype, {
					events: {
						'click [data-action="changethumbnail"]': 'thumbnailchange'
					},
					thumbnailchange: function (e) {
						e.preventDefault();
						const itemimages = this.model.attributes.itemimages_detail;
						const color = $(e.currentTarget).attr('value');
						const colrs = itemimages[color];
						const link = _.findWhere(colrs, "url");
						const finalurl = link.hasOwnProperty('urls') ? link.urls[0].url : link[0].url;

						$(e.currentTarget).parentsUntil(".facets-item-cell-grid-details").parent().siblings().find(".facets-item-cell-grid-link-image").html(
							`<img class="facets-item-cell-grid-image" src="${finalurl}" alt="{{thumbnail.altimagetext}}" itemprop="image"/>
					`);
						$(e.currentTarget).parentsUntil(".facets-item-cell-table-content-wrapper").parent().siblings().find(".facets-item-cell-table-link-image").html(
							`<img class="facets-item-cell-table-image" src="${finalurl}" alt="{{thumbnail.altimagetext}}" itemprop="image"/>
					`);

						$(e.currentTarget).parentsUntil(".item-relations-cell").parent().find(".item-relations-related-item-thumbnail").html(
							`<img class="facets-item-cell-grid-image" src="${finalurl}" alt="{{thumbnail.altimagetext}}" itemprop="image"/>
					`);

					}
				});
				_.extend(ItemRelationsRelatedItemView.prototype, {
					events: {
						'click [data-action="changethumbnail"]': 'thumbnailchange'
					},
					thumbnailchange: function (e) {
						e.preventDefault();
						const itemimages = this.model.attributes.itemimages_detail;
						const color = $(e.currentTarget).attr('value');
						const colrs = itemimages[color];
						const link = _.findWhere(colrs, "url");
						const finalurl = link.hasOwnProperty('urls') ? link.urls[0].url : link[0].url;

						if ($(e.currentTarget).parentsUntil(".item-relations-cell").parent().hasClass('item-relations-cell')) {
							$(e.currentTarget).parentsUntil(".item-relations-cell").parent().find(".item-relations-related-item-thumbnail").html(
								`<img class="facets-item-cell-grid-image" src="${finalurl}" alt="{{thumbnail.altimagetext}}" itemprop="image"/>
							`);
						}
						else {
							$(e.currentTarget).parentsUntil(".recently-viewed-cell-item-cell").parent().find(".item-relations-related-item-thumbnail").html(
								`<img class="facets-item-cell-grid-image" src="${finalurl}" alt="{{thumbnail.altimagetext}}" itemprop="image"/>
							`);
						}

					}
				});


			}
		};
	});
