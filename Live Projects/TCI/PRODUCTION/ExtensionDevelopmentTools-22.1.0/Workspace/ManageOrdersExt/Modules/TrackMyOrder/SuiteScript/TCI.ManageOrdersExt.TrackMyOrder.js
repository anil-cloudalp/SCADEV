// TCI.ManageOrdersExt.TrackMyOrder.js
// Load all your starter dependencies in backend for your extension here
// ----------------

define('TCI.ManageOrdersExt.TrackMyOrder'
,	[
		'TCI.ManageOrdersExt.TrackMyOrder.ServiceController',
		'SC.Model',
		'Configuration'
	]
,	function (
		TrackMyOrderServiceController,
		SCModel,
		Configuration
	)
{
	'use strict';
	return SCModel.extend({
		name: 'TrackYourOrder',  
		getTracking: function getTracking (options) {
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
			if (!this.areParametersValid(options)) {
				return errors.missingParameters;
			}
			var orderID = options.order;
			var billingZipCode = options.zip;
			var results = this.performSearch('tranid', billingZipCode, orderID);
			if (results && !results.length) {
				results = this.performSearch('custbody_otherrefnum', billingZipCode, orderID);
			}
			if(results && !!results.length) {
				var updatedResults = [];
				for (var i = 0; i < results.length; i++) {
				var row = results[i];
				var item = this.getRowInformation(row);
				updatedResults.push(item);
				}
				return {
					success: true
					,   data: updatedResults
					,   status: 200
				};
			}
			return errors.orderNotFound;
		},
		areParametersValid: function areParametersValid (parameters) {
		  	return parameters && parameters.order && parameters.zip;
		},
		performSearch: function performSearch (field, zip, orderID) {
			var loadedSearch = nlapiLoadSearch(null, 707);
			loadedSearch.addFilter(new nlobjSearchFilter('billzip', null, 'contains', zip.slice(0, 5)));
			loadedSearch.addFilter(new nlobjSearchFilter(field, null, 'is', orderID));
			loadedSearch.addColumn(new nlobjSearchColumn('custbody10'));
			var search = loadedSearch.runSearch();
			return search.getResults(0, 1000); // 1000 is the maximum
		},
		getRowInformation: function getRowInformation (row) {
			var item = {};
			item.subscriptionEmail = row.getValue('custbody10') ? row.getValue('custbody10') : null;
			item.name = row.getText('entity') ? row.getText('entity') : null;
			item.shipToName = row.getValue('shipaddressee') ? row.getValue('shipaddressee') : null;
			item.poNumber = row.getValue('otherrefnum') ? row.getValue('otherrefnum') : null;
			item.orderNumber = row.getValue('tranid') ? row.getValue('tranid') : null;
			item.orderDate = row.getValue('trandate') ? row.getValue('trandate') : null;
			item.shipDate = row.getValue('trandate', 'fulfillingtransaction') ? row.getValue('trandate', 'fulfillingtransaction') : null;
			item.item = row.getValue('custcol_ava_item') ? row.getValue('custcol_ava_item') : null;
			item.quantity = row.getValue('quantity') ? row.getValue('quantity') : null;
			item.status = row.getText('statusref', 'fulfillingTransaction') ? row.getText('statusref', 'fulfillingTransaction') : null;
			item.tracking = row.getValue('custcol_line_tracking_number') ? row.getValue('custcol_line_tracking_number') : null;
			item.description = row.getValue('salesdescription', 'item') ? row.getValue('salesdescription', 'item') : null;
		  
			if (!!!item.tracking) {
				var itemSubType = row.getText('custitem6', 'item');
				var subTypesWithNoTracking = ["Student Subscription", "Teacher Subscription", "Student License", "Teacher License"];
				if (subTypesWithNoTracking.indexOf(itemSubType) !== -1) {
					item.tracking = Configuration.get('trackyourorder.noTrackingMessage') + item.subscriptionEmail;
				}
			}
		  	return item;
		}
	});

});