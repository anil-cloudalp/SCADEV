/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("SiteSearch", ["require", "exports", "SiteSearch.View", "SiteSearch.Button.View"], function (require, exports, SiteSearchView, SiteSearchButtonView) {
    "use strict";
    return {
        mountToApp: function (application) {
            var layout = application.getComponent('Layout');
            layout.registerView('SiteSearch', function () {
                return new SiteSearchView({ application: application });
            });
            layout.registerView('SiteSearch.Button', function () {
                return new SiteSearchButtonView({ application: application });
            });
        }
    };
});

//# sourceMappingURL=SiteSearch.js.map
