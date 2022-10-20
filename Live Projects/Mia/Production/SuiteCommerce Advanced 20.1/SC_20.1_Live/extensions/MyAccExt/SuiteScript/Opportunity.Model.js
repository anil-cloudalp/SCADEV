

// @module Opportunity
define('Opportunity.Model', [
    'Transaction.Model',
    'Transaction.Model.Extensions',
    'Utils',
    'Application',
    'underscore',
    'Configuration'
], function(TransactionModel, TransactionModelExtensions, Utils, Application, _, Configuration) {
    
    // @class Opportunity.Model Defines the model used by the Opportunity.Service.ss service
    // @extends Transaction.Model
    return TransactionModel.extend({
        // @property {String} name
        name: 'Opportunity',

        // @method _isCreatingARecord Internal method used to indicate whether the current operation is a creation or not
        // @return {Boolean}
        _isCreatingARecord: function() {
            return this.recordId === 'null';
        },

        // @method getTransactionRecord Load a NetSuite record (transaction)
        // @param {String} record_type
        // @param {String} id
        // @return {nlobjRecord}
        getTransactionRecord: function() {
            if (this.record) {
                return this.record;
            }

            if (!this._isCreatingARecord()) {
                return TransactionModel.getTransactionRecord.apply(this, arguments);
            }

            const opportunity = nlapiCreateRecord('opportunity', {
                recordmode: 'dynamic'
            });

			opportunity.setFieldValue('entity','' + nlapiGetUser());
			

            return opportunity;
        },
		setMemo: function(){
			
			var extraFields = this.data.fields || [];
			
			var self = this;
			_.each(extraFields,function(field){
				
				if(field.value){
					self.record.setFieldValue(field.id, field.value);
				}
			});
			
			TransactionModel.setMemo.apply(this, arguments);
		},
		search: function(title){
			var returnString = {};
			try{
				var filters = {
					mainline: ['mainline', 'is', 'T'],
					title_operator: 'and',
					title: ['title', 'is', title],
					types_operator: 'and',
					types: ['type', 'anyof', 'Opprtnty']
				};
				var columns = {
					internalid: new nlobjSearchColumn('internalid')
				};
				var search_results = Application.getAllSearchResults(
					'transaction',
					_.values(filters),
					_.values(columns)
				);
				returnString.isTitleExist = (search_results && search_results.length > 0);
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;
		},
		transformToQuote: function(opportunity_id) {
			
			var returnString = {};
			try{
				const quoteRec = nlapiTransformRecord('opportunity',opportunity_id,'estimate');
				
				quoteRec.setFieldValue('location','6'); //Lane Cove
				var entity = quoteRec.getFieldValue('entity');
				
				if(entity == nlapiGetUser()){
					returnString.id = nlapiSubmitRecord(quoteRec);
				}
				else{
					returnString.errorMessage = 'Permission Violation: you may not access this record.';
				}
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;
			
        },
        // @method get Returns an opportunity JSON object
        // @return {Opportunity.Model.Attributes}
        // @class Opportunity.Model.Attributes @extend Transaction.Model.Get.Result
        // @class Opportunity.Model

        // @method setExtraRecordFields Override empty base method to add extra values in the opportunity
        // @return {Void} This method does not return anything as it works with the value of this.result and this.record
        getExtraRecordFields: function() {
            
            // @class Opportunity.Model.Attributes

            // @property {String} statusRef
            this.result.statusRef = this.record.getFieldValue('statusRef');
            // @property {String} message
            this.result.message = Utils.sanitizeString(this.record.getFieldValue('message'));
            // @property {Boolean} allowToPurchase
            this.result.allowToPurchase =
                Application.getPermissions().transactions.tranSalesOrd >= 2;
            // @property {Boolean} isOpen
            this.result.isOpen = this.record.getFieldValue('statusRef') === 'open';

            this.result.subsidiary = this.record.getFieldValue('subsidiary');

            this.result.location_text = this.record.getFieldText('location');
			//extra fields
			this.result.buyingtimeframe = this.record.getFieldText('buyingtimeframe');
			this.result.buyingreason = this.record.getFieldText('buyingreason');
			this.result.salesreadiness = this.record.getFieldText('salesreadiness');
			this.result.title = this.record.getFieldValue('title');
			this.result.estimatedbudget = this.record.getFieldValue('estimatedbudget');
			this.result.isbudgetapproved = this.record.getFieldValue('isbudgetapproved');
			this.result.entity = this.record.getFieldValue('entity');

			
            if (!this._isCreatingARecord()) {
                // @property {QuoteToSalesOrderValidator.Model.Attributes.PurchasableStatus} purchasablestatus
                this.getSalesRep();
               
            } else {
                this.result.salesrep = {
                    name: this.record.getFieldText('salesrep'),
                    internalid: this.record.getFieldValue('salesrep')
                };
            }
            this.getDiscountInformation();
			
            if(this._isCreatingARecord()){
				
				
				var buyingtimeframe = this.record.getField('buyingtimeframe');
				var buyingreason = this.record.getField('buyingreason');
				var salesreadiness = this.record.getField('salesreadiness');

				var buyingtimeframeOptions = buyingtimeframe.getSelectOptions();
				var buyingreasonOptions = buyingreason.getSelectOptions();
				var salesreadinessOptions = salesreadiness.getSelectOptions();
				
				var buyingtimeframeOptionsArr = [];
			
				for(var i=0;i < buyingtimeframeOptions.length;i++)
				{
					var obj = {};
					obj.id = buyingtimeframeOptions[i].getId();
					obj.name = buyingtimeframeOptions[i].getText();
					
					buyingtimeframeOptionsArr.push(obj);
				}
				var buyingreasonOptionsArr = [];
			
				for(var i=0;i < buyingreasonOptions.length;i++)
				{
					var obj = {};
					obj.id = buyingreasonOptions[i].getId();
					obj.name = buyingreasonOptions[i].getText();
					
					buyingreasonOptionsArr.push(obj);
				}
				var salesreadinessOptionsArr = [];
			
				for(var i=0;i < salesreadinessOptions.length;i++)
				{
					var obj = {};
					obj.id = salesreadinessOptions[i].getId();
					obj.name = salesreadinessOptions[i].getText();
					
					salesreadinessOptionsArr.push(obj);
				}
				this.result.listoptions = {
					buyingtimeframe: buyingtimeframeOptionsArr,
					buyingreason: buyingreasonOptionsArr,
					salesreadiness: salesreadinessOptionsArr
				};
			}

            // @class Opportunity.Model
        },

        

        // @method getDiscountInformation Get the discount information of the current opportunity
        // @return {Void} This method does not return anything as it works with the value of this.result and this.record
        getDiscountInformation: function() {
            // @class Opportunity.Model.Attributes

            // @property {Opportunity.Model.Attributes.Discount?} discount
            this.result.discount = this.record.getFieldValue('discountitem')
                ? // @class Opportunity.Model.Attributes.Discount
                  {
                      // @property {String} internalid
                      internalid: this.record.getFieldValue('discountitem'),
                      // @property {String} name
                      name: this.record.getFieldText('discountitem'),
                      // @property {String} rate
                      rate: this.record.getFieldValue('discountrate')
                  }
                : null;

            // @class Opportunity.Model
        },

        

        // @method list
        // @param {Transaction.Model.List.Parameters} data
        // @return {Opportunity.Model.List.Result}

        // @class Opportunity.Model.List.Result @extend Transaction.Model.List.Result
        // @class Opportunity.Model

        // @method setExtraListColumns Overwritten method to add extra columns (due date, expected close date, entity status, and total)
        // @return {Void}
        setExtraListColumns: function() {
            this.columns.expectedclosedate = new nlobjSearchColumn('expectedclosedate');
            this.columns.entitystatus = new nlobjSearchColumn('entitystatus');
            this.columns.total = new nlobjSearchColumn('total');
        },

        // @method setExtraListFilters Overwritten method to add extra filter of the list (entity status filter)
        // @return {Void}
        setExtraListFilters: function() {
            if (this.data.filter && this.data.filter !== 'ALL') {
                this.filters.entitystatus_operator = 'and';
                this.filters.entitystatus = ['entitystatus', 'is', this.data.filter];
            }
        },

        // @method mapListResult overrides method from Transaction.Model
        // We are able to apply any custom extension over each record returned
        // @param {Transaction.Model.List.Result.Record} result Base result to be extended
        // @param {nlobjSearchResult} record Instance of the record returned by NetSuite search
        // @return {Transaction.Model.List.Result.Record}
        mapListResult: function(result, record) {
            
            // @property {String} expectedclosedate
            result.expectedclosedate = record.getValue('expectedclosedate');
            // @property {Opportunity.Model.Attributes.EntityStatus} entitystatus
            result.entitystatus = {
                id: record.getValue('entitystatus'),
                name: record.getText('entitystatus')
            };
            // @property {Number} total
            result.total = Utils.toCurrency(record.getValue('total'));
            // @property {String} total_formatted
            result.total_formatted = Utils.formatCurrency(record.getValue('total'));

            if (this.isCustomColumnsEnabled()) {
                this.mapCustomColumns(result, record);
            }

            return result;
            // @class Opportunity.Model
        },

        
        // @method getSalesRepFromId This method does NOT depend on this.record and this.result
        // @param {String} Opportunity_id
        // @return {Opportunity.Model.Get.SalesRepresentative}
        getSalesRepFromId: function(opportunity_id) {
            const salesrep = {};

            const search_result = nlapiLookupField('opportunity', opportunity_id, [
                'salesrep.phone',
                'salesrep.email',
                'salesrep.entityid',
                'salesrep.mobilephone',
                'salesrep.fax',
                'salesrep'
            ]);

            if (search_result) {
                // @class Opportunity.Model.Get.SalesRepresentative
                // @property {String?} phone
                salesrep.phone = search_result['salesrep.phone'];
                // @property {String} email
                salesrep.email = search_result['salesrep.email'];
                // @property {String} fullname
                salesrep.fullname = search_result['salesrep.entityid'];
                // @property {String} name
                salesrep.name = search_result['salesrep.entityid'];
                // @property {String?} mobilephone
                salesrep.mobilephone = search_result['salesrep.mobilephone'];
                // @property {String} fax
                salesrep.fax = search_result['salesrep.fax'];
                // @property {String} internalid
                salesrep.internalid = search_result.salesrep;
            }

            return salesrep;

            // @class Opportunity.Model
        },

        // @method postSubmitRecord Overwritten method used to extend the confirmation submission result
        // @param {Transaction.Model.Confirmation} confirmation_result
        // @return {Opportunity.Model.Confirmation}
        postSubmitRecord: function(confirmation_result) {
            const created_salesorder =
                nlapiLookupField('opportunity', confirmation_result.internalid, ['tranid']) || {};

            // @class Opportunity.Model.Confirmation @extend Transaction.Model.Confirmation
            confirmation_result.tranid = created_salesorder.tranid;
            confirmation_result.salesrep = this.getSalesRepFromId(confirmation_result.internalid);
            confirmation_result.confirmationnumber = created_salesorder.tranid;
            // @class Opportunity.Model

            return confirmation_result;
        },

        getSalesRep: TransactionModelExtensions.getSalesRep
    });
});

// @class Opportunity.Model.List.Result @extend Transaction.Model.List.Result
// @property {Array<Opportunity.Model.List.Result.Record>} records
