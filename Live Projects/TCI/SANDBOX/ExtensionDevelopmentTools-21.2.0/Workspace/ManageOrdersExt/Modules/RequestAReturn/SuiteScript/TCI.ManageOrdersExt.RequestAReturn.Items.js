// TCI.ManageOrdersExt.RequestAReturn.js
// Load all your starter dependencies in backend for your extension here
// ----------------

define('TCI.ManageOrdersExt.RequestAReturn.Items'
,	[
		'TCI.ManageOrdersExt.RequestAReturn.Items.ServiceController',
		'SC.Model',
		'Configuration'
	]
,	function (
		RequestAReturnServiceController,
		SCModel,
		Configuration
	)
{
	'use strict';
	return SCModel.extend({
		name: 'RequestAReturnItems',
		returnRequest: function returnRequest (options) {
			var itemsToReturn = JSON.parse(options.itemsToReturn);
			var name = options.name;
			var email = options.email;
			var phone = options.phone;
			var reason = options.reason;
			var order = options.order;
			var responseDetails = {};
			try {
				var author = Number(Configuration.get('customReturns.author'));
				var recipient = Configuration.get('customReturns.recipient');
				var subject = "Return Request for (" + order + ")";
				var html = "<p>Hello,<br /><br /> This individual just filed a return request via the web store: <br /> Name: " + name + "<br /> Email: " + email + "<br /> Phone: " + phone + "<br /> <br /> This request is associated with PO#: " + order + ". <br /> <br /> The stated reason for this return is: " + reason + ", and these are the items that he/she wishes to return:</p><br /><br />";
				html += '<ol>\n';
				for (var l = 0; l < itemsToReturn.length; l += 1) {
					var line = itemsToReturn[l];
					html += '\t<li><b>(Item Quantity' + line.quantity + ')</b><br /> Item Description: ' + line.description + '<br /> Item Number: ' + line.itemno + '<br /> Item Rate: ' + line.rate + '<br /> Item Amount: ' + line.amount + '</li>\n';
				}
				html += '</ol><br />\n';
				html += '<p>Please initiate the return or reach out to him/her as soon as possible.</p><br />\n';
				html += '<p>Thank you.</p>';
				var records = new Object();
				var entity = Configuration.get('customReturns.entity');
				records['entity'] = entity;
				nlapiSendEmail(author, recipient, subject, html, null, null, records, null, true);
				responseDetails = {
					success: true
					,   data: "Email Sent"
					,   status: 200
				};
			} catch (e) {
				nlapiLogExecution('DEBUG', 'error', e);
				responseDetails = {
					success: false
					,   data: "Email could not be sent at this time. Please try again later."
					,   status: 500
				};
			}
			return responseDetails;      
		}
	});
});