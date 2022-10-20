/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Header.Profile.View"/>

import * as header_profile_tpl from 'header_profile.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import { Configuration } from '../../../Commons/Utilities/JavaScript/Configuration';
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';

import HeaderMenuMyAccountView = require('../../../Advanced/Header/JavaScript/Header.Menu.MyAccount.View');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import SessionStorageHandler = require("../../../Commons/Utilities/JavaScript/SessionStorageHandler");
import Session = require('../../../Commons/Session/JavaScript/Session');

// @module Header

// @class Header.Profile.View
export = BackboneView.extend({
    template: header_profile_tpl,
	events: {

        'click [data-touchpoint="login"]': 'noMoreSession',
        'click [data-touchpoint="customercenter"]': 'noMoreSession',
        'click [data-action = "musician-login"]': 'SessionInLogin'
    },
    initialize: function(options) {
        const self = this;
        ProfileModel.getPromise().done(function() {
            self.render();
        });
        this.application = options.application;
        this.on('afterViewRender', function() {
            Utils.ellipsis('.header-profile-loading-indicator');
        });
		this.options.musicianResourcePage;
    },
    noMoreSession: function() {
        SessionStorageHandler.set("musician-resource-page", "false"); 
    },
    SessionInLogin: function() {
        let login = Session.get('touchpoints.login');
        login +=`&origin=${this.application.getConfig().currentTouchpoint}`;
        login += `&origin_hash=musician-resource`;
        window.location.href = login;
    },
    childViews: {
        'Header.Menu.MyAccount': function() {
            return new HeaderMenuMyAccountView(this.options);
        } 
    },

    // @method getContext @return {Header.Profile.View.Context}
    getContext: function() {
        const profile = ProfileModel.getInstance();
        const is_loading =
            !Utils.getPathFromObject(Configuration, 'performance.waitForUserProfile', true) &&
            ProfileModel.getPromise().state() !== 'resolved';
        const is_logged_in =
            (profile.get('isLoggedIn') === 'T' ||
                (profile.get('isRecognized') === 'T' &&
                    Configuration.get('header.showRecognizedShopper', true))) &&
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
            showLogin: Configuration.getRegistrationType() !== 'disabled',
            // @property {Boolean} showRegister
            showRegister:
                Configuration.getRegistrationType() === 'optional' ||
                Configuration.getRegistrationType() === 'required',
			showHome: !!this.options.musicianResourcePage	
        };
    }
});
