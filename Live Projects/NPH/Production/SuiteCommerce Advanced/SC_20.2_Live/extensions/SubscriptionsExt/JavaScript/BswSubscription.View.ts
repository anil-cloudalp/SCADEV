/// <amd-module name="BswSubscription.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>

import * as _ from 'underscore';
import * as bsw_subscription_tpl from 'bsw_subscription.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import { GlobalViewsPaginationView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.Pagination.View';
import { UrlHelper } from '../../../Commons/UrlHelper/JavaScript/UrlHelper';

const CustomView: any = BackboneView.extend({
	
	template: bsw_subscription_tpl

,	title: Utils.translate('Bible Study Workshop')

,	page_header: Utils.translate('Bible Study Workshop')

,	attributes: {
		'id': 'bsw_subscription'
	,	'class': 'SubscriptionsView'
	}

,	events: {
		'click .bsw-subscription-filters [data-sort]': 'sortHandler'
	,	'click [data-filter="title"]': 'fiterHandler'
	}
	
,	getSelectedMenu: function ()
	{
		return 'my_subscriptions';
	}
	
,	getBreadcrumbPages: function ()
	{
		return {
				text: this.title
			,	href: '/bsw-subscription'
		};
	}
	//@method initialize
,	initialize: function (options)
	{
		this.application = options.application;
		
	}
,	beforeShowContent: function()
	{
		var url_options = Utils.parseUrlOptions(Backbone.history.fragment);
		
		this.filters = {
			page: this.getPageFromUrl(url_options.page),
			sort: _.has(url_options,'sort')? url_options.sort : '',
			title: _.has(url_options,'title')? url_options.title : '',
			type: 'BSW',
			results_per_page: 20
		}
		
		
		return this.getResults(this.filters);
	}
,	sortHandler: function(e)
	{
		var url = Backbone.history.fragment;
		
		var data_sort = $(e.target).attr('data-sort');
		
		url = UrlHelper.setUrlParameter(url, 'sort', data_sort);
		
		
		Backbone.history.navigate(url, {trigger: true});
	}
,	fiterHandler: function(e)
	{
		var filterInput = $('#filter-input').val();
		var url = Backbone.history.fragment;
		
		if(filterInput)
		{
			url = UrlHelper.setUrlParameter(url, 'title',filterInput);
			
			
		}
		else{
			url = UrlHelper.removeUrlParameter(url, 'title');
		}
		Backbone.history.navigate(url, {trigger: true});
		
	}
,	getPageFromUrl: function (url_value)
	{
		var page_number = parseInt(url_value, 10);

		return !isNaN(page_number) && page_number > 0 ? page_number : 1;
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
		'GlobalViews.Pagination': function ()
		{
			return new GlobalViewsPaginationView(_.extend({
				totalPages: Math.ceil(this.collection.totalRecordsFound / this.collection.recordsPerPage)
			}, Configuration.defaultPaginationSettings));
		}
	}

	
,	getContext: function ()
	{	
		
		return {
			filterInput: this.filters.title
		,	records: _.has(this.collection,'records')? this.collection.records: []
		,	haveSubscription: _.has(this.collection,'haveSubscription')? this.collection.haveSubscription: true
		
		};
	}
});
export = CustomView;