/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("RequestQuoteAccessPoints", ["require", "exports", "RequestQuoteAccessPoints.HeaderLink.View", "Header.View", "Header.Menu.View"], function (require, exports, RequestQuoteWizardHeaderLinkView, HeaderView, HeaderMenuView) {
    "use strict";
    // @class RequestQuoteAccessPoints @extend ApplicationModule
    var RequestQuoteAccessPoints = {
        // @method mountToApp
        // @param {ApplicationSkeleton} application
        // @return {Void}
        mountToApp: function () {
            // Set the request a quote link on the Desktop header
            HeaderView.addChildViews &&
                HeaderView.addChildViews({
                    RequestQuoteWizardHeaderLink: function wrapperFunction() {
                        return function () {
                            return new RequestQuoteWizardHeaderLinkView({});
                        };
                    }
                });
            // Set the request a quote link on the Tablet and Mobile header
            HeaderMenuView.addChildViews &&
                HeaderMenuView.addChildViews({
                    RequestQuoteWizardHeaderLink: function wrapperFunction() {
                        return function () {
                            return new RequestQuoteWizardHeaderLinkView({
                                className: ' '
                            });
                        };
                    }
                });
            return void 0;
        }
    };
    return RequestQuoteAccessPoints;
});

//# sourceMappingURL=RequestQuoteAccessPoints.js.map
