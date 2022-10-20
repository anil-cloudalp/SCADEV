///<amd-module name="Getinfo.View"/>
define("Getinfo.View", ["require", "exports", "Backbone.View", "get_info.tpl", "Configuration"], function (require, exports, BackboneView, getinfo_tpl, Configuration_1) {
    "use strict";
    var Getinfo = BackboneView.extend({
        template: getinfo_tpl,
        attributes: {
            id: 'Get_info',
            class: ''
        },
        initialize: function () {
            this.showModalPageHeader = true;
        },
        getContext: function () {
            var help = Configuration_1.Configuration.get("Musicianresourcepage.musicianresourcehelp");
            var self = this;
            for (var i = 0; i < help.length; i++) {
                if (help[i].fieldid == self.options.id) {
                    self.helpinfo = help[i].fieldhelp;
                }
            }
            return {
                helpinfo: self.helpinfo,
                id: self.options.id
            };
        }
    });
    return Getinfo;
});

//# sourceMappingURL=Getinfo.View.js.map
