// Model.js
// -----------------------
// @module Case
define("TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        initialize: function(zipCode)
        {
            if (zipCode)
            {
                this.urlRoot = Utils.getAbsoluteUrl(
                    getExtensionAssetsPath(
                        "services/SchoolDistrictLookup.Service.ss?zipcode="
                    )
                ) + zipCode;
            }
            else
            {
                this.urlRoot = Utils.getAbsoluteUrl(
                    getExtensionAssetsPath(
                        "services/SchoolDistrictLookup.Service.ss"
                    )
                );
            }
        }
        
        //@property {String} urlRoot
        
});
});
