var extensions = {};

extensions['TCI.FooterExt.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TCI/FooterExt/1.0.0/' + asset;
}

// @module TCI.FooterExt.ExtraFooterLinks
define('TCI.FooterExt.ExtraFooterLinks.View'
,	[
	'tci_footerext_extrafooterlinks.tpl'
	,	'Backbone.View'
    ]
, function (
	tci_footerext_extrafooterlinks_tpl
	,	BackboneView
)
{
    'use strict';

	// @class TCI.FooterExt.ExtraFooterLinks.View @extends Backbone.View
	return BackboneView.extend({

		template: tci_footerext_extrafooterlinks_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new ExtraFooterLinksModel();
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

		//@method getContext @return TCI.FooterExt.ExtraFooterLinks.View.Context
	,	getContext: function getContext()
		{
			//@class TCI.FooterExt.ExtraFooterLinks.View.Context
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
define("TCI.FooterExt.ExtraFooterLinks.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
});
});



define(
	'TCI.FooterExt.ExtraFooterLinks'
,   [
		'TCI.FooterExt.ExtraFooterLinks.View'
	]
,   function (
		ExtraFooterLinksView
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
			
			if(layout)
			{
				// layout.addChildView('Header.Logo', function() { 
				// 	return new ExtraFooterLinksView({ container: container });
				// });
			}

		}
	};
});


};

extensions['TCI.ManageOrdersExt.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TCI/ManageOrdersExt/1.0.0/' + asset;
}


define(
	'TCI.ManageOrdersExt.TrackMyOrder'
,   [
		'TCI.ManageOrdersExt.TrackMyOrder.View'
	]
,   function (
		TrackMyOrderView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{			
			/** @type {LayoutComponent} */
			var pageType = container.getComponent('PageType');
			
			console.log('pageType', pageType);
			pageType.registerPageType({
                name: 'manageorders_trackmyorder',
                routes: ['track-your-order'],
                view: TrackMyOrderView,
                defaultTemplate: {
                    name: 'tci_manageordersext_trackmyorder.tpl',
                    displayName: 'Track Your Order'
                }
            });

		}
	};
});


// @module TCI.ManageOrdersExt.TrackMyOrder
define('TCI.ManageOrdersExt.TrackMyOrder.View'
,	[
		'Backbone.View',
		'TCI.ManageOrdersExt.TrackMyOrder.Model',
		'tci_manageordersext_trackmyorder.tpl',
		'Configuration',
		'underscore'
    ]
, function (
	BackboneView,
	TrackYourOrderModel,
	tci_manageordersext_trackmyorder_tpl,
	Configuration,
	_
)
{
    'use strict';

	console.log('PageTypeBaseView');

	var TrackMyOrderView = BackboneView.extend({
		template: tci_manageordersext_trackmyorder_tpl,
		title: _('Track Your Order').translate(),
		events: {
			'submit form': 'saveForm'
		},
		initialize: function (options) {
			// this.application = options.application;
			console.log('TCI.ManageOrdersExt.TrackMyOrder.View');
		},
		getBreadcrumbPages: function () {
			// return [{href: '/manage-orders', text: _('Manage Orders').translate()},{href: '/track-your-order', text: _('Track Your Order').translate()}];
		},
		saveForm: function (e) {
			console.log('saveForm');
			var order;
			var zip;
			var self = this;
			var trackYourOrder = new TrackYourOrderModel();              
			if (this.$el.find('[name="order"]').val() || this.$el.find('[name="zip"]').val()) {
				e.preventDefault();
				order = this.$el.find('[name="order"]').val();
				zip = this.$el.find('[name="zip"]').val();
			} else {
				order = this.orderid;
				zip = this.zipcode;
			}
			console.log('fetch');
			if(order && zip) {
				console.log('fetch');
				trackYourOrder.fetch({
					data: {
					zip: zip,
					order: order
					}
				}).then(function (results) {
					if (results.success) {
						self.showTrackInfo = true;
						self.trackingInfo = results.data;
					} else {
						self.showTrackInfo = false;
						if (results.status === 500 && results.code === 'ERR_ORDER_NOT_FOUND') {
							self.notAvaliableContent = Configuration.get('trackyourorder.notrackinfo');
						} else {
							self.notAvaliableContent = 'Missing required fields';
						}
						self.showNotAvaliable = true;
					}
					self.render();
				});
			} else {
				self.showTrackInfo = false;
				self.showNotAvaliable = false;                  
				self.render();                
				self.showError(_('You must enter both order number and zip code').translate());
			}
		},
		getContext: function getContext () {
            return {
				showTrackInfo: this.showTrackInfo,
				notAvaliable: this.notAvaliableContent,
				showNotAvaliable: this.showTrackInfo? false : this.showNotAvaliable,
				items: this.trackingInfo,
				name: this.showTrackInfo ? this.trackingInfo[0].name : null,
				shipToName: this.showTrackInfo ? this.trackingInfo[0].shipToName : null,
				poNumber: this.showTrackInfo ? this.trackingInfo[0].poNumber : null,
				orderNumber: this.showTrackInfo ? this.trackingInfo[0].orderNumber : null,
				orderDate: this.showTrackInfo ? this.trackingInfo[0].orderDate : null,
				trackTitle: Configuration.get('trackyourorder.title'),
				trackDescription: Configuration.get('trackyourorder.subtitle'),
				orderNumberLabel: Configuration.get('trackyourorder.orderNumberLabel'),
				billZipLabel: Configuration.get('trackyourorder.billZipLabel')
            }
        }
	});
	return TrackMyOrderView;
});


// Model.js
// -----------------------
// @module Case
define("TCI.ManageOrdersExt.TrackMyOrder.Model", ["Backbone", "Utils", "underscore"], function(
    Backbone,
    Utils,
    _
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        validation: {
            order: { required: true, msg: _('Order Number is required').translate() },
            zip: { required: true, msg: _('Billing Zip Code is required').translate() }
        },
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/TrackMyOrder.Service.ss"
            )
        )
        
});
});


define(
  'TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.Model',
[
  'Utils',
  'underscore'
  , 'Backbone'
]
, function (
  Utils,
  _
  , Backbone
)
{
  'use strict';  
  return Backbone.Model.extend({
    //@property {String} urlRoot
    urlRoot: Utils.getAbsoluteUrl(
      getExtensionAssetsPath(
          "services/RequestAnInvoice.PrintButton.Service.ss"
      )
  )
  });
});



define(
  'TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.View',
[
'tci_manageordersext_requestaninvoice_print_button.tpl',
'Backbone.View',
'underscore',
'TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.Model'
],
function (
  find_invoice_print_button_tpl,
  BackboneView,
  _,
  FindInvoicePrintButtonModel
  )
  {
    'use strict';

    var RequestAnInvoiceView = BackboneView.extend({
      template: find_invoice_print_button_tpl,
      events: {
        'click [data-type="print-invoice"]': 'printInvoice'
      },
      initialize: function initialize () {
        Backbone.View.prototype.initialize.apply(this, arguments);
        this.trackingInfo = this.options.trackingInfo;
      },
      submitHandler: function submitHandler (e) {
        return this.printInvoice(e);
      },
      printInvoice: function printInvoice (e) {
        console.log('this.trackingInfo', this.trackingInfo);
        e.preventDefault();
        var printModel = new FindInvoicePrintButtonModel();
        printModel.fetch({
          data: this.trackingInfo
        }).then(function (results) {
          console.log('results', results)
          var baseurl = SC.ENVIRONMENT.embEndpointUrl.url.search('com') + 3;
          baseurl = SC.ENVIRONMENT.embEndpointUrl.url.slice(0, baseurl);
          var url = results && results.url ? baseurl + results.url : null
          window.open(url);
        });
      }
      ,	getContext: function getContext (){}
    });

    return RequestAnInvoiceView;
  });



// @module TCI.ManageOrdersExt.RequestAnInvoice
define('TCI.ManageOrdersExt.RequestAnInvoice.View'
,	[
	'tci_manageordersext_requestaninvoice.tpl',
	'Backbone.View',
	'TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.View',
	'TCI.ManageOrdersExt.RequestAnInvoice.Model',
	'Configuration',
	'underscore'
    ]
, function (
	tci_manageordersext_requestaninvoice_tpl,
	BackboneView,
	RequestAnInvoicePrintButtonView,
	RequestAnInvoiceModel,
	Configuration,
	_
)
{
    'use strict';

	var RequestAnInvoiceView = BackboneView.extend({
		template: tci_manageordersext_requestaninvoice_tpl,
		events: {
			'submit form': 'saveForm'
		},
		page: _('Request an Invoice').translate(),
		title: _('Request an Invoice').translate(),

		initialize: function (options) {
			// this.application = options.application;
			console.log('TCI.ManageOrdersExt.RequestAnInvoice.View');
		},
		childViews : {
		// 'EmailInvoice': function ()
		// {
		//   return new FindInvoiceEmailButtonView({
		//     application: this.options.application,
		//     trackingInfo: this.trackingInfo
		//   });
		// },
			'PrintInvoice': function () {
				return new RequestAnInvoicePrintButtonView({
					application: this.options.application,
					trackingInfo: this.trackingInfo
					});
			}
		},
		getBreadcrumbPages: function () {
			// return [{href: '/manage-orders', text: _('Manage Orders').translate()},{href: '/request-an-invoice', text: _('Request an Invoice').translate()}];
		},
		saveForm: function (e) {
			var order;
			var zip;
			var self = this;
			var findInvoice = new RequestAnInvoiceModel();              
			if (this.$el.find('[name="order"]').val() || this.$el.find('[name="zip"]').val()) {
				e.preventDefault();
				order = this.$el.find('[name="order"]').val();
				zip = this.$el.find('[name="zip"]').val();
			} else {
				order = this.orderid;
				zip = this.zipcode;
			}
			if(order && zip) {
				findInvoice.fetch({
					data: {
						zip: zip,
						order: order
					}
				}).then(function (results) {
					if (results.success) {
						self.showTrackInfo = true;
						self.trackingInfo = results.data;
					} else {
						self.showTrackInfo = false;
						results.message = "We could not find an order matching the PO number you entered. If your PO has leading zeros, you must include those. Additional questions? <a href='https://www.teachtci.com/contact-us/'>Contact us</a>.";
						self.notAvaliableContent = results;
						self.showNotAvaliable = true;
					}
					self.render();
				});
			} else {
				self.showTrackInfo = false;
				self.showNotAvaliable = false;                  
				self.render();                
				self.showError(_('You must enter both order number and zip code').translate());
			}
		},
		getContext: function () {
			return {
				showTrackInfo: this.showTrackInfo,
				notAvaliable: this.notAvaliableContent,
				showNotAvaliable: this.showTrackInfo? false : this.showNotAvaliable,
				hasstatus: this.trackingInfo && this.trackingInfo.shipstatus ? true : false, 
				status: this.trackingInfo && this.trackingInfo.shipstatus,
				items: this.trackingInfo && this.trackingInfo.items,
				contackInfo: this.trackingInfo && this.trackingInfo.contactinfo,
				trackingInfo: this.trackingInfo,
				findInvoiceTitle: Configuration.get('findInvoice.title'),
				findInvoiceDescription: Configuration.get('findInvoice.subtitle')
			}
		}
	});
	return RequestAnInvoiceView;
});



define(
	'TCI.ManageOrdersExt.RequestAnInvoice'
,   [
		'TCI.ManageOrdersExt.RequestAnInvoice.View'
	]
,   function (
		RequestAnInvoiceView
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
			
			if(layout)
			{
				layout.addChildView('Header.Logo', function() { 
					return new RequestAnInvoiceView({ container: container });
				});
			}

		}
	};
});


// Model.js
// -----------------------
// @module Case
define("TCI.ManageOrdersExt.RequestAnInvoice.Model", ["Backbone", "Utils", "underscore"], function(
    Backbone,
    Utils,
    _
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        validation: {
            order: { required: true, msg: _('Order Number is required').translate() },
            zip: { required: true, msg: _('Billing Zip Code is required').translate() }
        },
        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/RequestAnInvoice.Service.ss"
            )
        )
        
});
});


// @module TCI.ManageOrdersExt.RequestAReturn
define('TCI.ManageOrdersExt.RequestAReturn.View'
,	[
	'tci_manageordersext_requestareturn.tpl',
	'Backbone.View',
	'TCI.ManageOrdersExt.RequestAReturn.Items.View',
	'TCI.ManageOrdersExt.RequestAReturn.Model',
	'Configuration',
	'jQuery',
	'underscore'
    ]
, function (
	tci_manageordersext_requestareturn_tpl,
	BackboneView,
	ReturnsItemsView,
	ReturnsModel,
	Configuration,
	$,
	_
)
{
    'use strict';

	var RequestAReturnView = BackboneView.extend({
		template: tci_manageordersext_requestareturn_tpl,
		events: {
		  'submit form': 'saveForm'
		},
		title: _('Returns').translate(),
		initialize: function (options) {
		//   this.application = options.application;
		},
		childViews : {
			'ReturnItems': function () {
				return new ReturnsItemsView({
				application: this.application,
				eligible: this.trackingInfo,
				ineligible: this.ineligibleItems,
				reason: this.reasonValue,
				name: this.name,
				email: this.email,
				phone: this.phone,
				order: this.order
				});
			}
		},
		getBreadcrumbPages: function () {  
		  //return [{href: '/manage-orders', text: _('Manage Orders').translate()},{href: '/returns', text: _('Returns').translate()}];
		},
		saveForm: function (e) {
			console.log('saveForm');
			var self = this;
			var returns = new ReturnsModel();              
			if (this.$el.find('[name="order"]').val() || this.$el.find('[name="zip"]').val() || $('input[name=reason]:checked').val() || $('input[name=name]').val() || $('input[name=email]').val() || $('input[name=phone]').val()) {
				e.preventDefault();
				this.order = this.$el.find('[name="order"]').val();
				this.zip = this.$el.find('[name="zip"]').val();
				this.reason = $('input[name=reason]:checked').val();
				this.reasonValue = $('input[name=reason]:checked').data('value');
				this.name = $('input[name=name]').val();
				this.email = $('input[name=email]').val();
				this.phone = $('input[name=phone]').val();
			}
			if (this.order && this.zip && this.reason && this.name && this.email && this.phone) {
				var data = {
					zip: this.zip,
					order: this.order,
					reason: this.reason,
					name: this.name,
					email: this.email,
					phone: this.phone
				};
				returns.fetch({
					data: data
				}).then(function (results) {
					if (results.success) {
						self.showTrackInfo = true;
						self.trackingInfo = results.eligible;
						self.ineligibleItems = results.ineligible;
					} else {
						self.showTrackInfo = false;
						self.notAvaliableContent = results;
						self.showNotAvaliable = true;
					}
					self.render();
					// jQuery('html, body').animate({
					// 	scrollTop: jQuery(".return-container").offset().top
					// }, 1000);
				});
			} else {
				self.showTrackInfo = false;
				self.showNotAvaliable = false;                  
				self.render();                
				self.showError(_('You must populate every field').translate());
			}
		},
		getContext: function () {
			return {
				showTrackInfo: this.showTrackInfo,
				notAvaliable: this.notAvaliableContent,
				showNotAvaliable: this.showTrackInfo? false : this.showNotAvaliable,
				hasstatus: this.trackingInfo && this.trackingInfo.shipstatus ? true : false, 
				status: this.trackingInfo && this.trackingInfo.shipstatus,
				items: this.trackingInfo && this.trackingInfo.items,
				contackInfo: this.trackingInfo && this.trackingInfo.contactinfo,
				trackingInfo: this.trackingInfo,
				ineligible: this.ineligibleItems,
				returnTitle: Configuration.get('customReturns.title'),
				returnDescription: Configuration.get('customReturns.subtitle')
			}
		}
	});

	return RequestAReturnView;
});



define(
	'TCI.ManageOrdersExt.RequestAReturn'
,   [
		'TCI.ManageOrdersExt.RequestAReturn.View'
	]
,   function (
		RequestAReturnView
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
			
			if(layout)
			{
				layout.addChildView('Header.Logo', function() { 
					return new RequestAReturnView({ container: container });
				});
			}

		}
	};
});


// Model.js
// -----------------------
// @module Case
define(
'TCI.ManageOrdersExt.RequestAReturn.Model', 
[
    'Backbone', 
    'Utils', 
    'underscore'
], function(
    Backbone,
    Utils,
    _
) {
    'use strict';

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        validation: {
            order: { required: true, msg: _('Order Number is required').translate() },
            zip: { required: true, msg: _('Billing Zip Code is required').translate() },
            reason: { required: true, msg: _('Reason for Return is required').translate() },
            name: { required: true, msg: _('Name is required').translate() },
            email: {
              required: true
              ,    pattern: 'email'
              ,    msg: _('Please provide a valid email').translate()
            },
            phone: { required: true, fn: _.validatePhone }
        },
        
        // @property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/RequestAReturn.Service.ss"
            )
        )
    });
});


// @module TCI.ManageOrdersExt.ManageOrdersExt
define('TCI.ManageOrdersExt.ManageOrdersExt.View'
,	[
	'tci_manageordersext_manageordersext.tpl'
	
	,	'TCI.ManageOrdersExt.ManageOrdersExt.SS2Model'
	
	,	'Backbone'
    ]
, function (
	tci_manageordersext_manageordersext_tpl
	
	,	ManageOrdersExtSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class TCI.ManageOrdersExt.ManageOrdersExt.View @extends Backbone.View
	return Backbone.View.extend({

		template: tci_manageordersext_manageordersext_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new ManageOrdersExtModel();
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

		//@method getContext @return TCI.ManageOrdersExt.ManageOrdersExt.View.Context
	,	getContext: function getContext()
		{
			//@class TCI.ManageOrdersExt.ManageOrdersExt.View.Context
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
define("TCI.ManageOrdersExt.ManageOrdersExt.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/ManageOrdersExt.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("TCI.ManageOrdersExt.ManageOrdersExt.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ManageOrdersExt/SuiteScript2/ManageOrdersExt.Service.ss"
            ),
            true
        )
});
});


// @module TCI.ManageOrdersExt.RequestAReturn
define('TCI.ManageOrdersExt.RequestAReturn.Items.View'
,	[
	'Backbone.View',
  'tci_manageordersext_requestareturn_items.tpl',
  'TCI.ManageOrdersExt.RequestAReturn.Items.Model',
  'GlobalViews.Confirmation.View',
  'jQuery',
  'underscore',
    ]
, function (
	BackboneView,
  tci_manageordersext_requestareturn_items_tpl,
  RequestAReturnItemsModel,
  GlobalViewsConfirmationView,
  $,
  _
)
{
    'use strict';

	var RequestAReturnItemsView = BackboneView.extend({
		template: tci_manageordersext_requestareturn_items_tpl,
		events: {
		  'click .request-line-item-return': 'saveForm',
      'change .returnQuantity': 'updateQuantity'
		},
		initialize: function (options) {
      this.application = options.application;
      this.trackingInfo = options.eligible;
      this.ineligibleItems = options.ineligible;
      this.reason = options.reason;
      this.name = options.name;
      this.email = options.email;
      this.phone = options.phone;
      this.order = options.order;
    },
		childViews : {},
    updateQuantity: function (e) {
      var $target = $(e.target);
      var value = parseInt($target.val());
      var max = parseInt($target.attr('max'));
      var min = parseInt($target.attr('min'));
      var $checkboxToUpdate = $target
      .closest('.return-eligibility-eligible-items')
      .find('input[type="checkbox"]');
      var id = $checkboxToUpdate.attr('data-id');
      var rate = parseFloat($checkboxToUpdate.attr('data-rate'));
      var quantity;
      var updatedAmount;
      if (value <= max && value >= min) {
        $target.val(value);
        $checkboxToUpdate.attr('data-quantity', value);
      } else if (value < min) {
        $target.val(min);
        $checkboxToUpdate.attr('data-quantity', min);
      } else if (value > max) {
        $target.val(max);
        $checkboxToUpdate.attr('data-quantity', max);
      }
      quantity = parseInt($checkboxToUpdate.attr('data-quantity'));
      updatedAmount = '$' + (rate * quantity).toFixed(2);
      $checkboxToUpdate.attr('data-amount', updatedAmount);
      this.trackingInfo.forEach(function (item) {
        if (item.id === id) {
            item.inputAmount = $checkboxToUpdate.attr('data-amount');
            item.inputQuantity = $checkboxToUpdate.attr('data-quantity');
            $checkboxToUpdate.attr('data-inputAmount', item.inputAmount);
            $checkboxToUpdate.attr('data-inputQuantity', item.inputQuantity);
        }
      });
      this.render();
    },
    saveForm: function () {
      var self = this;
      var returns = new RequestAReturnItemsModel();
      var $checkbox = $('input[type="checkbox"]:checked')
      var itemsToReturn = [];
      for (var i = 0; i < $checkbox.length; i++) {
        if ($checkbox[i].dataset) {
          var itemToReturn = {};
          itemToReturn.amount = $checkbox[i].dataset.inputamount ? $checkbox[i].dataset.inputamount : $checkbox[i].dataset.amount;
          $checkbox[i].dataset.description ? itemToReturn.description = $checkbox[i].dataset.description : null;
          $checkbox[i].dataset.id ? itemToReturn.id = $checkbox[i].dataset.id : null;
          $checkbox[i].dataset.itemno ? itemToReturn.itemno = $checkbox[i].dataset.itemno : null;
          itemToReturn.quantity = $checkbox[i].dataset.inputquantity ?  $checkbox[i].dataset.inputquantity : $checkbox[i].dataset.quantity;
          $checkbox[i].dataset.rate ? itemToReturn.rate = $checkbox[i].dataset.rate : null;
        }
        itemsToReturn.push(itemToReturn);
      }
      if (itemsToReturn.length) {
        returns.fetch({
          data: {
            itemsToReturn: JSON.stringify(itemsToReturn),
            name: this.name,
            email: this.email,
            phone: this.phone,
            reason: this.reason,
            order: this.order
          }
        }).then(function () {          
          var returnConfirmationView = new GlobalViewsConfirmationView({
          title: _('Return Request Submitted').translate()
          ,	body: _('We have received your return request. We will review your request and get back to you within 2 business days.').translate()
          ,	confirmLabel: _('OK').translate()
          ,	hideCancelButton: true
          ,	autohide: true
          });
          self.application.getLayout().showInModal(returnConfirmationView);
        });
      }
    },
		getContext: function () {
      return {
        trackingInfo: this.trackingInfo,
        ineligible: this.ineligibleItems,
        showIneligible: !!this.ineligibleItems.length,
        reason: this.reason,
        name: this.name,
        email: this.email,
        phone: this.phone
      }
		}
	});

	return RequestAReturnItemsView;
});


// Model.js
// -----------------------
// @module Case
define(
  'TCI.ManageOrdersExt.RequestAReturn.Items.Model', 
  [
      'Backbone', 
      'Utils', 
      'underscore'
  ], function(
      Backbone,
      Utils,
      _
  ) {
      'use strict';
  
      return Backbone.Model.extend({
          // @property {String} urlRoot
          urlRoot: Utils.getAbsoluteUrl(
              getExtensionAssetsPath(
                  "services/RequestAReturn.Items.Service.ss"
              )
          )
      });
  });
  

// @module TCI.ManageOrdersExt.ManageOrdersExt
define('TCI.ManageOrdersExt.ManageOrdersExt.HeaderLink.View'
,	[
	'tci_manageordersext_manageordersext_header_link.tpl',
	'Backbone.View',
	'Configuration'
    ]
, function (
	tci_manageordersext_manageordersext_header_link_tpl,
	BackboneView,
	Configuration
)
{
    'use strict';
	var ManageMyOrdersHeaderLinkView = BackboneView.extend({
		template: tci_manageordersext_manageordersext_header_link_tpl,
		initialize: function initialize () {
			console.log('ManageMyOrdersHeaderLinkView');
			console.log('manageOrder.title', Configuration.get('manageOrder.title'));
		},
		getContext: function getContext (){
			return {
				showTitle: Configuration.get('manageOrder.showLink'),
				linkText: Configuration.get('manageOrder.title')
			}
		}
	  });
  
	return ManageMyOrdersHeaderLinkView;
});



define(
	'TCI.ManageOrdersExt.ManageOrdersExt'
,   [
		'TCI.ManageOrdersExt.TrackMyOrder.View',
		'TCI.ManageOrdersExt.RequestAnInvoice.View',
		'TCI.ManageOrdersExt.RequestAReturn.View',
		'TCI.ManageOrdersExt.ManageOrdersExt.HeaderLink.View',
		'Header.View'
	]
,   function (
		TrackMyOrderView,
		RequestAnInvoice,
		RequestAReturn,
		ManageMyOrderHeaderLink,
		HeaderView
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
			var PageType  = container.getComponent('PageType');
			PageType.registerPageType({
                name: 'manageorders_trackmyorder',
                routes: ['track-your-order'],
                view: TrackMyOrderView,
                defaultTemplate: {
                    name: 'tci_manageordersext_trackmyorder.tpl',
                    displayName: 'Track Your Order'
                },
				application: this.application
            });

			PageType.registerPageType({
                name: 'manageorders_requestaninvoice',
                routes: ['request-an-invoice'],
                view: RequestAnInvoice,
                defaultTemplate: {
                    name: 'tci_manageordersext_requestaninvoice.tpl',
                    displayName: 'Request An Invoice'
                },
				application: this.application
            });

			PageType.registerPageType({
                name: 'manageorders_requestanreturn',
                routes: ['request-a-return'],
                view: RequestAReturn,
                defaultTemplate: {
                    name: 'tci_manageordersext_requestareturn.tpl',
                    displayName: 'Request A Return'
                },
				application: this.application
            });

			// PageType.registerPageType({
            //     name: 'manageorders_headerlink',
            //     routes: ['manage-orders'],
            //     view: ManageMyOrderHeaderLink,
            //     defaultTemplate: {
            //         name: 'tci_manageordersext_manageordersext_header_link.tpl',
            //         displayName: 'Manage My Orders'
            //     },
			// 	application: this.application
            // });
			HeaderView.addChildViews({
				'ManageOrderLink': function wrapperFunction() {
					return function() {
						return new ManageMyOrderHeaderLink();
					};
				}
			});

			console.log('PageType', PageType);
			console.log('PageType', layout);

		}
	};
});


};

extensions['TCI.PCP_PLPCustomization.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/TCI/PCP_PLPCustomization/1.0.0/' + asset;
}

// @module TCI.PCP_PLPCustomization.PCPPLPModule
define('TCI.PCP_PLPCustomization.PCPPLPModule.View'
,	[
	'tci_pcp_plpcustomization_pcpplpmodule.tpl'
	
	,	'TCI.PCP_PLPCustomization.PCPPLPModule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	tci_pcp_plpcustomization_pcpplpmodule_tpl
	
	,	PCPPLPModuleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class TCI.PCP_PLPCustomization.PCPPLPModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: tci_pcp_plpcustomization_pcpplpmodule_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new PCPPLPModuleModel();
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

		//@method getContext @return TCI.PCP_PLPCustomization.PCPPLPModule.View.Context
	,	getContext: function getContext()
		{
			//@class TCI.PCP_PLPCustomization.PCPPLPModule.View.Context
			// this.message = this.message || 'Hello World!!'
			// return {
			// 	message: this.message
			// };
		}
	});
});


/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

define(
    'TCI.PCP_PLPCustomization.Facets.Browse.CategoryHeading.ViewExt', [
        'Facets.Browse.CategoryHeading.View', 'underscore', 'Backbone'
    ],
    function (
        FacetsBrowseCategoryHeadingView, _, Backbone
    ) {
        'use strict';

        _.extend(FacetsBrowseCategoryHeadingView.prototype, {

            getContext: _.wrap(FacetsBrowseCategoryHeadingView.prototype.getContext, function getContext(fn) {



                var context = fn.apply(this, _.toArray(arguments).slice(1));
                var siblings = this.model.get('siblings');
                var self = this;
                if (siblings && siblings.length) {

                    var urlfragment = this.model.get('fullurl').split('/');
                    urlfragment = _.last(urlfragment);
                    var currentVersion = {
                        canonical: this.model.get('canonical'),
                        categories: this.model.get('categories') || [],
                        description: this.model.get('description'),
                        fullurl: this.model.get('fullurl'),
                        idpath: this.model.get('idpath'),
                        internalid: this.model.get('internalid'),
                        isVersionDisplayed: this.model.get('isVersionDisplayed'),
                        isprimaryurl: this.model.get('isprimaryurl'),
                        name: this.model.get('name'),
                        parenturl: this.model.get('parenturl'),
                        sequencenumber: this.model.get('sequencenumber'),
                        urlfragment: urlfragment
                    }
                    siblings.push(currentVersion);
                    if(!_.isUndefined(this.model.get('description')))
                    {
                        var isCurrent = this.model.get('description').toLowerCase() == 'current' ? true : false;
                    }
                 
                    if(isCurrent == false)
                    {
                        var maxArr = [];
                        _.each(siblings,function(val){
                            var urlFraArray = val.urlfragment.split('-');
                            _.each(urlFraArray, function (value) {
                              
                                    if (!_.isNaN(parseInt(value))) {
                                        maxArr.push(parseInt(value))
                                    }
                            })
                        })
                        var max = Math.max(...maxArr);
                        max = String(max);
                        
                        _.each(siblings,function(val){
                          if(val.urlfragment.indexOf(max) != -1)
                          {
                           
                            val.description = "Current" ;
                          }
                          else{
                             _.each(maxArr,function(arrVal){
                                 if(String(arrVal).indexOf(val.urlfragment) != -1) 
                                 {
                                    val.description = String(arrVal);
                                 }
                             }) 
                          }
                        })
                          
                    }
                    else{
                        _.each(siblings, function (val) {

                            if (_.isUndefined(val.description)) {
                                var urlFraArray = val.urlfragment.split('-');
                                _.each(urlFraArray, function (value) {
                                  
                                        if (!_.isNaN(parseInt(value))) {
                                            val.description =  String(value);
                                        }
                                    
    
                                })
                            }
    
                        })
            
                    }
                   
                    siblings = _.sortBy(siblings, function (sibling) {
                        return !_.isUndefined(sibling.description) ? sibling.description : sibling.name;
                    })
                    siblings = siblings.reverse();
               
                    for (var i = 0; i < siblings.length; i++) {
                        siblings[i].isVersionDisplayed = false;

                        if (!_.isUndefined(this.model.get('description')) && !_.isUndefined(siblings[i].description) && this.model.get('description') === siblings[i].description) {
                            siblings[i].isVersionDisplayed = true;
                        }
                    }
                }

                context.hasDescription = this.model.get('description') !== '' && !_.isUndefined(this.model.get('description'));
                context.hasOldVersion = !_.isUndefined(this.model.get('siblings')) ? this.model.get('siblings').length > 0 : false;
                context.siblings = siblings;
              

                return context;

            })

        })

    });

/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

define(
	'TCI.PCP_PLPCustomization.Facets.Browse.ViewExt'
	,	[
		'Facets.Browse.View'
		, 'underscore'
		,	'Backbone'
	]
	,	function (
		FacetsBrowseView	
		, _
		,	Backbone
	)
	{
		'use strict';

        _.extend(FacetsBrowseView.prototype, {

            initialize: _.wrap(FacetsBrowseView.prototype.initialize, function (fn) {
                fn.apply(this, _.toArray(arguments).slice(1));
             
                this.application.getLayout().on('afterAppendView', function () {
                    if ($('.facets-facet-browse-category-cells-container:has(*)').length) {
                        $('.facets-facet-browse-category-cells-container').show();
                    } else {
                        $('.facets-facet-browse-category-cells-container').hide();
                    }
                })
        
            })
        })

	});



/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

define(
	'TCI.PCP_PLPCustomization.Facets.ItemCell.ViewExt'
	,	[
		'Facets.ItemCell.View'
		, 'underscore'
		,	'Backbone'
	]
	,	function (
		FacetsItemCellView
		, _
		,	Backbone
	)
	{
		'use strict';

        _.extend(FacetsItemCellView.prototype, {
			getContext: _.wrap(FacetsItemCellView.prototype.getContext, function getContext(fn) {
			

				var context = fn.apply(this, _.toArray(arguments).slice(1));
		
				var onlinematrixpricerange = this.model.get('onlinematrixpricerange');
				var prices = [];
		
				if(onlinematrixpricerange) {
					var range = onlinematrixpricerange.split(' ');
					var formatter = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					});
		
					_.each(range, function(x) {
						prices.push(formatter.format(parseInt(x)));
					});
		
				}
		
				context.otherName = this.model.get('storedescription');
				context.storeDescription = this.model.get('storedescription');
				context.featuredDescription = this.model.get('featureddescription');
				context.price = prices.length > 0 ? prices.join(' - ') : this.model.get('onlinecustomerprice_formatted');
				context.isbn = this.model.get('custitem8');
				var isItemWithReferenceTexts = this.model.get('itemid') === 'TB-MSSB';
				context.isItemWithReferenceTexts = isItemWithReferenceTexts
		
				return context;
		
			})

        })

	});



// Model.js
// -----------------------
// @module Case
define("TCI.PCP_PLPCustomization.PCPPLPModule.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/PCPPLPModule.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("TCI.PCP_PLPCustomization.PCPPLPModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/PCPPLPModule/SuiteScript2/PCPPLPModule.Service.ss"
            ),
            true
        )
});
});


/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

define(
	'TCI.PCP_PLPCustomization.Cart.AddToCart.Button.ViewExt'
	,	[
		'Cart.AddToCart.Button.View'
		, 'underscore'
		,	'Backbone'
        ,   'LiveOrder.Line.Model'
        , 'Cart.Confirmation.Helpers'
	]
	,	function (
		CartAddToCartButtonView	
		, _
		,	Backbone
        ,  LiveOrderLineModel
        ,  CartConfirmationHelpers
	)
	{
		'use strict';

        _.extend(CartAddToCartButtonView.prototype, {

            addToCart :function(e)
            {
                e.preventDefault();
                var self = this
                ,	cart_promise;
                var addItemQuantity = parseInt(jQuery(e.target).closest('.cart-quickaddtocart').find('.cart-quickaddtocart-quantity').val(), 10);
                var hasDuration = jQuery(e.target) && jQuery(e.target).closest('.cart-quickaddtocart') && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol2');
                var hasDuration2 = jQuery(e.target) && jQuery(e.target).closest('.cart-quickaddtocart') && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol3');
                var hasReferenceText1 = jQuery(e.target) && jQuery(e.target).closest('.cart-quickaddtocart') && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_1');
                var hasReferenceText2 = jQuery(e.target) && jQuery(e.target).closest('.cart-quickaddtocart') && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_2');
                var hasReferenceText3 = jQuery(e.target) && jQuery(e.target).closest('.cart-quickaddtocart') && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_3');
                var addItemDuration = !!hasDuration.length && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol2').val() && parseInt(jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol2').val().toString(), 10);
                var addItemDuration2 = !!hasDuration2.length && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol3').val() && parseInt(jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol3').val().toString(), 10);
                var addReferenceText1 = !!hasReferenceText1.length && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_1').val() && parseInt(jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_1').val().toString(), 10);
                var addReferenceText2 = !!hasReferenceText2.length && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_2').val() && parseInt(jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_2').val().toString(), 10);
                var addReferenceText3 = !!hasReferenceText3.length && jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_3').val() && parseInt(jQuery(e.target).closest('.cart-quickaddtocart').find('#custcol_reference_text_3').val().toString(), 10);
        
                jQuery('.product-details-options-selector-message').text('');
               
                if (!!hasDuration.length) {
                  if (!addItemDuration) {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('Please select a duration.');
                    return;
                  }
                  else 
                  {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('');
                  }
                }
                
                if (!!hasDuration2.length) {
                  if (!addItemDuration2) {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('Please select a duration.');
                    return;
                  }
                  else 
                  {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('');
                  }
                }
                
                if (addItemQuantity === 0) {
                  jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('Please select a quantity.');
                  return;
                }
                else 
                {
                  jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('');
                }
                
                if (!!hasReferenceText1.length) {
                  if (!addReferenceText1) {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('Please select a reference text 1.');
                    return;
                  } else {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('');
                  }
                }
                if (!!hasReferenceText2.length) {
                  if (!addReferenceText2) {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('Please select a reference text 2.');
                    return;
                  } else {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('');
                  }
                }
                if (!!hasReferenceText3.length) {
                  if (!addReferenceText3) {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('Please select a reference text 3.');
                    return;
                  } else {
                    jQuery(e.target).parents('form.cart-quickaddtocart').find('.product-details-options-selector-message').text('');
                  }
                }
        
                if (!this.model.areAttributesValid(['options','quantity'], self.getAddToCartValidators()))
                {
                    return;
                }
        
                if (!this.model.isNew() && this.model.get('source') === 'cart')
                {
                    cart_promise = this.cart.updateProduct(this.model);
                    cart_promise.done(function ()
                    {
                        self.options.application.getLayout().closeModal();
                    });
                }
                else
                {
                    var line = LiveOrderLineModel.createFromProduct(this.model);
                    cart_promise = this.cart.addLine(line);
                    CartConfirmationHelpers.showCartConfirmation(cart_promise, line, self.options.application);
                }
        
                cart_promise.fail(function (jqXhr)
                {
                    var error_details = null;
                    try
                    {
                        var response = JSON.parse(jqXhr.responseText);
                        error_details = response.errorDetails;
                    }
                    finally
                    {
                        if (error_details && error_details.status === 'LINE_ROLLBACK')
                        {
                            self.model.set('internalid', error_details.newLineId);
                        }
                    }
        
                });
                
                var $quickAddToCart = $(e.target).closest('.cart-quickaddtocart');
                        
                if ($quickAddToCart.find('.cart-quickaddtocart-quantity').length) {        
                    $quickAddToCart.find('.cart-quickaddtocart-quantity').attr('value','0');
                }
                
                if ($quickAddToCart.find('.product-views-option-facets-dropdown-select').length) {
                    $quickAddToCart.find('.product-views-option-facets-dropdown-select').val('');
                    
                    $quickAddToCart.find('.product-views-option-facets-dropdown-select').find('option').removeAttr("selected");
                    $quickAddToCart.find('.product-views-option-facets-dropdown-select').find('option').attr('data-active', 'false');
                }
                var itemOption =  $quickAddToCart.find('.product-views-option-facets-dropdown-select').attr('id');
              
                this.model.set('quantity',0)
                // this.model.setOption(itemOption,'');
        
                this.disableElementsOnPromise(cart_promise, e.target);
                return false;
            },
        
            getContext: _.wrap(CartAddToCartButtonView.prototype.getContext, function (fn) {
                      var context = fn.apply(this, _.toArray(arguments).slice(1));
                      var isItemWithReferenceTexts = this.model.get('item').get('itemid') === 'TB-MSSB';
                      context.isItemWithReferenceTexts = isItemWithReferenceTexts
                      return context;
                  })

        })

	});



/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

define(
	'TCI.PCP_PLPCustomization.Cart.QuickAddToCart.ViewExt'
	,	[
		'Cart.QuickAddToCart.View'
		, 'underscore'
		,	'Backbone'
        , 'ProductDetails.Options.Selector.View'
	]
	,	function (
		CartQuickAddToCartView	
		, _
		,	Backbone
        , ProductDetailsOptionsSelectorView
	)
	{
		'use strict';

        _.extend(CartQuickAddToCartView.prototype, {

            initialize : _.wrap(CartQuickAddToCartView.prototype.initialize, function(fn) {
                fn.apply(this, _.toArray(arguments).slice(1));
        
            }),
        
            events : _.extend({}, CartQuickAddToCartView.prototype.events, {
                'change [data-toggle="select-option"]': 'setDuration'
            }),
        
            setDuration:function(e) {
                this.model.setOption(e.target.id, e.target.value);
            },
        
            updateQuantity:function updateQuantity (e)
            {
                var new_quantity = parseInt(this.$(e.target).val(), 10)
                ,	minimum_quantity = this.getMinimumQuantity()
                ,	maximum_quantity = this.getMaximumQuantity();
        
                if (_.isNaN(new_quantity) || !_.isNumber(new_quantity) || new_quantity < minimum_quantity)
                {
                    new_quantity = minimum_quantity;
                }
                else if (!!maximum_quantity && new_quantity > maximum_quantity)
                {
                    new_quantity = maximum_quantity;
                }
        
                this.model.set('quantity', new_quantity);
        
                var optionValue = $(e.target).closest('.cart-quickaddtocart').find('.product-views-option-facets-dropdown-select').val();
        
                this.model.setOption($(e.target).closest('.cart-quickaddtocart').find('.product-views-option-facets-dropdown-select').attr('id'),optionValue);
        
                this.render();
            },
            
            childViews: _.extend({}, CartQuickAddToCartView.prototype.childViews, {
        
                'ItemDetails.Options': function() {
                    return new ProductDetailsOptionsSelectorView({
                        model: this.model
                    ,	application: this.application
                    ,	show_pusher: false
                    ,	show_required_label: this.model.get('item').get('itemtype') === 'GiftCert'
                    ,   templateName: 'facetCell'
        
                    });
                }
            }),
        
            getContext: _.wrap(CartQuickAddToCartView.prototype.getContext, function getContext(fn) {
                var context = fn.apply(this, _.toArray(arguments).slice(1));
        
                context.duration = !!this.model.get('item').get('onlinematrixpricerange');
                context.featuredDescription = this.model.get('item').get('featureddescription');
                var isItemWithReferenceTexts = this.model.get('item').get('itemid') === 'TB-MSSB';
                context.isItemWithReferenceTexts = isItemWithReferenceTexts;
        
                return context;
        
            })

        })

	});



/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

define(
	'TCI.PCP_PLPCustomization.ProductDetails.Options.Selector.ViewExt'
	,	[
		'ProductDetails.Options.Selector.View'
		, 'underscore'
		,	'Backbone'
        , 'ProductViews.Option.View'
        , 'Backbone.CollectionView'
	]
	,	function (
		ProductDetailsOptionsSelectorView	
		, _
		,	Backbone
        , ProductViewsOptionView
        , BackboneCollectionView
	)
	{
		'use strict';

        _.extend(ProductDetailsOptionsSelectorView.prototype, {

            childViews: _.extend({}, ProductDetailsOptionsSelectorView.prototype.childViews, {

                'Options.Collection': function() {
                    
        
                    return new BackboneCollectionView({
                        collection: this.model.getVisibleOptions()
                    ,	childView: ProductViewsOptionView
                    ,	viewsPerRow: 1
                    ,	childViewOptions: {
                            line: this.model
                        ,	item: this.model.get('item')
                        ,	templateName: this.options.templateName || 'selector'
                        ,	show_required_label: this.options.show_required_label
                        }
                    });
                }
            }),
           getContext : _.wrap(ProductDetailsOptionsSelectorView.prototype.getContext, function(fn) {
                var context = fn.apply(this, _.toArray(arguments).slice(1));
                
                context.featuredDescription = this.model.get('item').get('featureddescription');
                
                return context;
            })

        })

	});



/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

define(
	'TCI.PCP_PLPCustomization.ProductViews.Option.ViewExt'
	,	[
		'ProductViews.Option.View'
		, 'underscore'
		,	'Backbone'
	]
	,	function (
		ProductViewsOptionView	
		, _
		,	Backbone
	)
	{
		'use strict';

        _.extend(ProductViewsOptionView.prototype, {

            modifyDefaultSelectLabel: function () {
                var refText1 = this.model.get("cartOptionId") === "custcol_reference_text_1";
                var refText2 = this.model.get("cartOptionId") === "custcol_reference_text_2";
                var refText3 = this.model.get("cartOptionId") === "custcol_reference_text_3";
                this.showModifiedDefaultSelectLabel = false;
                this.modifiedDefaultSelectLabel;
                if (refText1) {
                    this.showModifiedDefaultSelectLabel = true;
                    this.modifiedDefaultSelectLabel = 'Select Text 1';
                }
                if (refText2) {
                    this.showModifiedDefaultSelectLabel = true;
                    this.modifiedDefaultSelectLabel = 'Select Text 2';
                }
                if (refText3) {
                    this.showModifiedDefaultSelectLabel = true;
                    this.modifiedDefaultSelectLabel = 'Select Text 3';
                }
            },
            getContext: _.wrap(ProductViewsOptionView.prototype.getContext, function (fn) {
                var context = fn.apply(this, _.toArray(arguments).slice(1));
                this.modifyDefaultSelectLabel();
                context.showModifiedDefaultSelectLabel = this.showModifiedDefaultSelectLabel;
                context.modifiedDefaultSelectLabel = this.modifiedDefaultSelectLabel;
              
                return context;
            })

        })

	});




define(
	'TCI.PCP_PLPCustomization.PCPPLPModule'
,   [
		'TCI.PCP_PLPCustomization.PCPPLPModule.View',
		'TCI.PCP_PLPCustomization.Facets.Browse.CategoryHeading.ViewExt',
		'TCI.PCP_PLPCustomization.Facets.Browse.ViewExt',
		'TCI.PCP_PLPCustomization.Facets.ItemCell.ViewExt',
		'TCI.PCP_PLPCustomization.Cart.AddToCart.Button.ViewExt',
		'TCI.PCP_PLPCustomization.Cart.QuickAddToCart.ViewExt',
		'TCI.PCP_PLPCustomization.ProductDetails.Options.Selector.ViewExt',
		'TCI.PCP_PLPCustomization.ProductViews.Option.ViewExt',
		'SC.Configuration'
	,	'product_views_option_color.tpl'
	,	'product_views_option_dropdown.tpl'
	,	'product_views_option_radio.tpl'
	,	'product_views_option_text.tpl'
	,	'product_views_option_textarea.tpl'
	,	'product_views_option_email.tpl'
	,	'product_views_option_phone.tpl'
	,	'product_views_option_url.tpl'
	,	'product_views_option_float.tpl'
	,	'product_views_option_integer.tpl'
	,	'product_views_option_percent.tpl'
	,	'product_views_option_currency.tpl'
	,	'product_views_option_password.tpl'
	,	'product_views_option_timeofday.tpl'	
	,	'product_views_option_datetimetz.tpl'	
	,	'product_views_option_tile.tpl'
	,	'product_views_option_checkbox.tpl'
	,	'product_views_option_date.tpl'

	,	'product_views_option_facets_dropdown.tpl'
	,	'product_views_option_facets_color.tpl'
	,	'product_views_option_facets_tile.tpl'
	,	'underscore'
	,	'Utils'
	,   'jQuery'
	]
,   function (
		PCPPLPModuleView,
		FacetsBrowseCategoryHeadingViewExt,
		FacetsBrowseViewExt,
		FacetsItemCellViewExt,
		AddToCartButtonViewExt,
		CartQuickAddToCartViewExt,
		ProductDetailsOptionsSelectorViewExt,
		ProductViewsOptionViewExt,
		Configuration
		,	product_views_option_color_tpl
		,	product_views_option_dropdown_tpl
		,	product_views_option_radio_tpl
		,	product_views_option_text_tpl
		,	product_views_option_textarea_tpl
		,	product_views_option_email_tpl
		,	product_views_option_phone_tpl
		,	product_views_option_url_tpl
		,	product_views_option_float_tpl
		,	product_views_option_integer_tpl
		,	product_views_option_percent_tpl
		,	product_views_option_currency_tpl
		,	product_views_option_password_tpl
		,	product_views_option_timeofday_tpl
		,	product_views_option_datetimetz_tpl
		,	product_views_option_tile_tpl
		,	product_views_option_checkbox_tpl
		,	product_views_option_date_tpl
	
		,	product_views_option_facets_dropdown_tpl
		,	product_views_option_facets_color_tpl
		,	product_views_option_facets_tile_tpl
		,	_
	,	Utils
	,  jQuery

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
			// var layout = container.getComponent('Layout');
			
			// if(layout)
			// {
			// 	layout.addChildView('Header.Logo', function() { 
			// 		return new PCPPLPModuleView({ container: container });
			// 	});
			// }

			var product_view_options_selector = {
				'product_views_option_color.tpl': product_views_option_color_tpl,
				'product_views_option_dropdown.tpl': product_views_option_dropdown_tpl,
				'product_views_option_radio.tpl': product_views_option_radio_tpl,
				'product_views_option_text.tpl': product_views_option_text_tpl,
				'product_views_option_textarea.tpl': product_views_option_textarea_tpl,
				'product_views_option_email.tpl': product_views_option_email_tpl,
				'product_views_option_phone.tpl': product_views_option_phone_tpl,
				'product_views_option_url.tpl': product_views_option_url_tpl,
				'product_views_option_float.tpl': product_views_option_float_tpl,
				'product_views_option_integer.tpl': product_views_option_integer_tpl,
				'product_views_option_percent.tpl': product_views_option_percent_tpl,
				'product_views_option_currency.tpl': product_views_option_currency_tpl,
				'product_views_option_password.tpl': product_views_option_password_tpl,
				'product_views_option_timeofday.tpl': product_views_option_timeofday_tpl,
				'product_views_option_datetimetz.tpl': product_views_option_datetimetz_tpl,
				'product_views_option_tile.tpl': product_views_option_tile_tpl,
				'product_views_option_checkbox.tpl': product_views_option_checkbox_tpl,
				'product_views_option_date.tpl': product_views_option_date_tpl
			}
		,	product_view_option_facet = {
				'product_views_option_facets_dropdown.tpl': product_views_option_facets_dropdown_tpl
			,	'product_views_option_facets_color.tpl': product_views_option_facets_color_tpl
			,	'product_views_option_facets_tile.tpl': product_views_option_facets_tile_tpl
			}
		,	item_options = Configuration.get('ItemOptions.optionsConfiguration', [])
		,	configuration_default_selector_templates = Configuration.get('ItemOptions.defaultTemplates.selectorByType', [])
		,	default_selector_templates = {}
		,	default_template_selector = false

		,	configuration_default_facet_templates = Configuration.get('ItemOptions.defaultTemplates.facetCellByType', [])
		,	default_facet_templates = {}
		,	default_template_facet = false;

		_.each(item_options, function (item_option)
		{
			if (item_option.templateFacetCell && product_view_option_facet[item_option.templateFacetCell])
			{
				item_option.templates = item_option.templates || {};
				item_option.templates.facetCell = product_view_option_facet[item_option.templateFacetCell];
			}

			if (item_option.templateSelector && product_view_options_selector[item_option.templateSelector])
			{
				item_option.templates = item_option.templates || {};
				item_option.templates.selector = product_view_options_selector[item_option.templateSelector];
			}
		});

		_.each(configuration_default_selector_templates, function (default_selector_template)
		{
			if (product_view_options_selector[default_selector_template.template])
			{
				default_selector_templates[default_selector_template.type] = product_view_options_selector[default_selector_template.template];
				default_template_selector = true;
			}
		});

		if (default_template_selector)
		{
			Utils.setPathFromObject(Configuration, 'ItemOptions.defaultTemplates.selectorByType', default_selector_templates);
		}

		_.each(configuration_default_facet_templates, function (default_facet_template)
		{
			if (product_view_option_facet[default_facet_template.template])
			{
				default_facet_templates[default_facet_template.type] = product_view_option_facet[default_facet_template.template];
				default_template_facet = true;
			}
		});

		if (default_template_facet)
		{
			Utils.setPathFromObject(Configuration, 'ItemOptions.defaultTemplates.facetCellByType', default_facet_templates);
		}

		}
	};
});


};

extensions['Acme.printquote.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Acme/printquote/1.0.0/' + asset;
}

// @module Acme.printquote.PrintQuote
define('Acme.printquote.PrintQuote.View'
,	[
	'acme_printquote_printquote.tpl'
	,'Acme.printquote.PrintQuote.SS2Model'
	, 'Backbone'
	, 'underscore'
	, 'jQuery'
	, "Backbone.Model"
    , 'Backbone.FormView'
	, 'SC.Configuration'
	, 'GlobalViews.Confirmation.View'
	, 'LiveOrder.Model'
	, 'Utils'
	, "Acme.printquote.PrintQuote.Model"
	, "GlobalViews.Modal.View"
	, 'Acme.printquote.PrintQuoteModel.View'
    ]
, function (
	acme_printquote_printquote_tpl
	,	PrintQuoteSS2Model
	, Backbone
	, _
	, jQuery
	, BackboneModel
	, BackboneFormView
	, Configuration
	, GlobalViewsConfirmationView
	, LiveOrderModel
	, Utils
	, AcmeprintquotePrintQuoteModel
	, GlobalViewsModalView
	, AcmeprintquotePrintQuoteModelView
)
{
    'use strict';

	// @class Acme.printquote.PrintQuote.View @extends Backbone.View
	return Backbone.View.extend({

		template: acme_printquote_printquote_tpl,


    events: {	 
			 'click [data-action="print-quote"]': 'printQuote'
			,'click [data-action="mail-quote"]': 'mailQuote'
			,'click [data-action="send-email"]': 'saveForm2'
			,'click [data-action="email-quote"]': 'showForm'
	}
	
	, bindings: {
			'[name="name"]': 'name'
		,	'[name="email"]': 'email'
		,	'[name="message"]': 'message'
	}
	
  , initialize: function (options) {
	 
			this.application = options.application;
			var liveOrderModels = LiveOrderModel.getInstance();
	  		this.liveOrderModel = liveOrderModels;
			this.model = new AcmeprintquotePrintQuoteModel();
			var self = this;
			var load = LiveOrderModel.loadCart();
			load.done(function (res) {
				self.cartdata = res;
				self.render();
			});
			BackboneFormView.add(this);
		},
  
		beforeShowContent : function beforeShowContent() {
			var self = this;
			var promise = jQuery.Deferred();
			
			var datemodel = new AcmeprintquotePrintQuoteModel();
			datemodel.fetch().done((res) => {
				var today = new Date(res);
				var yyyy = today.getFullYear();
				var mm = today.getMonth() + 1;
				var dd = today.getDate();

			if (dd < 10)
				dd = '0' + dd;
			if (mm < 10)
				mm = '0' + mm;
				var newdate =  mm  + '/' + dd + '/' + yyyy;
				self.validdate = newdate;
				promise.resolve();
			})

			return promise;
        },	
	printQuote: function() {
		
		window.print();
	}

	, mailQuote: function () {
		
		var view = new AcmeprintquotePrintQuoteModelView({  
			pageHeader: Configuration.get('quote.popupboxtitle'),
			application: this.application,
			cartData:this.cartdata
        }); 
		view.showInModal();
	}
	
	, showForm: function () {
		
			this.$('[data-collapse-content]').collapse('toggle');	

	}
	,
	
   saveForm2: function(e, model, props) {
	   
		e.preventDefault();
		model = model || this.model;
		this.$savingForm = jQuery(e.target).closest('form');
		
		if (this.$savingForm.length)
		{
			this.$savingForm.find('input[type="submit"], button[type="submit"]').attr('disabled', true);

			this.$savingForm.find('input[type="reset"], button[type="reset"]').hide();
		}
	   
		this.hideError();
		
		var self = this;
		
		// Returns the promise of the save acction of the model
		return model.save(props || this.$savingForm.serializeObject(), {
			
			wait: true
			// Hides error messages, re enables buttons and triggers the save event
			// if we are in a modal this also closes it
			,	success: function (model, response)
			{
				if (self.inModal && self.$containerModal)
				{
					self.$containerModal.removeClass('fade').modal('hide').data('bs.modal', null);
				}
				
				if (self.$savingForm.length)
				{
					self.hideError(self.$savingForm);
					self.$savingForm.find('[type="submit"], [type="reset"]').attr('disabled', false);
					model.trigger('save', model, response);
				}
				
				var emailConfirmationView = new GlobalViewsConfirmationView({
					title: _('Email Sent').translate()
					,	body: _('Your quote has been emailed.').translate()
					,	confirmLabel: _('OK').translate()
					,	hideCancelButton: true
					,	autohide: true
				});
				self.options.application.getLayout().showInModal(emailConfirmationView);
				
			}
			
			// Re enables all button and shows an error message
			,	error: function (model, response)
			{
				self.$savingForm.find('*[type=submit], *[type=reset]').attr('disabled', false);
				
				if (response.responseText)
				{
					model.trigger('error', jQuery.parseJSON(response.responseText));
				}
			}
		});
   }
   
	, 	childViews: {

		}
	, getContext: function() {
			var lines = this.liveOrderModel && this.liveOrderModel.get('lines');
			var models = lines && lines.models;
		var summary = this.liveOrderModel && this.liveOrderModel.get('summary');
	
		if (summary && !summary.shippingcost) {
				var shippingCost = 0;
				var shippingrate = 0;
				var cartHasItemToShip = false;
				if (models && models.length) {
					models.forEach(function (model) {
						var item = model.get('item')
						if (item && item.get('itemtype') == 'InvtPart') {
							if (Configuration.get('quote.shippingrate')) {
								shippingCost += model.get('amount') * Configuration.get('quote.shippingrate');
								cartHasItemToShip = true;
							} else {
								shippingCost += model.get('amount') * 0.05;
								cartHasItemToShip = true;
							}
						}
					});
					if (cartHasItemToShip) {
						shippingCost = shippingCost >= 5 ? shippingCost : 5;
					} 
				}
				summary.shippingcost = shippingCost;
				summary.shippingcost_formatted = Utils.formatCurrency(summary.shippingcost);
				summary.total = summary.total + summary.shippingcost;
				summary.total_formatted = Utils.formatCurrency(summary.total);
				if (cartHasItemToShip) {
					shippingrate = (shippingCost) * 100 / (summary.total);
				}
				summary.shippingrate = 5; //Math.round(shippingrate);
		} else{
			if (summary && summary.shippingcost) {
				if (!summary.shippingrate) {
					var shippingrate = ((summary.shippingcost) * 100) / (summary.total);
					summary.shippingrate = 5; // Math.round(shippingrate);
					
				}
			}
		}
	    return {
				text:  Configuration.get('quote.quotetitle'),
				subtext:  Configuration.get('quote.subtext'),
				lines: lines,
				summary: summary,
			    finePrint: Configuration.get('quote.notes'),
				validupto:this.validdate	
	      };
	  } 
	});
});



define("Acme.printquote.PrintQuote.Model", ["Backbone", "Utils"], function (
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/PrintQuote.Service.ss"
            )
        ),
});
});


// Model.js
// -----------------------
// @module Case
define("Acme.printquote.PrintQuote.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/PrintQuote/SuiteScript2/PrintQuote.Service.ss"
            ),
            true
        )
});
});



// @module Acme.printquote.PrintQuote
define('Acme.printquote.PrintQuoteModel.View'
,	[
	'acme_printquote_printquotemodel.tpl'
	
	,	'Acme.printquote.PrintQuote.SS2Model'
	, 'Backbone'
	, 'underscore'
	, 'jQuery'
	, "Backbone.Model"
    , 'Backbone.FormView'
	, 'SC.Configuration'
	, 'GlobalViews.Confirmation.View'
	, 'LiveOrder.Model'
	, 'Utils'
	, "Acme.printquote.PrintQuote.Model"
	, "GlobalViews.Modal.View"
	, 'GlobalViews.Message.View'
    ]
, function (
	acme_printquote_printquotemodel_tpl

	, PrintQuoteSS2Model	
	, Backbone
	, _
	, jQuery
	, BackboneModel
	, BackboneFormView
	, Configuration
	, GlobalViewsConfirmationView
	, LiveOrderModel
	, Utils
	, AcmeprintquotePrintQuoteModel
	, GlobalViewsModalView
	, GlobalViewsMessageView
)
{
    'use strict';

	return Backbone.View.extend({
		template: acme_printquote_printquotemodel_tpl,
		// page_header: Utils.translate('Email Address'),

 	attributes: {
    	id: 'PrintQuote_model',
    	class: ''
	},
	
	events: {
			'click [data-action="sendmail"]': 'sendmail'
		}
	, bindings: {	
	
	}
	, initialize: function (options) {
		this.showModalPageHeader = true
	}
	, childViews: {

	}

, sendmail: function sendmail(e) {		
	
	e.preventDefault();
	var emailvalue = $('#in-modal-email').val();
	var model = new AcmeprintquotePrintQuoteModel();
	var data = { cartdata: this.options.cartData, email: emailvalue };

	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailvalue)) {
		model.save(data).done((res) => {

				var global_view_message = new GlobalViewsMessageView({	
					message: "Email Sent Successfully",
					type: "success",
					closable: true,
				});

				jQuery(".email-validation").html(
					global_view_message.render().$el.html()
				);
			setTimeout(() => {

				$('#modal-PrintQuote_model').css("display", "none");
				$('#modal-PrintQuote_model').removeClass("modal fade modal-PrintQuote_model in");
				$('.modal-backdrop.in').removeAttr('class')

			}, 1000);
				
		}).fail((res) => {

			var err = jQuery.parseJSON(res.responseText);
			var global_view_message = new GlobalViewsMessageView({	
					message: err.errorMessage,
					type: "error",
					closable: true,
			});
			
				jQuery(".email-validation").html(
					global_view_message.render().$el.html()
				);
			setTimeout(() => {
				$('#modal-PrintQuote_model').css("display", "none");
				$('#modal-PrintQuote_model').removeClass("modal fade modal-PrintQuote_model in");
				$('.modal-backdrop.in').removeAttr('class')

			}, 2000);
		})
	} else {

		var global_view_message = new GlobalViewsMessageView({	
			message: "enter valid email.",
			type: "error",
			closable: true,
		});

		jQuery(".email-validation").html(
			global_view_message.render().$el.html()
		);

	}
}
, getContext: function () {
	    return {
			text: 'Quote',
			pagetitle: Configuration.get("quote.popupboxtitle"),
			buttontext: Configuration.get("quote.buttontext")
		};
	  } 
	});
});



define(
	'Acme.printquote.PrintQuote'
,   [
	'Acme.printquote.PrintQuote.View'
	, 'GlobalViews.Modal.View'
	]
,   function (
	PrintQuoteView
	, GlobalViewsModalView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp(container)
		{
			/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');
				var pageType = container.getComponent("PageType");
				pageType.registerPageType({
					name: "quote-page",
					routes: ["printquote"],
					view: PrintQuoteView,
					defaultTemplate: {
						name: "acme_printquote_printquote_tpl",
						displayName: "printquote",
				    },
				});
		
		GlobalViewsModalView.prototype.getContext = _.wrap(GlobalViewsModalView.prototype.getContext, function (fn) {
			var context = fn.apply(this, _.toArray(arguments).slice(1));
			context.pageHeader = (this.options.childViewIstance.attributes) ? (this.options.childViewIstance.attributes.id == 'PrintQuote_model' ? this.options.childViewIstance.options.pageHeader || '' : this.options.pageHeader || '') : this.options.pageHeader || '';
			return context;
			});	
		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["TCI.FooterExt.ExtraFooterLinks.View","TCI.FooterExt.ExtraFooterLinks.Model","TCI.ManageOrdersExt.TrackMyOrder","TCI.ManageOrdersExt.TrackMyOrder.View","TCI.ManageOrdersExt.TrackMyOrder.Model","TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.Model","TCI.ManageOrdersExt.RequestAnInvoice.PrintButton.View","TCI.ManageOrdersExt.RequestAnInvoice.View","TCI.ManageOrdersExt.RequestAnInvoice","TCI.ManageOrdersExt.RequestAnInvoice.Model","TCI.ManageOrdersExt.RequestAReturn.View","TCI.ManageOrdersExt.RequestAReturn","TCI.ManageOrdersExt.RequestAReturn.Model","TCI.ManageOrdersExt.ManageOrdersExt.View","TCI.ManageOrdersExt.ManageOrdersExt.Model","TCI.ManageOrdersExt.ManageOrdersExt.SS2Model","TCI.ManageOrdersExt.RequestAReturn.Items.View","TCI.ManageOrdersExt.RequestAReturn.Items.Model","TCI.ManageOrdersExt.ManageOrdersExt.HeaderLink.View","TCI.PCP_PLPCustomization.PCPPLPModule.View","TCI.PCP_PLPCustomization.Facets.Browse.CategoryHeading.ViewExt","TCI.PCP_PLPCustomization.Facets.Browse.ViewExt","TCI.PCP_PLPCustomization.Facets.ItemCell.ViewExt","TCI.PCP_PLPCustomization.PCPPLPModule.Model","TCI.PCP_PLPCustomization.PCPPLPModule.SS2Model","TCI.PCP_PLPCustomization.Cart.AddToCart.Button.ViewExt","TCI.PCP_PLPCustomization.Cart.QuickAddToCart.ViewExt","TCI.PCP_PLPCustomization.ProductDetails.Options.Selector.ViewExt","TCI.PCP_PLPCustomization.ProductViews.Option.ViewExt","Acme.printquote.PrintQuote.View","Acme.printquote.PrintQuote.Model","Acme.printquote.PrintQuote.SS2Model","Acme.printquote.PrintQuoteModel.View"];
try{
	extensions['TCI.FooterExt.1.0.0']();
	SC.addExtensionModule('TCI.FooterExt.ExtraFooterLinks');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TCI.ManageOrdersExt.1.0.0']();
	SC.addExtensionModule('TCI.ManageOrdersExt.ManageOrdersExt');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['TCI.PCP_PLPCustomization.1.0.0']();
	SC.addExtensionModule('TCI.PCP_PLPCustomization.PCPPLPModule');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Acme.printquote.1.0.0']();
	SC.addExtensionModule('Acme.printquote.PrintQuote');
}
catch(error)
{
	console.error(error);
}

