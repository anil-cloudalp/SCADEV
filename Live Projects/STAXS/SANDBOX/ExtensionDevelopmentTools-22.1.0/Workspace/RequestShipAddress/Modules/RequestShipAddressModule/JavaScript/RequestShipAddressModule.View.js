// @module STAXS.RequestShipAddress.RequestShipAddressModule
define('STAXS.RequestShipAddress.RequestShipAddressModule.View'
,	[
	'staxs_requestshipaddress_requestshipaddressmodule.tpl'
	
	,	'STAXS.RequestShipAddress.RequestShipAddressModule.Model'
	
	,	'Backbone'

	,  'SC.Configuration'

	,  'Profile.Model'
    ]
, function (
	staxs_requestshipaddress_requestshipaddressmodule_tpl

	,	RequestShipAddressModuleModel
	
	,	Backbone

	,  Configuration

	,  ProfileModel

)
{
    'use strict';

	// @class STAXS.RequestShipAddress.RequestShipAddressModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: staxs_requestshipaddress_requestshipaddressmodule_tpl

	,	initialize: function (options) {
		var self = this;
		this.profile =	ProfileModel.getInstance();
		}

	,	events: {
		'click [data-action="requestchange"]': 'updateshippingaddress'
		}

	,	bindings: {
		}

		,	updateshippingaddress: function(e) {
			var self = this;
			var address = $('[name="address"]').val();
			var model = new RequestShipAddressModuleModel();

					if(SC.ENVIRONMENT.companyId.includes("_")){
						var companyid = SC.ENVIRONMENT.companyId.replace("_", "-");
					}
					else{
						var companyid = SC.ENVIRONMENT.companyId;
					}

			var data = {};
			data.author = Configuration.CustomAccountRegisterModule.eAuthor

			data.subject = "Request to update shipping address"
			data.body = `
			<p> ${address} </p><br/>
			<p> Customer Reference :  <a href="https://${companyid}.app.netsuite.com/app/common/entity/custjob.nl?stage=Customer&id=${self.profile.get('internalid')}">Click Here </a>
			</p>`
					
			model.save(data, {
				success: function (model, response) {
					if(response.status == true){
						$('.change-status').html('<div class="alert alert-success" role="alert"> Email Sent Successfully </div>').css('color', 'green');;
					}
	
					setTimeout(function(){
						$('.change-status').html('');
					}, 3000);
				},
				error: function (model, response) {
					$('.change-status').html('<div class="alert alert-success" role="alert"> Email Failed to Send </div>').css('color', 'red');
					setTimeout(function(){
						$('.change-status').html('');
					}, 3000);
				}
			});
		}
	

	, 	childViews: {

		}

		//@method getContext @return STAXS.RequestShipAddress.RequestShipAddressModule.View.Context
	,	getContext: function getContext()
		{
			//@class STAXS.RequestShipAddress.RequestShipAddressModule.View.Context

			return {
				hidechkout : this.options.container.hideproceedtochkout,
				email:this.profile.get('email')
			};
		}
	});
});
