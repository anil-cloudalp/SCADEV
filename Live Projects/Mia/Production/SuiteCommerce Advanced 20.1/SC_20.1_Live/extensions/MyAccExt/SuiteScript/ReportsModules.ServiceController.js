
//@MODULE ReportsModules

define('ReportsModules.ServiceController'
, [
  'ServiceController'
  , 'Application'
  , 'ReportsModules.Model'
]
, function
(
  ServiceController
  , Application
  , ReportsModulesModel
)
{
  'use strict';

  return ServiceController.extend({
    name: 'ReportsModules.ServiceController',
	options: function() {
		return {
			common: {
				requireLogin: true
			}
		};
	},
    get: function()
    {
      
      return ReportsModulesModel.getSalesOrder();
    }
  });
});
