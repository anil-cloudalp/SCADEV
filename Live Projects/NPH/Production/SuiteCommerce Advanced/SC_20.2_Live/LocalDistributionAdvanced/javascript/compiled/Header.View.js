/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("Header.View", ["require", "exports", "underscore", "header.tpl", "Utils", "jQuery", "Configuration", "Profile.Model", "Header.Logo.View", "Header.MiniCart.View", "Header.MiniCartSummary.View", "Header.Profile.View", "Header.Menu.View", "GlobalViews.HostSelector.View", "GlobalViews.CurrencySelector.View", "Backbone", "Backbone.View", "SessionStorageHandler"], function (require, exports, _, header_tpl, Utils, jQuery, Configuration_1, Profile_Model_1, HeaderLogoView, HeaderMiniCartView, HeaderMiniCartSummaryView, HeaderProfileView, HeaderMenuView, GlobalViewsHostSelectorView, GlobalViewsCurrencySelectorView, Backbone, BackboneView, SessionStorageHandler) {
    "use strict";
    return BackboneView.extend({
        template: header_tpl,
        events: {
            'click [data-action="show-sitesearch"]': 'showSiteSearch',
            'click [data-action="header-sidebar-show"]': 'showSidebar',
            'click [data-action="header-sidebar-hide"]': 'hideSidebar',
            'click [data-type="header-sidebar-menu"]': 'hideSidebar',
            'click [data-action="musician-header-sidebar-show"]': 'headerChange'
        },
        initialize: function () {
            Backbone.history.on('all', this.verifyShowSiteSearch, this);
            this.application = this.options.application;
            this.application.getLayout().on('beforeAppendView', function (view) {
                if (view.application != undefined) {
                    if (view.application.getName() == 'MyAccount') {
                        this.render();
                    }
                    if (view.application.getName() == 'Checkout') {
                        this.render();
                    }
                }
            });
        },
        headerChange: function headerChange() {
            jQuery('#main').addClass('header-sidebar-opened');
            this.render();
        },
        // @method showMiniCart
        // @return {Void}
        showMiniCart: function () {
            this.$('[data-type="mini-cart"]')
                .parent()
                .addClass('open');
        },
        // Keeping this here to be backward compatible with themes prior to 2018.2.0
        showSiteSearch: function (ev) {
            ev && ev.preventDefault();
            // This add a class 'active' to change button color
            this.$('[data-action="show-sitesearch"]').toggleClass('active');
            this.$('[data-type="SiteSearch"]').toggle();
            this.getChildViewInstance('SiteSearch').showSiteSearch();
        },
        // Keeping this here to be backward compatible with themes prior to 2018.2.0, do not use this!
        hideSiteSearch: function () {
            // This hide Sitesearch div
            this.$('[data-type="SiteSearch"]').hide();
        },
        // Keeping this here to be backward compatible with themes prior to 2018.2.0, do not use this!
        verifyShowSiteSearch: function () {
            if (this.$('[data-action="show-sitesearch"]').length > 0) {
                var hash = Backbone.history.getFragment() || '';
                hash = hash.indexOf('?') === -1 ? hash : hash.substring(0, hash.indexOf('?'));
                var is_home = hash === '' || hash === '/';
                if (Utils.getDeviceType() !== 'desktop' && is_home) {
                    this.showSiteSearch(null, true);
                }
                else {
                    // This hide sitesearch when navigate
                    this.hideSiteSearch();
                }
            }
        },
        // @method showSidebar
        // @return {Void}
        showSidebar: function () {
            jQuery('#main').addClass('header-sidebar-opened');
        },
        // @method hideSidebar
        // @return {Void}
        hideSidebar: function (e) {
            if (e.target.tagName === 'A') {
                if (this.activeLink) {
                    this.activeLink.removeClass('active');
                }
                this.activeLink = jQuery(e.target);
                this.activeLink.addClass('active');
            }
            jQuery('#main').removeClass('header-sidebar-opened');
            $('.header-sidebar-wrapper').hide();
        },
        childViews: {
            'Header.MiniCart': function () {
                return new HeaderMiniCartView();
            },
            'Header.MiniCartSummary': function () {
                return new HeaderMiniCartSummaryView();
            },
            'Header.Profile': function () {
                var password_protected_site = SC.ENVIRONMENT.siteSettings.siteloginrequired === 'T';
                var isLoggedIn = Profile_Model_1.ProfileModel.getInstance().get('isLoggedIn') === 'T';
                if (!password_protected_site || isLoggedIn) {
                    var header_profile_view_options = _.extend({
                        showMyAccountMenu: true,
                        application: this.application
                    }, this.options.headerProfileViewOptions || {});
                    return new HeaderProfileView(header_profile_view_options);
                }
                return null;
            },
            'Header.Logo': function () {
                return new HeaderLogoView(this.options);
            },
            'Header.Menu': function () {
                var header_view_options = _.extend({
                    application: this.application
                }, this.options.headerProfileViewOptions || {});
                return new HeaderMenuView(header_view_options);
            },
            'Global.HostSelector': function () {
                return new GlobalViewsHostSelectorView();
            },
            'Global.CurrencySelector': function () {
                return new GlobalViewsCurrencySelectorView();
            },
            'MusicianResourceHeader.Profile': function () {
                var password_protected_site = SC.ENVIRONMENT.siteSettings.siteloginrequired === 'T';
                var isLoggedIn = Profile_Model_1.ProfileModel.getInstance().get('isLoggedIn') === 'T';
                if (!password_protected_site || isLoggedIn) {
                    var header_profile_view_options = _.extend({
                        showMyAccountMenu: true,
                        musicianResourcePage: true,
                        application: this.application
                    }, this.options.headerProfileViewOptions || {});
                    return new HeaderProfileView(header_profile_view_options);
                }
                return null;
            },
        },
        getContext: function getContext() {
            var currentPageURLHref = window.location.href.toLocaleLowerCase();
            if (currentPageURLHref.indexOf("musician-resource") != -1 || currentPageURLHref.indexOf("musiciansresource") != -1) {
                SessionStorageHandler.set("musician-resource-page", "true");
                sessionStorage.setItem("musician-page", "true");
            }
            if (currentPageURLHref.indexOf("/cart") != -1) {
                SessionStorageHandler.set("musician-resource-page", "false");
            }
            if (currentPageURLHref.indexOf("checkout") != -1 && currentPageURLHref.indexOf("musician-resource") != -1) {
                SessionStorageHandler.set("musician-resource-page", "true");
            }
            if ((currentPageURLHref.indexOf("checkout") != -1) && (currentPageURLHref.indexOf("frommusician") != -1)) {
                SessionStorageHandler.set("musician-resource-page", "true");
            }
            if (currentPageURLHref.indexOf("is=checkout") != -1) {
                SessionStorageHandler.set("musician-resource-page", "false");
            }
            if (currentPageURLHref.indexOf("my_account") != -1) {
                SessionStorageHandler.set("musician-resource-page", "false");
            }
            var isMusicianResourcePage = (SessionStorageHandler.get("musician-resource-page") == "true") ? true : false;
            var environment = SC.ENVIRONMENT;
            var show_languages = environment.availableHosts && environment.availableHosts.length > 1;
            var show_currencies = environment.availableCurrencies &&
                environment.availableCurrencies.length > 1 &&
                !Configuration_1.Configuration.get('header.notShowCurrencySelector');
            return {
                isStandalone: this.application.isStandalone(),
                // @property {Profile.Model} profileModel
                profileModel: Profile_Model_1.ProfileModel.getInstance(),
                // @property {Boolean} showLanguages
                showLanguages: show_languages,
                // @property {Boolean} showCurrencies
                showCurrencies: show_currencies,
                // @property {Boolean} showLanguagesOrCurrencies
                showLanguagesOrCurrencies: show_languages || show_currencies,
                // @property {Boolean} showLanguagesAndCurrencies
                showLanguagesAndCurrencies: show_languages && show_currencies,
                // @property {Boolean} isHomeTouchpoint
                isHomeTouchpoint: Configuration_1.Configuration.currentTouchpoint === 'home',
                // @property {String} cartTouchPoint
                cartTouchPoint: Configuration_1.Configuration.get('modulesConfig.Cart.startRouter', false)
                    ? Configuration_1.Configuration.currentTouchpoint
                    : 'viewcart',
                isMusicianResourcePage: isMusicianResourcePage,
                logoUrl: Utils.getAbsoluteUrlOfNonManagedResources(Configuration_1.Configuration.get('header.logoUrl')),
                // @property {String} headerLinkHref
                logoLinkHref1: this.options.headerLinkHref || '/',
                logoLinkHref2: '/musician-resource',
                // @property {String} headerLinkTouchPoint
                headerLinkTouchPoint: this.options.headerLinkTouchPoint || 'home',
                // @property {String} headerLinkHashtag
                headerLinkHashtag: this.options.headerLinkHashtag || '#',
                // @property {String} headerLinkTitle
                headerLinkTitle: this.options.headerLinkTitle || SC.ENVIRONMENT.siteSettings.displayname,
            };
            // @class Header.View
        },
        // @method destroy Override default destroy method to clean navigation event handlers
        // @return {Void}
        destroy: function () {
            BackboneView.prototype.destroy.apply(this, arguments);
            Backbone.history.off('all', this.verifyShowSiteSearch);
        }
    });
});

//# sourceMappingURL=Header.View.js.map
