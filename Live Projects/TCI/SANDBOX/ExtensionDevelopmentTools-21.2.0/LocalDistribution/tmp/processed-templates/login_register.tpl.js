define('login_register.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		<h1 class=\"login-register-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Log in | Register",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":35},"end":{"line":7,"column":68}}}))
    + "</h1>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<h1 class=\"login-register-title login-register-title-noregister\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Log in",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":67},"end":{"line":9,"column":89}}}))
    + "</h1>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " class=\"login-register-body\" ";
},"7":function(container,depth0,helpers,partials,data) {
    return " class=\"login-register-body-colored\" ";
},"9":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"login-register-wrapper-column-login\">\n				<div class=\"login-register-wrapper-login\" data-view=\"Login\"></div>\n			</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<div class=\"login-register-wrapper-column-register\">\n				<div class=\"login-register-wrapper-register\">\n					<h2 class=\"login-register-title-register\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Guest Checkout",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":26,"column":47},"end":{"line":26,"column":77}}}))
    + "</h2>\n						<div class=\"login-register-wrapper-guest\" data-view=\"CheckoutAsGuest\"></div>	\n				<!---"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCheckoutAsGuest") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":9},"end":{"line":30,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRegister") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":5},"end":{"line":34,"column":12}}})) != null ? stack1 : "")
    + "--->\n				</div>\n			</div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "\n						<div class=\"login-register-wrapper-guest\" data-view=\"CheckoutAsGuest\"></div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<div class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showCheckoutAsGuest") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":18},"end":{"line":33,"column":60}}})) != null ? stack1 : "")
    + " \" data-view=\"Register\" id=\"register-view\"></div>\n					";
},"15":function(container,depth0,helpers,partials,data) {
    return "collapse";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<section class=\"login-register\">\n\n	<header class=\"login-register-header\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRegister") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":10,"column":9}}})) != null ? stack1 : "")
    + "	</header>\n\n	<div data-view=\"Messages\"></div>\n\n	<div "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRegister") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":107}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLogin") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":21,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRegisterOrGuest") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":37,"column":9}}})) != null ? stack1 : "")
    + "\n	</div>\n</section>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'login_register'; return template;});