/// <amd-module name="SubscriptionsExt"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import { MyAccountMenu } from '../../../Advanced/Header/JavaScript/MyAccountMenu';

import DailyMeditationsView = require('./DailyMeditations.View');
import WelsConnectionView = require('./WelsConnection.View');
import BswSubscriptionView = require('./BswSubscription.View');
import MySubscriptionsView = require('./MySubscriptions.View');
import EficSubscriptionView = require('./EficSubscription.View');


export = {
  mountToApp: function(application) {
	  
		const pageType = application.getComponent('PageType');
		
		pageType.registerPageType({
			'name': 'my_subscriptions'
		,	'routes': ['my-subscriptions']
		,	'view': MySubscriptionsView
		});
		
		pageType.registerPageType({
			'name': 'daily_meditations'
		,	'routes': ['daily-meditations']
		,	'view': DailyMeditationsView
		});
		pageType.registerPageType({
			'name': 'efic_subscription'
		,	'routes': ['digital-forward-in-christ']
		,	'view': EficSubscriptionView
		});
		
		pageType.registerPageType({
			'name': 'wels_connection'
		,	'routes': ['wels-connection-detail']
		,	'view': WelsConnectionView
		});
		pageType.registerPageType({
			'name': 'wels_connection'
		,	'routes': ['kids-connection']
		,	'view': WelsConnectionView
		});
		pageType.registerPageType({
			'name': 'bsw_subscription'
		,	'routes': ['bsw-subscription']
		,	'view': BswSubscriptionView
		});
		
		const myAccountMenu = MyAccountMenu.getInstance();
		
		myAccountMenu.addEntry({
			id: 'subscriptions',
			name: Utils.translate('My Subscriptions'),
			index: 2
		});
		
		myAccountMenu.addSubEntry({
			entryId: 'subscriptions',
			id: 'my_subscriptions',
			name: Utils.translate('Subscriptions'),
			url: 'my-subscriptions',
			index: 0
		});
  }
};