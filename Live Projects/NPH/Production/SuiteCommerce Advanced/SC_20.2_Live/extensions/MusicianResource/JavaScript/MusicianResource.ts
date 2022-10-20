/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="MusicianResource"/>

import MusicianResourceView = require('./MusicianResource.View');
import MusicianResourceListView = require('./MusicianResource.List.View');

// @class Home @extends ApplicationModule
export = {
    mountToApp: function(application) {
        const pageType = application.getComponent('PageType');

        pageType.registerPageType({
            name: 'musicianResource',
            routes: ['musician-resource'],
            view: MusicianResourceView
        });
		
		pageType.registerPageType({
            name: 'musicianResource',
            routes: ['musiciansresource'],
            view: MusicianResourceListView
        });

    }
};
