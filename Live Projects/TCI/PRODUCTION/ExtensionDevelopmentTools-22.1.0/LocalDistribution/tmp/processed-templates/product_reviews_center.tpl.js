define('product_reviews_center.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "				<div data-view=\"ListHeader.View\"></div>\n\n				<div class=\"product-reviews-center-container\">\n					<div class=\"product-reviews-center-container-header\">\n						<h2 class=\"product-reviews-center-container-header-number\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasOneReview") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":11,"column":7},"end":{"line":15,"column":14}}})) != null ? stack1 : "")
    + "						</h2>\n						<div data-view=\"Global.StarRating\"></div>\n					</div>\n					<div class=\"product-reviews-center-container-wrapper\">\n						<div data-view=\"Global.RatingByStar\"></div>\n					</div>\n				</div>\n\n				<section class=\"product-reviews-center-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"totalRecords") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":25,"column":5},"end":{"line":29,"column":12}}})) != null ? stack1 : "")
    + "				</section>\n\n				<div class=\"product-reviews-center-footer\">\n					<div data-view=\"GlobalViews.Pagination\"></div>\n				</div>\n\n				<div class=\"product-reviews-center-container-footer\">\n					<a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data,"loc":{"start":{"line":37,"column":14},"end":{"line":37,"column":25}}}) : helper)))
    + "/newReview\" class=\"product-reviews-center-container-footer-button\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Write a Review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":37,"column":92},"end":{"line":37,"column":122}}}))
    + "</a>\n				</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "								"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1 Review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":12,"column":32}}}))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "								"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) Reviews",(depth0 != null ? compilerNameLookup(depth0,"itemCount") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":14,"column":46}}}))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "						<div data-view=\"ProductReviews.Review\" class=\"product-reviews-center-review-container\"></div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"There are no reviews available for your selection",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":28,"column":71}}}))
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "				<!-- <div class=\"product-reviews-center-container\"> -->\n					<div class=\"product-reviews-center-no-reviews-container\">\n						<h2 class=\"product-reviews-center-no-reviews\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"No reviews available",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":52},"end":{"line":42,"column":88}}}))
    + "</h2>\n						<p>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Be the first to",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":9},"end":{"line":43,"column":40}}}))
    + " <a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data,"loc":{"start":{"line":43,"column":50},"end":{"line":43,"column":61}}}) : helper)))
    + "/newReview\" class=\"product-reviews-center-container-button\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Write a Review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":121},"end":{"line":43,"column":151}}}))
    + "</a></p>\n					</div>\n				<!-- </div> -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section class=\"product-reviews-center-content\">\n	<div class=\"product-reviews-center-more-info-content-container\">\n		<div class=\"product-reviews-center\">\n			<h2 class=\"product-reviews-center-container-header-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Ratings &amp; Reviews",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":61},"end":{"line":4,"column":98}}}))
    + "</h2>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"itemCount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":5,"column":3},"end":{"line":46,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</section>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/TCI/TCI_Manor/1.0.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_reviews_center'; return template;});