/// <amd-module name="Reports.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as reports_tpl from 'reports.tpl';
import '../../../Commons/Utilities/JavaScript/google-chart';


import Utils = require('../../../Commons/Utilities/JavaScript/Utils');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import ReportsModulesModel = require('./ReportsModules.Model');


// @module Home.View @extends Backbone.View
const ReportsView: any = BackboneView.extend({
  template: reports_tpl,

  title: Utils.translate('Reports'),

  page_header: Utils.translate('Reports'),


  events: {

  },

  initialize: function() {

    // Load the Visualization API and the corechart package.
    this.salesOrder = this.options.salesOrder;
    var layout = this.options.application.getLayout();
    layout.once('afterAppendView', this.initChart, this);
  },


  initChart: function initChart() {
    if (!_.isUndefined(this.salesOrder)) {
      this.initSalesorderChart();
    }
    else {
      jQuery('#chart_div_salesOrder').html("<h3 style='text-align:center;margin-top:15px;'>You don't have any purchases in your account right now</h3>");
    }

  },

  initSalesorderChart: function initSalesorderChart() {

    // Load the Visualization API and the corechart package.
    google.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);


    jQuery(window).on("throttledresize", function(event) {
      drawChart();
    });
	var self = this;
    function drawChart() {
      // Create the data table.
      var data = new google.visualization.DataTable();
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
        },

        hAxis: {
          title: 'Months',
          slantedText: true,
          slantedTextAngle: 80 ,
          titleTextStyle: {
            color: "#000",
            fontName: "sans-serif",
            fontSize: 14,
            bold: true,
            italic: false
          }
        },
        vAxis: {
          title: 'Totals ($)',
          titleTextStyle: {
            color: "#000",
            fontName: "sans-serif",
            fontSize: 14,
            bold: true,
            italic: false
          }
        }
      };



      var chart = new google.visualization.ColumnChart(jQuery('#chart_div_salesOrder')[0]);
      chart.draw(data, options);
    }
  },

  // @method getContext @return Home.View.Context
  getContext: function() {
		
    return {
      pageHeader: this.page_header,
    };
  }
});

export = ReportsView;
