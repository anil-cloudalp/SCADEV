
// @module CloudAlp.ShoppingCustomization.ShoppingCustomizationProductsQuick
define('CloudAlp.ShoppingCustomization.BecomeaDealer.View'
  , [
    'cloudalp_shoppingcustomization_become_a_dealer.tpl'
    , 'CloudAlp.ShoppingCustomization.ShoppingCustomization.Model'
    , 'Profile.Model'
    , "Utils"
    , 'Backbone'
    , 'SC.Configuration'
  ]
  , function (
    cloudalp_shoppingcustomization_become_a_dealer_tpl

    , ShoppingCustomizationModel
    , ProfileModel
    , Utils
    , Backbone
    , Configuration
  ) {
    return Backbone.View.extend({

      template: cloudalp_shoppingcustomization_become_a_dealer_tpl

      , initialize: function (options) {

        /*  Uncomment to test backend communication with an example service
          (you'll need to deploy and activate the extension first)
        */

        // this.model = new ShoppingCustomizationModel();
        // var self = this;
        // this.model.fetch().done(function(result) {
        // 	self.message = result.message;
        // 	self.render();
        // });
      }

      , events: {
        'click [data-action="become-a-dealer-submit"]': 'submit',
        'blur [data-action="email-address"]': "emailid",
        'blur [data-action="firstname"]': "firstname",
        'blur [data-action="lastname"]': "lastname",
        'blur [data-action="company"]': "company",
        'blur [data-action="phone"]': "phone"
      }

      , bindings: {
      }

      , childViews: {

      }
      , validateEmails: function (email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(email)) {
          return false;
        } else {
          return true;
        }
      }
      , emailid: function (e) {
        var self = this;
        let $email = $(e.target).val();
        let msg = self.validateEmails($email);
        if (!msg) {
          $('.error-msg-email').addClass("message-error").html(`	Please enter a valid email address`);
        } else {
          $('.error-msg-email').removeClass("message-error").html('');
        }

      }
      , firstname: function (e) {
        let $firstname = $(e.target).val();
        if (_.isEmpty($firstname)) {
          $('.error-msg-fname').addClass("message-error").html(`	Please enter a first name`);
        } else {
          $('.error-msg-fname').removeClass("message-error").html('');
        }

      }
      , lastname: function (e) {
        let $lastname = $(e.target).val();
        if (_.isEmpty($lastname)) {
          $('.error-msg-lname').addClass("message-error").html(`	Please enter a last name`);
        } else {
          $('.error-msg-lname').removeClass("message-error").html('');
        }

      }
      , company: function (e) {
        let $company = $(e.target).val();
        if (_.isEmpty($company)) {
          $('.error-msg-company').addClass("message-error").html(`Please enter a company name`);
        } else {
          $('.error-msg-company').removeClass("message-error").html('');
        }

      }
      , phone: function (e) {
        var $phone = $(e.target).val();
        var phoneValidt = Utils.validatePhone($phone);
        if (!_.isEmpty(phoneValidt)) {
          $('.error-msg-phone').addClass("message-error").html(phoneValidt);
        } else {
          $('.error-msg-phone').removeClass("message-error").html('');
        }
      }
      , submit: function (e) {
        e.preventDefault();
        var model = new ShoppingCustomizationModel();
        var isValidData = true;
        var submitMsg = Configuration.get('BecomeaDealer').msg;
        var data = $(e.target).closest('form').serializeObject();
        data.author = Configuration.get('BecomeaDealer').eAuthor;
        data.recipient = Configuration.get('BecomeaDealer').eRecipient;
        data.subject = Configuration.get('BecomeaDealer').subject;
        if (_.isEmpty(data.firstname)) { $('.error-msg-fname').addClass("message-error").html(`	Please enter a first name`); isValidData = false; }
        if (_.isEmpty(data.lastname)) { $('.error-msg-lname').addClass("message-error").html(`	Please enter a last name`); isValidData = false; }
        if (_.isEmpty(data.company)) { $('.error-msg-company').addClass("message-error").html(`	Please enter a company name`); isValidData = false; }
        if (_.isEmpty(data.email)) { $('.error-msg-email').addClass("message-error").html(`Please enter a valid email address`); isValidData = false; }
        if (_.isEmpty(data.phone)) { $('.error-msg-phone').addClass("message-error").html(Utils.validatePhone(data.phone)); isValidData = false; }
        if (isValidData) {
          var alertMessage = '<div class="global-views-message global-views-message-success alert" role="alert">'
            + '<div class="global-views-message global-views-message-success alert" role="alert">'
            + '<div>' + submitMsg + '</div>'
            + '<button class="global-views-message-button" data-action="close-message" type="button" data-dismiss="alert">×</button>'
            + '</div>';
          model.save(data, {
            success: function (model, response) {
              var formReset = $('[name="become-a-dealer"]')[0];
              if (response.status == true) {
                formReset.reset();
                $('.status-form-msg').html(alertMessage);
              }
            }
          });
        }

      }

      , getContext: function getContext() {
        return {};
      }
    });
  });
