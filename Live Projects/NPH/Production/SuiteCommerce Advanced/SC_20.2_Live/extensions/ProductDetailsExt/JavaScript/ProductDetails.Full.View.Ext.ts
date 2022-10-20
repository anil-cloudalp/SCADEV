/// <amd-module name="ProductDetails.Full.View.Ext"/>
import * as _ from 'underscore';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../../Commons/Utilities/JavaScript/Configuration';
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

import existingView = require('../../../Advanced/ProductDetails/JavaScript/ProductDetails.Full.View');
import ProductDetailsBaseView = require('../../../Advanced/ProductDetails/JavaScript/ProductDetails.Base.View');
import ProductDetailsInformationView = require('../../../Advanced/ProductDetails/JavaScript/ProductDetails.Information.View');
import ProductDetailsImprintOptionView = require('./ProductDetails.ImprintOption.View');
import ProductDetailsSubItemsView = require('./ProductDetails.SubItems.View');
import MusicianResourceModel = require('../../../extensions/MusicianResource/JavaScript/MusicianResource.Model');
import SessionStorageHandler = require('../../../Commons/Utilities/JavaScript/SessionStorageHandler')


_.extend(existingView.prototype, {
	
	initialize: function initialize(options): void {
        ProductDetailsBaseView.prototype.initialize.apply(this, arguments);
        //this.model.on('change', this.updateURL, this);
        // Tracker.getInstance().trackProductView(this.model);
		
		this.model.on('change',function(model){
				
			var childItem = model.getItem();

			var showGiftOption = childItem.get('custitem_appf_is_gift') || false
			,	showRenewalNotice = childItem.get('custitem_appf_send_renewal_notice') || false;
			
			if(showGiftOption){
				jQuery('.is-gift-option').show();
			}
			else{
				jQuery('.is-gift-option').hide();
			}
			if(showRenewalNotice){
				
				if(!showGiftOption){
					jQuery('.send-renewal-notice').show();
					jQuery('.send-renewal-notice').find('.no-zone').show();
				}
				else{
					jQuery('.send-renewal-notice').show();
					
					if(jQuery('[name="subs_isgift"]:checked').val() == "T")
						jQuery('.send-renewal-notice').find('.no-zone').hide();
				}
			}
			else{
				jQuery('.send-renewal-notice').hide();
			}
		});
		this.application = options.application;
        this.application.getLayout().on('beforeAppendView',function(view){
            const viewId = view.$el.attr('id');

            if(viewId == 'ProductDetails.Full.View' && SessionStorageHandler.get('musician-resource-page')=="true"){
                this.$(document).ready(function(){
                    $('.shopping-layout-breadcrumb').hide();
                });
				this.render();	
            }
        });

	 this.musician = new MusicianResourceModel();
    }
,	childViews: _.extend(existingView.prototype.childViews, {
			'Product.Information': function ()
			{
				return new ProductDetailsInformationView({
					model: this.model
				,	searchRes: this.imprintOptionModel.get('addInfo')
				});
			}
		,	'Product.ImprintOption': function ()
			{	
				return new ProductDetailsImprintOptionView({
					model: this.model
				,	application: this.application
				,	searchRes: this.imprintOptionModel.get('imprintData')
				});
			}
		,	'Product.Subitems': function ()
			{	
				return new ProductDetailsSubItemsView({
					model: this.model
				,	application: this.application
				,	subItems: this.imprintOptionModel.get('subItems')
				});
			}
	})
,	destroy: function destroy(): any {
        //this.model.off('change');
        return this._destroy();
    }
,	events: {
		'click #goto-description': 'gotoDescription'
	,	'change [name="subs_isgift"]': 'toggleSubsOptions'
	,	'blur .required-subs-field': 'handleErr'
	,	'change [name="subs_Renewal_notice"]': 'handleErr3'
	,	'change [name="subs_recipient_country"]': 'updateStates'
	}
,	updateStates: function (e)
	{
		var html = '';
		var selectedCountry = this.$(e.currentTarget).val();
		var countries = Configuration.get('siteSettings.countries');
		var states = countries[selectedCountry].states || '';
		
		if(states){
			html += '<select name="subs_recipient_state" class="required-subs-field"><option value="">-- Please Select --</option>';
			_.each(states,function(state:any){
				html +='<option value="'+state.code+'">'+state.name+'</option>';
			});
			html+='</select>';
		}
		else{
			html += '<input type="text" name="subs_recipient_state" class="required-subs-field" maxlength="20"/>';
		}
		
		this.$('.subs_recipient_state_content').html(html);
		this.$('.subs_recipient_state_content').removeAttr('data-validation-error');
		
	}
,	handleErr3: function(e)
	{
		var radiobtn = $(e.currentTarget).val();
		
		if(radiobtn){
			
			if($('.subs_Renewal_notice-radio').find('p[data-validation-error="block"]').length > 0){
				
			   $('.subs_Renewal_notice-radio').find('p[data-validation-error="block"]').remove();
			}
		}
	}
,	toggleSubsOptions: function(e)
	{
		var radiobtn = $(e.currentTarget).val();
			
		if(radiobtn){
			
			if($('.subs_isgift-radio').find('p[data-validation-error="block"]').length > 0){
				
			   $('.subs_isgift-radio').find('p[data-validation-error="block"]').remove();
			}
		}
		
		if(radiobtn == 'T'){
			this.$('.no-zone').hide();
			this.$('.yes-zone').show();
		}
		else if(radiobtn == 'F'){
			this.$('.yes-zone').hide();
			this.$('.no-zone').show();
		}
	}
,	handleErr: function(e)
	{	
		var thisEl = $(e.currentTarget);
		
		if(thisEl.val()){
			
			if(thisEl.parent().find('[data-validation-error="block"]').length > 0){
				
				thisEl.parent().find('[data-validation-error="block"]').remove();
				thisEl.parent().removeAttr('data-validation-error');
			}
			
			if(thisEl.is('[type="email"]')){
				
				if(!Backbone.Validation.patterns.email.test(thisEl.val())){
					
					if(thisEl.parent().find('p[data-validation-error="block"]').length == 0){
						
						thisEl.parent().attr('data-validation-error','');
						thisEl.parent().append('<p data-validation-error="block">Enter a valid email.</p>');
					}
				}
					
			}
			if(thisEl.is('[name="subs_recipient_zip"]')){
				
				var tmp_var:any = thisEl.val();
				
				if(tmp_var.length > 10){
					
					if(thisEl.parent().find('p[data-validation-error="block"]').length == 0){
						
						thisEl.parent().attr('data-validation-error','');
						thisEl.parent().append('<p data-validation-error="block">Max length is 10</p>');
					}
				}
					
			}
			
			
		}
		else{
			if(thisEl.parent().find('p[data-validation-error="block"]').length == 0){
				
				thisEl.parent().attr('data-validation-error','');
				thisEl.parent().append('<p data-validation-error="block">This field is required.</p>');
			}
		}
	}
,	gotoDescription: function()
	{	
		var descriptionSec:any = [];
		
		if($('[data-target="product-details-information-0"]').css('display') == "none")
			descriptionSec = $('[data-target="#product-details-information-tab-0"]');
		else
			descriptionSec = $('[data-target="product-details-information-0"]');
		
		descriptionSec.trigger('click');
		descriptionSec[0].scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
,	getContext:  _.wrap(existingView.prototype.getContext, function init(fn) {
		let retObj = fn.apply(this, _.toArray(arguments).slice(1));
		
		const item = this.model.get('item');
		var internalid = item.get("internalid");
		var value;
		

        if(this.response[0] == undefined){

			value = {internalid:false};
		}
		else{
			
			value = this.response[0];
		}
		var commercecategoryurls = this.model.get('item').get('commercecategory').categories;

			for(var i = 0; i< commercecategoryurls.length;i++)
			{
				var catID = Configuration.get("Musicianresourcepage.musicianresourceid");
				if(catID != null && catID != '' && commercecategoryurls[i].id == catID)
				{
					
					this.model.backtosearch = true;

				}


			}
			if(this.model.backtosearch == true)
			{			 						
				if(value[item.get("internalid")] == true)
				{			
					this.model.ispreviouspurchase = true;			
				}
				else
				{           
					this.model.ispreviouspurchase = false;

				}
			}
		var hasSubItems = _.has(this.imprintOptionModel.get('subItems'),'results')? this.imprintOptionModel.get('subItems').results: [];
			
		retObj = _.extend(retObj,{
			
				isGiftItem: (item.get('itemtype') == "GiftCert")?true : false
			,	currency: SC.SESSION.currency.symbol
			,	isMatrixItem: item.get('custitem_appf_is_subscription_item') || false
			,	removeLogo: item.get('custitem_appf_remove_logo')
			,	countries: _.values(Configuration.get('siteSettings.countries'))
			,	hasSubItems: (hasSubItems.length > 0)? true: false
			,	isOnSale: item.get('custitem_appf_item_on_sale') || false
			,	OnSaleMessage: item.get('custitem_appf_item_on_sale_message') || ''
			,   info: this.model.ispreviouspurchase
			,   backtosearch:this.model.backtosearch
			,	backtosearchresultUrl:"/musiciansresource?display=list"

		});
				
		return retObj;
	})
});

export = existingView;

