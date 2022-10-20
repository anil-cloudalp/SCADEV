/// <amd-module name="LandingPages"/>

import Utils = require('../../../Commons/Utilities/JavaScript/Utils');

import AboutMiaView = require('./AboutMia.View');
import ServicesView = require('./Services.View');
import ContactView = require('./Contact.View');
import BecomePartnerView = require('./BecomePartner.View');
import BlogView = require('./Blog.View');

import VendorsView = require('./Vendors.View');
import YealinkView = require('./Yealink.View');
import RingcentralView = require('./Ringcentral.View');
import GigasetView = require('./Gigaset.View');
import EngeniusView = require('./Engenius.View');
import IservView = require('./Iserv.View');
import ChannelUcView = require('./ChannelUc.View');
import EpygiView = require('./Epygi.View');
import ItemListView = require('./ItemList.View');
import CommboxView = require('./Commbox.View');
import EclipseUcNewView = require('./EclipseUcNew.View');
import DialPadNewView = require('./DialpadNew.View');
import ClobbaNewView = require('./ClobbaNew.View');
import RibbonNewView = require('./RibbonNew.View');
import MicrosoftNewView = require('./MicrosoftNew.View');
import Cc4TeamsNewView = require('./Cc4TeamsNew.View');
import UbiquitiNewView = require('./UbiquitiNew.View');
import JabraNewView = require('./JabraNew.View');
import PolyNewView = require('./PolyNew.View');



export = {
  mountToApp: function(application) {
	  
		const pageType = application.getComponent('PageType');
		
		pageType.registerPageType({
            name: 'inventory_availability',
            routes: ['inventory-availability'],
            view: ItemListView
        });
		pageType.registerPageType({
            name: 'commboxview',
            routes: ['commbox'],
            view: CommboxView
        });
		pageType.registerPageType({
            name: 'about-us',
            routes: ['about-us'],
            view: AboutMiaView
        });
		pageType.registerPageType({
            name: 'value_add_services',
            routes: ['value-add-services'],
            view: ServicesView
        });
		pageType.registerPageType({
            name: 'contact',
            routes: ['contact'],
            view: ContactView
        });
		pageType.registerPageType({
            name: 'become_partner',
            routes: ['become-a-partner'],
            view: BecomePartnerView
        });
		pageType.registerPageType({
            name: 'blog_page',
            routes: ['blog'],
            view: BlogView
        });
		
		pageType.registerPageType({
            name: 'vendors-page',
            routes: ['vendors'],
            view: VendorsView,
            defaultTemplate: {
                name: 'vendors.tpl',
                displayName: 'Vendors Default',

            }
        });

        pageType.registerPageType({
            name: 'yealink-page',
            routes: ['yealink'],
            view: YealinkView,
            defaultTemplate: {
                name: 'yealink.tpl',
                displayName: 'Yealink Default',

            }
        });

        pageType.registerPageType({
            name: 'ringcentral-page',
            routes: ['ringcentral'],
            view: RingcentralView,
            defaultTemplate: {
                name: 'ringcentral.tpl',
                displayName: 'Ringcentral Default',

            }
        });
        pageType.registerPageType({
            name: 'gigaset-page',
            routes: ['gigaset'],
            view: GigasetView,
            defaultTemplate: {
                name: 'gigaset.tpl',
                displayName: 'Gigaset Default',

            }
        });
        pageType.registerPageType({
            name: 'engenius-page',
            routes: ['engenius'],
            view: EngeniusView,
            defaultTemplate: {
                name: 'engenius.tpl',
                displayName: 'Engenius Default',

            }
        });
        pageType.registerPageType({
            name: 'iserv-page',
            routes: ['iserv'],
            view: IservView,
            defaultTemplate: {
                name: 'iserv.tpl',
                displayName: 'Iserv Default',

            }
        });
        pageType.registerPageType({
            name: 'channeluc-page',
            routes: ['channel-uc'],
            view: ChannelUcView,
            defaultTemplate: {
                name: 'channelUc.tpl',
                displayName: 'ChannelUc Default',

            }
        });
        pageType.registerPageType({
            name: 'epygi-page',
            routes: ['epygi'],
            view: EpygiView,
            defaultTemplate: {
                name: 'epygi.tpl',
                displayName: 'Epygi Default',

            }
        });
		pageType.registerPageType({
            name: 'eclipse-uc-page',
            routes: ['eclipse-uc'],
            view: EclipseUcNewView
        });
        pageType.registerPageType({
            name: 'dialpad-page',
            routes: ['dialpad'],
            view: DialPadNewView
        });
        pageType.registerPageType({
            name: 'clobba-page',
            routes: ['clobba'],
            view: ClobbaNewView
        });
        pageType.registerPageType({
            name: 'ribbon-page',
            routes: ['ribbon'],
            view: RibbonNewView
        });
        pageType.registerPageType({
            name: 'microsoft-page',
            routes: ['microsoft'],
            view: MicrosoftNewView
        });
        pageType.registerPageType({
            name: 'cc4teams-page',
            routes: ['cc4teams'],
            view: Cc4TeamsNewView
        });
        pageType.registerPageType({
            name: 'ubiquiti-page',
            routes: ['ubiquiti'],
            view: UbiquitiNewView
        });
        pageType.registerPageType({
            name: 'jabra-new-page',
            routes: ['jabra'],
            view: JabraNewView
        });
        pageType.registerPageType({
            name: 'poly-new-page',
            routes: ['poly'],
            view: PolyNewView
        });

  }
};
