/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("Facets.ItemListShowSelector.View", ["require", "exports", "underscore", "Utils", "facets_item_list_show_selector.tpl", "Backbone.View"], function (require, exports, _, Utils, facets_item_list_show_selector_tpl, BackboneView) {
    "use strict";
    return BackboneView.extend({
        template: facets_item_list_show_selector_tpl,
        // @method getContext @returns {Facets.ItemListShowSelector.View.Context}
        getContext: function () {
            var option_items = this.options.options;
            var translator = this.options.translator;
            var processed_option_items = [];
            _.each(option_items, function (option_item) {
                var url1 = translator.cloneForOptions({ show: option_item.items, page: 1 }).getUrl();
                if (translator.facets[0] && translator.facets[0].config.id == "musiciansresource")
                    url1 = url1.replace("musiciansresource/", "musiciansresource");
                var processed_option_item = {
                    configOptionUrl: url1,
                    isSelected: parseInt(translator.getOptionValue('show'), 10) === option_item.items,
                    name: Utils.translate(option_item.name, option_item.items),
                    className: option_item.items
                };
                processed_option_items.push(processed_option_item);
            });
            // @class Facets.ItemListShowSelector.View.Context
            return {
                // @property {Array} options
                options: processed_option_items
            };
        }
    });
});

//# sourceMappingURL=Facets.ItemListShowSelector.View.js.map
