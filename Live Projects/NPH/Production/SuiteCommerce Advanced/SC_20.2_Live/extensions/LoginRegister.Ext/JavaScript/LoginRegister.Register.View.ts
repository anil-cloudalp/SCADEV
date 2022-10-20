/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="LoginRegister.Register.View"/>

import * as _ from 'underscore';
import * as register_tpl from 'login_register_register.tpl';
import { Loggers } from '../../../Commons/Loggers/JavaScript/Loggers';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';

import AccountRegisterModel = require('../../../Advanced/Account/JavaScript/Account.Register.Model');
import Tracker = require('../../../Commons/Tracker/JavaScript/Tracker');
import LiveOrderModel = require('../../../Commons/LiveOrder/JavaScript/LiveOrder.Model');
import BackboneFormView = require('../../../Commons/Backbone.FormView/JavaScript/Backbone.FormView');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');

import GlobalViewsStatesView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.States.View');
import CountriesDropdownView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.CountriesDropdown.View');
import './captcha';

declare var $:any;

// @class LoginRegister.Register.View @extend BackboneView
const LoginRegisterRegisterView: any = BackboneView.extend({
    template: register_tpl,

    attributes: {
        id: 'register'
    },

    title: Utils.translate('Register'),

    events: {
			'submit form': 'submitForm'
		,	'change [name="country"]': 'updateStates'
		,	'blur [name="state"]': 'removeErr'
		,	'change [name="paidforby"]': 'paidForByInputs'
		,	'blur [name="captcha_text"]': 'validateCaptcha'
		,	'click .refresh-btn': 'generateCaptcha'
		,	'blur [name="phone"]': 'formatPhone'
    },
	formatPhone: function(e: any) {
        const $target = jQuery(e.target);
        $target.val((<any>_($target.val())).formatPhone());
    },
	generateCaptcha: function(e)
	{
		e.stopPropagation();
		this.captcha.generate();
	},
	validateCaptcha: function(e)
	{	
		var thisEl = $(e.currentTarget);
		var x = thisEl.val();
		if(this.captcha.validate(x)){
			
			$('[name="captcha_val"]').val('T').trigger('blur');
			
			 if(thisEl.parent().find('[data-validation-error="block"]').length > 0){
			 thisEl.parent().removeAttr('data-validation-error');
			 thisEl.parent().find('[data-validation-error="block"]').remove();
		   }
		}
		else{
			
			$('[name="captcha_val"]').val('').trigger('blur');
			
			if(thisEl.parent().find('p[data-validation-error="block"]').length == 0){
			   thisEl.parent().attr('data-validation-error','');
			   thisEl.parent().append('<p data-validation-error="block">Invalid captcha code, Please try again.</p>');
			}
		}
	},
	paidForByInputs: function(e)
	{
		var thisEl = $(e.currentTarget).val();
		if(thisEl == '1'){
			$('.login-register-register-conditional-inputs-1').show();
			$('.login-register-register-conditional-inputs-2').hide();
			$('.attention_field').show();
		}
		if(thisEl == '2'){
			$('.login-register-register-conditional-inputs-1,.login-register-register-conditional-inputs-2').show();
			$('.attention_field').hide();
		}
		
		$('[name="paidforbyvalue"]').val(thisEl).trigger('blur');
		
		if($('.radio-btns').find('p[data-validation-error="block"]').length > 0){
		   $('.radio-btns').find('[data-validation-error="block"]').remove();
		}
		
	},
	removeErr: function(e)
	{	
		var thisEl = $(e.currentTarget);
		
		$('[name="statevalue"]').val(thisEl.val()).trigger('blur');
		
		if(thisEl.val()){
			 if(thisEl.parent().find('[data-validation-error="block"]').length > 0){
			 thisEl.parent().removeAttr('data-validation-error');
			 thisEl.parent().find('[data-validation-error="block"]').remove();
		   }
		}
		else{
			 if(thisEl.parent().find('p[data-validation-error="block"]').length == 0){
			   thisEl.parent().attr('data-validation-error','');
			   thisEl.parent().append('<p data-validation-error="block">This field is required.</p>');
			}
		}
	},
    bindings: {
			'[name="company"]': 'company'
		,	'[name="user_name"]': 'user_name'
        ,	'[name="email"]': 'email'
        ,	'[name="password"]': 'password'
        ,	'[name="password2"]': 'password2'
		,	'[name="customertype"]': 'customertype'
		,	'[name="attention"]': 'attention'
		,	'[name="paidforby"]': 'paidforby'
		,	'[name="paidforbyvalue"]': 'paidforbyvalue'
		,	'[name="paidfortitle"]': 'paidfortitle'
		,	'[name="firstname"]': 'firstname'
		,	'[name="lastname"]': 'lastname'
		,	'[name="paidfororganization"]': 'paidfororganization'
		,	'[name="paidforcity"]': 'paidforcity'
		,	'[name="paidforstate"]': 'paidforstate'
		,	'[name="category"]': 'category'
		,	'[name="addr"]': 'addr'
		,	'[name="city"]': 'city'
		,	'[name="country"]': 'country'
		,	'[name="statevalue"]': 'statevalue'
		,	'[name="zipcode"]': 'zipcode'
		,	'[name="phone"]': 'phone'
		,	'[name="captcha_val"]': 'captcha_val'
    },
    initialize: function(options) {
        this.options = options;
        this.application = options.application;
        this.parentView = options.parentView;

        this.model = options.model || new AccountRegisterModel();
        // on save we redirect the user out of the registration page
        // as we know there hasn't been an error
        this.model.on('save', _.bind(this.redirect, this));

        BackboneFormView.add(this);
		
		var url_options = Utils.parseUrlOptions(window.location.search);
		var parameter1 = window.location.href;
		var value1 = parameter1.split('#')[1];
		this.isRegister = (value1.toLowerCase() == 'register' || value1.toLowerCase() == '/register')?true:false;
		
		this.selectOpt = {};
		var self = this;
		
		if(this.isRegister){
			
			this.on("afterViewRender", function() {
				
				$('#captcha').ready(function(){
					self.captcha = new $.Captcha();
					self.captcha.generate();
					//console.log(self.captcha);
				});
				self.$('[name="country"]').val('US');
			});
		}
    },
	updateStates: function (e){
		
		var statesView = this.getChildViewInstance('StatesView');
		statesView.options.selectedCountry = this.$(e.currentTarget).val();
		statesView.render();
		
		var countries = statesView.options.countries;
		var selected_country = statesView.options.selectedCountry;
		
		var $zip_fieldset = this.$('[name="zipcode"]').closest('.login-register-register-form-controls-group');
		
		//if (countries[selected_country] && countries[selected_country].isziprequired === 'F')
			
		if (selected_country == 'US' || selected_country == 'CA')
		{
			$zip_fieldset.addClass('zip_required');
		}
		else
		{
			$zip_fieldset.removeClass('zip_required');
		}
	},
	childViews: {
		'CountriesDropdown': function ()
		{
			var countries = Configuration.get('siteSettings.countries');
			var selectedCountry = Configuration.get('siteSettings.defaultshipcountry') || 'US';
			
			_.each(countries,function(country:any){
				if(country.code == selectedCountry){
					country.selected = true;
				}
			});
			
			return new CountriesDropdownView({
				countries: countries
			,	selectedCountry: selectedCountry
			});
		}
	,	'StatesView': function ()
		{
			return new GlobalViewsStatesView({
				countries: Configuration.get('siteSettings.countries')
			,	selectedCountry: Configuration.get('siteSettings.defaultshipcountry')
			});
		}
	},
    submitForm: function(e, model, props) {
        e.preventDefault();
		
		//custom validation 
		$('[name="state"]').trigger('blur');
		$('[name="captcha_text"]').trigger('blur');
		
		var radiobtn = $('[name="paidforby"]:checked').val();
		
		if(!radiobtn){
			
			if($('.radio-btns').find('p[data-validation-error="block"]').length == 0){
			   $('.radio-btns').append('<p data-validation-error="block">This field is required.</p>');
			}
		}
		
        const loggers = Loggers.getLogger();
        const actionId = loggers.start('Customer Registration');

        const self = this;
        const data = (<any>jQuery(e.target).closest('form')).serializeObject();

        return this.cancelableTrigger('before:LoginRegister.register', data).then(function() {
            const promise = self.saveForm(e, model, props);

            if (promise) {
                promise.done(() => {
                    loggers.end(actionId, {
                        operationIds: self.model.getOperationIds(),
                        status: 'success'
                    });
                });
            }
        });
    },
    beforeShowContent: function beforeShowContent() {
        const promise = jQuery.Deferred();
        const profileModel = ProfileModel.getInstance();

        if (profileModel.get('isLoggedIn') === 'T' && profileModel.get('isGuest') === 'F') {
            Backbone.history.navigate('', { trigger: true });

            promise.reject();
        } else {
			
			var self = this;
			
			if(this.isRegister){
				
				var suiteletUrl = Configuration.get('registerss.url');
				
				suiteletUrl += "&registration=T";
				
				Backbone.ajax({
					url: suiteletUrl
				,	success: function(result){
						if(result)
						{ 
							self.selectOpt = JSON.parse(result);
							
							promise.resolve();
						}
					}
				});
			}
			else
				promise.resolve();
        }

        return promise;
    },

    // @method trackEvent tracks the 'create-account' event using the global Tracker instance
    // @param {Function} callback
    trackEvent: function(callback: Function) {
        Tracker.getInstance().trackRegister({
            action: 'Checkout - User Interaction',
            category: 'Register',
            callback: callback
        });
    },

    // @method redirect redirects the user after successful account registration taking into account redirect (origin and origin_hash) parameters.
    // @param {Object} response the http response data object result of calling the account-register service.
    redirect: function(_context, response) {
        const self = this;
        return this.cancelableTrigger('after:LoginRegister.register').then(function() {
            const url_options = Utils.parseUrlOptions(window.location.search);
            const { touchpoints } = response;
            const { application } = self;

            if (url_options.is && url_options.is === 'checkout') {
                const profile_model = ProfileModel.getInstance();

                response.user && profile_model.set(response.user);
                response.cart && LiveOrderModel.getInstance().set(response.cart);
                response.address && profile_model.get('addresses').reset(response.address);
                response.paymentmethod &&
                    profile_model.get('paymentmethods').reset(response.paymentmethod);

                // Track Guest Checkout Event
                self.trackEvent(function() {
                    application.setConfig('currentTouchpoint', 'checkout');
                    Backbone.history.navigate('', { trigger: true });
                });
            } else {
                // Track Login Event
                self.trackEvent(function() {
                    // if we know from which touchpoint the user is coming from
                    if (url_options.origin && touchpoints[url_options.origin]) {
                        // we save the url to that touchpoint
                        let url = touchpoints[url_options.origin];
                        // if there is an specific hash
                        if (url_options.origin_hash) {
                            // we add it to the url as a fragment
                            url = Utils.addParamsToUrl(url, { fragment: url_options.origin_hash });
                        }
                        window.location.href = url;
                    } else {
                        // We've got to disable passwordProtectedSite feature if customer registration is disabled.
                        if (
                            Configuration.getRegistrationType() !== 'disabled' &&
                            SC.ENVIRONMENT.siteSettings.siteloginrequired === 'T'
                        ) {
                            window.location.href = touchpoints.home;
                        } else {
                            // otherwise we need to take it to the customer center
                            window.location.href = touchpoints.home; //touchpoints.customercenter;
                        }
                    }
                });
            }
        });
    },

    // @method getContext @return {LoginRegister.Register.View.Context}
    getContext: function() {
        const url_options = Utils.parseUrlOptions(window.location.search);

        // @class LoginRegister.Register.View.Context
        return {
            // @property {Boolean} showCompanyField
            showCompanyField: SC.ENVIRONMENT.siteSettings.registration.showcompanyfield === 'T',
            // @property {Boolean} isCompanyFieldRequire
            isCompanyFieldRequire:
                SC.ENVIRONMENT.siteSettings.registration.companyfieldmandatory === 'T',
            // @property {Boolean} isEmailSubscribeChecked
            isEmailSubscribeChecked:
                this.options.isEmailSubscribeChecked ||
                SC.ENVIRONMENT.siteSettings.defaultSubscriptionStatus,
            // @property {String} siteName
            siteName: SC.ENVIRONMENT.siteSettings.displayname,
            // @property {Boolean} showFormFieldsOnly
            showFormFieldsOnly: this.options.showFormFieldsOnly || false,
            // @property {Boolean} isRedirect
            isRedirect: !!(url_options.is !== 'checkout' && url_options.origin !== 'checkout'),
            // @property {Boolean} hasAutoFocus
            hasAutoFocus: url_options.is === 'register' && Utils.isDesktopDevice(),
			isRegister: this.isRegister,
			selectOpt: this.selectOpt
        };
    }
    // @class LoginRegister.Register.View
});

export = LoginRegisterRegisterView;
