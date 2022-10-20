// Model.js
// -----------------------
// @module Case
define("Kodella.KDSmartFreight.KDSmartFreight.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDSmartFreight.Service.ss"
            )
        )
        
});
});
