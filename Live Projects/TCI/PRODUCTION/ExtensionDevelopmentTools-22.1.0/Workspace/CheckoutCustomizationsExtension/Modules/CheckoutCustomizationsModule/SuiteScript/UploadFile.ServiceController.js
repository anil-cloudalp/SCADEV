define('TCI.CheckoutCustomizationsExtension.UploadFile.ServiceController',
[
	'ServiceController',
	'Application',
	'TCI.CheckoutCustomizationsExtension.UploadFile.Model',
	'underscore'
],
function
(
	ServiceController,
	Application,
	UploadFileModel,
	_
)
{
	'use strict';

	return ServiceController.extend({

		// @property {String} name Mandatory for all ssp-libraries model
		name: 'TCI.CheckoutCustomizationsExtension.UploadFile.ServiceController'

	,	get: function()
		{
			var id = this.request.getParameter('fileid');
			var result = UploadFileModel.get(id);
			this.sendContent(result);
		}

	,	post: function()
		{
			var result =
			{
				success: false
			}
         

			var data = this.data.data;
			if (!data)
			{
				result.message = 'data parameter not provided';
				return this.sendContent(result);
			}
			var customer = this.data.customer;
			if (!customer)
			{
				result.message = 'customer parameter not provided';
				return this.sendContent(result);
			}
			var type = this.data.type;
			if (!type)
			{
				result.message = 'type parameter not provided';
				return this.sendContent(result);
			}
			var originalFilename = this.data.fileName;
			var purchaseOrderNumber = this.data.purchaseOrderNumber;

			result = UploadFileModel.post(data, customer, type, originalFilename, purchaseOrderNumber);

			this.sendContent(result);
		}
	});
});
