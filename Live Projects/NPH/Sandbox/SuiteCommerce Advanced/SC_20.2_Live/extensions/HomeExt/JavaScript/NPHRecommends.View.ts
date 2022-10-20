/// <amd-module name="NPHRecommends.View"/>

import * as _ from 'underscore';
import * as item_relations_cell_tpl from 'item_relations_cell.tpl';
import * as item_relations_row_tpl from 'item_relations_row.tpl';
import * as nphrecommends_tpl from 'nphrecommends.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');
import ItemRelationsRelatedItemView = require('../../../Commons/ItemRelations/JavaScript/ItemRelations.RelatedItem.View');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

// @class NPHRecommends.View @extends Backbone.CollectionView
const NPHRecommendsView = BackboneCollectionView.extend({
	
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
		  
		const layout = this.options.application.getLayout();
	  
		layout.once('afterAppendView', this.loadRelatedItem, this);
		layout.currentView && layout.currentView.once('afterCompositeViewRender', this.loadRelatedItem, this);
    },
	loadRelatedItem: function()
	{	
		var self = this;
		var $slider = this.$('[data-type="carousel-items"]');
		
		$slider.ready(function(){
			 Utils.initBxSlider($slider, {	
				 minSlides: 2
				,	slideWidth: 297
				,	maxSlides: 4
				,	forceStart: true
				,	pager: false
				,	touchEnabled:false
				,	nextText: '<a class="home-item-sec2-next"><span class="control-text">' + Utils.translate('next') + '</span> <i class="carousel-next-arrow"></i></a>'
				,	prevText: '<a class="home-item-sec2-prev"><i class="carousel-prev-arrow"></i> <span class="control-text">' + Utils.translate('prev') + '</span></a>'
				,	controls: true
				,	preloadImages: 'all'
			});
		});
	},
	destroy: function destroy() {
		this._destroy();
		const layout = this.options.application.getLayout();
		
		layout.off('afterAppendView', this.loadRelatedItems, this);
		layout.currentView && layout.currentView.off('afterCompositeViewRender', this.loadRelatedItems, this);
    }
    
  });
export = NPHRecommendsView;
