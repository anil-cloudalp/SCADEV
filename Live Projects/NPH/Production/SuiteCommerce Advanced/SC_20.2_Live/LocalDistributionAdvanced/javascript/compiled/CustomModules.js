/// <amd-module name="CustomModules"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
define("CustomModules", ["require", "exports", "AboutUs.View", "OurHistory.View", "WelsRelationship.View", "PublishingProgram.View", "WhatPeopleSaying.View", "JoinOurTeam.View", "PromoteNph.View", "LinkToNph.View", "ReturnsExchanges.View", "ContactUs.View", "ExtraRewards.View", "RewardsBenefits.View", "ExtraWorks.View", "MultiplyingEfforts.View", "Manuscript.View", "PrivacyPolicy.View", "ShippingPolicy.View", "Copyrights.View", "MoreAboutCopyright.View", "ContactUsForm.View", "CustomerMigration.View", "ShopGifts.View"], function (require, exports, AboutUsView, OurHistoryView, WelsRelationshipView, PublishingProgramView, WhatPeopleSayingView, JoinOurTeamView, PromoteNphView, LinkToNphView, ReturnsExchangesView, ContactUsView, ExtraRewardsView, RewardsBenefitsView, ExtraWorksView, MultiplyingEffortsView, ManuscriptView, PrivacyPolicyView, ShippingPolicyView, CopyrightsView, MoreAboutCopyrightView, ContactUsFormView, CustomerMigrationView, ShopGiftsView) {
    "use strict";
    return {
        mountToApp: function (application) {
            var pageType = application.getComponent('PageType');
            pageType.registerPageType({
                'name': 'about-us',
                'routes': ['about-us'],
                'view': AboutUsView
            });
            pageType.registerPageType({
                'name': 'our-history',
                'routes': ['our-history'],
                'view': OurHistoryView
            });
            pageType.registerPageType({
                'name': 'wels-relationship',
                'routes': ['wels-relationship'],
                'view': WelsRelationshipView
            });
            pageType.registerPageType({
                'name': 'our-publishing-program',
                'routes': ['our-publishing-program'],
                'view': PublishingProgramView
            });
            pageType.registerPageType({
                'name': 'hear-what-people-are-saying',
                'routes': ['hear-what-people-are-saying'],
                'view': WhatPeopleSayingView
            });
            pageType.registerPageType({
                'name': 'join-our-team',
                'routes': ['join-our-team'],
                'view': JoinOurTeamView
            });
            pageType.registerPageType({
                'name': 'promote-nph',
                'routes': ['promote-nph'],
                'view': PromoteNphView
            });
            pageType.registerPageType({
                'name': 'link-to-nph',
                'routes': ['link-to-nph'],
                'view': LinkToNphView
            });
            pageType.registerPageType({
                'name': 'returns',
                'routes': ['returns'],
                'view': ReturnsExchangesView
            });
            pageType.registerPageType({
                'name': 'contact-us',
                'routes': ['contact-us'],
                'view': ContactUsView
            });
            pageType.registerPageType({
                'name': 'extra-rewards-loyalty-program',
                'routes': ['extra-rewards-loyalty-program'],
                'view': ExtraRewardsView
            });
            pageType.registerPageType({
                'name': 'extra-rewards-benefits',
                'routes': ['extra-rewards-benefits'],
                'view': RewardsBenefitsView
            });
            pageType.registerPageType({
                'name': 'how-extra-works',
                'routes': ['how-extra-works'],
                'view': ExtraWorksView
            });
            pageType.registerPageType({
                'name': 'multiplying-your-efforts',
                'routes': ['multiplying-your-efforts'],
                'view': MultiplyingEffortsView
            });
            pageType.registerPageType({
                'name': 'manuscript-submission',
                'routes': ['manuscript-submission'],
                'view': ManuscriptView
            });
            pageType.registerPageType({
                'name': 'privacy-policy',
                'routes': ['privacy-policy'],
                'view': PrivacyPolicyView
            });
            pageType.registerPageType({
                'name': 'shipping-policy',
                'routes': ['shipping-policy'],
                'view': ShippingPolicyView
            });
            pageType.registerPageType({
                'name': 'copyrights-permissions',
                'routes': ['copyrights-permissions'],
                'view': CopyrightsView
            });
            pageType.registerPageType({
                'name': 'learn-more-about-copyright',
                'routes': ['learn-more-about-copyright'],
                'view': MoreAboutCopyrightView
            });
            pageType.registerPageType({
                'name': 'contact-modal',
                'routes': ['contact-modal'],
                'view': ContactUsFormView
            });
            pageType.registerPageType({
                'name': 'customer-migration',
                'routes': ['customer-migration'],
                'view': CustomerMigrationView
            });
            pageType.registerPageType({
                'name': 'shop-confirmation-gifts',
                'routes': ['shop-confirmation-gifts'],
                'view': ShopGiftsView
            });
        }
    };
});

//# sourceMappingURL=CustomModules.js.map
