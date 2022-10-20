// Model.js
// -----------------------
// @module Case
define("CA.MyAccountCustomization.RoleBasedMyAccount.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/RoleBasedMyAccount/SuiteScript2/RoleBasedMyAccount.Service.ss"
            ),
            true
        )
});
});
