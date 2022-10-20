define('overview_home_standalone.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "\r\n            <table class=\"overview-home-invoices-list-table\">\r\n                <thead class=\"overview-home-content-table\">\r\n                    <tr class=\"overview-home-content-table-header-row\">\r\n                        <th class=\"overview-home-content-table-header-row-title\">\r\n                            <span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoice No.",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n                        </th>\r\n                        <th class=\"overview-home-content-table-header-row-date\">\r\n                            <span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Date",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n                        </th>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSCISIntegrationEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </tr>\r\n                </thead>\r\n                <tbody class=\"overview-home-invoices-list\" data-view=\"Invoices.Results\"></tbody>\r\n            </table>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "\r\n                        <th class=\"overview-home-content-table-header-row-amount\">\r\n                            <span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Amount",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n                        </th>\r\n\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "\r\n                        <th class=\"overview-home-content-table-header-row-amount\">\r\n                            <span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n                        </th>\r\n                        <th class=\"overview-home-content-table-header-row-status\">\r\n                            <span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Status",{"name":"translate","hash":{},"data":data}))
    + "</span>\r\n                        </th>\r\n\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "\r\n            <div class=\"overview-home-invoices-empty-section\">\r\n                <h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have any invoice in your account right now.",{"name":"translate","hash":{},"data":data}))
    + "</h5>\r\n            </div>\r\n\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"overview-home-header-links\">\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Need Help? Contact <a href=\"$(0)\">Customer Service</a>",(depth0 != null ? compilerNameLookup(depth0,"customerSupportURL") : depth0),{"name":"translate","hash":{},"data":data}))
    + "\r\n	</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<section class=\"overview-home-standalone\">\r\n\r\n  <div class=\"overview-home-invoices\">\r\n    <div class=\"overview-home-invoices-header\">\r\n      <h2 class=\"overview-home-title\">Account Overview</h2>\r\n      <hr>\r\n      <h3 class=\"overview-home-invoices-title\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Recent Invoices",{"name":"translate","hash":{},"data":data}))
    + "</h3>\r\n        <a href=\"/invoices\" data-type=\"invoices-list\" class=\"overview-home-anchor-invoices-list\">\r\n          "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"View Invoices List",{"name":"translate","hash":{},"data":data}))
    + "\r\n        </a>\r\n      </div>\r\n		  <div class=\"overview-home-invoices-results-container\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"collectionLengthGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n		</div>\r\n	</div>\r\n</section>\r\n\r\n<section class=\"overview-home-mysettings\">\r\n    <h3>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"My Settings",{"name":"translate","hash":{},"data":data}))
    + "</h3>\r\n    <div class=\"overview-home-mysettings-row\">\r\n        <div class=\"overview-home-mysettings-profile\">\r\n            <div data-view=\"Overview.Profile\"></div>\r\n        </div>\r\n        <div class=\"overview-home-mysettings-shipping\">\r\n            <div data-view=\"Overview.Shipping\"></div>\r\n        </div>\r\n        <div class=\"overview-home-mysettings-payment\">\r\n            <div data-view=\"Overview.Payment\"></div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<div data-view=\"Overview.Banner\"></div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasCustomerSupportURL") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'overview_home_standalone'; return template;});