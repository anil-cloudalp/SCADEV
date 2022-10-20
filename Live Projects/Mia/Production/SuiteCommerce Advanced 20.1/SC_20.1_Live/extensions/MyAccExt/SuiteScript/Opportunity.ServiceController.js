

// Opportunity.ServiceController.js
// ----------------
// Service to manage Opportunity requests
define('Opportunity.ServiceController', ['ServiceController', 'Opportunity.Model'], function(
    ServiceController,
    OpportunityModel
) {
    try {
        // @class Opportunity.ServiceController Manage Opportunity requests
        // @extend ServiceController
        return ServiceController.extend({
            // @property {String} name Mandatory for all ssp-libraries model
            name: 'Opportunity.ServiceController',

            // @property {Service.ValidationOptions} options. All the required validation, permissions, etc.
            // The values in this object are the validation needed for the current service.
            // Can have values for all the request methods ('common' values) and specific for each one.
			options: function() {
				return {
					common: {
						requireLogin: true
					}
				};
			},

            // @method get The call to Opportunity.Service.ss with http method 'get' is managed by this function
            // @return {Transaction.Model.Get.Result || Transaction.Model.List.Result}
            get: function() {
                const id = this.request.getParameter('internalid');
				const title = this.request.getParameter('title');
				const opportunity_id = this.request.getParameter('opportunity_id');
				
                if (id) {
					var opportunityRecord = OpportunityModel.get('opportunity', id);
					
					if(opportunityRecord.entity == nlapiGetUser()){
						return opportunityRecord;
					}
					else{

						return {errorMessage: "Permission Violation: you may not access this record."};
					}
                    
                }
				
				if(title) {
                    return OpportunityModel.search(title);
                }
				if(opportunity_id) {
                    return OpportunityModel.transformToQuote(opportunity_id);
                }
                return OpportunityModel.list({
                    filter: this.request.getParameter('filter'),
                    order: this.request.getParameter('order'),
                    sort: this.request.getParameter('sort'),
                    from: this.request.getParameter('from'),
                    to: this.request.getParameter('to'),
                    page: this.request.getParameter('page') || 1,
                    types: this.request.getParameter('types')
                });
            },

            // @method post The call to Opportunity.Service.ss with http method 'post' is managed by this function
            // @return {Transaction.Model.Get.Result}
            post: function() {
                // Updates the order with the passed in data
                OpportunityModel.update('opportunity', this.data.internalid || 'null', this.data);

                // Gets the status
                const order_info = OpportunityModel.get('opportunity', this.data.internalid || 'null');

                // Finally Submits the order
                order_info.confirmation = OpportunityModel.submit();
                // //Override tempid with the real sales order id that have been created
                // order_info.internalid = order_info.confirmation.internalid;
                return order_info;
            },

            // @method put The call to Opportunity.Service.ss with http method 'put' is managed by this function
            // @return {Transaction.Model.Get.Result}
            put: function() {
                // Pass the data to the Opportunity_model's update method and send it response
                OpportunityModel.update('opportunity', this.data.internalid, this.data);
                return OpportunityModel.get('opportunity', this.data.internalid);
            }
        });
    } catch (e) {
        console.warn('OpportunityPos.Service.ss' + e.name, e);
        this.sendError(e);
    }
});
