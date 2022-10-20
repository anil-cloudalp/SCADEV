/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="BootMaintenance.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>

import * as _ from 'underscore';
import * as home_tpl from 'boot_maintenance.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import BootListNavView = require('./BootListNav.View');

// @module Home.View @extends Backbone.View
const BootMaintenanceView: any = BackboneView.extend({
    template: home_tpl,

   title: Utils.translate('Boot 101 | Lucchese'),

    attributes: {
        id: 'maintenance-page'
    },
	initialize: function() {
    this.application = this.options.application;

    var self = this;

    this.application.getLayout().on('afterAppendView', function(View) {
      $('.nav-link').removeClass('active');
      $('.nav-link').each(function() {
        var url: any = window.location.href;
        if ((url).includes($(this).attr('href'))) {
          $(this).parent().addClass('active');
        }
      });
    });

  },

  childViews: {
    'Nav.View': function() {
      return new BootListNavView({});
    }
  },


    // @method getContext @return Home.View.Context
    getContext: function() {

        return {
			isNotCmsEdit: (window.parent.location.href.indexOf("cms") == -1)? true:false
        };
    }
});

export = BootMaintenanceView;
