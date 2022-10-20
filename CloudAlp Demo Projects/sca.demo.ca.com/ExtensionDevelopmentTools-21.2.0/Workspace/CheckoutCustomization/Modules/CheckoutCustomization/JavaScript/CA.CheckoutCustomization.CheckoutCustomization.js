
define(
	'CA.CheckoutCustomization.CheckoutCustomization'
,   [
		'CA.CheckoutCustomization.CheckoutCustomization.View'
	,	'Profile.Model'
	,	'OrderWizard.Module.Shipmethod'
	,	'OrderWizard.Module.Address'
	]
,   function (
		CheckoutCustomizationView
	,	ProfileModel
	,	OrderWizardModuleShipmethod
	,	OrderWizardModuleAddress

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
				_.extend(OrderWizardModuleShipmethod.prototype,{
					getContext:_.wrap(OrderWizardModuleShipmethod.prototype.getContext, function getContext(fn){
						var self = this;
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						const shipping_methods = this.model.get('shipmethods').map(function(shipmethod) {
							return {
								name: shipmethod.get('name'),
								rate_formatted: shipmethod.get('rate_formatted'),
								internalid: shipmethod.get('internalid'),
								isActive: shipmethod.get('internalid') === self.model.get('shipmethod')
							};
						});
						// console.log();
						var CustomerSelectedShippingMethod = shipping_methods.filter((data)=>{
							return data.isActive == true
						})
						
						if(CustomerSelectedShippingMethod.length > 0){
							context.CustomerShippingMethodlength = true;
						}else{
							context.CustomerShippingMethodlength = false;
						}
						
						context.CustomerShippingMethod = CustomerSelectedShippingMethod;
						
						

						return context;

					})
				})

				_.extend(OrderWizardModuleAddress.prototype,{
					getContext:_.wrap(OrderWizardModuleAddress.prototype.getContext, function getContext(fn){
						var self = this;
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						if(_.isEqual(self.manage,'billaddress')){
							context.manageByCustomer = true
						}
						
						return context;
					})
				})
			}

		}
	};
});
