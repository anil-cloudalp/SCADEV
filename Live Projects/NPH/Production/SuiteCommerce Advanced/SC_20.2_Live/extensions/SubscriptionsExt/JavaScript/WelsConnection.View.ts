/// <amd-module name="WelsConnection.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>

import * as _ from 'underscore';
import * as wels_connection_tpl from 'wels_connection.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import { GlobalViewsPaginationView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.Pagination.View';

const CustomView: any = BackboneView.extend({
	
	template: wels_connection_tpl

,	title: Utils.translate('WELS Connection')

,	page_header: Utils.translate('WELS Connection')

,	attributes: {
		'id': 'wels_connection'
	,	'class': 'SubscriptionsView'
	}

,	events: {
	
	}
	
,	getSelectedMenu: function ()
	{
		return 'my_subscriptions';
	}
	
,	getBreadcrumbPages: function ()
	{
		return {
				text: this.title
			,	href: '/wels-connection-detail'
		};
	}
	//@method initialize
,	initialize: function (options)
	{
		this.application = options.application;
		
		this.isKidsConnection = (Backbone.history.fragment.indexOf('kids-connection') != -1)?true:false;
		
		if(this.isKidsConnection){
			this.title = Utils.translate("Kid's Connection");
			this.page_header =  Utils.translate("Kid's Connection");
		}
		
		
	}
,	beforeShowContent: function()
	{
		var url_options = Utils.parseUrlOptions(Backbone.history.fragment);
		
		var type = (this.isKidsConnection == true)?'KC': 'WC';
		
		this.filters = {
			page: this.getPageFromUrl(url_options.page),
			type: type,
			results_per_page: 20
		}
		
		
		return this.getResults(this.filters);
		
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
			records: _.has(this.collection,'records')? this.collection.records: []
		,	haveSubscription: _.has(this.collection,'haveSubscription')? this.collection.haveSubscription: true
		,	isKidsConnection: this.isKidsConnection
		
		};
	}
});

export = CustomView;

