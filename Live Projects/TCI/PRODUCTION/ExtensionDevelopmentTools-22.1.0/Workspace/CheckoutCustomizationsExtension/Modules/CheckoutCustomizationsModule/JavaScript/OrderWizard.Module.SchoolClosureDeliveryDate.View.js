// ExtensionDevelopmentTools-21.2.0 (14)\Workspace\CheckoutCustomizationsExtension\Modules\CheckoutCustomizationsModule\Templates\order_wizard_module_schoolclosuredeliverydate.tpl
define('OrderWizard.Module.SchoolClosureDeliveryDate.View',
[
  'order_wizard_module_subscriptionemail.tpl',
  'order_wizard_module_schoolclosuredeliverydate.tpl',
  'Backbone',
  'Backbone.CompositeView',
  'Wizard.Module',
  'Profile.Model',
  'LiveOrder.Model',
  'underscore',
  'jQuery',
  'Utils',
  'SC.Configuration',
  'TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.Model'
],
function
(
  order_wizard_module_subscriptionemail_tpl,
  order_wizard_module_schoolclosuredeliverydate_tpl,
  Backbone,
  BackboneCompositeView,
  WizardModule,
  ProfileModel,
  LiveOrderModel,
  _,
  jQuery,
  Utils,
  Configuration,
  TCICheckoutCustomizationsExtensionCheckoutCustomizationsModuleModel
)
{
  'use strict';
  
  return WizardModule.extend(
    {
      template:  order_wizard_module_schoolclosuredeliverydate_tpl,
      
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
         if(this.LiveOrderModel.get('options').custbody26) {
           this.trigger('ready', true);
         }
        },

      getContext: function ()
      {  
        var defaultLabel = 'School Closure or Delivery Date';
        var tooltip = 'Provide school closure or add desired delivery date. Delivery date cannot be less than 15 days from the order date. TCI cannot guarantee delivery date during the month of August';
          return {
            model: this.wizard.model,
            showWrapper: !!this.options.showWrapper,
            wrapperClass: this.options.wrapperClass,
            SchoolClosuretooltipMessage: Configuration.get('checkoutMessaging.schoolclosuretooltip',tooltip),
            schoolclosureordeliverydateLable: Configuration.get('checkoutMessaging.schoolclosureLable', defaultLabel)
          };
      },
      
      submit: function()
      {
        var self = this;
        var options = this.LiveOrderModel.get('options') || {};
        var SchoolClosure = this.$('input[name=schoolclosure]').val();
        options.custbody26 = SchoolClosure;
        var liveordermodel = LiveOrderModel.getInstance();
        var profile = ProfileModel.getInstance();
		   var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
		  _each(liveordermodel.get('addresses').models, function (model) {
				if (model.get('defaultbilling') == "T") {
				  var checkoutcustommodel = new TCICheckoutCustomizationsExtensionCheckoutCustomizationsModuleModel();
				  var data = { 'userid': profile.get('internalid'), 'companyname': model.get('company') };
				  checkoutcustommodel.save(data).done(() => {
						  self.model.set('options', options);
					  })
				  }
		  })
      },
    });
});

