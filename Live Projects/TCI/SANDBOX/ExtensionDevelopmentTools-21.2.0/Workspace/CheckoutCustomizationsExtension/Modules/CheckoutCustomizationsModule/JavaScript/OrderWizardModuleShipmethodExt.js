/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module OrderWizard.Module.Shipmethod
define(
	'TCI.CheckoutCustomizationsExtension.OrderWizardModuleShipmethodExt'
	, [
		'underscore'
		, 'jQuery'
		, 'GlobalViews.Confirmation.View'
		, 'OrderWizard.Module.Shipmethod'
		, 'SC.Configuration'
		, 'Utils'
		, 'LiveOrder.Model'
		, 'LoginRegister.CheckoutAsGuest.View'
		, 'LoginRegister.View'
		, "Profile.Model"
		, "OrderWizard.Module.ShowShipments"
		, "OrderWizard.Module.Address"
	]
	, function (
		_
		, jQuery
		, GlobalViewsConfirmationView
		, OrderWizardModuleShipmethod
		, Configuration
		, Utils
		, LiveOrderModel
		, LoginRegisterCheckoutAsGuestView
		, LoginRegisterView
		, ProfileModel
		, OrderWizardModuleShowShipments
		, OrderWizardModuleAddress

	) {
		'use strict';
		OrderWizardModuleShipmethod.prototype.changeDeliveryOptions = function changeDeliveryOptions(e) {
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
			this.model.save().always(function () {
				self.clearError();
				self.step.enableNavButtons();
				if (isExpeditedShipping && cartHasLabItem) {
					var defaultSurchargeText = 'Note that expedited shipping for lab materials will incur a 17% surcharge';
					var surchargeText = Configuration.get('surcharge.SurchargeText', defaultSurchargeText);
					var surchargeConfirmationView = new GlobalViewsConfirmationView({
						title: Utils.translate('Expedited Shipping for Lab Materials')
						, body: surchargeText
						, confirmLabel: Utils.translate('OK')
						, hideCancelButton: true
						, autohide: true
					});
					self.wizard.application.getLayout().showInModal(surchargeConfirmationView);
				}
			});
		};

		// OrderWizardModuleAddress.prototype.initialize = _.wrap(OrderWizardModuleAddress.prototype.initialize, function (fn) {
		// 	fn.apply(this, _.toArray(arguments).slice(1));
		// 	var self = this;
		// 	if (this.model.get('addresses').models[0] && this.model.get('addresses').models[0].get('defaultbilling')) {
		// 		var profile = ProfileModel.getInstance();
		// 		profile.set('companyname', self.model.get('addresses').models[0].get('company'));
		// 		profile.save();
		// 		console.log("profile",profile);
		// 		console.log("this for models", self.model.get('addresses').models);
		// 		console.log("this", self.model.get('addresses').models[0].get('company'));
		// 	}
		// });


		//checkout.on("afterShowContent", function() {
		// checkout.getCurrentStep().then(function (step) {
		// 	console.log("step", step);
		// });
		//	 })
	
		// checkout.on("afterShowContent", function() {
		// checkout.getCurrentStep().then(function (step) {   
		//console.log("current step", step);
		//  if (step.url == 'billing/address') {
		//         console.log("current step");
		//             OrderWizardModuleAddress.prototype.render = _.wrap(OrderWizardModuleAddress.prototype.render, function (fn) {
		//                 fn.apply(this, _.toArray(arguments).slice(1));
		//                 if (this.address && this.address.get('company') && this.address.get('defaultbilling')) {
		//                     var profile = ProfileModel.getInstance();
		//                     profile.set('companyname', this.address.get('company'));
		//                     profile.save();
		//                 }
		//             });
		//  //   }
		//      })
		//  })
			
/*OrderWizardModuleAddress.prototype.submit = _.wrap(OrderWizardModuleAddress.prototype.submit, function () {
			// Is Active is overridden by child modules, like Shipping to hide this module in Multi Ship To
			if(!this.isActive()) {
			return jQuery.Deferred().resolve();
		}
		const self = this;
		// its a new address
	if (this.addressView) {
		// The saveForm function expects the event to be in an element of the form or the form itself,
		// But in this case it may be in a button outside of the form (as the nav buttons live in the step)
		//  or triggered by a module ready event, so we need to create a fake event which the target is the form itself
		const fake_event = jQuery.Event('submit', {
			target: this.addressView.$('form').get(0)
		});
		// Calls the saveForm, this may kick the backbone.validation, and it may return false if there were errors,
		// other ways it will return an Ajax promise


		if (this.address && this.address.get('company') && this.address.get('defaultbilling')) {
			var profile = ProfileModel.getInstance();
			profile.set('companyname', this.address.get('company'));
			profile.save().done(() => {
				
		const result = self.addressView.saveForm(fake_event);
		// Went well, so there is a promise we can return, before returning we will set the address in the model
		// and add the model to the profile collection
		if (result && !result.frontEndValidationError) {
			return result
				.then(function (model) {
					// Set Address id to the order model. This has to go before the following self.addresses.add() as it triggers the render
					self.setAddress(model.internalid);

					// we only want to trigger an event on add() when the user has some address and is not guest because if not,
					// in OPC case (two instances of this module in the same page), the triggered re-render erase the module errors.
					const add_options =
						self.isGuest || self.addresses.length === 0 ? { silent: true } : null;
					self.addresses.add(model, add_options);

					self.model.set(`temp${self.manage}`, null);

					self.newAddressCreated && self.newAddressCreated(model.internalid, add_options);

					self.render();
				});
		} else {
			// There were errors so we return a rejected promise
			return jQuery.Deferred().reject({
				errorCode: 'ERR_CHK_INCOMPLETE_ADDRESS',
				errorMessage: Utils.translate('The address is incomplete')
			});
				}
				});

	}
		}
		return this.isValid();
	}); */

	// OrderWizardModuleAddress.prototype.render = _.wrap(OrderWizardModuleAddress.prototype.render, function (fn) {
	// 	fn.apply(this, _.toArray(arguments).slice(1));
	// 		// const url_options = Utils.parseUrlOptions(window.location.href);
	// 	var isbillingstep = (window.location.href).indexOf("billing/address") == -1;
	// 		console.log("urloptions",isbillingstep);
	// 	if (!isbillingstep) {
	// 		if (this.address && this.address.get('company') && this.address.get('defaultbilling')) {
	// 			var profile = ProfileModel.getInstance();
	// 			profile.set('companyname', this.address.get('company'));
	// 			profile.save();
	// 		}
	// 	}
	// });

	// 	var obj = OrderWizardModuleAddress.prototype.events;
	// 			obj["click #select"] = "selectaddresss";
	// 	OrderWizardModuleAddress.prototype.events = obj;
	// 	var liveorder = LiveOrderModel.getInstance();
	// _.extend(OrderWizardModuleAddress.prototype, {
					
	// 	selectaddresss: function (e) {
	// 		// 			  console.log("select");
	// 		// 			var add = liveorder.attributes.addresses.models;
	// 		// 			const defalutShipAddress = add.filter((address)=>{
	// 		// 				return  address.get("defaultshipping") == "T";
	// 		// 			});
	// 		// 			const defalutBillAddress = add.filter((address)=>{
	// 		// 				return  address.get("defaultbilling") == "T";
	// 		// 			});
						 
	// 		// var changedaddress = jQuery(e.target).data('id').toString();

	// 		// console.log("e", jQuery(e.target));
			
	// 		// console.log("changedaddress",changedaddress);
	// 		// console.log("defalutShipAddress",defalutShipAddress);

					
	// 		// 		 if((defalutShipAddress.length >0 && (defalutShipAddress[0].id) !== changedaddress) || (defalutBillAddress.length >0 && (defalutBillAddress[0].id) !== changedaddress))
	// 		// 		 {
						
	// 		// 			}
	// 	}
		
	// 	});

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

