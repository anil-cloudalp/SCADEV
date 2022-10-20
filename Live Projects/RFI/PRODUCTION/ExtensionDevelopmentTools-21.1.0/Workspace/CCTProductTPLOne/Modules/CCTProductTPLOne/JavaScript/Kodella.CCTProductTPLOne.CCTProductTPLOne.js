
define(
	'Kodella.CCTProductTPLOne.CCTProductTPLOne'
,   [
		'Kodella.CCTProductTPLOne.CCTProductTPLOne.View'
	]
,   function (
		CCTProductTPLOneView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (application)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			CCTProductTPLOneView.prototype.application = application;

			application.getComponent('CMS').registerCustomContentType({
			  id: 'cct_product_templateone'
			, view: CCTProductTPLOneView
			});
			
		

		}
	};
});
