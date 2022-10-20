/// <amd-module name="ReturnsExchanges.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>

import * as _ from 'underscore';
import * as returns_exchanges_tpl from 'returns_exchanges.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import CustomModulesModel = require('./CustomModules.Model');
import BackboneFormView = require('../../../Commons/Backbone.FormView/JavaScript/Backbone.FormView');

const CustomView: any = BackboneView.extend({

		template: returns_exchanges_tpl
	,     title: 'Returns	& Exchanges'

    ,	events:  {
                  'submit form': 'createLead'
                  ,'change #reason-for-return': 'toggleReason'
                  ,'blur .returns-field': 'blockErr'
               }

	,	initialize: function (option){

	  this.model = new CustomModulesModel();


	  BackboneFormView.add(this);
	  var self = this;
	  
		  // BackboneFormView.add(this);
	}

	,toggleReason: function(e)
	{
	  if($(e.target).val()=="3")
	{
		$("#parent_reason").css("display", "block");
		$("#reason").addClass("returns-field");

	}
	 else
	 {
		   $("#parent_reason").css("display", "none");
		  $("#reason").removeClass("returns-field");


	 }
	}
	,	blockErr: function(e)
	  {	var thisEl = $(e.currentTarget);
		var self = this;
		if(thisEl.attr('data-label')){
		  if(thisEl.val()){
			if(thisEl.parent().find('[data-validation-error="block"]').length > 0){
			thisEl.parent().removeAttr('data-validation-error');
			thisEl.parent().find('[data-validation-error="block"]').remove();
			}
		  }
		  else{
			if(thisEl.parent().find('p[data-validation-error="block"]').length == 0){
				thisEl.parent().attr('data-validation-error','');
			thisEl.parent().append('<p data-validation-error="block">'+ thisEl.attr('data-label')+' is required.</p>');
			}
		  }
		}
	  }

	,	createLead: function(e)
	  {
		e.preventDefault();
		this.error = false;
		 var returnsFields = {};
		var self = this;
		 $('.returns-field').each(function(){

			  if($(this).val() == '' || $(this).val() == null){
				if($(this).attr('data-label') )
				{
				   self.error = true;
				   $(this).trigger('blur');
				 }

			  }
			else{
				  returnsFields[$(this).attr('id')] = $(this).val();
				}

		 });

		if(!this.error)
		{
		  this.model.set('returnsFields',returnsFields);
		  this.model.set('urlFragment','/returns');


		  var self = this
		  ,	res = []
		  ,	promise = this.saveForm(e);


		  if (promise)
		   {	self.promise = promise;

			promise.fail(function (jqXhr)
			{
			  jqXhr.preventDefault = true;
			}).done().always(_.bind(self.render, self));
		  }
		}

	  }

	,	getContext: function()
	  {
		var isError = false
		,	response = ''
		,	isResponse = false;

		if(this.promise){
			console.log(this.promise);
		  if(this.promise.responseJSON.hasOwnProperty('id'))
		  {
			response = 'Your application is successfully sent.';
			isError = false;
			isResponse = true;
		  }
		  else{
			 response = 'Something went wrong! application could not sent.';
			 isError = true;
			 isResponse = true;
		  }
		}
		return {
		  isError: isError
		,	response: response
		,	isResponse: isResponse
		};
	  }

   });
export = CustomView;
