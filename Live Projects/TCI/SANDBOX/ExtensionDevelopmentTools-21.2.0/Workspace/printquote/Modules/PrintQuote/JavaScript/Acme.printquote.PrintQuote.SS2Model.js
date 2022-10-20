// Model.js
// -----------------------
// @module Case
define("Acme.printquote.PrintQuote.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/PrintQuote/SuiteScript2/PrintQuote.Service.ss"
            ),
            true
        )
});
});
