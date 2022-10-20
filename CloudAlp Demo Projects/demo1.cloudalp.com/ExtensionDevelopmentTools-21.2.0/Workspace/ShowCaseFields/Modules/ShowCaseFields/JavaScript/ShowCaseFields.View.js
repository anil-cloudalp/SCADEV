// @module CA.ShowCaseFields.ShowCaseFields
define('CA.ShowCaseFields.ShowCaseFields.View'
,	[
	'ca_showcasefields_showcasefields.tpl'
	
	,	'CA.ShowCaseFields.ShowCaseFields.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_showcasefields_showcasefields_tpl
	
	,	ShowCaseFieldsSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.ShowCaseFields.ShowCaseFields.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_showcasefields_showcasefields_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new ShowCaseFieldsModel();
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

		//@method getContext @return CA.ShowCaseFields.ShowCaseFields.View.Context
	,	getContext: function getContext()
		{
			
		}
	});
});
