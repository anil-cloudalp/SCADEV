/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Transaction.Line.Views.Options.Selected.View"/>
import * as _ from 'underscore';
import * as transaction_line_views_options_selected_tpl from 'transaction_line_views_options_selected.tpl';

import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import TransactionLineViewsOptionView = require('../../../Commons/Transaction.Line.Views/JavaScript/Transaction.Line.Views.Option.View');

const TransactionLineViewsOptionsSelectedView: any = BackboneView.extend({
    // @property {Function} template
    template: transaction_line_views_options_selected_tpl,

    // @method initialize Override default method to made current view composite
    // @param {ItemOptions.Options.View.initialize} options
    // @return {Void}
    initialize: function() {},

    // @property {ChildViews} childViews
    childViews: {
        'Options.Collection': function() {
			
			var isCrossItem = ''
			,	isHolyItem = ''
			,	additionalOpt = ''
			,	isCrossHoly = false;
			
			_.each(this.model.getVisibleOptions(),function(opt:any){
				
				if(opt.get('cartOptionId') == "custcol_appf_imprint_cross")
					isCrossItem = !_.isUndefined(opt.get('value'))? opt.get('value').internalid : '';
					
				if(opt.get('cartOptionId') == "custcol_appf_holy_bible")
					isHolyItem = !_.isUndefined(opt.get('value'))? opt.get('value').internalid : '';
			});
			//console.log(isCrossItem + isHolyItem);	
			if(isCrossItem == "T" || isHolyItem == "T")
			{
				if(isCrossItem == "T" && isHolyItem == "T"){
					additionalOpt += 'Imprint Cross, Imprint Holy Bible';
					isCrossHoly = true;
				}
				else{
					if(isHolyItem == "T")
						additionalOpt += 'Imprint Holy Bible';
					if(isCrossItem == "T")
						additionalOpt += 'Imprint Cross';
				}
			}
			
            return new BackboneCollectionView({
                collection: this.model.getVisibleOptions(),
                childView: TransactionLineViewsOptionView,
                viewsPerRow: 1,
                childViewOptions: {
                    line: this.model,
                    templateName: 'selected',
					additionalOpt: additionalOpt,
					isCrossHoly: isCrossHoly
                }
            });
        }
    },

    // @method getContext
    // @return {ItemOptions.Options.View.Context}
    getContext: function() {
        // @class ItemOptions.Options.View.Context
        return {
            model: this.model
        };
        // @class ItemOptions.Options.View
    }
});

export = TransactionLineViewsOptionsSelectedView;
