var extensions = {};

extensions['CA.checkoutCustomization.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/checkoutCustomization/1.0.0/' + asset;
}

// @module CA.checkoutCustomization.RoleBasedCheckout
define('CA.checkoutCustomization.RoleBasedCheckout.View'
,	[
	'ca_checkoutcustomization_rolebasedcheckout.tpl'
	
	,	'CA.checkoutCustomization.RoleBasedCheckout.SS2Model'
	
	,	'Backbone'
    ]
, function (
	ca_checkoutcustomization_rolebasedcheckout_tpl
	
	,	RoleBasedCheckoutSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class CA.checkoutCustomization.RoleBasedCheckout.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_checkoutcustomization_rolebasedcheckout_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new RoleBasedCheckoutModel();
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

		//@method getContext @return CA.checkoutCustomization.RoleBasedCheckout.View.Context
	,	getContext: function getContext()
		{
			//@class CA.checkoutCustomization.RoleBasedCheckout.View.Context
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
define("CA.checkoutCustomization.RoleBasedCheckout.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/RoleBasedCheckout.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CA.checkoutCustomization.RoleBasedCheckout.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/RoleBasedCheckout/SuiteScript2/RoleBasedCheckout.Service.ss"
            ),
            true
        )
});
});



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


};

extensions['Kodella.KDChangeStoreLocations.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDChangeStoreLocations/1.0.0/' + asset;
}

// @module Kodella.KDChangeStoreLocations.KDChangeStoreLocations
define('Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View'
	, [
		'kodella_kdchangestorelocations_kdchangestorelocations.tpl'

		, 'Kodella.KDChangeStoreLocations.KDChangeStoreLocations.SS2Model'

		, 'Backbone'
	]
	, function (
		kodella_kdchangestorelocations_kdchangestorelocations_tpl

		, KDChangeStoreLocationsSS2Model

		, Backbone
	) {
		'use strict';

		// @class Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View @extends Backbone.View
		return Backbone.View.extend({

			template: kodella_kdchangestorelocations_kdchangestorelocations_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new KDChangeStoreLocationsModel();
				// var self = this;
				// this.model.fetch().done(function(result) {
				// 	self.message = result.message;
				// 	self.render();
				// });
			}

			, events: {
			}

			, bindings: {
			}

			, childViews: {

			}

			//@method getContext @return Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View.Context
			, getContext: function getContext() {
				//@class Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View.Context
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
define("Kodella.KDChangeStoreLocations.KDChangeStoreLocations.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDChangeStoreLocations.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDChangeStoreLocations.KDChangeStoreLocations.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDChangeStoreLocations/SuiteScript2/KDChangeStoreLocations.Service.ss"
            ),
            true
        )
});
});



define(
	'Kodella.KDChangeStoreLocations.KDChangeStoreLocations'
	, [
		'Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View'
		, 'ReferenceMap'
		, 'GoogleMap'
		, 'StoreLocator.Search.View'
	]
	, function (
		KDChangeStoreLocationsView
		, ReferenceMap
		, GoogleMap
		, StoreLocatorSearchView
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

				ReferenceMap.prototype.autocompleteChange = function autocompleteChange() {
					const place =
						this.autocomplete && this.autocomplete.getPlaces() && this.autocomplete.getPlaces()[0];

					if (!place || _.size(place) === 0) {
						console.warn('Autocomplete returned place contains no geometry');
						return;
					}

					if (!place.geometry) {
						console.warn('Autocomplete returned place contains no geometry');
						return;
					}
					// set autocomplete coordinates
					if (place.geometry.location) {
						this.setPosition({
							latitude: place.geometry.location.lat(),
							longitude: place.geometry.location.lng(),
							address: place.formatted_address,
							viewport: place.geometry.viewport,
							location: place.geometry.location
						});
					}
				};
				ReferenceMap.prototype.showAutoCompleteInput = function showAutoCompleteInput(input) {
					const self = this;

					var defaultBounds = new google.maps.LatLngBounds(
						new google.maps.LatLng(-33.8902, 151.1759),
						new google.maps.LatLng(-33.8474, 151.2631));

					if (input) {
						//	this.autocomplete = new google.maps.places.Autocomplete(input, options);
						this.autocomplete = new google.maps.places.SearchBox(input, {
							bounds: defaultBounds
						});
						self.map.addListener("bounds_changed", () => {

							this.autocomplete.setBounds(self.map.getBounds());
						});

						google.maps.event.addListener(this.autocomplete, 'places_changed', function () {

							const places = self.autocomplete.getPlaces();
							const bounds = new google.maps.LatLngBounds();
							places.forEach((place) => {
								if (!place.geometry) {
									console.log("Returned place contains no geometry");
									return;
								}
							});
							self.autocompleteChange();

							self.trigger('change:places', self.autocomplete.getPlaces());
						});
					}

					return this.autocomplete;
				};

				// if(layout)
				// {
				// 	layout.addChildView('Header.Logo', function() { 
				// 		return new KDChangeStoreLocationsView({ container: container });
				// 	});
				// }

			}
		};
	});


};

extensions['Kodella.KDExtraRegisterValidation.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDExtraRegisterValidation/1.0.0/' + asset;
}

// @module Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation
define('Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.View'
,	[
	'kodella_kdextraregistervalidation_kdextraregistervalidation.tpl'
	
	,	'Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.SS2Model'
	
	,	'Backbone'
    ]
, function (
	kodella_kdextraregistervalidation_kdextraregistervalidation_tpl
	
	,	KDExtraRegisterValidationSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdextraregistervalidation_kdextraregistervalidation_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new KDExtraRegisterValidationModel();
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

		//@method getContext @return Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.View.Context
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
define("Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDExtraRegisterValidation.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDExtraRegisterValidation/SuiteScript2/KDExtraRegisterValidation.Service.ss"
            ),
            true
        )
});
});


define("Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation", [
  "Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.View",
  "LoginRegister.Register.View",
  "Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.Model",
  "GlobalViews.Message.View",
  "Account.Register.Model",
  "Backbone.FormView",
  "Loggers"
], function (
  KDExtraRegisterValidationView,
  LoginRegisterRegisterView,
  ExtraRegisterModel,
  GlobalMessage,
  AccountRegisterModel,
  BackboneFormView,
  Loggers
) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      // using the 'Layout' component we add a new child view inside the 'Header' existing view
      // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
      // more documentation of the Extensibility API in
      // https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

      /** @type {LayoutComponent} */
      var loginRegisterPage = container.getComponent("LoginRegisterPage");
      var layout = container.getComponent("Layout");

      layout.on("afterShowContent", function () {
        try {
          var passwordOne = document.getElementById("register-password");
          var passwordTwo = document.getElementById("register-password2");
          var containerPassOne = document.getElementById("container-pass1");
          var containerPassTwo = document.getElementById("container-pass2");

          passwordOne.value = "Qwer1234@!";
          passwordTwo.value = "Qwer1234@!";

          containerPassOne.style.display = "none";
          containerPassTwo.style.display = "none";

          var selectState = document.getElementById("register-state");
          var hiddenField = document.getElementById("stateString");

          selectState.addEventListener("change", function (e) {
            console.dir(e, "value");
            console.dir(e.target, "value");

            var valueToField = e.target.value;
            hiddenField.value = valueToField;
          });
        } catch (e) {}
      });

      if (loginRegisterPage) {
        var fields;
        var errors = [];
        loginRegisterPage.on("beforeRegister", function (formFields) {
          fields = formFields;

          if (fields.password2) {
            $("#custentity_kd_custom_pswd").val(fields.password2);
          }
          var model = new ExtraRegisterModel();
          var entitymail = fields.email;
          model
            .fetch({ async: false, data: { entitymail: entitymail } })
            .done(function (response) {
              if (fields.email) {
                if (response.status === true) {
                  if (
                    !jQuery(
                      ".global-views-message.global-views-message-error.alert"
                    )[0]
                  ) {
                    errors.push(
                      "There is another customer with the same email."
                    );
                    var global_view_message = new GlobalMessage({
                      message: "There is another customer with the same email.",
                      type: "error",
                      closable: true,
                    });

                    jQuery(".login-register-register-form-messages").append(
                      global_view_message.render().$el.html()
                    );
                  }
                  SC.$loadingIndicator.hide();
                  throw "There is a user with the same email";
                } else {
                  SC.$loadingIndicator.show();
                  errors.pop();
                }
              }
            });

          if (fields.custentity_kd_contact_phone === "") {
            //errors.push(fields.custentity_kd_contact_phone);
            $("#phone").css("border-color", "#c47279");
            $("#register-phone-label-empty").css("display", "table");
            errors.push("phone is empty");
          } else {
            $("#phone").css("border-color", "black");
            $("#register-phone-label-empty").css("display", "none");
            errors.pop();
          }

          if (fields.custentity_kd_customer_abn.trim().length === 0) {
            $("#register-abn").css("border-color", "#c47279");
            $("#register-abn-label-empty").css("display", "table");
            errors.push("abn is empty");
          } else {
            $("#register-abn").css("border-color", "black");
            $("#register-abn-label-empty").css("display", "none");
            errors.pop();
          }

          if ($("#g-recaptcha-response").val() === "") {
            $("#rc-anchor-container").css("border-color", "#c47279");
            $("#register-captcha-label-empty").css("display", "table");
            errors.push("Captcha is empty");
          } else {
            $("#rc-anchor-container").css("border-color", "black");
            $("#register-captcha-label-empty").css("display", "none");
            errors.pop();
          }
          if (fields.company === "") {
            $("#register-company").css("border-color", "#c47279");
            $("#register-company-label-empty").css("display", "table");
            errors.push("company is empty");
          } else {
            $("#register-company").css("border-color", "black");
            $("#register-company-label-empty").css("display", "none");
            errors.pop();
          }
          if (errors.length != 0) {
            while (errors.length) {
              errors.pop();
            }
            return jQuery.Deferred().reject();
          } else {
            return jQuery.Deferred().resolve();
          }
        });

        //redirect customization
        LoginRegisterRegisterView.prototype.redirect = _.wrap(
          LoginRegisterRegisterView.prototype.redirect,
          function (fn, response) {
            const self = this;
            return this.cancelableTrigger("after:LoginRegister.register").then(
              function () {
				 					  
               window.location.href = "/sca-dev-2020-1/sca-login.ssp";
                return;
                const url_options = Utils.parseUrlOptions(
                  window.location.search
                );
                const { touchpoints } = response;
                const { application } = self;

                if (url_options.is && url_options.is === "checkout") {
                  const profile_model = ProfileModel.getInstance();

                  response.user && profile_model.set(response.user);
                  response.cart &&
                    LiveOrderModel.getInstance().set(response.cart);
                  response.address &&
                    profile_model.get("addresses").reset(response.address);
                  response.paymentmethod &&
                    profile_model
                      .get("paymentmethods")
                      .reset(response.paymentmethod);

                  // Track Guest Checkout Event
                  self.trackEvent(function () {
                    application.Configuration.currentTouchpoint = "checkout";
                    Backbone.history.navigate("", { trigger: true });
                  });
                } else {
                  // Track Login Event
                  self.trackEvent(function () {
                    // if we know from which touchpoint the user is coming from
                    if (url_options.origin && touchpoints[url_options.origin]) {
                      // we save the url to that touchpoint
                      let url = touchpoints[url_options.origin];
                      // if there is an specific hash
                      if (url_options.origin_hash) {
                        // we add it to the url as a fragment
                        url = Utils.addParamsToUrl(url, {
                          fragment: url_options.origin_hash,
                        });
                      }
                      window.location.href = url;
                    } else {
                      // We've got to disable passwordProtectedSite feature if customer registration is disabled.
                      if (
                        Configuration.getRegistrationType() !== "disabled" &&
                        SC.ENVIRONMENT.siteSettings.siteloginrequired === "T"
                      ) {
                        window.location.href =
                          response.attributes.touchpoints.home;
                      } else {
                        // otherwise we need to take it to the customer center
                        window.location.href =
                          response.attributes.touchpoints.home;
                      }
                    }
                  });
                }
              });
          });
        }
    },
  };
});


};

extensions['Kodella.KDFeeCreditCard.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDFeeCreditCard/1.0.0/' + asset;
}

// @module Kodella.KDFeeCreditCard.KDFeeCreditCard
define('Kodella.KDFeeCreditCard.KDFeeCreditCard.View'
,	[
	'kodella_kdfeecreditcard_kdfeecreditcard.tpl'
	
	,	'Kodella.KDFeeCreditCard.KDFeeCreditCard.SS2Model'
	
	,	'Backbone'
    ]
, function (
	kodella_kdfeecreditcard_kdfeecreditcard_tpl
	
	,	KDFeeCreditCardSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Kodella.KDFeeCreditCard.KDFeeCreditCard.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdfeecreditcard_kdfeecreditcard_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new KDFeeCreditCardModel();
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

		//@method getContext @return Kodella.KDFeeCreditCard.KDFeeCreditCard.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDFeeCreditCard.KDFeeCreditCard.View.Context
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
define("Kodella.KDFeeCreditCard.KDFeeCreditCard.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDFeeCreditCard.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDFeeCreditCard.KDFeeCreditCard.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDFeeCreditCard/SuiteScript2/KDFeeCreditCard.Service.ss"
            ),
            true
        )
});
});



define(
	'Kodella.KDFeeCreditCard.KDFeeCreditCard'
	, [
		'Kodella.KDFeeCreditCard.KDFeeCreditCard.View',
		"Profile.Model",
		"LiveOrder.Model",
		"OrderWizard.Module.PaymentMethod.Creditcard",
		"OrderWizard.Module.PaymentMethod.Selector"
	]
	, function (
		KDFeeCreditCardView,
		ProfileModel,
		liveOrder,
		CreditCardView,
		Selector
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				// debugger
				var layout = container.getComponent('Layout');
				var cart = container.getComponent('Cart');
				var checkout = container.getComponent('Checkout');
				var FeeAdded = '';
				var InstanceProfile = ProfileModel.getInstance();
				var defaultCreditCard = InstanceProfile.get('defaultCreditCard');

				var fees;
				console.log('InstanceProfile.attributes.fees', InstanceProfile.attributes.fees)
				if (InstanceProfile.attributes.fees) fees = JSON.parse(InstanceProfile.attributes.fees);

				//var fees = JSON.parse(InstanceProfile.attributes.fees); 
				//console.log(defaultCreditCard.attributes.paymentmethod.key, 'card'); 

				// if(defaultCreditCard.attributes.paymentmethod){
				// 	var defaultCC = defaultCreditCard.attributes.paymentmethod.key;
				// 	console.log(defaultCC);
				// 	console.log(defaultCreditCard.attributes.paymentmethod);
				// }
				//Remove all the promotions on load web to prevent the summary with the fee if the user recharge the site 


				checkout.on("afterShowContent", function () {
					//on the billing step, the changeFee event is added to the main view so the FEE is applied if the customer selects a credit card
					checkout.getCurrentStep().then(function (step) {

						if (step.url === "billing") {

							//console.log(FeeAdded);
							var liveOrderModel = liveOrder.getInstance();
							cart.getPaymentMethods().then(function (paymentmethods) {
								//console.log(paymentmethods[0].creditcard.paymentmethod.internalid);
								//if(paymentmethods[0].creditcard){
								//var creditCardId = paymentmethods[0].creditcard.paymentmethod.internalid;
								//console.log(creditCardId);
								if (FeeAdded != '') {

									cart.getPromotions().then(function (promotions) {
										//console.log(promotions);
										cart.removePromotion({ promocode_internalid: FeeAdded }).then(function (promotionRemoved) {
											//console.log('removed');
										})
									});
								}
								//}
							});
						}

						if (step.url === "review") {

							var liveOrderModel = liveOrder.getInstance();
							console.log(liveOrderModel);
							cart.getPaymentMethods().then(function (paymentmethods) {
								//console.log(paymentmethods[0].creditcard.paymentmethod.internalid);


								if (paymentmethods[0].creditcard || paymentmethods[0].type == "paypal") {

									if (paymentmethods[0].creditcard) var creditCardId = paymentmethods[0].creditcard.paymentmethod.internalid;

									if (creditCardId == undefined) {

										creditCardId = paymentmethods[0].internalid;
									}
									//console.log(creditCardId);
									if (creditCardId) {
										cart.getPromotions().then(function (promotions) {

											for (var i = 0; i < promotions.length; i++) {
												var promoID = promotions[i].internalid;
												var promoType = promotions[i].code;
												cart.removePromotion({ promocode_internalid: promoID }).then(function (promotionRemoved) {
													//console.log('removed');
												})
											}
										});


										cart.addPromotion({ promocode: fees[parseInt(creditCardId)] }).then(function (promotion) {
											//document.getElementByClassName('global-views-message-success alert')[0].style.display = 'none'
											FeeAdded = promotion.promotion.internalid;
											console.log(promotion);

										}, function () {
											//console.log("Could not add promotion.")
										});
									}
								}
							});
						} else if (step.url === 'shippingoptions') {
							//console.log(liveOrder.getInstance(), 'dir');

						}
					})


				})

			}


		};
	});



};

extensions['Kodella.KDGlobalExtension.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDGlobalExtension/1.0.0/' + asset;
}

// @module Kodella.KDGlobalExtension.KDGlobalExtension
define('Kodella.KDGlobalExtension.KDGlobalExtension.View'
,	[
	'kodella_kdglobalextension_kdglobalextension.tpl'
	
	,	'Kodella.KDGlobalExtension.KDGlobalExtension.SS2Model'
	
	,	'Backbone'
    ]
, function (
	kodella_kdglobalextension_kdglobalextension_tpl
	
	,	KDGlobalExtensionSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Kodella.KDGlobalExtension.KDGlobalExtension.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdglobalextension_kdglobalextension_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new KDGlobalExtensionModel();
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

		//@method getContext @return Kodella.KDGlobalExtension.KDGlobalExtension.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDGlobalExtension.KDGlobalExtension.View.Context
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
define("Kodella.KDGlobalExtension.KDGlobalExtension.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDGlobalExtension.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDGlobalExtension.KDGlobalExtension.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDGlobalExtension/SuiteScript2/KDGlobalExtension.Service.ss"
            ),
            true
        )
});
});



define(
	'Kodella.KDGlobalExtension.KDGlobalExtension'
,   [
		'Kodella.KDGlobalExtension.KDGlobalExtension.View',
		'jQuery'
	]
,   function (
		KDGlobalExtensionView,
		jQuery
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


			// jQuery(document).ready(function(){
			// 	if (!navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/)) {
			// 		jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
			// 	}else if(navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/) && navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') ){
			// 		jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
			// 	}

			// });

			var layout = container.getComponent('Layout');
			
			if(layout)
			{
				layout.on('afterShowContent', function(){


				// if (!navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/)) {
				// 	jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
				// }else if(navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/) && navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') ){
				// 	jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
				// }

                var casesButton = document.querySelectorAll('[data-id="cases"]');
				if(casesButton.length > 0){
					casesButton[0].remove();
				}

				var casesMenu = document.querySelectorAll("[data-permissions='lists.listCase.2']")
				if(casesMenu.length > 0){
					casesMenu[0].remove();	
				}

				
				var casesMobile = document.querySelectorAll("[name='submitnewcase']")
				if(casesMobile.length > 0){
					casesMobile[0].remove();	
				}


				var li = document.querySelectorAll(".list-type");	
				var ListType = jQuery('.list-type').parent().children('ul');
				 for (var i = 0; i<ListType.length; i++) {
				   ListType[i].firstElementChild.classList.add("custom-change-submenu-only");		
					 }		  
					 jQuery('.custom-change-submenu-only').children('ul').css('display', 'block');
					 jQuery('.cms-menu').css('position', 'initial');
					 jQuery('.list-type').parent().css('position', 'relative');



				});
			}

		}
	};
});


};

extensions['Kodella.KDShowStockAvailable.1.0.1'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDShowStockAvailable/1.0.1/' + asset;
}

// @module Kodella.KDShowStockAvailable.KDShowStockAvailable
define("Kodella.KDShowStockAvailable.KDShowStockAvailable.View", [
  "kodella_kdshowstockavailable_kdshowstockavailable.tpl",

  "Kodella.KDShowStockAvailable.KDShowStockAvailable.SS2Model",

  "Backbone",
  "ProductLine.Stock.View",
], function (
  kodella_kdshowstockavailable_kdshowstockavailable_tpl,

  KDShowStockAvailableSS2Model,

  Backbone,
  ProductLineStockDescriptionView
) {
  "use strict";

  // @class Kodella.KDShowStockAvailable.KDShowStockAvailable.View @extends Backbone.View
  return Backbone.View.extend({
    template: kodella_kdshowstockavailable_kdshowstockavailable_tpl,

    initialize: function (options) {
      /*
      var container = options.container;
      var cart = container.getComponent("Cart");
      cart.getLines().then(function (lines) {
        lines.forEach(function (line) {
          debugger;
          ProductLineStockDescriptionView.prototype.getContext = _.wrap(
            ProductLineStockDescriptionView.prototype.getContext,
            function (fn) {
              var context = fn.apply(this, _.toArray(arguments).slice(1));

              //debugger;
              context.UserInfo = {
                inStockMessage: line.item.extras.isinstock,
              };

              return context;
            }
          );
        });
        debugger;
      });
*/
      /*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
      // this.model = new KDShowStockAvailableModel();
      // var self = this;
      // this.model.fetch().done(function(result) {
      // 	self.message = result.message;
      // 	self.render();
      // });
    },

    events: {},

    bindings: {},

    childViews: {},

    //@method getContext @return Kodella.KDShowStockAvailable.KDShowStockAvailable.View.Context
    getContext: function getContext() {
      //@class Kodella.KDShowStockAvailable.KDShowStockAvailable.View.Context
      this.message = this.message || "Hello World!!";
      return {
        message: this.message,
      };
    },
  });
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDShowStockAvailable.KDShowStockAvailable.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDShowStockAvailable.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDShowStockAvailable.KDShowStockAvailable.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDShowStockAvailable/SuiteScript2/KDShowStockAvailable.Service.ss"
            ),
            true
        )
});
});


define("Kodella.KDShowStockAvailable.KDShowStockAvailable", [
  "Kodella.KDShowStockAvailable.KDShowStockAvailable.View",
  "Transaction.Line.Views.Cell.Navigable.View",
], function (KDShowStockAvailableView, ProductLineStockDescriptionView) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      // using the 'Layout' component we add a new child view inside the 'Header' existing view
      // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
      // more documentation of the Extensibility API in
      // https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

      /** @type {LayoutComponent} */
      var layout = container.getComponent("Layout");
      var cart = container.getComponent("Cart");
      /*if(layout)
			{
				layout.addChildView('Header.Logo', function() { 
					return new KDShowStockAvailableView({ container: container });
				});
			}*/
      if (ProductLineStockDescriptionView) {
        //debugger;
        ProductLineStockDescriptionView.prototype.getContext = _.wrap(
          ProductLineStockDescriptionView.prototype.getContext,
          function (fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));

            //debugger;
            if (this.model.attributes.item.attributes.isinstock) {
              context.inStockMessage = "This item is IN STOCK";
            } else {
              context.inStockMessage = " This item is available to back order";
            }

            return context;
          }
        );
      }
    },
  };
});


};

extensions['Kodella.KDSmartFreight.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDSmartFreight/1.0.0/' + asset;
}

// @module Kodella.KDSmartFreight.KDSmartFreight
define('Kodella.KDSmartFreight.KDSmartFreight.View'
	, [
		'kodella_kdsmartfreight_kdsmartfreight.tpl'

		, 'Profile.Model'
		, 'Kodella.KDSmartFreight.KDSmartFreight.Model'

		, 'Backbone'
		, 'LiveOrder.Model'
		, 'Wizard.Module'
		, 'Address.Model'
		, 'Backbone.CompositeView'
	]
	, function (
		kodella_kdsmartfreight_kdsmartfreight_tpl

		, ProfileModel
		, KDSmartFreightModel

		, Backbone
		, LiveOrderModel
		, WizardModule
		, AddressModel
		, BackboneCompositeView
	) {
		'use strict';

		// @class Kodella.KDSmartFreight.KDSmartFreight.View @extends Backbone.View
		return WizardModule.extend({

			template: kodella_kdsmartfreight_kdsmartfreight_tpl
			, initialize: function (options) {
				WizardModule.prototype.initialize.apply(this, arguments);
				BackboneCompositeView.add(this);
				var self = this;
				// global variables to use in calculations;
				self.total_weight = 0, self.numberOfItems = 0;
				self.zonesCost = {
					"2000-2249": 15,
					"2555-2574": 15,
					"2740-2786": 15,
					"3000-3199": 15,
					"4000-4305": 15,
					"4500-4560": 15,
					"3201": 15,
					"2250-2554": 25,
					"2575-2739": 25,
					"2787-2999": 25,
					"3202-3999": 25,
					"3200": 25,
					"5200-5999": 25,
					"4306-4499": 25,
					"4561-4999": 25,
					"6000-6214": 16,
					"5000-5199": 16,
					"7000-7999": 30,
					"0800-0999": 30,
					"6215-6999": 30
				}
			}

			, events: {
				'click .select_shipping': 'setShipping',
				'click #allocate-shipping': 'setShipping',
				'click #defaultGroupExample2': 'showSmart',
				'click #defaultGroupExample1': 'hideSmart'

			}

			, bindings: {
			}

			, childViews: {

			},
			hideSmart: function () {
				jQuery("#select-shipping").hide();
				jQuery("#memo-details").show();
				jQuery('.order-wizard-step-button-continue').removeAttr('disabled');
				jQuery("#0CustomerPickup").click();
			},
			showSmart: function () {

				jQuery("#select-shipping").show();
				jQuery("#memo-details").hide();

			},
			checkInitLogic: function () {
				var profilemodel = ProfileModel.getInstance();
				var liveorder = LiveOrderModel.getInstance();
				var self = this;
				if (liveorder.get("isPickUp")) {
					var cost = 0;
					var obj = liveorder.get('options');
					obj.custbody_shipping_cost_sca = cost.toString();
					self.wizard.getCurrentStep().submit();
					return
				}

				var summary = liveorder.get("summary");
			    	// var total = summary.total;
				 	var total = summary.subtotal;

				var address = liveorder.get('addresses').models;
				var selected = _.filter(address, function (myAddress) {
					return myAddress.get('defaultshipping') == 'T'
				})
				var city = selected[0].get("city").toLowerCase();
				if (city) city = city.replace(" ", "_");
				var state = selected[0].get("state");
				var zip = selected[0].get("zip");

				var customerIsRf = _.filter(profilemodel.get("customfields"), function (field) {
					return field.name == 'custentity_rfi_line_of_bus'
				})

				var resultShipping = "0", textShipping = '';
				// ask to the profile if the customer is RF
				if (customerIsRf[0].value == '1') {
					jQuery("#wizard-step-content").hide();
					// check total order to apply the shipping cost in 0, the order total needs to be more than 749.99					
					if (total < parseFloat(SC.CONFIGURATION.KDSmartFreight.totalOrder)) {
						for (var key in self.zonesCost) {
							var range = '';
							if (key.indexOf("-") != -1) {
								range = key.split("-");
								if (parseFloat(zip) >= parseFloat(range[0]) && parseFloat(zip) <= parseFloat(range[1])) {
									resultShipping = self.zonesCost[key];
								}
							} else {
								if (parseFloat(zip) == parseFloat(key)) {
									resultShipping = self.zonesCost[key];
								}
							}
						}


					}
					jQuery("#shipping-fee").remove();
					jQuery("#pickup-details").append("<span id='shipping-fee'>Shipping cost was defined by your zone</span>")
					var obj = liveorder.get('options');
					obj.custbody_shipping_cost_sca = resultShipping.toString();
					obj.custbody_shipping_method = textShipping.toString();

					liveorder.set('options', obj);
					liveorder.save().done(function () {

						liveorder.fetch().done(function () {
							self.enableContinue()
							self.wizard.getCurrentStep().submit();
						})
					});
				} else {
					this.rendertable()
				}
			},
			returnDisplayName:function(name){
				var ret = '';
				switch (name) {
					case 'EXPRESS':
						ret = 'Road Freight'
						break;
					case 'EXP':
						ret = 'Road Freight'
						break;
					case 'PREMIUM':
						ret = 'Air Freight'
						break;
					case 'GENERAL':
						ret = 'Road Freight'
						break;
					default:
						break;
				}
				return ret;
			},
			rendertable: function () {
				var self = this;

				var table = '';
				var failTable = false;
				var items = [];
				var liveorder = LiveOrderModel.getInstance();
				_.each(liveorder.get('lines').models, function (model) {
					items.push({ "itemId": model.get('item').id, "quantity": model.get('quantity') })
				})
				var profilemodel = ProfileModel.getInstance();

				self.numberOfItems = items.length;
				var model = new KDSmartFreightModel();
				self.model = model;

				var globalArray = [];
				var addr1 = liveorder.get('addresses').models[0].get("addr1");
				var addr2 = liveorder.get('addresses').models[0].get("addr2");;
				var addr3 = liveorder.get('addresses').models[0].get("addr3");
				var city = liveorder.get('addresses').models[0].get("city");;
				var state = liveorder.get('addresses').models[0].get("state")
				var zip = liveorder.get('addresses').models[0].get("zip")

				model.save({ async: true, items: items }).done(function (result) {

					var liveorderValidate = LiveOrderModel.getInstance();
					var address = liveorderValidate.get('addresses').models;
					var selected = _.filter(address, function (myAddress) {
						return myAddress.get('defaultshipping') == 'T'
					})
					var mainAddress = selected[0].attributes;
					var totalVolume = result.cubic.custbody_avt_ifs_total_volume;
					var weight = result.wight.total_weight; // 353.59;
					self.total_weight = weight;
					var entity = profilemodel.id;

					var shipmentIsCarton = self.total_weight / self.numberOfItems < 20;

					var carton = "T";
					if (!shipmentIsCarton) {
						carton = 'F';
					}

					model.fetch({
						async: true, data: {
							addr1: addr1,
							addr2: addr2,
							addr3: addr3,
							city: city,
							state: state,
							zip: zip,
							weight: weight,
							cubic: totalVolume,
							carton: carton
						}
					}
					).done(function (result) {

						var toParsebodyXML = result.bodyXML;
						var parser = new DOMParser();
						var xmlDocument = parser.parseFromString(toParsebodyXML, 'text/xml');
						var responseTable = xmlDocument.all[2]
						var resultSF = xmlDocument.all[3]
						var resultParsed = parser.parseFromString(resultSF.innerHTML, 'text/xml');
						var replaced = resultSF.innerHTML.replaceAll('&lt;', '<');
						var replacedFinal = replaced.replaceAll('&gt;', '>');
						//console.log(replacedFinal)
						var xmlDocument = parser.parseFromString(replacedFinal, 'text/xml');
						var elements = "";//xmlDocument.childNodes[0].childNodes[3].children;
						var qtyArray = [];

						elements = replacedFinal.split("<DeliveryOption>");
						for (var x = 0; x < elements.length; x++) {
							var current = elements[x];
							if(current && current.indexOf("<deliveryoptionresults>")==-1){
								if(current && current.indexOf('service')!=-1){
									var carriesService = current.split("<service>")[1].split("</service>")[0];
									var displayName = self.returnDisplayName(carriesService);
								}								
								if(current && current.indexOf('carriername')!=-1 && 
								current && current.indexOf('secondarypricing')!=-1 &&
								current && current.indexOf('primarypricing')!=-1 &&
								current && current.indexOf('optionid')!=-1){
									var objTable = {
										carriersName: current.split("<carriername>")[1].split("</carriername>")[0],
										carriesService: displayName,//current.split("<service>")[1].split("</service>")[0],
										GST: current.split("<secondarypricing>")[1].split("</secondarypricing>")[0],
										cost: current.split("<primarypricing>")[1].split("</primarypricing>")[0],
										displayName:displayName,
										key: current.split("<optionid>")[1].split("</optionid>")[0]
									}						
		
									qtyArray.push(objTable)
								}								
								
							}
							
						}

						qtyArray = qtyArray.sort(function (a, b) {
							return a.cost - b.cost
						})
						if (qtyArray.length >= 1) {
							var headers = ['Quote','Carrier Service', 'GST', 'Freight cost'];

							var tableSmart = document.createElement('table');
							tableSmart.id = "tableSmart";
							var theadSmart = document.createElement('thead');
							tableSmart.append(theadSmart);

							headers.forEach(function (element) {
								var thSmart = document.createElement('th');
								thSmart.textContent = element;
								theadSmart.append(thSmart);
							});

							for (var i = 0; i < qtyArray.length; i++) {

								var trSmart = document.createElement('tr');

								var checkboxSmart = document.createElement('input');
								checkboxSmart.type = 'radio';
								checkboxSmart.id = i;
								checkboxSmart.name = qtyArray[i].carriersName
								checkboxSmart.value = qtyArray[i].cost
								checkboxSmart.classList.add('select_shipping');

								var tdSmartCheck = document.createElement('td');
								tdSmartCheck.append(checkboxSmart);
								trSmart.append(tdSmartCheck);

								// var tdSmartName = document.createElement('td');
								// tdSmartName.textContent = qtyArray[i].carriersName
								// trSmart.append(tdSmartName);

								var tdSmartService = document.createElement('td');
								tdSmartService.textContent = qtyArray[i].carriesService;
								trSmart.append(tdSmartService);

								// var tdSmartDname = document.createElement('td');
								// tdSmartDname.textContent = qtyArray[i].displayName;
								// trSmart.append(tdSmartDname);

								var tdSmartGST = document.createElement('td');
								tdSmartGST.textContent = qtyArray[i].GST
								trSmart.append(tdSmartGST);

								var tdSmartCost = document.createElement('td');
								tdSmartCost.textContent = qtyArray[i].cost;
								trSmart.append(tdSmartCost);

								tableSmart.append(trSmart);

							}

							table = tableSmart;
							var container = document.getElementById('select-shipping');
							container.append(table);

						} else {
							var messageNoSmart = document.createElement('p');
							messageNoSmart.innerHTML = 'No Smart Freight options for this address.';
							messageNoSmart.style.padding = '6px';
							//messageNoSmart.style.background = '#ffd3d3';
							messageNoSmart.style.display = 'table';
							messageNoSmart.style.borderRadius = '10px';
							messageNoSmart.style.color = '#c72121';

							failTable = true;
							document.getElementsByClassName('module-rendered')[0].append(messageNoSmart);
						}

					})
					jQuery("#pickup-details").show();
				});
			}
			, removeDuplicates: function (originalArray, prop) {
				var newArray = [];
				var lookupObject = {};

				for (var i in originalArray) {
					lookupObject[originalArray[i][prop]] = originalArray[i];
				}

				for (i in lookupObject) {
					newArray.push(lookupObject[i]);
				}
				return newArray;
			}
			, setShipping: function (e) {
				e.preventDefault();
				var liveorder = LiveOrderModel.getInstance();
				var self = this;

				$('.select_shipping').prop('checked', false);
				var resultShipping = e.target.value;
				var textShipping = jQuery(e.target).parent().next('td').text();

				// if(resultShipping){
				// 	resultShipping = resultShipping.toString()
				// }
				//console.log(resultShipping);

				var obj = liveorder.get('options');
				obj.custbody_shipping_cost_sca = resultShipping;
				obj.custbody_shipping_method = textShipping;

				liveorder.set('options', obj);
				liveorder.save().done(function () {
					e.target.checked = true;
					liveorder.fetch().done(function () {
						self.enableContinue()
					})
				});


			},

			setFinalPriceTable: function (price) {
				var finalPrice = 0;
				var percentInt = parseFloat(SC.CONFIGURATION.KDSmartFreight.config);
				var percent = 0;
				if (!isNaN(percentInt)) {
					var percent = parseFloat(price * percentInt / 100);
				} else {
					var percent = parseFloat(price * 2 / 100);
				}
				finalPrice = percent + parseFloat(price);
				return finalPrice.toFixed(2);


			},


			enableContinue: function () {
				jQuery('.order-wizard-step-button-continue').removeAttr('disabled');
			},
			beforeShowContent: function beforeShowContent() {

			}
			//@method getContext @return Kodella.KDSmartFreight.KDSmartFreight.View.Context
			, getContext: function getContext() {
				this.checkInitLogic();

				jQuery('.order-wizard-step-button-continue').removeAttr('disabled');
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
define("Kodella.KDSmartFreight.KDSmartFreight.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDSmartFreight.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDSmartFreight.KDSmartFreight.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDSmartFreight/SuiteScript2/KDSmartFreight.Service.ss"
            ),
            true
        )
});
});



define(
	'Kodella.KDSmartFreight.KDSmartFreight'
	, [
		'Kodella.KDSmartFreight.KDSmartFreight.View'
		, 'Profile.Model'
		, 'Kodella.KDSmartFreight.KDSmartFreight.Model'
		, 'OrderWizard.Module.Shipmethod'
		, 'LiveOrder.Model'
		, 'underscore'
		, 'OrderWizard.Step'
		, 'OrderWizard.Module.Address'
		
	]
	, function (
		KDSmartFreightView
		, ProfileModel
		, KDSmartFreightModel
		, OrderWizardModuleShipmethod
		, LiveOrderModel
		, _
		, OrderWizardStep
		, OrderWizardModuleAddress
		
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
				///app/site/hosting/scriptlet.nl?script=1547&deploy=1&compid=3389566_SB1&h=e80c9cb5d77df4ec676c&f_recordid=&custbody_avt_ifs_apply_leastcost=F&custbody_avt_ifs_faster_is=F&entity=3185&custbody_avt_ifs_sender_business=6&custbody_avt_ifs_charge_to=1&custbody_avt_ifs_apply_leastcost=F&custbody_avt_ifs_faster_is=F&custbody_avt_ifs_sender_business=6&custbody_avt_ifs_shipcarrier=&custbody_avt_ifs_shipservice=&custbody_avt_ifs_con_date=&custbody_avt_ifs_con_date=&custbody_avt_ifs_user_defaults=&custbody_avt_ifs_accountno=&shipaddr1=2/11%20Blackly%20Row&shipaddr2=&shipcity=COCKBURN&shipstate=WA&shipzip=6164&shipphone=&custbody_avt_ifs_default_freight_type=&createdfrom=&subsidiary=2&location=12&nlapiGetRecordType=estimate&custbody_avt_ifs_total_packages=1&custbody_avt_ifs_total_weight=353.59&custbody_avt_ifs_total_volume=1.7249&custbody_avt_ifs_total_length=&custbody_avt_ifs_total_width=&custbody_avt_ifs_total_height=&custbody_avt_ifs_freight_type=&custbody_avt_ifs_total_packages_2=&custbody_avt_ifs_total_weight_2=&custbody_avt_ifs_total_volume_2=&custbody_avt_ifs_total_length_2=&custbody_avt_ifs_total_width_2=&custbody_avt_ifs_total_height_2=&custbody_avt_ifs_freight_type_2=&custbody_avt_ifs_total_packages_3=&custbody_avt_ifs_total_weight_3=&custbody_avt_ifs_total_volume_3=&custbody_avt_ifs_total_length_3=&custbody_avt_ifs_total_width_3=&custbody_avt_ifs_total_height_3=&custbody_avt_ifs_freight_type_3=&custbody_avt_ifs_total_packages_4=&custbody_avt_ifs_total_weight_4=&custbody_avt_ifs_total_volume_4=&custbody_avt_ifs_total_length_4=&custbody_avt_ifs_total_width_4=&custbody_avt_ifs_total_height_4=&custbody_avt_ifs_freight_type_4=
				/** @type {LayoutComponent} */
				var cart = container.getComponent('Cart');
				var checkout = container.getComponent('Checkout');
				var liveorder = LiveOrderModel.getInstance();
				
				OrderWizardModuleShipmethod.prototype.getContext = _.wrap(OrderWizardModuleShipmethod.prototype.getContext, function (fn) {
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					_.each(context.shippingMethods, function (method) {
						//method.name = shipCustomMethods[i].name;

						if (method.internalid == '78') {
							method.isActive = true;
							var liveorder = LiveOrderModel.getInstance();
							liveorder.set('shipmethod', method.internalid);
						}


					})
					return context;
				});

				try {
					var step1 = checkout.addStepsGroup(
						{
							"group":
							{
								"name": 'Shipping Options'
								, "url": 'shippingoptions'
								, "index": 2

							}
						});
					step1.done(function (data) {
						var step2 = checkout.addStep(
							{
								"step": {
									"name": 'Select Shipping Options'
									, "url": 'shippingoptions'
									, "isActive": function () { return true }
									, "group_name": 'Shipping Options'
									, "index": 3
								}
							}

						);
						step2.done(function (data) {

							var step = checkout.addModuleToStep(
								{
									step_url: 'shippingoptions'
									, module: {
										id: 'shippingOptions'
										, index: 99
										, classname: 'Kodella.KDSmartFreight.KDSmartFreight.View'
									}
								}
							);
							checkout.addModuleToStep(
								{
									step_url: 'shippingoptions'
									, module: {
										id: 'summaryCart'
										, index: 6
										, classname: 'OrderWizard.Module.CartSummary'
										, options: { container: '#wizard-step-content-right' }
									}
								}
							);
							checkout.addModuleToStep(
								{
									step_url: 'shippingoptions'
									, module: {
										id: 'summaryCart'
										, index: 6
										, classname: 'OrderWizard.Module.PromocodeForm'
										, options: { container: '#wizard-step-content-right' }
									}
								}
							);
							checkout.addModuleToStep(
								{
									step_url: 'shippingoptions'
									, module: {
										id: 'summaryCart'
										, index: 6
										, classname: 'OrderWizard.Module.CartItems.Ship'
										, options: { container: '#wizard-step-content-right' }
									}
								}
							);
						})

					})
				} catch (e) {
					console.log(e);
				}

				 var layout = container.getComponent('Layout');
				 layout.on("afterShowContent", function () {
						
					if (document.location.href.indexOf("shippingoptions") == -1) return;						
					jQuery('.order-wizard-step-button-continue').attr('disabled', 'disabled')

					
				})
			
				// _.extend(WizardView.prototype, {
				// 	//Initialize extended
				// 	submit: _.wrap(WizardView.prototype.submit, function initFunc(fn) {
				// 		// debugger
				// 	  fn.apply(this, Array.prototype.slice.call(arguments, 1));	
				// 	  var liveorder = LiveOrderModel.getInstance();
				// 	  if(jQuery("#defaultGroupExample1").prop("checked")){						
						
				// 		var obj = liveorder.get('options');
				// 		obj.custbody_shipping_method = "Customer Pickup (Seven Hills)";
				// 		obj.custbody_rfi_c_memo_internal = jQuery("#custbody_rfi_c_memo_internal").val();
				// 		liveorder.set('options', obj);
				// 		liveorder.set("isPickUp",true);
				// 	  }else{
				// 		var obj = liveorder.get('options');
				// 		obj.custbody_shipping_method = "";
				// 		obj.custbody_rfi_c_memo_internal = '';
				// 		liveorder.set('options', obj);
				// 		liveorder.set("isPickUp",false);
				// 	  }			 
					 
				// 	}),
				// });

				_.extend(OrderWizardStep.prototype, {
					submit: _.wrap(OrderWizardStep.prototype.submit, function (fn) {
					  var context = fn.apply(this, _.toArray(arguments).slice(1));
					
					  if(jQuery("#defaultGroupExample1")[0] && this.wizard.currentStep == 'shipping/address'){
						if(jQuery("#defaultGroupExample1").prop("checked")){						
						
							var obj = this.wizard.model.get("options")
							obj.custbody_shipping_method = "Customer Pickup (Seven Hills)";
							obj.custbody_kd_notes_from_customer = jQuery("#custbody_kd_notes_from_customer").val();
							this.wizard.model.set('options', obj);
							this.wizard.model.set("isPickUp",true);
						  }else{
							var obj = this.wizard.model.get("options")
							obj.custbody_shipping_method = "";					
							this.wizard.model.set('options', obj);
							this.wizard.model.set("isPickUp",false);
	
						  }	
					  }
					  				  
					  return context;
					}),
				  });

				var obj = OrderWizardModuleAddress.prototype.events;
				obj["click #defaultGroupExample1"] = "showSmart";	 
				obj["click #defaultGroupExample2"] = "hideSmart";
				obj['click [data-action="select"]'] = 'selectAddress',			
				OrderWizardModuleAddress.prototype.events = obj;

				_.extend(OrderWizardModuleAddress.prototype, {
					//Initialize extended
					showSmart: _.wrap(OrderWizardModuleAddress.prototype.showSmart, function showSmart(fn) {											
						jQuery("#memo-details").show(); 			 
					}),
					hideSmart: _.wrap(OrderWizardModuleAddress.prototype.showSmart, function showSmart(fn) {
						jQuery("#memo-details").hide();					 			 
					}),
					delay: function(){
						var timer = 0;
						return function(callback, ms){
						clearTimeout (timer);
						timer = setTimeout(callback, ms);
					   };
					  }(),

					selectAddress: function(e){
						var add = liveorder.attributes.addresses.models;
						const defalutShipAddress = add.filter((address)=>{
							return  address.get("defaultshipping") == "T";
						});
						const defalutBillAddress = add.filter((address)=>{
							return  address.get("defaultbilling") == "T";
						});
				var changedaddress = jQuery(e.target).data('id').toString();
					 if((defalutShipAddress.length >0 && (defalutShipAddress[0].id) !== changedaddress) || (defalutBillAddress.length >0 && (defalutBillAddress[0].id) !== changedaddress))
					 {
						var self = this;
						var kdsmart = new KDSmartFreightModel();
									kdsmart.save({ async: true}).done((response)=>{
										
										  jQuery('.wizard-content .alert-error').hide();
										  self.setAddress(
											  jQuery(e.target)
												  .data('id')
												  .toString()
										  );
										  // re render so if there is changes to be shown they are represented in the view
										  self.render();
										  // As we already set the address, we let the step know that we are ready
										  self.trigger('ready', true);
									})
						}
					}
				});
				OrderWizardModuleAddress.prototype.getContext = _.wrap(OrderWizardModuleAddress.prototype.getContext, function (fn) {
					var context = fn.apply(this, _.toArray(arguments).slice(1));					
					context.isPickUp = liveorder.get("isPickUp");
					return context;
				});
				
			}
		};
	});


};

extensions['Kodella.KDValidateFieldsLoginRegister.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDValidateFieldsLoginRegister/1.0.0/' + asset;
}

// @module Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister
define("Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister.View", [
  "kodella_kdvalidatefieldsloginregister_kdvalidatefieldsloginregister.tpl",

  "Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister.SS2Model",

  "Backbone",
], function (
  kodella_kdvalidatefieldsloginregister_kdvalidatefieldsloginregister_tpl,

  KDValidateFieldsLoginRegisterSS2Model,

  Backbone
) {
  "use strict";

  // @class Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister.View @extends Backbone.View
  return Backbone.View.extend({
    template:
      kodella_kdvalidatefieldsloginregister_kdvalidatefieldsloginregister_tpl,

    initialize: function (options) {
      var self = this;

      this.options.LoginRegisterPage.on(
        "beforeRegister",
        function (formFields) {
          // Unchecked checkboxes are not included in the data object, so we need to check they exist
          if (formFields.custentity_kd_customer_abn.trim().length === 0) {
            // All views have the ability to render error messages via ErrorManagement.js.
            // By default, they will automatically find the nearest alert-placeholder, so our template needs one.
            //self.showError(_.translate("ABN is required"));
          }
          if ($("#g-recaptcha-response").val() === "") {
            return jQuery.Deferred().reject();
          }
        }
      );
    },

    events: {},

    bindings: {},

    childViews: {},

    //@method getContext @return Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister.View.Context
    getContext: function getContext() {
      //@class Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister.View.Context
      this.message = this.message || "Hello World!!";
      return {
        message: this.message,
      };
    },
  });
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDValidateFieldsLoginRegister.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDValidateFieldsLoginRegister/SuiteScript2/KDValidateFieldsLoginRegister.Service.ss"
            ),
            true
        )
});
});


define("Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister", [
  "Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister.View",
], function (KDValidateFieldsLoginRegisterView) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      // using the 'Layout' component we add a new child view inside the 'Header' existing view
      // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
      // more documentation of the Extensibility API in
      // https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

      /** @type {LayoutComponent} */
      var LoginRegisterPage = container.getComponent("LoginRegisterPage");

      if (LoginRegisterPage) {
        LoginRegisterPage.addChildView("Register.CustomFields", function () {
          return new KDValidateFieldsLoginRegisterView({
            LoginRegisterPage: LoginRegisterPage,
          });
        });
      }
    },
  };
});


};

extensions['CA.MyAccountCustomization.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/MyAccountCustomization/1.0.0/' + asset;
}

// @module CA.MyAccountCustomization.RoleBasedMyAccount
define('CA.MyAccountCustomization.RoleBasedMyAccount.View'
,	[
	'ca_myaccountcustomization_rolebasedmyaccount.tpl'
	
	,	'CA.MyAccountCustomization.RoleBasedMyAccount.SS2Model'
	
	,	'Backbone'
	
	,'Header.Menu.MyAccount.View'

	,"MyAccountMenu"

	,"MenuTree.View"

	, "Backbone.View"

	,"Header.View"

	, "ProductDetails.Base.View"

	,"Profile.Model"

	, "Cart.Detailed.View"

	, "Utils"
	
    , "ProductList.Lists.View"
	
    ,"Backbone.Model"
	
    , "ProductList.ListDetails.View"
    ]
, function (
	ca_myaccountcustomization_rolebasedmyaccount_tpl
	
	,	RoleBasedMyAccountSS2Model
	
	,	Backbone
	
	,  HeaderMenuMyAccountView

	, myaccount

	, MenuTreeView

	, BackboneView

	, HeaderView

	, ProductDetailsBaseView

	, ProfileModel

	, CartDetailedView

	, Utils

    , ProductListListsView

    , BackboneModel

    , ProductListListDetailsView
)
{
    'use strict';

	_.extend(HeaderMenuMyAccountView.prototype, {

     getContext: _.wrap(HeaderMenuMyAccountView.prototype.getContext, function getContext(fn){
		var context = fn.apply(this, _.toArray(arguments).slice(1));
		    var role = this.options.application.role;
			MenuTreeView.prototype.render = _.wrap(MenuTreeView.prototype.render, function(...args){

			this.modifiedentries = this.backwardCompatibilitySanitize(
                 myaccount.MyAccountMenu.getInstance().getEntries() 
            );
			if(role == "purchasing"){
				   var menuitems = [];
				   var removeditem = ["home","billing","settings"];
				  _.each(this.modifiedentries, function(item){
					if(removeditem.includes(item.id)){

					}else{
						menuitems.push(item)
					}
				  })
			}
			else if(role == "sales"){	   
			   var menuitems = [];
                var removeditem = ["home","billing","settings"];
               _.each(this.modifiedentries, function(item){
                 if(removeditem.includes(item.id)){

                 }else{
                    menuitems.push(item)   
                 }
               })
               var removedsubentries = ["purchases","returns","reorderitems"];
               for(var i=0;i<menuitems.length;i++)
			   {
					if(menuitems[i].id == "orders"){
						console.log("test treee here", menuitems)
						var menuitemschildren = [];
						_.each(menuitems[i].children, function(child){
							if(removedsubentries.includes(child.id)){
		   
							}else{
								menuitemschildren.push(child)   
							}
						  })
						  menuitems[i].children = menuitemschildren;
					}
				}
			   
			}
			else {
				var menuitems = this.modifiedentries
			}

			this.fixedMenuItems = menuitems

			BackboneView.prototype.render.apply(this, args);
		
			})
			if(role !="fullaccess"){
				context.isToShow = false;
				context.isToShowpurchase = true;
				context.showCases = false;
				if(role == "sales"){
					context.isToShowpurchase = false;
				}
			}else{
				context.isToShow = true;
				context.isToShowpurchase = true;
				context.showCases = true;
			}
			return context;
        })
    }); 
	HeaderView.prototype.getContext = _.wrap(HeaderView.prototype.getContext, function (fn) {
		
        const profile = ProfileModel.getInstance();

        const is_loading = (!Utils.getPathFromObject(SC.CONFIGURATION, 'performance.waitForUserProfile', true) && (ProfileModel.getPromise().state() !== 'resolved'));

        const is_logged_in = (profile.get('isLoggedIn') === 'T' || (profile.get('isRecognized') === 'T' && SC.CONFIGURATION.get('header.showRecognizedShopper', true))) && profile.get('isGuest') === 'F';
            
		var context = fn.apply(this, _.toArray(arguments).slice(1));        
            
		context.islogin = !is_loading && is_logged_in;

        if(this.application.role == "sales")
		{

           context.showCart = false;

        }
        else{

           context.showCart = true;

        }

        return context;

	    });


	ProductDetailsBaseView.prototype.getContext = _.wrap(ProductDetailsBaseView.prototype.getContext, function (fn) {	

	var context = fn.apply(this, _.toArray(arguments).slice(1));		

	const item_model = this.model.get('item');
// @class ProductDetails.Base.View.Context
		return {
			// @property {Transaction.Line.Model} model
			model: this.model,
			// @property {String} pageHeader
			pageHeader: this.page_header,
			// @property {String} itemUrl
			itemUrl: item_model.get('_url') + this.model.getQuery(),
			// @property {Boolean} isItemProperlyConfigured
			isItemProperlyConfigured: item_model.isProperlyConfigured(),
			// @property {Boolean} isPriceEnabled
			isPriceEnabled: !ProfileModel.getInstance().hidePrices(),

			Toshowcart: (this.application.role == "sales")?false:true
		};

		return context;
	})
	CartDetailedView.prototype.getContext = _.wrap(CartDetailedView.prototype.getContext, function (fn) {	

		var context = fn.apply(this, _.toArray(arguments).slice(1));
		
		if(this.application.role == "sales"){
			context.toshowcart = false;
		}else{
			context.toshowcart = true;
		}
		return context;
	})	
	
	ProductListListDetailsView.prototype.getContext = _.wrap(ProductListListDetailsView.prototype.getContext, function(fn){
		
            var context = fn.apply(this, _.toArray(arguments).slice(1));
			
            if(this.parentView.parentView.application.role == "sales"){
                context.toshow = false;
            }else{
                context.toshow = true;
            }
            return context;
    });
		
});


// Model.js
// -----------------------
// @module Case
define("CA.MyAccountCustomization.RoleBasedMyAccount.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/RoleBasedMyAccount.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CA.MyAccountCustomization.RoleBasedMyAccount.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/RoleBasedMyAccount/SuiteScript2/RoleBasedMyAccount.Service.ss"
            ),
            true
        )
});
});



define(
	'CA.MyAccountCustomization.RoleBasedMyAccount'
,   [
		'CA.MyAccountCustomization.RoleBasedMyAccount.View'
	,	'CA.MyAccountCustomization.RoleBasedMyAccount.Model'	
	,	'ProductList.BulkActions.View'
	]
,   function (
		RoleBasedMyAccountView
	,	RoleBasedMyAccountModel	
	, 	ProductListBulkActionsView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (application)
		{
			var newmodel = new RoleBasedMyAccountModel();
			 var promise = newmodel.fetch()
			.then((result) => {
			 if (_.has(result, 'role') && _.has(result, 'user')) {
				 if(result.role == 1149)
					 application.role = 'sales';
				 else if(result.role == 1150)
					 application.role = 'purchasing';
				 else
					 application.role = 'fullaccess';
			 
			 }
			}); 
			application.waitForPromise(promise);
			
			ProductListBulkActionsView.prototype.getContext = _.wrap(ProductListBulkActionsView.prototype.getContext, function (fn) {
				
				var context = fn.apply(this, _.toArray(arguments).slice(1));
				
				if(application.role == "sales")
				{		
					context.toshowaddtocart = false
	
				}else{
	
					context.toshowaddtocart = true
				}		
				return context;
			});

		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["CA.checkoutCustomization.RoleBasedCheckout.View","CA.checkoutCustomization.RoleBasedCheckout.Model","CA.checkoutCustomization.RoleBasedCheckout.SS2Model","Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View","Kodella.KDChangeStoreLocations.KDChangeStoreLocations.Model","Kodella.KDChangeStoreLocations.KDChangeStoreLocations.SS2Model","Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.View","Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.Model","Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation.SS2Model","Kodella.KDFeeCreditCard.KDFeeCreditCard.View","Kodella.KDFeeCreditCard.KDFeeCreditCard.Model","Kodella.KDFeeCreditCard.KDFeeCreditCard.SS2Model","Kodella.KDGlobalExtension.KDGlobalExtension.View","Kodella.KDGlobalExtension.KDGlobalExtension.Model","Kodella.KDGlobalExtension.KDGlobalExtension.SS2Model","Kodella.KDShowStockAvailable.KDShowStockAvailable.View","Kodella.KDShowStockAvailable.KDShowStockAvailable.Model","Kodella.KDShowStockAvailable.KDShowStockAvailable.SS2Model","Kodella.KDSmartFreight.KDSmartFreight.View","Kodella.KDSmartFreight.KDSmartFreight.Model","Kodella.KDSmartFreight.KDSmartFreight.SS2Model","Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister.View","Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister.Model","Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister.SS2Model","CA.MyAccountCustomization.RoleBasedMyAccount.View","CA.MyAccountCustomization.RoleBasedMyAccount.Model","CA.MyAccountCustomization.RoleBasedMyAccount.SS2Model"];
try{
	extensions['CA.checkoutCustomization.1.0.0']();
	SC.addExtensionModule('CA.checkoutCustomization.RoleBasedCheckout');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDChangeStoreLocations.1.0.0']();
	SC.addExtensionModule('Kodella.KDChangeStoreLocations.KDChangeStoreLocations');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDExtraRegisterValidation.1.0.0']();
	SC.addExtensionModule('Kodella.KDExtraRegisterValidation.KDExtraRegisterValidation');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDFeeCreditCard.1.0.0']();
	SC.addExtensionModule('Kodella.KDFeeCreditCard.KDFeeCreditCard');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDGlobalExtension.1.0.0']();
	SC.addExtensionModule('Kodella.KDGlobalExtension.KDGlobalExtension');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDShowStockAvailable.1.0.1']();
	SC.addExtensionModule('Kodella.KDShowStockAvailable.KDShowStockAvailable');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDSmartFreight.1.0.0']();
	SC.addExtensionModule('Kodella.KDSmartFreight.KDSmartFreight');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDValidateFieldsLoginRegister.1.0.0']();
	SC.addExtensionModule('Kodella.KDValidateFieldsLoginRegister.KDValidateFieldsLoginRegister');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.MyAccountCustomization.1.0.0']();
	SC.addExtensionModule('CA.MyAccountCustomization.RoleBasedMyAccount');
}
catch(error)
{
	console.error(error);
}

