/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="DialpadNew.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as dialpad_new_tpl from 'dialpad.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import Configuration = require('../../../Advanced/SCA/JavaScript/SC.Configuration');

// @module DialpadNew.View @extends Backbone.View
const DialPadNewView: any = BackboneView.extend({
    template: dialpad_new_tpl,

    title: Utils.translate('DialPad'),

    page_header: Utils.translate('Welcome to the store'),

    attributes: {
        id: 'dialpad-landing-pages',
        class: 'dialpad-landing-pages'
    },

    initialize: function() {
    
    },

   

    // @method getContext @return DialpadNew.View.Context
    getContext: function() {

        return {
          
        };
    }
});

export = DialPadNewView;
