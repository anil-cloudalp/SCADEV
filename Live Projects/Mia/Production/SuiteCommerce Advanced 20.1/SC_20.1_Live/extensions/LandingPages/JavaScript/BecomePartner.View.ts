
/// <amd-module name="BecomePartner.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as become_partner_tpl from 'become_partner.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import BecomePartnerFormModel = require('./BecomePartnerForm.Model');
import BackboneFormView = require('../../../Commons/Backbone.FormView/JavaScript/Backbone.FormView');
import GlobalViewsMessageView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.Message.View');
import Configuration = require('../../../Advanced/SCA/JavaScript/SC.Configuration');
// @module BecomePartner.View @extends Backbone.View
const BecomePartnerView: any = BackboneView.extend({
    template: become_partner_tpl,

    title: Utils.translate('Become a Partner | Mia Telecomms'),

    page_header: Utils.translate('Become a Partner'),

    attributes: {
        id: 'become_partner',
        class: 'become-partner'
    },

    events: {
		'click [data-action="submitcontent"]': 'submitForm',
			'change [name="douoffervoiceplatform"]': 'tooglevoiceplatform',
			'change .dynamic_add': 'showModal',
			'click #modal_submit_form': 'addOption',
			'keyup [name="curr_dist_rel"]': 'searchOptions',
			'click [name="cs_options"]': 'selectOption',
			'click .dist_selected_opts span': 'removeOpts',
			'click [data-action="scrolldown"]':'scrollDown'
		},
		scrollDown:function(){
		    $('html,body').animate({
			scrollTop:520
		    },'slow');	
		},
	
		removeOpts: function(e){
			this.$(e.currentTarget).remove();
		},
		
		removeErr: function(){	
			var $inputParent = this.$('.cs_container').parent();
			var $errEl = $inputParent.find('p[data-validation-error="block"]');
			var distValues = [];
			
			this.$('.dist_selected_opts span').each(function(){
				distValues.push(jQuery(this).attr('data-id'));
			});
			
			if(distValues.length && $errEl.length){
			
				$errEl.remove();
			}
		},
	
	
		selectOption: function(e){
			
			var $target = this.$(e.currentTarget);
			var name = $target.text();
			var id = $target.attr('data-id');
			var $menu = $target.parent();
			var $input = $menu.parent().find('[name="curr_dist_rel"]');
			var existingValue = [];
			
			this.$('.dist_selected_opts span').each(function(){
				existingValue.push(jQuery(this).attr('data-id'));
		  '<i></i>'
			});
			
	 
			  
			
			if(id == 'new'){
				
				this.$('#modal_option_sublistid').val('distributorRelationship');
				this.$("#myModal").modal();	
			}
			else{
				if(existingValue.indexOf(id) == -1){
	
	
					 this.$('.dist_selected_opts').append('<span data-id="'+ id +'">'+ name +'<i></i></span>');
			 
					
				}
				$input.val('');
				$menu.hide();
			}
			this.removeErr();
			
		},
	
	
		showOptions: function(e){
			var $target = this.$(e.currentTarget);
			var query = $target.val();
			
			if(query.length > 2){
				
				var $menu = $target.parent().find('[data-type="Cs.Items"]');
				var listOptions = this.model.get('listOptions') || {};
				
				var distributorRelationship = _.has(listOptions,'distributorRelationship')? listOptions['distributorRelationship'] : [];
				var self = this;
				
				var foundArr = _.filter(distributorRelationship,function(dist:any){
	
					return self.matchItem(dist.name,query);
				});
				
				var menuHtml = '';
				
				if(foundArr.length){
					_.each(foundArr,function(obj:any){
						
						menuHtml += '<div data-id="'+ obj.id + '" name="cs_options">'+ obj.name + '</div>';
					});
				}
				else{
					menuHtml += '<div data-id="new" name="cs_options">-- Create New --</div>';
				}
				
				$menu.html(menuHtml);
				$menu.show();
			}
		},
	
	
		matchItem: function(field,data){
			
			var str1 = field.toLowerCase();
			var str2 = data.toLowerCase();
			
			return (str1.indexOf(str2) != -1);
			
		},
	
	
		submitForm: function(e, model, props) {
			e.preventDefault();
			
			this.$('.dynamic_add').each(function(){
				
				var value = jQuery(this).val();
				
				if(_.isArray(value)){
							
					var existingValue = value.filter(function(val){
						return (val != 'new');
					});
					jQuery(this).val(existingValue);
				}
				else if(value == 'new'){
					
					 jQuery(this).val('');
				}
			});
			var hasErr = false;
			jQuery('select[multiple]').each(function(){
				
				jQuery(this).blur(); 
				
				var value:any = jQuery(this).val();
				
				if(value.length == 0){
					hasErr = true;
				}
			
			});
		/*	var distValues = [];
			
			this.$('.dist_selected_opts span').each(function(){
				distValues.push(jQuery(this).attr('data-id'));
			});
			
			this.model.set('distributorRelationship',distValues);
			
			if(distValues.length == 0){
			
				hasErr = true;
				var $inputParent = this.$('.cs_container').parent();
				
				if($inputParent.find('p[data-validation-error="block"]').length == 0){
					$inputParent.append('<p data-validation-error="block">Current Distributor Relationship is required</p>');
				}
			}*/
			
			if(hasErr){
				jQuery('[data-validation-error="block"]')[0].scrollIntoView();
			}
			else{
				this.saveForm(e, model, props);
			}
	
		},
	
	
		showModal: function(e){
			
			var value = this.$(e.currentTarget).val();
			var fieldName = this.$(e.currentTarget).attr('name');
			
			if((_.isArray(value) && (value.indexOf('new') != -1)) || (value == 'new')){
			
				this.$('#modal_option_sublistid').val(fieldName);
				this.$("#myModal").modal();
			}
		},
	
	
		addOption: function(){
			
			var reqObj:any = {};
			
			reqObj.value = this.$('#modal_option_value').val();
			reqObj.fieldKey = this.$('#modal_option_sublistid').val();
			
			var $alert_warn = this.$('[data-type="modal-alert-placeholder"]');
						console.log(	reqObj.fieldKey);
			  
			$alert_warn.html('');
			
			if(reqObj.value && reqObj.fieldKey){
				
				var self = this;
				this.model.fetch({data: reqObj}).then(function(res:any){
					console.log(res.recordId);
			
					var optionId = res.recordId || '';
					
					if(optionId){
					
						if(reqObj.fieldKey == 'distributorRelationship'){
							
							self.$('[name="curr_dist_rel"]').val('');
							self.$('.dist_selected_opts').append('<span data-id="'+ optionId +'">'+ reqObj.value +'</span>');
							self.$('[data-type="Cs.Items"]').hide();
							self.$("#myModal").modal('hide');
							
						}
						else{
							self.$('[name="' + reqObj.fieldKey + '"] option[value="new"]').after('<option value="' + optionId + '">' + reqObj.value + '</option>');
							
							
							var existingValue:any = self.$('[name="' + reqObj.fieldKey + '"]').val();
							
							if(_.isArray(existingValue)){
								
								existingValue = existingValue.filter(function(val){
									return (val != 'new');
								});
								existingValue.push(optionId);
								self.$('[name="' + reqObj.fieldKey + '"]').val(existingValue);
							}
							else{
								self.$('[name="' + reqObj.fieldKey + '"]').val(optionId);
							}
							self.$("#myModal").modal('hide');
						}
					}
					else{
						$alert_warn.html(
							new GlobalViewsMessageView({
								message: 'Something went wrong. Please try again later',
								type: 'error',
								closable: true
							}).render().$el
						);
					}
				});
			}
			else{
				$alert_warn.html(
					new GlobalViewsMessageView({
						message: 'Enter the option value',
						type: 'error',
						closable: true
					}).render().$el
				);
			}
			
			
		},
	
	
		tooglevoiceplatform: function(e){
			
			var $target = this.$(e.currentTarget);
			var $voicePlatform = this.$('.voice_platform');
			
			if($target.is(':checked')){
				$voicePlatform.show();
			}
			else{
				$voicePlatform.hide();
			}
		},
	
	
		bindings: {
			'[name="loginemail"]': 'loginemail',
			'[name="email"]': 'email',
			'[name="companyname"]': 'companyname',
			'[name="abn"]': 'abn',
			'[name="bizphone"]': 'bizphone',
			'[name="address1"]': 'address1',
			'[name="city"]': 'city',
			'[name="zipcode"]': 'zipcode',
			'[name="territory"]': 'territory',
			'[name="country"]': 'country',
			'[name="firstname"]': 'firstname',
			'[name="lastname"]': 'lastname',
			'[name="phone"]': 'phone',
			'[name="prodofinterest"]': 'prodofinterest',
			'[name="brandSold"]': 'brandSold',
			'[name="marketSegment"]': 'marketSegment',
			'[name="industryType"]': 'industryType',
			'[name="voicePlatform"]': 'voicePlatform',
			'[name="douoffervoiceplatform"]': 'douoffervoiceplatform',
			'[name="currentdistributorrelationship"]': 'currentdistributorrelationship'
		},
	
	
		initialize: function(options) {
			
			this.application = options.application;
			this.model = new BecomePartnerFormModel();
			this.searchOptions = _.debounce(_.bind(this.showOptions,this), 500);
			BackboneFormView.add(this);
			
			this.model.on('save', _.bind(this.redirect, this));
		},
		redirect: function(context, response) {
			
			var $alert_warn = this.$('[data-type="alert-placeholder"]');
			var $form = this.$('.become_a_partner_form form');		
			$alert_warn.html('');
			
			if(response && _.has(response,'recordId')){
				
				$form[0].reset();
				$alert_warn.html(
					new GlobalViewsMessageView({
						message: 'Thank You, Your request has been submitted successfully.',
						type: 'success',
						closable: true
					}).render().$el
				);
			}
			else{
				$alert_warn.html(
					new GlobalViewsMessageView({
						message: 'Something went wrong,please try again later',
						type: 'error',
						closable: true
					}).render().$el
				);
			}
			
		},
	
	
		beforeShowContent: function(){
			
			return this.model.fetch({data: {getListData: 'T'}});
		},
	
		
		getContext: function() {
		   
	
			return {
				listOptions: this.model.get('listOptions') || false
				
			};
		}
});

export = BecomePartnerView;
