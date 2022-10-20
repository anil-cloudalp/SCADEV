/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="PolyNew.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as poly_new_tpl from 'poly.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import Configuration = require('../../../Advanced/SCA/JavaScript/SC.Configuration');

// @module PolyNew.View @extends Backbone.View
const PolyNewView: any = BackboneView.extend({
    template: poly_new_tpl,

    title: Utils.translate('PolyNew'),

    page_header: Utils.translate('Welcome to the store'),

    attributes: {
        id: 'polynew-landing-pages',
        class: 'polynew-landing-pages'
    },

    initialize: function() {
    
    },

   

    // @method getContext @return PolyNew.View.Context
    getContext: function() {
         
        

        return {
          
        };
    }
});

export = PolyNewView;
