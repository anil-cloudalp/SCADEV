/// <amd-module name="CheckoutExt"/>
define("CheckoutExt", ["require", "exports", "Utils", "underscore", "jQuery"], function (require, exports, Utils, _, jQuery) {
    "use strict";
    return {
        mountToApp: function (application) {
            var promise = jQuery.get(Utils.getAbsoluteUrl('services/CustomModules.Service.ss?checkout=T'));
            application.waitForPromise(promise);
            promise.then(function (res) {
                application.campaign_category = _.has(res, 'campaign_category') ? res.campaign_category : [];
            });
        }
    };
});

//# sourceMappingURL=CheckoutExt.js.map
