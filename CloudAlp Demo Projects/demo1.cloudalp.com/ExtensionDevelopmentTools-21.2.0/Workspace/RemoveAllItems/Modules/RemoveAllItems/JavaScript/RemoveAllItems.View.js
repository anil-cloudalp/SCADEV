// @module Alp.RemoveAllItems.RemoveAllItems
define('Alp.RemoveAllItems.RemoveAllItems.View'
,	[

		'Utils'
	,	'Backbone'
	, 'GlobalViews.Confirmation.View'
  , 'LiveOrder.Model'
	,'alp_removeallitems_removeallitems.tpl'	
    ]
, function (
		Utils
	,	Backbone
	, GlobalViewsConfirmationView
  , LiveOrderModel
	,	alp_removeallitems_removeallitems_tpl
)
{
    'use strict';

	// @class Alp.RemoveAllItems.RemoveAllItems.View @extends Backbone.View
	return Backbone.View.extend({

		template: alp_removeallitems_removeallitems_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new RemoveAllItemsModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		'click [data-action="remove-all"]': 'removeAll'
		}
		, removeAll: function removeAll ()
    {
      var removeAllLinesConfirmationView = new GlobalViewsConfirmationView
      ({
        callBack: this._removeAll 
        // If the user confirms, this is the function that's called 
        // Note that we just put its name, not this._removeAll() (ie with its brackets)
      , title:Utils.translate('Remove All Items')
      , body:Utils.translate('Are you sure you want to remove all items from your cart?')
      , autohide: true
      });

      // Use the layout component to create the modal dialog
      // Pre-Aconcagua sites will need to pass the application to the view constructor in the entry point file
      // and then use this.options.application.getLayout().showInModal(removeAllLinesConfirmationView);
      return this.options.Layout.showContent(removeAllLinesConfirmationView, {showInModal:true});
    }
	,  _removeAll: function _removeAll(){
		var model = LiveOrderModel.getInstance();
		// The model we use for cart contents is a singleton
		// One, and only one, version of it may exist throughout the whole site

		// Trigger the DELETE request and then re-render the page with whatever it sends back (it should be empty!)
		return model.destroy().done(function (attributes)
		{
			model.set(attributes);
		});
	}
	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Alp.RemoveAllItems.RemoveAllItems.View.Context
	,	getContext: function getContext()
		{
			//@class Alp.RemoveAllItems.RemoveAllItems.View.Context
			return {
				
			};
		}
	});
});
