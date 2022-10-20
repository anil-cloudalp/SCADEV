/// <amd-module name="CheckoutExt"/>

import Utils = require('../../../Commons/Utilities/JavaScript/Utils');
import * as _ from 'underscore';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';

export = {
  mountToApp: function(application) {

		var promise = jQuery.get(Utils.getAbsoluteUrl('services/CustomModules.Service.ss?checkout=T'));
		
		application.waitForPromise(promise);
		
		promise.then(function(res){
			
			application.campaign_category = _.has(res,'campaign_category')? res.campaign_category: [];
			
		});
  }
};
