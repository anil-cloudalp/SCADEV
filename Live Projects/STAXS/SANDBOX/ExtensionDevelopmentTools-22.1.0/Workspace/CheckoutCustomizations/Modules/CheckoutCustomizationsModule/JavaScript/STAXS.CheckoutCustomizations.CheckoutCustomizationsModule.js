
define(
	'STAXS.CheckoutCustomizations.CheckoutCustomizationsModule'
	, [
		'STAXS.CheckoutCustomizations.CheckoutCustomizationsModule.View',
		'LoginRegister.Login.View',
		'Utils',
		'SC.Configuration',
		'Wizard.View',
		'STAXS.RequestShipAddress.RequestShipAddressModule.View',
		'OrderWizard.Module.PromocodeForm',
		'OrderWizard.Module.Title',
		'OrderWizard.Step'
	]
	, function (
		CheckoutCustomizationsModuleView,
		LoginRegisterLoginView,
		Utils,
		Configuration,
		WizardView,
		RequestShipAddressModuleView,
		OrderWizardModulePromocodeForm,
		OrderWizardModuleTitle,
		OrderWizardStep
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');
				var checkout = container.getComponent('checkout');

				// shipping request button ,remove promo checkout
				_.extend(OrderWizardModulePromocodeForm.prototype, {
					getContext: _.wrap(OrderWizardModulePromocodeForm.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));
						if (this.step.step_url == "review") {
							ret.ShowPromocode = false;
						} else {
							ret.ShowPromocode = true;
						}
						return ret
					})
				})

				//adding margin to the sales order confirmation page
				var addmargin = false;
				_.extend(OrderWizardStep.prototype, {
					getContext: _.wrap(OrderWizardStep.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));
						if (this.step_url == "confirmation") {
							addmargin = true;
							ret.addmargin = addmargin;
						}
						return ret
					})
				})

				OrderWizardModuleTitle.prototype.getContext = _.wrap(OrderWizardModuleTitle.prototype.getContext, function (fn) {
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					if (context.title == "Shipping Address") {
						context.isShippingtitle = true;
					} else {
						context.isShippingtitle = false;
					}
					return context;
				})

				if (checkout) {
					checkout.addChildView('RequestshippingAddress', function () {
						return new RequestShipAddressModuleView({ container: container });
					});
				}
				// end 
				LoginRegisterLoginView.prototype.redirect = function (context, response) {
					const url_options = Utils.parseUrlOptions(window.location.search);
					const { touchpoints } = response;
					const isPasswordReset = url_options.passwdret;
					const self = this;

					// Track Login Event
					this.trackEvent(function () {
						if (
							!isPasswordReset &&
							(url_options.is === 'checkout' || url_options.origin === 'checkout')
						) {

							self.refreshApplication(response);
						} else {
							// if we know from which touchpoint the user is coming from

							if (url_options.origin && touchpoints[url_options.origin]) {

								// we save the URL to that touchpoint

								let url = touchpoints[url_options.origin];
								// if there is an specific hash
								if (url_options.origin_hash) {

									// we add it to the URL as a fragment
									url = Utils.addParamsToUrl(url, { fragment: url_options.origin_hash });
								}

								window.location.href = url;
							} else {

								// We've got to disable passwordProtectedSite feature if customer registration is disabled.
								if (
									Configuration.getRegistrationType() !== 'disabled' &&
									SC.ENVIRONMENT.siteSettings.siteloginrequired === 'T'
								) {


									window.location.href = touchpoints.home + "/staxs-products";
								} else {

									// otherwise we need to take it to the customer center
									window.location.href = touchpoints.customercenter;
								}
							}
						}
					});
				}



			}
		};
	});
