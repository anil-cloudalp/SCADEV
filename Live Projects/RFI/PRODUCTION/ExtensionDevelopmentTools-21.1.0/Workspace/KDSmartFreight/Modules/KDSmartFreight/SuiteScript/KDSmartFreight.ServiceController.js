define("Kodella.KDSmartFreight.KDSmartFreight.ServiceController", ["ServiceController"], function (
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "Kodella.KDSmartFreight.KDSmartFreight.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      /**
       * Request sample get delivery options
       * Start
       */
      /*
      var ss = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:onl="http://www.smartfreight.com/online">
       <soapenv:Header/>
       <soapenv:Body>
          <onl:GetDeliveryOptions>
             <!--Optional:-->
             <onl:id>JOJ</onl:id>
             <!--Optional:-->
             <onl:passwd>xBSx0hBtLw6rIaO2P06KKsgcyb5aq_0EWI</onl:passwd>
             <!--Optional:-->
             <onl:reference>iagotest</onl:reference>
             <!--Optional:-->
             <onl:consignment><![CDATA[
          <connote>
           <sendaccno>TEST</sendaccno>
          <sendname>TEST RHODS</sendname>
           <sendaddr>
             <add1>TEST SENDER1</add1>
             <add3>Manchester</add3>
             <add4>Manchester</add4>
             <add5>M22 4UG</add5>
             <add6>UNITED KINGDOM</add6>
          </sendaddr>
           <recaddr>
             <add1>221B Baker Street</add1>
              <add3>London</add3>
              <add4>London</add4>
             <add5>NW1 6XE</add5>
             <add6>UNITED KINGDOM</add6>
           </recaddr>
           <carriername>[Automatic]</carriername>
           <freightlinedetails>
             <ref>TEST123</ref>
              <amt>1</amt>
              <desc>CARTON</desc>
              <wgt>1.55</wgt>
              <cube>0.006</cube>
            </freightlinedetails>
           <freightlinedetails>
              <ref>TEST124</ref>
             <amt>1</amt>
              <desc>CARTON</desc>
              <wgt>1.56</wgt>
              <cube>0.007</cube>
           </freightlinedetails>
          </connote>]]>
        </onl:consignment>
          </onl:GetDeliveryOptions>
       </soapenv:Body>
    </soapenv:Envelope>`

      var header = {};
      header['SOAPAction'] = 'http://www.smartfreight.com/online/SFOv1/DeliveryOptions/GetDeliveryOptions';
      header['Accept-Encoding'] = 'gzip,deflate'
      header['Content-Type'] = 'text/xml;charset=UTF-8'
      header['Accept-Encoding'] = 'gzip,deflate'
      header['User-Agent'] = 'Apache-HttpClient/4.1.1 (java 1.5)'
      var e = nlapiRequestURL('http://api-r1.smartfreight.com/api/soap/deliveryoptions', ss, header, null, 'POST'); */
      /**
       * END
       */

      var carton = this.request.getParameter('carton');
      var addr1 = this.request.getParameter('addr1');
      var addr2 = this.request.getParameter('addr2');
      var addr3 = this.request.getParameter('addr3');
      var city = this.request.getParameter('city');
      var state = this.request.getParameter('state');
      var zip = this.request.getParameter('zip');
      var weight = this.request.getParameter('weight');
      var cubic = this.request.getParameter('cubic');
      var desc = 'CARTON';
      var mywe = parseFloat(weight)
      var isCarton = "(WEBSTORE)";
      if (mywe >= 20) {
          isCarton = '(Webstore-palletised)';
          desc = 'pallet';
      }
      nlapiLogExecution('audit', 'isCarton::: xml', isCarton)
      nlapiLogExecution('audit', 'carton::: xml', mywe)
      var ss = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:onl="http://www.smartfreight.com/online"><soapenv:Header/><soapenv:Body><onl:GetDeliveryOptions><!--Optional:--><onl:id>JOJ</onl:id><!--Optional:--><onl:passwd>xBSx0hBtLw6rIaO2P06KKsgcyb5aq_0EWI</onl:passwd><!--Optional:--><onl:reference>?</onl:reference><!--Optional:--><onl:consignment><![CDATA[<connote><sendaccno>RFI NSW</sendaccno><matchsendertoaccountno>Yes</matchsendertoaccountno><recaccno>2125419</recaccno><recname>TEST RECEIVER</recname><recaddr><add1>' + addr1 + '</add1><add3>' + city + '</add3><add4>' + state + '</add4><add5>' + zip + '</add5><add6>AUSTRALIA</add6></recaddr><recemail/><reccontact/><recph/><carriername>' + isCarton + '</carriername><partialimport>No</partialimport><freightlinedetails><ref>105927JUL</ref><amt>1</amt><desc>' + desc + '</desc><wgt>' + weight + '</wgt><cube>' + cubic + '</cube></freightlinedetails></connote>]]></onl:consignment></onl:GetDeliveryOptions></soapenv:Body></soapenv:Envelope>';
      nlapiLogExecution('audit', 'ss::: ', ss)
      var header = {};
      header['SOAPAction'] = 'http://www.smartfreight.com/online/SFOv1/DeliveryOptions/GetDeliveryOptions';
      header['Accept-Encoding'] = 'gzip,deflate'
      header['Content-Type'] = 'text/xml;charset=UTF-8'
      header['Accept-Encoding'] = 'gzip,deflate'
      header['User-Agent'] = 'Apache-HttpClient/4.1.1 (java 1.5)'
      var e = nlapiRequestURL('http://api-r1.smartfreight.com/api/soap/deliveryoptions', ss, header, null, 'POST');

      return JSON.stringify({
        bodyXML: e.getBody()
      });

    },

    post: function post() {
      // not implemented
		if(this.data.items)
		{
		  var items = this.data.items;
		  var data = {
			"items": items
			, "entity": nlapiGetUser()
		  }
		  var url = nlapiResolveURL('SUITELET', 'customscript_kd_get_smart_freight_values', 'customdeploy_kd_get_smart_freight_values', true);
		  var re = nlapiRequestURL(url, JSON.stringify(data), null, null, 'POST')
		  return re.getBody()
		}
		else
		{
				
		  var userdata = nlapiGetUser();  
		  var cust = nlapiLoadRecord('customer',userdata);
		  cust.setFieldValue('custentity_avt_iw_default_need_update','T');
		  nlapiSubmitRecord(cust,false,true); 
		  var re = {"userdata":userdata};
		  return re;
		  
		}
    },

    put: function put() {
      // not implemented
    },

    delete: function () {
      // not implemented
    }
  });
});
