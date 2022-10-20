/// <amd-module name="ExtraRewards.View"/>
define("ExtraRewards.View", ["require", "exports", "extra_rewards.tpl", "Backbone.View"], function (require, exports, extra_rewards_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: extra_rewards_tpl,
        title: 'Extra Rewards Loyalty Program | Rewards the School or Church of Your Choice!'
    });
    return CustomView;
});

//# sourceMappingURL=ExtraRewards.View.js.map
