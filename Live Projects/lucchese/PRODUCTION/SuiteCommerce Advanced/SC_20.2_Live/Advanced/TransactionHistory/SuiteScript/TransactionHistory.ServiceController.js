/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// TransactionHistory.ServiceController.js
// ----------------
// Service to list transactions
define('TransactionHistory.ServiceController', [
    'ServiceController',
    'TransactionHistory.Model',
    'Application'
], function(ServiceController, TransactionHistoryModel, Application) {
    // @class TransactionHistory.ServiceController List transactions
    // @extend ServiceController
    return ServiceController.extend({
        // @property {String} name Mandatory for all ssp-libraries model
        name: 'TransactionHistory.ServiceController',
        
        options: {
            common: {
                requireLogin: true
            }
        },
        _validatePermission: function() {
            const permissions = Application.getPermissions().transactions;
            if (
                !(
                    permissions.tranFind > 0 &&
                    (permissions.tranCustInvc > 0 ||
                        permissions.tranCustCred > 0 ||
                        permissions.tranCustPymt > 0 ||
                        permissions.tranCustDep > 0 ||
                        permissions.tranDepAppl > 0)
                )
            ) {
                throw forbiddenError;
            }
        },
        get: function() {
            this._validatePermission();
            return TransactionHistoryModel.list({
                filter: this.request.getParameter('filter'),
                order: this.request.getParameter('order'),
                sort: this.request.getParameter('sort'),
                from: this.request.getParameter('from'),
                to: this.request.getParameter('to'),
                page: this.request.getParameter('page') || 1
            });
        }
    });
});
