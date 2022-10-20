define('Invoice.OpenList.View.ACSInvoicePayFix', [
    'Invoice.OpenList.View',
    'underscore'
], function InvoiceOpenListViewACSInvoicePayFix(
    InvoiceOpenListView,
    _
) {
    'use strict';

    _.extend(InvoiceOpenListView.prototype, {
        
        makeAPayment: _.wrap(InvoiceOpenListView.prototype.makeAPayment, function makeAPayment(fn) {
            var invoicesList;
            var notSelectedInvoices = [];
            var currentInvoice;
            var self = this;
            fn.apply(this, _.toArray(arguments).slice(1));

            // This is likely a product issue.
            // If all invoices have been selected first time, unselecting changes don't reflect on payment page.
            if (this.selectedInvoices && this.selectedInvoices.length && this.livePaymentModel) {
                invoicesList = this.getInvoicesList();
                invoicesList.forEach(function forEach(invoice) {
                    currentInvoice = _.findWhere(self.selectedInvoices, { id: invoice.id });
                    if (_.isEmpty(currentInvoice)) {
                        notSelectedInvoices.push(invoice.id);
                    }
                });
                if (notSelectedInvoices.length) {
                    _.each(notSelectedInvoices, function unselectInvoiceForPayment(invoiceId) {
                        self.livePaymentModel.unselectInvoice(invoiceId);
                    });
                }
            }
        })
    });
});
