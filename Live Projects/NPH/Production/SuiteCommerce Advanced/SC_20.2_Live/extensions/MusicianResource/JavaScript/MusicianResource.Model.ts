/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="MusicianResource.Model"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

const MusicianResourceModel: any = Backbone.Model.extend({

    urlRoot: Utils.getAbsoluteUrl('services/MusicianResource.Service.ss'),

	parse: function(response) {
        return response;
    },


});

export = MusicianResourceModel;
