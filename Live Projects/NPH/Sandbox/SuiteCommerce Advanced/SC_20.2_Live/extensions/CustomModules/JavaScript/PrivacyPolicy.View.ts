/// <amd-module name="PrivacyPolicy.View"/>

import * as privacy_policy_tpl from 'privacy_policy.tpl';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');


const CustomView: any = BackboneView.extend({

		template: privacy_policy_tpl
	,     title: 'Privacy Policy'
	
   });
export = CustomView;