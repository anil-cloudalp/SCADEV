/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="ChannelUc.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as channelUc_tpl from 'channelUc.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import Configuration = require('../../../Advanced/SCA/JavaScript/SC.Configuration');

// @module Home.View @extends Backbone.View
const ChannelUcView: any = BackboneView.extend({
    template: channelUc_tpl,

    title: Utils.translate('Channel UC | Mia Telecomms'),

    initialize: function() {
       this.appear();
    },

    appear:function()
    {
      jQuery(window).scroll( function(){
        jQuery('.text').each( function(i){
          var bottom_of_object = jQuery(this).offset().top + jQuery(this).outerHeight();
          var bottom_of_window = jQuery(window).scrollTop() + jQuery(window).height();


          if( bottom_of_window > (bottom_of_object-400) ){
            jQuery(this).addClass('appear');
          }
        });
      });

    },

    // @method getContext @return Home.View.Context
    getContext: function() {

        return {
            // @class Home.View.Context
                  imageHomeSize: Utils.getViewportWidth() < 768 ? 'homeslider' : 'main',

            // @class Home.View
        };
    }
});

export = ChannelUcView;
