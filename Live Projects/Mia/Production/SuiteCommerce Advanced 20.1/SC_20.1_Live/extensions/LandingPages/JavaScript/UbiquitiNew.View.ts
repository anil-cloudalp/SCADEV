/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="UbiquitiNew.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as ubiquiti_new_tpl from 'ubiquiti.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import Configuration = require('../../../Advanced/SCA/JavaScript/SC.Configuration');

// @module Home.View @extends Backbone.View
const UbiquitiNewView: any = BackboneView.extend({
    template: ubiquiti_new_tpl,

    title: Utils.translate('Ubiquiti'),

    page_header: Utils.translate('Welcome to the store'),

    attributes: {
        id: 'ubiquiti-landing-pages',
        class: 'ubiquiti-landing-pages'
    },

    initialize: function() {
    
    },

   

   
    getContext: function() {
        
        

        return {
          
        };
    }
});

export = UbiquitiNewView;
