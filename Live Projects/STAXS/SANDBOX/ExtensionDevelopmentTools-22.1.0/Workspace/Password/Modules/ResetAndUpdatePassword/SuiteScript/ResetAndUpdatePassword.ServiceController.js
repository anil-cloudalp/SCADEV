define("STAXS.Password.ResetAndUpdatePassword.ServiceController", ["ServiceController", "SC.Models.Init"], function (
  ServiceController
  , ModelsInit
) {
  "use strict";

  return ServiceController.extend({
    name: "STAXS.Password.ResetAndUpdatePassword.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      var result = {};
      //  var isLoggedIn = ModelsInit.session.isLoggedIn2() == 'T' ? true : false;
      console.warn(" isLoggedIn", ModelsInit.session.isLoggedIn2())
      try {
        if (ModelsInit.session.isLoggedIn2()) {
          var ContactArr = [];
          var rec = nlapiLoadRecord('customer', nlapiGetUser());
          var contactRoles = rec.getLineItemCount('contactroles');
          for (var i = 1; i <= contactRoles; i++) {
            var obj = {};
            obj.email = rec.getLineItemValue("contactroles", 'email', i);
            obj.internalid = rec.getLineItemValue("contactroles", 'contact', i);
            ContactArr.push(obj)

          }
          var SalesRep = rec.getLineItemValue("salesteam", 'employee', 1);
          var salesRepEmail = nlapiLookupField('employee', SalesRep, 'email');
          result.salesrep = salesRepEmail;
          result.contactRoles = ContactArr;
        }
        return result;
      } catch (error) {

        return result.status = error;
      }

    },
    post: function post() {
      var returnresp = {}

      try {
        console.warn("this data certificates", this.data);
        // nlapiSendEmail(author, recipient, subject, body, cc, bcc, records, attachments, notifySenderOnBounce, internalOnly, replyTo);
        // nlapiSendEmail(this.data.author, this.data.recipient, "Change Password Request",this.data.body, null, null, null,null );

        if (this.data.resetPassword === "resetpassword") {
          nlapiSendEmail(this.data.author, this.data.recipient, "Change Password Request", this.data.body, null, null, null, null);
          returnresp.status = true;
        }
        else {
          var filters = new Array();
          filters[0] = new nlobjSearchFilter('email', null, 'is', this.data.email)
          var columns = new Array();
          columns.push(new nlobjSearchColumn('parent', 'customer'));
          columns.push(new nlobjSearchColumn('email'));
          columns.push(new nlobjSearchColumn('salesteammember', 'customer'));
          var LoadcontactRec = nlapiSearchRecord('contact', null, filters, columns);
          if (LoadcontactRec != null || LoadcontactRec != undefined) {
            var recipient = [];
var htmlStr = '<html><head><style>table,th,td{border:1px solid black;border-collapse: collapse;padding:5px}</style></head><body>';
            htmlStr += '<div class="">Hi Team,</div>';
            htmlStr += '<p style="color:#4d5256;font-size:18px;font-weight:600;line-height:24px">Password Recovery</p>';
            htmlStr += '<table><thead><tr><th>Internalid</th><th>Customer Name</th><th>Reset links</th></tr></thead>';
            htmlStr += '<tbody>';
            for (var i in LoadcontactRec) {
              var id = LoadcontactRec[i].getValue('parent', 'customer');
              var name = LoadcontactRec[i].getText('parent', 'customer');
              var employeeId = LoadcontactRec[i].getValue('salesteammember', 'customer');
              var Email = nlapiLookupField('employee',employeeId,'email');
              if (Email != null ){
                recipient.push(Email);
              }
                htmlStr += '<tr>';
                htmlStr += '<td>' + id + '</td>'
                htmlStr += '<td>' + name + '</td>'
                htmlStr += '<td>' + '<div style="background-color:#fe007a;border-color: #fe007a;border:1px solid #fe007a;border-radius:6px;height:40px;margin:16px 0;text-align:center"><a href="https://' + this.data.companyId + '.app.netsuite.com/app/common/entity/custjob.nl?stage=Customer&id=' + id + ' " style="color:#ffffff;font-size:15px;font-weight:600;height:10px;line-height:40px;padding:0 10px 0 10px;text-decoration:none">Update Password</a></div>' + '</td>'
                htmlStr += '</tr>'
              
            }
            htmlStr += '</tbody></table></body></html>';
            if (recipient.length > 0) {
              nlapiSendEmail(this.data.author,recipient, "Change Password Request", htmlStr, null, null, null, null);
              returnresp.status = true;
            }
            else {
              nlapiSendEmail(this.data.author,this.data.author,"Change Password Request", htmlStr, null, null, null, null);
              returnresp.status = true;
            }
          }
          else {
            returnresp.status = false;
            returnresp.errMsg = "Please enter valid email address";
          }
        }
      }
      catch (error) {
        returnresp.status = false;
        returnresp.errMsg = "Salesrep email is not found on this customer";
        returnresp.status = error;
      }

      return returnresp;
    },

    put: function put() {
      // not implemented
    },

    delete: function () {
      // not implemented
    }
  });
});
