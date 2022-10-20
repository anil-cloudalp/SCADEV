
define(
	'Car.CustomAccountRegister.CustomAccountRegisterModule'
	, [
		'Car.CustomAccountRegister.CustomAccountRegisterModule.View',

		'LoginRegister.Register.View',

		'LoginRegister.Login.View',

		'SC.Configuration',

		'OrderWizard.Step',

		'OrderWizard.Module.SubmitButton'



	]
	, function (
		CustomAccountRegisterModuleView

		, LoginRegisterRegisterView

		, LoginRegisterLoginView

		, Configuration

		, OrderWizardStep

		, OrderWizardModuleSubmitButton




	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				/** @type {LayoutComponent} */

				const pageType = container.getComponent('PageType');
				var layout = container.getComponent('Layout');
				var userprofilecomponent = container.getComponent("UserProfile");

				pageType.registerPageType({
					name: 'RequestAccount',
					routes: ['requestaccount'],
					view: CustomAccountRegisterModuleView,
					defaultTemplate: {
						name: 'car_customaccountregister_customaccountregistermodule.tpl',
						displayName: 'requestaccount',
					}
				});

				if (layout) {
					layout.addChildView('signup', function () {
						return new CustomAccountRegisterModuleView({ container: container });
					});
				}

				//hiding the continue button in checkout in case of no address (related to Request shipping address)
				// adding the code here because the rqstshipaddrs ext is configured to both myaccount and checkout where as this one is configured only to checkout
				var hidingcontinuebtn = false;


				userprofilecomponent.getUserProfile().done(function (profile) {

					if (_.isUndefined(profile.addresses)) {
						hidingcontinuebtn = false;
					}
					else {
						if (SC.ENVIRONMENT.SCTouchpoint == "checkout") {
							if (profile.addresses.length > 0) {
								hidingcontinuebtn = true;
							} else {
								hidingcontinuebtn = false;
							}
						}

					}

				});

				_.extend(OrderWizardStep.prototype, {
					getContext: _.wrap(OrderWizardStep.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));

						ret.hidingcontinuebtn = hidingcontinuebtn;

						return ret
					})
				})

				//hiding the continue buttton in mobile view 
				_.extend(OrderWizardModuleSubmitButton.prototype, {
					getContext: _.wrap(OrderWizardModuleSubmitButton.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));

						ret.hidingcontinuebtn = hidingcontinuebtn;

						return ret
					})
				})
	


				_.extend(LoginRegisterRegisterView.prototype, {
					getContext: _.wrap(LoginRegisterRegisterView.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));


						return {
							customregister: true,
							ret: ret
						}

					})
				})

				_.extend(LoginRegisterLoginView.prototype, {
					transformResponseText: function (response) {
						var newResponseText = JSON.parse(response.responseText);
						

						if (newResponseText.errorCode == "ERR_WS_CUSTOMER_LOGIN") {
							newResponseText.errorMessage = "<div>{{translate Incorrect email address or password. Enter the correct email address and password, or <a href='/requestaccount' class='checkoutwarning'> Request for an Account </a>, if you are a new customer.}}</div>";
						}
						var responseAfterSlice = newResponseText.errorMessage.slice(17, -8);
						newResponseText.errorMessage = responseAfterSlice;
						response.responseText = _.unescape(JSON.stringify(newResponseText));
					
					},

					getContext: _.wrap(LoginRegisterLoginView.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));

						_.each(Configuration.footer.multiColLinks, function (link) {
							if (link.href == "/contact-us") {
								ret.contactus = link.href
							}
						}
						)

						return {
							customregister: true,
							ret: ret
						}

					})
				})

			}
		};
	});
