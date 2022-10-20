

/// <amd-module name="BecomePartnerForm.Model"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
// @class BecomePartnerForm.Model
// validating fields before they are sent
// [Backbone.validation](https://github.com/thedersen/backbone.validation)
// @extend Backbone.Model


function industryTypeVal(value: any, valName: any, form: any): string {
   
    if (!value || (_.isArray(value) && (value.length == 0))) {
		
        return Utils.translate('Customer Industry Type is required');
    }
    return '';
}


function brandSoldVal(value: any, valName: any, form: any): string {
   
    if (!value || (_.isArray(value) && (value.length == 0))) {
		
        return Utils.translate('Brands Sold/of Interest is required');
    }
    return '';
}


function distributorRelationshipVal(value: any, valName: any, form: any): string {
    if (!value || (_.isArray(value) && (value.length == 0))) {
        return Utils.translate('Current Distributor Relationship is required');
    }
    return '';
}


const BecomePartnerFormModel: any = Backbone.Model.extend({
    // @property {String} urlRoot
    urlRoot: Utils.getAbsoluteUrl('services/LandingPages.Service.ss'),

    // @property validation
    // Backbone.Validation attribute used for validating the form before submit.
    validation: {
        loginemail: { required: true, pattern: 'email', msg: Utils.translate('Valid email is required')},
        email: { required: true, pattern: 'email', msg: Utils.translate('Valid email is required')},
        companyname: { required: true, msg: Utils.translate('Company name is required') },
        abn: { required: true, msg: Utils.translate('ABN is required') },
		bizphone: {required: false,fn: Utils.validatePhone},
		address1: {required: true, msg: Utils.translate('Address line is required') },
		city: {required: true, msg: Utils.translate('City is required') },
		zipcode: { fn: Utils.validateZipCode },
		territory: {required: true, msg: Utils.translate('Territory is required') },
		country: {required: true, msg: Utils.translate('Country is required') },
		firstname: {required: true, msg: Utils.translate('First name is required') },
		lastname: {required: true, msg: Utils.translate('Last name is required') },
		phone: {required: false,fn: Utils.validatePhone},
		prodofinterest: {required: true, msg: Utils.translate('Products of interest is required') },
	//	distributorRelationship: {fn: distributorRelationshipVal },
		brandSold: {fn: brandSoldVal  },
		marketSegment: {required: true, msg: Utils.translate('Customer Market Segment is required') },
		industryType: {fn: industryTypeVal },
		voicePlatform: {
			required: function(val, attr, computed) {
				 return computed.douoffervoiceplatform == 'T';
				},
			msg: Utils.translate('Voice Platform is required') 
		},
		currentdistributorrelationship: { required: true,msg: Utils.translate('Current Distributor Relationship is required')},
		
    }
});

export = BecomePartnerFormModel;
