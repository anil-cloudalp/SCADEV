/// <amd-module name="ContactUsForm.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
define("ContactUsForm.View", ["require", "exports", "underscore", "contact_us_form.tpl", "Backbone.View", "CustomModules.Model", "Backbone.FormView"], function (require, exports, _, contact_us_form_tpl, BackboneView, CustomModulesModel, BackboneFormView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: contact_us_form_tpl,
        title: 'Contact Form',
        getBreadcrumbPages: function () {
            return {
                text: this.title,
                href: ''
            };
        },
        events: {
            'submit form': 'createContactLead',
            'blur .contact-us-field': 'blockErr'
        },
        initialize: function (option) {
            this.model = new CustomModulesModel();
            BackboneFormView.add(this);
        },
        blockErr: function (e) {
            var thisEl = $(e.currentTarget);
            var self = this;
            if (thisEl.attr('data-label')) {
                if (thisEl.val()) {
                    if (thisEl.parent().find('[data-validation-error="block"]').length > 0) {
                        thisEl.parent().removeAttr('data-validation-error');
                        thisEl.parent().find('[data-validation-error="block"]').remove();
                    }
                }
                else {
                    if (thisEl.parent().find('p[data-validation-error="block"]').length == 0) {
                        thisEl.parent().attr('data-validation-error', '');
                        thisEl.parent().append('<p data-validation-error="block">' + thisEl.attr('data-label') + ' is required.</p>');
                    }
                }
            }
        },
        createContactLead: function (e) {
            e.preventDefault();
            this.error = false;
            var contactFields = {};
            var self = this;
            $('.contact-us-field').each(function () {
                if ($(this).val() == '' || $(this).val() == null) {
                    if ($(this).attr('data-label')) {
                        self.error = true;
                        $(this).trigger('blur');
                    }
                }
                else {
                    contactFields[$(this).attr('id')] = $(this).val();
                }
            });
            if (!this.error) {
                this.model.set('contactFields', contactFields);
                this.model.set('urlFragment', '/contact-modal');
                var self = this, res = [], promise = this.saveForm(e);
                if (promise) {
                    self.promise = promise;
                    promise.fail(function (jqXhr) {
                        jqXhr.preventDefault = true;
                    }).done().always(_.bind(self.render, self));
                }
            }
        },
        getContext: function () {
            var isError = false, response = '', isResponse = false;
            if (this.promise) {
                if (this.promise.responseJSON.hasOwnProperty('id')) {
                    response = 'Your application is successfully sent.';
                    isError = false;
                    isResponse = true;
                }
                else {
                    response = 'Something went wrong! application could not sent.';
                    isError = true;
                    isResponse = true;
                }
            }
            return {
                isError: isError,
                response: response,
                isResponse: isResponse
            };
        }
    });
    return CustomView;
});

//# sourceMappingURL=ContactUsForm.View.js.map
