/// <amd-module name="OrderHistory.Details.View.Ext"/>
import * as _ from 'underscore';
import existingView = require('../../../Advanced/OrderHistory/JavaScript/OrderHistory.Details.View');
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import BigNumber = require('../../../Commons/Utilities/JavaScript/BigNumber');
import { GlobalViewsMessageView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.Message.View';
import LiveOrderModel = require('../../../Commons/LiveOrder/JavaScript/LiveOrder.Model');

_.extend(existingView.prototype, {
    //,
	 // @method addToCart
    addToCart: function(e) {
        e.preventDefault();

        const self = this;
        const line_id = this.$(e.target).data('line-id');
        const $form = this.$(e.target).closest('[data-type="order-item"]');
        const $alert_placeholder = $form.find('[data-type=alert-placeholder]');
        const quantity =
            this.$(e.target).data('partial-quantity') || this.$(e.target).data('item-quantity');
        const selected_line = this.model.get('lines').get(line_id);

        // The 'fulfillmentChoice' for reorders must be setted to 'ship'
        if (selected_line.get('fulfillmentChoice')) {
            selected_line.set('fulfillmentChoice', 'ship');
        }
		
		//console.log(selected_line);
		//add imprint item lines
		var imprintDetails
		,	isCrossItem
		,	isHolyItem
		,	imprintItemId = 0
		,	crossItemId = 0
		,	holyItemId = 0;
		
		if(_.has(selected_line.get('options'),'models')){
			_.each(selected_line.get('options').models, function(opt:any){
				
				if(opt.get('cartOptionId') == "custcol_appf_imprint_item_details")
					imprintDetails = !_.isUndefined(opt.get('value'))? opt.get('value').internalid : '';
				
				if(opt.get('cartOptionId') == "custcol_appf_imprint_cross")
					isCrossItem = !_.isUndefined(opt.get('value'))? opt.get('value').internalid : '';
				
				if(opt.get('cartOptionId') == "custcol_appf_holy_bible")
					isHolyItem = !_.isUndefined(opt.get('value'))? opt.get('value').internalid : '';
			});
		}
		if(imprintDetails){
			if(imprintDetails.indexOf('|') != -1){
				 imprintItemId = parseInt(imprintDetails.split('|')[0]);
			 
				if(isCrossItem == "T")
					 crossItemId = parseInt(imprintDetails.split('|')[2]);
				if(isHolyItem == "T")
					holyItemId = parseInt(imprintDetails.split('|')[4]);
			}
		}
		
		var imprintItemQty = selected_line.get('quantity') || 0;
		var imprintItemLines = [];
		if(imprintItemId && imprintItemQty){
			
			imprintItemLines.push({
				quantity: imprintItemQty,
				item: {
					internalid: imprintItemId
				}
			});
			
			if(crossItemId){
				
				imprintItemLines.push({
					quantity: imprintItemQty,
					item: {
						internalid: crossItemId
					}
				});
			}
			if(holyItemId){
				imprintItemLines.push({
					quantity: imprintItemQty,
					item: {
						internalid: holyItemId
					}
				});
			}
		}
		imprintItemLines.push(selected_line);
		
		LiveOrderModel.getInstance().addLines(imprintItemLines).done(function() {
				
			self.trackEventReorder(selected_line);
			// show warning if some options were not set
			const availableOptions = selected_line.get('item').get('itemoptions_detail').fields;

			const areMissingOptions = !_.every(selected_line.get('options').models, function(
				optionModel: any
			) {
				return _.find(availableOptions, function(availableOption: any) {
					return optionModel.get('cartOptionId') === availableOption.internalid;
				});
			});

			let message;
			if (!areMissingOptions) {
				message =
					quantity > 1
						? Utils.translate(
							  '$(0) Items successfully added to <a href="#" data-touchpoint="viewcart">your cart</a><br/>',
							  quantity
						  )
						: Utils.translate(
							  'Item successfully added to <a href="#" data-touchpoint="viewcart">your cart</a><br/>'
						  );
			} else {
				message =
					quantity > 1
						? Utils.translate(
							  '$(0) Items were added to <a href="#" data-touchpoint="viewcart">your cart</a> with variants<br/>',
							  quantity
						  )
						: Utils.translate(
							  'Item was added to <a href="#" data-touchpoint="viewcart">your cart</a> with variants<br/>'
						  );
			}

			const alert = new GlobalViewsMessageView({
				message: message,
				type: areMissingOptions ? 'warning' : 'success',
				closable: true
			});

			alert.show($alert_placeholder, 6000);
		});
    },
	getShippablePackages: function() {
        const self = this;
        const shippable_lines = this.getShippableLines();
        const is_multi_ship_to = this.model.get('ismultishipto');
        const ship_groups = {};
        let amount = 0;

        _.each(shippable_lines || [], function(line: any) {
            if (
                line.get('quantitybackordered') ||
                line.get('quantitypicked') ||
                line.get('quantitypacked')
            ) {
                const shipaddress = is_multi_ship_to
                    ? line.get('shipaddress')
                    : self.model.get('shipaddress');
                const shipmethod = is_multi_ship_to
                    ? line.get('shipmethod')
                    : self.model.get('shipmethod');

                if (line.get('quantitybackordered')) {
                    let pending_line;

                    if (line.get('quantitypacked') === line.get('quantity')) {
                        pending_line = line;
                    } else {
                        pending_line = line.clone();

                        pending_line.set('item', line.get('item').attributes);

                        pending_line.set('quantity', line.get('quantitybackordered'));

                        amount = new BigNumber(line.get('rate'))
                            .times(pending_line.get('quantity'))
                            .toNumber();
                        pending_line.set('amount', amount);
                    }

                    const key_pending = [shipaddress, shipmethod, 'pending'].join('-');

                    ship_groups[key_pending] = ship_groups[key_pending] || {
                        internalid: key_pending,
                        shipaddress: self.model
                            .get('addresses')
                            .findWhere({ internalid: shipaddress }),
                        shipmethod: self.model
                            .get('shipmethods')
                            .findWhere({ internalid: shipmethod }),
                        packageGroup: 'ship',
                        status: {
                            internalid: 'pending',
                            name: Utils.translate('Pending shipment')
                        },
                        lines: []
                    };

                    ship_groups[key_pending].lines.push(pending_line);
                }

                if (line.get('quantitypicked') || line.get('quantitypacked')) {
                    let picked_packed_line;

                    let quantity = 0;

                    if (line.get('quantitypicked')) {
                        quantity += line.get('quantitypicked');
                    }

                    if (line.get('quantitypacked')) {
                        quantity += line.get('quantitypacked');
                    }

                    if (quantity === line.get('quantity')) {
                        picked_packed_line = line;
                    } else {
                        picked_packed_line = line.clone();

                        picked_packed_line.set('quantity', quantity);

                        amount = new BigNumber(line.get('rate'))
                            .times(picked_packed_line.get('quantity'))
                            .toNumber();

                        picked_packed_line.set('amount', amount);

                        picked_packed_line.set('item', line.get('item').attributes);
                    }

                    const key_processing = [shipaddress, shipmethod, 'processing'].join('-');

                    ship_groups[key_processing] = ship_groups[key_processing] || {
                        internalid: key_processing,
                        shipaddress: self.model
                            .get('addresses')
                            .findWhere({ internalid: shipaddress }),
                        shipmethod: self.model
                            .get('shipmethods')
                            .findWhere({ internalid: shipmethod }),
                        packageGroup: 'ship',
                        status: {
                            internalid: 'picked_packed',
                            name: Utils.translate('Processing shipment')
                        },
                        lines: []
                    };

                    ship_groups[key_processing].lines.push(picked_packed_line);
                }
            }
        });

        this.model.get('fulfillments').each(function(fulfillment) {
            const shipaddress = self.model
                .get('addresses')
                .findWhere({ internalid: fulfillment.get('shipaddress') });
            const shipmethod = self.model
                .get('shipmethods')
                .findWhere({ internalid: fulfillment.get('shipmethod') });

            fulfillment.set('shipaddress', shipaddress);
            fulfillment.set('shipmethod', shipmethod);

            const lines = _.compact(
                fulfillment.get('lines').map(function(line) {
                    let fulfilled_line;
                    const original_line = self.model.get('lines').get(line.get('internalid'));

                    if (original_line && original_line.get('linegroup') === 'shippable') {
                        // ignore instore lines
                        fulfilled_line = original_line.clone();

                        fulfilled_line.set('quantity', original_line.get('quantityfulfilled'));

                        amount = new BigNumber(original_line.get('rate'))
                            .times(fulfilled_line.get('quantity'))
                            .toNumber();

                        fulfilled_line.set('amount', amount);

                        fulfilled_line.set('item', original_line.get('item'), { silent: true });

                        return fulfilled_line;
                    }
                })
            );

            if (lines.length) {
                ship_groups[fulfillment.get('internalid')] = ship_groups[
                    fulfillment.get('internalid')
                ] || {
                    internalid: fulfillment.get('internalid'),
                    shipaddress: shipaddress,
                    shipmethod: shipmethod,
                    packageGroup: 'ship',
                    status: {
                        internalid: 'shipped',
                        name: Utils.translate('Shipped')
                    },
                    date: fulfillment.get('date'),
					trackingLink: fulfillment.get('trackingLink'),
                    trackingnumbers: fulfillment.get('trackingnumbers'),
                    lines: []
                };

                ship_groups[fulfillment.get('internalid')].lines = lines;
            }
        });

        return _.values(ship_groups);
    }
});

export = existingView;