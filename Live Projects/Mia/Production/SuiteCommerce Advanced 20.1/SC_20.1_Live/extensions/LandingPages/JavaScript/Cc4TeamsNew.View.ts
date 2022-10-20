/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Cc4TeamsNew.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as cc4teams_new_tpl from 'cc4teams.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import Configuration = require('../../../Advanced/SCA/JavaScript/SC.Configuration');

// @module Cc4TeamsNew.View @extends Backbone.View
const Cc4TeamsNewView: any = BackboneView.extend({
    template: cc4teams_new_tpl,

    title: Utils.translate('Cc4Teams'),

    page_header: Utils.translate('Welcome to the store'),

    attributes: {
        id: 'cc4teams-landing-pages',
        class: 'cc4teams-landing-pages'
    },

    initialize: function() {
    
    },

   

    // @method getContext @return Cc4TeamsNew.View.Context
    getContext: function() {
         
        

        return {
          
        };
    }
});

export = Cc4TeamsNewView;
