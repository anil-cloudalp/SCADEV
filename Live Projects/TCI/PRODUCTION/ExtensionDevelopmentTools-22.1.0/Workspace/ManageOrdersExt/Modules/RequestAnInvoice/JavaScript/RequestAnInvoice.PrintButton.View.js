define(
  'TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.View',
[
'tci_manageordersext_requestaninvoice_print_button.tpl',
'Backbone.View',
'underscore',
'TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.Model'
],
function (
  find_invoice_print_button_tpl,
  BackboneView,
  _,
  FindInvoicePrintButtonModel
  )
  {
    'use strict';

    var RequestAnInvoiceView = BackboneView.extend({
      template: find_invoice_print_button_tpl,
      events: {
        'click [data-type="print-invoice"]': 'printInvoice'
      },
      initialize: function initialize () {
        Backbone.View.prototype.initialize.apply(this, arguments);
        this.trackingInfo = this.options.trackingInfo;
      },
      submitHandler: function submitHandler (e) {
        return this.printInvoice(e);
      },
      printInvoice: function printInvoice (e) {
        // console.log('this.trackingInfo', this.trackingInfo);
        e.preventDefault();
        var printModel = new FindInvoicePrintButtonModel();
        printModel.fetch({
          data: this.trackingInfo
        }).then(function (results) {
          // console.log('results', results)
          var baseurl = SC.ENVIRONMENT.embEndpointUrl.url.search('com') + 3;
          baseurl = SC.ENVIRONMENT.embEndpointUrl.url.slice(0, baseurl);
          var url = results && results.url ? baseurl + results.url : null
          window.open(url);
        });
      }
      ,	getContext: function getContext (){}
    });

    return RequestAnInvoiceView;
  });

