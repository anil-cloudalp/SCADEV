// @module CA.customAddresses.customAddress
define('CA.customAddresses.customAddress.View'
,	[
	'ca_customaddresses_customaddress.tpl'
	
	,	'CA.customAddresses.customAddress.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_customaddresses_customaddress_tpl
	
	,	customAddressSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.customAddresses.customAddress.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_customaddresses_customaddress_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new customAddressModel();
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

		//@method getContext @return CA.customAddresses.customAddress.View.Context
	,	getContext: function getContext()
		{
			//@class CA.customAddresses.customAddress.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
