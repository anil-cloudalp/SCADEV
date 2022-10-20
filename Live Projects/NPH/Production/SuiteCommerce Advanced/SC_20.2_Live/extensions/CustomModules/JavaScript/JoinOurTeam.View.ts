/// <amd-module name="JoinOurTeam.View"/>

import * as join_our_team_tpl from 'join_our_team.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: join_our_team_tpl
	,     title: 'Join Our Team'
	
   });
export = CustomView;