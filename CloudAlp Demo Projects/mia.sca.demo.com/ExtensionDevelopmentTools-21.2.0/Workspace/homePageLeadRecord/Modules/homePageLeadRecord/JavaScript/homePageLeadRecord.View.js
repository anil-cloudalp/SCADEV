// @module RudraCustomization.homePageLeadRecord.homePageLeadRecord
define('RudraCustomization.homePageLeadRecord.homePageLeadRecord.View'
,	[
	'rudracustomization_homepageleadrecord_homepageleadrecord.tpl'
	
	
	,	'Backbone'
	,	'RudraCustomization.homePageLeadRecord.homePageLeadRecord.Model'
	,	'Backbone.FormView'
	,	'GlobalViews.Message.View'
	,	'Utils'
    ]
, function (
	rudracustomization_homepageleadrecord_homepageleadrecord_tpl
	
	
	,	Backbone
	,	homePageLeadRecordModel
	,	BackboneFormView
	,	GlobalViewsMessageView
	,	Utils
)
{
    'use strict';

	// @class RudraCustomization.homePageLeadRecord.homePageLeadRecord.View @extends Backbone.View
	return Backbone.View.extend({

		template: rudracustomization_homepageleadrecord_homepageleadrecord_tpl

	,	initialize: function (options) {


			  this.model = new homePageLeadRecordModel();
			  this.model.on('save', _.bind(this.showSuccess, this));
			  this.model.on('saveCompleted', _.bind(this.resetForm, this));
			  BackboneFormView.add(this);
		}

	,	events: {
			'submit form': 'submitForm',
			'click [data-action="submitcontent"]':'homeForm'
		}

	,	bindings: {
			'[name="firstname"]': 'firstname',
			'[name="lastname"]': 'lastname',
			'[name="email"]': 'email',
			'[name="phone"]': 'phone',
			'[name="comments"]': 'comments',
			'[name="business"]':'business'
		}

	, 	childViews: {

		}

	,	homeForm:function(e,model,prop){
		var self = this;
		const promise = self.saveForm(e, model, prop);
			if (promise) {
			return promise && promise.then
			   (
				 function(success){
				   if (success.id){
					 
					 self.showMessage(Utils.translate("Your form has been submitted"), 'success');
				   }else{
					 self.showMessage(Utils.translate("Something went wrong try later"), 'error')
					}
					
				  }
				  , function(fail){
					  fail.preventDefault = true;
			  
					  _.each(fail.responseJSON.errormessage, function(message, field){
						self.showMessage(message, 'error', field);
					  });
					  
					}
				);

			}

		}

	,	showSuccess: function() {
			if (this.$savingForm) {
			  const global_view_message = new GlobalViewsMessageView({
				message: Utils.translate("Your's request is submitted and Thank you for contacting us"),
				type: 'success',
				closable: true
			  });
			}
		}

	,	showMessage: function(message, type, field){
			if(type === 'error'){  
			   const global_view_message = new GlobalViewsMessageView({
				 	message:message,
				 	type: 'error',
				 	closable: true,
				 
			   	});
			
			   this.$('[data-type="alert-placeholder"]').html(global_view_message.render().$el.html());
			 }else{
			   const globa_view_message = new GlobalViewsMessageView({
				 	message:message,
					type: 'success',
				 	closable: true,
				});
		  
			   this.$('[data-type="alert-placeholder"]').html(globa_view_message.render().$el.html());
			} 
		}

	,	resetForm:function(event){
			this.model.unset('firstname');
			this.model.unset('lastname');
			this.model.unset('email');
			this.model.unset('phone');
			this.model.unset('comments');
			this.model.unset('business');
			event && event.preventDefault();
		}

		//@method getContext @return RudraCustomization.homePageLeadRecord.homePageLeadRecord.View.Context
	,	getContext: function getContext()
		{
			//@class RudraCustomization.homePageLeadRecord.homePageLeadRecord.View.Context
			
			return {
				
			};
		}
	});
});
