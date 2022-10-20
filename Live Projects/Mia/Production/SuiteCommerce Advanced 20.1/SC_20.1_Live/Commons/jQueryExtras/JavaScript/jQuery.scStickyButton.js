/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/*
@module jQueryExtras
#jQuery.scStickyButton
A jQuery plugin that implements a sticky button behavior. Usage:

	this.$el.find('[data-action="sticky"]').scStickyButton()
*/

define('jQuery.scStickyButton', ['jQuery', 'Utils'], function(jQuery, Utils) {
    let sticky_button;
    const padding_offset = 20;

    jQuery.fn.scStickyButton = function() {
        if (canStick()) {
            init(this);
            // try to update the button position on every scroll, touch start and touch move
            jQuery(document).on('scroll touchstart touchmove', checkStickyPosition);
        }

        return this;
    };

    function canStick() {
        const viewport_width = Utils.getViewportWidth();
        const mobile_width_max = 768;

        return viewport_width < mobile_width_max;
    }

    // initialize the plugin generating required markup and setting the event listeners
    function init(sticky) {
        sticky_button = jQuery(sticky);

        // wrap the original button with a clone into a container. This achieves de desired behavior while scrolling the page
        const button_clone = jQuery('<div class="sticky-button-container-clone">').append(
            sticky_button.clone(true).removeAttr('data-action')
        );
        sticky_button
            .wrap('<div class="sticky-button-container">')
            .parent()
            .append(button_clone);

        // initialize with "unsticked" state
        unStickIt();
    }

    // checks if the button should be sticked or unsticked
    function checkStickyPosition() {
        const document_scroll_top = jQuery(document).scrollTop();
        const is_sticked = sticky_button.hasClass('sticked');
        const current_offset = sticky_button.offset();
        
        let current_offset_top = current_offset ? (current_offset.top - padding_offset) : 0;

        if (!is_sticked && document_scroll_top >= current_offset_top) {
            stickIt();
        } else if (is_sticked && document_scroll_top <= current_offset_top) {
            unStickIt();
        }
    }

    function stickIt() {
        const clone = sticky_button
            .parent()
            .find('.sticky-button-container-clone')
            .first();
        clone.addClass('sticked');
        sticky_button.addClass('sticked');
    }

    function unStickIt() {
        const clone = sticky_button
            .parent()
            .find('.sticky-button-container-clone')
            .first();
        clone.removeClass('sticked');
        sticky_button.removeClass('sticked');
    }
});
