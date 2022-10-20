/// <amd-module name="WhatPeopleSaying.View"/>
define("WhatPeopleSaying.View", ["require", "exports", "what_people_saying.tpl", "Backbone.View"], function (require, exports, what_people_saying_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: what_people_saying_tpl,
        title: 'Hear What People Are Saying',
        getContext: function () {
            return {
                isNotCmsEdit: (window.parent.location.href.indexOf("cms") == -1) ? true : false
            };
        }
    });
    return CustomView;
});

//# sourceMappingURL=WhatPeopleSaying.View.js.map
