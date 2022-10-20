/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="BootListNav.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>

import * as _ from 'underscore';
import * as home_tpl from 'boot_list_nav.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');

// @module Home.View @extends Backbone.View
const BootListNavView: any = BackboneView.extend({
    template: home_tpl,

    events: {
        'click .nav-item': 'addActive'
    },
    initialize: function() {

    },
    addActive:function(e){
      $('.nav-item').removeClass('active');
      $(e.currentTarget).addClass('active');
    },


    // @method getContext @return Home.View.Context
    getContext: function() {

        return {
            isCollapse : $(window).width() < 992 ? true : false
        };
    }
});

export = BootListNavView;
