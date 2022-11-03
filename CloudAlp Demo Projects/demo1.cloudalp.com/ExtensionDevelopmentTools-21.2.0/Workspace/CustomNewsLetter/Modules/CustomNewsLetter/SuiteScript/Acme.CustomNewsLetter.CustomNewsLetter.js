// Acme.CustomNewsLetter.CustomNewsLetter.js
// Load all your starter dependencies in backend for your extension here
// ----------------

define('Acme.CustomNewsLetter.CustomNewsLetter'
,	[
		'Acme.CustomNewsLetter.CustomNewsLetter.ServiceController',
		'SC.Model',
		'SC.Models.Init',
		'Configuration',
		'underscore'
	]
    , function (
		CustomNewsLetterServiceController,
		SCModel,
		ModelsInit,
		Configuration,
		_
	)
{
	'use strict';

	return SCModel.extend({
        // @property {String} name Mandatory for all ssp-libraries models
        name: 'CustomNewsLetter',

        // @property {String} validation Includes the validation criteria
        validation: {
            email: {
                required: true,
                pattern: 'email',
                msg: 'Valid email is required'
            }
        },


        subscribe: function subscribe(email) {
            this.validate({ email: email });
            const searchFilter = new nlobjSearchFilter('email', null, 'is', email);
            const searchColumnSubscriptionStatus = new nlobjSearchColumn(
                'globalsubscriptionstatus'
            );
            
            var self = this;

            var customers = nlapiSearchRecord(
                'customer',
                null,
                [searchFilter],
                [searchColumnSubscriptionStatus]
			);
			
        //   var SuiteletData = { "email": email };
        // if ((customers == null) || (customers == undefined) || (customers == [])) {
        //     var stSuiteletUrl = nlapiResolveURL('SUITELET', 'customscript_globalsubscriptionsubmit', 'customdeploy_globalsubscriptionsubmit', true);
        //     stSuiteletUrl = stSuiteletUrl + '&email=' + email;
        //     var headers = new Array();
        //     headers['Content-Type'] = 'application/json';
        //     headers['User-Agent-x'] = 'SuiteScript-Call';
        //     var response = nlapiRequestURL(stSuiteletUrl, JSON.stringify(SuiteletData), headers, 'POST');
        //     return response.getBody()
        // }

              if ((customers == null) || (customers == undefined) || (customers == [])) {
                   
                        customers = nlapiSearchRecord(
                                'contact',
                                null,
                                [searchFilter],
                                [searchColumnSubscriptionStatus]
                        );
                   
                        if ((customers == null) || (customers == undefined) || (customers == [])) { 
                             return self.createSubscription(email);
                        }
                   
                        const records = _.groupBy(customers, function (customer) {
                            return customer.getRecordType();
                        });
                   
                   return this.updateSubscription(records.contact, "contact");
                           
               } else {
                        const Customerrecords = _.groupBy(customers, function(customer) {
                            return customer.getRecordType();
                        });
                
                        return Customerrecords.customer? this.updateSubscription(Customerrecords.customer,"customer")
                                                        : this.updateSubscription(Customerrecords.lead, "Lead");
                    }

             

            // If there's NOT any customer or lead with this email, we set up a lead with globalsubscriptionstatus = 1
            // if (!records.customer && !records.lead && !records.contact) {
            //     return this.createSubscription(email);
            // }

              
        },

        // @method createSubscription Create a new 'lead' record with globalsubscriptionstatus = 1 (Soft Opt-In)
        // @parameter {String} email
        // @returns {subscriptionDone} Custom object with confirmation of lead record creation
        createSubscription: function createSubscription(email) {
            const record = nlapiCreateRecord('lead');
            record.setFieldValue('entityid', email);
            record.setFieldValue('firstname', Configuration.get('newsletter.genericFirstName'));
            record.setFieldValue('lastname', Configuration.get('newsletter.genericLastName'));
            record.setFieldValue('email', email);
            record.setFieldValue('custentity_customer_location', 9);
            record.setFieldValue('custentitycustentity_comments','comments text');
            record.setFieldValue('subsidiary', ModelsInit.session.getShopperSubsidiary());
            record.setFieldValue('companyname', Configuration.get('newsletter.companyName'));
            record.setFieldValue('globalsubscriptionstatus', 1);
            nlapiSubmitRecord(record);
            return this.subscriptionDone;
        },

        // @method updateSubscription Update globalsubscriptionstatus of the records received
        // @parameter {Array<nlObjSearchObject>} subscribers Array of customer or leads.
        // @returns {Newsletter.Model.SubscriptionDone} Customer/lead subscription operation result
        updateSubscription: function updateSubscription(subscribers, RecordType) {
            const subscribers_data = _.map(subscribers, function(subscriber) {
                return {
                    id: subscriber.getId(),
                    status: subscriber.getValue('globalsubscriptionstatus')
                };
            });
        
            // We count the subscribers by its statuses
            const subscribers_count = _.countBy(subscribers_data, function(subscriber) {
                return subscriber.status;
            });

            // Set up the quantity of the subscribers statuses. If it is NaN, is converted to number zero.
            subscribers_count['1'] = subscribers_count['1'] || 0;
            subscribers_count['2'] = subscribers_count['2'] || 0;
            subscribers_count['3'] = subscribers_count['3'] || 0;
            subscribers_count['4'] = subscribers_count['4'] || 0;

            // If every customer is in 'Confirmed Opt-Out' status ('4'), we cannot subscribe them.
            if (subscribers_count['4'] === subscribers.length) {
                throw this.buildErrorAnswer('ERR_USER_STATUS_DISABLED');
            }
            // If everyone is among 'Soft Opt-In' ('1'), 'Confirmed Opt-In' ('3') or 'Confirmed Opt-Out' ('4'),
            // we cannot subscribe them, and we answer with an 'already subscribed' message.
            else if (
                subscribers_count['1'] + subscribers_count['3'] + subscribers_count['4'] ===
                subscribers.length
            ) {
                throw this.buildErrorAnswer('ERR_USER_STATUS_ALREADY_SUBSCRIBED');
            }
            // If some subscribers are in 'Soft Opt-Out' change every customer with status 'Soft Opt-Out' (2) to 'Soft Opt-In' (1)
            else if (subscribers_count['2']) {
                // Get the customers able to be subscribed
                const customers_to_subscribe = _.filter(subscribers_data, function (subscriber) {
                    return subscriber.status === '2';
                });

                // Updating all subscribers to 'Soft Opt-In' status.
                // Potentially demanding operation on large amount
                // of subscribers; documentation points using nlapiSubmitField
                // as the cheaper way to update lines.

				if (RecordType == "contact") {
					
                        _.each(customers_to_subscribe, function (subscriber) {
                            nlapiSubmitField(
                                'contact',
                                subscriber.id,
                                'globalsubscriptionstatus',
                                1,
                                false
                            );
                        });
                    
                } else { 

                    _.each(customers_to_subscribe, function (subscriber) {
                        nlapiSubmitField(
                            'customer',
                            subscriber.id,
                            'globalsubscriptionstatus',
                            1,
                            false
                        );
                    });
               
                }

                return this.subscriptionDone;

            } else {
                throw this.buildErrorAnswer('ERROR');
            }
        },


        // @property {Newsletter.Model.SuccessfulAnswer} subscriptionDone
        subscriptionDone: {
            code: 'OK',
            message: 'Subscription successful!'
        },

        // @method buildErrorAnswer Build the error answer
        // @param {String} String with error code
        // @return {Newsletter.Model.ErrorAnswer} Subscription fail object.
        buildErrorAnswer: function buildErrorAnswer(code) {
            return {
                status: 500,
                code: code,
                message: 'Error trying to set up subscription.'
            };
        }
    });
});
