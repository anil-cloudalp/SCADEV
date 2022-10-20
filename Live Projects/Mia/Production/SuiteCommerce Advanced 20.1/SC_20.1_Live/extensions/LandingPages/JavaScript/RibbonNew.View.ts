/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="RibbonNew.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as ribbon_new_tpl from 'ribbon.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import Configuration = require('../../../Advanced/SCA/JavaScript/SC.Configuration');

// @module RibbonNew.View @extends Backbone.View
const RibbonNewView: any = BackboneView.extend({
    template: ribbon_new_tpl,

    title: Utils.translate('Ribbon'),

    page_header: Utils.translate('Welcome to the store'),

    attributes: {
        id: 'ribbon-landing-pages',
        class: 'ribbon-landing-pages'
    },


    initialize: function() {
    
    },

   

    // @method getContext @return RibbonNew.View.Context
    getContext: function() {


        return {
          
        };
    }
});

export = RibbonNewView;
