// TCI.ManageOrdersExt.RequestAnInvoice.js
// Load all your starter dependencies in backend for your extension here
// ----------------

define('TCI.ManageOrdersExt.RequestAnInvoice'
,	[
		'TCI.ManageOrdersExt.RequestAnInvoice.ServiceController',
		'SC.Model'
	]
,	function (
		RequestAnInvoiceServiceController,
		SCModel
	)
{
	'use strict';
	return SCModel.extend({
		name: 'TCI.ManageOrdersExt.RequestAnInvoice',  
		getTracking: function getTracking (options) {
			var self = this;
			var orderID = options.order;
			var billingZipCode = options.zip;
			var errors = {
				missingParameters: {
					status: 500,
					code: 'ERR_MISSING_PARAMETERS'
				},
				orderNotFound: {
					status: 500,
					code: 'ERR_ORDER_NOT_FOUND'
				}
			};
			if (!self.areParametersValid(options)) {
			  	return errors.missingParameters;
			}
			var filters = [
				new nlobjSearchFilter('billzip', null, 'contains', billingZipCode.slice(0, 5)),
				new nlobjSearchFilter('custbody_otherrefnum', null, 'is', orderID),
				new nlobjSearchFilter('mainline',null,'is','T'),
				new nlobjSearchFilter('custbody_exclude_invoice',null,'is','F')
			];
			var type = 'invoice';
			var results = nlapiSearchRecord(type, null, filters);
			//search cashsale if no results for invoice
			if (!(results && results.length)) {
				type = 'cashsale';
				results = nlapiSearchRecord(type, null, filters);
			}
			if(results && results.length) {
				var record = nlapiLoadRecord(type,Number(results[0].id));
				if (record) {
					var trackingOrderReturn = {};
					trackingOrderReturn.tranid = record.getFieldValue('custbody_otherrefnum');
					trackingOrderReturn.zip = record.getFieldValue('billzip');
					trackingOrderReturn.customerId = record.getFieldValue('entity');
					trackingOrderReturn.purchaseId = record.getId();          
					var responseDetails = {
						success: !!trackingOrderReturn
						,   data: trackingOrderReturn
						,   status: 200
					};
				} 
				if(!!record && trackingOrderReturn) {
					return responseDetails;
				}
			} else {
			  	return errors.orderNotFound;
			}
		},
		areParametersValid: function areParametersValid (parameters) {
			return parameters && parameters.order && parameters.zip;
		}
	});
});