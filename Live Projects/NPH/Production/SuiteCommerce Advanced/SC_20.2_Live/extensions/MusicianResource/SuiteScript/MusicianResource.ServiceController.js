/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// Address.ServiceController.js
// ----------------
// Service to manage addresses requests
define('MusicianResource.ServiceController', ['ServiceController', 'Application','MusicianResource.Model'], function(
    ServiceController,
    Application,
	MusicianResourceModel
) {
    // @class Address.ServiceController Manage addresses requests
    // @extend ServiceController
    return ServiceController.extend({
        // @property {String} name Mandatory for all ssp-libraries model
        name: 'MusicianResource.ServiceController',

        post: function() {
            
            if(this.data.fieldoptions) 
			{
                return MusicianResourceModel.getAllitemids(this.data.fieldoptions);
            }
			else
			{
				return MusicianResourceModel.getvalues(this.data.iteminternalids);
			}
        },
        
    });
});
