define('login_register_checkout_as_guest.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "in";
},"3":function(container,depth0,helpers,partials,data) {
    return "			<button href=\"#\" class=\"login-register-checkout-as-guest-button-show\" data-toggle=\"collapse\" data-target=\"#guest-show-view,#guest-view\">\r\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Checkout as a Guest",{"name":"translate","hash":{},"data":data}))
    + "\r\n			</button>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "			<form class=\"login-register-checkout-as-guest-form\" method=\"POST\" novalidate>\r\n				<div class=\"login-register-checkout-as-guest-control-group\">\r\n					<button type=\"submit\" class=\"login-register-checkout-as-guest-submit\">\r\n						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Checkout as a Guest",{"name":"translate","hash":{},"data":data}))
    + "\r\n					</button>\r\n				</div>\r\n			</form>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Checkout as a Guest",{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Checkout as a guest and you will have an opportunity to create an account when you are finished.",{"name":"translate","hash":{},"data":data}))
    + "\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "			<div class=\"login-register-checkout-as-guest-control-group\" data-validation=\"control-group\">\r\n				<label class=\"login-register-checkout-as-guest-control-label\" for=\"register-firstname\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"First Name <small class=\"login-register-checkout-as-guest-required\">*</small>",{"name":"translate","hash":{},"data":data}))
    + "\r\n				</label>\r\n				<div class=\"login-register-checkout-as-guest-controls\" data-validation=\"control\">\r\n					<input type=\"text\" name=\"firstname\" id=\"guest-firstname\" class=\"login-register-checkout-as-guest-input\">\r\n				</div>\r\n			</div>\r\n\r\n			<div class=\"login-register-checkout-as-guest-control-group\" data-validation=\"control-group\">\r\n				<label class=\"login-register-checkout-as-guest-control-label\" for=\"guest-lastname\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Last Name <small class=\"login-register-checkout-as-guest-required\">*</small>",{"name":"translate","hash":{},"data":data}))
    + "\r\n				</label>\r\n				<div class=\"login-register-checkout-as-guest-controls\" data-validation=\"control\">\r\n					<input type=\"text\" name=\"lastname\" id=\"guest-lastname\" class=\"login-register-checkout-as-guest-input\">\r\n				</div>\r\n			</div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"login-register-checkout-as-guest-form-controls-group\" data-validation=\"control-group\">\r\n				<div class=\"login-register-checkout-as-guest-register-form-controls\" data-validation=\"control\">\r\n					<input value=\"true\" type=\"hidden\" name=\"redirect\" id=\"redirect\" >\r\n				</div>\r\n			</div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "			<div class=\"login-register-checkout-as-guest-control-group\" data-validation=\"control-group\">\r\n				<label class=\"login-register-checkout-as-guest-control-label\" for=\"register-email\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Email Address <small class=\"login-register-checkout-as-guest-required\">*</small>",{"name":"translate","hash":{},"data":data}))
    + "\r\n				</label>\r\n				<div class=\"login-register-checkout-as-guest-controls\" data-validation=\"control\">\r\n					<input type=\"email\" name=\"email\" id=\"guest-email\" class=\"login-register-checkout-as-guest-input\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"your@email.com",{"name":"translate","hash":{},"data":data}))
    + "\" value=\"\">\r\n					<p class=\"login-register-checkout-as-guest-help-block\">\r\n						<small>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"We need your email address to contact you about your order.",{"name":"translate","hash":{},"data":data}))
    + "</small>\r\n					</p>\r\n				</div>\r\n			</div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "	<hr>\r\n	<div class=\"login-register-checkout-as-guest-register-header collapse in\" id=\"register-show-view\">\r\n		<p class=\"login-register-checkout-as-guest-description\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Create an account and take advantage of faster checkouts and other great benefits.",{"name":"translate","hash":{},"data":data}))
    + "\r\n		</p>\r\n		<button class=\"login-register-checkout-as-guest-button-show\" data-toggle=\"collapse\" data-target=\"#register-show-view,#register-view\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Create Account",{"name":"translate","hash":{},"data":data}))
    + "\r\n		</button>\r\n	</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"login-register-checkout-as-guest-header collapse "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"guest-show-view\">\r\n	\r\n		<p class=\"login-register-checkout-as-guest-description\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Checkout as a guest and you will have an opportunity to create an account when you are finished.",{"name":"translate","hash":{},"data":data}))
    + "\r\n		</p>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"expandGuestUserEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\r\n<div class=\"login-register-checkout-as-guest-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"guest-view\">\r\n	<p class=\"login-register-checkout-as-guest-description\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "	</p>\r\n	<form class=\"login-register-checkout-as-guest-form\" method=\"POST\" novalidate>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showGuestFirstandLastname") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRedirect") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showGuestEmail") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n		<div class=\"login-register-checkout-as-guest-form-messages\" data-type=\"alert-placeholder\"></div>\r\n\r\n		<div class=\"login-register-checkout-as-guest-control-group\">\r\n			<button type=\"submit\" class=\"login-register-checkout-as-guest-submit\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Proceed to Checkout",{"name":"translate","hash":{},"data":data}))
    + "\r\n			</button>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0),{"name":"unless","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'login_register_checkout_as_guest'; return template;});