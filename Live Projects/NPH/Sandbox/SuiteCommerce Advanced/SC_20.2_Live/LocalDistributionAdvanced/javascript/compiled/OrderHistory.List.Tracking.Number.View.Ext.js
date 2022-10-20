define("OrderHistory.List.Tracking.Number.View.Ext", ["require", "exports", "underscore", "OrderHistory.List.Tracking.Number.View"], function (require, exports, _, existingView) {
    "use strict";
    _.extend(existingView.prototype, {
        events: _.extend(existingView.prototype.events, {
            'click [data-action="download_file"]': 'download_file'
        }),
        download_file: function (e) {
            var isDownloadable = this.model.get('isDownloadable') || '';
            var internalid = this.model.get('internalid') || '';
            var url = '/app/site/hosting/scriptlet.nl?script=558&deploy=1&gid=' + internalid;
            var self = this;
            if (isDownloadable == "T") {
                $('#main').hide();
                //$('body').css({"background-color": "#001C31", "height": "100%"});
                $('body').append('<div style="text-align:center"><img src="/media/images/Loading-Icon.gif"/><br/><b>Downloading ...</b></div>');
                window.location.href = url;
            }
        },
        // @method getContext @return OrderHistory.List.Tracking.Number.View.Context
        getContext: function () {
            var trackingLink = this.model.get('trackingLink') || '';
            var self = this;
            var tracking_numbers = _.map(this.model.get('trackingNumbers'), function (tracking_number) {
                return {
                    serviceName: self.getTrackingServiceName(tracking_number),
                    serviceURL: trackingLink || self.getTrackingServiceUrl(tracking_number) || '#',
                    trackingNumber: tracking_number
                };
            });
            var downloadableitems = this.options.downloadableitems || false;
            var showDownload = false;
            if (downloadableitems) {
                var isDownloadable = this.model.get('isDownloadable') || '';
                if (isDownloadable == "T") {
                    showDownload = true;
                }
            }
            // @class OrderHistory.List.Tracking.Number.View.Context
            return {
                // @property {Boolean} isTrackingNumberCollectionEmpty
                isTrackingNumberCollectionEmpty: !tracking_numbers.length,
                // @property {Boolean} isTrackingNumberCollectionLengthEqual1
                isTrackingNumberCollectionLengthEqual1: tracking_numbers.length === 1,
                // @property {Boolean} showContentOnEmpty
                showContentOnEmpty: !!this.options.showContentOnEmpty,
                // @property {String} contentClass
                contentClass: this.options.contentClass || '',
                // @property {String} firstTrackingNumberName
                firstTrackingNumberName: tracking_numbers[0] && tracking_numbers[0].serviceName,
                // @property {String} firstTrackingNumberURL
                firstTrackingNumberURL: tracking_numbers[0] && tracking_numbers[0].serviceURL,
                // @property {String} firstTrackingNumberText
                firstTrackingNumberText: tracking_numbers[0] && tracking_numbers[0].trackingNumber,
                // @property {Number} trackingNumbersLength
                trackingNumbersLength: tracking_numbers.length,
                // @property {Boolean} collapseElements
                collapseElements: !!this.options.collapseElements,
                // @property {Collection<Backboone.Model>} trackingNumbers
                trackingNumbers: tracking_numbers,
                // @property {Boolean} showTrackPackagesLabel
                showTrackPackagesLabel: !_.isUndefined(this.options.showTrackPackagesLabel)
                    ? this.options.showTrackPackagesLabel
                    : false,
                downloadableitems: downloadableitems,
                showDownload: showDownload
            };
        }
    });
    return existingView;
});

//# sourceMappingURL=OrderHistory.List.Tracking.Number.View.Ext.js.map
