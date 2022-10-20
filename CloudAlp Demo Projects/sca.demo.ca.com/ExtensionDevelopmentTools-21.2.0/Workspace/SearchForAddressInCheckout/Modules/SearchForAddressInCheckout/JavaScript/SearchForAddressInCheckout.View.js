// @module Acme.SearchForAddressInCheckout.SearchForAddressInCheckout
define('Acme.SearchForAddressInCheckout.SearchForAddressInCheckout.View'
,	[
	'acme_searchforaddressincheckout_searchforaddressincheckout.tpl'
	
	,	'Acme.SearchForAddressInCheckout.SearchForAddressInCheckout.SS2Model'
	
	,	'Backbone'
    ]
, function (
	acme_searchforaddressincheckout_searchforaddressincheckout_tpl
	
	,	SearchForAddressInCheckoutSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Acme.SearchForAddressInCheckout.SearchForAddressInCheckout.View @extends Backbone.View
	return Backbone.View.extend({

		template: acme_searchforaddressincheckout_searchforaddressincheckout_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new SearchForAddressInCheckoutModel();
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

		//@method getContext @return Acme.SearchForAddressInCheckout.SearchForAddressInCheckout.View.Context
	,	getContext: function getContext()
		{
			//@class Acme.SearchForAddressInCheckout.SearchForAddressInCheckout.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
