/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Account
// ----------
// Handles account creation, login, logout and password reset
// module Account
define('Account.Model', [
    'SC.Model',
    'Application',
    'SC.Models.Init',
    'Profile.Model',
    'LiveOrder.Model',
    'Address.Model',
    'CreditCard.Model',
    'SiteSettings.Model',
    'underscore'
], function(
    SCModel,
    Application,
    ModelsInit,
    Profile,
    LiveOrder,
    Address,
    CreditCard,
    SiteSettings,
    _
) {
    // @class Account.Model Defines the model used by the all Account related services.
    // @extends SCModel
    return SCModel.extend({
        name: 'Account',

        // @method login
        // @param {String} email
        // @param {String} password
        // @param {Boolean} redirect
        // @returns {Account.Model.Attributes} ret touchpoints and user profile data
        login: function(email, password, redirect) {
            ModelsInit.session.login({
                email: email,
                password: password
            });

            const user = Profile.get();
            user.isLoggedIn = ModelsInit.session.isLoggedIn2() ? 'T' : 'F';
            user.isRecognized = ModelsInit.session.isRecognized() ? 'T' : 'F';

            const ret = {
                touchpoints: ModelsInit.session.getSiteSettings(['touchpoints']).touchpoints,
                user: user
            };

            if (!redirect) {
                const Environment = Application.getEnvironment(request);
                const language = (Environment && Environment.currentLanguage) || {};
                language.url =
                    (language.locale &&
                        ModelsInit.session.getAbsoluteUrl(
                            '/languages/' + language.locale + '.js'
                        )) ||
                    '';

                _.extend(ret, {
                    cart: LiveOrder.get(),
                    address: Address.list(),
                    creditcard: CreditCard.list(),
                    language: language,
                    currency: (Environment && Environment.currentCurrency) || ''
                });
            }

            // New record to return
            // @class Account.Model.Attributes
            // @property {Array<Object>} touchpoints
            // @property {Profile.Model} user
            // @property {LiveOrder.Model.Data} cart
            // @property {Array<Address.Model.Attributes>} address
            // @property {Array<Address.Model.Attributes>} creditcard
            // @property {Object} language
            // @property {Object} currency
            // @class Account.Model
            return ret;
        },

        // @method forgotPassword
        // @param {String} email
        // @returns {Boolean} success
        forgotPassword: function(email) {
            try {
                // this API method throws an exception if the email doesn't exist
                // 'The supplied email has not been registered as a customer at our Web store.'
                ModelsInit.session.sendPasswordRetrievalEmail2(email);
            } catch (e) {
                const error = Application.processError(e);
                // if the customer failed to log in previously
                // the password retrieval email is sent but an error is thrown
                if (error.errorCode !== 'ERR_WS_CUSTOMER_LOGIN') {
                    throw e;
                }
            }

            return {
                success: true
            };
        },

        // @method resetPassword
        // @param {Object} params
        // @param {String} password
        // @returns {Boolean} success
        resetPassword: function(params, password) {
            if (!ModelsInit.session.doChangePassword(params, password)) {
                throw new Error('An error has occurred');
            } else {
                return {
                    success: true
                };
            }
        },

        // @method registerAsGuest
        // @param {Object} user
        // @return {Account.Model.Attributes}
        registerAsGuest: function(user) {
            const site_settings = SiteSettings.get();

            if (site_settings.registration.companyfieldmandatory === 'T') {
                user.companyname = 'Guest Shopper';
            }

            ModelsInit.session.registerGuest(user);

            user = Profile.get();
            user.isLoggedIn = ModelsInit.session.isLoggedIn2() ? 'T' : 'F';
            user.isRecognized = ModelsInit.session.isRecognized() ? 'T' : 'F';

            return {
                touchpoints: ModelsInit.session.getSiteSettings(['touchpoints']).touchpoints,
                user: user,
                cart: LiveOrder.get(),
                address: Address.list(),
                creditcard: CreditCard.list()
            };
        },

        // @method register
        // @param {UserData} user_data
        // @param {Account.Model.Attributes} user_data
        register: function(user_data) {
            // var customer = ModelsInit.getCustomer();
            const customfields = {};
            for (const property in user_data) {
                if (property.substring(0, 10) == 'custentity') {
                    customfields[property] = user_data[property];
                }
				
				if(property == 'user_name'){
					customfields['custentity_appf_username'] = user_data[property];
				}
				if(property == 'paidforby'){
					customfields['custentity_customer_pays_as'] = user_data[property];
				}
				if(property == 'customertype'){
					customfields['custentity_npo_constituent_type'] = user_data[property];
				}
				if(property == 'category'){
					customfields['custentity_appf_custom_org_type'] = user_data[property];
				}
				if(property == 'paidforcity'){
					customfields['custentity_appf_org_city'] = user_data[property];
				}
				if(property == 'paidforstate'){
					customfields['custentity_appf_org_state'] = user_data[property];
				}
				if(property == 'paidfortitle'){
					customfields['custentity_appf_salutation_title'] = user_data[property];
				}
            }

            if (ModelsInit.customer.isGuest()) {
                const guest_data = ModelsInit.customer.getFieldValues();

                ModelsInit.customer.setLoginCredentials({
                    internalid: guest_data.internalid,
                    email: user_data.email,
                    password: user_data.password
                });

                ModelsInit.session.login({
                    email: user_data.email,
                    password: user_data.password
                });
				
				ModelsInit.customer.addAddress({
					addressee: String(user_data.firstname + ' ' + user_data.lastname)
				,	addr1: user_data.addr
				,	addr2: user_data.address2
				,	city: user_data.city
				,	state: user_data.state 
				,	country: user_data.country 
				,	zip: user_data.zipcode 
				,	phone: user_data.phone
				,	attention: (user_data.paidforby == '2')? user_data.paidfororganization : user_data.attention
				,	defaultshipping : 'T'
                ,   defaultbilling : 'T'
				});
					
                if (Object.keys(customfields).length) {
                    ModelsInit.customer.updateProfile({
                        internalid: guest_data.internalid,
                        firstname: user_data.firstname,
                        lastname: user_data.lastname,
                        companyname: user_data.paidfororganization, //user_data.company,
						phoneinfo: {phone: user_data.phone},
                        emailsubscribe:
                            user_data.emailsubscribe && user_data.emailsubscribe !== 'F'
                                ? 'T'
                                : 'F',
                        customfields: customfields
                    });
                } else {
                    ModelsInit.customer.updateProfile({
                        internalid: guest_data.internalid,
                        firstname: user_data.firstname,
                        lastname: user_data.lastname,
                        companyname: user_data.paidfororganization, //user_data.company,
						phoneinfo: {phone: user_data.phone},
                        emailsubscribe:
                            user_data.emailsubscribe && user_data.emailsubscribe !== 'F' ? 'T' : 'F'
                    });
                }
            } else {
                user_data.emailsubscribe =
                    user_data.emailsubscribe && user_data.emailsubscribe !== 'F' ? 'T' : 'F';
                const result = ModelsInit.session.registerCustomer({
                    firstname: user_data.firstname,
                    lastname: user_data.lastname,
                    companyname: user_data.paidfororganization, //user_data.company,
                    email: user_data.email,
                    password: user_data.password,
                    password2: user_data.password2,
                    emailsubscribe:
                        user_data.emailsubscribe && user_data.emailsubscribe !== 'F' ? 'T' : 'F'
                });
				
				ModelsInit.customer.addAddress({
					addressee: String(user_data.firstname + ' ' + user_data.lastname)
				,	addr1: user_data.addr
				,	addr2: user_data.address2
				,	city: user_data.city
				,	state: user_data.state 
				,	country: user_data.country 
				,	zip: user_data.zipcode 
				,	phone: user_data.phone
				,	attention: (user_data.paidforby == '2')? user_data.paidfororganization : user_data.attention
				,	defaultshipping : 'T'
				,   defaultbilling : 'T'
				});
				
                if (Object.keys(customfields).length && result.customerid) {
                    ModelsInit.customer.updateProfile({
                        internalid: result.customerid,
						phoneinfo: {phone: user_data.phone},
                        customfields: customfields
                    });
                }
            }

            const user = Profile.get();
            user.isLoggedIn = ModelsInit.session.isLoggedIn2() ? 'T' : 'F';
            user.isRecognized = ModelsInit.session.isRecognized() ? 'T' : 'F';

            return {
                touchpoints: ModelsInit.session.getSiteSettings(['touchpoints']).touchpoints,
                user: user,
                cart: LiveOrder.get(),
                address: Address.list(),
                creditcard: CreditCard.list()
            };
        }
    });
});

// @class UserData
// @property {String} email
// @property {String} password
// @property {String} password2
// @property {String} firstname
// @property {String} lastname
// @property {String} company
// @property {String} emailsubscribe T or F
