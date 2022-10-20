/// <amd-module name="JoinOurTeam.View"/>
define("JoinOurTeam.View", ["require", "exports", "join_our_team.tpl", "Backbone.View"], function (require, exports, join_our_team_tpl, BackboneView) {
    "use strict";
    var CustomView = BackboneView.extend({
        template: join_our_team_tpl,
        title: 'Join Our Team'
    });
    return CustomView;
});

//# sourceMappingURL=JoinOurTeam.View.js.map
