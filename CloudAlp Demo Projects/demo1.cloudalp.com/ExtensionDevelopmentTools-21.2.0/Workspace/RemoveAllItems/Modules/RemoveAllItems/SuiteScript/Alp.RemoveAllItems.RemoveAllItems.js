// Alp.RemoveAllItems.RemoveAllItems.js
// Load all your starter dependencies in backend for your extension here
// ----------------

define('Alp.RemoveAllItems.RemoveAllItems'
,	[
		// 'Alp.RemoveAllItems.RemoveAllItems.ServiceController'
		'LiveOrder.Model'
		, 'LiveOrder.ServiceController'
		, 'SC.Models.Init'
	]
,	function (
		// RemoveAllItemsServiceController
		LiveOrderModel
		, LiveOrderServiceController
		, ModelsInit
	)
{
	'use strict';
	LiveOrderModel.removeAllLines = function ()
  {
    ModelsInit.order.removeAllItems();
  }

  LiveOrderServiceController.delete = function ()
  {
    LiveOrderModel.removeAllLines();
    return LiveOrderModel.get() || {}
  }
	
});