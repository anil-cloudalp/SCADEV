/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("Footer.View", ["require", "exports", "footer.tpl", "jQuery", "View", "GlobalViews.BackToTop.View", "Configuration", "Session", "Utils", "Profile.Model"], function (require, exports, footer_tpl, jQuery, View_1, GlobalViews_BackToTop_View_1, Configuration_1, Session, Utils, Profile_Model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FooterView = /** @class */ (function (_super) {
        __extends(FooterView, _super);
        function FooterView(options) {
            var _this = _super.call(this) || this;
            _this.template = footer_tpl;
            _this.events = {
                'click .musician-resource-pages': 'goToMyaccount'
            };
            _this.childViews = {
                'Global.BackToTop': function () {
                    return new GlobalViews_BackToTop_View_1.GlobalViewsBackToTopView();
                }
            };
            _this.application = options.application;
            /* after appended to DOM, we add the footer height as the content bottom padding,
            so the footer doesn't go on top of the content wrap it in a setTimeout because
            if not, calling height() can take >150 ms in slow devices - forces the browser
            to re-compute the layout.
            */
            _this.application.getLayout().on('afterAppendToDom', function () {
                var headerMargin = 25;
                setTimeout(function () {
                    var contentHeight = jQuery(window).innerHeight() -
                        jQuery('#site-header')[0].offsetHeight -
                        headerMargin -
                        jQuery('#site-footer')[0].offsetHeight;
                    jQuery('#main-container').css('min-height', contentHeight);
                }, 10);
            });
            return _this;
        }
        FooterView.prototype.goToMyaccount = function () {
            var profile = Profile_Model_1.ProfileModel.getInstance();
            var is_loading = !Utils.getPathFromObject(Configuration_1.Configuration, 'performance.waitForUserProfile', true) && Profile_Model_1.ProfileModel.getPromise().state() !== 'resolved';
            var is_logged_in = (profile.get('isLoggedIn') === 'T' || (profile.get('isRecognized') === 'T' && Configuration_1.Configuration.get('header.showRecognizedShopper', true))) && profile.get('isGuest') === 'F';
            var showExtendedMenu = !is_loading && is_logged_in;
            var login = Session.get('touchpoints.customercenter');
            login += "&origin=" + this.application.getConfig().currentTouchpoint;
            login += "&origin_hash=overview";
            if (!showExtendedMenu) {
                window.location.href = login + "?frommusician";
            }
            else {
                window.location.href = login;
            }
        };
        FooterView.prototype.getContext = function () {
            var footerNavigationLinks = Configuration_1.Configuration.get('footer.navigationLinks', []);
            return {
                showFooterNavigationLinks: !!footerNavigationLinks.length,
                footerNavigationLinks: footerNavigationLinks
            };
        };
        return FooterView;
    }(View_1.View));
    exports.FooterView = FooterView;
});

//# sourceMappingURL=Footer.View.js.map
