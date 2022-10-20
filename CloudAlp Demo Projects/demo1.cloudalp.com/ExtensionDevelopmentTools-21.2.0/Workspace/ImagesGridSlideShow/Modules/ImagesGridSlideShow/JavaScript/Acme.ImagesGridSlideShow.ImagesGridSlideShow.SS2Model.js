// Model.js
// -----------------------
// @module Case
define("Acme.ImagesGridSlideShow.ImagesGridSlideShow.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ImagesGridSlideShow/SuiteScript2/ImagesGridSlideShow.Service.ss"
            ),
            true
        )
});
});
