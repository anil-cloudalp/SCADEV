
define(
	'Kodella.CustomLayoutSMT.CustomLayoutSMT'
,   [
		'Kodella.CustomLayoutSMT.CustomLayoutSMT.View',
		'kodella_customlayoutsmt_customlayoutsmt.tpl'

	]
,   function (
		CustomLayoutSMTView,
		CustomTPL
	)
{
	'use strict';

	return {
		mountToApp: function mountToApp (container)
		{
		  var PageType = container.getComponent('PageType');
	
		  PageType.registerPageType({
        //     'name': 'NewCustomPageType'
        // ,   'view': CustomLayoutSMTView
        // ,   'options': {}
        // ,   'defaultTemplate': {
        //         'name': 'kodella_customlayoutsmt_customlayoutsmt.tpl'
        //     ,   'displayName': 'New Custom Layout'
        //     ,   'thumbnail': ''
        //     }
		});

		PageType.registerTemplate({
			pageTypes: ['NewCustomPageType', 'cms-landing-page']
		,   template: {
				 name: 'kodella_customlayoutsmt_customlayoutsmt.tpl'
			  ,   displayName: 'My Alternate Layout'
			  ,   thumbnail: ''
		   }
  
		});
		
		}
	  }
});
