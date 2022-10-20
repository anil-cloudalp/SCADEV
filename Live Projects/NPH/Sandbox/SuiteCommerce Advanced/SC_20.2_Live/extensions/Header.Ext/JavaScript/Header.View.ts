/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Header.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/GlobalDeclarations.d.ts" />

import * as _ from 'underscore';
import * as header_tpl from 'header.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../Commons/Utilities/JavaScript/Configuration';
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';

import HeaderLogoView = require('../../../Advanced/Header/JavaScript/Header.Logo.View');
import HeaderMiniCartView = require('../../../Advanced/Header/JavaScript/Header.MiniCart.View');
import HeaderMiniCartSummaryView = require('../../../Advanced/Header/JavaScript/Header.MiniCartSummary.View');
import HeaderProfileView = require('../../../Advanced/Header/JavaScript/Header.Profile.View');
import HeaderMenuView = require('../../../Advanced/Header/JavaScript/Header.Menu.View');
import GlobalViewsHostSelectorView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.HostSelector.View');
import GlobalViewsCurrencySelectorView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.CurrencySelector.View');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import SessionStorageHandler = require("../../../Commons/Utilities/JavaScript/SessionStorageHandler");



// @module Header
// @class Header.View @extends BackboneView
export = BackboneView.extend({
    template: header_tpl,

    events: {
        'click [data-action="show-sitesearch"]': 'showSiteSearch', // Keeping to be backward compatible
        'click [data-action="header-sidebar-show"]': 'showSidebar',
        'click [data-action="header-sidebar-hide"]': 'hideSidebar',
        'click [data-type="header-sidebar-menu"]': 'hideSidebar',
        'click [data-action="musician-header-sidebar-show"]': 'headerChange'


    },

    initialize: function(): void {
        Backbone.history.on('all', this.verifyShowSiteSearch, this);
        this.application = this.options.application;
        this.application.getLayout().on('beforeAppendView',function(view){
            if(view.application != undefined){
                if(view.application.getName() == 'MyAccount'){ 
                    this.render();
                }
                if(view.application.getName() == 'Checkout'){ 
                    this.render();
                }


            }
        })
    },
    headerChange: function headerChange() {
        jQuery('#main').addClass('header-sidebar-opened');
        this.render();            
    },


    // @method showMiniCart
    // @return {Void}
    showMiniCart: function(): void {
        this.$('[data-type="mini-cart"]')
            .parent()
            .addClass('open');
    },
    // Keeping this here to be backward compatible with themes prior to 2018.2.0
    showSiteSearch: function(ev): void {
        ev && ev.preventDefault();
        // This add a class 'active' to change button color
        this.$('[data-action="show-sitesearch"]').toggleClass('active');
        this.$('[data-type="SiteSearch"]').toggle();
        this.getChildViewInstance('SiteSearch').showSiteSearch();
    },
    // Keeping this here to be backward compatible with themes prior to 2018.2.0, do not use this!
    hideSiteSearch: function(): void {
        // This hide Sitesearch div
        this.$('[data-type="SiteSearch"]').hide();
    },
    // Keeping this here to be backward compatible with themes prior to 2018.2.0, do not use this!
    verifyShowSiteSearch: function(): void {
        if (this.$('[data-action="show-sitesearch"]').length > 0) {
            let hash = Backbone.history.getFragment() || '';
            hash = hash.indexOf('?') === -1 ? hash : hash.substring(0, hash.indexOf('?'));
            const is_home = hash === '' || hash === '/';

            if (Utils.getDeviceType() !== 'desktop' && is_home) {
                this.showSiteSearch(null, true);
            } else {
                // This hide sitesearch when navigate
                this.hideSiteSearch();
            }
        }
    },
    // @method showSidebar
    // @return {Void}
    showSidebar: function(): void {
        jQuery('#main').addClass('header-sidebar-opened');
    },

    // @method hideSidebar
    // @return {Void}
    hideSidebar: function(e): void {
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
        'Header.MiniCart': function() {
            return new HeaderMiniCartView();
        },
        'Header.MiniCartSummary': function() {
            return new HeaderMiniCartSummaryView();
        },
        'Header.Profile': function() {
            const password_protected_site = SC.ENVIRONMENT.siteSettings.siteloginrequired === 'T';
            const isLoggedIn = ProfileModel.getInstance().get('isLoggedIn') === 'T';
            if (!password_protected_site || isLoggedIn) {
                const header_profile_view_options = _.extend(
                    {
                        showMyAccountMenu: true,
                        application: this.application
                    },
                    this.options.headerProfileViewOptions || {}
                );
                return new HeaderProfileView(header_profile_view_options);
            }
            return null;
        },
        'Header.Logo': function() {
            return new HeaderLogoView(this.options);
        },
        'Header.Menu': function() {
            const header_view_options = _.extend(
                {
                    application: this.application
                },
                this.options.headerProfileViewOptions || {}
            );

            return new HeaderMenuView(header_view_options);
        },
        'Global.HostSelector': function() {
            return new GlobalViewsHostSelectorView();
        },
        'Global.CurrencySelector': function() {
            return new GlobalViewsCurrencySelectorView();
        },
		'MusicianResourceHeader.Profile': function() {
            const password_protected_site = SC.ENVIRONMENT.siteSettings.siteloginrequired === 'T';
            const isLoggedIn = ProfileModel.getInstance().get('isLoggedIn') === 'T';
            if (!password_protected_site || isLoggedIn) {
                const header_profile_view_options = _.extend(
                    {
                        showMyAccountMenu: true,
                        musicianResourcePage:true,
                        application: this.application
                    },
                    this.options.headerProfileViewOptions || {}
                );
                return new HeaderProfileView(header_profile_view_options);
            }
            return null;
        },
    },
    getContext: function getContext() {

        var currentPageURLHref = window.location.href.toLocaleLowerCase();
        
        if(currentPageURLHref.indexOf("musicians-resource") != -1 || currentPageURLHref.indexOf("musiciansresource") != -1){
            SessionStorageHandler.set("musician-resource-page", "true");
            sessionStorage.setItem("musician-page","true");
        }

        if(currentPageURLHref.indexOf("/cart")!= -1 ){           
            SessionStorageHandler.set("musician-resource-page", "false");
        }

        if(currentPageURLHref.indexOf("checkout") != -1 && currentPageURLHref.indexOf("musicians-resource") != -1){   
            SessionStorageHandler.set("musician-resource-page", "true");
        }
        
        if((currentPageURLHref.indexOf("checkout") != -1) && (currentPageURLHref.indexOf("frommusician") != -1)){
            SessionStorageHandler.set("musician-resource-page","true");
        }
               
        if(currentPageURLHref.indexOf("is=checkout") != -1){
            SessionStorageHandler.set("musician-resource-page", "false");
        }
        if(currentPageURLHref.indexOf("my_account") != -1){
            SessionStorageHandler.set("musician-resource-page","false");
        }

        var isMusicianResourcePage = (SessionStorageHandler.get("musician-resource-page") == "true") ? true: false;        
        const environment = SC.ENVIRONMENT;
        const show_languages = environment.availableHosts && environment.availableHosts.length > 1;
        const show_currencies =
            environment.availableCurrencies &&
            environment.availableCurrencies.length > 1 &&
            !Configuration.get('header.notShowCurrencySelector');
        
        return {
            isStandalone: this.application.isStandalone(),
            // @property {Profile.Model} profileModel
            profileModel: ProfileModel.getInstance(),
            // @property {Boolean} showLanguages
            showLanguages: show_languages,
            // @property {Boolean} showCurrencies
            showCurrencies: show_currencies,
            // @property {Boolean} showLanguagesOrCurrencies
            showLanguagesOrCurrencies: show_languages || show_currencies,
            // @property {Boolean} showLanguagesAndCurrencies
            showLanguagesAndCurrencies: show_languages && show_currencies,
            // @property {Boolean} isHomeTouchpoint
            isHomeTouchpoint: Configuration.currentTouchpoint === 'home',
            // @property {String} cartTouchPoint
            cartTouchPoint: Configuration.get('modulesConfig.Cart.startRouter', false)
                ? Configuration.currentTouchpoint
                : 'viewcart',
            isMusicianResourcePage: isMusicianResourcePage,
            // @ismusicianresourcePage 
			logoUrl: Utils.getAbsoluteUrlOfNonManagedResources(Configuration.get('header.logoUrl')),
            // @property {String} headerLinkHref
            logoLinkHref1: this.options.headerLinkHref || '/',
			logoLinkHref2: '/musicians-resource',
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
    destroy: function(): void {
        BackboneView.prototype.destroy.apply(this, arguments);
        Backbone.history.off('all', this.verifyShowSiteSearch);
    }
});
