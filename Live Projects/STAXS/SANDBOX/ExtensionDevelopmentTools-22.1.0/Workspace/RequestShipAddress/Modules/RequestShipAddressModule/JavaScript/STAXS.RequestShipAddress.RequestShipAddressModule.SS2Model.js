// Model.js
// -----------------------
// @module Case
define("STAXS.RequestShipAddress.RequestShipAddressModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/RequestShipAddressModule/SuiteScript2/RequestShipAddressModule.Service.ss"
            ),
            true
        )
});
});
