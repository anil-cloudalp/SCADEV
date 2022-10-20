/// <amd-module name="MyAccExt"/>

import Utils = require('../../../Commons/Utilities/JavaScript/Utils');

import DocumentsView = require('./Documents.View');

export = {
  mountToApp: function(application) {
	  
		const pageType = application.getComponent('PageType');
		pageType.registerPageType({
            name: 'documents',
            routes: ['downloads'],
            view: DocumentsView,
            defaultTemplate: {
                name: 'documents.tpl',
                displayName: 'Documents default'
            }
        });
		
  }
};
