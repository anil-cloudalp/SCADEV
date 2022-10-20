/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

define(
	'TCI.PCP_PLPCustomization.Facets.ItemCell.ViewExt'
	,	[
		'Facets.ItemCell.View'
		, 'underscore'
		,	'Backbone'
	]
	,	function (
		FacetsItemCellView
		, _
		,	Backbone
	)
	{
		'use strict';

        _.extend(FacetsItemCellView.prototype, {
			getContext: _.wrap(FacetsItemCellView.prototype.getContext, function getContext(fn) {
			

				var context = fn.apply(this, _.toArray(arguments).slice(1));
		
				var onlinematrixpricerange = this.model.get('onlinematrixpricerange');
				var prices = [];
		
				if(onlinematrixpricerange) {
					var range = onlinematrixpricerange.split(' ');
					var formatter = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					});
		
					_.each(range, function(x) {
						prices.push(formatter.format(parseInt(x)));
					});
		
				}
		
				context.otherName = this.model.get('storedescription');
				context.storeDescription = this.model.get('storedescription');
				context.featuredDescription = this.model.get('featureddescription');
				context.price = prices.length > 0 ? prices.join(' - ') : this.model.get('onlinecustomerprice_formatted');
				context.isbn = this.model.get('custitem8');
				var isItemWithReferenceTexts = this.model.get('itemid') === 'TB-MSSB';
				context.isItemWithReferenceTexts = isItemWithReferenceTexts
		
				return context;
		
			})

        })

	});

