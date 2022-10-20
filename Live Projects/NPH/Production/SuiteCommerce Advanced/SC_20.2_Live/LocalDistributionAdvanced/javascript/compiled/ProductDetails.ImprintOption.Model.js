/// <amd-module name="ProductDetails.ImprintOption.Model"/>
define("ProductDetails.ImprintOption.Model", ["require", "exports", "Utils", "Backbone"], function (require, exports, Utils, Backbone) {
    "use strict";
    var CustomFormModel = Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl('services/ProductDetails.ImprintOption.Service.ss')
        //@property {Object} validation. Backbone.Validation attribute used for validating the form before submit.
        ,
        validation: {}
    });
    return CustomFormModel;
});

//# sourceMappingURL=ProductDetails.ImprintOption.Model.js.map
