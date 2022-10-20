// @module CA.SpecialOrderItems.Specialorderitem
define('CA.SpecialOrderItems.Specialorderitem.View'
,	[
	'ca_specialorderitems_specialorderitem.tpl'
	
	,	'CA.SpecialOrderItems.Specialorderitem.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_specialorderitems_specialorderitem_tpl
	
	,	SpecialorderitemSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.SpecialOrderItems.Specialorderitem.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_specialorderitems_specialorderitem_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new SpecialorderitemModel();
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

		//@method getContext @return CA.SpecialOrderItems.Specialorderitem.View.Context
	,	getContext: function getContext()
		{
			//@class CA.SpecialOrderItems.Specialorderitem.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
