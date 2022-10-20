/// <amd-module name="LandingPages"/>
define("LandingPages", ["require", "exports", "BootAnatomy.View", "BootFit.View", "BootMaintenance.View", "BootOptions.View", "ContactUs.View", "RestorationProgram.View"], function (require, exports, BootAnatomyView, BootFitView, BootMaintenanceView, BootOptionsView, ContactUsView, RestorationProgramView) {
    "use strict";
    return {
        mountToApp: function (application) {
            var pageType = application.getComponent('PageType');
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
});

//# sourceMappingURL=LandingPages.js.map
