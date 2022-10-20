// Model.js
// -----------------------
// @module Case
define("Acme.ScisLayoutCustomizations.ScisLayoutCustomization.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/ScisLayoutCustomization.Service.ss"
            )
        )
        
});
});
