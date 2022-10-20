/// <amd-module name="EficSubscription.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>

import * as _ from 'underscore';
import * as efic_subscription_tpl from 'efic_subscription.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import { GlobalViewsPaginationView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.Pagination.View';

const CustomView: any = BackboneView.extend({
	//@property {Function} template
	template: efic_subscription_tpl
	//@property {String} title
,	title: Utils.translate('Digital Forward in Christ')
	//@property {String} className
,	className: 'EficSubscriptionView'
	//@property {String} page_header
,	page_header: Utils.translate('Digital Forward in Christ')
	//@property {Object} attributes
,	attributes: {
		'id': 'efic_subscription'
	,	'class': 'EficSubscriptionView'
	}
	//@property {Object} events
,	events: {
	//	'click #prev-mo': 'prevMo'
//	,	'click #next-mo': 'nextMo' ,
		'click #prev-yr': 'prevYr'
	,	'click #next-yr': 'nextYr'
	,	'click [data-date]': 'handleDate'
	}
,	handleDate: function(e)
	{
		
		if($(e.target).is('p'))
			var dateEl = $(e.target);
		else
			var dateEl = $(e.target).parent();
		
		var emeds_date = dateEl.attr('data-date');

		var today = new Date();
		
		var emeds_date_obj = new Date(emeds_date);
//commenting as to display subscription record before 1st of a month if available.
		//if(emeds_date_obj.getTime() <= today.getTime()){
			
			$('[data-date]').removeClass('bg-info');
			dateEl.addClass('bg-info');
		
			this.emeds_date = emeds_date;
			
			this.calendar.currentMonth = emeds_date_obj.getMonth();
			this.$('#calender-month').text(this.calendar.months[this.calendar.currentMonth]);
			
			var self = this;
			this.refreshData().then(function(){
				self.$('#efic-subscriptions').html(self.creatingHtml());
			});
			
		//}
	}
,	refreshData: function()
	{
		
		this.filters = {
			type: 'EFIC',
			results_per_page: 20,
			date: this.emeds_date
		}
		
		
		return this.getResultsforhandle(this.filters);
	}
,	refreshfirstData: function(){

		this.filters = {
			type: 'EFIC',
			results_per_page: 20,
		}

		return this.getResults(this.filters);
	}

	
	//@method getSelectedMenu
,	getSelectedMenu: function ()
	{
		return 'my_subscriptions';
	}
	//@method getBreadcrumbPages
,	getBreadcrumbPages: function ()
	{
		return {
				text: this.title
			,	href: '/digital-forward-in-christ'
		};
	}
	//@method initialize
,	initialize: function (options)
	{
		this.application = options.application;
		
		var calendar:any = {};
		calendar.today = new Date();
		calendar.currentMonth = calendar.today.getMonth();
		calendar.currentYear = calendar.today.getFullYear();
		calendar.months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

		this.calendar = calendar;
		this.emeds_date = (calendar.currentMonth + 1) +'/'+ calendar.today.getDate() +'/'+ calendar.currentYear;
		
	/*	var self = this;
		this.once('afterViewRender',function(){
			self.showCalendar(calendar.currentMonth,calendar.currentYear);
			self.$('#efic-subscriptions').html(self.createHtml());
		});*/
	}
,	beforeShowContent: function()
	{	
		return this.refreshfirstData();
	}
,	getResults: function(data)
	{
		var self = this;
		
		var promise = new Backbone.Model().save(
					data
				,	{
						url: Utils.getAbsoluteUrl('services/Subscriptions.Service.ss')

					},{wait:true}
				);
				promise.then(function(result){
					
					self.collection = result;
				});
		this.once('afterViewRender',function(){
			var recnetrecord = (self.collection.records.date);

			var recentrecyear = recnetrecord.split('/');

			console.log("parseInt(recentrecyear[2])",parseInt(recentrecyear[2]));

			self.recentyear = parseInt(recentrecyear[2]);

			self.mostrecentrecords = self.recentyear;

			self.showCalendar((parseInt(recentrecyear[0])-1), self.recentyear);

			self.$('#efic-subscriptions').html(self.createHtml());
		});		
				
			return promise;
	}
,	getResultsforhandle: function(data)
	{


		var self = this;

		var promise = new Backbone.Model().save(
					data
				,	{
						url: Utils.getAbsoluteUrl('services/Subscriptions.Service.ss')

					},{wait:true}
				);
				promise.then(function(result){
					
					self.collection = result;
				});

			return promise;
	}	

	//@property {Object} childViews
,	childViews: {
		
	}
,	createHtml: function()
	{    
		var	records = _.has(this.collection,'records')? this.collection.records: [];
		var haveSubscription = _.has(this.collection,'haveSubscription')? this.collection.haveSubscription: true;
		
		var html = '';
		
		if(haveSubscription){
			if(records){
					html +='<div class="col-sm-5"><div class="img-container"><img src="'+records.imageUrl+'"/></div><div class="btn-container"><a href="'+records.issue_link+'">View Issue</a></div></div>';
					html +='<div class="col-sm-7 efic-content">'+ records.content +'</div>';
			}
			else{
				html +='<h2> No Records Available</h2>';
			}
		}
		else{
			html +='<h2> No subscriptions Available</h2>';
		}
		
		return html;
	}

, 	creatingHtml: function()
{    
	var	records = _.has(this.collection,'records')? this.collection.records: [];
	var haveSubscription = _.has(this.collection,'haveSubscription')? this.collection.haveSubscription: true;
	
	var html = '';
	
	if(haveSubscription){

		if(records && records.date == this.emeds_date){
				html +='<div class="col-sm-5"><div class="img-container"><img src="'+records.imageUrl+'"/></div><div class="btn-container"><a href="'+records.issue_link+'">View Issue</a></div></div>';
				html +='<div class="col-sm-7 efic-content">'+ records.content +'</div>';
		}
		else{
			html +='<h2> No Records Available</h2>';
		}
	}
	else{
		html +='<h2> No subscriptions Available</h2>';
	}
	
	return html;
}
,	nextMo: function(e)
	{
		e.stopPropagation();
		
		if((this.calendar.currentYear == this.calendar.today.getFullYear()) && (this.calendar.currentMonth == this.calendar.today.getMonth()))
			return;
		
		this.calendar.currentYear = (this.calendar.currentMonth === 11) ? this.calendar.currentYear + 1 : this.calendar.currentYear;
		this.calendar.currentMonth = (this.calendar.currentMonth + 1) % 12;
		this.showCalendar(this.calendar.currentMonth, this.calendar.currentYear);
	}

,	prevMo: function(e)
	{
		e.stopPropagation();
		this.calendar.currentYear = (this.calendar.currentMonth === 0) ? this.calendar.currentYear - 1 : this.calendar.currentYear;
		this.calendar.currentMonth = (this.calendar.currentMonth === 0) ? 11 : this.calendar.currentMonth - 1;
		this.showCalendar(this.calendar.currentMonth, this.calendar.currentYear);
	}
,	nextYr: function(e)
	{
		e.stopPropagation();
		if(this.recentyear == this.mostrecentrecords)
			return;
		
		if(((this.calendar.currentYear + 1) == this.calendar.today.getFullYear()) && (this.calendar.currentMonth > this.calendar.today.getMonth()))
			this.calendar.currentMonth = this.calendar.today.getMonth();
		
		this.recentyear++;
		this.showCalendar(this.calendar.currentMonth,this.recentyear);
		
	}

,	prevYr: function(e)
	{
		e.stopPropagation();
		this.recentyear--;
		this.showCalendar(this.calendar.currentMonth, this.recentyear);
	}
,	getSlides: function()
	{
		var screenWidth = window.screen.width;
		var slides;
		
		if(screenWidth <= 510)
			slides = 4;
		
		if(screenWidth > 510)
			slides = 8;
		return slides;
	}
,	showCalendar: function(month, year)
	{
		var firstDay = (new Date(year, month)).getDay();
		var daysInMonth = 32 - new Date(year, month, 32).getDate();
		
		var today = this.calendar.today;
		var tbl = this.$('#calender-dates'); // body of the calendar
		
		// clearing all previous cells
		tbl.html('');
	
		// filing data about month and in the page via DOM.
		this.$('#calender-month').text(this.calendar.months[month]);
		this.$('#calender-year').text(year);
		
		// creating all cells
		var efic_month = 0;
		var date = 1;
		var slides = 9;
		var startSlide = 0;
		
		var row = document.createElement("div");
		row.setAttribute('id','calendar-dates-row');
		var self = this;
		for (var i = 0; i < 12; i++) {

				if (year === self.mostrecentrecords && efic_month > (parseInt(self.collection.records.date)-1)){
					break;
				}

				else {
					var cell = document.createElement("p");
					
					cell.setAttribute('data-date',(efic_month + 1) +'/'+date +'/'+ year);
					//cell.setAttribute('id',(efic_month + 1) +'/'+date +'/'+ year);
					
					var cellText = '<div class="date">' + date + '</div>' + self.calendar.months[efic_month]; 
					var recentMonth = (self.collection.records.date);
					var a = recentMonth.split("/");
					if (year === today.getFullYear() && efic_month === (parseInt(a[0])-1)) {
						cell.classList.add("bg-info");
						slides = self.getSlides();
						startSlide = (efic_month + 1)/slides;
					} // color today's date
					//cell.appendChild(cellText);
					$(cell).append(cellText);
					row.appendChild(cell);
					efic_month++;
				}
		}
		
		tbl.append(row); // appending each row into calendar body.
		this.$('#calendar-dates-row').ready(

			setTimeout(function(){
				Utils.initBxSlider(self.$('#calendar-dates-row'),{
					slideWidth: 121,
					minSlides: 4,
					maxSlides: slides,
					forceStart: true,
					pager: false,
					touchEnabled: true,
					prevText: '<span id="prev-dt"></span>',
					nextText: '<span id="next-dt"></span>',
					controls: true,
					preloadImages: "all",
					infiniteLoop:false,
					startSlide: 1 //startSlide
					}
				)
				}, 100)
		);
		
	
	}
	//@method getContext @return DailyMeditations.View.Context
,	getContext: function ()
	{	
		
		//@class DailyMeditations.View.Context
		return {
			haveSubscription: _.has(this.collection,'haveSubscription')? this.collection.haveSubscription: true
		};
	}
});

export = CustomView;