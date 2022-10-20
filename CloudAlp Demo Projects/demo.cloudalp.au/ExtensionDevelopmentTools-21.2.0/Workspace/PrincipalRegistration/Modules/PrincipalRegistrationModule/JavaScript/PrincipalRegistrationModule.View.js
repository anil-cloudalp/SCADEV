// @module MIA.PrincipalRegistration.PrincipalRegistrationModule
define('MIA.PrincipalRegistration.PrincipalRegistrationModule.View', [
	'mia_principalregistration_principalregistrationmodule.tpl'

	, 'MIA.PrincipalRegistration.PrincipalRegistrationModule.SS2Model', 'MIA.PrincipalRegistration.PrincipalRegistrationModule.Model', 'Profile.Model', 'Utils', 'jQuery', 'jquery.signature'

	, 'Backbone', 'html2Canvas', 'underscore'
], function (
	mia_principalregistration_principalregistrationmodule_tpl

	, PrincipalRegistrationModuleSS2Model, PrincipalRegistrationModuleModel, ProfileModel, Utils, jQuery, jquerysignature


	, Backbone, html2Canvas,_
) {
	'use strict';
	/**
	 *
	 *  Base64 encode / decode
	 *  http://www.webtoolkit.info/
	 *
	 **/


	// @class MIA.PrincipalRegistration.PrincipalRegistrationModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: mia_principalregistration_principalregistrationmodule_tpl,

		page_header: Utils.translate('Terms and Conditions'),
		events: {
			'submit form': 'submitForm',
			'click .reset-signature': 'resetSignature'
		}

		,
		bindings: {}

		,render: function() {
			// if (!this.model.get('value') || !this.model.get('value').internalid) {
			// 	return this;
			// }
			this._render();
		}

		,
		addScript: function (url) {
				var self = this;
				jQuery.getScript(url)
					.done(function (script, textStatus) {
				

					})
					.fail(function (jqxhr, settings, exception) {
						
					});

			}

			,
		beforeShowContent: function () {

				var self = this;
				var profile = ProfileModel.getInstance();
				var promise = jQuery.Deferred();
				
				if (profile.get('isLoggedIn') == 'T') {
					promise = new PrincipalRegistrationModuleModel().fetch({
						data: {
							email: profile.get('email')
						}
					})
					promise.then(function (res) {
						if (_.has(res, 'docID'))
							self.docID = res.docID;
						if (_.has(res, 'pdfURL'))
							self.pdfURL = res.pdfURL;
					})
					
				}
				else{
					
					promise.resolve();
				}
				return promise;
			}


			,
		initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				this.model = new PrincipalRegistrationModuleModel();
				// var self = this;
				// this.model.fetch().done(function(result) {
				// 	self.message = result.message;
				// 	self.render();
				// });

			
				this.addScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/0.9.0rc1/jspdf.js');

				this.options.application.getLayout().on('afterAppendView', this.initializeSignature);
			}

			,
		submitForm: function (e) {
			e.preventDefault();
			var self = this;
			const data = (jQuery(e.target).closest('form')).serializeObject();
			var datapair = $('.js-signature').jSignature('getData');
			
			var cnv = document.getElementById('signature-pad');
			if (_.isEmpty(data)) {
				if ($('.input-validation').find('[data-validation-error]').length == 0) {
					$('.input-validation').append('<p data-validation-error="block" >This field is required</p>');
				}
			} else {
				if ($('.input-validation').find('[data-validation-error]').length) {
					$('.input-validation').find('[data-validation-error]').remove();
				}
			}
			if (this.isCanvasEmpty(cnv)) {
				if ($('.sign-validation').find('[data-validation-error]').length == 0) {
					$('.sign-validation').append('<p data-validation-error="block" >This field is required</p>');
				}
			} else {
				if ($('.sign-validation').find('[data-validation-error]').length) {
					$('.sign-validation').find('[data-validation-error]').remove();
				}
			}

			var $newEL = $('.principalregistrationmodule-info-card');
			

			if ($('[data-validation-error]').length == 0) {
				var htmlString = '<div>';
				htmlString += '<table style="width:100%"><tr><td style="text-align:center;"><b>TERMS AND CONDITIONS</b></td></tr></table>';
				htmlString += $('.form-html').html().toString();
				htmlString += '<p>Signature</p>';
				htmlString += '<p><img src="' + datapair + '"/></p>';
				htmlString += '</div>';

				data.email = ProfileModel.getInstance().get('email');
				data.content = htmlString;
				var promise = self.model.save({
					data: data
				});
				promise.then(function (res) {
					if (_.has(res, 'recordId')) {
						
						var profile = ProfileModel.getInstance();
						if (profile.get('isLoggedIn') == 'T') {
						    var promise1 = new PrincipalRegistrationModuleModel().fetch({
								data: {
									email: profile.get('email')
								}
							})
							promise1.then(function (res) {
								if (_.has(res, 'docID') && _.has(res, 'pdfURL'))
								{
									var htmlContent = '<h1 class="principalregistration-header">TERMS AND CONDITIONS</h1><br><br>'
									htmlContent += '<p class="principalregistration-link-para">Please <a href="'+res.pdfURL+'" target="_blank">Click here</a> to view/download the Principal Registration signed document.</p>'
									$newEL.html(htmlContent);
								}
							})
						}
						//self.render();
					}
				})
			}


		},
		isCanvasEmpty: function (cnv) {
				const blank = document.createElement('canvas');
				blank.width = cnv.width;
				blank.height = cnv.height;

				return cnv.toDataURL() === blank.toDataURL();
			}

			,
		initializeSignature: function () {
				$('.js-signature').jSignature({

				});
			}

			,
		resetSignature: function (e) {
				$('.js-signature').jSignature('reset');
			}

			,
		childViews: {

		}

		//@method getContext @return MIA.PrincipalRegistration.PrincipalRegistrationModule.View.Context
		,
		getContext: function getContext() {
			//@class MIA.PrincipalRegistration.PrincipalRegistrationModule.View.Context

			//console.log(this, "this")
			return {
				message: this.message,
				page_header: this.page_header,
				isLoggedIn: ProfileModel.getInstance().get('isLoggedIn') == "T" ? true : false,
				loginUrl: SC.SESSION.touchpoints.login + '&origin=home&origin_hash=principal-registration',
				pdfURL: this.pdfURL,
				docID: this.docID == '' ? true : false
			};
		}
	});
});