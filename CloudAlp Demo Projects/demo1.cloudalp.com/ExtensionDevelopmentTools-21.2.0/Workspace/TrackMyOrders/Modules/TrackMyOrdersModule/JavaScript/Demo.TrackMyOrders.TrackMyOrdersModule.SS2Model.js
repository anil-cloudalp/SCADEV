// Model.js
// -----------------------
// @module Case
define("Demo.TrackMyOrders.TrackMyOrdersModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/TrackMyOrdersModule/SuiteScript2/TrackMyOrdersModule.Service.ss"
            ),
            true
        )
});
});
