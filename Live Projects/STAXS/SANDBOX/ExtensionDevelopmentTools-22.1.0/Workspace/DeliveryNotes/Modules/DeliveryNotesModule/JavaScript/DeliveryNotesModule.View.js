// @module STAXS.DeliveryNotes.DeliveryNotesModule
define('STAXS.DeliveryNotes.DeliveryNotesModule.View'
,	[
	'staxs_deliverynotes_deliverynotesmodule.tpl'
	
	,	'STAXS.DeliveryNotes.DeliveryNotesModule.SS2Model'
	
	,	'Backbone'

	,    'Wizard.Module'
    ]
, function (
	staxs_deliverynotes_deliverynotesmodule_tpl
	
	,	DeliveryNotesModuleSS2Model
	
	,	Backbone

	,    WizardModule
)
{
    'use strict';

	return WizardModule.extend({
		template: staxs_deliverynotes_deliverynotesmodule_tpl

	  , getContext: function getContext()
		{	 
		  return {};
		}
	  });
});
