define('TCI.CheckoutCustomizationsExtension.UploadFile.View',
[
	'upload_file.tpl',
    'Wizard.Module',
	'Profile.Model',
	'LiveOrder.Model',
	'Utils',
    'jQuery',
    'underscore'

],
function
(
	upload_file_tpl,
	WizardModule,
	ProfileModel,
	LiveOrderModel,
	Utils,
    jQuery,
    _
)
{
	'use strict';

	return WizardModule.extend({

		template: upload_file_tpl

	,	title: 'Upload Purchase Order'

	,	events:
		{
			'change #hidden-file-input': 'submitFileUpload',
			'click [data-toggle="uploadFile"]': 'uploadFile',
			'click #RemoveUploadFileAttachmentLink': 'removeAttachment'
		}

	,	initialize: function (options)
		{
			this.model = LiveOrderModel.getInstance();

			jQuery('html').on('FileUploaded', this.onFileUploaded(this));
			jQuery('html').on('FileInfoDownloaded', this.onFileInfoDownloaded(this));
			jQuery('html').on('FileAttachmentRemoved', this.onFileAttachmentRemoved(this));

			// Load file info if a file has already been attached to this order
			this.getFile(function(response)
            {
				if (response != null && response.success)
				{
					jQuery('html').trigger('FileInfoDownloaded', response);
				}
            });
		}

	,	removeAttachment: function(e)
		{
			e.preventDefault();
			var self = this;

			var cart = LiveOrderModel.getInstance();
			var options = cart.get('options') || {};
			options.custbody_weborderattachment = '';

			this.uploadedFileID = '';
			this.uploadedFileName = '';
			this.downloadUrl = '';

			cart.save(
			{
				options: options
			})
			.always(function()
			{
				jQuery('html').trigger('FileAttachmentRemoved');
			});
		}

	,	onFileAttachmentRemoved: function(view)
		{
            return function(event, data)
			{
                view.render();
			}
		}

	,	getFile: function(callback)
		{
			var cart = LiveOrderModel.getInstance();
            var sessionuploadedFileID = sessionStorage.getItem('uploadedFileID');
			if (cart.get('options'))
			{
				var fileID = !_.isUndefined(cart.get('options')['custbody_weborderattachment']) ? cart.get('options')['custbody_weborderattachment'] : sessionuploadedFileID != '' && !_.isUndefined(sessionuploadedFileID) && !_.isNull(sessionuploadedFileID) ? sessionuploadedFileID : cart.get('options')['custbody_weborderattachment'];
				//if (!Utils.isNullOrEmpty(fileID))
				if (!isNaN(parseInt(fileID)))
				{
                    
					jQuery.ajax(
		            {
		                url:Utils.getAbsoluteUrl(
                            getExtensionAssetsPath(
                                "services/UploadFile.Service.ss?fileid=" + fileID
                            )
                        ),
		                type: 'GET',
		                data: '',
		                async: true,
		                success: function (response, status, xhr)
		                {
		                    callback(response);
		                }
		            });
				}
			}
		}

	,	onFileInfoDownloaded: function(view)
		{
            var self = this;
			return function(event, data)
			{
				
                self.uploadedFileName = data.name;//.substr(data.name.indexOf('+') + 1, data.name.lastIndexOf('+') - data.name.indexOf('+') - 1);
				view.render();
			}
		}

	,	uploadFile: function(e)
		{
			e.preventDefault();
			this.$('#hidden-file-input').click();
		}

	,	onFileUploaded: function(view)
		{
            var self = this;
			return function(event, data)
			{
				self.uploadedFileID = data.fileid.toString();
                sessionStorage.setItem('uploadedFileID', self.uploadedFileID);

				var cart = LiveOrderModel.getInstance();
				var options = cart.get('options') || {};
				options.custbody_weborderattachment = data.fileid.toString();

				cart.save(
				{
					options: options
				})
				.done(function()
				{
					self.getFile(function(response)
		            {
						if (response != null && response.success)
						{
							jQuery('html').trigger('FileInfoDownloaded', response);
						}
		            });
				})
				.always(function()
				{
					view.render();
				});
			}
		}

	,	submitFileUpload: function(e)
        {
            e.preventDefault();
            var files = e.target.files;
            var $target = e.target;
            var self = this;
			var fileType = files[0].type;
			var readAsText = false;
			var fileName = files[0].name;
			
			var purchaseOrderNumber = jQuery('#purchase-order-number').val();

            SC.loadingIndicatorShow();

            var reader = new FileReader();
            reader.onloadend = function(event)
            {
				var profile = ProfileModel.getInstance();
				var dataType = reader.result.indexOf(';') > -1 ? reader.result.split(';')[0].replace('data:', '') : '';
				if (readAsText)
				{
					dataType = fileType;
				}

                var file =
                {
					customer: profile.id,
					type: dataType,
                    data: reader.result,
					fileName: fileName,
					purchaseOrderNumber: purchaseOrderNumber
                }
                jQuery.ajax(
                {

                    url:Utils.getAbsoluteUrl(
                        getExtensionAssetsPath(
                            "services/UploadFile.Service.ss"
                        )
                    ),
                    type: 'POST',
                    data: JSON.stringify(file),
					contentType: 'application/json',
                    async: true,
                    success: function (response, status, xhr)
                    {
                        
						if (response.success)
						{
							self.uploadedFileName = fileName;
	                        jQuery('html').trigger('FileUploaded', response);
						}
						else
						{
							console.log('error in submitFileUpload', response.message);
	                        jQuery('[data-type="alert-placeholder"]').html('Error uploading file: ' + response.message).css('background', '#F22E2E').css('color', '#ffffff');
						}
                    },
                    error: function (jqXHR, status, error)
                    {
                        console.log('error in submitFileUpload', error);
                        jQuery('[data-type="alert-placeholder"]').html('Error uploading file: ' + error).css('background', '#F22E2E').css('color', '#ffffff');
                    },
                    complete: function()
                    {
                        jQuery($target).val('');
                        SC.loadingIndicatorHide();
                    }
                });
            };

			var fileType = files[0].type;
			switch (fileType)
			{
				default:
					reader.readAsDataURL(files[0]);
					break;
				case 'text/javascript':
					readAsText = true;
					reader.readAsText(files[0]);
					break;
				case 'text/csv':
					readAsText = true;
					reader.readAsText(files[0]);
					break;
				case 'text/html':
					readAsText = true;
					reader.readAsText(files[0]);
					break;
				case 'application/json':
					readAsText = true;
					reader.readAsText(files[0]);
					break;
				case 'text/plain':
					readAsText = true;
					reader.readAsText(files[0]);
					break;
				case 'text/css':
					readAsText = true;
					reader.readAsText(files[0]);
					break;
				case 'text/xml':
					readAsText = true;
					reader.readAsText(files[0]);
					break;
			}
        }

	,	getContext: function()
		{
			var hideModule = false;
			var cart = LiveOrderModel.getInstance();
            var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
	        var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith !="" && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
			if (payingWith !== 'purchaseOrder')
	        {
	          hideModule = true;
	        }

			return {
				showTitle: true,
				title: this.title,
				showAttachButton: _.isNull(this.uploadedFileID) || _.isEmpty(this.uploadedFileID) ? true : false,
				uploadedFileID: this.uploadedFileID,
				uploadedFileName: this.uploadedFileName,
				hideModule: hideModule
			};
		}

	,	submit: function()
		{
			var cart = LiveOrderModel.getInstance();
            var sessionuploadedFileID = sessionStorage.getItem('uploadedFileID');
            var isNullOrEmptyFileId = !_.isUndefined(sessionuploadedFileID) && !_.isEmpty(sessionuploadedFileID) &&  sessionuploadedFileID != '' ? false : true;
            var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
	        var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith !="" && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
			if (payingWith === 'purchaseOrder' && cart.get('options') && (_.isNull(cart.get('options').custbody_weborderattachment) || _.isEmpty(cart.get('options').custbody_weborderattachment))&& isNullOrEmptyFileId)
			{
				console.log("payingWith", payingWith);
                return jQuery.Deferred().reject({errorCode: 'ERR_POFILE_REQUIRED', errorMessage: Utils.translate('Please attach a Purchase Order PDF file to proceed.')});
            }
		}
	});
});

