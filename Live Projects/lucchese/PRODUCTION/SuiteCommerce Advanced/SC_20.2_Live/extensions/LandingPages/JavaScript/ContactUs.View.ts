
/// <amd-module name="ContactUs.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as contact_us_tpl from 'contact_us.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');

import { Configuration } from '../../../Commons/Utilities/JavaScript/Configuration';
import GlobalViewsStatesView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.States.View');
import CountriesDropdownView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.CountriesDropdown.View');
import BackboneFormView = require('../../../Commons/Backbone.FormView/JavaScript/Backbone.FormView');
import ContactUsModel = require('./ContactUs.Model');

import { GlobalViewsMessageView }  from '../../../Commons/GlobalViews/JavaScript/GlobalViews.Message.View';

// @module ContactUs.View @extends Backbone.View
const ContactUsView: any = BackboneView.extend({
    template: contact_us_tpl,

    title: Utils.translate('Contact Us'),

    page_header: Utils.translate('Contact Us'),

    attributes: {
        id: 'contact-us',
        class: 'contact-us-page'
    },

    events: {
        'change [data-action="selectcountry"]': 'updateStates',
        'blur [data-action="inputphone"]': 'formatPhone',
		'submit form': 'saveForm',
		'click h3': 'toggleAnswers',
		'keyup #faq-search-input': 'faqSearch',
		'click .faq-questions-header': 'toggleBlocks'
    },
	bindings: {
        '[name="firstname"]': 'firstname',
		'[name="lastname"]': 'lastname',
        '[name="company"]': 'company',
        '[name="addr1"]': 'addr1',
        '[name="city"]': 'city',
        '[name="country"]': 'country',
        '[name="zip"]': 'zip',
        '[name="phone"]': 'phone',
		'[name="email"]': 'email'
    },
    initialize: function() {
		
		this.model = new ContactUsModel();
		BackboneFormView.add(this);
		
		this.model.on('save', _.bind(this.redirect, this));
    },
	redirect: function(_context, response) {
		
		var $alert_warn = this.$('[data-type="alert-placeholder"]');
					
		$alert_warn.html('');
		
		if(response && _.has(response,'recordId')){
			
			$alert_warn.html(
				new GlobalViewsMessageView({
					message: 'Thank You, Your request has been submitted successfully.',
					type: 'success',
					closable: true
				}).render().$el
			);
		}
		else{
			$alert_warn.html(
				new GlobalViewsMessageView({
					message: 'Something went wrong,please try again later',
					type: 'error',
					closable: true
				}).render().$el
			);
		}
	},
    formatPhone: function(e: any) {
        const $target = jQuery(e.target);
        $target.val((<any>_($target.val())).formatPhone());
    },
    updateStates: function(e: any) {
        const statesView = this.getChildViewInstance('StatesView');
        statesView.options.selectedCountry = this.$(e.currentTarget).val();
        statesView.render();
    },

    // @property {Object} childViews
    childViews: {
        CountriesDropdown: function() {
            return new CountriesDropdownView({
                countries: Configuration.get('siteSettings.countries'),
                selectedCountry: this.selected_country
            });
        },
        StatesView: function() {
            return new GlobalViewsStatesView({
                countries: Configuration.get('siteSettings.countries'),
                selectedCountry: this.selected_country,
                selectedState: this.model.get('state')
            });
        }
    },
	toggleAnswers: function(e){

		jQuery(e.currentTarget).toggleClass('active');
		jQuery(e.currentTarget).nextAll().toggle();

	},
	faqSearch: function(e)
	{
		var query:any = jQuery(e.currentTarget).val() || '';
		jQuery('.faq-answers-hide').show();
		jQuery('#faq_page h3').each(function(){

			var content:any = jQuery(this).parent().text().toLowerCase();

			if(content.indexOf(query.toLowerCase()) != -1){
				jQuery(this).parent().show();
				jQuery(this).addClass('active');
				jQuery(this).nextAll().show();
			}
			else{
				jQuery(this).parent().hide();
				jQuery(this).removeClass('active');
				jQuery(this).nextAll().hide();
			}
		});

	},
	toggleBlocks: function(e)
	{
		jQuery(e.currentTarget).next().toggle();
		jQuery(e.currentTarget).toggleClass('active');
	},
    getContext: function() {
       

        return {
            isNotCmsEdit: (window.parent.location.href.indexOf("cms") == -1)? true:false
        };
    }
});

export = ContactUsView;
