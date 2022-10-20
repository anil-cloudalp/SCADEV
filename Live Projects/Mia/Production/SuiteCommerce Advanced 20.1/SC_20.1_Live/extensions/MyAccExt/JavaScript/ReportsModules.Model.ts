/// <amd-module name="ReportsModules.Model"/>
/// <reference path="../../../Commons/Utilities/JavaScript/GlobalDeclarations.d.ts"/>
// @module Account.Login.Model

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import Utils = require('../../../Commons/Utilities/JavaScript/Utils');

// @class Account.Login.Model
// Sends user input data to the login service
// validating email and password before they are sent
// [Backbone.validation](https://github.com/thedersen/backbone.validation)
// @extend Backbone.Model
const ReportsModulesModel: any = Backbone.Model.extend({
    // @property {String} urlRoot
    urlRoot: Utils.getAbsoluteUrl('services/ReportsModules.ss')


});

export = ReportsModulesModel;
