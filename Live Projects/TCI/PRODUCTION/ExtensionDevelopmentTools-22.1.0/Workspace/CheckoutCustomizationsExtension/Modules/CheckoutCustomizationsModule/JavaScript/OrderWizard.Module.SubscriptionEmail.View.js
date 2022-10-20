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

