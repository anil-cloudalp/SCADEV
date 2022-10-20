/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="CashSale.OpenList.View"/>

import '../../../Commons/Backbone.CompositeView/JavaScript/Backbone.CompositeView';
import * as _ from 'underscore';

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as cashsale_open_list_tpl from 'cashsale_open_list.tpl';

import TransactionListView = require('../../../Commons/Transaction/JavaScript/Transaction.List.View');
import CashSaleCollection = require('./CashSale.Collection');
import ListHeaderView = require('../../../Commons/ListHeader/JavaScript/ListHeader.View');
import LivePaymentModel = require('../../../Advanced/LivePayment/JavaScript/LivePayment.Model');
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');
import Handlebars = require('../../../Commons/Utilities/JavaScript/Handlebars');
import Configuration = require('../../../Advanced/SCA/JavaScript/SC.Configuration');
import AjaxRequestsKiller = require('../../../Commons/AjaxRequestsKiller/JavaScript/AjaxRequestsKiller');
import RecordViewsSelectableView = require('../../../Advanced/RecordViews/JavaScript/RecordViews.Selectable.View');
import GlobalViewsMessageView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.Message.View');
import GlobalViewsPaginationView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.Pagination.View');

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

// returns the amount of days based on milliseconds
const CashSaleListView: any = TransactionListView.extend({
    // @property {Function} template
    template: cashsale_open_list_tpl,

    // @property {String} title
    title: Utils.translate('Cash Sales'),

    // @property {String} page_header
    page_header: Utils.translate('Cash Sales'),

    // @property {Object} attributes
    attributes: {
        id: 'CashSalesHistory',
        class: 'CashSales'
    },

    // @property {Object} events

    // @method initialize
    initialize: function initialize(options): void {
        const self = this;
        const { application } = options;
        let page = '1';

        if (options.routerArguments && options.routerArguments[0]) {
            const params = Utils.parseUrlOptions(options.routerArguments[0]);

            if (params.page) {
                page = params.page.toString();
            }
        }

        this.options.page = page;

        this.collection = new CashSaleCollection();

        this.collection.on('sync', this.showContent, this);

        this.application = application;
        
        // manges sorting and filtering of the collection
        this.listHeader = new ListHeaderView({
            view: this,
            application: application,
            collection: this.collection,
            sorts: this.sortOptions,
            //selectable: true,
            hidePagination: true
        });

        this.collection.on('sync reset', function() {
            const collection = this;


            self.render();
        });
    },

    beforeShowContent: function beforeShowContent() {
        return this.collection.fetch({
            data: {
                status: 'open',
                page: this.options.page
            },
            killerId: AjaxRequestsKiller.getKillerId()
        });
    },

    

    // @method differentCurrencies Returns if there are different currencies selected
    differentCurrencies: function(): boolean {
        let differentCurrencies = [];
        if (this.selectedCashSales.length > 0) {
            const first_cashsale = this.selectedCashSales[0];
            if (first_cashsale.currency) {
                differentCurrencies = _.filter(this.selectedCashSales, function(cashsale) {
                    return cashsale.currency.internalid !== first_cashsale.currency.internalid;
                });
            }
        }

        return differentCurrencies.length > 0;
    },

    // @method getSelectedMenu
    getSelectedMenu: function(): string {
        return 'cashsales';
    },
    
    // @property {Array} sortOptions
    // Array of default sort options
    // sorts only apply on the current collection
    // which might be a filtered version of the original
    sortOptions: [
        {
            value: 'trandate',
            name: Utils.translate('By Cashsale Date'),
            sort: function() {
                return this.models.sort(function(cashsaleOne, cashsaleTwo) {
                    const milli_inv_one = cashsaleOne.get('tranDateInMilliseconds') || 0;
                    const milli_inv_two = cashsaleTwo.get('tranDateInMilliseconds') || 0;

                    if (milli_inv_one !== milli_inv_two) {
                        return milli_inv_one < milli_inv_two ? -1 : 1;
                    }

                    return cashsaleOne.get('tranid') < cashsaleTwo.get('tranid') ? -1 : 1;
                });
            }
        },
        {
            value: 'cashsalenumber',
            name: Utils.translate('By Cashsale Number'),
            sort: function() {
                return this.sortBy(function(cashsale) {
                    return parseInt(
                        cashsale
                            .get('tranid')
                            .split(/[^\(\)0-9]*/)
                            .join(''),
                        10
                    );
                });
            }
        },
        {
            value: 'amountdue',
            name: Utils.translate('By Amount'),
            sort: function() {
                return this.sortBy(function(cashsale) {
                    return cashsale.get('amount');
                });
            }
        }
    ],
    // @property {Object} childViews
    childViews: {
        ListHeader: function() {
            return this.listHeader;
        },
        'CashSale.Results': function() {
            return this._resultsView;
        },
        'GlobalViews.Pagination': function() {
            return new GlobalViewsPaginationView(
                _.extend(
                    {
                        totalPages: Math.ceil(
                            this.collection.totalRecordsFound / this.collection.recordsPerPage
                        )
                    },
                    Configuration.defaultPaginationSettings
                )
            );
        }
    },
    _buildResultsView: function() {
        const self = this;
        let selectedColumns = [];
		
        selectedColumns.push({
            label: 'Created From',
            id: 'createdfrom'
        });
		selectedColumns.push({ label: 'Date', type: 'date', name: 'date', id: 'trandate' });
		selectedColumns.push({
			label: 'Amount',
			/*type: 'currency',
			name: 'amount',*/
			id: 'amount_formatted'
		});
        
        

        const records_collection = new Backbone.Collection(
            this.collection.map(function(cashsale) {
                const model = new Backbone.Model({
                    touchpoint: 'customercenter',
                    title: new Handlebars.SafeString(
                        Utils.translate(
                            'Cash Sale #<span class="tranid">$(0)</span>',
                            cashsale.get('tranid')
                        )
                    ),
                    url: 'cashsales/'+ cashsale.get('internalid'),
                    actionType: 'select-cashsale',

                    active: true,

                    id: cashsale.get('internalid'),
                    internalid: cashsale.get('internalid'),

                    check: cashsale.get('checked'),
                    navigable: true,

                    columns: self._buildColumns(selectedColumns, cashsale)
                });

                return model;
            })
        );

        return new BackboneCollectionView({
            childView: RecordViewsSelectableView,
            collection: records_collection,
            viewsPerRow: 1,
            childViewOptions: {
                referrer: 'cashsales'
            }
        });
    },

    // @method getContext

    
    // @returns {CashSale.OpenList.View.Context}
    getContext: function() {
        this._resultsView = this._buildResultsView();
        let columns = [];
        if (this._resultsView.collection.length > 0) {
            columns = this._resultsView.collection.at(0).get('columns');
        }
        const cashsales = this.collection;

        // @class CashSale.OpenList.View.Context
        return {
            // @property {CashSale.Collection} cashsales
            cashsales: cashsales,
            // @property {Boolean} showcashsales
            showCashSales: !!cashsales.length,
            // @property {String} pageHeader
            pageHeader: this.page_header,
            // @property {Boolean} showMakeAPaymentButton
            showBackToAccount: Configuration.get('siteSettings.sitetype') === 'STANDARD',
            // @property {Array<{}>} columns
            columns: columns,
            // @property {Boolean} showPagination
            showPagination: !!(this.collection.totalRecordsFound && this.collection.recordsPerPage)
        };
    }
});

export = CashSaleListView;




