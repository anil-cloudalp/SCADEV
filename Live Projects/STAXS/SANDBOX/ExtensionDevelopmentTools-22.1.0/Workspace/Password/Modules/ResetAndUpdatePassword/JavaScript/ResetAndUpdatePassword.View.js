// @module STAXS.Password.ResetAndUpdatePassword
define('STAXS.Password.ResetAndUpdatePassword.View'
	, [
		'staxs_password_resetandupdatepassword.tpl'
		, 'STAXS.Password.ResetAndUpdatePassword.Model'
		, 'Backbone'
		, 'underscore'
		, 'Utils'
		, 'jQuery'
		, 'Profile.Model'
		, 'SC.Configuration'
		, 'Application'
	]
	, function (
		staxs_password_resetandupdatepassword_tpl
		, ResetAndUpdatePasswordModel
		, Backbone
		, _
		, Utils
		, $
		, ProfileModel
		, SCConfiguration
		, Application
	) {
		'use strict';

		// @class STAXS.Password.ResetAndUpdatePassword.View @extends Backbone.View
		return Backbone.View.extend({

			template: staxs_password_resetandupdatepassword_tpl,
			title: Utils.translate('Update Password'),
			getSelectedMenu: function () {
				return 'Update Password';
			},
			getBreadcrumbPages: function () {
				if (this.Profile.get('isLoggedIn') == 'F') {
					return;
				} else {
					return {
						text: this.title,
						href: '/resetpassword'
					};
				}

			}

			, initialize: function (options) {
				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/
				var self = this;
				self.options = options
				self.Profile = ProfileModel.getInstance();
				self.model = new ResetAndUpdatePasswordModel();
			}
			, beforeShowContent: function () {
				var promise = jQuery.Deferred();
				let isLoggedIn = this.Profile.get('isLoggedIn') == 'T' ? true : false;
				if (isLoggedIn) {
					this.model.fetch().then(res => {
						this.salesRepEmail = res.salesrep;
						return promise.resolve();
					})
				}
				promise.resolve();

				return promise || true;
			}
			, events: {
				'click [data-action="submit-reset-password"]': 'forgotPassword',
				'click [data-action="submit-reset-password-myaccount"]': 'resetPassword',
				'blur [data-action="enteremail"]': "emailid",
				'blur [data-action="customerId"]': "customerId",
				'blur [data-action="lastname"]': "lastname",
				'blur [data-action="phone"]': "phone"
			}

			, bindings: {
			}

			, childViews: {

			}
			, validateEmails: function (email) {
				var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				if (!regex.test(email)) {
					return false;
				} else {
					return true;
				}
			}
			, emailid: function (e) {
				var self = this;
				let $email = $(e.target).val();
				let msg = self.validateEmails($email);
				if (!msg) {
					$('.error-msg-email').addClass("message-error").html(`	Please enter a valid email address`)
				} else {
					$('.error-msg-email').removeClass("message-error").html('')
				}

			}
			, customerId: function (e) {
				let $fname = $(e.target).val();
				let msg = $fname;
				if (_.isEmpty(msg)) {
					$('.error-msg-customerId').addClass("message-error").html(`Please enter customerId`)
				} else {
					$('.error-msg-customerId').removeClass("message-error").html('')
				}
			}
			, forgotPassword: function (e, prop, model) {
				e.preventDefault();
				let id = SC.ENVIRONMENT.companyId;
				let remove_id = id.split('_').join('-');
				var comp_id = id.includes("_") ? remove_id : id;
				var self = this;
				self.phone = this.$('[name="phone"]').val();
				var data = $(e.target).closest('form').serializeObject();
				data.author = SCConfiguration.get('CustomAccountRegisterModule').eAuthor;
				// data.recipient = data.email;
				data.subject = "Change Password Request";
				data.CustomerId = data.customerId;
				data.EmailId = data.email;
				data.companyId = comp_id;
				var model = new ResetAndUpdatePasswordModel();
				if (!_.isEmpty(data.EmailId)) {
					model.save(data, {
						success: function (model, response) {
							
							var frm = $('[name="contact-form"]')[0];
							frm.reset();
							if (response.status == true) {
								var successMsg = $('.status-email-msg').html('<div class="alert alert-success">We have received your email and would like to thank you for writing to us,you will receive forgot password link soon.</div>').css('color', 'white');
								setTimeout(() => { successMsg.html('') }, 5000)
							} else if (response.status == false) {
								var disableMsg = $('.status-email-msg').html('<div class="alert alert-danger">' + response.errMsg + '</div>').css('color', 'white');
								setTimeout(() => { disableMsg.html('') }, 8000)
							}
						}
					});

				} else {
					$('.error-msg-email').addClass("message-error").html(`	Please enter a valid email address`)
				}

			}
			, resetPassword: function (e, prop, model) {
				e.preventDefault();
				let id = SC.ENVIRONMENT.companyId;
				let remove_id = id.split('_').join('-');
				var comp_id = id.includes("_") ? remove_id : id;
				var self = this;
				var data = $(e.target).closest('form').serializeObject();
				let options = this.options;
				let role = options.application.currentRole;
				data.author = SCConfiguration.get('CustomAccountRegisterModule').eAuthor;
				data.recipient = this.salesRepEmail;
				data.subject = "Change Password Request";
				data.resetPassword = "resetpassword";
				data.body = `<div class="">Hi Team,</div>`
					+ `<p style="color:#4d5256;font-size:18px;font-weight:600;line-height:24px">Password Recovery</p>`
					+ `<br>`
					+ `<div style ="margin-top:20px;width:100%">
				Click the following link to change your password for <a href="https://store-sb.staxs.eu" style="color:#087ca6;font-weight:600;text-decoration:none">Staxs</a>.
				</div>`
					+ `<p><span style="font-size:1.1rem ;font-weight:bold">Customer Note</span>: ${data.comments}</p>`
					+ `<div style="background-color:#fe007a;border-color: #fe007a;border:1px solid #fe007a;border-radius:6px;height:40px;margin:16px 0;text-align:center">
				<a href='https://${comp_id}.app.netsuite.com/app/common/entity/custjob.nl?stage=Customer&id=${self.Profile.get('internalid')}' style="color:#ffffff;font-size:15px;font-weight:600;height:40px;line-height:40px;padding:0 32px 0 32px;text-decoration:none">Update Password</a>
				</div>`;
				if (!_.isEmpty(data.comments)) {
					this.model.save(data, {
						success: function (model, response) {
							var frm = $('[name="contact-form"]')[0];
							if (response.status === true) {
								var successMsg = $('.status-email-msg').html('<div class="alert alert-success">We have received your email and would like to thank you for writing to us,you will receive update password link soon.</div>').css('color', 'green');
								setTimeout(() => { successMsg.html('') }, 5000)
								frm.reset();
							} else {
								var successMsg = $('.status-email-msg').html('<div class="alert alert-success">' + response.errMsg + '</div>').css('color', 'green');
								setTimeout(() => { successMsg.html('') }, 5000)
							}

						}
					});
				} else {
					var ErrorMsg = $('.status-email-msg').html('<div class="alert alert-success">Please enter comments</div>').css({ 'color': 'red', 'background': 'white', 'width': '50%', 'padding': '10px', 'margin-bottom': '10px' });
					setTimeout(() => { ErrorMsg.html('').css({ 'color': '', 'background': '', 'width': '', 'padding': '', 'margin-bottom': '' }) }, 5000)
				}


			}
			//@method getContext @return STAXS.Password.ResetAndUpdatePassword.View.Context
			, getContext: function getContext() {

				//hiding header and footer from forgot password page
				var url = window.location.href;

				url.includes('/resetpassword') ? $('.checkout-layout-header').addClass('hidden') : $('.checkout-layout-header').removeClass('hidden');
				url.includes('/resetpassword') ? $('.checkout-layout-footer').addClass('hidden') : $('.checkout-layout-footer').removeClass('hidden');

				//@class STAXS.Password.ResetAndUpdatePassword.View.Context
				let islogin = Utils.getParameterByName(window.location.href, 'is') === 'login' ? true : false;
				return {
					emailTo: SCConfiguration.get('quote').defaultEmail,
					islogin: islogin,
					profile: this.Profile.get('isLoggedIn') == 'T' ? true : false,
				}
			}
		});
	});
