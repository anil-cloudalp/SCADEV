// @module RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator
define('RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator.View'
,	[
	'rudracustomization_downloadpdfforreorderitems_reorderitemspdfgenerator.tpl'
	
	,	'RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator.Model'
	,	'underscore'
	,	'Backbone'
	,	'Utils'
	,	'Profile.Model'
	,	'RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsModalPopUp.View'
    ]
, function (
	rudracustomization_downloadpdfforreorderitems_reorderitemspdfgenerator_tpl
	
	,	ReOrderItemsPDFGeneratorModel
	,	_
	,	Backbone
	,	Utils
	,	ProfileModel
	,	ReOrderItemsModalPopUpView
)
{
    'use strict';

	// @class RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator.View @extends Backbone.View
	return Backbone.View.extend({

		template: rudracustomization_downloadpdfforreorderitems_reorderitemspdfgenerator_tpl

	,	initialize: function (options) {

			this.collection = options.collection;
			this.customExtProfileModel = ProfileModel.getInstance();
			this.selectedRange= options.selectedRange;
			this.selectedFilter = options.selectedFilter;
			
			

		}

	,	events: {
		'click [data-action="download_btn"]':'showDownload'
		}

	,	bindings: {
		}

	, 	childViews: {

		}
	,	showDownload:function(e){
			e.preventDefault();
			var ItemDetailsArray = [];
			var PriceDetails = [];
			var self = this;
			var DownloadOptions = this.$('#checkDownload').find(":selected").val();
			if (this.collection.totalRecordsFound > 0) {
				// get the data from collection and create a object 
				var collectData = this.collection.customAlldata;

				_.map(collectData, function (value) {
					var some = value.item.matrix_parent;
					if (_.isUndefined(some)) {
						var itemidDetails = value.item.itemid || ''
					} else {
						var itemidDetails = some.itemid
					}
					var skuname = value.item.itemid;
					var transdate = value.trandate;
					var price = value.item.onlinecustomerprice_detail.onlinecustomerprice;
					var PriceChanges = Utils.formatCurrency(price)
					// var price = value.item.onlinecustomerprice_detail.onlinecustomerprice_formatted;
					var SubtotalPrice = value.item.onlinecustomerprice_detail.onlinecustomerprice;
					var Obj = {
						ItemName: itemidDetails,
						ItemSkuId: skuname,
						LastPurchase: transdate,
						Price: PriceChanges
					};
					// push the item data 
					ItemDetailsArray.push(Obj);
					// push only price 
					PriceDetails.push(SubtotalPrice);
				})
				if (_.isEqual(DownloadOptions, 'downloadCsv')) {
					this.generateCsvinExtension(ItemDetailsArray);
					
				} else if (_.isEqual(DownloadOptions, 'downloadPDF')) {
					if(this.options.container.htmlFile.htmlTextFile !== undefined){
						

						this.generatePdfinExtension(ItemDetailsArray, PriceDetails)
					}else{
						
						var self = this;
						var ErrorMsgviewFile = new ReOrderItemsModalPopUpView({  
							message:this.options.container.htmlFile.error,
							application:self.options.container.getLayout()
						});
						this.options.container.getLayout().showInModal(ErrorMsgviewFile,{ className: 'globalPopUpLoginRedirectionView' })
					}
				}
			}
		}
	,	generateCsvinExtension: function generateCsvinExtension(CsvData) {
			// create a csv as per our Requirement
			var headdingRows = Object.keys(CsvData[0]);
			var csv = '';
			headdingRows = headdingRows.join(',');
			csv += headdingRows;
			csv += '\n';
			_.each(CsvData, function (value) {
				for (const key in value) {
					csv += value[key].replace(/,/g, '') + ',';
				}
				csv += '\r\n';
			});
			var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
			const d = new Date();
			let time = d.getTime();
			this.downloadCSV(blob,'ReorderItem_'+time+'.csv');
			// open the csv file  
			// window.open('data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
		}
	,	downloadCSV:function(blob,filename){
			if (typeof window.navigator.msSaveBlob !== 'undefined') {
				
				window.navigator.msSaveBlob(blob, filename);
			}
			else{
				var link = URL.createObjectURL(blob);
				var a = document.createElement("a");
				a.download = filename;
				a.href = link;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			}
		}
	,	generatePdfinExtension: function(PdfData, Price){
			var currencyFormater = this.customExtProfileModel.get('currency').symbol;
			var selectedFilterData = this.selectedFilter.itemValue;
			var CustomizedSelectedData = selectedFilterData.split("T");
			var fromInCustomizedSelectedData = CustomizedSelectedData[0];
			var toInCustomizedSelectedData = CustomizedSelectedData[1];
			var EmptyObjDate = {};
			// replace the from or to data to as per the field will be active or not then the filter will apply
			if (_.isEmpty(this.selectedRange)) {
				EmptyObjDate.From = fromInCustomizedSelectedData;
				EmptyObjDate.to = toInCustomizedSelectedData;

			} else {
				if (!_.isEmpty(this.selectedRange.from)) {
					EmptyObjDate.From = this.selectedRange.from;
				} else {
					EmptyObjDate.From = fromInCustomizedSelectedData;
				}
				if (!_.isEmpty(this.selectedRange.to)) {
					EmptyObjDate.to = this.selectedRange.to;
				} else {
					EmptyObjDate.to = toInCustomizedSelectedData;
				}
			}
			var headdingRows = Object.keys(PdfData[0]);
			// adding heading content
			var theadRow = '<tr>'
			theadRow += ' <th class="no">#</th>';
			for (let i = 0; i < headdingRows.length; i++) {
				theadRow += `<th class="heading_0${i + 1}"> ${headdingRows[i]}</th>`;
			}
			theadRow += '</tr>';
			let headingText = "ReOrder Item";
			//  filter the customer Details
			var customerFirstName = this.customExtProfileModel.get('firstname') || '';
			var customerEmail = this.customExtProfileModel.get('email') || '';
			var customerLastName = this.customExtProfileModel.get('lastname') || '';
			var Customername = customerFirstName + " " + customerLastName;
			// create a table row Data in dynamic
			var tr = '<tr class="bodySec">';
			_.map(PdfData, function (value, keys) {
				const k = Object.keys(value);
				tr += `<td class="no">${keys + 1} </td>`
				for (const key in value) {
					tr += `<td class="heading_0" align="center"> ${value[key]}</td>`;
				}
				tr += '</tr>';
			})
			// adding the price
			const reducer = (accumulator, curr) => accumulator + curr;
			var totalPrice = Price.reduce(reducer);
			var roundFigure = Math.round(totalPrice * 100) / 100;
			var resulatant = roundFigure.toString().split('.');

			// relpace the data in html file
			var getHtmlData = this.options.container.htmlFile.htmlTextFile;
			var replaceData = getHtmlData.replace("headingContent1", headingText);
			replaceData = replaceData.replace("Customername", Customername);
			replaceData = replaceData.replace("tableData", tr);
			
			// check the cuntry currency
			if (resulatant.length > 1) {
				replaceData = replaceData.replace("totalPriceAddition", roundFigure);
			} else {
				replaceData = replaceData.replace("totalPriceAddition", roundFigure + ".00");
			}
			replaceData = replaceData.replace("currencyForm", currencyFormater);
			replaceData = replaceData.replace("theadRow", theadRow);
			replaceData = replaceData.replace("headingContent2", headingText);
			replaceData = replaceData.replace("DateFormat.fromDate", EmptyObjDate.From);
			replaceData = replaceData.replace("DateFormat.toDate", EmptyObjDate.to);
			replaceData = replaceData.replace("john@example.com", customerEmail);
			replaceData = replaceData.replace("any@example.com", customerEmail);

			this.printPDF(replaceData);
		}
	
	,	printPDF: function(data){
		var iframe = document.createElement('iframe');
		iframe.style.visibility = "hidden";
		iframe.setAttribute("style", "height:100%;width:100%; display:none;");
		document.body.appendChild(iframe);
		iframe.contentWindow.document.open();
		iframe.contentWindow.document.write(data);
		// Add the IFrame to the web page.
		iframe.contentWindow.focus();
		iframe.contentWindow.print(); // Print.
		}


		//@method getContext @return RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator.View.Context
	,	getContext: function getContext()
		{

			//@class RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator.View.Context
			
			return {
				message: this.message
			};
		}
	});
});
