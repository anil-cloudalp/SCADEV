/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// Address.ServiceController.js
// ----------------
// Service to manage addresses requests
define('Musician.Get.ServiceController', ['ServiceController','MusicianResourceGetitems.Model','underscore'], function(
    ServiceController,
	MusicianResourceGetitemsModel,
	_
) {
    // @class Address.ServiceController Manage addresses requests
    // @extend ServiceController
    return ServiceController.extend({
        // @property {String} name Mandatory for all ssp-libraries model
        name: 'Musician.Get.ServiceController',

        get: function() {
            return MusicianResourceGetitemsModel.getoptions();

        },
		post:function() {
			console.warn('service controller log',JSON.stringify(this.data));
			if(this.data){
			if(_.has(this.data, 'book') && !_.has(this.data, 'chapter') && !_.has(this.data, 'verse'))
				return MusicianResourceGetitemsModel.getChapter(this.data);
			else if(_.has(this.data, 'book') && _.has(this.data, 'chapter') && !_.has(this.data, 'verse')) 
				return MusicianResourceGetitemsModel.getVerse(this.data);
			else if(_.has(this.data, 'book') && _.has(this.data, 'chapter') && _.has(this.data, 'verse')) 
				return MusicianResourceGetitemsModel.getScriptureRef(this.data);
			else if(!_.has(this.data, 'book') && !_.has(this.data, 'chapter') && !_.has(this.data, 'verse') && _.has(this.data, 'lectionaryYear') && !_.has(this.data, 'lectionarysunday')) 
				return MusicianResourceGetitemsModel.getLectionarySundays(this.data);
			else if(!_.has(this.data, 'book') && !_.has(this.data, 'chapter') && !_.has(this.data, 'verse') && _.has(this.data, 'lectionaryYear') && _.has(this.data, 'lectionarysunday')) 
				return MusicianResourceGetitemsModel.getItemLectionarySunday(this.data);
			else
				return "Error in processing server request:"+JSON.stringify(this.data);
			}
        }
                
    });
});
