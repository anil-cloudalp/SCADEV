/// <amd-module name="ProductDetails.SubItems.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>

import * as _ from 'underscore';
import * as product_details_sub_items_tpl from 'product_details_sub_items.tpl';
import * as item_relations_cell_tpl from 'item_relations_cell.tpl';
import * as item_relations_row_tpl from 'item_relations_row.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');
import ItemRelationsRelatedItemView = require('../../../Commons/ItemRelations/JavaScript/ItemRelations.RelatedItem.View');
import ItemCollection = require('../../../Commons/Item/JavaScript/Item.Collection');


const CustomView: any = BackboneCollectionView.extend({

		initialize: function (options) {
		
			
			var layout = this.options.application.getLayout();
			
			this.subItems = [];
			if(_.has(this.options.subItems,'results')){

				this.subItems = this.options.subItems.results;

			}

			
			this.collection = new ItemCollection();
			var self = this;
			
			BackboneCollectionView.prototype.initialize.call(this, {
				collection: self.collection,
				childView: ItemRelationsRelatedItemView,
				template: product_details_sub_items_tpl,
				childViewOptions: {
						subItems:true
					}
			});
			
			if(this.subItems.length)
				self.loadRelatedItem();
		}
		
	,	loadRelatedItem: function()
		{	

			var self = this;
			var itemUrl = '/api/items?fieldset=details&id='+ this.subItems.toString();
			
			jQuery.get(itemUrl)
			.then(function(results){
				
				if(results && results.total > 0)
				{ 
					var items = _.has(results,'items')? _.sortBy(results.items,'custitem_appf_item_group_sort') : [];
					self.collection = new ItemCollection(_.compact(items));
					self.render();
					
				}
				
			});
		}
});

export = CustomView;