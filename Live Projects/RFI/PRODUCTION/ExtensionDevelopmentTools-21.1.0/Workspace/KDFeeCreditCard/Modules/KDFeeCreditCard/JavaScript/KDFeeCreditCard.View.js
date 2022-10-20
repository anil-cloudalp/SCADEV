// @module Kodella.KDFeeCreditCard.KDFeeCreditCard
define('Kodella.KDFeeCreditCard.KDFeeCreditCard.View'
,	[
	'kodella_kdfeecreditcard_kdfeecreditcard.tpl'
	
	,	'Kodella.KDFeeCreditCard.KDFeeCreditCard.SS2Model'
	
	,	'Backbone'
    ]
, function (
	kodella_kdfeecreditcard_kdfeecreditcard_tpl
	
	,	KDFeeCreditCardSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Kodella.KDFeeCreditCard.KDFeeCreditCard.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdfeecreditcard_kdfeecreditcard_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new KDFeeCreditCardModel();
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

		//@method getContext @return Kodella.KDFeeCreditCard.KDFeeCreditCard.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDFeeCreditCard.KDFeeCreditCard.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
