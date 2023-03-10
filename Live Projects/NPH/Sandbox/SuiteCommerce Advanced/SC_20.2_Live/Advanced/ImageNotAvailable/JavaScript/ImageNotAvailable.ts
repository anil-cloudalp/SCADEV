/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="ImageNotAvailable"/>

// --------------------
// Simple Module that will make sure that
// if an image files to load it will load an alternative image in it

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

// @class ImageNotAvailable @extends ApplicationModule
export = {
    // @method mountToApp
    // @param {ApplicationSkeleton} application
    // @return {Void}
    mountToApp: function(application) {
        // Every time a new view is rendered
        application.getLayout().on('afterAppendView', function(view) {
            // it will look at the img and bind the error event to it
            view.$('img').on('error', function() {
                const { imageNotAvailable } = application.getConfig();
                // and haven't tried to changed it before, so we don't enter an infinite loop
                if (!this.errorCounter) {
                    const $this = jQuery(this);
                    const src = application.resizeImage(
                        Utils.getThemeAbsoluteUrlOfNonManagedResources(
                            'img/no_image_available.jpeg',
                            imageNotAvailable
                        ),
                        Utils.getViewportWidth() < 768 ? 'thumbnail' : 'zoom'
                    );

                    // it will set the src of the img to the default image not available.
                    // You can set logic based on size or a class for displaying different
                    // urls if you need
                    $this
                        .attr('src', src)
                        // ImageLoader compatibility
                        .attr('data-image-status', 'done');

                    $this.parent('[data-zoom]').length && (<any>$this.parent)('[data-zoom]').zoom();
                    this.errorCounter = true;
                }
            });
        });
    }
};
