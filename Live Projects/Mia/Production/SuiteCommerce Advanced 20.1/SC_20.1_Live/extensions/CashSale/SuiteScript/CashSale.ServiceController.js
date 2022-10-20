/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// CashSale.Service.ss
// ----------------
// Service to manage cashsale requests
define('CashSale.ServiceController', ['ServiceController', 'CashSale.Model'], function(
    ServiceController,
    CashSaleModel
) {
    // @class CashSale.ServiceController Supports login process
    // @extend ServiceController
    return ServiceController.extend({
        // @property {String} name Mandatory for all ssp-libraries model
        name: 'CashSale.ServiceController',

        // @property {Service.ValidationOptions} options. All the required validation, permissions, etc.
        // The values in this object are the validation needed for the current service.
        // Can have values for all the request methods ('common' values) and specific for each one.
        options: {
            common: {
                requireLogin: true,
                requirePermissions: {
                    list: ['transactions.tranFind.1', 'transactions.tranCashSale.1']
                }
            }
        },

        // @method get The call to CashSale.Service.ss with http method 'get' is managed by this function
        // @return {Transaction.Model.Get.Result || Transaction.Model.List.Result}
        get: function() {
            const id = this.request.getParameter('internalid');
            const status = this.request.getParameter('status');
            const page = this.request.getParameter('page');

            return id
                ? CashSaleModel.get('cashsale', id)
                : CashSaleModel.list({
                      types: 'CashSale',
                      status: status,
                      page: page
                  });
        }
    });
});
