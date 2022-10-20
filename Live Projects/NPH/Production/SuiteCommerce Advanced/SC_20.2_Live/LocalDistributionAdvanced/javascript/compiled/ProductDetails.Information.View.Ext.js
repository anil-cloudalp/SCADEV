define("ProductDetails.Information.View.Ext", ["require", "exports", "underscore", "ProductDetails.Information.View", "Configuration", "Backbone", "Backbone.View", "jQuery"], function (require, exports, _, existingView, Configuration_1, Backbone, BackboneView, $) {
    "use strict";
    _.extend(existingView.prototype, {
        events: _.extend(existingView.prototype.events, {
            'click [data-action="selected-tab"]': 'debouncedCheckContentHeight'
        }),
        initialize: function initialize() {
            BackboneView.prototype.initialize.apply(this, arguments);
            this.details = this.options.details;
            Backbone.on('resizeView', function (event) {
                $('[data-action="sc-pusher-dismiss"]').click();
                return true;
            });
            this.addInfo = [];
            if (_.has(this.options.searchRes, 'results')) {
                this.addInfo = this.options.searchRes.results;
            }
        },
        render: function () {
            this.details = this.computeDetailsArea();
            //this.details = this.details || this.computeDetailsArea();
            this._render();
            if (!SC.isPageGenerator()) {
                this.debouncedCheckContentHeight();
            }
        },
        debouncedCheckContentHeight: function () {
            return _.defer(_.bind(this.checkContentHeight, this));
        },
        checkContentHeight: function () {
            var content_height = this.$('.active [data-type="information-content-text"]').height();
            if (content_height <= 370) {
                this.$('[data-type="information-content-text-actions"]').hide();
            }
            else {
                this.$('[data-type="information-content-text-actions"]').show();
            }
        },
        computeDetailsArea: function () {
            var self = this;
            var details = [];
            var additionalInfo = '';
            var addInfo = this.addInfo;
            if (addInfo.length > 0) {
                additionalInfo = '<table class="product-details-information-additionalinfo">' +
                    '	<colgroup>' +
                    '	 <col width="25%">' +
                    '	 <col>' +
                    '	</colgroup>' +
                    '	<tbody>';
                _.each(addInfo, function (result) {
                    additionalInfo +=
                        '		<tr>' +
                            '			<th>' + result.title + '</th>' +
                            '			<td>' + result.value + '</td>' +
                            '		</tr>';
                });
                additionalInfo +=
                    '	</tbody>' +
                        '</table>';
            }
            var customerCare = '<div class="product-details-information-customercare">' +
                '	<div class="section-delivery">' +
                '	<h5><a title="Shipping Policy" href="/shipping-policy" target="_blank">Delivery</a></h5>' +
                '	<p>All in stock items <br>ship next business day.</p>' +
                '	</div>' +
                '	<div class="section-customer-service">' +
                '	<h5><a title="Customer Care" href="/contact-us" target="_blank">Customer Service</a></h5>' +
                '	<p>Questions? <br>Call us at 800.662.6022</p>' +
                '	</div>' +
                '	<div class="section-returns">' +
                '	<h5><a title="returns" href="/returns" target="_blank">Easy Returns</a></h5>' +
                '	<p>30 Day Return Policy</p>' +
                '	</div>' +
                '	</div>';
            _.each(Configuration_1.Configuration.get('productDetailsInformation', []), function (item_information) {
                var content = '';
                if (item_information.contentFromKey) {
                    content = self.model.get('item').get(item_information.contentFromKey);
                }
                if (content && $.trim(content)) {
                    // @class ProductDetails.Information.DataContainer
                    details.push({
                        // @property {String} name
                        name: item_information.name,
                        // @property {String} content Any string and event valid HTML is allowed
                        content: content,
                        // @property {String} itemprop
                        itemprop: item_information.itemprop
                    });
                    // @class ProductDetails.Information.View
                }
            });
            if (additionalInfo) {
                details.push({
                    //@property {String} name
                    name: "Additional Information"
                    //@property {String} content Any string and event valid HTML is allowed
                    ,
                    content: additionalInfo
                    //@property {String} itemprop
                    ,
                    itemprop: "AdditionalInformation"
                });
            }
            details.push({
                //@property {String} name
                name: "Customer Care"
                //@property {String} content Any string and event valid HTML is allowed
                ,
                content: customerCare
                //@property {String} itemprop
                ,
                itemprop: "CustomerCare"
            });
            return details;
        }
    });
    return existingView;
});

//# sourceMappingURL=ProductDetails.Information.View.Ext.js.map
