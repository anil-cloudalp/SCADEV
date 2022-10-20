define('MIA.PrincipalRegistration.PrincipalRegistrationModule.Model', [
    'SC.Model',
    'underscore'
], function (
    SCModel,
    _
) {
    // @class Account.Model Defines the model used by the all Account related services.
    // @extends SCModel

    var MIA_PINCIPAL_RESG_REC = 'customrecord_principal_registration',
        FLD_USER_EMAIL = 'custrecord_principalreg_user_email',
        FLD_TERMS_DOCUMENTS = 'custrecord_terms_document',
        FLD_ARE_TERMS_SIGNED = 'custrecord_are_terms_signed',
        FLD_PDF_URL = 'custrecord_sign_pdf_url';


    return SCModel.extend({
        name: 'MIA.PrincipalRegistration.PrincipalRegistrationModule.Model',

        getListData: function (email) {
            var returnString = {};
            try {
                var filters = new Array();
                filters[0] = new nlobjSearchFilter('custrecord_principalreg_user_email', null, 'is', email);
                var columns = new Array();
                columns[0] = new nlobjSearchColumn('custrecord_sign_pdf_url');
                columns[1] = new nlobjSearchColumn('custrecord_terms_document');
                var results = nlapiSearchRecord('customrecord_principal_registration', null, filters, columns);
                if (results !== null) {
                    var record = results[0];
                    returnString.docID = record.getValue('custrecord_terms_document');
                    returnString.pdfURL = record.getValue('custrecord_sign_pdf_url');
                }
                else{
                    returnString.docID = "";
                    returnString.pdfURL = "";
                }
            } catch (error) {
                returnString.error = error;
            }
           return returnString;
        },
        escapeHtml: function (unsafe) {
            return unsafe
                .replace(/<div>/ig, " ")
                .replace(/<\/div>/ig, " ")
                .replace(/(?:\r\n|\r|\n)/g, ' ')
                .replace(/'/g, "\\");
            //   .replace(/'/g, "&#039;");



        },
        submit: function (data) {

            var returnString = {};
            //console.log("data",JSON.stringify(data));
            try {
                var custId = nlapiGetUser();
                var filters = new Array();
                filters[0] = new nlobjSearchFilter('email', null, 'is', data.email);
                var columns = new Array();
                var searchresults = nlapiSearchRecord('customer', null, filters, columns);
                var isCustomer = searchresults != null ? true : false;
                if (!isCustomer) {
                    var filters = new Array();
                    filters[0] = new nlobjSearchFilter('email', null, 'is', data.email);
                    var columns = new Array();
                    var searchresults1 = nlapiSearchRecord('contact', null, filters, columns);
                    for (var i = 0; i < searchresults1.length; i++) {
                        custId = searchresults1[i].getId();
                    }
                }

                var record = nlapiCreateRecord(MIA_PINCIPAL_RESG_REC);

                if (data.email)
                    record.setFieldValue(FLD_USER_EMAIL, data.email);

                if (data['agree-terms'])
                    record.setFieldValue(FLD_ARE_TERMS_SIGNED, data['agree-terms'] == 'on' ? "T" : "F");

                if (data.content) {
                    var folderID = Configuration.get('MiaRewardsModule.termsandconditionFolderID');
                    if (folderID) {
                        var xmlgroup = "<?xml version=\"1.0\"?>\n<!DOCTYPE pdf PUBLIC \"-//big.faceless.org//report\" \"report-1.1.dtd\">\n";
                        xmlgroup += "<pdfset>";

                        var xml = "<?xml version=\"1.0\"?>\n<!DOCTYPE pdf PUBLIC \"-//big.faceless.org//report\" \"report-1.1.dtd\">\n";
                        xml += "<pdf>";
                        xml += "<head>";
                        xml += "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&amp;display=swap\" media=\"all\"/>";
                        xml += '<style>';
                        xml += '.mycss{font-size:10px;background-color: red;text-color:green;text-align:center;}';
                        xml += '</style>';
                        xml += "</head>";
                        xml += "<body size=\"Letter\" footer=\"myfooter\" footer-height=\"60px\" header=\"myheader\" header-height=\"20%\">";
                        xml += this.escapeHtml(data.content);
                        xml += '</body>\n</pdf>';
                        var file_xml = nlapiXMLToPDF(xml);
                        xmlgroup += "<pdf src='data:application/pdf;base64," + file_xml.getValue() + "' />";
                        xmlgroup += "</pdfset>";
                        var xmlGrpVal = nlapiXMLToPDF(xmlgroup);
                        var fileName = "Terms_and_Conditions_Signature_" + custId + '.pdf'
                        var file = nlapiCreateFile(fileName, 'PDF', xmlGrpVal.getValue());
                        if (file != null) {
                            file.setFolder(folderID);
                            file.setIsOnline(true);
                            var fileID = nlapiSubmitFile(file);
                            if (fileID) {
                                var fileLoad = nlapiLoadFile(fileID);
                                record.setFieldValue(FLD_PDF_URL, fileLoad.getURL());
                                record.setFieldValue(FLD_TERMS_DOCUMENTS, fileID);
                            }
                        }

                    }

                }

                returnString.recordId = nlapiSubmitRecord(record, true, true);
            } catch (e) {
                returnString.error = e.toString();
            }

            return returnString;

        }

    });
});