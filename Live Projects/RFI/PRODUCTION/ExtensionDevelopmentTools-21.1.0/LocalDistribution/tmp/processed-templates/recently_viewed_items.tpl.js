define('recently_viewed_items.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<aside class=\"recently-viewed-items\">\r\n		<h3>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Recently viewed",{"name":"translate","hash":{},"data":data}))
    + "</h3>\r\n		<div data-type=\"backbone.collection.view.rows\"></div>\r\n	</aside>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n<style>\r\n\r\n.item-relations-related-carousel-next {\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n    position: absolute;\r\n    right: -15px;\r\n    top: 35%;\r\n    border: none;\r\n}\r\n\r\n.item-relations-related-carousel-prev {\r\n    cursor: pointer;\r\n    cursor: hand;\r\n    position: absolute;\r\n    left: -15px;\r\n    top: 35%;\r\n    /* background: white; */\r\n    border: none;\r\n    /* font-size: 19px; */\r\n}\r\n\r\n.carousel-next-arrow, .carousel-prev-arrow {\r\n    color: #161616 !important;\r\n    font-size: 28px!important;\r\n}\r\n\r\n.item-relations-related-carousel-prev:hover{\r\n	background-color: transparent!important;\r\n\r\n}\r\n\r\n.item-relations-related-carousel-next:hover{\r\n	background-color: transparent!important;s\r\n}\r\n\r\n.item-relations-related-carousel-prev:hover .carousel-prev-arrow {\r\n	color: #8c8c8c !important;\r\n\r\n}\r\n\r\n.item-relations-related-carousel-next:hover .carousel-next-arrow {\r\n	color: #8c8c8c !important;\r\n\r\n}\r\n\r\n</style>\r\n\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showCells") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Kodella/KD_Base_Theme_Landmark_2020/0.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'recently_viewed_items'; return template;});