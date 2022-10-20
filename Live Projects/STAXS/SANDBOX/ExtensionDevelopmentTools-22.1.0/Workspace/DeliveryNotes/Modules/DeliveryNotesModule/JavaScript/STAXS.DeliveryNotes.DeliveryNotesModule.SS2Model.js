// Model.js
// -----------------------
// @module Case
define("STAXS.DeliveryNotes.DeliveryNotesModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/DeliveryNotesModule/SuiteScript2/DeliveryNotesModule.Service.ss"
            ),
            true
        )
});
});
