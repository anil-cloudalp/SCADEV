// Model.js
// -----------------------
// @module Case
define("STAXS.DeliveryNotes.DeliveryNotesModule.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/DeliveryNotesModule.Service.ss"
            )
        )
        
});
});
