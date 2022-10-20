// @module TCI.CheckoutCustomizationsExtension.OrderWizard.Module.PayingWithStep
define('TCI.CheckoutCustomizationsExtension.OrderWizard.Module.PayingWithStep.View'
,	[
	'order_wizard_module_payingwith.tpl'
	
	
	,	'Backbone'
	,   'Wizard.Module'
	,   'Profile.Model'
	,   'LiveOrder.Model'
	,   'Utils'
	,   'jQuery'
	,   'underscore'
	,   'Address.Edit.View'
    ]
, function (
	order_wizard_module_payingwith_tpl
	
	
	,	Backbone
	,   WizardModule
	,   ProfileModel
	,   LiveOrderModel 
	,   Utils
	,   jQuery
	,   underscore
	,   AddressEditView
)
{
    'use strict';

	// @class TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View @extends Backbone.View
	return WizardModule.extend({

		template: order_wizard_module_payingwith_tpl,
		page_header: Utils.translate('Paying With'),
		title: Utils.translate('Paying With'),
		events:
		{
		  'click .order-wizard-module-payingwith-option': 'selectPayingWithOption'
		}

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new CheckoutCustomizationsModuleModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		//	  this.addressModel = new TCICheckoutCustomizationsExtensionNewAddressModel();
			  WizardModule.prototype.initialize.apply(this, arguments);
		}
	,	selectPayingWithOption: function(e)
		{
		  var self = this;
		  var promise = jQuery.Deferred();
		  var profile = ProfileModel.getInstance();
		  var selectedPayingWithOption = jQuery(e.target).val().toString();
		  var cart = LiveOrderModel.getInstance();
		  var options = cart.get('options') || {};
	      sessionStorage.setItem('custbody_scapayingwithselection', selectedPayingWithOption);
		  options.custbody_scapayingwithselection = selectedPayingWithOption;
		  options.custbody_is_guest_ordr = profile.get('isGuest');
		  if (parseInt(selectedPayingWithOption) === 2)
		  {
			options.custbody7 = '';
		  }
		  cart.save(
			{
			  options: options
			})
			.always(function()
			{
			  if (selectedPayingWithOption === '1') {
				// self.addressModel.rebuildValidation(true);

			  } else if (selectedPayingWithOption === '2') {
				// self.addressModel.rebuildValidation(false);
			  } 
			});
		  }


		//@method getContext @return TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View.Context
	,	getContext: function getContext()
		{
			
			var cart = LiveOrderModel.getInstance();
			var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : null;
			var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
			var payingWithSchoolCreditCard = false;
			var payingWithPurchaseOrder = false;
			var payingWithPersonalCreditCard = false;
			if (parseInt(payingWith) === 1 || parseInt(sessionpayingWith) === 1)
			{
			  payingWithSchoolCreditCard = true;
			}
			else if (parseInt(payingWith) === 2 || parseInt(sessionpayingWith) === 2)
			{
			  payingWithPersonalCreditCard = true;
			}
			else if (payingWith === 'purchaseOrder' || sessionpayingWith === 'purchaseOrder')
			{
			  payingWithPurchaseOrder = true;
			}
			
			var profile = ProfileModel.getInstance();
			var hidePersonalCreditCardOption = false;
			var isGuest = profile.get('isGuest') === 'T';
			//since registration hides company/organization field and inputs firstname/lastname in the field,
			//we'll hide personal cc for customers with a real company/organization assigned
			var isRealOrganization = profile.get('companyname') !== (profile.get('firstname') + ' ' + profile.get('lastname'));
			
			if (!isGuest && profile.get('customFieldValues') && profile.get('customFieldValues').length > 0 && isRealOrganization)
			{
			  var parentCustomField = _.find(profile.get('customFieldValues'), function(customField)
			  {
				return customField.name === 'custentity_parentsca';
			  });
			  if (parentCustomField && parentCustomField.value && !isNaN(parentCustomField.value))
			  {
				hidePersonalCreditCardOption = true;
			  }
			}
			
			return {
			  model: this.wizard.model,
			  userIsLoggedIn: profile.get('isLoggedIn') === 'T' && profile.get('isGuest') === 'F',
			  payingWithSchoolCreditCard: payingWithSchoolCreditCard,
			  payingWithPurchaseOrder: payingWithPurchaseOrder,
			  payingWithPersonalCreditCard: payingWithPersonalCreditCard,
			  hidePersonalCreditCardOption: hidePersonalCreditCardOption
			};
			//@class TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View.Context

		}
	,	submit: function()
		{
		  var cart = LiveOrderModel.getInstance();
		  var profile = ProfileModel.getInstance();
		  var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
		  var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith!="" && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
		  if (_.isEmpty(payingWith) || _.isNull(payingWith)) //Utils.isNullOrEmpty(payingWith)
		  {
			return jQuery.Deferred().reject({errorCode: 'ERR_PAYINGWITH_REQUIRED', errorMessage: Utils.translate('Please choose a Paying With option')});
		  }
		  else{
			this.wizard.model.get('options').custbody_scapayingwithselection = sessionpayingWith ;
			this.wizard.model.get('options').custbody_is_guest_ordr = profile.get('isGuest');
			if (parseInt(sessionpayingWith) === 2)
			{
				this.wizard.model.get('options').custbody7 = '';
			}
			return jQuery.Deferred().resolve();
		  }
		}
	});
});
