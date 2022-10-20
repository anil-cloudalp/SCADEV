/// <amd-module name="ProductDetails.SubItems.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
define("ProductDetails.SubItems.View", ["require", "exports", "underscore", "product_details_sub_items.tpl", "jQuery", "Backbone.CollectionView", "ItemRelations.RelatedItem.View", "Item.Collection"], function (require, exports, _, product_details_sub_items_tpl, jQuery, BackboneCollectionView, ItemRelationsRelatedItemView, ItemCollection) {
    "use strict";
    var CustomView = BackboneCollectionView.extend({
        initialize: function (options) {
            var layout = this.options.application.getLayout();
            this.subItems = [];
            if (_.has(this.options.subItems, 'results')) {
                this.subItems = this.options.subItems.results;
            }
            //console.log('this.subItems', this.options.subItems);
            this.collection = new ItemCollection();
            var self = this;
            BackboneCollectionView.prototype.initialize.call(this, {
                collection: self.collection,
                childView: ItemRelationsRelatedItemView,
                template: product_details_sub_items_tpl,
                childViewOptions: {
                    subItems: true
                }
            });
            if (this.subItems.length)
                self.loadRelatedItem();
        },
        loadRelatedItem: function () {
            var self = this;
            var itemUrl = '/api/items?fieldset=details&id=' + this.subItems.toString();
            jQuery.get(itemUrl)
                .then(function (results) {
                if (results && results.total > 0) {
                    var items = _.has(results, 'items') ? _.sortBy(results.items, 'custitem_appf_item_group_sort') : [];
                    self.collection = new ItemCollection(_.compact(items));
                    self.render();
                }
            });
        }
    });
    return CustomView;
});

//# sourceMappingURL=ProductDetails.SubItems.View.js.map
