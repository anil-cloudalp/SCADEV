
// @module CloudAlp.ShoppingCustomization.ShoppingCustomizationProductsQuick
define('CloudAlp.ShoppingCustomization.ShoppingCustomizationProductsQuick.View'
  , [
    'cloudalp_shoppingcustomization_productquickview.tpl'

    , 'CloudAlp.ShoppingCustomization.ShoppingCustomization.Model'

    , 'Backbone'
  ]
  , function (
    cloudalp_shoppingcustomization_productquickview_tpl

    , ShoppingCustomizationModel

    , Backbone
  ) {
    'use strict';

    // @class CloudAlp.ShoppingCustomization.ShoppingCustomizationProductsQuick.View @extends Backbone.View
    return Backbone.View.extend({

      template: cloudalp_shoppingcustomization_productquickview_tpl

      , initialize: function (options) {

        /*  Uncomment to test backend communication with an example service
          (you'll need to deploy and activate the extension first)
        */

        // this.model = new ShoppingCustomizationModel();
        // var self = this;
        // this.model.fetch().done(function(result) {
        // 	self.message = result.message;
        // 	self.render();
        // });
      }

      , events: {
      }

      , bindings: {
      }

      , childViews: {

      }

      //@method getContext @return CloudAlp.ShoppingCustomization.ShoppingCustomizationProductsQuick.View.Context
      , getContext: function getContext() {
        var isTrue = "";
        var isStoreDescription = this.model.get('storedescription') != "" ? isTrue = true : isTrue = false;
        //@class CloudAlp.ShoppingCustomization.ShoppingCustomizationProductsQuick.View.Context
        return {
          isTrue: isTrue,
          storedescription: this.model.get('storedescription')
        };
      }
    });
  });
