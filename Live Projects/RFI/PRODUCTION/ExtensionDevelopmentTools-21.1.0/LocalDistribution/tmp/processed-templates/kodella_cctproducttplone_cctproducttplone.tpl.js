define('kodella_cctproducttplone_cctproducttplone.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"product-sales-page-1\"data-banner=\"cct-product-one\">\n  <div class=\"header\"> \n      <div class=\"container-cctproductone\"> \n          <i class=\"fa fa-circle-o\"></i>\n          <h1>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n          <p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"subtitle") || (depth0 != null ? compilerNameLookup(depth0,"subtitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n          <div class=\"arrow\"></div>\n      </div>\n  </div>\n  <div id=\"benefits-container-cct1\">\n      <div class=\"benefits-template1\">\n          <img src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"prod_image1") || (depth0 != null ? compilerNameLookup(depth0,"prod_image1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prod_image1","hash":{},"data":data}) : helper)))
    + "\" alt=\"\">\n          <h2>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"key_benefits1") || (depth0 != null ? compilerNameLookup(depth0,"key_benefits1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key_benefits1","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n          <p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"prod_description1") || (depth0 != null ? compilerNameLookup(depth0,"prod_description1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prod_description1","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n      </div>\n      <div class=\"benefits-template1\">\n          <img src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"prod_image2") || (depth0 != null ? compilerNameLookup(depth0,"prod_image2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prod_image2","hash":{},"data":data}) : helper)))
    + "\" alt=\"\">\n          <h2>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"key_benefits2") || (depth0 != null ? compilerNameLookup(depth0,"key_benefits2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key_benefits2","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n          <p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"prod_description2") || (depth0 != null ? compilerNameLookup(depth0,"prod_description2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prod_description2","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n      </div>\n      <div class=\"benefits-template1\">\n          <img src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"prod_image3") || (depth0 != null ? compilerNameLookup(depth0,"prod_image3") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prod_image3","hash":{},"data":data}) : helper)))
    + "\" alt=\"\">\n          <h2>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"key_benefits3") || (depth0 != null ? compilerNameLookup(depth0,"key_benefits3") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key_benefits3","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n          <p>W"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"prod_description3") || (depth0 != null ? compilerNameLookup(depth0,"prod_description3") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prod_description3","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n      </div>\n  </div>\n\n</div>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/CCTProductTPLOne/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'kodella_cctproducttplone_cctproducttplone'; return template;});