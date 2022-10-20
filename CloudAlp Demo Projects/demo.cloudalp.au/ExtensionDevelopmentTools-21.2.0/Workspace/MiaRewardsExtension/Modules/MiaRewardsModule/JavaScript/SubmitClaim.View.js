// @module MIA.MiaRewardsExtension.SubmitClaim
define('MIA.MiaRewardsExtension.SubmitClaim.View', [
	'mia_miarewardsextension_submitclaim.tpl'

	, 'MIA.MiaRewardsExtension.MiaRewardsModule.Model', 'Profile.Model', 'MIA.MiaRewardsExtension.Confirmation.View', 'Backbone', 'Utils', 'underscore', 'jQuery'
], function (
	mia_miarewardsextension_submitclaim_tpl

	, MiaRewardsModuleModel, ProfileModel, ConfirmationView, Backbone, Utils, _, jQuery


) {
	'use strict';



	return Backbone.View.extend({

		template: mia_miarewardsextension_submitclaim_tpl,
		events: {
			'submit form': 'submitForm',
			'blur [data-action="checkErr"]': 'checkError',
			'click .pag-item': 'showConfirmData',
			'click input[type="radio"]': 'showFileUpload',
			'change input[name="fileupload"]': 'submitFileUpload'
		},
		bindings: {
			'[name="serialnumber"]': 'serialnumber',
			'[name="fileupload"]': 'fileupload',
			'[name="claimrelate"]': 'claimrelate',
			'[name="custname"]': 'custname',
			'[name="ponumber"]': 'ponumber',
			'[name="terms"]': 'terms',
			'[name="quantity"]': 'quantity',
			'[name="system"]': 'system',
			'[name="salesrepemail"]': 'salesrepemail',
			'[name="salesrepphone"]': 'salesrepphone',
			'[name="firstname"]': 'firstname',
			'[name="lastname"]': 'lastname',
			'[name="companyname"]': 'companyname',
			'[name="dealercode"]': 'dealercode'

		},
		beforeShowContent: function () {

			var self = this;
			return this.model.fetch({
				data: {
					getListData: 'T'
				}
			}).then(function (data) {

				if (_.has(data, 'valArray')) {

					self.systemList = data.valArray;
				}
			});
		},
		showFileUpload: function (e) {

			if ($(e.currentTarget).val() == "yes") {
				$('#rd1-yes').parent().parent().next().hide();
				$('#rd1-yes').parent().parent().next().find('input').attr("data-action", "");

			} else {
				$('#rd1-yes').parent().parent().next().show();
				$('#rd1-yes').parent().parent().next().find('input').attr("data-action", "checkErr");
			}
			//$('#rd1-yes').parent().next().hide();
		},
		showConfirmData: function (e) {
				var id = $('.tab.selected').data('id');
				var dataArr = [];
				var keys = "";
				var values = '';
				if (id.toLowerCase() == "Confirm Information".toLowerCase()) {
					var isRadio = true;
					var isSalesrepname = true;
					var count = 0;
					$('.tab').each(function () {
						dataArr.push({
							tab: $(this).data('id')
						});
						var salesrepName = '';
						$(this).find('[data-action="checkErr"]').each(function () {
							if ($(this).parent().find('.label').data('label') == "Sales Rep's Name") {
								keys = $(this).parent().find('.label').data('label');
								console.log(salesrepName,'salesrepName1')
								salesrepName += " "+$(this).val();
								console.log(salesrepName,'salesrepName3')
								isSalesrepname = false;
								count++;
								if (count == 2) {
                                   console.log('salesrepName2',salesrepName)
									dataArr.push({
										key: keys
									});
									dataArr.push({
										value: salesrepName
									});
								}
							}

							if ($(this).prop('type') == "radio" && isRadio) {

								isRadio = false;
								var key = $('#rd-label').data('label');
								var value = !_.isUndefined($('input[name="radio-btn"]:checked').val()) ? $('input[name="radio-btn"]:checked').val() : '';
								dataArr.push({
									key: key
								});
								dataArr.push({
									value: value
								});
							}
							if ($(this).prop('type') != "radio" && $(this).parent().find('.label').data('label') != "Sales Rep's Name" && !$(this).prop('multiple')) {
								var key = $(this).parent().find('.label').data('label');
								var value = $(this).val();
								console.log('2')
								dataArr.push({
									key: key
								});
								dataArr.push({
									value: value
								});
							}
							if ($(this).prop('multiple')) {

								var key = $(this).parent().find('.label').data('label');
								//var value = $(this).text();
								var values = [];
								$("select[name='system'] option:selected").each(function () {
									var $this = $(this);
									if ($this.length) {
										var selText = $this.text();
										values.push(selText);

									}
								});

								dataArr.push({
									key: key
								});
								dataArr.push({
									value: values.toString()
								});
							}

						})
					})
					dataArr.pop();
					var content = "";

					console.log(dataArr,'dataArr')

					_.each(dataArr, function (val) {
						if (val.tab) {
							content += '<p class="confirm-tab">' + val.tab + '</p>'
						}
						if (val.key) {
							content += '<p class="confirm-key">' + val.key + '</p>'
						}
						if (val.value || val.value == "") {
							content += '<p class="confirm-value">' + val.value + '</p>'
						}
					})
				}
				$('.confirmation-content').html(content);


			}
			///custom validation of form fields
			,
		checkError: function (e) {
				var target = $(e.currentTarget);
				var type = target.attr('type');
				var self = this;

				// if input type is radio button
				if ($('input#rd1-yes').is(":checked") || $('input#rd1-no').is(":checked")) {
					if ($('input#rd1-yes').parent().parent().find('[data-validation-error]').length) {
						$('input#rd1-yes').parent().parent().find('[data-validation-error]').remove();
						$('input#rd1-yes').parent().parent().removeClass('err-block');
					}
				} else {
					if ($('input#rd1-yes').parent().parent().find('[data-validation-error]').length == 0) {
						$('input#rd1-yes').parent().parent().append('<p data-validation-error="block" >This field is required</p>');
						$('input#rd1-yes').parent().parent().addClass('err-block');
					}
				}

				// other fields valiodation
				if (target.val() == "") {
					if (target.parent().find('[data-validation-error]').length == 0) {
						target.parent().append('<p data-validation-error="block" >This field is required</p>');
						target.parent().addClass('err-block');
					} else {
						target.parent().find('p[data-validation-error="block"]').html('This field is required');
					}
				} else {
					if (target.attr('name') == 'salesrepemail') {
						var vEmail = self.validateEmail(target.val());

						if (!vEmail) {
							if (target.parent().find('[data-validation-error]').length == 0) {
								target.parent().append('<p data-validation-error="block" >Please enter valid email</p>');
								target.parent().addClass('err-block');
							} else {
								target.parent().find('p[data-validation-error="block"]').html('Please enter valid email address');
							}
						} else {
							if (target.parent().find('[data-validation-error]').length) {
								target.parent().find('[data-validation-error]').remove();
								target.parent().removeClass('err-block');
							}
						}
					} else if (target.attr('name') == 'salesrepphone') {
						var vPhone = self.validatePhone(target.val());

						if (!vPhone) {
							if (target.parent().find('[data-validation-error]').length == 0) {
								target.parent().append('<p data-validation-error="block" >Please enter valid phone number</p>');
								target.parent().addClass('err-block');
							} else {
								target.parent().find('p[data-validation-error="block"]').html('Please enter valid phone number');
							}
						} else {
							if (target.parent().find('[data-validation-error]').length) {
								target.parent().find('[data-validation-error]').remove();
								target.parent().removeClass('err-block');
							}
						}
					} else if (target.attr('name') == 'fileupload') {
						var file_data = $('input[name="fileupload"]')[0].files;

						if (file_data[0].type.indexOf('pdf') == -1) {

							if (target.parent().find('[data-validation-error]').length == 0) {

								target.parent().append('<p data-validation-error="block" >Please enter valid format(pdf)</p>');
								target.parent().addClass('err-block');
							} else {

								target.parent().find('p[data-validation-error="block"]').html('Please enter valid format(pdf)');
							}
						} else {

							if (target.parent().find('[data-validation-error]').length) {

								target.parent().find('[data-validation-error]').remove();
								target.parent().removeClass('err-block');
							}
						}
					} else {
						if (target.parent().find('[data-validation-error]').length) {
							target.parent().find('[data-validation-error]').remove();
							target.parent().removeClass('err-block');
						}
					}
				}

			}

			,
		validateEmail: function (email) { //Validates the email address
				var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				return emailRegex.test(email);
			}

			,
		validatePhone: function (phone) { //Validates the phone number
				var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; // Change this regex based on requirement
				return phoneRegex.test(phone);
			}


			,
		showTopErrMessage: function () {
				$('.tab').each(function () {
					if ($(this).find('[data-validation-error]').length) {
						$(this).find('.top-err-message').html('There was a problem with your submission. Errors have been highlightd below');
						$(this).find('.header-err-wrap').addClass('err-new')
					} else {
						$(this).find('.top-err-message').html('');
						$(this).find('.header-err-wrap').removeClass('err-new')
					}
				})
			}

			,
		submitForm: function (e, model, props) {
				e.preventDefault();
				var isValid = true;
               if( $('.tab-nav').find('selected').text().indexOf('Confirmation') == -1)
			   {
				    console.log('not confirmation page')
                       return false;
			   }
				var code = (e.keyCode ? e.keyCode : e.which);
				console.log(code,'code');

				$('[data-action="checkErr"]').each(function () {
					if ($(this).val() == '') {
						$(this).trigger('blur');
					}
				})

				// checking if any error while submit			
				if ($('[data-validation-error]').length) {
					isValid = false;
				}
				this.showTopErrMessage();
				const self = this;
				const data = (jQuery(e.target).closest('form')).serializeObject();
				var file_data = $('input[name="fileupload"]')[0].files;


				if (file_data.length) {
					var file_data1 = {
						name: file_data[0].name,
						type: file_data[0].type,
						data: this.data
					};
					data.file_data = file_data1;
				}


				data.userEmail = ProfileModel.getInstance().get('email');
				

			    isValid = false;
				if (isValid) {
					var promise = this.model.save({
						data: data
					});
					promise.then(function (res) {

						if (_.has(res, 'recordId')) {
							var para_bold1 = "Thank You, Your Claim Has Been Received"
							var para_norm1 = "You will recieve an automated mail shortly confirming reciept of your claim."
							var para_bold2 = "Need To Submit Another Claim?"
							var para_norm2 = "If you need to submit another claim, please refresh this page to reset the form."
							var body = '<p class="para-bold"><b>' + para_bold1 + '</b></p><p class="para-normal">' + para_norm1 + '</p><br><p class="para-bold"><b>' + para_bold2 + '</b></p><p class="para-normal">' + para_norm2 + '</p>'

							var deleteConfirmationView = new ConfirmationView({

								body: body

							});

							self.options.application.getLayout().showInModal(deleteConfirmationView);
						} else if (_.has(res, 'error')) {
							var deleteConfirmationView = new ConfirmationView({

								body: '<p data-validation-error>Ooops!! Something went wrong please try later. </p>',
							});

							self.options.application.getLayout().showInModal(deleteConfirmationView);
						}
						self.render();
					})
					promise.fail(function () {
						var deleteConfirmationView = new ConfirmationView({

							body: '<p data-validation-error>Ooops!! Something went wrong please try later. </p>',
						});

						self.options.application.getLayout().showInModal(deleteConfirmationView);
					})
				}
			}

			,
		initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				this.model = new MiaRewardsModuleModel();

				var self = this;
				this.options.application.getLayout().on('afterAppendView', function () {
					if (ProfileModel.getInstance().get('isLoggedIn') == "T") {
						var tabbedForm = 'tabbedForm';
						$('#rd1-yes').parent().parent().next().hide();
						self.tabs(tabbedForm);
						$(".nav-item").each(function () {
							if ($(this).hasClass('selected')) {
								$(this).css("pointer-events", "all");
							} else {
								$(this).css("pointer-events", "none");
							}
						})
					}
				})

			}

			,
		childViews: {

		},
		init: function () {
				// Create tabs
				this.tab.list = this.createTabList();
				this.count = this.tab.list.length;

				// Create nav
				this.nav.list = this.createNavList();
				this.renderNavList();

				// Create pag
				this.pag.list = this.createPagList();
				this.renderPagList();

				// Set selected
				this.setSelected(this.selected);
			}

			,
		createTabList: function () {
			var list = [];

			this.el.querySelectorAll(this.tab.el).forEach(function (el, i) {
				list[i] = el;
			});

			return list;
		},
		submitFileUpload: function (e) {
			e.preventDefault();
			var files = e.target.files;
			var self = this;

			var reader = new FileReader();


			for (var i = 0; i < files.length; i++) {
				var file = files[i],

					reader = new FileReader();
				reader.readAsDataURL(file);


				if (file.type.indexOf('pdf') !== -1) {

					reader.onloadend = (function (file) { // here we save variable 'file' in closure
						return function (e) { // return handler function for 'onload' event
							self.dataType = this.result.indexOf(';') > -1 ? this.result.split(';')[0].replace('data:', '') : '';
							self.data = this.result; // do some thing with data	
						}
					})(file);
				} else {

					$(e.currentTarget).trigger('blur');
				}

			}

		},
		createNavList: function () {
			var list = [];

			this.tab.list.forEach(function (el, i) {
				var listitem = document.createElement('a');
				listitem.className = 'nav-item',
					listitem["data-id"] =
					listitem.innerHTML = el.getAttribute('data-name'),
					listitem.onclick = function () {
						this.setSelected(i);
						return false;
					}.bind(this);

				list[i] = listitem;
			}.bind(this));

			return list;
		},
		createPagList: function () {
			var list = [];
			var self = this;

			list.prev = document.createElement('a');
			list.prev.className = 'pag-item pag-item-prev',
				list.prev.innerHTML = 'Prev',
				list.prev.onclick = function () {
					this.setSelected(this.selected - 1);
					return false;
				}.bind(this);

			list.next = document.createElement('a');
			list.next.className = 'pag-item pag-item-next',
				list.next.innerHTML = 'Next',
				list.next.onclick = function () {
					$('.tabs').find('.tab.selected').find('[data-action="checkErr"]').each(function () {
						if ($(this).val() == '') {
							$(this).trigger('blur');
						} else {
							if ($(this).attr('name') == 'salesrepemail' && !self.validateEmail($(this).val())) {
								$(this).trigger('blur');
							} else if ($(this).attr('name') == 'salesrepphone' && !self.validatePhone($(this).val())) {
								$(this).trigger('blur');
							}
						}
					})
					var hasError = $('.tabs').find('.tab.selected').find('[data-validation-error]').length ? true : false;

					if (hasError) {
						this.setSelected(this.selected);
					} else {
						this.setSelected(this.selected + 1);
					}

					return false;
				}.bind(this);

			list.submit = document.createElement('button');
			list.submit.className = 'pag-item pag-item-submit',
				list.submit.type = 'submit';
			list.submit.innerHTML = 'Submit';

			return list;
		},
		renderNavList: function () {
			var nav = document.querySelector(this.nav.el);

			this.nav.list.forEach(function (el) {
				nav.appendChild(el);
			});
		},
		renderPagList: function () {
			var pag = document.querySelector(this.pag.el);
			//var pag2 = document.getElementById('submit-claim');
			pag.appendChild(this.pag.list.prev);
			pag.appendChild(this.pag.list.next);
			pag.appendChild(this.pag.list.submit);
		},
		setSelected: function (target) {
				var min = 0,
					max = this.count - 1;

				if (target > max || target < min) {
					return;
				}

				if (target == min) {

					this.pag.list.prev.classList.add('hidden');
				} else {

					this.pag.list.prev.classList.remove('hidden');
				}

				if (target == max) {

					this.pag.list.next.classList.add('hidden');
					this.pag.list.submit.classList.remove('hidden');
				} else {

					this.pag.list.next.classList.remove('hidden');
					this.pag.list.submit.classList.add('hidden');
				}

				this.tab.list[this.selected].classList.remove('selected');
				this.nav.list[this.selected].classList.remove('selected');


				this.selected = target;
				this.tab.list[this.selected].classList.add('selected');
				this.nav.list[this.selected].classList.add('selected');


			}

			,
		tabs: function (id) {

				this.el = document.getElementById(id);

				this.tab = {
					el: '.tab',
					list: null
				}

				this.nav = {
					el: '.tab-nav',
					list: null
				}

				this.pag = {
					el: '.tab-pag',
					list: null
				}

				this.count = null;
				this.selected = 0;
				this.init();

			}

			,
		getContext: function getContext() {

			this.message = this.message || 'Hello World!!'
			var custName = "";

			if (!_.isEmpty(ProfileModel.getInstance().get('firstname') + " " + ProfileModel.getInstance().get('middlename') + " " + ProfileModel.getInstance().get('lastname'))) {
				custName = ProfileModel.getInstance().get('companyname') || ''

			} else {
				custName = ProfileModel.getInstance().get('firstname') + " " + ProfileModel.getInstance().get('middlename') + " " + ProfileModel.getInstance().get('lastname');

			}

			return {
				isLoggedIn: ProfileModel.getInstance().get('isLoggedIn') == "T" ? true : false,
				loginUrl: SC.SESSION.touchpoints.login + '&origin=home&origin_hash=submit-claim',
				customerName: custName,
				systemList: this.systemList
			};
		}
	});
});