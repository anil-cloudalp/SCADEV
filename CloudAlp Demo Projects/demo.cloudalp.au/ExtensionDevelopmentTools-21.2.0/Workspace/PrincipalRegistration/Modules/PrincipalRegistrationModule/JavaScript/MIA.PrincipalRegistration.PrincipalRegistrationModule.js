
define(
	'MIA.PrincipalRegistration.PrincipalRegistrationModule'
,   [
		'MIA.PrincipalRegistration.PrincipalRegistrationModule.View',
		'MIA.PrincipalRegistration.PrincipalRegistrationModule.Model'
		
	]
,   function (
		PrincipalRegistrationModuleView,
	    PrincipalRegistrationModuleModel
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
			var pageTypeComponent = container.getComponent("PageType");
			var userprofilecomponent = container.getComponent("UserProfile");

			// userprofilecomponent.getUserProfile().then(function(profile) {
			//     console.log(profile.email);
			// 	if(profile.isloggedin)
			// 	{
			// 	 new PrincipalRegistrationModuleModel().fetch({ data: {
			// 		email: profile.email
			// 	}}).then(function(res) {
            //            if(_.has(res,'docID'))
			// 		   container.docID = res.docID;
			// 		   if(_.has(res,'pdfURL'))
			// 		   container.pdfURL = res.pdfURL;
			// 		})
			// 	}
			// });
			// container.waitForPromise();
			
			var pageType = {
				name: 'Principal Registration',
				view:  PrincipalRegistrationModuleView,
				routes: ['principal-registration']
			}
			pageTypeComponent.registerPageType(pageType);	


			



		}
	};
});
