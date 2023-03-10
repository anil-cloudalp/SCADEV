/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="CheckoutSkipLogin"/>

/*
@module CheckoutSkipLogin
Checkout Skip Login mode. The Checkout Skip Login is a feature that
is disabled by default and can be enabled by setting property checkoutApp.skipLogin
to true in backend.configuration.js file.

Basically for implementing skip login what we are doing is
overriding the ```save()``` method of the following models:
```LiveOrderModel```, ```AddressModel```, ```CreditCardModel``` and	```ProfileModel```.

The objective is to first call register-guest service and only then
call the real save() so the operation is made with a guest session.
*/
import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';
import { AddressModel } from '../../../Commons/Address/JavaScript/Address.Model';
import { PaymentMethodModel } from '../../PaymentMethod/JavaScript/PaymentMethod.Model';

import AccountRegisterAsGuestModel = require('../../Account/JavaScript/Account.RegisterAsGuest.Model');
import LiveOrderModel = require('../../../Commons/LiveOrder/JavaScript/LiveOrder.Model');


let promise_guest = null;

export function mountToApp(application) {
    const { checkoutApp } = application.getConfig();
    // do nothing if the mode is disabled
    if (!checkoutApp.skipLogin) {
        return;
    }

    // this function is called only if skip login mode is enabled
    const registerUserAsGuest = function registerUserAsGuest() {
        const promise = jQuery.Deferred();
        const profile_model = ProfileModel.getInstance();

        if (profile_model.get('isGuest') === 'F' && profile_model.get('isLoggedIn') === 'F') {
            const checkout_step = application.getLayout().currentView.currentStep;

            if (checkout_step) {
                checkout_step.disableNavButtons();
            }

            new AccountRegisterAsGuestModel().save().done(function(data) {
                const skip_login_dont_update_profile = profile_model.get(
                    'skipLoginDontUpdateProfile'
                );
                const current_view = application.getLayout().currentView;

                if (skip_login_dont_update_profile && data.user) {
                    _.each(skip_login_dont_update_profile, function(attr: any) {
                        delete data.user[attr];
                    });
                }

                if (data.user) {
                    profile_model.set(data.user);
                }

                current_view.wizard.options.profile = profile_model;

                if (data.touchpoints) {
                    application.setConfig('siteSettings.touchpoints', data.touchpoints);
                }

                promise.resolve();

                if (checkout_step) {
                    checkout_step.enableNavButtons();
                }

                current_view.$('[data-action="skip-login-message"]').remove();
            });
        } else {
            promise.resolve();
        }
        return promise;
    };

    // add 'this.application' to models that doesn't have it.
    AddressModel.prototype.application = application;
    PaymentMethodModel.prototype.application = application;
    ProfileModel.prototype.application = application;

    // wrap save() method to LiveOrderModel, AddressModel and CreditCardModel
    const wrapperCheckoutSkipLogin = function wrapperCheckoutSkipLogin(superFn) {
        const self = this;
        const super_arguments = Array.prototype.slice.apply(arguments, [1, arguments.length]);
        const promise: any = jQuery.Deferred();

        if (!promise_guest) {
            promise_guest = registerUserAsGuest();
        }

        let result;
        promise_guest.done(function() {
            result = superFn.apply(self, super_arguments);

            if (result) {
                result
                    .done(function() {
                        promise.resolve.apply(result, arguments);
                    })
                    .fail(function() {
                        promise.reject.apply(result, arguments);
                    });
            } else {
                // Notify future promises that a front end validation
                // took place and no promise is returned
                promise.frontEndValidationError = true;
                promise.reject.apply(result, super_arguments);
            }
        });

        _(promise).extend({
            error: function() {
                return this;
            },
            success: function() {
                return this;
            },
            abort: () => {
                promise_guest.done(() => {
                    if (result) {
                        result.abort();
                    }
                });
            }
        });

        return promise;
    };

    // Site Builder cart is in Checkout :/ don't wrap if in shopping
    if (Utils.isInCheckout()) {
        LiveOrderModel.prototype.save = _.wrap(
            LiveOrderModel.prototype.save,
            wrapperCheckoutSkipLogin
        );
    }

    AddressModel.prototype.save = _.wrap(AddressModel.prototype.save, wrapperCheckoutSkipLogin);

    PaymentMethodModel.prototype.save = _.wrap(
        PaymentMethodModel.prototype.save,
        wrapperCheckoutSkipLogin
    );

    ProfileModel.prototype.save = _.wrap(ProfileModel.prototype.save, wrapperCheckoutSkipLogin);
}
