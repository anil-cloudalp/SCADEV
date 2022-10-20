define('header_sidebar.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":62,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<li>\n						<a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":9,"column":9},"end":{"line":9,"column":36}}}))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":37},"end":{"line":9,"column":85}}})) != null ? stack1 : "")
    + " name=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":9,"column":92},"end":{"line":9,"column":100}}}) : helper)))
    + "\">\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":7},"end":{"line":10,"column":25}}}))
    + "\n							"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":7},"end":{"line":11,"column":77}}})) != null ? stack1 : "")
    + "\n						</a>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":60,"column":13}}})) != null ? stack1 : "")
    + "					</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "data-action=\"push-menu\"";
},"5":function(container,depth0,helpers,partials,data) {
    return "<i class=\"header-sidebar-menu-push-icon\"></i>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "							<ul>\n								<li>\n									<a href=\"#\" class=\"header-sidebar-menu-back\" data-action=\"pop-menu\" name=\"back-sidebar\">\n										<i class=\"header-sidebar-menu-pop-icon\"></i>\n										"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":30}}}))
    + "\n									</a>\n								</li>\n\n								<li>\n									<a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":23,"column":39}}}))
    + ">\n										"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Browse $(0)",(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":10},"end":{"line":24,"column":42}}}))
    + "\n									</a>\n								</li>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":8},"end":{"line":58,"column":17}}})) != null ? stack1 : "")
    + "							</ul>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "								<li>\n									<a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":39}}}))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":40},"end":{"line":30,"column":88}}})) != null ? stack1 : "")
    + ">\n									"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":31,"column":9},"end":{"line":31,"column":17}}}) : helper)))
    + "\n									"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":9},"end":{"line":32,"column":79}}})) != null ? stack1 : "")
    + "\n									</a>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":9},"end":{"line":56,"column":16}}})) != null ? stack1 : "")
    + "								</li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "									<ul>\n										<li>\n											<a href=\"#\" class=\"header-sidebar-menu-back\" data-action=\"pop-menu\">\n												<i class=\"header-sidebar-menu-pop-icon\"></i>\n												"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":12},"end":{"line":40,"column":32}}}))
    + "\n											</a>\n										</li>\n\n										<li>\n											<a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":45,"column":14},"end":{"line":45,"column":41}}}))
    + ">\n												"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Browse $(0)",(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":46,"column":12},"end":{"line":46,"column":44}}}))
    + "\n											</a>\n										</li>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":10},"end":{"line":54,"column":19}}})) != null ? stack1 : "")
    + "									</ul>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "										<li>\n											<a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":52,"column":14},"end":{"line":52,"column":41}}}))
    + " name=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":52,"column":48},"end":{"line":52,"column":56}}}) : helper)))
    + "\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":52,"column":58},"end":{"line":52,"column":66}}}) : helper)))
    + "</a>\n										</li>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "				<li class=\"header-sidebar-menu-myaccount\" data-view=\"Header.Menu.MyAccount\"></li>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<!-- This is not showing, will need work in the view -->\n		<div class=\"header-sidebar-social\">\n			<ul class=\"header-sidebar-social-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHeaderView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaLinks") : stack1),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":78,"column":3},"end":{"line":84,"column":12}}})) != null ? stack1 : "")
    + "			</ul>\n		</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "				<li>\n					<a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":80,"column":8},"end":{"line":80,"column":35}}}))
    + " data-hashtag=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datahashtag") || (depth0 != null ? compilerNameLookup(depth0,"datahashtag") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datahashtag","hash":{},"data":data,"loc":{"start":{"line":80,"column":50},"end":{"line":80,"column":65}}}) : helper)))
    + "\" data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatouchpoint") || (depth0 != null ? compilerNameLookup(depth0,"datatouchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatouchpoint","hash":{},"data":data,"loc":{"start":{"line":80,"column":84},"end":{"line":80,"column":102}}}) : helper)))
    + "\" data-target=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatarget") || (depth0 != null ? compilerNameLookup(depth0,"datatarget") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatarget","hash":{},"data":data,"loc":{"start":{"line":80,"column":117},"end":{"line":80,"column":131}}}) : helper)))
    + "\">\n						"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":81,"column":6},"end":{"line":81,"column":97}}})) != null ? stack1 : "")
    + "\n					</a>\n				</li>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<i class=\"header-sidebar-social-icon icon-"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"icon") || (depth0 != null ? compilerNameLookup(depth0,"icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":81,"column":60},"end":{"line":81,"column":68}}}) : helper)))
    + "\"></i>";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":81,"column":82},"end":{"line":81,"column":90}}}) : helper)));
},"20":function(container,depth0,helpers,partials,data) {
    return "		<a class=\"header-sidebar-user-logout\" href=\"#\" data-touchpoint=\"logout\" name=\"logout\">\n			<i class=\"header-sidebar-user-logout-icon\"></i>\n			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Sign Out",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":94,"column":3},"end":{"line":94,"column":27}}}))
    + "\n		</a>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "		<div data-view=\"Global.HostSelector\"></div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "		<div data-view=\"Global.CurrencySelector\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"header-sidebar-wrapper\">\n\n	<div class=\"header-sidebar-menu-wrapper\" data-type=\"header-sidebar-menu\">\n\n		<ul class=\"header-sidebar-menu\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":3},"end":{"line":63,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showExtendedMenu") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":3},"end":{"line":67,"column":10}}})) != null ? stack1 : "")
    + "\n		</ul>\n\n	</div>\n\n	<div class=\"header-sidebar-links\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHeaderView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaLinks") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":2},"end":{"line":87,"column":9}}})) != null ? stack1 : "")
    + "\n		<div class=\"header-sidebar-profile-menu\" data-view=\"Header.Profile\"></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showExtendedMenu") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":2},"end":{"line":96,"column":9}}})) != null ? stack1 : "")
    + "\n		<div data-view=\"QuickOrderHeaderLink\"></div>\n		<div class=\"header-menu-quote\">\n			<a class=\"creat-a-quote\" href=\"/cart\" data-hashtag=\"#cart\" data-touchpoint=\"home\" title=\"Cart\">\n				Create a Quote\n			</a>\n		</div>\n		<div <!--data-view=\"RequestQuoteWizardHeaderLink\"-->></div>\n		<div data-view=\"RequestQuoteWizardHeaderLink\"></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":107,"column":2},"end":{"line":109,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":110,"column":2},"end":{"line":112,"column":9}}})) != null ? stack1 : "")
    + "\n	</div>\n\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_sidebar'; return template;});