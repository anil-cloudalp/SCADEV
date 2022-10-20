
define(
	'CA.ShowCaseFields.ShowCaseFields'
,   [
		'CA.ShowCaseFields.ShowCaseFields.View',
		'Case.Fields.Model',
		'Utils',
		'Case.Create.View',
		'CA.ShowCaseFields.ShowCaseFields.Model'
	]
,   function (
		ShowCaseFieldsView,
		CaseFieldsModel,
		Utils,
		CaseCreateView,
		ShowCaseFieldsModel
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
			/*console.log("new ext",CaseFieldsModel);
			var model = new ShowCaseFieldsModel();
			model.fetch().done(function(resp){
				console.log('rseo',resp);
			})*/
			
		}
	};
});