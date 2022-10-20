
define(
	'CA.MyAccountCustomization.RoleBasedMyAccount'
,   [
		'CA.MyAccountCustomization.RoleBasedMyAccount.View'
	,	'CA.MyAccountCustomization.RoleBasedMyAccount.Model'	
	,	'ProductList.BulkActions.View'
	]
,   function (
		RoleBasedMyAccountView
	,	RoleBasedMyAccountModel	
	, 	ProductListBulkActionsView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (application)
		{
			var newmodel = new RoleBasedMyAccountModel();
			 var promise = newmodel.fetch()
			.then((result) => {
			 if (_.has(result, 'role') && _.has(result, 'user')) {
				 if(result.role == 1149)
					 application.role = 'sales';
				 else if(result.role == 1150)
					 application.role = 'purchasing';
				 else
					 application.role = 'fullaccess';
			 
			 }
			}); 
			application.waitForPromise(promise);
			
			ProductListBulkActionsView.prototype.getContext = _.wrap(ProductListBulkActionsView.prototype.getContext, function (fn) {
				
				var context = fn.apply(this, _.toArray(arguments).slice(1));
				
				if(application.role == "sales")
				{		
					context.toshowaddtocart = false
	
				}else{
	
					context.toshowaddtocart = true
				}		
				return context;
			});

		}
	};
});
