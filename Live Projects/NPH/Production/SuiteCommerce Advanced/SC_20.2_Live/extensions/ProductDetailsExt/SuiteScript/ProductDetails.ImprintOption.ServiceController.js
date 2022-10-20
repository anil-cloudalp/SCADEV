
//@MODULE ProductDetails.ImprintOption

define('ProductDetails.ImprintOption.ServiceController'
, [
    'ServiceController'
  , 'Application'
  , 'ProductDetails.ImprintOption.Model'
  ]
, function
  (
    ServiceController
  , Application
  , ImprintOptionModel
  )
{
  'use strict';

  return ServiceController.extend({
    name: 'ProductDetails.ImprintOption.ServiceController'

  , post: function()
    {
		
		return ImprintOptionModel.search(this.data.itemId);
    }
  });
});