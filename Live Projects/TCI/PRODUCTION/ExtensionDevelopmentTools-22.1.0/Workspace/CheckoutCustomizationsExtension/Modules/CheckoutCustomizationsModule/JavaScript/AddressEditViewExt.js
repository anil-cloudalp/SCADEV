/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

//@module Address
define(
	'TCI.CheckoutCustomizationsExtension.AddressEditViewExt'
	, [
	  'underscore'
	, 'Utils'
	, 'Address.Edit.View'
    , 'jQuery'
    , 'Backbone.FormView'
]
, function (
	
      _
	, Utils
	, AddressEditView
    , jQuery
    , BackboneFormView
)
{
	'use strict';


       _.extend(AddressEditView.prototype, {

        events: _.extend({},AddressEditView.prototype.events,{

            'blur .address-edit-fields-group-input':'blockErr'

        }),
         blockErr: function(e) {

            var thisEl = jQuery(e.currentTarget);
            var self = this;
            var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
            if ((sessionpayingWith == '1' || sessionpayingWith == 'purchaseOrder') && thisEl.attr('name') == 'company') {
              if (thisEl.val()) {
                if (thisEl.parent().find('.err-para').css('display') != 'none') {
                  thisEl.parent().removeAttr('data-validation-error');
                  jQuery('.err-para').hide();
                }
              } else {    
                if (thisEl.parent().find('.err-para').css('display') == 'none') {
                  thisEl.parent().attr('data-validation-error', '');
                  jQuery('.err-para').show();
                }
              }
            }
          },

        initialize:_.wrap(AddressEditView.prototype.initialize,function(fn){
   
            fn.apply(this, _.toArray(arguments).slice(1));
            var self = this;
            var mySaveform = this.saveForm;
            this.saveForm = function saveForm() {
               var isSubmit = self.submitForm();
              
               if(!_.isUndefined(isSubmit) && isSubmit)
               {
                var promise = BackboneFormView.saveForm.apply(this, arguments);
                return promise;
               }
               else{
                   return false;
               }
            };
        }), 
         submitForm:function() {
            //this.saveForm.apply(this,arguments);
            var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
            var isSubmit = true;
            var $companyId = jQuery('[name="company"]').length && !_.isUndefined(jQuery('[name="company"]')) && !_.isEmpty(jQuery('[name="company"]')) ? jQuery('[name="company"]') : [];
             if($companyId && $companyId.length && !_.isEmpty($companyId)){
                if ((sessionpayingWith == '1' || sessionpayingWith == 'purchaseOrder') ) {
                    if ($companyId.val()) {
                      if ($companyId.parent().find('.err-para').css('display') != 'none') {
                        $companyId.parent().removeAttr('data-validation-error');
                        jQuery('.err-para').hide();
                        isSubmit =true;
                     
                      }
                    } else {    
                      if ($companyId.parent().find('.err-para').css('display') == 'none') {
                        $companyId.parent().attr('data-validation-error', '');
                        jQuery('.err-para').show();
                        isSubmit = false;
                     
                      }
                      else{
                          isSubmit = false; 
                    
                      }
                    }
                  }
             }
            return isSubmit;
        }
    })	
	
});

