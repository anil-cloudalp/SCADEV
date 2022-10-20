var extensions = {};

extensions['TCI.CheckoutCustomizationsExtension.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TCI/CheckoutCustomizationsExtension/1.0.0/' + asset;
}

// @module TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule
define('TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View'
,	[
	'tci_checkoutcustomizationsextension_checkoutcustomizationsmodule.tpl'
	
	,	'TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	tci_checkoutcustomizationsextension_checkoutcustomizationsmodule_tpl
	
	,	CheckoutCustomizationsModuleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: tci_checkoutcustomizationsextension_checkoutcustomizationsmodule_tpl

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
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View.Context
	,	getContext: function getContext()
		{
			//@class TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View.Context

		}
	});
});


// Model.js
// -----------------------
// @module Case
define("TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/CheckoutCustomizationsModule.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/CheckoutCustomizationsModule/SuiteScript2/CheckoutCustomizationsModule.Service.ss"
            ),
            true
        )
});
});


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


// @module TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup
define('TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup.View'
,	[
	'schooldistrictlookup.tpl'
	
	
	,	'Backbone'
	,   'Wizard.Module'
	,   'Profile.Model'
	,   'LiveOrder.Model'
	,   'TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup.Model'
	,   'underscore'
	,   'Utils'
	,   'jQuery'
    ]
, function (
	schooldistrictlookup_tpl
	
	
	,	Backbone
	,   WizardModule
	,   ProfileModel
	,   LiveOrderModel
	,   SchoolDistrictLookupModel
	,   _
	,   Utils
	,   jQuery
)
{
    'use strict';

	// @class TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View @extends Backbone.View
	return WizardModule.extend({

		template: schooldistrictlookup_tpl,

		page_header: Utils.translate('School District Lookup'),
		title: Utils.translate('School District Lookup'),
		events:
		{
			'click .school-district-zipcode-enter-button': 'lookupSchoolDistrict',
			'click .school-district-schools-option': 'setSchool'
		},
		initialize: function ()
		{
			WizardModule.prototype.initialize.apply(this, arguments);
		  
		},
		
	  
		lookupSchoolDistrict: function(e)
		{
		 e.preventDefault();
		  var self = this;

		  var zipCode = jQuery('.school-district-zipcode-field').val();

		  
		  if (zipCode)
		  {
			var schoolDistrictLookupModel = new SchoolDistrictLookupModel(zipCode);
			schoolDistrictLookupModel.fetch().done(function(results)
			{
			  if (results && results.success && results.data && results.data.length > 0)
			  {
				var array = results.data;
				var unique = {};
				var distinct = [];
				for ( var i in array ){
				  if ( typeof(unique[array[i].companyname]) == "undefined"){
					distinct.push(array[i]);
				  }
				  unique[array[i].companyname] = 0;
				}
				_.sortBy(distinct, 'companyname');
				//force this to top of alphabetized list
				distinct.unshift({
				  companyname: "My School Is Not Listed",
				  internalid: "-1"
				})
				self.wizard.model.set('schools', distinct);
				
				self.wizard.model.set('zip', zipCode);
			  } else if (results && results.success && results.data && results.data.length === 0) {
				self.wizard.model.set('schools', [{
				  companyname: "My School Is Not Listed",
				  internalid: "-1"
				}]);
				
				self.wizard.model.set('zip', zipCode);
			  }
			  self.render();
			});
		  }
		},
		setSchool: function(e)
		{
			var self = this;
	
			var selectedSchool =
			{
				id: jQuery('.school-district-schools-option:checked').val(),
				name: jQuery('.school-district-schools-option:checked').data('companyName'),
				subscriberId: jQuery('.school-district-schools-option:checked').data('subscriberId'),
				taxExemption: jQuery('.school-district-schools-option:checked').data('taxExemption'),
				fulfillmentFlag: jQuery('.school-district-schools-option:checked').data('fulfillmentFlag'),
				terms: jQuery('.school-district-schools-option:checked').data('terms')
			};
			
	
			var cart = LiveOrderModel.getInstance();
			var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
			var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith != '' && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
			this.wizard.model.set('selectedSchool', selectedSchool);
	
			var profile = ProfileModel.getInstance();
			profile.set('isperson', false); // Does not work via profile update - call back office instead or do on save
			if (selectedSchool.name.toLowerCase() !== 'my school is not listed') {
			  profile.set('companyname', selectedSchool.name);
			  profile.set('altname', selectedSchool.name); // Does not work via profile update - call back office instead or do on save
			}
		
	
			var schoolDistrictLookupModel = new SchoolDistrictLookupModel();
			schoolDistrictLookupModel.fetch(
			{
			  contentType: 'application/json',
			  dataType: 'json',
			  method: 'PUT',
			  data: JSON.stringify(
			  {
				  userId: profile.get('internalid'),
				  companyName: selectedSchool.name,
				  payingWith: payingWith,
				  schoolCustomerInternalId: selectedSchool.id,
				  taxExemption: selectedSchool.taxExemption,
				  subscriberId: selectedSchool.subscriberId,
				  fulfillmentFlag: selectedSchool.fulfillmentFlag,
				  terms: selectedSchool.terms
			  })
			}).done(function (response)
			{
				if (response && response.success)
				{
					var options = cart.get('options') || {};
					if (parseInt(payingWith) !== 2 && selectedSchool.subscriberId)
					{
						options.custbody7 = selectedSchool.subscriberId.toString();
					}
					cart.save(
					{
						options: options
					});
				}
			}).always(function(response)
			{
				if (response && response.success)
				{
					self.render();
				}
			});
		},
		getContext: function ()
		{
			var self = this;
			var cart = LiveOrderModel.getInstance();
			var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
			var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith !="" && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
	
			if (this.wizard.model.get('selectedSchool'))
			{
			
				_.each(this.wizard.model.get('schools'), function(school)
				{
					if(parseInt(school.internalid) === parseInt(self.wizard.model.get('selectedSchool').id))
					{
						
						school.isSelected = true;
					}
					else{
						
						school.isSelected = false;
					}
				});
				// if (selectedSchool)
				// {
				// 	selectedSchool.isSelected = true;
				// }
				//console.log(selectedSchool);
			}

             
	
			return {
				model: this.wizard.model,
				schools: this.wizard.model.get('schools'),
				zip: jQuery('.school-district-zipcode-field').val() || this.wizard.model.get('zip'),
				selectedSchool: this.wizard.model.get('selectedSchool')
			};
		},
		submit: function()
		{
			var profile = ProfileModel.getInstance();
			var skipSchoolPicker = profile.get('parent') && !isNaN(profile.get('parent')) ? true : false;//profile.get('isLoggedIn') === 'T' && profile.get('isGuest') === 'F';
			var cart = LiveOrderModel.getInstance();
			var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
			var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith !="" && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
			if (!skipSchoolPicker && (_.isNull(this.wizard.model.get('selectedSchool')) || _.isEmpty(this.wizard.model.get('selectedSchool'))) && (parseInt(payingWith) === 1 || payingWith === 'purchaseOrder')) //Utils.isNullOrEmpty(this.wizard.model.get('selectedSchool'))
			{
				return jQuery.Deferred().reject({errorCode: 'ERR_SELECTEDSCHOOL_REQUIRED', errorMessage: Utils.translate('Please choose a School')});
			}
			else if (!skipSchoolPicker && this.wizard.model.get('selectedSchool') && parseInt(this.wizard.model.get('selectedSchool').id) === -1 && (parseInt(payingWith) === 1 || payingWith === 'purchaseOrder'))
			{
				console.log('User selected My School Is Not Listed');
			}
		}

	});
});


// Model.js
// -----------------------
// @module Case
define("TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        initialize: function(zipCode)
        {
            if (zipCode)
            {
                this.urlRoot = Utils.getAbsoluteUrl(
                    getExtensionAssetsPath(
                        "services/SchoolDistrictLookup.Service.ss?zipcode="
                    )
                ) + zipCode;
            }
            else
            {
                this.urlRoot = Utils.getAbsoluteUrl(
                    getExtensionAssetsPath(
                        "services/SchoolDistrictLookup.Service.ss"
                    )
                );
            }
        }
        
        //@property {String} urlRoot
        
});
});


/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/


define(
	'TCI.CheckoutCustomizationsExtension.OrderWizardModuleCartSummaryExt'
	,	[
	        'underscore'
		,	'OrderWizard.Module.CartSummary'
		,	'Utils'
	]
	,	function (
			_
		,	OrderWizardModuleCartSummary
		,	Utils
	)
	{
		'use strict';

		OrderWizardModuleCartSummary.prototype.getContext = _.wrap(OrderWizardModuleCartSummary.prototype.getContext, function (fn) {
		
			// Clear previous checkout session data before starting, but
			// only if the user has not reached the Confirmation view yet
			if (Backbone.history.getFragment().indexOf('confirmation') === -1) {
				sessionStorage.removeItem('subtotal_formatted');
				sessionStorage.removeItem('shippingcost_formatted');
				sessionStorage.removeItem('surcharge_formatted');
				sessionStorage.removeItem('total_formatted');
			}
			var context = fn.apply(this, _.toArray(arguments).slice(1));
			var model = this._getModel();
			var summary = model.get('summary') || {};
			

			if (window.sessionStorage && summary.surchargesubtotal > 0) {
				//Since LOM confirmation loses the itemized cart, use
				//sessionStorage for now. This is merely UI for cart summary
				sessionStorage.setItem('subtotal_formatted', summary.subtotal_formatted);
				sessionStorage.setItem('shippingcost_formatted', summary.shippingcost_formatted);
				sessionStorage.setItem('surcharge_formatted', summary.surchargesubtotal_formatted);
				sessionStorage.setItem('total_formatted', summary.total_formatted);
			}

			context.subtotal_formatted = sessionStorage.getItem('subtotal_formatted');
			context.shippingcost_formatted = sessionStorage.getItem('shippingcost_formatted');
			context.surcharge_formatted = sessionStorage.getItem('surcharge_formatted');
			context.total_formatted = sessionStorage.getItem('total_formatted');
			
			return context;
		});

	});



define('TCI.CheckoutCustomizationsExtension.OrderWizardModulePaymentMethodPurchaseNumberExt',
[
    'OrderWizard.Module.PaymentMethod.PurchaseNumber',
    'LiveOrder.Model',
    'underscore',
    'Utils'
],
function
(
    OrderWizardModulePaymentMethodPurchaseNumber,
    LiveOrderModel,
    _,
    Utils
)
{
    'use strict';

    OrderWizardModulePaymentMethodPurchaseNumber.prototype.submit = _.wrap(OrderWizardModulePaymentMethodPurchaseNumber.prototype.submit, function (fn)
    {
        var cart = LiveOrderModel.getInstance();
        var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
        var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith != '' && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
        if (payingWith === 'purchaseOrder' && (_.isNull(jQuery('#purchase-order-number').val()) || _.isEmpty(jQuery('#purchase-order-number').val())))
        {
            return jQuery.Deferred().reject({errorCode: 'ERR_PO_NUMBER_REQUIRED', errorMessage: Utils.translate('Please enter a PO Number')});
        }
        fn.apply(this, _.toArray(arguments).slice(1));
    });

    OrderWizardModulePaymentMethodPurchaseNumber.prototype.getContext = _.wrap(OrderWizardModulePaymentMethodPurchaseNumber.prototype.getContext, function (fn)
    {
        var context = fn.apply(this, _.toArray(arguments).slice(1));
        var cart = LiveOrderModel.getInstance();
        var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
        var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith !='' && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
        if (payingWith !== 'purchaseOrder')
        {
          context.hidePurchaseNumberModule = true;
        }

        return context;
    });
});



/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module OrderWizard.Module.Shipmethod
define(
	'TCI.CheckoutCustomizationsExtension.OrderWizardModuleShipmethodExt'
,	[	
		'underscore'
	,	'jQuery'
	,	'GlobalViews.Confirmation.View'
	,	'OrderWizard.Module.Shipmethod'
	,	'SC.Configuration'
	, 'Utils'
	, 'LiveOrder.Model'
	, 'LoginRegister.CheckoutAsGuest.View'
	, 'LoginRegister.View'
	, "Profile.Model"
	, "OrderWizard.Module.ShowShipments"
	, "OrderWizard.Module.Address"
	]
,	function (	
        _
	,	jQuery
	,	GlobalViewsConfirmationView
	,	OrderWizardModuleShipmethod
	,	Configuration
	, 	Utils
	, LiveOrderModel
	, LoginRegisterCheckoutAsGuestView
	, LoginRegisterView
	, ProfileModel
	, OrderWizardModuleShowShipments
	, OrderWizardModuleAddress

	)
{
	'use strict';
			OrderWizardModuleShipmethod.prototype.changeDeliveryOptions = function changeDeliveryOptions (e) {
				var self = this
				var target = jQuery(e.currentTarget)
				var targetValue = target.val() || target.attr('data-value');
				var expeditedShipping = Configuration.get('surcharge.ExpeditedShippingId');
				var isExpeditedShipping = false;
				var cartHasLabItem = false;
				if (targetValue === expeditedShipping) {
					isExpeditedShipping = true;
				}

				var cartHasLabItem = !!this.model.get('lines').find(function (model) {
				  return (model.get('item').get('custitem5') === 'Lab Materials');
				});

				this.waitShipmethod = true;
				this.model.set('shipmethod', targetValue);
				this.step.disableNavButtons();
				this.model.save().always(function()
				{
					self.clearError();
					self.step.enableNavButtons();
					if (isExpeditedShipping && cartHasLabItem) {
						var defaultSurchargeText = 'Note that expedited shipping for lab materials will incur a 17% surcharge';
						var surchargeText = Configuration.get('surcharge.SurchargeText', defaultSurchargeText);
						var surchargeConfirmationView = new GlobalViewsConfirmationView({
						title: Utils.translate('Expedited Shipping for Lab Materials')
						,	body: surchargeText
						,	confirmLabel: Utils.translate('OK')
						,	hideCancelButton: true
						,	autohide: true
						});
						self.wizard.application.getLayout().showInModal(surchargeConfirmationView);
					}
				});
	};



		var obj = OrderWizardModuleAddress.prototype.events;
					obj["click #select"] = "selectaddresss";
				OrderWizardModuleAddress.prototype.events = obj;
		var liveorder = LiveOrderModel.getInstance();
	_.extend(OrderWizardModuleAddress.prototype, {
					  

		selectaddresss: function (e) {

                OrderWizardModuleShipmethod.prototype.getContext = _.wrap(OrderWizardModuleShipmethod.prototype.getContext, function (fn) {
				var context = fn.apply(this, _.toArray(arguments).slice(1));
				var self = this;
				var shipping_methods = this.model.get('shipmethods').map(function (shipmethod)
				{
					return {
						name: shipmethod.get('name')
						,	rate_formatted: shipmethod.get('rate_formatted')
						,	internalid: shipmethod.get('internalid')
						,	isActive: shipmethod.get('internalid') === self.model.get('shipmethod')
					};
				});
		
				var state = this.model.get("addresses").models[0].get("state")
				var serviceshipmethod = Configuration.get("checkoutMessaging.defalutShippingmethodforservice");
				context.showEnterShippingAddressFirst = shipping_methods && !!shipping_methods.length ? false : true;
				var liveordermodels = LiveOrderModel.getInstance();
				// var isAnyserviceItem = false;
				// _.each(liveordermodels.attributes.lines.models, function (line) {
				// 	if (line.attributes.itemtype == 'Service') {
				// 		console.log("service ");
				// 		isAnyserviceItem = true;
				// 	 }
				// })
				var defaultshipmethod = Configuration.get("checkoutMessaging.defalutShippingmethod");
				var liveorder = LiveOrderModel.getInstance();
				if (((state == 'HI') || (state == "AK"))) {
					liveorder.set('shipmethod', serviceshipmethod);
					context.hideShippingmethods = false;
				}  else {
					liveorder.set('shipmethod', defaultshipmethod);
					context.hideShippingmethods = true;
				}
					return context;
			});




			// 			  console.log("select");
			// 			var add = liveorder.attributes.addresses.models;
			// 			const defalutShipAddress = add.filter((address)=>{
			// 				return  address.get("defaultshipping") == "T";
			// 			});
			// 			const defalutBillAddress = add.filter((address)=>{
			// 				return  address.get("defaultbilling") == "T";
			// 			});
						 
			// var changedaddress = jQuery(e.target).data('id').toString();

			// console.log("e", jQuery(e.target));
			
			// console.log("changedaddress",changedaddress);
			// console.log("defalutShipAddress",defalutShipAddress);

					
			// 		 if((defalutShipAddress.length >0 && (defalutShipAddress[0].id) !== changedaddress) || (defalutBillAddress.length >0 && (defalutBillAddress[0].id) !== changedaddress))
			// 		 {
						
			// 			}
					}
		});

	OrderWizardModuleShipmethod.prototype.getContext = _.wrap(OrderWizardModuleShipmethod.prototype.getContext, function (fn) {
				var context = fn.apply(this, _.toArray(arguments).slice(1));
				var self = this;
				var shipping_methods = this.model.get('shipmethods').map(function (shipmethod)
				{
					return {
						name: shipmethod.get('name')
						,	rate_formatted: shipmethod.get('rate_formatted')
						,	internalid: shipmethod.get('internalid')
						,	isActive: shipmethod.get('internalid') === self.model.get('shipmethod')
					};
				});
		
				var state = this.model.get("addresses").models[0].get("state")
				var serviceshipmethod = Configuration.get("checkoutMessaging.defalutShippingmethodforservice");
				context.showEnterShippingAddressFirst = shipping_methods && !!shipping_methods.length ? false : true;
				var liveordermodels = LiveOrderModel.getInstance();
				// var isAnyserviceItem = false;
				// _.each(liveordermodels.attributes.lines.models, function (line) {
				// 	if (line.attributes.itemtype == 'Service') {
				// 		console.log("service ");
				// 		isAnyserviceItem = true;
				// 	 }
				// })
				var defaultshipmethod = Configuration.get("checkoutMessaging.defalutShippingmethod");
				var liveorder = LiveOrderModel.getInstance();
				context.hideShippingmethods = true;

		// if (((state == 'HI') || (state == "AK"))) {
					
		// 			// liveorder.set('shipmethod', serviceshipmethod);
		// 			context.hideShippingmethods = true;
		// 		}  else {
		// 			//liveorder.set('shipmethod', defaultshipmethod);
		// 			context.hideShippingmethods = true;
		// 		}
					return context;
			});
});



/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

//@module Address
define(
	'TCI.CheckoutCustomizationsExtension.AddressEditViewExt'
	, [
	  'underscore'
	, 'Utils'
	, 'Address.Edit.View'
    , 'jQuery'
    , 'Backbone.FormView'
]
, function (
	
      _
	, Utils
	, AddressEditView
    , jQuery
    , BackboneFormView
)
{
	'use strict';


       _.extend(AddressEditView.prototype, {

        events: _.extend({},AddressEditView.prototype.events,{

            'blur .address-edit-fields-group-input':'blockErr'

        }),
         blockErr: function(e) {

            var thisEl = jQuery(e.currentTarget);
            var self = this;
            var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
            if ((sessionpayingWith == '1' || sessionpayingWith == 'purchaseOrder') && thisEl.attr('name') == 'company') {
              if (thisEl.val()) {
                if (thisEl.parent().find('.err-para').css('display') != 'none') {
                  thisEl.parent().removeAttr('data-validation-error');
                  jQuery('.err-para').hide();
                }
              } else {    
                if (thisEl.parent().find('.err-para').css('display') == 'none') {
                  thisEl.parent().attr('data-validation-error', '');
                  jQuery('.err-para').show();
                }
              }
            }
          },

        initialize:_.wrap(AddressEditView.prototype.initialize,function(fn){
   
            fn.apply(this, _.toArray(arguments).slice(1));
            var self = this;
            var mySaveform = this.saveForm;
            this.saveForm = function saveForm() {
               var isSubmit = self.submitForm();
              
               if(!_.isUndefined(isSubmit) && isSubmit)
               {
                var promise = BackboneFormView.saveForm.apply(this, arguments);
                return promise;
               }
               else{
                   return false;
               }
            };
        }), 
         submitForm:function() {
            //this.saveForm.apply(this,arguments);
            var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
            var isSubmit = true;
            var $companyId = jQuery('[name="company"]').length && !_.isUndefined(jQuery('[name="company"]')) && !_.isEmpty(jQuery('[name="company"]')) ? jQuery('[name="company"]') : [];
             if($companyId && $companyId.length && !_.isEmpty($companyId)){
                if ((sessionpayingWith == '1' || sessionpayingWith == 'purchaseOrder') ) {
                    if ($companyId.val()) {
                      if ($companyId.parent().find('.err-para').css('display') != 'none') {
                        $companyId.parent().removeAttr('data-validation-error');
                        jQuery('.err-para').hide();
                        isSubmit =true;
                     
                      }
                    } else {    
                      if ($companyId.parent().find('.err-para').css('display') == 'none') {
                        $companyId.parent().attr('data-validation-error', '');
                        jQuery('.err-para').show();
                        isSubmit = false;
                     
                      }
                      else{
                          isSubmit = false; 
                    
                      }
                    }
                  }
             }
            return isSubmit;
        }
    })	
	
});



define('TCI.CheckoutCustomizationsExtension.UploadFile.View',
[
	'upload_file.tpl',
    'Wizard.Module',
	'Profile.Model',
	'LiveOrder.Model',
	'Utils',
    'jQuery',
    'underscore'

],
function
(
	upload_file_tpl,
	WizardModule,
	ProfileModel,
	LiveOrderModel,
	Utils,
    jQuery,
    _
)
{
	'use strict';

	return WizardModule.extend({

		template: upload_file_tpl

	,	title: 'Upload Purchase Order'

	,	events:
		{
			'change #hidden-file-input': 'submitFileUpload',
			'click [data-toggle="uploadFile"]': 'uploadFile',
			'click #RemoveUploadFileAttachmentLink': 'removeAttachment'
		}

	,	initialize: function (options)
		{
			this.model = LiveOrderModel.getInstance();

			jQuery('html').on('FileUploaded', this.onFileUploaded(this));
			jQuery('html').on('FileInfoDownloaded', this.onFileInfoDownloaded(this));
			jQuery('html').on('FileAttachmentRemoved', this.onFileAttachmentRemoved(this));

			// Load file info if a file has already been attached to this order
			this.getFile(function(response)
            {
				if (response != null && response.success)
				{
					jQuery('html').trigger('FileInfoDownloaded', response);
				}
            });
		}

	,	removeAttachment: function(e)
		{
			e.preventDefault();
			var self = this;

			var cart = LiveOrderModel.getInstance();
			var options = cart.get('options') || {};
			options.custbody_weborderattachment = '';

			this.uploadedFileID = '';
			this.uploadedFileName = '';
			this.downloadUrl = '';

			cart.save(
			{
				options: options
			})
			.always(function()
			{
				jQuery('html').trigger('FileAttachmentRemoved');
			});
		}

	,	onFileAttachmentRemoved: function(view)
		{
            return function(event, data)
			{
                view.render();
			}
		}

	,	getFile: function(callback)
		{
			var cart = LiveOrderModel.getInstance();
            var sessionuploadedFileID = sessionStorage.getItem('uploadedFileID');
			if (cart.get('options'))
			{
				var fileID = !_.isUndefined(cart.get('options')['custbody_weborderattachment']) ? cart.get('options')['custbody_weborderattachment'] : sessionuploadedFileID != '' && !_.isUndefined(sessionuploadedFileID) && !_.isNull(sessionuploadedFileID) ? sessionuploadedFileID : cart.get('options')['custbody_weborderattachment'];
				//if (!Utils.isNullOrEmpty(fileID))
				if (!isNaN(parseInt(fileID)))
				{
                    
					jQuery.ajax(
		            {
		                url:Utils.getAbsoluteUrl(
                            getExtensionAssetsPath(
                                "services/UploadFile.Service.ss?fileid=" + fileID
                            )
                        ),
		                type: 'GET',
		                data: '',
		                async: true,
		                success: function (response, status, xhr)
		                {
		                    callback(response);
		                }
		            });
				}
			}
		}

	,	onFileInfoDownloaded: function(view)
		{
            var self = this;
			return function(event, data)
			{
				
                self.uploadedFileName = data.name;//.substr(data.name.indexOf('+') + 1, data.name.lastIndexOf('+') - data.name.indexOf('+') - 1);
				view.render();
			}
		}

	,	uploadFile: function(e)
		{
			e.preventDefault();
			this.$('#hidden-file-input').click();
		}

	,	onFileUploaded: function(view)
		{
            var self = this;
			return function(event, data)
			{
				self.uploadedFileID = data.fileid.toString();
                sessionStorage.setItem('uploadedFileID', self.uploadedFileID);

				var cart = LiveOrderModel.getInstance();
				var options = cart.get('options') || {};
				options.custbody_weborderattachment = data.fileid.toString();

				cart.save(
				{
					options: options
				})
				.done(function()
				{
					self.getFile(function(response)
		            {
						if (response != null && response.success)
						{
							jQuery('html').trigger('FileInfoDownloaded', response);
						}
		            });
				})
				.always(function()
				{
					view.render();
				});
			}
		}

	,	submitFileUpload: function(e)
        {
            e.preventDefault();
            var files = e.target.files;
            var $target = e.target;
            var self = this;
			var fileType = files[0].type;
			var readAsText = false;
			var fileName = files[0].name;
			
			var purchaseOrderNumber = jQuery('#purchase-order-number').val();

            SC.loadingIndicatorShow();

            var reader = new FileReader();
            reader.onloadend = function(event)
            {
				var profile = ProfileModel.getInstance();
				var dataType = reader.result.indexOf(';') > -1 ? reader.result.split(';')[0].replace('data:', '') : '';
				if (readAsText)
				{
					dataType = fileType;
				}

                var file =
                {
					customer: profile.id,
					type: dataType,
                    data: reader.result,
					fileName: fileName,
					purchaseOrderNumber: purchaseOrderNumber
                }
                jQuery.ajax(
                {

                    url:Utils.getAbsoluteUrl(
                        getExtensionAssetsPath(
                            "services/UploadFile.Service.ss"
                        )
                    ),
                    type: 'POST',
                    data: JSON.stringify(file),
					contentType: 'application/json',
                    async: true,
                    success: function (response, status, xhr)
                    {
                        
						if (response.success)
						{
							self.uploadedFileName = fileName;
	                        jQuery('html').trigger('FileUploaded', response);
						}
						else
						{
							console.log('error in submitFileUpload', response.message);
	                        jQuery('[data-type="alert-placeholder"]').html('Error uploading file: ' + response.message).css('background', '#F22E2E').css('color', '#ffffff');
						}
                    },
                    error: function (jqXHR, status, error)
                    {
                        console.log('error in submitFileUpload', error);
                        jQuery('[data-type="alert-placeholder"]').html('Error uploading file: ' + error).css('background', '#F22E2E').css('color', '#ffffff');
                    },
                    complete: function()
                    {
                        jQuery($target).val('');
                        SC.loadingIndicatorHide();
                    }
                });
            };

			var fileType = files[0].type;
			switch (fileType)
			{
				default:
					reader.readAsDataURL(files[0]);
					break;
				case 'text/javascript':
					readAsText = true;
					reader.readAsText(files[0]);
					break;
				case 'text/csv':
					readAsText = true;
					reader.readAsText(files[0]);
					break;
				case 'text/html':
					readAsText = true;
					reader.readAsText(files[0]);
					break;
				case 'application/json':
					readAsText = true;
					reader.readAsText(files[0]);
					break;
				case 'text/plain':
					readAsText = true;
					reader.readAsText(files[0]);
					break;
				case 'text/css':
					readAsText = true;
					reader.readAsText(files[0]);
					break;
				case 'text/xml':
					readAsText = true;
					reader.readAsText(files[0]);
					break;
			}
        }

	,	getContext: function()
		{
			var hideModule = false;
			var cart = LiveOrderModel.getInstance();
            var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
	        var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith !="" && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
			if (payingWith !== 'purchaseOrder')
	        {
	          hideModule = true;
	        }

			return {
				showTitle: true,
				title: this.title,
				showAttachButton: _.isNull(this.uploadedFileID) || _.isEmpty(this.uploadedFileID) ? true : false,
				uploadedFileID: this.uploadedFileID,
				uploadedFileName: this.uploadedFileName,
				hideModule: hideModule
			};
		}

	,	submit: function()
		{
			var cart = LiveOrderModel.getInstance();
            var sessionuploadedFileID = sessionStorage.getItem('uploadedFileID');
            var isNullOrEmptyFileId = !_.isUndefined(sessionuploadedFileID) && !_.isEmpty(sessionuploadedFileID) &&  sessionuploadedFileID != '' ? false : true;
            var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
	        var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith !="" && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
			if (payingWith === 'purchaseOrder' && cart.get('options') && (_.isNull(cart.get('options').custbody_weborderattachment) || _.isEmpty(cart.get('options').custbody_weborderattachment))&& isNullOrEmptyFileId)
			{
				console.log("payingWith", payingWith);
                return jQuery.Deferred().reject({errorCode: 'ERR_POFILE_REQUIRED', errorMessage: Utils.translate('Please attach a Purchase Order PDF file to proceed.')});
            }
		}
	});
});



define('TCI.CheckoutCustomizationsExtension.AddressEditFieldsViewExt',
[
  'Address.Edit.Fields.View',
  'Profile.Model',
  'underscore',
  'jQuery',
  'LiveOrder.Model'
],
function
(
  AddressEditFieldsView,
  ProfileModel,
  _, 
  $,
  LiveOrderModel
)
{
  'use strict';
  
  AddressEditFieldsView.prototype.getContext = _.wrap(AddressEditFieldsView.prototype.getContext, function (fn)
  {
    var context = fn.apply(this, _.toArray(arguments).slice(1));
    var isGuest = ProfileModel.getInstance().get('isGuest') === 'T';
    var grandparentView = this.parentView && this.parentView.parentView;
    var grandparentModel = grandparentView && grandparentView.model;
    var options = LiveOrderModel.getInstance().get('options');
    var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
    var isCC = options && !_.isEmpty(options) ? options.custbody_scapayingwithselection === '1' || options.custbody_scapayingwithselection === '2' : !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith === '1' || sessionpayingWith === '2' : false;
    var isBilling = grandparentView && grandparentView.wizard && grandparentView.wizard.currentStep === "billing/address";
    var isBillingAndCC = isBilling && isCC;
    var profile = ProfileModel.getInstance();
    var full_name = this.model.get('fullname') || profile.get('firstname')+" "+profile.get('lastname');
		var showCountriesField = this.quantity_countries > 1 && isBillingAndCC;
    context.isGuest = isGuest ? true : false;
    context.showCountriesField = showCountriesField;
    context.showCompanyField = true;
    context.isCompanyFieldMandatory = this.site_settings.registration.companyfieldmandatory === 'T';
    if (grandparentModel && grandparentModel.get('options') && (grandparentModel.get('options').custbody_scapayingwithselection)) {
      var payingWithPersonalcc = grandparentModel.get('options').custbody_scapayingwithselection === '2';
      context.isCompanyFieldMandatory = payingWithPersonalcc ? false : true;
    }
    else if(sessionpayingWith != '' && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith))
    {
      var payingWithPersonalcc = sessionpayingWith === '2';
      context.isCompanyFieldMandatory = payingWithPersonalcc ? false : true;
    }
    // need to force company value assignment, setting company attribute on
    // model breaks adding a new address from checkout
    // settimeout used since view is delayed in modal (document ready fails)
   
    var selectedSchool = grandparentModel && grandparentModel.get('selectedSchool')
    selectedSchool = selectedSchool && selectedSchool.name !== "My School Is Not Listed" && selectedSchool.name;
    var company = selectedSchool ? selectedSchool : null;
   
   
    if (!(SC.isPageGenerator && SC.isPageGenerator())) {
      setTimeout(function () {
        if(!_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) && sessionpayingWith !== '2')
        {
          if (company && $('#in-modal-company').length) {
            $('#in-modal-company').val(company);
          } else if (company && $('#billaddress-company').length) {
            $('#billaddress-company').val(company);
          } else if (company && $('#shipaddress-company').length) {
            $('#shipaddress-company').val(company);
          }
        }
        if(full_name && $('#in-modal-fullname').length)
        {
          $('#in-modal-fullname').val(full_name);
        }
        else if(full_name && $('#billaddress-fullname').length)
        {
          $('#billaddress-fullname').val(full_name)
        }
        else if (full_name && $('#shipaddress-fullname').length) {
          $('#shipaddress-fullname').val(company);
        }
      });
    }
    return context;
  });
});



define('OrderWizard.Module.SubscriptionEmail.View',
[
  'order_wizard_module_subscriptionemail.tpl',
  'Backbone',
  'Backbone.CompositeView',
  'Wizard.Module',
  'Profile.Model',
  'LiveOrder.Model',
  'underscore',
  'jQuery',
  'Utils',
  'SC.Configuration'
],
function
(
  order_wizard_module_subscriptionemail_tpl,
  Backbone,
  BackboneCompositeView,
  WizardModule,
  ProfileModel,
  LiveOrderModel,
  _,
  jQuery,
  Utils,
  Configuration
)
{
  'use strict';
  
  return WizardModule.extend(
    {
      template: order_wizard_module_subscriptionemail_tpl,
      
      invalidEmailErrorMessage: {errorCode:'ERR_CHK_INVALID_SUB_EMAIL', errorMessage:_('Invalid email address').translate()},
      
      errors: ['ERR_CHK_INVALID_SUB_EMAIL'],

      initialize: function (options)
      {
        this.wizard = options.wizard;
  			this.step = options.step;
  			this.model = options.wizard.model;
        
        this.LiveOrderModel = LiveOrderModel.getInstance();

        //WizardModule.prototype.initialize.apply(this, arguments);
        //BackboneCompositeView.add(this);
      },
      	render: function ()
        {
          
          this._render();
         
         if(this.LiveOrderModel.get('options').custbody10 ) {
           this.trigger('ready', true);
         }
      
          
        },

      getContext: function ()
      {  
          var defaultLabel = 'Subscription Email Contact';
          return {
            model: this.wizard.model,
            showWrapper: !!this.options.showWrapper,
            wrapperClass: this.options.wrapperClass,
            tooltipMessage: Configuration.get('checkoutMessaging.tooltip'),
            subscriptionEmailLabel: Configuration.get('checkoutMessaging.subscriptionEmailLabel', defaultLabel)
          };
      },
      
      submit: function()
      {
          
          var options = this.LiveOrderModel.get('options') || {};
          var email = this.$('input[name=subscriptionemail]').val();
          options.custbody10 = email;
          
          this.model.set('options', options);
          
          return this.isValid();
          
      },
      
      isValid: function() {
        var promise = jQuery.Deferred();
        
        if (this.model.get('options').custbody10 === '') {
          return promise.resolve();
        }
        if (Backbone.Validation.patterns.email.test(this.model.get('options').custbody10)) 
        {
          return promise.resolve();
        } else {
          this.model.get('options').custbody10 = '';
          return promise.reject(this.invalidEmailErrorMessage);
        }
        
      }

    });
});



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




define(
	'TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule'
,   [
		'TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View',
		'TCI.CheckoutCustomizationsExtension.OrderWizard.Module.PayingWithStep.View',
		'TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup.View',
        'Profile.Model',
        'LiveOrder.Model',
        'OrderWizard.Module.CartSummary',
        'Utils',
        'OrderWizard.Router',
        'Wizard.Router',
        'Wizard.View',
        'TCI.CheckoutCustomizationsExtension.OrderWizardModuleCartSummaryExt',
        'TCI.CheckoutCustomizationsExtension.OrderWizardModulePaymentMethodPurchaseNumberExt',
        'TCI.CheckoutCustomizationsExtension.OrderWizardModuleShipmethodExt',
        'underscore',
        'Address.Edit.View',
        'jQuery',
        'SC.Configuration',
        'Backbone.FormView',
        'TCI.CheckoutCustomizationsExtension.AddressEditViewExt',
        'TCI.CheckoutCustomizationsExtension.UploadFile.View',
        'TCI.CheckoutCustomizationsExtension.AddressEditFieldsViewExt',
        'OrderWizard.Module.SubmitButton',
		'OrderWizard.Module.PaymentMethod.Selector',
		'OrderWizard.Module.SubscriptionEmail.View',
		'Extension.OrderWizard.Module.Confirmation'	
	]
,   function (
		CheckoutCustomizationsModuleView,
		OrderWizardModulePayingWithStepView,
		SchoolDistrictLookupView,
        ProfileModel,
        LiveOrderModel,
        OrderWizardModuleCartSummary,
        Utils,
        OrderWizardRouter,
        WizardRouter,
        WizardView,
        OrderWizardModuleCartSummaryExt,
        OrderWizardModulePaymentMethodPurchaseNumberExt,
        OrderWizardModuleShipmethodExt, 
        _,
        AddressEditView,
        jQuery,
        Configuration,
        BackboneFormView,
        AddressEditViewExt,
        UploadFileView,
        AddressEditFieldsViewExt,
        OrderWizardModuleSubmitButton,
		OrderWizardModulePaymentMethodSelector,
		OrderWizardModuleSubscriptionEmailView,
		ExtensionOrderWizardModuleConfirmation
		
	)
{
	'use strict';
    const cartSummaryOptions = {
       // exclude_on_skip_step: true,
        allow_remove_promocode: true,
        container: '#wizard-step-content-right'
    };
    const cartItemsOptionsRight = {
        container: '#wizard-step-content-right',
        hideHeaders: true,
        showMobile: true,
       // exclude_on_skip_step: true,
        showOpenedAccordion: Utils.isTabletDevice() || Utils.isDesktopDevice() || false
    };

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var checkout = container.getComponent('Checkout');

            var cart = container.getComponent('Cart');
            if(ProfileModel.getInstance().get('isLoggedIn') == 'F' && !_.isUndefined(sessionStorage.getItem('custbody_scapayingwithselection'))){
              
                sessionStorage.removeItem('custbody_scapayingwithselection')
            }

            checkout.addModuleToStep({
                step_url: 'billing/payingwith', 
                module: { 
                    id: 'billingPayingWith', 
                    index: 0,
                    classname: 'TCI.CheckoutCustomizationsExtension.OrderWizard.Module.PayingWithStep.View', 
                    options: {exclude_on_skip_step: true}
                }
            })
            checkout.addModuleToStep({
                step_url: 'billing/schooldistrict', 
                module: { 
                    id: 'billingSchooldistrict', 
                    index: 0,
                    classname: 'TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup.View', 
                    options: {exclude_on_skip_step: true}
                }
            })
            checkout.addModuleToStep({
                step_url: 'billing', 
                module: { 
                    id: 'uploadFile', 
                    index: 0,
                    classname: 'TCI.CheckoutCustomizationsExtension.UploadFile.View', 
                    options: {exclude_on_skip_step: true}
                }
            })
			checkout.addModuleToStep({
                step_url: 'review', 
                module: { 
                    id: 'subscriptionEmail', 
                    index: 10,
                    classname: 'OrderWizard.Module.SubscriptionEmail.View', 
                    options: {	  exclude_on_skip_step: true
								, container: '#wizard-step-content-right'
								, showWrapper: true
								, wrapperClass: 'order-wizard-subscriptionemail'
						     }
                }
            })
                             
            cart.on('afterSubmit', function(model) {
                          
                sessionStorage.removeItem('custbody_scapayingwithselection')
                      
            });
			

            var checkout = container.getComponent('Checkout');
            OrderWizardModulePaymentMethodSelector.prototype.setinvoicemethod = _.wrap(OrderWizardModulePaymentMethodSelector.prototype.setinvoicemethod, function (fn) {

                    
                     this.setModuleByType("invoice",false);
            }),
            OrderWizardModulePaymentMethodSelector.prototype.getContext = _.wrap(OrderWizardModulePaymentMethodSelector.prototype.getContext, function (fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));					
                
                var cart = LiveOrderModel.getInstance();
                var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
                var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith !="" && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;

                if (payingWith == 'purchaseOrder')
                {	
                    if (this.selectedModule.type !== 'invoice') {
                        this.setinvoicemethod();
                    }
                    context.isShowPaymentMethod = false;		
                    return context;
                }
                else
                {    
                    var activemethods = [];
                    _.each(context.activeModules, function (method) {
                            if (method.type == 'creditcard') {
                                method.isSelected = true;
                            } else {
                                method.isSelected = false;
                            }
                        if (method.type !== "invoice") 
                        {
                            activemethods.push(method)
                        }  
                    })
                context.activeModules = _.compact(activemethods);
                
                if (this.selectedModule.type == "invoice" && this.selectedModule.type !== "creditcard") {
                    this.setModuleByType("creditcard",false);
                }
                    context.isShowPaymentMethod = true;
                    return context;
                }
            });
			LiveOrderModel.prototype.getShippableLines = _.wrap(LiveOrderModel.prototype.getShippableLines, function () {  

                return this.get('lines').filter(function(line) {
                    return (
                        line.get('fulfillmentChoice') !== 'pickup' &&
                        line.get('quantity')
                    );
                });
            });
            LiveOrderModel.prototype.getNonShippableLines = _.wrap(LiveOrderModel.prototype.getNonShippableLines, function () {  
                return this.get('lines').filter(function(line) {
                    return false;
                });
            });	 

		}
	};
});


};

extensions['TCI.FooterExt.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TCI/FooterExt/1.0.0/' + asset;
}

// @module TCI.FooterExt.ExtraFooterLinks
define('TCI.FooterExt.ExtraFooterLinks.View'
,	[
	'tci_footerext_extrafooterlinks.tpl'
	,	'Backbone.View'
    ]
, function (
	tci_footerext_extrafooterlinks_tpl
	,	BackboneView
)
{
    'use strict';

	// @class TCI.FooterExt.ExtraFooterLinks.View @extends Backbone.View
	return BackboneView.extend({

		template: tci_footerext_extrafooterlinks_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new ExtraFooterLinksModel();
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

		//@method getContext @return TCI.FooterExt.ExtraFooterLinks.View.Context
	,	getContext: function getContext()
		{
			//@class TCI.FooterExt.ExtraFooterLinks.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("TCI.FooterExt.ExtraFooterLinks.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
});
});



define(
	'TCI.FooterExt.ExtraFooterLinks'
,   [
		'TCI.FooterExt.ExtraFooterLinks.View'
	]
,   function (
		ExtraFooterLinksView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			
			if(layout)
			{
				// layout.addChildView('Header.Logo', function() { 
				// 	return new ExtraFooterLinksView({ container: container });
				// });
			}

		}
	};
});


};

extensions['Acme.printquote.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Acme/printquote/1.0.0/' + asset;
}

// @module Acme.printquote.PrintQuote
define('Acme.printquote.PrintQuote.View'
,	[
	'acme_printquote_printquote.tpl'
	,'Acme.printquote.PrintQuote.SS2Model'
	, 'Backbone'
	, 'underscore'
	, 'jQuery'
	, "Backbone.Model"
    , 'Backbone.FormView'
	, 'SC.Configuration'
	, 'GlobalViews.Confirmation.View'
	, 'LiveOrder.Model'
	, 'Utils'
	, "Acme.printquote.PrintQuote.Model"
	, "GlobalViews.Modal.View"
	, 'Acme.printquote.PrintQuoteModel.View'
    ]
, function (
	acme_printquote_printquote_tpl
	,	PrintQuoteSS2Model
	, Backbone
	, _
	, jQuery
	, BackboneModel
	, BackboneFormView
	, Configuration
	, GlobalViewsConfirmationView
	, LiveOrderModel
	, Utils
	, AcmeprintquotePrintQuoteModel
	, GlobalViewsModalView
	, AcmeprintquotePrintQuoteModelView
)
{
    'use strict';

	// @class Acme.printquote.PrintQuote.View @extends Backbone.View
	return Backbone.View.extend({

		template: acme_printquote_printquote_tpl,


    events: {	 
			 'click [data-action="print-quote"]': 'printQuote'
			,'click [data-action="mail-quote"]': 'mailQuote'
			,'click [data-action="send-email"]': 'saveForm2'
			,'click [data-action="email-quote"]': 'showForm'
	}
	
	, bindings: {
			'[name="name"]': 'name'
		,	'[name="email"]': 'email'
		,	'[name="message"]': 'message'
	}
	
  , initialize: function (options) {
	 
			this.application = options.application;
			var liveOrderModels = LiveOrderModel.getInstance();
	  		this.liveOrderModel = liveOrderModels;
			this.model = new AcmeprintquotePrintQuoteModel();
			var self = this;
			var load = LiveOrderModel.loadCart();
			load.done(function (res) {
				self.cartdata = res;
				self.render();
			});
			BackboneFormView.add(this);
		},
  
		beforeShowContent : function beforeShowContent() {
			var self = this;
			var promise = jQuery.Deferred();
			
			var datemodel = new AcmeprintquotePrintQuoteModel();
			datemodel.fetch().done((res) => {
				var today = new Date(res);
				var yyyy = today.getFullYear();
				var mm = today.getMonth() + 1;
				var dd = today.getDate();

			if (dd < 10)
				dd = '0' + dd;
			if (mm < 10)
				mm = '0' + mm;
				var newdate =  mm  + '/' + dd + '/' + yyyy;
				self.validdate = newdate;
				promise.resolve();
			})

			return promise;
        },	
	printQuote: function() {
		
		window.print();
	}

	, mailQuote: function () {
		
		var view = new AcmeprintquotePrintQuoteModelView({  
			pageHeader: Configuration.get('quote.popupboxtitle'),
			application: this.application,
			cartData:this.cartdata
        }); 
		view.showInModal();
	}
	
	, showForm: function () {
		
			this.$('[data-collapse-content]').collapse('toggle');	

	}
	,
	
   saveForm2: function(e, model, props) {
	   
		e.preventDefault();
		model = model || this.model;
		this.$savingForm = jQuery(e.target).closest('form');
		
		if (this.$savingForm.length)
		{
			this.$savingForm.find('input[type="submit"], button[type="submit"]').attr('disabled', true);

			this.$savingForm.find('input[type="reset"], button[type="reset"]').hide();
		}
	   
		this.hideError();
		
		var self = this;
		
		// Returns the promise of the save acction of the model
		return model.save(props || this.$savingForm.serializeObject(), {
			
			wait: true
			// Hides error messages, re enables buttons and triggers the save event
			// if we are in a modal this also closes it
			,	success: function (model, response)
			{
				if (self.inModal && self.$containerModal)
				{
					self.$containerModal.removeClass('fade').modal('hide').data('bs.modal', null);
				}
				
				if (self.$savingForm.length)
				{
					self.hideError(self.$savingForm);
					self.$savingForm.find('[type="submit"], [type="reset"]').attr('disabled', false);
					model.trigger('save', model, response);
				}
				
				var emailConfirmationView = new GlobalViewsConfirmationView({
					title: _('Email Sent').translate()
					,	body: _('Your quote has been emailed.').translate()
					,	confirmLabel: _('OK').translate()
					,	hideCancelButton: true
					,	autohide: true
				});
				self.options.application.getLayout().showInModal(emailConfirmationView);
				
			}
			
			// Re enables all button and shows an error message
			,	error: function (model, response)
			{
				self.$savingForm.find('*[type=submit], *[type=reset]').attr('disabled', false);
				
				if (response.responseText)
				{
					model.trigger('error', jQuery.parseJSON(response.responseText));
				}
			}
		});
   }
   
	, 	childViews: {

		}
	, getContext: function() {
			var lines = this.liveOrderModel && this.liveOrderModel.get('lines');
			var models = lines && lines.models;
		var summary = this.liveOrderModel && this.liveOrderModel.get('summary');
	
		if (summary && !summary.shippingcost) {
				var shippingCost = 0;
				var shippingrate = 0;
				var cartHasItemToShip = false;
				if (models && models.length) {
					models.forEach(function (model) {
						var item = model.get('item')
						if (item && item.get('itemtype') == 'InvtPart') {
							if (Configuration.get('quote.shippingrate')) {
								shippingCost += model.get('amount') * Configuration.get('quote.shippingrate');
								cartHasItemToShip = true;
							} else {
								shippingCost += model.get('amount') * 0.05;
								cartHasItemToShip = true;
							}
						}
					});
					if (cartHasItemToShip) {
						shippingCost = shippingCost >= 5 ? shippingCost : 5;
					} 
				}
				summary.shippingcost = shippingCost;
				summary.shippingcost_formatted = Utils.formatCurrency(summary.shippingcost);
				summary.total = summary.total + summary.shippingcost;
				summary.total_formatted = Utils.formatCurrency(summary.total);
				if (cartHasItemToShip) {
					shippingrate = (shippingCost) * 100 / (summary.total);
				}
				summary.shippingrate = 5; //Math.round(shippingrate);
		} else{
			if (summary && summary.shippingcost) {
				if (!summary.shippingrate) {
					var shippingrate = ((summary.shippingcost) * 100) / (summary.total);
					summary.shippingrate = 5; // Math.round(shippingrate);
					
				}
			}
		}
	    return {
				text:  Configuration.get('quote.quotetitle'),
				subtext:  Configuration.get('quote.subtext'),
				lines: lines,
				summary: summary,
			    finePrint: Configuration.get('quote.notes'),
				validupto:this.validdate	
	      };
	  } 
	});
});



define("Acme.printquote.PrintQuote.Model", ["Backbone", "Utils"], function (
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/PrintQuote.Service.ss"
            )
        ),
});
});


// Model.js
// -----------------------
// @module Case
define("Acme.printquote.PrintQuote.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/PrintQuote/SuiteScript2/PrintQuote.Service.ss"
            ),
            true
        )
});
});



// @module Acme.printquote.PrintQuote
define('Acme.printquote.PrintQuoteModel.View'
,	[
	'acme_printquote_printquotemodel.tpl'
	
	,	'Acme.printquote.PrintQuote.SS2Model'
	, 'Backbone'
	, 'underscore'
	, 'jQuery'
	, "Backbone.Model"
    , 'Backbone.FormView'
	, 'SC.Configuration'
	, 'GlobalViews.Confirmation.View'
	, 'LiveOrder.Model'
	, 'Utils'
	, "Acme.printquote.PrintQuote.Model"
	, "GlobalViews.Modal.View"
	, 'GlobalViews.Message.View'
    ]
, function (
	acme_printquote_printquotemodel_tpl

	, PrintQuoteSS2Model	
	, Backbone
	, _
	, jQuery
	, BackboneModel
	, BackboneFormView
	, Configuration
	, GlobalViewsConfirmationView
	, LiveOrderModel
	, Utils
	, AcmeprintquotePrintQuoteModel
	, GlobalViewsModalView
	, GlobalViewsMessageView
)
{
    'use strict';

	return Backbone.View.extend({
		template: acme_printquote_printquotemodel_tpl,
		// page_header: Utils.translate('Email Address'),

 	attributes: {
    	id: 'PrintQuote_model',
    	class: ''
	},
	
	events: {
			'click [data-action="sendmail"]': 'sendmail'
		}
	, bindings: {	
	
	}
	, initialize: function (options) {
		this.showModalPageHeader = true
	}
	, childViews: {

	}

, sendmail: function sendmail(e) {		
	
	e.preventDefault();
	var emailvalue = $('#in-modal-email').val();
	var model = new AcmeprintquotePrintQuoteModel();
	var data = { cartdata: this.options.cartData, email: emailvalue };

	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailvalue)) {
		model.save(data).done((res) => {

				var global_view_message = new GlobalViewsMessageView({	
					message: "Email Sent Successfully",
					type: "success",
					closable: true,
				});

				jQuery(".email-validation").html(
					global_view_message.render().$el.html()
				);
			setTimeout(() => {

				$('#modal-PrintQuote_model').css("display", "none");
				$('#modal-PrintQuote_model').removeClass("modal fade modal-PrintQuote_model in");
				$('.modal-backdrop.in').removeAttr('class')

			}, 1000);
				
		}).fail((res) => {

			var err = jQuery.parseJSON(res.responseText);
			var global_view_message = new GlobalViewsMessageView({	
					message: err.errorMessage,
					type: "error",
					closable: true,
			});
			
				jQuery(".email-validation").html(
					global_view_message.render().$el.html()
				);
			setTimeout(() => {
				$('#modal-PrintQuote_model').css("display", "none");
				$('#modal-PrintQuote_model').removeClass("modal fade modal-PrintQuote_model in");
				$('.modal-backdrop.in').removeAttr('class')

			}, 2000);
		})
	} else {

		var global_view_message = new GlobalViewsMessageView({	
			message: "enter valid email.",
			type: "error",
			closable: true,
		});

		jQuery(".email-validation").html(
			global_view_message.render().$el.html()
		);

	}
}
, getContext: function () {
	    return {
			text: 'Quote',
			pagetitle: Configuration.get("quote.popupboxtitle"),
			buttontext: Configuration.get("quote.buttontext")
		};
	  } 
	});
});



define(
	'Acme.printquote.PrintQuote'
,   [
	'Acme.printquote.PrintQuote.View'
	, 'GlobalViews.Modal.View'
	]
,   function (
	PrintQuoteView
	, GlobalViewsModalView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp(container)
		{
			/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');
				var pageType = container.getComponent("PageType");
				pageType.registerPageType({
					name: "quote-page",
					routes: ["printquote"],
					view: PrintQuoteView,
					defaultTemplate: {
						name: "acme_printquote_printquote_tpl",
						displayName: "printquote",
				    },
				});
		
		GlobalViewsModalView.prototype.getContext = _.wrap(GlobalViewsModalView.prototype.getContext, function (fn) {
			var context = fn.apply(this, _.toArray(arguments).slice(1));
			context.pageHeader = (this.options.childViewIstance.attributes) ? (this.options.childViewIstance.attributes.id == 'PrintQuote_model' ? this.options.childViewIstance.options.pageHeader || '' : this.options.pageHeader || '') : this.options.pageHeader || '';
			return context;
			});	
		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View","TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.Model","TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.SS2Model","TCI.CheckoutCustomizationsExtension.OrderWizard.Module.PayingWithStep.View","TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup.View","TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup.Model","TCI.CheckoutCustomizationsExtension.OrderWizardModuleCartSummaryExt","TCI.CheckoutCustomizationsExtension.OrderWizardModulePaymentMethodPurchaseNumberExt","TCI.CheckoutCustomizationsExtension.OrderWizardModuleShipmethodExt","TCI.CheckoutCustomizationsExtension.AddressEditViewExt","TCI.CheckoutCustomizationsExtension.UploadFile.View","TCI.CheckoutCustomizationsExtension.AddressEditFieldsViewExt","OrderWizard.Module.SubscriptionEmail.View","Extension.OrderWizard.Module.Confirmation","TCI.FooterExt.ExtraFooterLinks.View","TCI.FooterExt.ExtraFooterLinks.Model","Acme.printquote.PrintQuote.View","Acme.printquote.PrintQuote.Model","Acme.printquote.PrintQuote.SS2Model","Acme.printquote.PrintQuoteModel.View"];
try{
	extensions['TCI.CheckoutCustomizationsExtension.1.0.0']();
	SC.addExtensionModule('TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TCI.FooterExt.1.0.0']();
	SC.addExtensionModule('TCI.FooterExt.ExtraFooterLinks');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Acme.printquote.1.0.0']();
	SC.addExtensionModule('Acme.printquote.PrintQuote');
}
catch(error)
{
	console.error(error);
}

