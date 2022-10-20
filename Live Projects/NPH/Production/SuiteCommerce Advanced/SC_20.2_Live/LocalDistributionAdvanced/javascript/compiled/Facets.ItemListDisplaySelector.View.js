/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("Facets.ItemListDisplaySelector.View", ["require", "exports", "underscore", "facets_item_list_display_selector.tpl", "Backbone.View"], function (require, exports, _, facets_item_list_display_selector_tpl, BackboneView) {
    "use strict";
    return BackboneView.extend({
        template: facets_item_list_display_selector_tpl,
        // @method getContext @returns {Facets.ItemListDisplaySelector.View.Context}
        getContext: function () {
            var option_items = this.options.options;
            var translator = this.options.translator;
            var processed_option_items = [];
            _.each(option_items, function (option_item) {
                var url1 = translator.cloneForOption('display', option_item.id).getUrl();
                if (translator.facets[0] && translator.facets[0].config.id == "musiciansresource")
                    url1 = url1.replace("musiciansresource/", "musiciansresource");
                var processed_option_item = {
                    configOptionUrl: url1,
                    isActive: translator.getOptionValue('display') === option_item.id,
                    isGrid: option_item.id === 'grid',
                    name: option_item.name,
                    icon: option_item.icon
                };
                processed_option_items.push(processed_option_item);
            });
            // @class Facets.ItemListDisplaySelector.View.Context
            return {
                // @property {String} configClasses
                configClasses: this.options.configClasses,
                // @property {Array} options
                options: processed_option_items
            };
            // @class Facets.ItemListDisplaySelector.View
        }
    });
});

//# sourceMappingURL=Facets.ItemListDisplaySelector.View.js.map
