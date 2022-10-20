define('TCI.CheckoutCustomizationsExtension.AddressEditFieldsViewExt',
[
  'Address.Edit.Fields.View',
  'Profile.Model',
  'underscore',
  'jQuery',
  'LiveOrder.Model'
],
function
(
  AddressEditFieldsView,
  ProfileModel,
  _, 
  $,
  LiveOrderModel
)
{
  'use strict';
  
  AddressEditFieldsView.prototype.getContext = _.wrap(AddressEditFieldsView.prototype.getContext, function (fn)
  {
    var context = fn.apply(this, _.toArray(arguments).slice(1));
    var isGuest = ProfileModel.getInstance().get('isGuest') === 'T';
    var grandparentView = this.parentView && this.parentView.parentView;
    var grandparentModel = grandparentView && grandparentView.model;
    var options = LiveOrderModel.getInstance().get('options');
    var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
    var isCC = options && !_.isEmpty(options) ? options.custbody_scapayingwithselection === '1' || options.custbody_scapayingwithselection === '2' : !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith === '1' || sessionpayingWith === '2' : false;
    var isBilling = grandparentView && grandparentView.wizard && grandparentView.wizard.currentStep === "billing/address";
    var isBillingAndCC = isBilling && isCC;
    var profile = ProfileModel.getInstance();
    var full_name = this.model.get('fullname') || profile.get('firstname')+" "+profile.get('lastname');
		var showCountriesField = this.quantity_countries > 1 && isBillingAndCC;
    context.isGuest = isGuest ? true : false;
    context.showCountriesField = showCountriesField;
    context.showCompanyField = true;
    context.isCompanyFieldMandatory = this.site_settings.registration.companyfieldmandatory === 'T';
    if (grandparentModel && grandparentModel.get('options') && (grandparentModel.get('options').custbody_scapayingwithselection)) {
      var payingWithPersonalcc = grandparentModel.get('options').custbody_scapayingwithselection === '2';
      context.isCompanyFieldMandatory = payingWithPersonalcc ? false : true;
    }
    else if(sessionpayingWith != '' && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith))
    {
      var payingWithPersonalcc = sessionpayingWith === '2';
      context.isCompanyFieldMandatory = payingWithPersonalcc ? false : true;
    }
    // need to force company value assignment, setting company attribute on
    // model breaks adding a new address from checkout
    // settimeout used since view is delayed in modal (document ready fails)
   
    var selectedSchool = grandparentModel && grandparentModel.get('selectedSchool')
    selectedSchool = selectedSchool && selectedSchool.name !== "My School Is Not Listed" && selectedSchool.name;
    var company = selectedSchool ? selectedSchool : null;
   
   
    if (!(SC.isPageGenerator && SC.isPageGenerator())) {
      setTimeout(function () {
        if(!_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) && sessionpayingWith !== '2')
        {
          if (company && $('#in-modal-company').length) {
            $('#in-modal-company').val(company);
          } else if (company && $('#billaddress-company').length) {
            $('#billaddress-company').val(company);
          } else if (company && $('#shipaddress-company').length) {
            $('#shipaddress-company').val(company);
          }
        }
        if(full_name && $('#in-modal-fullname').length)
        {
          $('#in-modal-fullname').val(full_name);
        }
        else if(full_name && $('#billaddress-fullname').length)
        {
          $('#billaddress-fullname').val(full_name)
        }
        else if (full_name && $('#shipaddress-fullname').length) {
          $('#shipaddress-fullname').val(company);
        }
      });
    }
    return context;
  });
});

