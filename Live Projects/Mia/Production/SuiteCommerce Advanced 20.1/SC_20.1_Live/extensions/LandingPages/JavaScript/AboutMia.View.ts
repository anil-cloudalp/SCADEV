
/// <amd-module name="AboutMia.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as about_us_tpl from 'about_us.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import BackboneModel = require('../../../Commons/BackboneExtras/JavaScript/Backbone.Model');

// @module AboutMia.View @extends Backbone.View
const AboutMiaView: any = BackboneView.extend({
    template: about_us_tpl,

    title: Utils.translate('About Us | Mia Telecomms'),

    page_header: Utils.translate('About Us'),

    attributes: {
        id: 'about-us',
        class: 'about-us-page'
    },

    events: {
		'click [name="testimonials-dots"]': 'testimonialsDots'
    },
	testimonialsDots: function(e){
		var quote = jQuery(e.currentTarget).attr('data-ref');
		
			jQuery('[name="testimonials-quote"]').each(function(){
				jQuery(this).hide();
			});
			jQuery('[name="testimonials-dots"]').each(function(){
				jQuery(this).removeClass('active');
			});
			jQuery(e.currentTarget).addClass('active');
			jQuery(quote).fadeIn('slow');
	},
    initialize: function() {
        
    },
    getContext: function() {
       

        return {
            
        };
    }
});

export = AboutMiaView;
