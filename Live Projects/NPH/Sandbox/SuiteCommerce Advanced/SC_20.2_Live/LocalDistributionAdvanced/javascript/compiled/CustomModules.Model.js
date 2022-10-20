/// <amd-module name="CustomModules.Model"/>
define("CustomModules.Model", ["require", "exports", "Backbone"], function (require, exports, Backbone) {
    "use strict";
    var CustomFormModel = Backbone.Model.extend({
        // @property {String} urlRoot
        urlRoot: 'services/CustomModules.Service.ss',
        // @property validation
        // Backbone.Validation attribute used for validating the form before submit.
        validation: {}
    });
    return CustomFormModel;
});

//# sourceMappingURL=CustomModules.Model.js.map
