// @module TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup
define('TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup.View'
,	[
	'schooldistrictlookup.tpl'
	,	'Backbone'
	,   'Wizard.Module'
	,   'Profile.Model'
	,   'LiveOrder.Model'
	,   'TCI.CheckoutCustomizationsExtension.SchoolDistrictLookup.Model'
	,   'underscore'
	,   'Utils'
	,   'jQuery'
    ]
, function (
	schooldistrictlookup_tpl
	
	
	,	Backbone
	,   WizardModule
	,   ProfileModel
	,   LiveOrderModel
	,   SchoolDistrictLookupModel
	,   _
	,   Utils
	,   jQuery
)
{
    'use strict';

	// @class TCI.CheckoutCustomizationsExtension.CheckoutCustomizationsModule.View @extends Backbone.View
	return WizardModule.extend({

		template: schooldistrictlookup_tpl,

		page_header: Utils.translate('School District Lookup'),
		title: Utils.translate('School District Lookup'),
		events:
		{
			'click .school-district-zipcode-enter-button': 'lookupSchoolDistrict',
			'click .school-district-schools-option': 'setSchool'
		},
		initialize: function ()
		{
			WizardModule.prototype.initialize.apply(this, arguments);
		  
		},
		
	  
		lookupSchoolDistrict: function(e)
		{
		 e.preventDefault();
		  var self = this;

		  var zipCode = jQuery('.school-district-zipcode-field').val();

		  
		  if (zipCode)
		  {
			var schoolDistrictLookupModel = new SchoolDistrictLookupModel(zipCode);
			schoolDistrictLookupModel.fetch().done(function(results)
			{
			  if (results && results.success && results.data && results.data.length > 0)
			  {
				var array = results.data;
				var unique = {};
				var distinct = [];
				for ( var i in array ){
				  if ( typeof(unique[array[i].companyname]) == "undefined"){
					distinct.push(array[i]);
				  }
				  unique[array[i].companyname] = 0;
				}
				_.sortBy(distinct, 'companyname');
				//force this to top of alphabetized list
				distinct.unshift({
				  companyname: "My School Is Not Listed",
				  internalid: "-1"
				})
				self.wizard.model.set('schools', distinct);
				
				self.wizard.model.set('zip', zipCode);
			  } else if (results && results.success && results.data && results.data.length === 0) {
				self.wizard.model.set('schools', [{
				  companyname: "My School Is Not Listed",
				  internalid: "-1"
				}]);
				
				self.wizard.model.set('zip', zipCode);
			  }
			  self.render();
			});
		  }
		},
		setSchool: function(e)
		{
			var self = this;
	
			var selectedSchool =
			{
				id: jQuery('.school-district-schools-option:checked').val(),
				name: jQuery('.school-district-schools-option:checked').data('companyName'),
				subscriberId: jQuery('.school-district-schools-option:checked').data('subscriberId'),
				taxExemption: jQuery('.school-district-schools-option:checked').data('taxExemption'),
				fulfillmentFlag: jQuery('.school-district-schools-option:checked').data('fulfillmentFlag'),
				terms: jQuery('.school-district-schools-option:checked').data('terms')
			};
			
	
			var cart = LiveOrderModel.getInstance();
			var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
			var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith != '' && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
			this.wizard.model.set('selectedSchool', selectedSchool);
	
			var profile = ProfileModel.getInstance();
			profile.set('isperson', false); // Does not work via profile update - call back office instead or do on save
			if (selectedSchool.name.toLowerCase() !== 'my school is not listed') {
			  profile.set('companyname', selectedSchool.name);
			  profile.set('altname', selectedSchool.name); // Does not work via profile update - call back office instead or do on save
			}
		
	
			var schoolDistrictLookupModel = new SchoolDistrictLookupModel();
			schoolDistrictLookupModel.fetch(
			{
			  contentType: 'application/json',
			  dataType: 'json',
			  method: 'PUT',
			  data: JSON.stringify(
			  {
				  userId: profile.get('internalid'),
				  companyName: selectedSchool.name,
				  payingWith: payingWith,
				  schoolCustomerInternalId: selectedSchool.id,
				  taxExemption: selectedSchool.taxExemption,
				  subscriberId: selectedSchool.subscriberId,
				  fulfillmentFlag: selectedSchool.fulfillmentFlag,
				  terms: selectedSchool.terms
			  })
			}).done(function (response)
			{
				if (response && response.success)
				{
					var options = cart.get('options') || {};
					if (parseInt(payingWith) !== 2 && selectedSchool.subscriberId)
					{
						options.custbody7 = selectedSchool.subscriberId.toString();
					}
					cart.save(
					{
						options: options
					});
				}
			}).always(function(response)
			{
				if (response && response.success)
				{
					self.render();
				}
			});
		},
		getContext: function ()
		{
			var self = this;
			var cart = LiveOrderModel.getInstance();
			var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
			var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith !="" && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
	
			if (this.wizard.model.get('selectedSchool'))
			{
			
				_.each(this.wizard.model.get('schools'), function(school)
				{
					if(parseInt(school.internalid) === parseInt(self.wizard.model.get('selectedSchool').id))
					{
						
						school.isSelected = true;
					}
					else{
						
						school.isSelected = false;
					}
				});
				// if (selectedSchool)
				// {
				// 	selectedSchool.isSelected = true;
				// }
				//console.log(selectedSchool);
			}

             
	
			return {
				model: this.wizard.model,
				schools: this.wizard.model.get('schools'),
				zip: jQuery('.school-district-zipcode-field').val() || this.wizard.model.get('zip'),
				selectedSchool: this.wizard.model.get('selectedSchool')
			};
		},
		submit: function()
		{
			var profile = ProfileModel.getInstance();
			var skipSchoolPicker = profile.get('parent') && !isNaN(profile.get('parent')) ? true : false;//profile.get('isLoggedIn') === 'T' && profile.get('isGuest') === 'F';
			var cart = LiveOrderModel.getInstance();
			var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
			var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith !="" && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
			if (!skipSchoolPicker && (_.isNull(this.wizard.model.get('selectedSchool')) || _.isEmpty(this.wizard.model.get('selectedSchool'))) && (parseInt(payingWith) === 1 || payingWith === 'purchaseOrder')) //Utils.isNullOrEmpty(this.wizard.model.get('selectedSchool'))
			{
				return jQuery.Deferred().reject({errorCode: 'ERR_SELECTEDSCHOOL_REQUIRED', errorMessage: Utils.translate('Please choose a School')});
			}
			else if (!skipSchoolPicker && this.wizard.model.get('selectedSchool') && parseInt(this.wizard.model.get('selectedSchool').id) === -1 && (parseInt(payingWith) === 1 || payingWith === 'purchaseOrder'))
			{
				console.log('User selected My School Is Not Listed');
			}
		}

	});
});
