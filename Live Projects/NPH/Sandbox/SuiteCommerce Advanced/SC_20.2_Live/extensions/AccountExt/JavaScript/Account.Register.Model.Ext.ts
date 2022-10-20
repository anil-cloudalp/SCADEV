/// <amd-module name="Account.Register.Model.Ext"/>
import * as _ from 'underscore';
import existingModel = require('../../../Advanced/Account/JavaScript/Account.Register.Model');
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

_.extend(existingModel.prototype, {
	
	validation: {
		email: {
			required: true,
			pattern: 'email',
			msg: Utils.translate('Valid Email is required')
		}
	,	company: {
			required: SC.ENVIRONMENT.siteSettings.registration.companyfieldmandatory === 'T',
			msg: Utils.translate('Company Name is required')
		}
	
	,	paidforbyvalue: {
			required: true
		,	msg: Utils.translate('This field is required')
		}
	// ,	paidfortitle: {
	// 		required: function(val, attr, computed) {
	// 		 return (computed.paidforby == '1' || computed.paidforby == '2');
	// 		}
	// 	,	msg: Utils.translate('This field is required')
	// 	}
	,	statevalue: {
			required: true
		,	msg: Utils.translate('State is required')
		}
	,	firstname: {
			required: function(val, attr, computed) {
			 return (computed.paidforby == '1' || computed.paidforby == '2');
			}
		,	msg: Utils.translate('First Name is required')
		}
	,	lastname: {
			required: function(val, attr, computed) {
			 return (computed.paidforby == '1' || computed.paidforby == '2');
			}
		,	msg: Utils.translate('Last Name is required')
		}
	/*,	paidfororganization: {
			required: function(val, attr, computed) {
			 return computed.paidforby == '2';
			}
		,	msg: Utils.translate('Organization is required')
		}*/
	,	paidforcity: {
			required: function(val, attr, computed) {
			 return computed.paidforby == '2';
			}
		,	msg: Utils.translate('City is required')
		}
	,	paidforstate: {
			required: function(val, attr, computed) {
			 return computed.paidforby == '2';
			}
		,	msg: Utils.translate('State is required')
		}
	,	category: {
			required: function(val, attr, computed) {
			 return computed.paidforby == '2';
			}
		,	msg: Utils.translate('This field is required')
		}
	
	/*,	attention: {
			required: true
		,	msg: Utils.translate('Attention is required')
		}*/
	,	addr: {
			required: true
		,	msg: Utils.translate('Address is required')
		}
	,	city: {
			required: true
		,	msg: Utils.translate('City is required')
		}
	,	country: {
			required: true
		,	msg: Utils.translate('Country is required')
		}
	,	zipcode: {
			fn: Utils.validateZipCode
		}
	,	phone: {
			required: true
		
		,	fn: Utils.validatePhone
		}
	,	customertype: {
			required: true
		,	msg: Utils.translate('Customer type is required')
		}
	,	captcha_val: {
			required: true
		,	msg: Utils.translate('this is required')
		}
	,	password: {
			required: true,
			msg: Utils.translate('Please enter a valid password')
		}
	,	password2: [
			{
				required: true,
				msg: Utils.translate('Confirm password is required')
			},
			{
				equalTo: 'password',
				msg: Utils.translate('New Password and Confirm Password do not match')
			}
		]
    }
	
});

export = existingModel;

