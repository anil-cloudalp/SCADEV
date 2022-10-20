// @module Kodella.CustomLayoutSMT.CustomLayoutSMT
define('Kodella.CustomLayoutSMT.CustomLayoutSMT.View'
,	[
	'kodella_customlayoutsmt_customlayoutsmt.tpl'
	
	,	'Kodella.CustomLayoutSMT.CustomLayoutSMT.SS2Model'
	
	,	'Backbone'

	, 'PageType.Base.View'
    ]
, function (
	kodella_customlayoutsmt_customlayoutsmt_tpl
	
	,	CustomLayoutSMTSS2Model
	
	,	Backbone

	, PageType
)
{
    'use strict';

	// @class Kodella.CustomLayoutSMT.CustomLayoutSMT.View @extends Backbone.View
	return PageType.PageTypeBaseView.extend({

		template: kodella_customlayoutsmt_customlayoutsmt_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new CustomLayoutSMTModel();
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

		//@method getContext @return Kodella.CustomLayoutSMT.CustomLayoutSMT.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.CustomLayoutSMT.CustomLayoutSMT.View.Context
			// this.message = this.message || 'Hello World!!'
			// return {
			// 	message: this.message
			// };
		}
	});
});
