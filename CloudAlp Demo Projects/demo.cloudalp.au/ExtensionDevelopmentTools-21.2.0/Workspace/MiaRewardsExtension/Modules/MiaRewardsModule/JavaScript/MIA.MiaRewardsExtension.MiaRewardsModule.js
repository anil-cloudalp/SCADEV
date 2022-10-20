define(
	'MIA.MiaRewardsExtension.MiaRewardsModule', [
		'MIA.MiaRewardsExtension.MiaRewardsModule.View',
		'MIA.MiaRewardsExtension.SubmitClaim.View',
		'Utils'
	],
	function (
		MiaRewardsModuleView,
		SubmitClaimView,
		Utils
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */

				var myaccountmenu = container.getComponent("MyAccountMenu");
				var pageTypeComponent = container.getComponent("PageType");
				var loginregister = container.getComponent("LoginRegisterPage");



				var urlRoot = Utils.getAbsoluteUrl(
					getExtensionAssetsPath(
						"services/MiaRewardsModule.Service.ss"
					)
				)

				//$.get(urlRoot +"?submit-claim=true").
				console.log(urlRoot + "?getListData=true");


				var pageType = {
					name: 'MIA RewardsExt',
					view: MiaRewardsModuleView,
					routes: ['mia-rewards']
				}
				pageTypeComponent.registerPageType(pageType);

				var pageType1 = {
					name: 'SubmitClaim',
					view: SubmitClaimView,
					routes: ['submit-claim']
				}
				pageTypeComponent.registerPageType(pageType1);

				var miarewardsmenugroup = {
					id: "miarewards_group",
					name: "Rewards",
					index: 10
				}
				var miarewardsGroupEntry = {
					id: "miarewards_groupentry",
					groupid: "miarewards_group",
					name: "MIA Rewards",
					index: 1,
					url: "mia-rewards"
				}

				myaccountmenu.addGroup(miarewardsmenugroup);
				myaccountmenu.addGroupEntry(miarewardsGroupEntry);


			}
		};
	});