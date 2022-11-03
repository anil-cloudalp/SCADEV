// @module CA.BulkOrderingInCSV.BulkOrderingInCSV
define('CA.BulkOrderingInCSV.BulkOrderingInCSV.View'
,	[
	'ca_bulkorderingincsv_bulkorderingincsv.tpl'
	
	,	'CA.BulkOrderingInCSV.BulkOrderingInCSV.SS2Model'
	,	'CA.BulkOrderingInCSV.RemoveItemsCart.Model'
	, 	'LiveOrder.Model'
	, 	'Utils'
	, 	'GlobalViews.Message.View'
	,   'GlobalViews.Confirmation.View'
	,	'Backbone'
	,	'Profile.Model'
	,	'Session'
    ]
, function (
	ca_bulkorderingincsv_bulkorderingincsv_tpl
	
	,	BulkOrderingInCSVSS2Model
	,	RemoveItemsCartModel
	, 	LiveOrderModel
	, 	Utils
	, 	GlobalViewsMessageView
	,	GlobalViewsConfirmationView
	,	Backbone
	,	ProfileModel
	,	Session
)
{
    'use strict';

	// @class CA.BulkOrderingInCSV.BulkOrderingInCSV.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_bulkorderingincsv_bulkorderingincsv_tpl
	
	,	initialize: function (options) {

			this.model = LiveOrderModel.getInstance();
			
		}

	,	events: {
			'click [data-action="csvupload"]': 'processCsv',
			'change [data-action="csv_validations"]': 'inputfieldData',
			'click [data-action="removeAllItemstoCart"]':'removeAllItemToCart'
		}

	,	bindings: {
		}

	, 	childViews: {

		}
	,	ItemSearchUrl: function() {
			const profile = ProfileModel.getInstance();
			
			var url = Utils.addParamsToUrl(
				profile.getSearchApiUrl(),
				_.extend(
					{fieldset: "csvimport",limit:100},
					Session.getSearchApiParams()
				)
			);
			
			return url;
		}
	,	getAllItems: function(url,promise){
			var self = this;
			jQuery.get(url,function(itemsRes){

				if(_.has(itemsRes,'total')){
					self.items = _.union(self.items,itemsRes.items);
				}
				if(_.has(itemsRes,'links')){
					var links = _.findWhere(itemsRes.links,{'rel': 'next'});
					
					var href = _.has(links,'href')? links.href: '';
					
					if(href){
						self.getAllItems(href,promise);
					}
					else{
						promise.resolve();
					}
				}
			});
		}
	,	createItemsCollection: function(){
			var itemCollection = [];
		
			_.each(this.items,function(item){
				
				if(item.matrixchilditems_detail && item.matrixchilditems_detail.length){
					itemCollection = _.union(itemCollection,item.matrixchilditems_detail);
				}
				else{
					itemCollection.push(item);
				}
			});
			
			return itemCollection;
		}
	,	removeAllItemToCart: function(e){
			e.preventDefault();
			var self =  this;
			var removeAllLinesConfirmationView = new GlobalViewsConfirmationView({
			  callBack: self.removeAllItem 
			, title:Utils.translate('Remove All Items')
			, body: Utils.translate('Are you sure you want to remove all items from your cart?')
			, autohide: true
			});
			return this.options.Layout.showContent(removeAllLinesConfirmationView, {showInModal:true});
		}
	,	removeAllItem:function(){
			var Livemodel = LiveOrderModel.getInstance();
			$.ajax({
				method: "DELETE",
				url: Utils.getAbsoluteUrl(
					getExtensionAssetsPath(
						"services/RemoveAllItemsCart.Service.ss"
					)
				)
			  }).done(function(response) {
					Livemodel.set(response);
				});
		}
	,	inputfieldData: function (e) {
			var files = this.$('[data-action="csv_validations"]')[0].files;
			if (!(files && files.length > 0)) {
				self.showMessage('Please upload a valid CSV file', 'error')
				return;
			}
			var file_name = files[0].name;

			var reader = new FileReader();
			var self = this;
			reader.addEventListener("load", function () {

				var csv_data = reader.result;

				self.$('[name="csv_import_file_label"]').text(file_name);

				var allowedExtensions = RegExp(/(\.csv)$/i);

				if (!allowedExtensions.exec(file_name)) {
					self.showMessage('Please upload a valid CSV file', 'error');

					return;
				}
				self.readData(csv_data);


			});
			reader.readAsText(files[0]);
		}
	,	readData: function (data) {
			var self = this;
			var textLines = data.split(/\r\n|\n/);

			var header = textLines[0].split(',');

			if (header[0] != 'internalid' || header[1] != 'quantity') {
				self.showMessage('Please upload a valid CSV file', 'error');
				return;
			}
			var lines = [];

			_.each(textLines, function (line, index) {
				if (index != 0) {
					var line_data = line.split(",");
					if (line_data[0] || line_data[1]) {
						lines.push({
							prod_no: line_data[0],
							quantity: line_data[1]
						});

					}
				}
			});

			if (lines && lines.length > 0) {

				this.csvLines = lines;

			}
			else {
				self.showMessage('Please add some products in CSV', 'error');
			}
		}
	,	processCsv: function (e) {
			e.preventDefault();
			var self = this;
			this.mainPromise = jQuery.Deferred();
			var promise = jQuery.Deferred();
			if (!(this.csvLines && this.csvLines.length)) {
				self.showMessage("Please Upload Valid csv file", 'error');
				return;
			} 
			var $button = this.$(e.currentTarget);
			this.$button = $button;

			$button.attr('disabled',false).text('');
			$button.addClass("button--loading");
			this.getAllItems(this.ItemSearchUrl(),promise);
			promise.then(function(){
				self.items = self.createItemsCollection();
				
				self.processLines();
			});
			var self =this;
			this.mainPromise.then(function(message){
				$button.removeClass("button--loading");
				$button.attr('disabled',false).text('Order');
				
				$("#getCode").html(`<p class="popup_status_msg">${message}</p>`);
				jQuery("#getCodeModal").modal('show');

				
			})

		}
	,	processLines: function (){
			var self = this;
			var validLines = [];
			var totalCartLines = this.model.get('lines').length;
			const NO_LINES = (totalCartLines > 500)? (1000 - totalCartLines):500;
			_.each(this.csvLines,function(line){
				var matchedItems = _.filter(self.items,function(item){
					
					if(line.prod_no)
						return (item.internalid.toString() == line.prod_no);
				});
				if(matchedItems.length){
					var hasPrice = (matchedItems[0].onlinecustomerprice === undefined)?matchedItems[0].onlinecustomerprice_detail.onlinecustomerprice : matchedItems[0].onlinecustomerprice;
					var hasQuantity = (parseInt(line.quantity));
					if(hasQuantity){
						if(hasPrice){
							var isQtyAboveMinimum = matchedItems[0].minimumquantity ?(parseInt(line.quantity) > matchedItems[0].minimumquantity): true;
							var isQtyBelowMaximum = matchedItems[0].maximumquantity ?(parseInt(line.quantity) < matchedItems[0].maximumquantity):true;
							if(isQtyAboveMinimum){
								
								if(isQtyBelowMaximum){
									
									
									line.status = 'VALID';
								}
								else{
									line.status = 'item quantity should not greater than maximum quantity ' + matchedItems[0].maximumquantity;
								}
							}
							else{
								line.status = 'item quantity should not less than minimum quantity ' + matchedItems[0].minimumquantity;
							}

						}else{
							line.status = 'item price not available';
						}

					}else{
						line.status = 'item quantity not available';
					}

				}else{
					line.status = 'item not matched';
				}
				if(line.status == 'VALID'){
					
					if(validLines.length >= NO_LINES){
						line.status = 'Could not process more than ' + NO_LINES + ' products';
					}
					else{
						validLines.push({
							quantity: parseInt(line.quantity),
							item: {
								internalid: matchedItems[0].internalid
							}
						});
					}
					
				}
			});
			if(validLines.length){
				this.validLines = validLines;
				
				this.addItemsToCart();
			}
			else{
				this.exportCsv('');
				this.mainPromise.resolve('No Valid Lines Are Found');
			}
		}
	,	prepareParams: function(lines){
			var validItems = '';
			_.each(lines,function(line){
				validItems += line.item.internalid + ','+ parseInt(line.quantity) + ';';
			});
			return validItems;
		}
	,	addItemsToCart: function(){
				
			var totalCartLines = this.model.get('lines').length;
			const NO_LINES = (totalCartLines > 500)? (1000 - totalCartLines):500;
			var lines = (this.validLines.length > NO_LINES)?this.validLines.slice(0,NO_LINES): this.validLines;
			var self = this;
			
			const promise = this.model.addLines(lines);
			var statusText = '';
			promise.always(function(data){

				statusText = 'success';
			 	self.exportCsv(statusText);
			 	self.mainPromise.resolve('Add items to cart by CSV process completed');
				return self.model.set(data);
			}).catch(()=>{
				statusText = 'fail';
				self.exportCsv(statusText);
			})
		
		}
	,	exportCsv: function(status){
		var content = "Product Number,Quantity,Status\n";
			
		_.each(this.csvLines,function(line){
			
			if(line.status == "VALID"){
				if(status == "success" || status == "OK"){
					line.status = "Item added to cart";
				}
				else{
					line.status = "Item could not added to cart";
				}
			}
			content += line.prod_no + "," + line.quantity + "," + line.status  + "\n";
		});
		
	  
		var blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
		const d = new Date();
		let time = d.getTime();
		this.download(blob,'ItemStatus_'+time+'.csv');

		}
	,	download: function(blob,filename){
		
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
	,	showMessage: function (message, type, field) {
		if (type === 'success') {
				const global_view_message = new GlobalViewsMessageView({
					message: message,
					type: 'success',
					closable: true
				});
				this.$('[data-action="message_container"]').html(global_view_message.render().$el.html());
			} else {
				const globa_view_message = new GlobalViewsMessageView({
					message: message,
					type: 'error',
					closable: true
				});

				this.$('[data-action="message_container"]').html(globa_view_message.render().$el.html());
			}
		}

		//@method getContext @return CA.BulkOrderingInCSV.BulkOrderingInCSV.View.Context
	,	getContext: function getContext()
		{
			//@class CA.BulkOrderingInCSV.BulkOrderingInCSV.View.Context
			
			return {
				
			};
		}
	});
});
