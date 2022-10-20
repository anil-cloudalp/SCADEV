/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/

define('MIA.MiaRewardsExtension.MiaRewardsModule.Model', [
    'SC.Model',
    'Application',
    'SC.Models.Init',
    'Profile.Model',
    'LiveOrder.Model',
    'Address.Model',
    'CreditCard.Model',
    'SiteSettings.Model',
    'underscore'
], function (
    SCModel,
    Application,
    ModelsInit,
    Profile,
    LiveOrder,
    Address,
    CreditCard,
    SiteSettings,
    _
) {
    // @class Account.Model Defines the model used by the all Account related services.
    // @extends SCModel
    var MIA_REWARDS_CLAIM_REC = 'customrecord_mia_rewards_claim',
        FLD_DEALER_ACC_CODE = 'custrecord_dealer_acc_code',
        FLD_COMPANY_NAME = 'custrecord_company_name',
        FLD_SALES_REPS_NAME = 'custrecord_sales_reps_name',
        FLD_SALES_REPS_MOBILE = 'custrecord_sales_reps_mobile',
        FLD_SALES_REPS_EMAIL = 'custrecord_sales_reps_email',
        FLD_SYSTEM = 'custrecord_system',
        FLD_DND_SYSTEM = 'custrecord_dnd_system',
        FLD_QUANTITY = 'custrecord_quantity',
        FLD_CLAIMTERM = 'custrecord_claim_term',
        FLD_DEALER_PO_ORDERNO = 'custrecord_dealer_po_or_order_no',
        FLD_CUSTOMER_NAME = 'custrecord_customer_name',
        FLD_CLAIM_RELATE_TO_TBS = 'custrecord_claim_relate_to_tbs',
        FLD_SYSTEM_SERIAL_NO = 'custrecord_system_serial_number',
        FLD_CURRENT_EMAIL = 'custrecord_currentuser_email',
        FLD_CURRENT_USER_ID = 'custrecord_currentuser_id',
        FLD_MIA_INVOICE = 'custrecord_mia_distribution_invoice';


    return SCModel.extend({
        name: 'MIA.MiaRewardsExtension.MiaRewardsModule.Model',

        getListData: function () {
            var returnString = {};
            try {

                var search = nlapiLoadSearch(null, 'customsearch_claimable_item_saved_search');
                var resultSet = search.runSearch();
                var valArray = [];
                resultSet.forEachResult(function (searchResult) {
                    var obj = {};
                    obj.name = (searchResult.getValue('itemid'));
                    obj.id = (searchResult.getId());
                    valArray.push(obj);
                    return true;                // return true to keep iterating
                });
                
                returnString.valArray = valArray;
            } catch (error) {
                returnString.error = error;
            }
            return returnString;
        },
        submit: function (data) {

            var returnString = {};

            try {
                var custId = nlapiGetUser();

                var filters = new Array();
                filters[0] = new nlobjSearchFilter('email', null, 'is', data.userEmail);
                var columns = new Array();
                var searchresults = nlapiSearchRecord('customer', null, filters, columns);
                var isCustomer = searchresults != null ? true : false;

                var record = nlapiCreateRecord(MIA_REWARDS_CLAIM_REC);
                if (!isCustomer) {
                    var filters = new Array();
                    filters[0] = new nlobjSearchFilter('email', null, 'is', data.userEmail);
                    var columns = new Array();
                    var searchresults1 = nlapiSearchRecord('contact', null, filters, columns);
                    for (var i = 0; i < searchresults1.length; i++) {
                        custId = searchresults1[i].getId();
                    }
                    record.setFieldValue(FLD_CURRENT_USER_ID, Number(custId));
                }
                else {
                    record.setFieldValue(FLD_CURRENT_USER_ID, Number(custId));
                }

                

                if (data.companyname)
                    record.setFieldValue(FLD_COMPANY_NAME, data.companyname);

                if (data.custname)
                    record.setFieldValue(FLD_CUSTOMER_NAME, data.custname);

                if (data.dealercode)
                    record.setFieldValue(FLD_DEALER_ACC_CODE, data.dealercode);

                if (data.firstname && data.lastname)
                    record.setFieldValue(FLD_SALES_REPS_NAME, data.firstname + " " + data.lastname);

                if (data.ponumber)
                    record.setFieldValue(FLD_DEALER_PO_ORDERNO, data.ponumber);

                if (data.quantity)
                    record.setFieldValue(FLD_QUANTITY, data.quantity);

                if (data['radio-btn'])
                    record.setFieldValue(FLD_CLAIM_RELATE_TO_TBS, data['radio-btn'] == 'yes' ? 'T' : 'F');

                if (data.salesrepemail)
                    record.setFieldValue(FLD_SALES_REPS_EMAIL, data.salesrepemail);

                if (data.salesrepphone)
                    record.setFieldValue(FLD_SALES_REPS_MOBILE, data.salesrepphone);

                if (data.serialnumber)
                    record.setFieldValue(FLD_SYSTEM_SERIAL_NO, data.serialnumber);

                if (data.terms)
                {
                    record.setFieldValue(FLD_CLAIMTERM, data.terms);
                    console.warn('data.terms', JSON.stringify(data.terms));
                }

                if (data.userEmail)
                    record.setFieldValue(FLD_CURRENT_EMAIL, data.userEmail);

                if (data.system.length) {

                    record.setFieldValue(FLD_DND_SYSTEM, data.system[0]);

                    if(_.isArray(data.system))
                    record.setFieldValues(FLD_SYSTEM, data.system);
                    else
                    record.setFieldValue(FLD_SYSTEM, data.system);
                }

                if (!_.isEmpty(data.file_data)) {
                    var folderID = Configuration.get('MiaRewardsModule.invoiceFolderID');

                    if (folderID) {

                        if (data.file_data.data) {
                            var fileData = data.file_data.data;
                          							if (fileData.indexOf('base64,') > -1)
							{
								fileData = fileData.substr(fileData.indexOf('base64,') + 7, fileData.length - fileData.indexOf('base64,') + 7);
							}
                            var applicationType = data.file_data.type.split('/')[1].toUpperCase();


                            var ecodedFiledata = fileData;
                            var originalFilename = decodeURIComponent(data.file_data.name) || '';

                            var fileName = originalFilename;


                            if (applicationType) {

                                var file = nlapiCreateFile(fileName, applicationType, ecodedFiledata);

                                if (file != null) {
                                    file.setFolder(folderID);
                                    file.setIsOnline(true);
                                    var fileID = nlapiSubmitFile(file);

                                    if (fileID) {
                                        record.setFieldValue(FLD_MIA_INVOICE, fileID);
                                    }
                                }
                            }

                        }
                    }

                }

                returnString.recordId = nlapiSubmitRecord(record, true, true);
            }
            catch (e) {
                returnString.error = e.toString();
            }

            return returnString;

        }

    });
});


