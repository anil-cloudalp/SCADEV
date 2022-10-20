// @module TCI.ManageOrdersExt.RequestAReturn
define('TCI.ManageOrdersExt.RequestAReturn.Items.View'
,	[
	'Backbone.View',
  'tci_manageordersext_requestareturn_items.tpl',
  'TCI.ManageOrdersExt.RequestAReturn.Items.Model',
  'GlobalViews.Confirmation.View',
  'jQuery',
  'underscore',
    ]
, function (
	BackboneView,
  tci_manageordersext_requestareturn_items_tpl,
  RequestAReturnItemsModel,
  GlobalViewsConfirmationView,
  $,
  _
)
{
    'use strict';

	var RequestAReturnItemsView = BackboneView.extend({
		template: tci_manageordersext_requestareturn_items_tpl,
		events: {
		  'click .request-line-item-return': 'saveForm',
      'change .returnQuantity': 'updateQuantity'
		},
		initialize: function (options) {
      this.application = options.application;
      this.trackingInfo = options.eligible;
      this.ineligibleItems = options.ineligible;
      this.reason = options.reason;
      this.name = options.name;
      this.email = options.email;
      this.phone = options.phone;
      this.order = options.order;
    },
		childViews : {},
    updateQuantity: function (e) {
      var $target = $(e.target);
      var value = parseInt($target.val());
      var max = parseInt($target.attr('max'));
      var min = parseInt($target.attr('min'));
      var $checkboxToUpdate = $target
      .closest('.return-eligibility-eligible-items')
      .find('input[type="checkbox"]');
      var id = $checkboxToUpdate.attr('data-id');
      var rate = parseFloat($checkboxToUpdate.attr('data-rate'));
      var quantity;
      var updatedAmount;
      if (value <= max && value >= min) {
        $target.val(value);
        $checkboxToUpdate.attr('data-quantity', value);
      } else if (value < min) {
        $target.val(min);
        $checkboxToUpdate.attr('data-quantity', min);
      } else if (value > max) {
        $target.val(max);
        $checkboxToUpdate.attr('data-quantity', max);
      }
      quantity = parseInt($checkboxToUpdate.attr('data-quantity'));
      updatedAmount = '$' + (rate * quantity).toFixed(2);
      $checkboxToUpdate.attr('data-amount', updatedAmount);
      this.trackingInfo.forEach(function (item) {
        if (item.id === id) {
            item.inputAmount = $checkboxToUpdate.attr('data-amount');
            item.inputQuantity = $checkboxToUpdate.attr('data-quantity');
            $checkboxToUpdate.attr('data-inputAmount', item.inputAmount);
            $checkboxToUpdate.attr('data-inputQuantity', item.inputQuantity);
        }
      });
      this.render();
    },
    saveForm: function () {
      var self = this;
      var returns = new RequestAReturnItemsModel();
      var $checkbox = $('input[type="checkbox"]:checked')
      var itemsToReturn = [];
      for (var i = 0; i < $checkbox.length; i++) {
        if ($checkbox[i].dataset) {
          var itemToReturn = {};
          itemToReturn.amount = $checkbox[i].dataset.inputamount ? $checkbox[i].dataset.inputamount : $checkbox[i].dataset.amount;
          $checkbox[i].dataset.description ? itemToReturn.description = $checkbox[i].dataset.description : null;
          $checkbox[i].dataset.id ? itemToReturn.id = $checkbox[i].dataset.id : null;
          $checkbox[i].dataset.itemno ? itemToReturn.itemno = $checkbox[i].dataset.itemno : null;
          itemToReturn.quantity = $checkbox[i].dataset.inputquantity ?  $checkbox[i].dataset.inputquantity : $checkbox[i].dataset.quantity;
          $checkbox[i].dataset.rate ? itemToReturn.rate = $checkbox[i].dataset.rate : null;
        }
        itemsToReturn.push(itemToReturn);
      }
      if (itemsToReturn.length) {
        returns.fetch({
          data: {
            itemsToReturn: JSON.stringify(itemsToReturn),
            name: this.name,
            email: this.email,
            phone: this.phone,
            reason: this.reason,
            order: this.order
          }
        }).then(function () {          
          var returnConfirmationView = new GlobalViewsConfirmationView({
          title: _('Return Request Submitted').translate()
          ,	body: _('We have received your return request. We will review your request and get back to you within 2 business days.').translate()
          ,	confirmLabel: _('OK').translate()
          ,	hideCancelButton: true
          ,	autohide: true
          });
          self.application.getLayout().showInModal(returnConfirmationView);
        });
      }
    },
		getContext: function () {
      return {
        trackingInfo: this.trackingInfo,
        ineligible: this.ineligibleItems,
        showIneligible: !!this.ineligibleItems.length,
        reason: this.reason,
        name: this.name,
        email: this.email,
        phone: this.phone
      }
		}
	});

	return RequestAReturnItemsView;
});
