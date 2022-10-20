/// <amd-module name="MySubscriptions.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>

import * as _ from 'underscore';
import * as my_subscriptions_tpl from 'my_subscriptions.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import { GlobalViewsPaginationView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.Pagination.View';


const CustomView: any = BackboneView.extend({
	
	template: my_subscriptions_tpl

,	title: Utils.translate('My Subscriptions')

,	page_header: Utils.translate('My Subscriptions')

,	attributes: {
		'id': 'my_subscriptions'
	,	'class': 'MySubscriptionsView'
	}

,	events: {
	//	'click #prev-mo': 'prevMo'
	}
	
,	getSelectedMenu: function ()
	{
		return 'my_subscriptions';
	}
	
,	getBreadcrumbPages: function ()
	{
		return {
				text: this.title
			,	href: '/my-subscriptions'
		};
	}
	//@method initialize
,	initialize: function (options)
	{
		this.application = options.application;
		
	}
,	beforeShowContent: function()
	{
		
		return this.getResults({
			type: 'subscription',
		});
		
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

	
,	getContext: function ()
	{	
		
		
		return {
		exp_dates: this.collection || ''
		
		};
	}
});

export = CustomView;