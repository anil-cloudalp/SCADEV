define('TCI.CheckoutCustomizationsExtension.UploadFile.Model',
[
	'SC.Model',
	'Configuration',
	'Application',
	'underscore'
],
function
(
	SCModel,
	Configuration,
	Application,
	_
)
{
	'use strict';

	return SCModel.extend(
	{
		name: 'TCI.CheckoutCustomizationsExtension.UploadFile.Model'
	,	get: function (fileID)
		{
			try
			{
				if (fileID)
				{
			        var file = nlapiLoadFile(fileID);
			        if (file != null)
			        {
			            if (file.getURL())
			            {
							return {
								success: true,
								name: file.getName(),
								url: file.getURL()
							}
			            }
			            else
			            {
			                return {
								success: false,
								message: 'URL not set in file object'
							};
			            }
			        }
			        else
			        {
			            return {
							success: false,
							message: 'Could not load file id ' + fileID
						};
			        }
				}
				else
				{
					return {
						success: false,
						message: 'File ID is required'
					};
				}
			}
			catch (e)
			{
				return {
					success: false,
					message: e.message
				};
			}
		}
	,	post: function(fileData, customer, type, originalFilename, purchaseOrderNumber)
		{
			var self = this;
			try
			{
				var folderID = Configuration.get('checkoutApp.fileUploadFolderId');

			    if (folderID)
			    {
					if (!customer)
					{
						return {
							success: false,
							message: 'Customer field is empty'
						};
					}
					else
					{
						if (fileData)
						{
							purchaseOrderNumber = purchaseOrderNumber ? purchaseOrderNumber + '_' : '';
							var decodedFilename = decodeURIComponent(originalFilename) || '';
							var extension = '.pdf';
							if (originalFilename)
							{
								 decodedFilename = originalFilename.split('.')[0];
								 extension = originalFilename.split('.')[1];
							}
							if (fileData.indexOf('base64,') > -1)
							{
								fileData = fileData.substr(fileData.indexOf('base64,') + 7, fileData.length - fileData.indexOf('base64,') + 7);
							}

							var applicationType = self.getExtensionType(extension);

							var timestamp = new Date().getTime();
							var fileName =  decodedFilename + '_' + timestamp + '.' + extension;
							if (applicationType && extension)
							{
								var file = nlapiCreateFile(fileName, applicationType, fileData);
								if (file != null)
								{
									file.setFolder(folderID);
									file.setIsOnline(true);
									var fileID = nlapiSubmitFile(file);
									if (fileID)
									{
										return {
											success: true,
											fileid: fileID,
											filename: fileName
										};
									}
								}
								else
								{
									return {
										success: false,
										message: 'File could not be created.'
									};
								}
							}
							else
							{
								return {
									success: false,
									message: 'Could not determine file type.'
								};
							}
						}
						else
						{
							return {
								success: false,
								message: 'File data could not be read.'
							};
						}
					}
			    }
			    else
			    {
			        return {
						success: false,
						message: 'Folder not specified.'
					};
			    }
			}
			catch (e)
			{
				return {
					success: false,
					message: e.message
				};
			}
		}
	,	getExtensionType: function(extension)
		{
			if(extension)
			{
				switch (extension)
				{
					default:
						return 'PDF'; 
						break;
					case 'dwg':
						return 'AUTOCAD';
						break;
					case 'bmp':
						return 'BMPIMAGE'; 
						break;
					case 'csv':
						return 'CSV'; 
						break;
					case 'xls':
						return 'EXCEL'; 
						break;
					case 'swf':
						return 'FLASH'; 
						break;
					case 'gif':
						return 'GIFIMAGE'; 
						break;
					case 'gz':
						return 'GZIP'; 
						break;
					case 'htm':
						return 'HTMLDOC'; 
						break;
					case 'ico':
						return 'ICON'; 
						break;
					case 'js':
						return 'JAVASCRIPT'; 
						break;
					case 'jpg':
						return 'JPGIMAGE'; 
						break;
					case 'json':
						return 'JSON'; 
						break;
					case 'eml':
						return 'MESSAGERFC'; 
						break;
					case 'mp3':
						return 'MP3'; 
						break;
					case 'mpg':
						return 'MPEGMOVIE'; 
						break;
					case 'mpp':
						return 'MSPROJECT'; 
						break;
					case 'pjpeg':
						return 'PJPGIMAGE'; 
						break;
					case 'txt':
						return 'PLAINTEXT'; 
						break;
					case 'png':
						return 'PNGIMAGE'; 
						break;
					case 'ps':
						return 'POSTSCRIPT'; 
						break;
					case 'ppt':
						return 'POWERPOINT'; 
						break;
					case 'mov':
						return 'QUICKTIME'; 
						break;
					case 'rtf':
						return 'RTF'; 
						break;
					case 'sms':
						return 'SMS'; 
						break;
					case 'css':
						return 'STYLESHEET'; 
						break;
					case 'tiff':
						return 'TIFFIMAGE'; 
						break;
					case 'vsd':
						return 'VISIO'; 
						break;
					case 'doc':
						return 'WORD'; 
						break;
					case 'xml':
						return 'XMLDOC'; 
						break;
					case 'zip':
						return 'ZIP'; 
						break;
				}
			}
		}	
	});
});