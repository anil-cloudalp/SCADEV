/// <amd-module name="OrderHistory.Packages.View.Ext"/>
import * as _ from 'underscore';
import existingView = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.Packages.View');
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';
import TransactionLineViewsCellActionableView = require('../../../Commons/Transaction.Line.Views/JavaScript/Transaction.Line.Views.Cell.Actionable.View');
import TransactionLineViewsQuantityAmountView = require('../../../Commons/Transaction.Line.Views/JavaScript/Transaction.Line.Views.QuantityAmount.View');
import OrderHistoryItemActionsView = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.Item.Actions.View');
import OrderHistoryListTrackingNumberView = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.List.Tracking.Number.View');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');

_.extend(existingView.prototype, {
	
	childViews: _.extend(existingView.prototype.childViews, {
		
		TrackingNumbers: function() {
			
			var shipMethod = this.model.get('shipmethod');
			var speeDeeTrackingLink = (shipMethod && (shipMethod.get('internalid') == "8920"))? this.model.get('trackingLink'): '';
				
			
            return new OrderHistoryListTrackingNumberView({
				model: new Backbone.Model({trackingNumbers: this.model.get('trackingnumbers'),trackingLink: speeDeeTrackingLink}),
                showTrackPackagesLabel: true
            });
        },

        'Items.Collection': function() {
			
			var lines = _.filter(this.model.get('lines'), function (line:any) { return (line.get('item').get('custitem_appf_is_imprint_item') != true); });
				
            return new BackboneCollectionView({
                collection: lines, //this.model.get('lines'),
                childView: TransactionLineViewsCellActionableView,
                viewsPerRow: 1,
                childViewOptions: {
                    navigable: !this.options.application.isStandalone(),
                    application: this.options.application,
                    SummaryView: TransactionLineViewsQuantityAmountView,
                    ActionsView: OrderHistoryItemActionsView,
                    showTaxDetails: Configuration.get('showTaxDetailsPerLine'),
                    showAlert: !_.isUndefined(this.options.showAlert)
                        ? !!this.options.showAlert
                        : true,
                    ignorePriceVisibility: !!this.options.ignorePriceVisibility
                }
            });
        }
	})
});

export = existingView;