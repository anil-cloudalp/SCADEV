/// <amd-module name="CustomModules"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import AboutUsView = require('./AboutUs.View');
import OurHistoryView = require('./OurHistory.View');
import WelsRelationshipView = require('./WelsRelationship.View');
import PublishingProgramView = require('./PublishingProgram.View');
import WhatPeopleSayingView = require('./WhatPeopleSaying.View');

import JoinOurTeamView = require('./JoinOurTeam.View');
import PromoteNphView = require('./PromoteNph.View');
import LinkToNphView = require('./LinkToNph.View');
import ReturnsExchangesView = require('./ReturnsExchanges.View');
import ContactUsView = require('./ContactUs.View');

import ExtraRewardsView = require('./ExtraRewards.View');
import RewardsBenefitsView = require('./RewardsBenefits.View');
import ExtraWorksView = require('./ExtraWorks.View');
import MultiplyingEffortsView = require('./MultiplyingEfforts.View');
import ManuscriptView = require('./Manuscript.View');

import PrivacyPolicyView = require('./PrivacyPolicy.View');
import ShippingPolicyView = require('./ShippingPolicy.View');
import CopyrightsView = require('./Copyrights.View');
import MoreAboutCopyrightView = require('./MoreAboutCopyright.View');
import ContactUsFormView = require('./ContactUsForm.View');

import CustomerMigrationView = require('./CustomerMigration.View');
import ShopGiftsView = require('./ShopGifts.View');


export = {
  mountToApp: function(application) {
	  
		const pageType = application.getComponent('PageType');
		
		pageType.registerPageType({
			'name': 'about-us'
		,	'routes': ['about-us']
		,	'view': AboutUsView
		});
		pageType.registerPageType({
			'name': 'our-history'
		,	'routes': ['our-history']
		,	'view': OurHistoryView
		});
		pageType.registerPageType({
			'name': 'wels-relationship'
		,	'routes': ['wels-relationship']
		,	'view': WelsRelationshipView
		});
		pageType.registerPageType({
			'name': 'our-publishing-program'
		,	'routes': ['our-publishing-program']
		,	'view': PublishingProgramView
		});
		pageType.registerPageType({
			'name': 'hear-what-people-are-saying'
		,	'routes': ['hear-what-people-are-saying']
		,	'view': WhatPeopleSayingView
		});
		
		pageType.registerPageType({
			'name': 'join-our-team'
		,	'routes': ['join-our-team']
		,	'view': JoinOurTeamView
		});
		pageType.registerPageType({
			'name': 'promote-nph'
		,	'routes': ['promote-nph']
		,	'view': PromoteNphView
		});
		pageType.registerPageType({
			'name': 'link-to-nph'
		,	'routes': ['link-to-nph']
		,	'view': LinkToNphView
		});
		pageType.registerPageType({
			'name': 'returns'
		,	'routes': ['returns']
		,	'view': ReturnsExchangesView
		});
		pageType.registerPageType({
			'name': 'contact-us'
		,	'routes': ['contact-us']
		,	'view': ContactUsView
		});
		
		pageType.registerPageType({
			'name': 'extra-rewards-loyalty-program'
		,	'routes': ['extra-rewards-loyalty-program']
		,	'view': ExtraRewardsView
		});
		pageType.registerPageType({
			'name': 'extra-rewards-benefits'
		,	'routes': ['extra-rewards-benefits']
		,	'view': RewardsBenefitsView
		});
		pageType.registerPageType({
			'name': 'how-extra-works'
		,	'routes': ['how-extra-works']
		,	'view': ExtraWorksView
		});
		pageType.registerPageType({
			'name': 'multiplying-your-efforts'
		,	'routes': ['multiplying-your-efforts']
		,	'view': MultiplyingEffortsView
		});
		pageType.registerPageType({
			'name': 'manuscript-submission'
		,	'routes': ['manuscript-submission']
		,	'view': ManuscriptView
		});
		
		
		pageType.registerPageType({
			'name': 'privacy-policy'
		,	'routes': ['privacy-policy']
		,	'view': PrivacyPolicyView
		});
		pageType.registerPageType({
			'name': 'shipping-policy'
		,	'routes': ['shipping-policy']
		,	'view': ShippingPolicyView
		});
		pageType.registerPageType({
			'name': 'copyrights-permissions'
		,	'routes': ['copyrights-permissions']
		,	'view': CopyrightsView
		});
		pageType.registerPageType({
			'name': 'learn-more-about-copyright'
		,	'routes': ['learn-more-about-copyright']
		,	'view': MoreAboutCopyrightView
		});
		pageType.registerPageType({
			'name': 'contact-modal'
		,	'routes': ['contact-modal']
		,	'view': ContactUsFormView
		});
			
		pageType.registerPageType({
			'name': 'customer-migration'
		,	'routes': ['customer-migration']
		,	'view': CustomerMigrationView
		});
		pageType.registerPageType({
			'name': 'shop-confirmation-gifts'
		,	'routes': ['shop-confirmation-gifts']
		,	'view': ShopGiftsView
		});

  }
};