define("CA.customAddresses.customAddress.ServiceController", ["ServiceController","SC.Models.Init"], function(
  ServiceController,
  ModelsInit
) {
  "use strict";
  return ServiceController.extend({
    name: "CA.customAddresses.customAddress.ServiceController",
    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      return JSON.stringify({
        message: "Hello World I'm an Extension using a Service!"
      });
    },

  post: function post() {
      var self = this;
          if (self.data.addr1) {
                      var self = this;
                      var record = nlapiLoadRecord('customer', nlapiGetUser(),{recordmode: 'dynamic'});
                      var addrCount = record.getLineItemCount('addressbook');
                      var addressInternalId = self.data.AddInternalId;
                      if(!addressInternalId){
                                var newSubrecord = record.createCurrentLineItemSubrecord('addressbook', 'addressbookaddress');
                                newSubrecord.setFieldValue('attention', self.data.fullname);
                                newSubrecord.setFieldValue('country', self.data.country);
                                record.setCurrentLineItemValue('addressbook', 'isresidential', self.data.isresidential);
                                newSubrecord.setFieldValue('addressee', self.data.company);
                                newSubrecord.setFieldValue('custrecorddefalut_ship', self.data.custrecorddefalut_ship);
                                newSubrecord.setFieldValue('custrecorddefault_billing', self.data.custrecorddefault_billing);
                                newSubrecord.setFieldValue('addr1', self.data.addr1);
                                newSubrecord.setFieldValue('addr2', self.data.addr2);
                                newSubrecord.setFieldValue('city', self.data.city);
                                newSubrecord.setFieldValue('state', self.data.state);
                                newSubrecord.setFieldValue('zip', self.data.zip);
                            newSubrecord.commit();
                            record.commitLineItem('addressbook');
                      } else {
                        for (var j = 1; j <= addrCount; j++){
                          var addressId = record.getLineItemValue('addressbook', 'addressid', j);
                          if (addressId == addressInternalId) {

                                record.selectLineItem('addressbook', j);
                                var addrSubrecord = record.editCurrentLineItemSubrecord('addressbook', 'addressbookaddress');
                                addrSubrecord.setFieldValue('attention', self.data.fullname);
                                addrSubrecord.setFieldValue('country', self.data.country);
                                record.setCurrentLineItemValue('addressbook', 'isresidential', self.data.isresidential);
                                addrSubrecord.setFieldValue('addressee', self.data.company);
                                addrSubrecord.setFieldValue('custrecorddefalut_ship', self.data.custrecorddefalut_ship);
                                addrSubrecord.setFieldValue('custrecorddefault_billing', self.data.custrecorddefault_billing);
                                addrSubrecord.setFieldValue('addr1', self.data.addr1);
                                addrSubrecord.setFieldValue('addr2', self.data.addr2);
                                addrSubrecord.setFieldValue('city', self.data.city);
                                addrSubrecord.setFieldValue('state', self.data.state);
                                addrSubrecord.setFieldValue('zip', self.data.zip);
                            
                                addrSubrecord.commit();
                                record.commitLineItem('addressbook');
                          }
                       }
                   }
                   
              var id = nlapiSubmitRecord(record);
              if(!addressInternalId){
                  var record = nlapiLoadRecord('customer', nlapiGetUser(),{recordmode: 'dynamic'});
                  addressInternalId = record.getLineItemValue('addressbook', 'addressid', record.getLineItemCount('addressbook'));
                  console.warn("New addressInternalId",addressInternalId);
            }  
            return addressInternalId;
          } else {

                var record = nlapiLoadRecord('customer', nlapiGetUser(), { recordmode: 'dynamic' });
                var addrCount = record.getLineItemCount('addressbook');
                var id = {};
                for (var i = 1; i <= addrCount; i++) {
                      var addressId = record.getLineItemValue('addressbook', 'addressid', i);
                      record.selectLineItem('addressbook', i);
                      var subrecord = record.editCurrentLineItemSubrecord('addressbook', 'addressbookaddress'); 
                      if (subrecord.getFieldValue('custrecorddefalut_ship') == "T") {
                        id.isDefaultShip = addressId;
                      }
                      if (subrecord.getFieldValue('custrecorddefault_billing') == "T") {
                          id.isDefaultBill = addressId;
                      }
                }
                return id;
            
            }
      },

          put: function put() {
                  var self = this;
                  var record = nlapiLoadRecord('customer', nlapiGetUser(),{recordmode: 'dynamic'});
                  var addrCount = record.getLineItemCount('addressbook');
            if (addrCount == 1) {
                    var self = this;
                    var record = nlapiLoadRecord('customer', nlapiGetUser(),{recordmode: 'dynamic'});
                    var addrCount = record.getLineItemCount('addressbook');
                    var addressInternalId = self.data.AddInternalId;
                    for (var j = 1; j <= addrCount; j++)
                    {
                      var addressId = record.getLineItemValue('addressbook', 'addressid', j);
                      if (addressId == addressInternalId) {
                          record.selectLineItem('addressbook', j);
                          var addrSubrecord = record.editCurrentLineItemSubrecord('addressbook', 'addressbookaddress');
                          addrSubrecord.setFieldValue('fullname', self.data.fullname);
                          addrSubrecord.setFieldValue('country', self.data.country);
                          record.setCurrentLineItemValue('addressbook', 'isresidential', self.data.isresidential);
                          addrSubrecord.setFieldValue('company', self.data.company);
                          addrSubrecord.setFieldValue('custrecorddefalut_ship', self.data.custrecorddefalut_ship);
                          addrSubrecord.setFieldValue('custrecorddefault_billing', self.data.custrecorddefault_billing);
                          addrSubrecord.setFieldValue('addr1', self.data.addr1);
                          addrSubrecord.setFieldValue('addr2', self.data.addr2);
                          addrSubrecord.setFieldValue('city', self.data.city);
                          addrSubrecord.setFieldValue('state', self.data.state);
                          addrSubrecord.setFieldValue('zip', self.data.zip);

                            addrSubrecord.commit();
                            record.commitLineItem('addressbook');
                      }
                    }
                      var id = nlapiSubmitRecord(record);
                      return addressInternalId;
            }
            else {
             
                try {
                        var self = this;
                        var record = nlapiLoadRecord('customer', nlapiGetUser(), { recordmode: 'dynamic' });
                        var addrCount = record.getLineItemCount('addressbook');
                        var currentDefaultAddID = "";
                        var currentDefaultBillAddID = "";
                        
                            for (var j = 1; j <= addrCount; j++) {
                                var addressId = record.getLineItemValue('addressbook', 'addressid', j);
                                record.selectLineItem('addressbook', j);
                                var subrecord = record.editCurrentLineItemSubrecord('addressbook', 'addressbookaddress');
                                      if ((subrecord.getFieldValue('custrecorddefalut_ship') == "T")) {
                                              currentDefaultAddID = addressId;
                                      }
                                      if ((subrecord.getFieldValue('custrecorddefault_billing') == "T")) {
                                            currentDefaultBillAddID = addressId;
                                      }
                             }


                    for (var j = 1; j <= addrCount; j++) {
                          var addressId = record.getLineItemValue('addressbook', 'addressid', j);
                          record.selectLineItem('addressbook', j);
                          var subrecord = record.editCurrentLineItemSubrecord('addressbook', 'addressbookaddress');
                          if (self.data.defaultship) {
                                     if (self.data.internalid == addressId && (subrecord.getFieldValue('custrecorddefalut_ship') == "T")) {
                                            currentDefaultAddID = self.data.internalid;
                                      }
                          } else if (self.data.defaultbill) {
                                     if (self.data.internalid == addressId && (subrecord.getFieldValue('custrecorddefault_billing') == "T")) {
                                         currentDefaultBillAddID = self.data.internalid;
                                  }
                          } else {
                             if (self.data.internalid == addressId && (subrecord.getFieldValue('custrecorddefalut_ship') == "T")) {
                                            currentDefaultAddID = self.data.internalid;
                             }
                              if (self.data.internalid == addressId && (subrecord.getFieldValue('custrecorddefault_billing') == "T")) {
                                         currentDefaultBillAddID = self.data.internalid;
                              }
                         }
                     }

                    if(!currentDefaultBillAddID){
                       currentDefaultBillAddID = self.data.internalid;
                     }
                   
                    if (!currentDefaultAddID)
                      {
                        currentDefaultAddID = self.data.internalid;
                      }
               
                    for (var i = 1; i <= addrCount; i++) {
                              var addressId = record.getLineItemValue('addressbook', 'addressid', i);
                              record.selectLineItem('addressbook', i);
                              var subrecord = record.editCurrentLineItemSubrecord('addressbook', 'addressbookaddress');
                              if (self.data.defaultship) {
                                  if (currentDefaultAddID && (currentDefaultAddID == addressId)) {
                                    subrecord.setFieldValue('custrecorddefalut_ship', 'T');
                                    record.setCurrentLineItemValue('addressbook', 'defaultshipping', 'T');
                                  }
                                  else {
                                    subrecord.setFieldValue('custrecorddefalut_ship', 'F');
                                    record.setCurrentLineItemValue('addressbook', 'defaultshipping', 'F');
                                  }
                              } else if (self.data.defaultbill) {
                                    if ((currentDefaultBillAddID) && (currentDefaultBillAddID == addressId)) {
                                            subrecord.setFieldValue('custrecorddefault_billing', 'T');
                                            record.setCurrentLineItemValue('addressbook', 'defaultbilling', 'T');
                                    } else {
                                            subrecord.setFieldValue('custrecorddefault_billing', 'F');
                                            record.setCurrentLineItemValue('addressbook', 'defaultbilling', 'F');
                                    }
                              } else {
                                
                                // for myAccount customizations:-

                                    if (currentDefaultAddID && (currentDefaultAddID == addressId)) {
                                      subrecord.setFieldValue('custrecorddefalut_ship', 'T');
                                      record.setCurrentLineItemValue('addressbook', 'defaultshipping', 'T');
                                    } else {
                                      subrecord.setFieldValue('custrecorddefalut_ship', 'F');
                                      record.setCurrentLineItemValue('addressbook', 'defaultshipping', 'F');
                                    }
                                
                  
                                    if ((currentDefaultBillAddID) && (currentDefaultBillAddID == addressId)) {
                                            subrecord.setFieldValue('custrecorddefault_billing', 'T');
                                            record.setCurrentLineItemValue('addressbook', 'defaultbilling', 'T');
                                    } else {
                                            subrecord.setFieldValue('custrecorddefault_billing', 'F');
                                            record.setCurrentLineItemValue('addressbook', 'defaultbilling', 'F');
                                    }
                              }
                            subrecord.commit();
                            record.commitLineItem('addressbook');
                     }
                            console.warn("in last currentdefalutadd", currentDefaultAddID);
                            var id = nlapiSubmitRecord(record);
                            if ((self.data.defaultship)) {
                              return JSON.stringify("ship-" + currentDefaultAddID);
                            } else {
                              return JSON.stringify("bill-" + currentDefaultBillAddID);
                            }
                  } catch (e) {
                      return e.error
                  }
                }
            },
            
            delete: function () {
               var record = nlapiLoadRecord('customer', nlapiGetUser(),{recordmode: 'dynamic'});
                 	 var addrCount = record.getLineItemCount('addressbook');
                      var removedAddId;
                       for (var i = 1; i <= addrCount; i++)
                            {
              					var addressId = record.getLineItemValue('addressbook', 'addressid', i);
                                 record.selectLineItem('addressbook', i);
                                 var subrecord = record.editCurrentLineItemSubrecord('addressbook', 'addressbookaddress');
                               if ((subrecord.getFieldValue('custrecorddefalut_ship') == "F")) {
                                     removedAddId = ModelsInit.customer.removeAddress(addressId);
                                }
                            }
                  return removedAddId;
            }
  });
});
