/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Commbox.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as commbox_tpl from 'commbox.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import Configuration = require('../../../Advanced/SCA/JavaScript/SC.Configuration');

// @module Home.View @extends Backbone.View
const CommboxView: any = BackboneView.extend({
    template: commbox_tpl,

    title: Utils.translate('CommBox | Mia Telecomms'),

    page_header: Utils.translate('Welcome to the store'),

    initialize: function() {

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

export = CommboxView;
