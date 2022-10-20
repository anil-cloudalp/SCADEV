/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="JabraNew.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as jabra_new_tpl from 'jabra.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import Configuration = require('../../../Advanced/SCA/JavaScript/SC.Configuration');

// @module JabraNew.View @extends Backbone.View
const JabraNewView: any = BackboneView.extend({
    template: jabra_new_tpl,

    title: Utils.translate('JabraNew'),

    page_header: Utils.translate('Welcome to the store'),

    attributes: {
        id: 'jabranew-landing-pages',
        class: 'jabranew-landing-pages'
    },

    initialize: function() {
    
    },

   

    // @method getContext @return JabraNew.View.Context
    getContext: function() {
         
        

        return {
          
        };
    }
});

export = JabraNewView;
