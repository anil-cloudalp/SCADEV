
/// <amd-module name="RestorationProgram.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as restoration_program_tpl from 'restoration_program.tpl';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

// @module ContactUs.View @extends Backbone.View
const RestorationProgramView: any = BackboneView.extend({
    template: restoration_program_tpl,

    title: Utils.translate('Restoration Program'),

    page_header: Utils.translate('Restoration Program'),

    initialize: function() 
	{
		this.application = this.options.application;
	},
    getContext: function() {

        return {
            
        };
    }
});

export = RestorationProgramView;
