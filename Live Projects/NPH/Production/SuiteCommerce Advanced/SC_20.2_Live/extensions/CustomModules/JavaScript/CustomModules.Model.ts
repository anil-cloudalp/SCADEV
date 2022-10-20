/// <amd-module name="CustomModules.Model"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

const CustomFormModel: any = Backbone.Model.extend({
    // @property {String} urlRoot
    urlRoot: 'services/CustomModules.Service.ss',

    // @property validation
    // Backbone.Validation attribute used for validating the form before submit.
    validation: {
        
    }
});

export = CustomFormModel;