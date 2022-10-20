/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("OrderWizard.Module.MultiShipTo.Package.List", ["require", "exports", "underscore", "order_wizard_msr_package_list.tpl", "order_wizard_msr_package_details_cell.tpl", "jQuery", "Utils", "Wizard.StepModule", "Backbone.CollectionView", "OrderWizard.Module.MultiShipTo.Package.Details", "Transaction.Line.Collection", "Transaction.Shipmethod.Collection", "Backbone"], function (require, exports, _, order_wizard_msr_package_list_tpl, order_wizard_msr_package_details_cell_tpl, jQuery, Utils, Wizard_StepModule_1, BackboneCollectionView, OrderWizardModuleMultiShipToPackageDetails, TransactionLineCollection, TransactionShipmethodCollection, Backbone) {
    "use strict";
    return Wizard_StepModule_1.WizardStepModule.extend({
        template: order_wizard_msr_package_list_tpl,
        events: {
            'click [data-action="remove-item"]': 'removeItemHandle',
            'click [data-action="items-expander"]': 'expandCollapsePackage'
        },
        initialize: function () {
            Wizard_StepModule_1.WizardStepModule.prototype.initialize.apply(this, arguments);
            var self = this;
            this.wizard.model.on('multishipto-address-applied', function () {
                self.render();
            });
            this.wizard.model.on('ismultishiptoUpdated', _.bind(this.render, this));
            this.expanded_packages = [];
        },
        isActive: function () {
            return (this.wizard.model.get('ismultishipto') && this.wizard.model.shippingAddressIsRequired());
        },
        // Return the array of line set with the same address id
        getLinesForAddressId: function (address_id) {
            return this.wizard.model.get('lines').groupBy(function (line) {
                return line.get('shipaddress');
            })[address_id];
        },
        // Conserve the state (expanded/collapsed) of each package when re-rendering
        expandCollapsePackage: function (e) {
            var package_id = jQuery(e.target)
                .closest('[data-address-id]')
                .data('address-id');
            var package_index = _.indexOf(this.expanded_packages, package_id);
            !~package_index
                ? this.expanded_packages.push(package_id)
                : this.expanded_packages.splice(package_index, 1);
        },
        // Handle the remove click event, and delegate the real logic to the father view
        removeItemHandle: function (e) {
            this.clearGeneralMessages();
            var $selected_button = jQuery(e.target);
            var selected_item_id = $selected_button.data('item-id');
            this.removeItem(selected_item_id);
        },
        // Mange the action of removing an item from a package, which means unset the shipaddress property of the item
        removeItem: function (item_id) {
            var self = this;
            var model = this.wizard.model;
            var selected_item = model.get('lines').get(item_id);
            var package_address_id = selected_item.get('shipaddress');
            selected_item.unset('shipaddress');
            model.save().then(function () {
                if (!self.getLinesForAddressId(package_address_id)) {
                    self.wizard.options.profile
                        .get('addresses')
                        .get(package_address_id)
                        .set('check', false);
                    self.expanded_packages.splice(_.indexOf(self.expanded_packages, +package_address_id), 1);
                    self.showGeneralMessage(Utils.translate('Shipment has no more items'), false);
                }
                self.render();
                model.trigger('multishipto-line-updated');
            });
        },
        childViews: {
            'Packages.Collection': function () {
                return new BackboneCollectionView({
                    collection: this.getPackages(),
                    childView: OrderWizardModuleMultiShipToPackageDetails,
                    cellTemplate: order_wizard_msr_package_details_cell_tpl,
                    viewsPerRow: 1,
                    childViewOptions: {
                        application: this.wizard.application,
                        wizard: this.wizard
                    }
                });
            }
        },
        // @method getPackages Returns the lists of packages (items grouped by address) created
        // @return {Backbone.Collection<MultiShipTo.Package>}
        getPackages: function () {
            var result = [];
            var package_item;
            var package_address;
            var self = this;
            var items_with_address = _.filter(this.wizard.model.getShippableLines(), function (line) {
                return !!line.get('shipaddress');
            });
            var items_per_address = _.groupBy(items_with_address, function (line) {
                return line.get('shipaddress');
            });
            var addresses = this.wizard.options.profile.get('addresses');
            var shipping_methods = this.wizard.model.get('multishipmethods');
            _.each(_.keys(items_per_address), function (address_id) {
                package_address = addresses.get(address_id);
                // @class MultiShipTo.Package @extend Backbone.Model
                package_item = new Backbone.Model({
                    // @property {Transaction.Line.Collection} lines
                    lines: new TransactionLineCollection(items_per_address[address_id]),
                    // @property {Address.Model} address
                    address: package_address,
                    // @property {OrderShipmethod.Collection} shippingMethods
                    shippingMethods: new TransactionShipmethodCollection(shipping_methods[address_id]),
                    // @property {String} packageTitle
                    packageTitle: package_address.get('fullname') + ' - ' + package_address.get('addr1'),
                    // @property {Boolean} isPackageExpanded
                    isPackageExpanded: _(self.expanded_packages).indexOf(+address_id) >= 0
                });
                result.push(package_item);
            });
            return result;
        },
        render: function () {
            this._render();
        }
    });
});

//# sourceMappingURL=OrderWizard.Module.MultiShipTo.Package.List.js.map
