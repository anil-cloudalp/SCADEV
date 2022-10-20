/// <amd-module name="ProductDetails.Base.View.Ext"/>
import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { AjaxRequestsKiller } from '../../../Commons/AjaxRequestsKiller/JavaScript/AjaxRequestsKiller';
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

import existingView = require('../../../Advanced/ProductDetails/JavaScript/ProductDetails.Base.View');
import ImprintOptionModel = require('./ProductDetails.ImprintOption.Model');
import MusicianResourceModel = require('../../../extensions/MusicianResource/JavaScript/MusicianResource.Model')


_.extend(existingView.prototype, {
	
	initialize:  _.wrap(existingView.prototype.initialize, function init(fn) {
		fn.apply(this, _.toArray(arguments).slice(1));
		
		this.imprintOptionModel = new ImprintOptionModel();
		this.musician = new MusicianResourceModel();
	}),
	productDetails: function productDetails(api_query, options) {
		const application = this.application;
		const product = this.model;
		const promise = jQuery.Deferred();
		const item = product.get('item');
		const self = this;

		item.fetch({
			data: api_query,
			killerId: AjaxRequestsKiller.getKillerId(),
			pageGeneratorPreload: true,
			// this will stop the ErrorManagement module to process this error
			// as we are taking care of it
			preventDefault: true
		}).then(
			// Success function
			function(data, _result, jqXhr) {
				if (!item.isNew()) {
					// once the item is fully loaded we set its options
					product.setOptionsFromURL(options);

					product.set('source', options && options.source);

					product.set('internalid', options && options.internalid);

					if (
						api_query.id &&
						item.get('urlcomponent') &&
						SC.ENVIRONMENT.jsEnvironment === 'server'
					) {
						nsglobal.statusCode = 301;
						nsglobal.location = product.generateURL();
					}

					if (data.corrections && data.corrections.length > 0) {
						if (
							item.get('urlcomponent') &&
							SC.ENVIRONMENT.jsEnvironment === 'server'
						) {
							nsglobal.statusCode = 301;
							nsglobal.location = data.corrections[0].url + product.getQuery();
						} else {
							Backbone.history.navigate(
								`#${data.corrections[0].url}${product.getQuery()}`,
								{ trigger: true }
							);
							promise.reject();
						}
					}

					self.bindModel();
					var itemId = self.model.get('item').get('internalid');
							
					self.imprintOptionModel.save({'itemId': itemId}).then(function(){
						
						self.musician.save({"iteminternalids":[itemId]},{wait:true}).then(function(response){
							self.response = response
							promise.resolve();
						})
					});

				} else if (jqXhr.status >= 500) {
					application.getLayout().internalError();
					promise.reject();
				} else if (jqXhr.responseJSON.errorCode !== 'ERR_USER_SESSION_TIMED_OUT') {
					// We just show the 404 page
					application.getLayout().notFound();
					promise.reject();
				}
			},
			// Error function
			function(jqXhr) {
				if (jqXhr.status >= 500) {
					application.getLayout().internalError();
					promise.reject();
				} else if (jqXhr.responseJSON.errorCode !== 'ERR_USER_SESSION_TIMED_OUT') {
					// We just show the 404 page
					application.getLayout().notFound();
					promise.reject();
				}
			}
		);

		return promise;
	}
});

export = existingView;

