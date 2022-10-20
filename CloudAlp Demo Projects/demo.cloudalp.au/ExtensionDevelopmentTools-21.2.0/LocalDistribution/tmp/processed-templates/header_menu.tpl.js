define('header_menu.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":3},"end":{"line":39,"column":10}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "				<li "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":62}}})) != null ? stack1 : "")
    + ">\r\n					<a class=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":10,"column":15},"end":{"line":10,"column":24}}}) : helper)))
    + "\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":10,"column":26},"end":{"line":10,"column":53}}}))
    + ">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":54},"end":{"line":10,"column":72}}}))
    + "</a>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":5},"end":{"line":37,"column":12}}})) != null ? stack1 : "")
    + "				</li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "data-toggle=\"categories-menu\"";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<ul class=\"header-menu-level-container\">\r\n						<li>\r\n							<ul class=\"header-menu-level2\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":33,"column":17}}})) != null ? stack1 : "")
    + "							</ul>\r\n						</li>\r\n					</ul>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "								<li>\r\n									<a class=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":17,"column":19},"end":{"line":17,"column":28}}}) : helper)))
    + "\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":17,"column":30},"end":{"line":17,"column":57}}}))
    + ">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"thumbnailurl") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":40},"end":{"line":20,"column":47}}})) != null ? stack1 : "")
    + "										<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":34}}}))
    + "</span>\r\n									</a>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":9},"end":{"line":31,"column":16}}})) != null ? stack1 : "")
    + "								</li>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "										    <img src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"thumbnailurl") : depth0),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":19,"column":24},"end":{"line":19,"column":64}}}))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":19,"column":71},"end":{"line":19,"column":79}}}) : helper)))
    + "\">\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "									<ul class=\"header-menu-level3\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":10},"end":{"line":29,"column":19}}})) != null ? stack1 : "")
    + "									</ul>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "										<li>\r\n											<a class=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":27,"column":21},"end":{"line":27,"column":30}}}) : helper)))
    + "\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":27,"column":32},"end":{"line":27,"column":59}}}))
    + ">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":60},"end":{"line":27,"column":78}}}))
    + "</a>\r\n										</li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\r\n<nav class=\"header-menu-secondary-nav\">\r\n\r\n	<ul class=\"header-menu-level1\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":40,"column":11}}})) != null ? stack1 : "")
    + "	</ul>\r\n\r\n	<button class=\"header-menu-search-link\" data-action=\"show-sitesearch\" title=\""
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Search",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":78},"end":{"line":43,"column":100}}}))
    + "\">\r\n			<i class=\"header-menu-search-icon\">\r\n				<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\" class=\"svg-search\"><path class=\"svg-path-search\" d=\"M330 370c-6 0-11.4-2.2-15.7-6.4l-63.7-63.7c-3.5-3.5-5.7-7.9-6.3-12.8 -22.3 14.4-47.5 21.8-75 21.8 -25.3 0-48.9-6.3-70.1-18.8 -21.1-12.4-38.1-29.4-50.5-50.5C36.3 218.3 30 194.7 30 169.4s6.3-48.9 18.8-70.1c12.4-21.1 29.4-38.1 50.5-50.5C120.5 36.3 144.1 30 169.4 30s48.9 6.3 70.1 18.8c21.1 12.4 38.1 29.4 50.5 50.5 12.5 21.2 18.8 44.7 18.8 70.1 0 27.5-7.3 52.6-21.8 75 4.8 0.6 9.2 2.7 12.8 6.3l63.8 63.7c4.2 4.2 6.4 9.6 6.4 15.7s-2.2 11.4-6.4 15.7l-17.9 17.8C341.5 367.8 336.1 370 330 370zM257.8 260v24.2c0 2.5 0.8 4.3 2.5 6l63.8 63.7c3.4 3.4 8.6 3.4 12 0l17.9-17.8c1.7-1.7 2.5-3.6 2.5-6s-0.8-4.3-2.5-6l-63.8-63.7c-1.7-1.7-3.6-2.5-6-2.5H260l8.6-11c17.6-22.5 26.6-48.5 26.6-77.4 0-22.9-5.7-44.1-16.9-63.2 -11.2-19.1-26.6-34.5-45.7-45.7 -38.1-22.5-88.3-22.5-126.3 0 -19.1 11.2-34.5 26.6-45.7 45.7 -11.2 19-16.9 40.3-16.9 63.2s5.7 44.1 16.9 63.2c11.2 19.1 26.6 34.5 45.7 45.7 19 11.2 40.3 16.9 63.2 16.9 28.9 0 54.9-8.9 77.4-26.6L257.8 260zM169.4 257.8c-16 0-31-3.9-44.5-11.7 -13.5-7.8-24.3-18.6-32.1-32.1C85 200.4 81 185.4 81 169.4s3.9-31 11.7-44.5c7.8-13.5 18.6-24.3 32.1-32.1 27-15.6 62-15.6 89 0 13.5 7.8 24.3 18.6 32.1 32.1 7.8 13.5 11.7 28.5 11.7 44.5s-3.9 31-11.7 44.5c-7.8 13.5-18.6 24.3-32.1 32.1C200.4 253.8 185.4 257.8 169.4 257.8zM169.4 94.6c-13.6 0-26.3 3.3-37.7 9.9 -11.4 6.6-20.6 15.7-27.1 27.1 -6.6 11.4-9.9 24.1-9.9 37.7s3.3 26.3 9.9 37.7c6.6 11.4 15.7 20.5 27.1 27.1 22.9 13.2 52.6 13.2 75.5 0 11.4-6.6 20.6-15.7 27.1-27.1 6.6-11.4 9.9-24.1 9.9-37.7s-3.3-26.3-9.9-37.7c-6.6-11.4-15.7-20.6-27.1-27.1C195.7 97.9 183 94.6 169.4 94.6z\"/></svg>\r\n			</i>\r\n	</button>\r\n\r\n	<div class=\"header-menu-search\">\r\n		<div class=\"header-site-search search-desktop\" data-view=\"SiteSearch\" data-type=\"SiteSearch\"></div>\r\n	</div>\r\n</nav>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CloudAlp/Gozney/3.3.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/CloudAlp/Gozney/3.3.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_menu'; return template;});