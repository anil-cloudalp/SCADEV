/// <amd-module name="DailyMeditations.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>

import * as _ from 'underscore';
import * as daily_meditations_tpl from 'daily_meditations.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import { GlobalViewsPaginationView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.Pagination.View';

const CustomView: any = BackboneView.extend({
	//@property {Function} template
	template: daily_meditations_tpl
	//@property {String} title
,	title: Utils.translate('Daily Meditations')
	//@property {String} className
,	className: 'DailyMeditationsView'
	//@property {String} page_header
,	page_header: Utils.translate('Daily Meditations')

,	attributes: {
		'id': 'daily_meditations'
	,	'class': 'DailyMeditationsView'
	}
	//@property {Object} events
,	events: {
		'click #prev-mo': 'prevMo'
	,	'click #next-mo': 'nextMo'
	,	'click #prev-yr': 'prevYr'
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
		
		if((new Date(emeds_date).getTime()) <= today.getTime()){
			
			$('[data-date]').removeClass('bg-info');
			dateEl.addClass('bg-info');
		
			this.emeds_date = emeds_date;
			
			var self = this;
			this.refreshData().then(function(){
				self.$('#daily-meditations').html(self.createHtml());
			});
			
		}
	}
,	refreshData: function()
	{
		
		this.filters = {
			type: 'EMEDS',
			results_per_page: 20,
			date: this.emeds_date
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
			,	href: '/daily_meditations'
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
		
		var self = this;
		this.once('afterViewRender',function(){
			self.showCalendar(calendar.currentMonth,calendar.currentYear);
			self.$('#daily-meditations').html(self.createHtml());
		});
	}
,	beforeShowContent: function()
	{	
		return this.refreshData();
	}
,	getResults: function(data)
	{
		var self = this;
		
		var promise = new Backbone.Model().save(
					data
				,	{
						url: Utils.getAbsoluteUrl('services/Subscriptions.Service.ss')

					}
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
			if(records.length){
				_.each(records,function(rec:any){
					html +='<h2>'+ rec.title +'</h2>';
					html +='<div class="emeds-content">'+ rec.content +'</div>';
				});
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
		if(this.calendar.currentYear == this.calendar.today.getFullYear())
			return;
		
		if(((this.calendar.currentYear + 1) == this.calendar.today.getFullYear()) && (this.calendar.currentMonth > this.calendar.today.getMonth()))
			this.calendar.currentMonth = this.calendar.today.getMonth();
			
		this.calendar.currentYear++;
		this.showCalendar(this.calendar.currentMonth, this.calendar.currentYear);
		
	}

,	prevYr: function(e)
	{
		e.stopPropagation();
		this.calendar.currentYear--;
		this.showCalendar(this.calendar.currentMonth, this.calendar.currentYear);
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
		var date = 1;
		var slides = 9;
		var startSlide = 0;
		
		var row = document.createElement("div");
		row.setAttribute('id','calendar-dates-row');
		for (var i = 0; i < 31; i++) {

				if ( (date > daysInMonth) || (date > today.getDate() && year === today.getFullYear() && month === today.getMonth()) ){
					break;
				}

				else {
					var cell = document.createElement("p");
					
					cell.setAttribute('data-date',(month + 1) +'/'+date +'/'+ year);
					
					var cellText = '<div class="date">' + date + '</div>' + this.calendar.months[month]; //document.createTextNode(date + " " + this.calendar.months[month]);
					if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
						cell.classList.add("bg-info");
						
						slides = this.getSlides();
						
						startSlide = (today.getDate() - 1)/slides;
						
					} // color today's date
					//cell.appendChild(cellText);
					$(cell).append(cellText);
					row.appendChild(cell);
					date++;
				}
		}
		
		tbl.append(row); // appending each row into calendar body.
		var self = this;
		
		
		
		this.$('#calendar-dates-row').ready(
			setTimeout(function(){
				Utils.initBxSlider(self.$('#calendar-dates-row'),{
					slideWidth: 100,
					minSlides: 4,
					maxSlides:slides,
					forceStart: true,
					pager: false,
					touchEnabled: true,
					nextText: '<span id="next-dt"></span>',
					prevText: '<span id="prev-dt"></span>',
					controls: true,
					preloadImages: "all",
					infiniteLoop:false,
					startSlide: startSlide
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