// @module RudraCustomization.StockAvailability.StockAvailabilityDetails
define('RudraCustomization.StockAvailability.StockAvailabilityDetails.View'
,	[
	'rudracustomization_stockavailability_stockavailabilitydetails.tpl'
	
	// ,	'RudraCustomization.StockAvailability.StockAvailabilityDetails.SS2Model'
	
	,	'Backbone'
    ]
, function (
	rudracustomization_stockavailability_stockavailabilitydetails_tpl
	
	// ,	StockAvailabilityDetailsSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class RudraCustomization.StockAvailability.StockAvailabilityDetails.View @extends Backbone.View
	return Backbone.View.extend({

		template: rudracustomization_stockavailability_stockavailabilitydetails_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new StockAvailabilityDetailsModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}
	,	localize: function(item) {
			return (
				(item.get('quantityavailable_detail') &&
					item.get('quantityavailable_detail').locations) ||
				[]
			);

			
		}

		//@method getContext @return RudraCustomization.StockAvailability.StockAvailabilityDetails.View.Context
	,	getContext: function getContext()
		{
			var custom = this.model.get('quantityavailable_detail').quantityavailable;
			var checkStock=this.model.get('isinstock');
			var any=this.localize(this.model)
			var some=[];
			_.map(any, (x) => some.push(x.quantityavailable));
			const reducer = (accumulator, curr) => accumulator + curr;
			if (!_.isEmpty(some)) {
				var mainDataLocation = some.reduce(reducer);
	
			}
			var QuantityAvailable;
			if (_.isUndefined(mainDataLocation)) {
				QuantityAvailable = 0
			} else {
				QuantityAvailable = mainDataLocation
			}
			var conditionForIsTrue;
			if (_.isEqual(checkStock, true)) {
				if (_.isEqual(QuantityAvailable, 0)) {
	
					conditionForIsTrue = false;
				} else {
					conditionForIsTrue = checkStock;
				}
			} else {
				conditionForIsTrue = checkStock;
			}

	
			return {
				stockMessage:QuantityAvailable,//returns the quantity
				// isInstock:this.model.get('isinstock')//returns boolean value
				isInstock:conditionForIsTrue//returns boolean value
	
	
			};
		}
	});
});
