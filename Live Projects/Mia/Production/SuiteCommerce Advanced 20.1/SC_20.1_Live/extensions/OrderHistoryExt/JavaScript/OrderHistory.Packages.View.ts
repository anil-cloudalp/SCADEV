/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="OrderHistory.Packages.View"/>

import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as order_history_packages_tpl from 'order_history_packages.tpl';

import TransactionLineViewsCellActionableView = require('../../../Commons/Transaction.Line.Views/JavaScript/Transaction.Line.Views.Cell.Actionable.View');
import TransactionLineViewsQuantityAmountView = require('../../../Commons/Transaction.Line.Views/JavaScript/Transaction.Line.Views.QuantityAmount.View');
import OrderHistoryItemActionsView = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.Item.Actions.View');
import AddressView = require('../../../Commons/Address/JavaScript/Address.Details.View');
import OrderHistoryListTrackingNumberView = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.List.Tracking.Number.View');
import LocationVenueDetailsView = require('../../../Advanced/Location.SCA/JavaScript/Location.VenueDetails.View');
import Configuration = require('../../../Advanced/SCA/JavaScript/SC.Configuration');
import ProfileModel = require('../../../Commons/Profile/JavaScript/Profile.Model');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');

// @class OrderHistory.Packages.View @extend Backbone.View
const OrderHistoryPackagesView: any = BackboneView.extend({
    // @property {Function} template
    template: order_history_packages_tpl,
    // @method initialize
    initialize: function() {
        this.isInStore = false;

        if (this.model.get('packageGroup') === 'instore') {
            this.location = this.model.get('location');
            this.profile_model = ProfileModel.getInstance();

            try {
                const ReferenceMap = Utils.requireModules('ReferenceMap');
                this.reference_map = new ReferenceMap();
            } catch (e) {
                e;
            }

            this.isInStore = true;

            this.location.on('change', this.render, this);
        } else {
            this.address = this.model.get('shipaddress');
        }
    },
    // @property {Object} childViews
    childViews: {
        'Address.StoreLocationInfo': function() {
            return new LocationVenueDetailsView({
                model: this.location,
                application: this.options.application,
                showAddress: true,
                hideCutoffTime: true
            });
        },
        'Shipping.Address.View': function() {
            if (!this.isInStore) {
                return new AddressView({
                    model: this.address,
                    hideDefaults: true,
                    hideActions: true,
                    hideSelector: true
                });
            }
        },

        TrackingNumbers: function() {
            return new OrderHistoryListTrackingNumberView({
                model: new Backbone.Model({ trackingNumbers: this.model.get('trackingnumbers') }),
                showTrackPackagesLabel: true
            });
        },

        'Items.Collection': function() {
            return new BackboneCollectionView({
                collection: this.model.get('lines'),
                childView: TransactionLineViewsCellActionableView,
                viewsPerRow: 1,
                childViewOptions: {
                    navigable: !this.options.application.isStandalone,
                    application: this.options.application,
                    SummaryView: TransactionLineViewsQuantityAmountView,
                    ActionsView: OrderHistoryItemActionsView,
                    showTaxDetails: Configuration.get('showTaxDetailsPerLine'),
                    showAlert: !_.isUndefined(this.options.showAlert)
                        ? !!this.options.showAlert
                        : true,
					isCreatedFromQuote: this.options.isCreatedFromQuote
                }
            });
        }
    },

    // @method getContext @return OrderHistory.Packages.View.Context
    getContext: function() {
        let directions_url = '';

        if (
            this.reference_map &&
            this.location &&
            !this.location.isNew() &&
            this.location.get('location')
        ) {
            directions_url = this.reference_map.getDirectionsUrl(
                this.profile_model.get('storeLocator_last_search'),
                this.location.get('location')
            );
        }
		var couriers = [
			{internalid: "1481", name: "Allied", url: "http://www.alliedexpress.com.au/"},
			{internalid: "15696", name: "COPE", url: "https://www.cope.com.au/"},
			{internalid: "4567", name: "Capital Transport", url: "https://capitaltransport.com.au/"},
			{internalid: "5458", name: "Couriers Please", url: "https://www.couriersplease.com.au/tools-track"},
			{internalid: "1482", name: "DHL", url: "http://www.dhl.com.au/en/express/tracking.html"},
			{internalid: "5457", name: "Direct Couriers", url: "https://www.directcouriers.com.au/"},
			{internalid: "525", name: "Fastway", url: "https://www.aramex.com.au/tools/track/"},
			{internalid: "1479", name: "Startrack", url: "https://startrack.com.au/"},
			{internalid: "15708", name: "Startrack Quote Based", url: "https://startrack.com.au/"},
			{internalid: "15709", name: "Startrack DropShip", url: "https://startrack.com.au/"},
			{internalid: "1480", name: "TNT", url: "https://www.tnt.com/express/en_au/site/home.html"}
		];
		var shipMethodUrl = '';
		
		var shipMethodId = this.model.get('shipmethod')? this.model.get('shipmethod').get('internalid'): '';
		
		var shipMethodobj = _.findWhere(couriers,{internalid: shipMethodId});
		
		if(shipMethodobj && _.has(shipMethodobj,'url'))
			shipMethodUrl = shipMethodobj.url;
		
        // @class OrderHistory.Packages.View.Context
        return {
            isStandalone: this.options.application.isStandalone,
            // @property {Model} model
            model: this.model,
            // @property {Boolean} showOrderAddress
            showOrderAddress: !!(this.address && this.address.get('fullname')),
            // @property {String} orderAddress
            orderAddress: this.address ? this.address.get('fullname') : '',
            // @property {Boolean} showDeliveryMethod
            showDeliveryMethod: !!(
                this.model.get('shipmethod') && this.model.get('shipmethod').get('name')
            ),
            // @property {String} deliveryMethodName
            deliveryMethodName: this.model.get('shipmethod')
                ? this.model.get('shipmethod').get('name')
                : '',
			shipMethodUrl: shipMethodUrl,
            // @property {Boolean} showDeliverySatatus
            showDeliveryStatus:
                !this.isInStore &&
                !!(this.model.get('status') && this.model.get('status').internalid) &&
                !this.model.get('date'),
            // @property {Boolean} showPackageStatus
            showPackageStatus:
                !!(this.model.get('status') && this.model.get('status').name) &&
                !this.model.get('date'),
            // @property {String} packageStatus
            packageStatus: this.model.get('status') && this.model.get('status').name,
            // @property {Boolean} showDate
            showDate: !!this.model.get('date'),
            // @property {Boolean} showTrackingNumbers
            showTrackingNumbers: !!this.model.get('trackingnumbers'),
            // @property {Boolean} isPackageInStore
            isPackageInStore: this.isInStore,
            // @property {String} date
            date: this.model.get('date') ? this.model.get('date') : '',
            // @property {Number} linesItemsAmount
            linesItemsAmount:
                !!this.model.get('lines') &&
                _.reduce(
                    this.model.get('lines'),
                    function(count, line: any) {
                        return count + line.get('quantity');
                    },
                    0
                ),
            // @property {Boolean} showOrderLocation
            showOrderLocation: !!this.location && !!this.location.get('name'),
            // @property {StoreLocator.Model} orderLocation
            orderLocation: this.location,
            // @property {String} getDirectionsUrl
            getDirectionsUrl: directions_url,
            // @property {String} showGetDirectionButton
            showGetDirectionButton: !!directions_url,
            // @property {String} initiallyCollapsed
            initiallyCollapsed: Utils.isPhoneDevice() ? '' : 'in',
            // @property {String} initiallyCollapsedArrow
            initiallyCollapsedArrow: Utils.isPhoneDevice() ? 'collapsed' : '',
            // @property {String} targetId
            targetId: this.model.get('internalid')
        };
    }
});

export = OrderHistoryPackagesView;
