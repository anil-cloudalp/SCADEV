// TCI.ManageOrdersExt.RequestAReturn.js
// Load all your starter dependencies in backend for your extension here
// ----------------

define('TCI.ManageOrdersExt.RequestAReturn'
,	[
		'TCI.ManageOrdersExt.RequestAReturn.ServiceController',
		'SC.Model'
	]
,	function (
		RequestAReturnServiceController,
		SCModel
	)
{
	'use strict';
	return SCModel.extend({
		name: 'RequestAReturn',
		daysBetween: function daysBetween(first, second) {
			var one = new Date(first.getFullYear(), first.getMonth(), first.getDate());
			var two = new Date(second.getFullYear(), second.getMonth(), second.getDate());
			var millisecondsPerDay = 1000 * 60 * 60 * 24;
			var millisBetween = two.getTime() - one.getTime();
			var days = millisBetween / millisecondsPerDay;
			return Math.floor(days);
		},
		getTracking: function getTracking (options) {
			var self = this;
			var orderID = options.order;
			var billingZipCode = options.zip;
			var errors = {
				missingParameters: {
					status: 500,
					code: 'ERR_MISSING_PARAMETERS',
					message: 'All fields are required.'
				},
				orderNotFound: {
					status: 500,
					code: 'ERR_ORDER_NOT_FOUND',
					message: "We could not find an order matching the PO number you entered. If your PO has leading zeros, you must include those. Additional questions? <a href='https://www.teachtci.com/contact-us/'>Contact us</a>."
				},
				orderNotEligible: {
					status: 500,
					code: 'ERR_ORDER_NOT_ELIGIBLE',
					message:'Order is more than 60 days.'
				},
				orderOnlyHasIneligibleItems: {
					status: 500,
					code: 'ERR_HAS_INELIGIBLE_ITEMS_ONLY',
					message: 'Order has ineligible items only.'
				},
				orderIsComp: {
					status: 500,
					code: 'ERR_ORDER_IS_COMP',
					message: 'Order has an invalid order type.'
				}
			};
			//CASE: FORM IS MISSING INPUTS
			if (!self.areParametersValid(options)) {
			return errors.missingParameters;
			}
			var filters = [
			new nlobjSearchFilter('billzip', null, 'contains', billingZipCode.slice(0, 5)),
			new nlobjSearchFilter('custbody_otherrefnum', null, 'is', orderID),
			new nlobjSearchFilter('mainline',null,'is','T')
			];
			var type = 'invoice';
			var results = nlapiSearchRecord(type, null, filters);
			//search cashsale if no results for invoice
			if (!(results && results.length)) {
			type = 'cashsale';
			results = nlapiSearchRecord(type, null, filters);
			}
			nlapiLogExecution('DEBUG', 'results', JSON.stringify(results));
			nlapiLogExecution('DEBUG', 'type', type);
			
			if(results && results.length) {
				var record = nlapiLoadRecord(type,Number(results[0].id));
				if (record) {
					var isComp = record.getFieldValue('custbody8') === '6';
					if (!isComp) {
						var tranDate = record.getFieldValue('trandate');
						var today = new Date();
						var diff = this.daysBetween(nlapiStringToDate(tranDate), today);
						nlapiLogExecution('DEBUG', 'date diff', diff);
						if (diff < 60) {
							var itemLength = record.getLineItemCount('item');
							if (itemLength) {
							var eligible = [];
							var ineligible = [];
							var isItemGroup = false;
							for (var i = 1; i < itemLength + 1; i++) {
								var soItem = {};
								var isSubscription = record.getLineItemValue('item', 'custcol_ava_taxcodemapping', i) && record.getLineItemValue('item', 'custcol_ava_taxcodemapping', i) === 'SUBSCRIPTION';
								var isOneYearSubscription = record.getLineItemValue('item', 'custcol2', i) && record.getLineItemValue('item', 'custcol2', i) === '1';
								var quantity = record.getLineItemValue('item', 'quantity', i);
								var rate = record.getLineItemValue('item', 'rate', i);
								
								// this is to address itemtype === 'Group'
								if (record.getLineItemValue('item', 'itemtype', i) === 'Group') {
								var itemGroup = {};
								isItemGroup = true;
								itemGroup.description = record.getLineItemValue('item', 'description', i);
									itemGroup.quantity = quantity;
								itemGroup.itemNo = record.getLineItemValue('item', 'item_display', i);
								itemGroup.id = record.getLineItemValue('item', 'id', i);
								itemGroup.rate = 0;
								} else if (isItemGroup && record.getLineItemValue('item', 'itemtype', i) !== 'EndGroup') {
								itemGroup.rate += parseFloat(rate);
								continue;
								} else if (isItemGroup && record.getLineItemValue('item', 'itemtype', i) === 'EndGroup') {
								itemGroup.amount = record.getLineItemValue('item', 'amount', i);
								itemGroup.rate = itemGroup.rate.toFixed(2);
								eligible.push(itemGroup);
								isItemGroup = false;
								}
								
								if (quantity && rate) {
								soItem.amount = record.getLineItemValue('item', 'amount', i);
								soItem.quantity = quantity;
								soItem.itemNo = record.getLineItemValue('item', 'item_display', i);
								soItem.description = record.getLineItemValue('item', 'description', i);
								soItem.id = record.getLineItemValue('item', 'id', i);
								soItem.rate = rate;
								if (isSubscription && isOneYearSubscription) {
									ineligible.push(soItem);
								} else {
									eligible.push(soItem);
								}
								}
							}

							nlapiLogExecution('DEBUG', 'ineligible.length', ineligible.length);
							nlapiLogExecution('DEBUG', 'eligible.length', eligible.length);
							//CASE: ORDER ONLY HAS 1 YEAR SUBSCRIPTION ITEMS
							if (ineligible.length && !eligible.length) {
								return errors.orderOnlyHasIneligibleItems;
							}
							}
							//CASE: ORDER IS MORE THAN 60 DAYS OLD
						} else {
							return errors.orderNotEligible;
						}
						var responseDetails = {
							success: !!eligible.length
							,   eligible: eligible
							,   ineligible: ineligible
							,   status: 200
						};
						//CASE: COMP ORDER
					} else {
						return errors.orderIsComp;
					}
				}
			//CASE: SUCCESS
			if(!!record && responseDetails) {
				return responseDetails;
			}
			//CASE: CANNOT FIND ORDER WITH INFO PROVIDED
			} else {
				return errors.orderNotFound;
			}
		},
		areParametersValid: function areParametersValid (parameters) {
			return parameters && parameters.order && parameters.zip && parameters.reason && parameters.name && parameters.email && parameters.phone;
		}
	});

});