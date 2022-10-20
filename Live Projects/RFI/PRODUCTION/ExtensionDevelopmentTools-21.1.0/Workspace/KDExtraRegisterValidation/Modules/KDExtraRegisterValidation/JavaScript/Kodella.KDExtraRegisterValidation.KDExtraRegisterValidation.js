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
