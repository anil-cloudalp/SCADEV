
define(
	'RudraCustomization.homePageLeadRecord.homePageLeadRecord'
,   [
		'RudraCustomization.homePageLeadRecord.homePageLeadRecord.View'
	,	'RudraCustomization.homePageLeadRecord.ContactusPage.view'
	]
,   function (
		homePageLeadRecordView
	,	ContactView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var pageType = container.getComponent('PageType');
			var contactUsPage = {
				name: 'contact',
				routes: ['contact'],
				view: ContactView
			}
			pageType.registerPageType(contactUsPage);
			
			if(layout)
			{
				layout.addChildView('home-lead-form', function() { 
					return new homePageLeadRecordView({ container: container });
				});
			}

		}
	};
});
