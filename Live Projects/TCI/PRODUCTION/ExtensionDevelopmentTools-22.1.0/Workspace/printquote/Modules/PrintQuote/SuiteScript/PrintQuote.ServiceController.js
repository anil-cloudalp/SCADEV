define("Acme.printquote.PrintQuote.ServiceController", ["ServiceController", "Utils", 'Configuration'], function (
	ServiceController,
	Utils,
	Configuration
) {
	"use strict";

	return ServiceController.extend({
		name: "Acme.printquote.PrintQuote.ServiceController",

		// The values in this object are the validation needed for the current service.
		options: {
			common: {}
		},

		get: function get() {
      
			var date = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
			return date;//nlapiAddDays(date, 60);
		},

		post: function post() {

			var email = this.data.email;
			var cartdata = this.data.cartdata;
			var date = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
		//	var today = nlapiAddDays(date, 60);
				var yyyy = date.getFullYear();
				var mm = date.getMonth() + 1;
			var dd = date.getDate();
			if (dd < 10)
				dd = '0' + dd;
			if (mm < 10)
				mm = '0' + mm;
			var newdate = mm + '/' + dd + '/' + yyyy;

			var lines = cartdata && cartdata.lines;
			var models = lines && lines.models;
			var summary = cartdata && cartdata.summary;		
			if (summary && !summary.shippingcost) {
				var shippingCost = 0;
				var shippingrate = 0;
				var cartHasItemToShip = false;
				if (models && models.length) {
					models.forEach(function (model) {
						var item = model.get('item')
						if (item && item.get('itemtype') !== 'Service') {
							shippingCost += model.get('amount') * .05;
							cartHasItemToShip = true;
						}
					});
					if (cartHasItemToShip) {
						shippingrate = 5;
						shippingCost = shippingCost >= 5 ? shippingCost : 5;
					} else {
						shippingrate = ((summary.shippingcost) * 100) / (summary.total);
					}
				}
				summary.shippingcost = shippingCost;
				summary.shippingcost_formatted = Utils.formatCurrency(summary.shippingcost);
				summary.total = summary.total + summary.shippingcost;
				summary.total_formatted = Utils.formatCurrency(summary.total);
				summary.shippingrate = shippingrate;
				summary.date = newdate;
			};

			var emailbody = "<div style=font-family: 'Lato', 'Open San', 'Helvetica Neue', Helvetica, Arial, sans-serif'>";
			emailbody = emailbody + "<h1 style=font-family:'Roboto','Lato','Helvetica Neue','Calibri',Helvetica,Arial, sans-serif !important>" + Configuration.get("quote.quotetitle") + "</h1>";
			dateinfo = "<p>" + newdate + "<span> </span>"+ "(Quote is valid up to 60 days) </p>";
			emailbody = emailbody + dateinfo;
			subtext = "<p>" + Configuration.get("quote.subtext") + "</p>";
			emailbody = emailbody + subtext;
			var table = "<table style='width:100%;text-align:center;border-collapse: collapse'>";
			tr = "<thead>";
			th = "<th style='text-align:left;width:350px;padding:0.5em 0'>Description</th>";
			tr = tr + th;
			th = "<th style='text-align:left;width:350px;padding:0.5em 0'>Item Number</th>";
			tr = tr + th;
			th = "<th style='text-align:right;width:350px;padding:0.5em 0'>Quantity</th>";
			tr = tr + th;
			th = "<th style='text-align:right;width:350px;padding:0.5em 0'>Price</th>";
			tr = tr + th;
			th = "<th style='text-align:right;width:350px;padding:0.5em 0'>Total</th>";
			tr = tr + th;
			th = "</thead>";
			tr = tr + th;

			table = table + tr;
			var tbody = "<tbody>";
			for (var i = 0; i < lines.length; i++) {
	  
				var trow = "<tr style='text-align:center;border-bottom:1px solid black'>";
				var td = "<td style='text-align:left;border-bottom:1px solid black;font-size:0.85em;padding: 0.5em 0'>" + lines[i].item.salesdescription + "</td>";
				trow = trow + td;
				var td = "<td style='text-align:left;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'>" + lines[i].item.itemid + "</td>";
				trow = trow + td;
				var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'>" + lines[i].quantity + "</td>";
				trow = trow + td;
				var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'>" + lines[i].item.pricelevel1_formatted + "</td>";
				trow = trow + td;
				var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'>" + lines[i].total_formatted + "</td>";
				trow = trow + td + "</tr>";
				tbody = tbody + trow;

			}

			var subtotaltr = "<tr style='text-align:center;border-bottom:1px solid black'>";
			var td = "<td style='text-align:left;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'></td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:left;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'></td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'></td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'>subtotal</td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'>" + summary.subtotal_formatted + "</td>";
			subtotaltr = subtotaltr + td + "</tr>";
			tbody = tbody + subtotaltr;
	  
	  
			var subtotaltr = "<tr style='text-align:center;border-bottom:1px solid black'>";
			var td = "<td style='text-align:left;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'></td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:left;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'></td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'></td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'>Sales Tax</td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'>" + summary.taxtotal_formatted + "</td>";
			subtotaltr = subtotaltr + td + "</tr>";	 
			tbody = tbody + subtotaltr;

	  
			var subtotaltr = "<tr style='text-align:center;border-bottom:1px solid black'>";
			var td = "<td style='text-align:left;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'></td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:left;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'></td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'></td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'>Shipping" + '(5%)' + "</td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'>" + summary.shippingcost_formatted + "</td>";
			subtotaltr = subtotaltr + td + "</tr>";
			tbody = tbody + subtotaltr;
	  
	  
			var subtotaltr = "<tr style='text-align:center;border-bottom:1px solid black;font-weight: bold'>";
			var td = "<td style='text-align:left;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'></td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:left;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'></td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0'></td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0;font-weight: bold'>Total</td>";
			subtotaltr = subtotaltr + td;
			var td = "<td style='text-align:right;border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0;font-weight: bold'>" + summary.total_formatted + "</td>";
			subtotaltr = subtotaltr + td + "</tr>";
			tbody = tbody + subtotaltr;


			var subtotaltr = "<tr style='text-align:center;border-bottom:1px solid black'>";
			var td = "<td  colspan='5' style='border-bottom:1px solid black;font-size:0.85em;padding:0.5em 0;text-align:right'>For AK and HI orders, adjust shipping to 15%.</td>";
			subtotaltr = subtotaltr + td + "</tr>";
			tbody = tbody + subtotaltr;
			tbody = tbody + "</tbody>";
			table = table + tbody + "</table>";


			emailbody = emailbody + table + "<p>" + Configuration.get("quote.notes") + "</p>" + "</div>";
			var sender = Configuration.get("quote.senderemailAddress");
			var emailSubject = Configuration.get("quote.emailsubject");
	     	nlapiSendEmail(sender, email, emailSubject, emailbody, null, null, null);
      		return JSON.stringify(this.data)
		},
		
	put: function put() {
		
    },

    delete: function() {
      // not implemented
    }
  });
});
