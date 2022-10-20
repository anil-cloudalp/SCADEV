define('kodella_category_heading.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "		<div style=\"background-image: url("
    + alias3((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"banner") : depth0),"categorybanner",{"name":"resizeImage","hash":{},"data":data}))
    + ")\" class=\"facets-browse-category-heading-main-image-custom\">\r\n            <div class=\"facets-browse-category-heading-main-description-custom\">\r\n            <h1>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "</h1>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDescription") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n		</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                <p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<style>\r\n.facet-header{\r\n\r\n    display: none;\r\n}\r\n\r\n.facets-item-list-show-selector{\r\n\r\n    display: none;\r\n}\r\n\r\n.global-views-pagination{\r\n\r\n    display: none;\r\n}\r\n\r\n.facets-facet-browse-header{\r\n    display: none;\r\n    }\r\n\r\n    .facets-facet-browse-results{\r\n\r\n        width: 100%;\r\n    }\r\n\r\n    .facets-browse-category-heading-main-description-custom h1, p{\r\n\r\n        color: white;\r\n    }\r\n\r\n    .facets-browse-category-heading-main-description-custom h1{\r\n    text-transform: none;\r\n    letter-spacing: 0px;\r\n    padding: 15px;\r\n    font-size: 25px;\r\n    }\r\n\r\n    .facets-browse-category-heading-main-description-custom p{\r\n\r\n        padding: 15px;\r\n    }\r\n\r\n    .facets-facet-browse{\r\n        padding: 0px;\r\n    }\r\n\r\n</style>\r\n\r\n\r\n<section class=\"facets-browse-category-heading-list-header-custom\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'kodella_category_heading'; return template;});