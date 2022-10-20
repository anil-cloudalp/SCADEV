/// <amd-module name="NPHRecommends.View"/>
define("NPHRecommends.View", ["require", "exports", "item_relations_cell.tpl", "item_relations_row.tpl", "nphrecommends.tpl", "Utils", "Backbone.CollectionView", "ItemRelations.RelatedItem.View"], function (require, exports, item_relations_cell_tpl, item_relations_row_tpl, nphrecommends_tpl, Utils, BackboneCollectionView, ItemRelationsRelatedItemView) {
    "use strict";
    // @class NPHRecommends.View @extends Backbone.CollectionView
    var NPHRecommendsView = BackboneCollectionView.extend({
        initialize: function () {
            var self = this;
            BackboneCollectionView.prototype.initialize.call(this, {
                collection: self.options.collection,
                viewsPerRow: Infinity,
                cellTemplate: item_relations_cell_tpl,
                rowTemplate: item_relations_row_tpl,
                childView: ItemRelationsRelatedItemView,
                template: nphrecommends_tpl
            });
            var layout = this.options.application.getLayout();
            layout.once('afterAppendView', this.loadRelatedItem, this);
            layout.currentView && layout.currentView.once('afterCompositeViewRender', this.loadRelatedItem, this);
        },
        loadRelatedItem: function () {
            var self = this;
            var $slider = this.$('[data-type="carousel-items"]');
            $slider.ready(function () {
                Utils.initBxSlider($slider, {
                    minSlides: 2,
                    slideWidth: 297,
                    maxSlides: 4,
                    forceStart: true,
                    pager: false,
                    touchEnabled: false,
                    nextText: '<a class="home-item-sec2-next"><span class="control-text">' + Utils.translate('next') + '</span> <i class="carousel-next-arrow"></i></a>',
                    prevText: '<a class="home-item-sec2-prev"><i class="carousel-prev-arrow"></i> <span class="control-text">' + Utils.translate('prev') + '</span></a>',
                    controls: true,
                    preloadImages: 'all'
                });
            });
        },
        destroy: function destroy() {
            this._destroy();
            var layout = this.options.application.getLayout();
            layout.off('afterAppendView', this.loadRelatedItems, this);
            layout.currentView && layout.currentView.off('afterCompositeViewRender', this.loadRelatedItems, this);
        }
    });
    return NPHRecommendsView;
});

//# sourceMappingURL=NPHRecommends.View.js.map
