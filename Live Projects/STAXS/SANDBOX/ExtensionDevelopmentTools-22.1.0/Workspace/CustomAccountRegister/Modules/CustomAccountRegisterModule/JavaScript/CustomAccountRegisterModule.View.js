// @module CustomAccountRegister.CustomAccountRegisterModule
define('Car.CustomAccountRegister.CustomAccountRegisterModule.View'
,	[
	'car_customaccountregister_customaccountregistermodule.tpl'

	,	'Car.CustomAccountRegister.CustomAccountRegisterModule.Model'
	
	,	'Car.CustomAccountRegister.CustomAccountRegisterModule.SS2Model'
	
	,	'Backbone'

	,	'SC.Configuration'

	, 'Backbone.FormView'
    ]
, function (
	car_customaccountregister_customaccountregistermodule_tpl

	,	CustomAccountRegisterModuleModel
	
	,	CustomAccountRegisterModuleSS2Model
	
	,	Backbone

	,	Configuration

	,	BackboneFormView
)
{
    'use strict';

	// @class CustomAccountRegister.CustomAccountRegisterModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: car_customaccountregister_customaccountregistermodule_tpl

	,	initialize: function (options) {

		}

	,	events: {
		'click [data-action="senddata"]': "submitdata",
		'blur [data-action="enteremail"]': "enteremailid",
		'blur [data-action="firstname"]': "enterfirstname",
		'blur [data-action="lastname"]': "enterlastname",
		'blur [data-action="companyname"]': "entercompanyname",
		}

		
	,	bindings: {
		'[name="email"]': 'email',
		}
		
    , 	entercompanyname: function(e) {
			var companyname = $(e.currentTarget).val();
			if(companyname.length == 0) {
				$('.companyerr').html('<div class="alert alert-danger">Please enter Company name </div>').css('color', 'red');
				return false;
			}else{
				$('.companyerr').html('');
			}
		}
		
    , 	enterfirstname: function(e) {
			var firstname = $(e.currentTarget).val();
			if(firstname.length == 0) {
				$('.frsterr').html('<div class="alert alert-danger">Please enter firstname </div>').css('color', 'red');
				return false;
			}else{
				$('.frsterr').html('');
			}
		}

	,	enterlastname: function(e) {
					var lastname = $(e.currentTarget).val();
					if(lastname.length == 0) {
						$('.lsterr').html('<div class="alert alert-danger">Please enter lastname </div>').css('color', 'red');
						return false;
					}else{
						$('.lsterr').html('');
					}
		}

	,	validateEmails: function(string) {
			var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			var result = string.replace(/\s/g, "").split(/,|;/);        
			for(var i = 0;i < result.length;i++) {
				if(!regex.test(result[i])) {
					return false;
				}
			}       
			return true;
		}

	,	 enteremailid: function (e) { 
			var self = this;
			self.emailid = $('[name="email"]').val();

			self.ctarget = $(e.currentTarget).val();

			if(!self.validateEmails(self.ctarget)) { 
				$('.status-msg').html('<div class="alert alert-danger">Please enter a valid email address</div>').css('color', 'red');
					return false; 
			}	 else{
				if(self.ctarget.length == 0){
				$('.status-msg').html('<div class="alert alert-danger">Please enter valid email address</div>').css('color', 'red');
				}
				else{
				$('.status-msg').html('');
				}
				return false;
					}	
		}


	,	submitdata: function(e, model, props) {
			e.preventDefault();
			var self = this;
			
			var data = jQuery(e.target).closest('form').serializeObject();
		data.author = Configuration.CustomAccountRegisterModule.eAuthor
		data.recipient = Configuration.CustomAccountRegisterModule.eRecipient
		
		data.body = 
		`<div class="">Hi,</div>`
		+ `<br>`
		+ `<div class="">First Name : ${data.firstname}</div>`
		+ `<div class="">Last Name : ${data.lastname}</div>`
		+ `<div class="">Company Name : ${data.companyname}</div>`
		+`<br>`
		+ `<div class="">Email : ${data.email}</div>`
		+`<br>`
		+ `<div class=""><p>This Email has been generated for creating a new customer</p></div>`
		+ `<br>`
		+ `<div class="">Regards,</div>`;


			if(data.firstname.length == 0 || data.lastname.length == 0 || data.companyname.length == 0 || data.email.length == 0){ 	 	 


			if(data.firstname.length == 0 && data.lastname.length == 0 && data.email.length == 0 && data.companyname.length == 0 ){
				$('.status-msg').html('<div class="alert alert-danger">Please enter the details </div>').css('color', 'red');
	
			}
			if(data.email.length == 0){
				$('.status-msg').html('<div class="alert alert-danger">Please enter an email address</div>').css('color', 'red');
	
			}
			if(data.firstname.length == 0){
				$('.frsterr').html('<div class="alert alert-danger">Please enter first name</div>').css('color', 'red');
	
			}
			if(data.lastname.length == 0){
				$('.lsterr').html('<div class="alert alert-danger">Please enter last name</div>').css('color', 'red');
			}
			if(data.companyname.length == 0){
				$('.companyerr').html('<div class="alert alert-danger">Please enter Company name</div>').css('color', 'red');
			}

				return false;
			}

			if(!self.validateEmails(self.ctarget)) { 
				$('.status-msg').html('<div class="alert alert-danger">Please enter a valid email address</div>').css('color', 'red');
				
				 if(self.ctarget.length == 0){
				$('.status-msg').html('<div class="alert alert-danger">Please enter an email address</div>').css('color', 'red');
				return false;
					}	
					return false;
			}	 

			var model = new CustomAccountRegisterModuleModel();   

					model.save(data, {
						success: function (model, response) {
							$('.firstname').val('');
							$('.lastname').val('');
							$('.companyname').val('');
							$('.email').val('');

							$('.status-msg').html('<div class="alert alert-success">Email Registered successfully</div>').css('color', 'green');
						
							setTimeout(function(){
								self.render();
							}, 3000);
						},
						error: function (model, response) {
							$('.firstname').val('');
							$('.lastname').val('');
							$('.companyname').val('');
							$('.email').val('');

							$('.status-msg').html('<div class="alert alert-danger"> Please Enter Valid Details</div>').css('color', 'red');

						}
					});
			 
		}

	, 	childViews: {

		}

		,	getContext: function getContext()
		{

			//hiding the header and footer from custom account register page
			var url = window.location.href;
			url.includes('/requestaccount') ?$('.checkout-layout-header').addClass('hidden') : $('.checkout-layout-header').removeClass('hidden');
			url.includes('/requestaccount') ?$('.checkout-layout-footer').addClass('hidden') : $('.checkout-layout-footer').removeClass('hidden');

			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
