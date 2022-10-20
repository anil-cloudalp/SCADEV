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
