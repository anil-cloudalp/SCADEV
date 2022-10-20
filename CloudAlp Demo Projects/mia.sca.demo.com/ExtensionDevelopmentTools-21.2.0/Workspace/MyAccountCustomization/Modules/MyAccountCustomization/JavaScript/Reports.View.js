// @module RudraCustomization.MyAccountCustomization.MyAccountCustomization
define('RudraCustomization.MyAccountCustomization.Reports.View'
,	[
	    'MyAccount_reports.tpl'
    ,   'RudraCustomization.MyAccountCustomization.MyAccountCustomization.Model'
	,	'Backbone'
	,	'Backbone.Model'
	,	'Utils'
	,	'GoogleChart'
    ]
, function (
	    MyAccount_reportstpl
	,   MyAccountCustomizationModel
	,	Backbone 
	,	BackboneModel
	,	Utils
	,	GoogleCharts
)
{
    'use strict';

	// @class RudraCustomization.MyAccountCustomization.Reports.View @extends Backbone.View
	return Backbone.View.extend({

		template: MyAccount_reportstpl
		
	,	title: Utils.translate('Reports')

	,	page_header: Utils.translate('Reports')
	  
	  
	,	initialize: function (options) {
			
			this.salesOrder = this.options.salesOrder;
			var layout = this.options.application.getLayout();
			layout.once('afterAppendView', this.initChart, this);
		}


	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

	,	initChart: function initChart() {
			// onload content and triggered the field

			if (!_.isUndefined(this.salesOrder)) {
			  this.initSalesorderChart();
			}
			else {
			  jQuery('#chart_div_salesOrder').html("<h3 style='text-align:center;margin-top:15px;'>You don't have any purchases in your account right now</h3>");
			}
		
		}
		
	,	initSalesorderChart: function initSalesorderChart() {
			// Load the Visualization API and the corechart package.
		

			GoogleCharts.GoogleCharts.load('current', { 'packages': ['corechart'] });
		
			// Set a callback to run when the Google Visualization API is loaded.
			
			setTimeout(function(){
				GoogleCharts.GoogleCharts.api.setOnLoadCallback(drawChart);
			},700)
			
		
			jQuery(window).on("throttledresize", function(event) {
			  drawChart();
			});
				var self = this;
				function drawChart() {
			  		// Create the data table.
			  		var data = new GoogleCharts.GoogleCharts.api.visualization.DataTable();
			  		data.addColumn('string', 'Name');
			  		data.addColumn('number', 'Totals($) ');
			
			  		data.addRows(self.salesOrder);
		
		
			  		// Set chart options
			  		var options = {
					'title': 'Last 6 Months Purchases',
					width: '100%',
					height: 500,
		
					titleTextStyle: {
				  		fontSize: 30, // 12, 18 whatever you want (don't specify px)
						fontName: "poppins"
					},
		
					hAxis: {
				  		title: 'Months',
				  		slantedText: true,
				  		slantedTextAngle: 80 ,
				  		titleTextStyle: {
							color: "#000",
							fontName: "poppins",
							fontSize: 14,
							bold: true,
							italic: false
				  		}
					},
					vAxis: {
				  		title: 'Totals ($)',
				  		titleTextStyle: {
							color: "#000",
							fontName: "poppins",
							fontSize: 14,
							bold: true,
							italic: false
				  		}
					}
			  	};
		
		
		
			  var chart = new GoogleCharts.GoogleCharts.api.visualization.ColumnChart(jQuery('#chart_div_salesOrder')[0]);
			 
			  chart.draw(data, options);
			}
		}

		//@method getContext @return RudraCustomization.MyAccountCustomization.Reports.View.Context
	,	getContext: function getContext()
		{
			
			//@class RudraCustomization.MyAccountCustomization.Reports.View.Context
			return {
				
			};
		}
	});
});
