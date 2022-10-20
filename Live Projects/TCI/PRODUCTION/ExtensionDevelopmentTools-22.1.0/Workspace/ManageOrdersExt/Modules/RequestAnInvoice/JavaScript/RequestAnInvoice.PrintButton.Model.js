define(
  'TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.Model',
[
  'Utils',
  'underscore'
  , 'Backbone'
]
, function (
  Utils,
  _
  , Backbone
)
{
  'use strict';  
  return Backbone.Model.extend({
    //@property {String} urlRoot
    urlRoot: Utils.getAbsoluteUrl(
      getExtensionAssetsPath(
          "services/RequestAnInvoice.PrintButton.Service.ss"
      )
  )
  });
});

