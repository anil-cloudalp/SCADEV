// @module Acme.SuiteScriptExt.SuiteScriptExt
define('Acme.SuiteScriptExt.SuiteScriptExt.View'
,	[
	'acme_suitescriptext_suitescriptext.tpl'
	
	,	'Acme.SuiteScriptExt.SuiteScriptExt.SS2Model'
	
	,	'Backbone'
    ]
, function (
	acme_suitescriptext_suitescriptext_tpl
	
	,	SuiteScriptExtSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Acme.SuiteScriptExt.SuiteScriptExt.View @extends Backbone.View
	return Backbone.View.extend({

		template: acme_suitescriptext_suitescriptext_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new SuiteScriptExtModel();
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

		//@method getContext @return Acme.SuiteScriptExt.SuiteScriptExt.View.Context
	,	getContext: function getContext()
		{
			//@class Acme.SuiteScriptExt.SuiteScriptExt.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
