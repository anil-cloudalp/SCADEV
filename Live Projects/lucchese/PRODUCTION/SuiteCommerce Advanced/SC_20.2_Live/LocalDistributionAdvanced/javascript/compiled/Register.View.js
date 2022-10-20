define("Register.View", ["require", "exports", "underscore", "register_custom.tpl", "Utils", "jQuery", "Backbone.View", "Configuration", "GlobalViews.States.View", "GlobalViews.CountriesDropdown.View", "Backbone.FormView", "Register.Model", "GlobalViews.Message.View", "Header.Simplified.View", "Footer.Simplified.View"], function (require, exports, _, register_tpl, Utils, jQuery, BackboneView, Configuration_1, GlobalViewsStatesView, CountriesDropdownView, BackboneFormView, RegisterModel, GlobalViews_Message_View_1, HeaderSimplifiedView, Footer_Simplified_View_1) {
    "use strict";
    // @module Register.View @extends Backbone.View
    var RegisterView = BackboneView.extend({
        template: register_tpl,
        title: Utils.translate('Register'),
        page_header: Utils.translate('Register'),
        attributes: {
            id: 'register-custom',
            class: 'register-custom-page'
        },
        events: {
            'change [data-action="selectcountry"]': 'updateStates',
            'blur [data-action="inputphone"]': 'formatPhone',
            'submit form': 'submitForm' //'saveForm'
        },
        bindings: {
            '[name="firstname"]': 'firstname',
            '[name="lastname"]': 'lastname',
            '[name="company"]': 'company',
            '[name="title"]': 'title',
            '[name="city"]': 'city',
            '[name="country"]': 'country',
            '[name="entityid"]': 'entityid',
            '[name="phone"]': 'phone',
            '[name="email"]': 'email',
            '[name="zip"]': 'zip'
        },
        initialize: function () {
            this.model = new RegisterModel();
            BackboneFormView.add(this);
            this.model.on('save', _.bind(this.redirect, this));
        },
        submitForm: function (e, model, props) {
            e.preventDefault();
            var response = grecaptcha.getResponse();
            var captchaError = false;
            if (response.length == 0) {
                captchaError = true;
                if ($('#form-recaptcha').parent().find('p[data-validation-error="block"]').length == 0) {
                    $('#form-recaptcha').parent().attr('data-validation-error', '');
                    $('#form-recaptcha').parent().append('<p data-validation-error="block">' + 'Please verify that you are not robot</p>');
                }
            }
            else {
                captchaError = false;
                if ($('#form-recaptcha').parent().find('[data-validation-error="block"]').length > 0) {
                    $('#form-recaptcha').parent().removeAttr('data-validation-error');
                    $('#form-recaptcha').parent().find('[data-validation-error="block"]').remove();
                }
            }
            if (!captchaError)
                this.saveForm(e, model, props);
        },
        redirect: function (_context, response) {
            var $alert_warn = this.$('[data-type="alert-placeholder"]');
            $alert_warn.html('');
            var $form = this.$('form.registration-fields');
            if (response) {
                if (_.has(response, 'error') && response.error == 'USER_EXISTS') {
                    $alert_warn.html(new GlobalViews_Message_View_1.GlobalViewsMessageView({
                        message: 'User already exist.',
                        type: 'error',
                        closable: true
                    }).render().$el);
                }
                if (_.has(response, 'recordId')) {
                    $form[0].reset();
                    $alert_warn.html(new GlobalViews_Message_View_1.GlobalViewsMessageView({
                        message: "Your request has been submitted successfully.<br/>Please contact support for login details.",
                        type: 'success',
                        closable: true
                    }).render().$el);
                }
            }
            else {
                $alert_warn.html(new GlobalViews_Message_View_1.GlobalViewsMessageView({
                    message: 'Something went wrong,please try again later',
                    type: 'error',
                    closable: true
                }).render().$el);
            }
        },
        formatPhone: function (e) {
            var $target = jQuery(e.target);
            $target.val(_($target.val()).formatPhone());
        },
        updateStates: function (e) {
            var statesView = this.getChildViewInstance('StatesView');
            statesView.options.selectedCountry = this.$(e.currentTarget).val();
            statesView.render();
        },
        // @property {Object} childViews
        childViews: {
            CountriesDropdown: function () {
                return new CountriesDropdownView({
                    countries: Configuration_1.Configuration.get('siteSettings.countries'),
                    selectedCountry: this.selected_country
                });
            },
            StatesView: function () {
                return new GlobalViewsStatesView({
                    countries: Configuration_1.Configuration.get('siteSettings.countries'),
                    selectedCountry: this.selected_country,
                    selectedState: this.model.get('state')
                });
            }
        },
        getHeaderView: function () {
            // We've got to disable passwordProtectedSite feature if customer registration is disabled.
            if (Configuration_1.Configuration.getRegistrationType() !== 'disabled' &&
                SC.ENVIRONMENT.siteSettings.siteloginrequired === 'T') {
                return HeaderSimplifiedView;
            }
        },
        getFooterView: function () {
            // We've got to disable passwordProtectedSite feature if customer registration is disabled.
            if (Configuration_1.Configuration.getRegistrationType() !== 'disabled' &&
                SC.ENVIRONMENT.siteSettings.siteloginrequired === 'T') {
                return Footer_Simplified_View_1.FooterSimplifiedView;
            }
        },
        loadRecaptcha: function () {
            var url = 'https://www.google.com/recaptcha/api.js';
            this.captchaPromise = jQuery.getScript(url);
        },
        render: function () {
            BackboneView.prototype.render.apply(this, arguments);
            this.loadRecaptcha();
        },
        getContext: function () {
            return {
                isNotCmsEdit: (window.parent.location.href.indexOf("cms") == -1) ? true : false,
                sitekey: SC.CONFIGURATION.recaptcha.sitekey || ""
            };
        }
    });
    return RegisterView;
});

//# sourceMappingURL=Register.View.js.map
