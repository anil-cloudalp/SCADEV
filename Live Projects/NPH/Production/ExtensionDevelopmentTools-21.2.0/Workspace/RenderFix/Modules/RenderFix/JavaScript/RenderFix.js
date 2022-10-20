
define('RenderFix'
, [
    'Header.View',
    'underscore',
    'Backbone'
]
, function RenderFix(
    HeaderView,
    _,
    Backbone
    ) {
    'use strict';

    return {
        mountToApp: function mountToApp() {
            _.extend(HeaderView.prototype, {
                initialize: function initialize() {
                    Backbone.history.on('all', this.verifyShowSiteSearch, this);
                    this.application = this.options.application;
                }
            });
        }
    };
});
