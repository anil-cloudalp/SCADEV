
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
        'OrderWizard.Module.SchoolClosureDeliveryDate.View',
        'Extension.OrderWizard.Module.Confirmation'
     ,  "OrderWizard.Module.Address"
     , 'PaymentInstrument.CreditCard.Edit.Form.View'
     , 'PaymentInstrument.CreditCard.Edit.View'
        
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
        OrderWizardModuleSchoolClosureDeliveryDateView,
        ExtensionOrderWizardModuleConfirmation,
        OrderWizardModuleAddress,
        PaymentInstrumentCreditCardEditFormView,
        PaymentInstrumentCreditCardEditView
		
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
            
            // checkout.on("afterShowContent", function() {
            // checkout.getCurrentStep().then(function (step) {
            //     console.log("current step", step);
            //     if (step.url == 'billing/address') {
            //                 console.log("current step");
            //                     OrderWizardModuleAddress.prototype.render = _.wrap(OrderWizardModuleAddress.prototype.render, function (fn) {
            //                         fn.apply(this, _.toArray(arguments).slice(1));
            //                         if (this.address && this.address.get('company') && this.address.get('defaultbilling')) {
            //                             var profile = ProfileModel.getInstance();
            //                             profile.set('companyname', this.address.get('company'));
            //                             profile.save();
            //                         }
            //                     });
            //             }
            //      })
			//  })

            


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

            checkout.addModuleToStep({
                step_url: 'review', 
                module: { 
                    id: 'SchoolClosureDeliveryDate', 
                    index: 11,
                    classname: 'OrderWizard.Module.SchoolClosureDeliveryDate.View', 
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

        // PaymentInstrumentCreditCardEditFormView.prototype.render = _.wrap(PaymentInstrumentCreditCardEditFormView.prototype.render, function (fn) {
        //     fn.apply(this, _.toArray(arguments).slice(1));

        //     console.log("log in initialize");
        // });
            
     PaymentInstrumentCreditCardEditView.prototype.setPaymethodKey = _.wrap(PaymentInstrumentCreditCardEditView.prototype.setPaymethodKey, function (fn) {
         fn.apply(this, _.toArray(arguments).slice(1));
         var defaluttype = $('.paymentinstrument-creditcard-edit-form-controls-cc-select')[0].options[1].value;
         console.log("e", this);

         $('.paymentinstrument-creditcard-edit-form-controls-cc-select').val(defaluttype);
         $('.paymentinstrument-creditcard-edit-form-controls-cc-select').attr("selected");



        

        // PaymentInstrumentCreditCardEditFormView.prototype.getContext = _.wrap(PaymentInstrumentCreditCardEditFormView.prototype.getContext, function (fn) {
        //     var context = fn.apply(this, _.toArray(arguments).slice(1));
        //     $('.paymentinstrument-creditcard-edit-form-controls-cc-select-container').css('display', 'block');
        //     var isanypaymentselected = false;
        //         _.each(context.paymentMethods, function (paymentmethod) {             
        //          if(paymentmethod.selected !== undefined &&  paymentmethod.selected == true){
        //              isanypaymentselected = true;
        //            }
        //             console.log('context.paymentMethods',paymentmethod.selected);    
        //         })
        //     if (!isanypaymentselected) {
        //         context.paymentMethods[0].selected = true;
        //         // context.showPaymentSelector = true;
        //         }
        //     return context;
        //     });
       //console.log("this", e.target);
      /*  const cc_number = ($(e.target).val()).replace(/\s/g, '');
        const form = jQuery(e.target).closest('form');
        const paymenthod_key = this.paymenthodKeyCreditCart(cc_number);
        jQuery(e.target).val(cc_number);
        form.find('[name="paymentmethod"]').val(paymenthod_key || 0);
        if (paymenthod_key && this.showCardsImgs) {
            form.find('[data-image="creditcard-icon"]').each(function(_index, img) {
                const $img = jQuery(img);
                if ($img.data('value') === paymenthod_key) {
                    $img.addClass('creditcard-edit-card-selected');
                    $img.removeClass('creditcard-edit-card-no-selected');
                } else {
                    $img.addClass('creditcard-edit-card-no-selected');
                    $img.removeClass('creditcard-edit-card-selected');
                }
            });
            form.find('[data-value="creditcard-select-container"]').css('display', 'none');
            form.find('[data-value="creditcard-img-container"]').css('display', 'block');
        } else if (_.isUndefined(this.model.validation.ccnumber.fn(cc_number, {}, form))) {
            this.showCardsImgs = false;
            form.find('[data-image="creditcard-icon"]').removeClass(
                'creditcard-edit-form-card-no-selected'
            );
            form.find('[data-value="creditcard-select-container"]').css('display', 'block');
            form.find('[data-value="creditcard-img-container"]').css('display', 'none');
        } else {
            form.find('[data-value="creditcard-img-container"]').css('display', 'none');
        }*/

        }),       

         PaymentInstrumentCreditCardEditFormView.prototype.getContext = _.wrap(PaymentInstrumentCreditCardEditFormView.prototype.getContext, function (fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            $('.paymentinstrument-creditcard-edit-form-controls-cc-select-container').css('display', 'block');
            var isanypaymentselected = false;
                _.each(context.paymentMethods, function (paymentmethod) {             
                 if(paymentmethod.selected !== undefined &&  paymentmethod.selected == true){
                     isanypaymentselected = true;
                   }
                    console.log('context.paymentMethods',paymentmethod.selected);    
                })
            if (!isanypaymentselected) {
                context.paymentMethods[0].selected = true;
            }
             console.log('context',context);
            return context;
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
