/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Vendors.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as vendors_tpl from 'vendors.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import Configuration = require('../../../Advanced/SCA/JavaScript/SC.Configuration');
import BackboneModel = require('../../../Commons/BackboneExtras/JavaScript/Backbone.Model');

// @module Home.View @extends Backbone.View
const HomeView: any = BackboneView.extend({
    template: vendors_tpl,

    title: Utils.translate('Vendors | Mia Telecoms'),

    page_header: Utils.translate('Welcome to the store'),

    initialize: function() {

    },
	beforeShowContent: function(){
		
		
		var self = this;
		var promise = new BackboneModel().fetch({url: Utils.getAbsoluteUrl('services/LandingPages.Service.ss')}).then(function(result){
						self.vendorsData = result;
					});
					
			return promise;
	},


    // @method getContext @return Home.View.Context
    getContext: function() {

        return {
            vendors: (this.vendorsData && this.vendorsData.vendors) || []
        };
    }
});

export = HomeView;
