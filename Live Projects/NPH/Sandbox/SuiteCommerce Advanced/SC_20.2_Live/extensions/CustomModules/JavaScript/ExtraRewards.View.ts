/// <amd-module name="ExtraRewards.View"/>

import * as extra_rewards_tpl from 'extra_rewards.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: extra_rewards_tpl
	,     title: 'Extra Rewards Loyalty Program | Rewards the School or Church of Your Choice!'
	
   });
export = CustomView;