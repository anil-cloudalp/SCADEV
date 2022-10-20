
/// <amd-module name="Contact.View"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts"/>
import * as _ from 'underscore';
import * as contact_tpl from 'contact.tpl';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import BackboneModel = require('../../../Commons/BackboneExtras/JavaScript/Backbone.Model');
import GlobalViewsMessageView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.Message.View');
import { Loggers } from '../../../Commons/Loggers/JavaScript/Loggers';
import BackboneFormView = require('../../../Commons/Backbone.FormView/JavaScript/Backbone.FormView');
import ContactUsModel = require('./ContactUs.Model');

// @module Contact.View @extends Backbone.View
const ContactView: any = BackboneView.extend({
    template: contact_tpl,

    title: Utils.translate('Contact | Mia Telecomms'),

    page_header: Utils.translate('Contact Us'),

    attributes: {
        id: 'contact',
        class: 'contact-page'
    },

    events: {
        'submit form': 'submitForm',
        'click [data-action="validate"]': 'validateFields',
    },
    
    bindings:{
        '[name="firstname"]': 'firstname',
        '[name="lastname"]': 'lastname',
        '[name="email"]': 'email',
        '[name="phone"]': 'phone',
        '[name="comments"]': 'comments',
        '[name="business"]':'business'
    },

    initialize:function(){
        this.model = new ContactUsModel();
        this.model.on('save', _.bind(this.showSuccess, this));
        this.model.on('saveCompleted', _.bind(this.resetForm, this));
        BackboneFormView.add(this);
        
    },
    resetForm:function(event){
        this.model.unset('firstname');
        this.model.unset('lastname');
        this.model.unset('email');
        this.model.unset('phone');
        this.model.unset('comments');
        this.model.unset('business');
        event && event.preventDefault();
    },
    showSuccess: function() {
      if (this.$savingForm) {
        const global_view_message = new GlobalViewsMessageView({
          message: Utils.translate("Your's request is submitted and Thank you for contacting us"),
          type: 'success',
          closable: true
        });
      }
    },

    validateFields: function(e, model, props) {
        const self =  this;
        const loggers = Loggers.getLogger();
        const actionId = loggers.start('get-in-touch-submit form');

        const promise = self.saveForm(e, model, props);

        if (promise) {
            promise.done(() => {
                loggers.end(actionId, {
                    operationIds: self.model.getOperationIds(),
                    status: 'success'
                });
            });
            return promise && promise.then
               (
                 function(success){
                  //  console.log(success);
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
             
        }else{
         
            }
               
    },     
     showMessage: function(message, type, field){

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
  },    
   
    // @method getContext @return Contact.View.Context
    getContext: function() {
      
        
      return {
             
      };
    }
});

export = ContactView;
