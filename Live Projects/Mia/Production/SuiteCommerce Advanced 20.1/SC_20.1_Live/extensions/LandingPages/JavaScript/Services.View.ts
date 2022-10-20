
/// <amd-module name="Services.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as services_tpl from 'services.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import BackboneModel = require('../../../Commons/BackboneExtras/JavaScript/Backbone.Model');

// @module Services.View @extends Backbone.View
const ServicesView: any = BackboneView.extend({
    template: services_tpl,

    title: Utils.translate('Value Add Services | Mia Telecomms'),

    page_header: Utils.translate('Value Add Services'),

    attributes: {
        id: 'services',
        class: 'services-page'
    },

    events: {
		
    },
    initialize: function() {
        
    },
    getContext: function() {
       

        return {
            
        };
    }
});

export = ServicesView;
