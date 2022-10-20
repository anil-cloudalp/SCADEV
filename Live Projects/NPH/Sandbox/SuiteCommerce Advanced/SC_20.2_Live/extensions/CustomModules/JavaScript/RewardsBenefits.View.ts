/// <amd-module name="RewardsBenefits.View"/>

import * as rewards_benefits_tpl from 'rewards_benefits.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: rewards_benefits_tpl
	,     title: 'Extra Rewards Benefits'
	
   });
export = CustomView;