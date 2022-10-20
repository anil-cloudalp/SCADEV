define('tci_manageordersext_requestareturn.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "    <div data-view='ReturnItems'></div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div>\n      <div>\n        <div class='return-container'>\n          <p class='return-eligibility-error'>\n            "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"notAvaliable") : depth0)) != null ? compilerNameLookup(stack1,"message") : stack1), depth0)) != null ? stack1 : "")
    + "\n          </p>\n        </div>\n      </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"container\">\n  <div data-cms-area=\"manage-orders-request-return\" data-cms-area-filters=\"path\"></div>\n  <div class=\"cms-pages-side-menu-content\">\n    <div class=\"find-invoice\">\n      <h1>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"returnTitle") || (depth0 != null ? compilerNameLookup(depth0,"returnTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"returnTitle","hash":{},"data":data,"loc":{"start":{"line":5,"column":10},"end":{"line":5,"column":25}}}) : helper)))
    + "</h1>\n      "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"returnDescription") || (depth0 != null ? compilerNameLookup(depth0,"returnDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"returnDescription","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n    <div class=\"find-invoice-form\">\n      <form>\n        <div data-type=\"alert-placeholder\"></div>\n        <div class=\"find-invoice-form-group\" data-input=\"order\" data-validation=\"control-group\">\n          <label for=\"name\">\n            "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Full Name: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":39}}}))
    + " \n          </label>\n          <div class=\"find-invoice-form-container\" data-validation=\"control\">\n            <input type=\"text\" id=\"name\" name=\"name\">\n          </div>\n          <label for=\"email\">\n            "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Email: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":35}}}))
    + " \n          </label>\n          <div class=\"find-invoice-form-container\" data-validation=\"control\">\n            <input type=\"email\" id=\"email\" name=\"email\">\n          </div>\n          <label for=\"phone\">\n            "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Phone: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":35}}}))
    + " \n          </label>\n          <div class=\"find-invoice-form-container\" data-validation=\"control\">\n            <input type=\"tel\" name=\"phone\" id=\"phone\"> \n          </div>\n          <label for=\"order\">\n            "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"PO Number or TCI Order Number (for credit card payment): ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":31,"column":12},"end":{"line":31,"column":85}}}))
    + " \n          </label>\n          <div class=\"find-invoice-form-container\" data-validation=\"control\">\n            <input type=\"text\" id=\"order\" name=\"order\">\n          </div>\n          <label for=\"zip\">\n            "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Billing Zipcode: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":37,"column":12},"end":{"line":37,"column":45}}}))
    + " \n          </label>\n          <div class=\"find-invoice-form-container\" data-validation=\"control\">\n            <input type=\"text\" id=\"zip\" name=\"zip\">\n          </div>\n          <label for=\"reason\">\n            "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Reason for Return: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":12},"end":{"line":43,"column":47}}}))
    + " \n          </label>\n          <div class=\"find-invoice-form-container\" data-validation=\"control\">\n            <input type=\"radio\" id=\"reason\" name=\"reason\" data-value=\"Ordered Wrong Item\" value=\"1\"> Ordered Wrong Item <br>\n            <input type=\"radio\" name=\"reason\" data-value=\"Wrong item Fulfilled\" value=\"2\"> Wrong item Fulfilled <br>\n            <input type=\"radio\" name=\"reason\" data-value=\"No Longer Needed\" value=\"3\"> No Longer Needed <br>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"find-invoice-form-submit\">\n          "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Search",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":52,"column":10},"end":{"line":52,"column":32}}}))
    + "\n        </button>\n      </form>\n    </div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTrackInfo") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":4},"end":{"line":58,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showNotAvaliable") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":4},"end":{"line":69,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"cms-pages-side-menu-menu\">\n    <div class=\"cms-pages-side-menu\" data-view=\"SideNavigation\"></div>\n  </div>\n</div>\n\n<!--\n  Available helpers:\n  "
    + alias4((compilerNameLookup(helpers,"getExtensionAssetsPath")||(depth0 && compilerNameLookup(depth0,"getExtensionAssetsPath"))||alias2).call(alias1,"img/image.jpg",{"name":"getExtensionAssetsPath","hash":{},"data":data,"loc":{"start":{"line":78,"column":2},"end":{"line":78,"column":45}}}))
    + " - reference assets in your extension\n  \n  "
    + alias4((compilerNameLookup(helpers,"getExtensionAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getExtensionAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getExtensionAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":80,"column":2},"end":{"line":80,"column":68}}}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder\n  \n  "
    + alias4((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":82,"column":2},"end":{"line":82,"column":53}}}))
    + " - reference assets in the active theme\n  \n  "
    + alias4((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/theme-image.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":84,"column":2},"end":{"line":84,"column":70}}}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder\n-->";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TCI/ManageOrdersExt/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'tci_manageordersext_requestareturn'; return template;});