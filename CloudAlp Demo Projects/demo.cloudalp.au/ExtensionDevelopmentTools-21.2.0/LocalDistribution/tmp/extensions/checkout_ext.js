var extensions = {};

extensions['CloudAlp.PromoLimit.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CloudAlp/PromoLimit/1.0.0/' + asset;
}

// @module CloudAlp.PromoLimit.PromoLimit
define('CloudAlp.PromoLimit.PromoLimit.View'
	, [
		'cloudalp_promolimit_promolimit.tpl'

		, 'CloudAlp.PromoLimit.PromoLimit.Model'

		, 'Backbone'
	]
	, function (
		cloudalp_promolimit_promolimit_tpl

		, PromoLimitModel

		, Backbone
	) {
		'use strict';

		// @class CloudAlp.PromoLimit.PromoLimit.View @extends Backbone.View
		return Backbone.View.extend({

			template: cloudalp_promolimit_promolimit_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new PromoLimitModel();
				// var self = this;
				// this.model.fetch().done(function(result) {
				// 	self.message = result.message;
				// 	self.render();
				// });
			}

			, events: {
			}

			, bindings: {
			}

			, childViews: {

			}

			//@method getContext @return CloudAlp.PromoLimit.PromoLimit.View.Context
			, getContext: function getContext() {
				//@class CloudAlp.PromoLimit.PromoLimit.View.Context
				this.message = this.message || 'Hello World!!';
				return {
					message: this.message
				};
			}
		});
	});


// Model.js
// -----------------------
// @module Case
define("CloudAlp.PromoLimit.PromoLimit.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/PromoLimit.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CloudAlp.PromoLimit.PromoLimit.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/PromoLimit/SuiteScript2/PromoLimit.Service.ss"
            ),
            true
        )
});
});



define(
	'CloudAlp.PromoLimit.PromoLimit'
	, [
		'CloudAlp.PromoLimit.PromoLimit.View',
		'Cart.Promocode.List.Item.View'
	]
	, function (
		PromoLimitView,
		CartPromocodeListItemView
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');

				_.extend(CartPromocodeListItemView.prototype, {
					getContext: _.wrap(CartPromocodeListItemView.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));

						return ret;

					})
				});



				// if(layout)
				// {
				// 	layout.addChildView('Header.Logo', function() {
				// 		return new PromoLimitView({ container: container });
				// 	});
				// }

			}
		};
	});


};

extensions['CloudAlp.ShippingAndBillingAddress.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CloudAlp/ShippingAndBillingAddress/1.0.0/' + asset;
}

// @module CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress
define('CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.View'
	, [
		'cloudalp_shippingandbillingaddress_shippingandbillingaddress.tpl'

		, 'CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.Model'

		, 'Backbone'
	]
	, function (
		cloudalp_shippingandbillingaddress_shippingandbillingaddress_tpl

		, ShippingAndBillingAddressModel

		, Backbone
	) {
		'use strict';

		// @class CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.View @extends Backbone.View
		return Backbone.View.extend({

			template: cloudalp_shippingandbillingaddress_shippingandbillingaddress_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new ShippingAndBillingAddressModel();
				// var self = this;
				// this.model.fetch().done(function(result) {
				// 	self.message = result.message;
				// 	self.render();
				// });
			}

			, events: {
			}

			, bindings: {
			}

			, childViews: {

			}

			//@method getContext @return CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.View.Context
			, getContext: function getContext() {
				//@class CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.View.Context
				this.message = this.message || 'Hello World!!';
				return {
					message: this.message
				};
			}
		});
	});


// Model.js
// -----------------------
// @module Case
define("CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/ShippingAndBillingAddress.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ShippingAndBillingAddress/SuiteScript2/ShippingAndBillingAddress.Service.ss"
            ),
            true
        )
});
});



define(
	'CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress'
	, [
		'CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.View',
		'Address.Details.View',
		'OrderWizard.Module.Address',
		'Profile.Model',
		'Backbone.CollectionView',
		'Handlebars',
		'Utils',
		'SC.Configuration',
		'order_wizard_address_row.tpl',
		'order_wizard_address_cell.tpl',
		"Address.Edit.Fields.View"
	]
	, function (
		ShippingAndBillingAddressView,
		AddressDetailsView,
		OrderWizardModuleAddress,
		ProfileModel,
		BackboneCollectionView,
		Handlebars,
		Utils,
		Configuration,
		order_wizard_address_row_tpl,
		order_wizard_address_cell_tpl,
		AddressEditFieldsView
	) {
		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');
				// Note : this will work only when checkoutpage  is standard
				var currentTouchpoint = Configuration.get('currentTouchpoint');
				function shipaddressFilter(data) {
					const result = [];
					data.forEach(i => {
						if (i.get('defaultbilling') == 'F') { result.push(i); } else if (i.id == "-1") { result.push(i); };
					});
					return result;
				};

				var eventsFileds = AddressEditFieldsView.prototype.events;
				eventsFileds['click .default-check '] = "defaultcheckbox";
				AddressEditFieldsView.prototype.events = eventsFileds;

				_.extend(AddressEditFieldsView.prototype, {
					defaultcheckbox: function (e) {
						const $target = jQuery(e.target);
						$target.prop('checked', true);
					},
					getContext: _.wrap(AddressEditFieldsView.prototype.getContext, function getContext(fn) {
						var ret = fn.apply(this, _.toArray(arguments).slice(1));
						var profileModelInst = ProfileModel.getInstance().get('addresses');
						if (profileModelInst.models.length === 0 && currentTouchpoint === 'checkout') {
							ret.isAddressCollectionLength1checkout = true;
						}
						if (profileModelInst.models.length === 0 & currentTouchpoint === 'customercenter') {
							ret.isAddressCollectionLength1myaccount = true;
						}
						var isBilling = window.location.hash.includes('billing');
						ret.isBillingPage = isBilling;

						return ret;
					})
				});

				// to show only billing address in myaccount enable this code
				// _.extend(AddressListView.prototype, {
				// 	childViews: _.extend({}, AddressListView.prototype.childViews, {
				// 		'Addresses.Collection': function () {
				// 			var addr = this.getAddressesToShow();
				// 			var myaccountAddr = shipaddressFilter(addr);
				// 			return new BackboneCollectionView({
				// 				childView: AddressDetailsView,
				// 				collection: myaccountAddr,
				// 				viewsPerRow:
				// 					this.itemsPerRow ||
				// 					(Utils.isDesktopDevice() ? 3 : Utils.isTabletDevice() ? 2 : 1),
				// 				cellTemplate: backbone_collection_view_cell_tpl,
				// 				rowTemplate: backbone_collection_view_row_tpl,
				// 				childViewOptions: this.getAddressListOptions()
				// 			});
				// 		}
				// 	})
				// });
				// end

				_.extend(OrderWizardModuleAddress.prototype, {
					childViews: _.extend({}, OrderWizardModuleAddress.prototype.childViews, {
						'Address.List': function () {
							var Address = this.getAddressesToShow();
							var shippingOnly = [];
							if (Address.length == 2) {
								if (Address[0].get('defaultbilling') === "T") {
									shippingOnly = Address.find((i) => i.get('internalid') == '-1');
								}
								else {
									shippingOnly = Address;
								}
								if (this.manage == "billaddress" && Address[0].get('defaultbilling') === "F") {
									shippingOnly = Address.find((i) => i.get('internalid') == '-1');
								}

							} else if (this.manage == "shipaddress") {
								shippingOnly = shipaddressFilter(Address);
							}
							else {
								shippingOnly = Address.find((i) => (i.get('defaultbilling') == 'T') ? i : i.get('internalid') == '-1');

							};
							return new BackboneCollectionView({
								collection: shippingOnly,
								viewsPerRow:
									this.itemsPerRow ||
									(Utils.isDesktopDevice() ? 3 : Utils.isTabletDevice() ? 2 : 1),
								rowTemplate: order_wizard_address_row_tpl,
								cellTemplate: order_wizard_address_cell_tpl,
								childView: AddressDetailsView,
								childViewOptions: this.getAddressListOptions()
							});
						}
					})
				});

				_.extend(AddressDetailsView.prototype, {
					getContext: _.wrap(AddressDetailsView.prototype.getContext, function getContext(fn) {
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						// to manage edit remove buttons
						if (context.manageOption === 'shipaddress') {
							context.showShippingAdrr = true;
						}
						if (currentTouchpoint === 'customercenter' && context.isDefaultBillingAddress === false) {
							context.showShippingAdrr = true;
						}
						// end
						context.currentTouchpoint = Configuration.get('currentTouchpoint');
						return context;
					})
				});





			}
		};
	});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["CloudAlp.PromoLimit.PromoLimit.View","CloudAlp.PromoLimit.PromoLimit.Model","CloudAlp.PromoLimit.PromoLimit.SS2Model","CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.View","CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.Model","CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress.SS2Model"];
try{
	extensions['CloudAlp.PromoLimit.1.0.0']();
	SC.addExtensionModule('CloudAlp.PromoLimit.PromoLimit');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CloudAlp.ShippingAndBillingAddress.1.0.0']();
	SC.addExtensionModule('CloudAlp.ShippingAndBillingAddress.ShippingAndBillingAddress');
}
catch(error)
{
	console.error(error);
}

