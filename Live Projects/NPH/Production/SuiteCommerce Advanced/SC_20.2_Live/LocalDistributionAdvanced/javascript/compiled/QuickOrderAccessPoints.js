/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("QuickOrderAccessPoints", ["require", "exports", "QuickOrderAccessPoints.HeaderLink.View", "Header.View", "Header.Menu.View"], function (require, exports, QuickOrderHeaderLinkView, HeaderView, HeaderMenuView) {
    "use strict";
    return {
        // @method mountToApp
        // @param {ApplicationSkeleton} application
        // @return {Void}
        mountToApp: function () {
            // Set the request a quote link on the Desktop header
            HeaderView.addChildViews &&
                HeaderView.addChildViews({
                    QuickOrderHeaderLink: function wrapperFunction() {
                        return function () {
                            return new QuickOrderHeaderLinkView({});
                        };
                    }
                });
            // Set the request a quote link on the Tablet and Mobile header
            HeaderMenuView.addChildViews &&
                HeaderMenuView.addChildViews({
                    QuickOrderHeaderLink: function wrapperFunction() {
                        return function () {
                            return new QuickOrderHeaderLinkView({
                                className: ' '
                            });
                        };
                    }
                });
            return void 0;
        }
    };
});

//# sourceMappingURL=QuickOrderAccessPoints.js.map
