/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Header.Logo.View"/>

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as header_logo_tpl from 'header_logo.tpl';
import * as _ from 'underscore';

import Configuration = require('../../../Commons/Utilities/JavaScript/SC.Configuration');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import ProfileModel = require('../../../Commons/Profile/JavaScript/Profile.Model');

// @module Header
// @class Header.Logo.View @extends BackboneView
export = BackboneView.extend({
    // @property {Function} template
    template: header_logo_tpl,

    // @method initialize
    // @param {Header.LogoView.Initialize.Options} options
    // @return {Void}

    // @method getContext @return {Header.Logo.View.Context}
    getContext: function() {
        // @class Header.Logo.View.Context
		const url_options = Utils.parseUrlOptions(window.location.search);
		
		const Profile = ProfileModel.getInstance();
		var isChannelUcUser = ((Profile.get('isLoggedIn') === 'T') && (Profile.get('isChannelUcUser') == true))? true:false;
		
        return {
            // @property {String} logoUrl
            logoUrl: Utils.getAbsoluteUrlOfNonManagedResources(Configuration.get('header.logoUrl')),
            // @property {String} headerLinkHref
            headerLinkHref: this.options.headerLinkHref || '/',
            // @property {String} headerLinkTouchPoint
            headerLinkTouchPoint: this.options.headerLinkTouchPoint || 'home',
            // @property {String} headerLinkHashtag
            headerLinkHashtag: this.options.headerLinkHashtag || '#',
            // @property {String} headerLinkTitle
            headerLinkTitle: this.options.headerLinkTitle || SC.ENVIRONMENT.siteSettings.displayname,
			isChannelUc: (_.has(url_options,'ew') && url_options.ew == "T") || isChannelUcUser,
			isChannelUcUser: isChannelUcUser
        };
    }
});
// @class Header.LogoView.Initialize.Options
// @property {String} headerLinkHref This is the URL the header uses
// @property {String} headerLinkTouchPoint
// @property {String} headerLinkHashtag
// @property {String} headerLinkTitle
