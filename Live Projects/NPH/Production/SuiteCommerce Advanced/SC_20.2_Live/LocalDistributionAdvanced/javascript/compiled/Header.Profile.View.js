/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("Header.Profile.View", ["require", "exports", "header_profile.tpl", "Utils", "Configuration", "Profile.Model", "Header.Menu.MyAccount.View", "Backbone.View", "SessionStorageHandler", "Session"], function (require, exports, header_profile_tpl, Utils, Configuration_1, Profile_Model_1, HeaderMenuMyAccountView, BackboneView, SessionStorageHandler, Session) {
    "use strict";
    return BackboneView.extend({
        template: header_profile_tpl,
        events: {
            'click [data-touchpoint="login"]': 'noMoreSession',
            'click [data-touchpoint="customercenter"]': 'noMoreSession',
            'click [data-action = "musician-login"]': 'SessionInLogin'
        },
        initialize: function (options) {
            var self = this;
            Profile_Model_1.ProfileModel.getPromise().done(function () {
                self.render();
            });
            this.application = options.application;
            this.on('afterViewRender', function () {
                Utils.ellipsis('.header-profile-loading-indicator');
            });
            this.options.musicianResourcePage;
        },
        noMoreSession: function () {
            SessionStorageHandler.set("musician-resource-page", "false");
        },
        SessionInLogin: function () {
            var login = Session.get('touchpoints.login');
            login += "&origin=" + this.application.getConfig().currentTouchpoint;
            login += "&origin_hash=musician-resource";
            window.location.href = login;
        },
        childViews: {
            'Header.Menu.MyAccount': function () {
                return new HeaderMenuMyAccountView(this.options);
            }
        },
        // @method getContext @return {Header.Profile.View.Context}
        getContext: function () {
            var profile = Profile_Model_1.ProfileModel.getInstance();
            var is_loading = !Utils.getPathFromObject(Configuration_1.Configuration, 'performance.waitForUserProfile', true) &&
                Profile_Model_1.ProfileModel.getPromise().state() !== 'resolved';
            var is_logged_in = (profile.get('isLoggedIn') === 'T' ||
                (profile.get('isRecognized') === 'T' &&
                    Configuration_1.Configuration.get('header.showRecognizedShopper', true))) &&
                profile.get('isGuest') === 'F';
            // @class Header.Profile.View.Context
            return {
                // @property {Boolean} showExtendedMenu
                showExtendedMenu: !is_loading && is_logged_in,
                // @property {Boolean} showLoginMenu
                showLoginMenu: !is_loading && !is_logged_in,
                // @property {Boolean} showLoadingMenu
                showLoadingMenu: is_loading,
                // @property {Boolean} showMyAccountMenu
                showMyAccountMenu: !!this.options.showMyAccountMenu,
                // @property {String} displayName
                displayName: profile.get('firstname') || profile.get('companyname'),
                // @property {Boolean} showLogin
                showLogin: Configuration_1.Configuration.getRegistrationType() !== 'disabled',
                // @property {Boolean} showRegister
                showRegister: Configuration_1.Configuration.getRegistrationType() === 'optional' ||
                    Configuration_1.Configuration.getRegistrationType() === 'required',
                showHome: !!this.options.musicianResourcePage
            };
        }
    });
});

//# sourceMappingURL=Header.Profile.View.js.map
