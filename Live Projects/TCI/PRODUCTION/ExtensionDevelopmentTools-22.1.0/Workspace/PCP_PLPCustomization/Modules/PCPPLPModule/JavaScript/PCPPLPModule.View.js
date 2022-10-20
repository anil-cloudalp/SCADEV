// @module TCI.PCP_PLPCustomization.PCPPLPModule
define('TCI.PCP_PLPCustomization.PCPPLPModule.View'
,	[
	'tci_pcp_plpcustomization_pcpplpmodule.tpl'
	
	,	'TCI.PCP_PLPCustomization.PCPPLPModule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	tci_pcp_plpcustomization_pcpplpmodule_tpl
	
	,	PCPPLPModuleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class TCI.PCP_PLPCustomization.PCPPLPModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: tci_pcp_plpcustomization_pcpplpmodule_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new PCPPLPModuleModel();
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

		//@method getContext @return TCI.PCP_PLPCustomization.PCPPLPModule.View.Context
	,	getContext: function getContext()
		{
			//@class TCI.PCP_PLPCustomization.PCPPLPModule.View.Context
			// this.message = this.message || 'Hello World!!'
			// return {
			// 	message: this.message
			// };
		}
	});
});
