/// <amd-module name="Overview.Home.View.Ext"/>

import * as _ from 'underscore';

import OverviewHomeView = require('../../../Advanced/Overview/JavaScript/Overview.Home.View');
import Utils = require('../../../Commons/Utilities/JavaScript/Utils');
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import { Configuration } from '../../../Advanced/SCA/JavaScript/Configuration';
import { RecordViewsView } from '../../../Advanced/RecordViews/JavaScript/RecordViews.View';
import Handlebars = require('../../../Commons/Utilities/JavaScript/Handlebars');
import OrderHistoryListTrackingNumberView = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.List.Tracking.Number.View');

_.extend(OverviewHomeView.prototype, {

 initialize: _.wrap(OverviewHomeView.prototype.initialize, function initialize(fn) {
    fn.apply(this, _.toArray(arguments).slice(1));

      this.isSCISIntegrationEnabled = false;
  })

});

export = OverviewHomeView;
