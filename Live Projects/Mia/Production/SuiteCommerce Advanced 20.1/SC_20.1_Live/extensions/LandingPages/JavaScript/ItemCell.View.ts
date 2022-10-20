
/// <amd-module name="ItemCell.View"/>
import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as item_cell_tpl from 'item_cell.tpl';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const ItemCellView = BackboneView.extend({
    
    template: item_cell_tpl,

    
    initialize: function(options) {
        this.items = options.items;
        
    },
    getContext: function() {
        
        return {
            hasItems: (this.items && this.items.length > 0),
			items: this.items || []
        };
        
    }
});

export = ItemCellView;
