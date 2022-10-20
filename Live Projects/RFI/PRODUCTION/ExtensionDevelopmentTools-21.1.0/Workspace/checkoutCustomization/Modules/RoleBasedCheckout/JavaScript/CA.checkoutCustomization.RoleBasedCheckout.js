
define(
	'CA.checkoutCustomization.RoleBasedCheckout'
,   [
		'CA.checkoutCustomization.RoleBasedCheckout.View'
	, 	"OrderWizard.Module.CartItems.Ship"
	, 	"Utils"	
	]
,   function (
		RoleBasedCheckoutView
	,  OrderWizardModuleCartItemsShip
	,  Utils
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');

			OrderWizardModuleCartItemsShip.prototype.getContext = _.wrap(OrderWizardModuleCartItemsShip.prototype.getContext, function (fn) {	
			var context = fn.apply(this, _.toArray(arguments).slice(1));

			if(this.application.role == "sales"){
				context.toshowcart = false;
			}else{
				context.toshowcart = true;
			}			
			return context;
		})

		}
	};
});
