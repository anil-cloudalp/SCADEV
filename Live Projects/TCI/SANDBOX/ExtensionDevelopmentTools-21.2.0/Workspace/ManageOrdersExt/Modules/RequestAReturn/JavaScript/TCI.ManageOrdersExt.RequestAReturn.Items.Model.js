// Model.js
// -----------------------
// @module Case
define(
  'TCI.ManageOrdersExt.RequestAReturn.Items.Model', 
  [
      'Backbone', 
      'Utils', 
      'underscore'
  ], function(
      Backbone,
      Utils,
      _
  ) {
      'use strict';
  
      return Backbone.Model.extend({
          // @property {String} urlRoot
          urlRoot: Utils.getAbsoluteUrl(
              getExtensionAssetsPath(
                  "services/RequestAReturn.Items.Service.ss"
              )
          )
      });
  });
  