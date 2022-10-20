/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

// @module OrderWizard.Module.Confirmation
define(
	'Extension.OrderWizard.Module.Confirmation'
	,	[
		'OrderWizard.Module.Confirmation'
		,	'SC.Configuration'
		,	'Wizard.Module'
		,	'Tracker'
		
		,	'order_wizard_confirmation_module.tpl'
		
		,	'Backbone'
		,	'underscore'
	]
	,	function (
		OrderWizardModuleConfirmation
		,	Configuration
		,	WizardModule
		,	Tracker
		
		,	order_wizard_confirmation_module_tpl
		
		,	Backbone
		,	_
	)
	{
		'use strict';
		_.extend(OrderWizardModuleConfirmation.prototype, {
			getContext: _.wrap(OrderWizardModuleConfirmation.prototype.getContext, function (fn) {
				var context = fn.apply(this, _.toArray(arguments).slice(1));
				context.confirmationText = Configuration.get('checkoutMessaging.confirmation');
				return context;
			})
		});
	}
);

