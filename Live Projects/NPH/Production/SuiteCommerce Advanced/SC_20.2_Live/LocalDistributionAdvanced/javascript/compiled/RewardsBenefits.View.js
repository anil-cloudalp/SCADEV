/// <amd-module name="RewardsBenefits.View"/>
define("RewardsBenefits.View", ["require", "exports", "rewards_benefits.tpl", "Backbone.View"], function (require, exports, rewards_benefits_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: rewards_benefits_tpl,
        title: 'Extra Rewards Benefits'
    });
    return CustomView;
});

//# sourceMappingURL=RewardsBenefits.View.js.map
