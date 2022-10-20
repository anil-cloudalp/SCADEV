// TCI.ManageOrdersExt.RequestAnInvoice.Print.js
// Load all your starter dependencies in backend for your extension here
// ----------------

define('TCI.ManageOrdersExt.RequestAnInvoice.PrintButton'
,	[
		'TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.ServiceController',
		'SC.Model',
		'Configuration'
	]
,	function (
		RequestAnInvoicePrintServiceController,
		SCModel,
		Configuration
	)
{
	'use strict';
	return SCModel.extend({
		name: 'TCI.ManageOrdersExt.RequestAnInvoice.PrintButton',  
		print: function print (options) {
			nlapiLogExecution('DEBUG', 'options', options);
			var purchaseId = options.purchaseId;
			var responseDetails = {};
			try {
				//see if file exists first, then try to load it, else, create pdf
				try {
					var pdfFile = nlapiLoadFile("PO/" + purchaseId + ".pdf");
					pdfFile.setIsOnline(true);
				} catch (e) {
					nlapiLogExecution('DEBUG', 'error', e);
					var pdf = nlapiPrintRecord('TRANSACTION', purchaseId, 'PDF', null);
					var folderid = Configuration.get('findInvoice.folder');
					pdf.setFolder(folderid);
					pdf.setName(purchaseId + '.pdf');
					pdf.setIsOnline(true);
					var pdfFileID = nlapiSubmitFile(pdf);
					pdfFile = nlapiLoadFile(pdfFileID);
				}
				var pdfUrl = pdfFile.getURL();
				responseDetails = {
					success: true
					,   data: "PDF URL found"
					,   status: 200
					,   url: pdfUrl
				};
			} catch (e) {
				nlapiLogExecution('DEBUG', 'error', e);
				responseDetails = {
					success: false
					,   data: "PDF URL could not be found at this time. Please try again later."
					,   status: 500
				};
			}
			return responseDetails;
		}
	});
});