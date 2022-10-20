var extensions = {};

extensions['Kodella.KDDownloadPrice.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDDownloadPrice/1.0.0/' + asset;
}

// @module Kodella.KDDownloadPrice.KDDownloadPrice
define("Kodella.KDDownloadPrice.KDDownloadPrice.View", [
  "kodella_kddownloadprice_kddownloadprice.tpl",

  "Kodella.KDDownloadPrice.KDDownloadPrice.SS2Model",

  "Backbone",
], function (
  kodella_kddownloadprice_kddownloadprice_tpl,

  KDDownloadPriceSS2Model,

  Backbone
) {
  "use strict";

  // @class Kodella.KDDownloadPrice.KDDownloadPrice.View @extends Backbone.View
  return Backbone.View.extend({
    template: kodella_kddownloadprice_kddownloadprice_tpl,

    initialize: function (options) {
      /*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

      // this.model = new KDDownloadPriceModel();
      // var self = this;
      // this.model.fetch().done(function(result) {
      // 	self.message = result.message;
      // 	self.render();
      // });
      window.open("/site/RFI Solar Price List.pdf", "_blank");
    },

    events: {},

    bindings: {},

    childViews: {},

    //@method getContext @return Kodella.KDDownloadPrice.KDDownloadPrice.View.Context
    getContext: function getContext() {
      //@class Kodella.KDDownloadPrice.KDDownloadPrice.View.Context
      this.message = this.message || "Hello World!!";
      return {
        message: this.message,
      };
    },
  });
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDDownloadPrice.KDDownloadPrice.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDDownloadPrice.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDDownloadPrice.KDDownloadPrice.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDDownloadPrice/SuiteScript2/KDDownloadPrice.Service.ss"
            ),
            true
        )
});
});


// @module Kodella.KDDownloadPrice.KDDownloadPrice
define("Kodella.KDDownloadPrice.KDDownloadPrice2.View", [
  "kodella_kddownloadprice_kddownloadprice2.tpl",

  "Backbone",
], function (
  kodella_kddownloadprice_kddownloadprice_tpl,

  Backbone
) {
  "use strict";

  // @class Kodella.KDDownloadPrice.KDDownloadPrice.View @extends Backbone.View
  return Backbone.View.extend({
    template: kodella_kddownloadprice_kddownloadprice_tpl,

    initialize: function (options) {
      /*  Uncomment to test backend communication with an example service
            (you'll need to deploy and activate the extension first)
          */

      // this.model = new KDDownloadPriceModel();
      // var self = this;
      // this.model.fetch().done(function(result) {
      // 	self.message = result.message;
      // 	self.render();
      // });
      window.open("/site/RFI RF Price List.pdf", "_blank");
    },

    events: {},

    bindings: {},

    childViews: {},

    //@method getContext @return Kodella.KDDownloadPrice.KDDownloadPrice.View.Context
    getContext: function getContext() {
      //@class Kodella.KDDownloadPrice.KDDownloadPrice.View.Context
      this.message = this.message || "Hello World!!";
      return {
        message: this.message,
      };
    },
  });
});


define("Kodella.KDDownloadPrice.KDDownloadPrice", [
  "Kodella.KDDownloadPrice.KDDownloadPrice.View",
  "Kodella.KDDownloadPrice.KDDownloadPrice2.View",
  'Profile.Model',
  'MyAccountMenu'
], function (KDDownloadPriceView, KDDownloadPrice2View, ProfileModel,MyAccountMenu ) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      // using the 'Layout' component we add a new child view inside the 'Header' existing view
      // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
      // more documentation of the Extensibility API in
      // https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

      /** @type {LayoutComponent} */
      var layout = container.getComponent("Layout");
     
      layout.on("afterShowContent",function(){
       
      })    
    
      var ProfileModelInstanced = ProfileModel.getInstance();
      var array = ProfileModelInstanced.attributes.customfields;
      var pdfType = _.findWhere(array, { name: "custentity_rfi_line_of_bus" })
      pdfType = pdfType.value
      var myAccountMenu = container.getComponent("MyAccountMenu");
      var pageType = container.getComponent("PageType");
      if (pdfType == 2 || pdfType == 1) {
        var testGroup = {
          id: "manage-users",
          name: "Price list Download ",
          index: 99,
        };
        myAccountMenu.addGroup(testGroup);
      }


      if (pdfType == 2) {
        var groupEntry = {
          id: "manage-users-list",
          groupid: "manage-users",
          index: 2,
          url: "price-list",
          name: "Download Solar Price List",
        };
        myAccountMenu.addGroupEntry(groupEntry);
      }
      if (pdfType == 1) {
        var groupEntry2 = {
          id: "manage-users-list2",
          groupid: "manage-users",
          index: 3,
          url: "price-list-2",
          name: "Download Communications Products Price List",
        };
        myAccountMenu.addGroupEntry(groupEntry2);
      }




      pageType.registerPageType({
        name: "DownloadPrice2",
        routes: ["price-list-2", "price-list-2"],
        view: KDDownloadPrice2View,
        defaultTemplate: {
          name: "kodella_kddownloadprice_kddownloadprice2.tpl",
          displayName: "Download price list 2",
        },
      });
      pageType.registerPageType({
        name: "DownloadPrice",
        routes: ["price-list", "price-list"],
        view: KDDownloadPriceView,
        defaultTemplate: {
          name: "kodella_kddownloadprice_kddownloadprice.tpl",
          displayName: "Download price list",
        },
      });
      var mA = MyAccountMenu.MyAccountMenu.getInstance();
      mA.removeSubEntry('cases');
      // if(layout)
      // {
      // 	layout.addChildView('Header.Logo', function() {
      // 		return new KDDownloadPriceView({ container: container });
      // 	});
      // }
    },
  };
});


};

extensions['Kodella.KDGlobalExtension.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDGlobalExtension/1.0.0/' + asset;
}

// @module Kodella.KDGlobalExtension.KDGlobalExtension
define('Kodella.KDGlobalExtension.KDGlobalExtension.View'
,	[
	'kodella_kdglobalextension_kdglobalextension.tpl'
	
	,	'Kodella.KDGlobalExtension.KDGlobalExtension.SS2Model'
	
	,	'Backbone'
    ]
, function (
	kodella_kdglobalextension_kdglobalextension_tpl
	
	,	KDGlobalExtensionSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Kodella.KDGlobalExtension.KDGlobalExtension.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdglobalextension_kdglobalextension_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new KDGlobalExtensionModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Kodella.KDGlobalExtension.KDGlobalExtension.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDGlobalExtension.KDGlobalExtension.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDGlobalExtension.KDGlobalExtension.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDGlobalExtension.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDGlobalExtension.KDGlobalExtension.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDGlobalExtension/SuiteScript2/KDGlobalExtension.Service.ss"
            ),
            true
        )
});
});



define(
	'Kodella.KDGlobalExtension.KDGlobalExtension'
,   [
		'Kodella.KDGlobalExtension.KDGlobalExtension.View',
		'jQuery'
	]
,   function (
		KDGlobalExtensionView,
		jQuery
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */


			// jQuery(document).ready(function(){
			// 	if (!navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/)) {
			// 		jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
			// 	}else if(navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/) && navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') ){
			// 		jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
			// 	}

			// });

			var layout = container.getComponent('Layout');
			
			if(layout)
			{
				layout.on('afterShowContent', function(){


				// if (!navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/)) {
				// 	jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
				// }else if(navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/) && navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') ){
				// 	jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
				// }

                var casesButton = document.querySelectorAll('[data-id="cases"]');
				if(casesButton.length > 0){
					casesButton[0].remove();
				}

				var casesMenu = document.querySelectorAll("[data-permissions='lists.listCase.2']")
				if(casesMenu.length > 0){
					casesMenu[0].remove();	
				}

				
				var casesMobile = document.querySelectorAll("[name='submitnewcase']")
				if(casesMobile.length > 0){
					casesMobile[0].remove();	
				}


				var li = document.querySelectorAll(".list-type");	
				var ListType = jQuery('.list-type').parent().children('ul');
				 for (var i = 0; i<ListType.length; i++) {
				   ListType[i].firstElementChild.classList.add("custom-change-submenu-only");		
					 }		  
					 jQuery('.custom-change-submenu-only').children('ul').css('display', 'block');
					 jQuery('.cms-menu').css('position', 'initial');
					 jQuery('.list-type').parent().css('position', 'relative');



				});
			}

		}
	};
});


};

extensions['Kodella.KDTermsOfUseModal.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDTermsOfUseModal/1.0.0/' + asset;
}

// @module Kodella.KDTermsOfUseModal.KDTermsOfUseModal
define('Kodella.KDTermsOfUseModal.KDTermsOfUseModal.View'
,	[
	'kodella_kdtermsofusemodal_kdtermsofusemodal.tpl'
	
	,	'Kodella.KDTermsOfUseModal.KDTermsOfUseModal.Model'
	
	,	'Backbone'
	
	,  "Quote.Details.View"

    ,  "Overview.Home.View"
	
	,  "Overview.Profile.View"

    ,  "Overview.Shipping.View"
	
	,	"Overview.Payment.View"
    ]
, function (
	kodella_kdtermsofusemodal_kdtermsofusemodal_tpl
	
	,	KDTermsOfUseModalModel
	
	,	Backbone
	
	,  QuoteDetailsView

    ,  OverviewHomeView
	
	,  OverviewProfileView
    
    ,  OverviewShippingView
	
	,  OverviewPaymentView
)
{
    'use strict';

	var customerId;
	var recordType;
	QuoteDetailsView.prototype.getContext =  _.wrap(QuoteDetailsView.prototype.getContext, function (fn){
	
		var context = fn.apply(this, _.toArray(arguments).slice(1));

		if(this.application.role == "sales"){
			context.toshowquotetosalesorder = false;
		}else{
			context.toshowquotetosalesorder = true;
		}
		return context;
	});
		
	OverviewHomeView.prototype.getContext = _.wrap(OverviewHomeView.prototype.getContext, function (fn){
		
        var context = fn.apply(this, _.toArray(arguments).slice(1));
		
        if(this.application.role == "sales"){
            context.toshowPaymentmethod = false;
        }else{
            context.toshowPaymentmethod = true;
        }
        return context;
    });	
	
	OverviewProfileView.prototype.getContext = _.wrap(OverviewProfileView.prototype.getContext, function (fn){
        var context = fn.apply(this, _.toArray(arguments).slice(1));
        if(this.parentView.options.application.role != "fullaccess"){
            context.showProfileInfo = false;
        }else{
            context.showProfileInfo = true;
        }
        return context;
    }); 

    OverviewShippingView.prototype.getContext = _.wrap(OverviewShippingView.prototype.getContext, function (fn){
        var context = fn.apply(this, _.toArray(arguments).slice(1));
        if(this.parentView.options.application.role != "fullaccess"){
            context.showoverviewShipping = false;
        }else{
            context.showoverviewShipping = true;
        }
        return context;
    });
	
	OverviewPaymentView.prototype.getContext = _.wrap(OverviewPaymentView.prototype.getContext, function (fn){
        var context = fn.apply(this, _.toArray(arguments).slice(1));
        if(this.parentView.options.application.role != "fullaccess"){
            context.showoverviewPayment = false;
        }else{
            context.showoverviewPayment = true;
        }
        return context;
    });

	// @class Kodella.KDTermsOfUseModal.KDTermsOfUseModal.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdtermsofusemodal_kdtermsofusemodal_tpl

	,	initialize: function (options) {
			this.model = new KDTermsOfUseModalModel();
			var self = this;
			var userProfile = options.container.getComponent('UserProfile');
			userProfile.getUserProfile().then(function(profile) {
				console.log(profile);
				if (profile.type === "COMPANY") {
					self.model.fetch({data: { company: profile.internalid, email: profile.email }}).done(function(result) {
						customerId = result.contactId;
						recordType = result.type;
						var hasAccepted = result.hasAccepted;
						if (!hasAccepted) {
							self.notAccepted = true;
							self.render();
							$("#kdtermsofusemodal-modal").css("display", "block");
							$("#kdtermsofusemodal-modal").modal({ backdrop: "static", keyboard: false });
						}
					});
				}
				else {
					recordType = "customer";
					customerId = profile.internalid;
					var notAccepted = true;
					profile.customfields.forEach(function(field) {
						if (field.id === "custentity_kd_accepted_terms" && field.value === true) notAccepted = false;
					});
					if (notAccepted) {
						self.notAccepted = notAccepted;
						self.render();
						$("#kdtermsofusemodal-modal").css("display", "block");
						$("#kdtermsofusemodal-modal").modal({ backdrop: "static", keyboard: false });
					}
				}
			});
		}

	,	events: {
			'submit #kdtermsofusemodal-form':'acceptTerms'
		}

	,	acceptTerms: function(e) {
			e.preventDefault();
			e.stopPropagation();
			if (customerId) {
				var data = { customerId: customerId, type: recordType };
				this.model.save(data).done(function(response) {
					//console.log(response);
					$("#kdtermsofusemodal-modal").modal('hide');
				});
			}
	}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Kodella.KDTermsOfUseModal.KDTermsOfUseModal.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDTermsOfUseModal.KDTermsOfUseModal.View.Context
			return {
				notAccepted: this.notAccepted
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDTermsOfUseModal.KDTermsOfUseModal.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDTermsOfUseModal.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDTermsOfUseModal.KDTermsOfUseModal.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDTermsOfUseModal/SuiteScript2/KDTermsOfUseModal.Service.ss"
            ),
            true
        )
});
});



define(
	'Kodella.KDTermsOfUseModal.KDTermsOfUseModal'
,   [
		'Kodella.KDTermsOfUseModal.KDTermsOfUseModal.View'
	]
,   function (
		KDTermsOfUseModalView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			
			layout.addChildView('Overview.Profile', function() {
				return new KDTermsOfUseModalView({ container: container });
			});

		}
	};
});


};

extensions['CA.MyAccountCustomization.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/MyAccountCustomization/1.0.0/' + asset;
}

// @module CA.MyAccountCustomization.RoleBasedMyAccount
define('CA.MyAccountCustomization.RoleBasedMyAccount.View'
,	[
	'ca_myaccountcustomization_rolebasedmyaccount.tpl'
	
	,	'CA.MyAccountCustomization.RoleBasedMyAccount.SS2Model'
	
	,	'Backbone'
	
	,'Header.Menu.MyAccount.View'

	,"MyAccountMenu"

	,"MenuTree.View"

	, "Backbone.View"

	,"Header.View"

	, "ProductDetails.Base.View"

	,"Profile.Model"

	, "Cart.Detailed.View"

	, "Utils"
	
    , "ProductList.Lists.View"
	
    ,"Backbone.Model"
	
    , "ProductList.ListDetails.View"
    ]
, function (
	ca_myaccountcustomization_rolebasedmyaccount_tpl
	
	,	RoleBasedMyAccountSS2Model
	
	,	Backbone
	
	,  HeaderMenuMyAccountView

	, myaccount

	, MenuTreeView

	, BackboneView

	, HeaderView

	, ProductDetailsBaseView

	, ProfileModel

	, CartDetailedView

	, Utils

    , ProductListListsView

    , BackboneModel

    , ProductListListDetailsView
)
{
    'use strict';

	_.extend(HeaderMenuMyAccountView.prototype, {

     getContext: _.wrap(HeaderMenuMyAccountView.prototype.getContext, function getContext(fn){
		var context = fn.apply(this, _.toArray(arguments).slice(1));
		    var role = this.options.application.role;
			MenuTreeView.prototype.render = _.wrap(MenuTreeView.prototype.render, function(...args){

			this.modifiedentries = this.backwardCompatibilitySanitize(
                 myaccount.MyAccountMenu.getInstance().getEntries() 
            );
			if(role == "purchasing"){
				   var menuitems = [];
				   var removeditem = ["home","billing","settings"];
				  _.each(this.modifiedentries, function(item){
					if(removeditem.includes(item.id)){

					}else{
						menuitems.push(item)
					}
				  })
			}
			else if(role == "sales"){	   
			   var menuitems = [];
                var removeditem = ["home","billing","settings"];
               _.each(this.modifiedentries, function(item){
                 if(removeditem.includes(item.id)){

                 }else{
                    menuitems.push(item)   
                 }
               })
               var removedsubentries = ["purchases","returns","reorderitems"];
               for(var i=0;i<menuitems.length;i++)
			   {
					if(menuitems[i].id == "orders"){
						console.log("test treee here", menuitems)
						var menuitemschildren = [];
						_.each(menuitems[i].children, function(child){
							if(removedsubentries.includes(child.id)){
		   
							}else{
								menuitemschildren.push(child)   
							}
						  })
						  menuitems[i].children = menuitemschildren;
					}
				}
			   
			}
			else {
				var menuitems = this.modifiedentries
			}

			this.fixedMenuItems = menuitems

			BackboneView.prototype.render.apply(this, args);
		
			})
			if(role !="fullaccess"){
				context.isToShow = false;
				context.isToShowpurchase = true;
				context.showCases = false;
				if(role == "sales"){
					context.isToShowpurchase = false;
				}
			}else{
				context.isToShow = true;
				context.isToShowpurchase = true;
				context.showCases = true;
			}
			return context;
        })
    }); 
	HeaderView.prototype.getContext = _.wrap(HeaderView.prototype.getContext, function (fn) {
		
        const profile = ProfileModel.getInstance();

        const is_loading = (!Utils.getPathFromObject(SC.CONFIGURATION, 'performance.waitForUserProfile', true) && (ProfileModel.getPromise().state() !== 'resolved'));

        const is_logged_in = (profile.get('isLoggedIn') === 'T' || (profile.get('isRecognized') === 'T' && SC.CONFIGURATION.get('header.showRecognizedShopper', true))) && profile.get('isGuest') === 'F';
            
		var context = fn.apply(this, _.toArray(arguments).slice(1));        
            
		context.islogin = !is_loading && is_logged_in;

        if(this.application.role == "sales")
		{

           context.showCart = false;

        }
        else{

           context.showCart = true;

        }

        return context;

	    });


	ProductDetailsBaseView.prototype.getContext = _.wrap(ProductDetailsBaseView.prototype.getContext, function (fn) {	

	var context = fn.apply(this, _.toArray(arguments).slice(1));		

	const item_model = this.model.get('item');
// @class ProductDetails.Base.View.Context
		return {
			// @property {Transaction.Line.Model} model
			model: this.model,
			// @property {String} pageHeader
			pageHeader: this.page_header,
			// @property {String} itemUrl
			itemUrl: item_model.get('_url') + this.model.getQuery(),
			// @property {Boolean} isItemProperlyConfigured
			isItemProperlyConfigured: item_model.isProperlyConfigured(),
			// @property {Boolean} isPriceEnabled
			isPriceEnabled: !ProfileModel.getInstance().hidePrices(),

			Toshowcart: (this.application.role == "sales")?false:true
		};

		return context;
	})
	CartDetailedView.prototype.getContext = _.wrap(CartDetailedView.prototype.getContext, function (fn) {	

		var context = fn.apply(this, _.toArray(arguments).slice(1));
		
		if(this.application.role == "sales"){
			context.toshowcart = false;
		}else{
			context.toshowcart = true;
		}
		return context;
	})	
	
	ProductListListDetailsView.prototype.getContext = _.wrap(ProductListListDetailsView.prototype.getContext, function(fn){
		
            var context = fn.apply(this, _.toArray(arguments).slice(1));
			
            if(this.parentView.parentView.application.role == "sales"){
                context.toshow = false;
            }else{
                context.toshow = true;
            }
            return context;
    });
		
});


// Model.js
// -----------------------
// @module Case
define("CA.MyAccountCustomization.RoleBasedMyAccount.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/RoleBasedMyAccount.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CA.MyAccountCustomization.RoleBasedMyAccount.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/RoleBasedMyAccount/SuiteScript2/RoleBasedMyAccount.Service.ss"
            ),
            true
        )
});
});



define(
	'CA.MyAccountCustomization.RoleBasedMyAccount'
,   [
		'CA.MyAccountCustomization.RoleBasedMyAccount.View'
	,	'CA.MyAccountCustomization.RoleBasedMyAccount.Model'	
	,	'ProductList.BulkActions.View'
	]
,   function (
		RoleBasedMyAccountView
	,	RoleBasedMyAccountModel	
	, 	ProductListBulkActionsView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (application)
		{
			var newmodel = new RoleBasedMyAccountModel();
			 var promise = newmodel.fetch()
			.then((result) => {
			 if (_.has(result, 'role') && _.has(result, 'user')) {
				 if(result.role == 1149)
					 application.role = 'sales';
				 else if(result.role == 1150)
					 application.role = 'purchasing';
				 else
					 application.role = 'fullaccess';
			 
			 }
			}); 
			application.waitForPromise(promise);
			
			ProductListBulkActionsView.prototype.getContext = _.wrap(ProductListBulkActionsView.prototype.getContext, function (fn) {
				
				var context = fn.apply(this, _.toArray(arguments).slice(1));
				
				if(application.role == "sales")
				{		
					context.toshowaddtocart = false
	
				}else{
	
					context.toshowaddtocart = true
				}		
				return context;
			});

		}
	};
});


};

extensions['Acme.whislistexport.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Acme/whislistexport/1.0.0/' + asset;
}

define('Acme.whislistexport.whislistexport.View'
,	[
	'acme_whislistexport_whislistexport.tpl'
	,	'Acme.whislistexport.whislistexport.SS2Model'
	, 'Backbone'
	,  "Backbone.Model"
	, "ProductList.Lists.View"
	, "Utils"
	, "Profile.Model"
    ]
, function (
	acme_whislistexport_whislistexport_tpl
	,	whislistexportSS2Model
	,   Backbone
	,   BackboneModel
	,   ProductListListsView
	,   Utils
	,   ProfileModel
)
{
	'use strict';


		ProductListListsView.prototype.getContext = _.wrap(ProductListListsView.prototype.getContext, function(fn){
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            if((this.application.role == "purchasing") || (this.application.role == "sales")){
                context.Showexportbutton = true;
            }else{
                context.Showexportbutton = false;
			}
             return context;
		});	
	
	var obj = ProductListListsView.prototype.events;
	obj['click [data-action="export-whislist"]'] = 'ExportWhislistAsmail',			
		ProductListListsView.prototype.events = obj;
	_.extend(ProductListListsView.prototype, {
			ExportWhislistAsmail: _.wrap(ProductListListsView.prototype.ExportWhislistAsmail, function ExportWhislistAsmail(fn) {
				var promise = jQuery.Deferred();
				const profile = ProfileModel.getInstance();
				var serviceUrl = Utils.getAbsoluteUrl('services/ProductList.Service.ss?sendemail=T&'+ 'email='+ profile.get("email"));
				new BackboneModel().fetch({ url: serviceUrl }).then(function (res) {					
					console.log("res");
					var product_list_results = res;
					
	var excelData = `<?xml version="1.0"?>
	<?mso-application progid="Excel.Sheet"?>
	<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
	xmlns:o="urn:schemas-microsoft-com:office:office"
	xmlns:x="urn:schemas-microsoft-com:office:excel"
	xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
	xmlns:html="http://www.w3.org/TR/REC-html40">`;
					
		excelData += `<Styles><Style ss:ID="s71">
					   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
					    <Font ss:Color="#FFFFFF" ss:Bold="1"/>
					    <Interior ss:Color="#073674" ss:Pattern="Solid"/>
					  </Style>
					  <Style ss:ID="s72">
					    <Font ss:Color="#000000" ss:Bold="1"/>
					  </Style>
					  <Style ss:ID="s73">
					   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
					  </Style>
					  <Style ss:ID="s74">
					   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
					  </Style>
					  <Style ss:ID="s75">
					   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
					  </Style>
					  <Style ss:ID="s76">
					   <Alignment ss:Horizontal="Left" ss:Vertical="Top" ss:WrapText="1"/>
					   <Font ss:Size="20" ss:Color="#FFFFFF"/>
					   <Interior ss:Color="#DD7E43" ss:Pattern="Solid"/>
					  </Style>
					 </Styles>`;
		excelData += '<Worksheet ss:Name="Wishlist">';
		excelData += '<Table><Column ss:AutoFitWidth="0" ss:Width="150" ss:StyleID="s73"/><Column ss:AutoFitWidth="0" ss:Width="300" ss:StyleID="s73"/><Column ss:AutoFitWidth="0" ss:Width="300" ss:StyleID="s73"/><Column ss:AutoFitWidth="0" ss:Width="70"  ss:StyleID="s74"/><Column ss:AutoFitWidth="0" ss:Width="100"/>';
		_.each(product_list_results, function (categoriesWithItem) {
			var catName = categoriesWithItem;
			excelData += '<Row><Cell ss:MergeAcross="2" ss:StyleID="s71"><Data ss:Type="String">' + catName.name + '</Data></Cell></Row>';
			if (catName.items.length == 0) {
				excelData += '<Row><Cell ss:StyleID="s72"><Data ss:Type="String">No Item Available</Data></Cell></Row>';	
			} else {
						excelData += '<Row><Cell ss:StyleID="s72"><Data ss:Type="String">Internalid</Data></Cell><Cell ss:StyleID="s72"><Data ss:Type="String">Name</Data></Cell><Cell ss:StyleID="s72"><Data ss:Type="String">Quantity</Data></Cell></Row>';
			}
			_.each(categoriesWithItem.items, function (item) { 
				excelData += '<Row><Cell><Data ss:Type="String">'+ item.item.internalid +'</Data></Cell><Cell><Data ss:Type="String">' + item.item.displayname + '</Data></Cell><Cell><Data ss:Type="String">' + item.quantity + ' </Data></Cell></Row>';
			});
		});
		excelData += '</Table></Worksheet></Workbook>';
		var blob = new Blob([excelData], { type: "application/vnd.ms-excel" });
		var link = URL.createObjectURL(blob);
		var a = document.createElement("a");
		a.download = 'Wishlist.xls';
		a.href = link;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	});
		   return promise;
	    })
	});
});


// Model.js
// -----------------------
// @module Case
define("Acme.whislistexport.whislistexport.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/whislistexport.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Acme.whislistexport.whislistexport.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/whislistexport/SuiteScript2/whislistexport.Service.ss"
            ),
            true
        )
});
});



define(
	'Acme.whislistexport.whislistexport'
,   [
		'Acme.whislistexport.whislistexport.View'
	]
,   function (
		whislistexportView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			
			// if(layout)
			// {
			// 	layout.addChildView('Header.Logo', function() { 
			// 		return new whislistexportView({ container: container });
			// 	});
			// }

		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["Kodella.KDDownloadPrice.KDDownloadPrice.View","Kodella.KDDownloadPrice.KDDownloadPrice.Model","Kodella.KDDownloadPrice.KDDownloadPrice.SS2Model","Kodella.KDDownloadPrice.KDDownloadPrice2.View","Kodella.KDGlobalExtension.KDGlobalExtension.View","Kodella.KDGlobalExtension.KDGlobalExtension.Model","Kodella.KDGlobalExtension.KDGlobalExtension.SS2Model","Kodella.KDTermsOfUseModal.KDTermsOfUseModal.View","Kodella.KDTermsOfUseModal.KDTermsOfUseModal.Model","Kodella.KDTermsOfUseModal.KDTermsOfUseModal.SS2Model","CA.MyAccountCustomization.RoleBasedMyAccount.View","CA.MyAccountCustomization.RoleBasedMyAccount.Model","CA.MyAccountCustomization.RoleBasedMyAccount.SS2Model","Acme.whislistexport.whislistexport.View","Acme.whislistexport.whislistexport.Model","Acme.whislistexport.whislistexport.SS2Model"];
try{
	extensions['Kodella.KDDownloadPrice.1.0.0']();
	SC.addExtensionModule('Kodella.KDDownloadPrice.KDDownloadPrice');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDGlobalExtension.1.0.0']();
	SC.addExtensionModule('Kodella.KDGlobalExtension.KDGlobalExtension');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDTermsOfUseModal.1.0.0']();
	SC.addExtensionModule('Kodella.KDTermsOfUseModal.KDTermsOfUseModal');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.MyAccountCustomization.1.0.0']();
	SC.addExtensionModule('CA.MyAccountCustomization.RoleBasedMyAccount');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Acme.whislistexport.1.0.0']();
	SC.addExtensionModule('Acme.whislistexport.whislistexport');
}
catch(error)
{
	console.error(error);
}

