define(
	'RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator'
,   [
		'RudraCustomization.DownloadPDFForReOrderItems.ReOrderItemsPDFGenerator.View'
	,	'ListHeader.View'
	,	'Utils'
	,	'ReorderItems.List.View'
	,	'ReorderItems.Collection'
	]
,   function (
		ReOrderItemsPDFGeneratorView
	,	ListHeaderView
	,	Utils
	,	ReorderItemsListView
	,	ReorderItemsCollection
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var CustomData = Utils.getAbsoluteUrl(getExtensionAssetsPath("services/ReOrderItemsPDFGenerator.Service.ss"))

			// Get the HTML file in to the file cabinet
			$.get(CustomData).done((response)=>{
				container.htmlFile = response
			})
			
			// Extend the reorderitemlist view and do some changes

			_.extend(ReorderItemsListView.prototype,{
				initialize:_.wrap(ReorderItemsListView.prototype.initialize,function initialize(fn,options){
					fn.apply(this, _.toArray(arguments).slice(1));


					let routerOptions;
        
					if (options.routerArguments && options.routerArguments[0]) {
						routerOptions = Utils.parseUrlOptions(options.routerArguments[0]);
					} else {
						routerOptions = { page: 1 };
					}
			
					// this will always be false to be backward compatible with templates that are
					// displaying the current page when it should not be done
					this.options.showCurrentPage = false;
			
					if (routerOptions.order_id) {
						this.collection.order_id = routerOptions.order_id;
						this.order_id = routerOptions.order_id;
						this.order_number = routerOptions.order_number || 0;
					}

					const isoDate = Utils.dateToString(new Date());
        
					this.rangeFilterOptions = {
						fromMin: '',
						fromMax: isoDate,
						toMin: '',
						toMax: isoDate
					};
					this.listHeader = new ListHeaderView({
						view: this,
						application: options.application,
						collection: this.collection,
						filters: routerOptions.order_id ? null : this.filterOptions,
						rangeFilter: 'date',
						rangeFilterLabel: Utils.translate('From'),
						sorts: routerOptions.order_id ? this.sortOptionsSingleOrder : this.sortOptions,
						hidePagination: true,
						headerMarkup: routerOptions.order_id ? this.getOrderLink() : '',
						isVisible:true
					});
					
				})
			})
			// extend the collection and update the code in update method
			_.extend(ReorderItemsCollection.prototype,{
				update: function update(options,list_header){
				
					const range = options.range || {};
					
					
					const data_filters = {
						sort: options.sort.value,
						order_id: this.order_id,
						order: options.order,
						from: range.from,
						to: range.to,
						page: options.page
					};
					if (!this.order_id) {
						
						let date_string = options.filter.value.apply(list_header.view);
						date_string = date_string && date_string.split('T');
					
						if( _.isEmpty(data_filters.from)){
							data_filters.from = date_string[0];
							
							
						}
						if(_.isEmpty(data_filters.to)){
							data_filters.to = date_string[1];
						}
					}
					this.fetch({
						data: data_filters,
						reset: true,
						killerId: options.killerId
					});
					this.CustomData_filters=data_filters;
					
					
				},
				CustomDateFilter:function(){
					return this.CustomDateObject={
						fromDate:this.CustomData_filters.from,
						toDate:this.CustomData_filters.to
					}
				   
				},
				parse: function parse( response){
					this.totalRecordsFound = response.totalRecordsFound;
					this.recordsPerPage = response.recordsPerPage;
					this.customAlldata=response.customAllData;
					 
					return response.records ;
				}
			})

			_.extend(ListHeaderView.prototype,{
				childViews:_.extend({},ListHeaderView.prototype.childViews,{
					CsvAndPdfGenerator:function(){
						return new ReOrderItemsPDFGeneratorView({
							collection:this.collection,
							container:container,
							selectedFilter:this.selectedFilter,
							selectedRange:this.selectedRange
						});
					}
				}),
				initialize:_.wrap(ListHeaderView.prototype.initialize, function initialize(fn){
					fn.apply(this, _.toArray(arguments).slice(1));
					
					this.visibleData = this.options.isVisible
				}),
				getContext: _.wrap(ListHeaderView.prototype.getContext, function getContext(fn) {
					var self = this;
					var ret = fn.apply(this, _.toArray(arguments).slice(1));
					var obj1 = this.view.$el[0].baseURI;
					ret.isVisible = self.visibleData;
					ret.isActive = false;
					if (obj1.indexOf('reorderItems') !== -1) {
						ret.isActive = true;
					}

					return ret;
				})

			})

		}
	};
});
