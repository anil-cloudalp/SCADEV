define("Acme.CustomNewsLetter.CustomNewsLetter.ServiceController", ["ServiceController", 'SC.Models.Init', 'Configuration', 'underscore'], function (
  
    ServiceController,
 		ModelsInit,
		Configuration,
		_

) {
  "use strict";

  return ServiceController.extend({

       name: "Acme.CustomNewsLetter.CustomNewsLetter.ServiceController",
      // The values in this object are the validation needed for the current service.
        options: {
                common: {
                    requirePermissions: {
                        list: ['lists.listCustJob.3']
                    }
                }
         },
        
         subscriptionDone: {
            code: 'OK',
            message: 'Subscription successful!'
        },
        
        buildErrorAnswer: function buildErrorAnswer(code) {
            return {
                status: 500,
                code: code,
                message: 'Error trying to set up subscription.'
            };
        },

        validation: {
              email: {
                  required: true,
                  pattern: 'email',
                  msg: 'Valid email is required'
              }
        },
        
    updateSubscription: function updateSubscription(subscribers, RecordType) {
            var self = this;
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
                throw self.buildErrorAnswer('ERR_USER_STATUS_DISABLED');
            }
            // If everyone is among 'Soft Opt-In' ('1'), 'Confirmed Opt-In' ('3') or 'Confirmed Opt-Out' ('4'),
            // we cannot subscribe them, and we answer with an 'already subscribed' message.
            else if (
                subscribers_count['1'] + subscribers_count['3'] + subscribers_count['4'] ===
                subscribers.length
            ) {
                throw self.buildErrorAnswer('ERR_USER_STATUS_ALREADY_SUBSCRIBED');
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

                return self.subscriptionDone;

            } else {
                throw self.buildErrorAnswer('ERROR');
            }
        },
         
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

        

        post: function () {
              // return AcmeCustomNewsLetterCustomNewsLetter.subscribe(this.data.email);
            var self = this;
        //    this.validate({ email: this.data.email });
            const searchFilter = new nlobjSearchFilter('email', null, 'is', this.data.email);
            const searchColumnSubscriptionStatus = new nlobjSearchColumn(
                'globalsubscriptionstatus'
            );
            var customers = nlapiSearchRecord(
                'customer',
                null,
                [searchFilter],
                [searchColumnSubscriptionStatus]
			      );
			
            if ((customers == null) || (customers == undefined) || (customers == [])) {
                    customers = nlapiSearchRecord(
                            'contact',
                            null,
                            [searchFilter],
                            [searchColumnSubscriptionStatus]
                    );  
                    if ((customers == null) || (customers == undefined) || (customers == [])) { 
                          return self.createSubscription((self.data.email));
                    }

                    const records = _.groupBy(customers, function (customer) {
                        return customer.getRecordType();
                    });
              
                  return self.updateSubscription(records.contact, "contact");
              
            } else {

              const Customerrecords = _.groupBy(customers, function(customer) {
                  return customer.getRecordType();
              });

              return Customerrecords.customer? self.updateSubscription(Customerrecords.customer,"customer")
                                              : self.updateSubscription(Customerrecords.lead, "Lead");
            }
  
        },


    });
});
