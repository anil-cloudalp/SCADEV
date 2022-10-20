/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Musician.Get.Model"/>

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

// @class Account.Login.Model
// Sends user input data to the login service
// validating email and password before they are sent
// [Backbone.validation](https://github.com/thedersen/backbone.validation)
// @extend Backbone.Model
const MusicianGetModel: any = Backbone.Model.extend({
    // @property {String} urlRoot
    urlRoot:
     Utils.getAbsoluteUrl('services/Musician.Get.Service.ss')
    
    // @property validation. Backbone.Validation attribute used for validating the form before submit.

});

export = MusicianGetModel;
