/// <amd-module name="PrivacyPolicy.View"/>
define("PrivacyPolicy.View", ["require", "exports", "privacy_policy.tpl", "Backbone.View"], function (require, exports, privacy_policy_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: privacy_policy_tpl,
        title: 'Privacy Policy'
    });
    return CustomView;
});

//# sourceMappingURL=PrivacyPolicy.View.js.map
