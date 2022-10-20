/// <amd-module name="ProductDetails.ImprintOption.Model"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

const CustomFormModel: any = Backbone.Model.extend({

	//@property {String} urlRoot
	urlRoot: Utils.getAbsoluteUrl('services/ProductDetails.ImprintOption.Service.ss')

	//@property {Object} validation. Backbone.Validation attribute used for validating the form before submit.
,	validation: 
	{
		
	}
	
});

export = CustomFormModel;
