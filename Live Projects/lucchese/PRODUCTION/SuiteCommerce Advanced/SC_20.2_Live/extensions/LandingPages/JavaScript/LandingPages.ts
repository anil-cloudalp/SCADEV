/// <amd-module name="LandingPages"/>

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import BootAnatomyView = require('./BootAnatomy.View');
import BootFitView = require('./BootFit.View');
import BootMaintenanceView = require('./BootMaintenance.View');
import BootOptionsView = require('./BootOptions.View');

import ContactUsView = require('./ContactUs.View');
import RestorationProgramView = require('./RestorationProgram.View');


export = {
  mountToApp: function(application) {
	  
		const pageType = application.getComponent('PageType');
		
		
		pageType.registerPageType({
            name: 'contactUs',
            routes: ['contact-us'],
            view: ContactUsView
        });	

		pageType.registerPageType({
            name: 'boot-anatomy-page',
            routes: ['boot101-anatomy'],
            view: BootAnatomyView,
            defaultTemplate: {
                name: 'boot_anatomy.tpl',
                displayName: 'Anatomy Default'
            }
        });
        pageType.registerPageType({
            name: 'boot-fit-page',
            routes: ['boot101-fit'],
            view: BootFitView,
            defaultTemplate: {
                name: 'boot_fit.tpl',
                displayName: 'Fit Default'
            }
        });
        pageType.registerPageType({
            name: 'boot-maintenance-page',
            routes: ['boot101-maintenance'],
            view: BootMaintenanceView,
            defaultTemplate: {
                name: 'boot_maintenance.tpl',
                displayName: 'Maintenance Default'
            }
        });
        pageType.registerPageType({
            name: 'boot-options-page',
            routes: ['boot101-options'],
            view: BootOptionsView,
            defaultTemplate: {
                name: 'boot_options.tpl',
                displayName: 'Options Default'
            }
        });	
		pageType.registerPageType({
            name: 'restoration-program',
            routes: ['restoration-program'],
            view: RestorationProgramView,
            defaultTemplate: {
                name: 'restoration_program.tpl'
            }
        });			
  }
};
