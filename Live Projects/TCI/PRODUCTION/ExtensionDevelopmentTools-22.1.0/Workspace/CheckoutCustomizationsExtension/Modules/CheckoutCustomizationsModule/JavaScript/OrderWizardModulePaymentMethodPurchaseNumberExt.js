define('TCI.CheckoutCustomizationsExtension.OrderWizardModulePaymentMethodPurchaseNumberExt',
[
    'OrderWizard.Module.PaymentMethod.PurchaseNumber',
    'LiveOrder.Model',
    'underscore',
    'Utils'
],
function
(
    OrderWizardModulePaymentMethodPurchaseNumber,
    LiveOrderModel,
    _,
    Utils
)
{
    'use strict';

    OrderWizardModulePaymentMethodPurchaseNumber.prototype.submit = _.wrap(OrderWizardModulePaymentMethodPurchaseNumber.prototype.submit, function (fn)
    {
        var cart = LiveOrderModel.getInstance();
        var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
        var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith != '' && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
        if (payingWith === 'purchaseOrder' && (_.isNull(jQuery('#purchase-order-number').val()) || _.isEmpty(jQuery('#purchase-order-number').val())))
        {
            return jQuery.Deferred().reject({errorCode: 'ERR_PO_NUMBER_REQUIRED', errorMessage: Utils.translate('Please enter a PO Number')});
        }
        fn.apply(this, _.toArray(arguments).slice(1));
    });

    OrderWizardModulePaymentMethodPurchaseNumber.prototype.getContext = _.wrap(OrderWizardModulePaymentMethodPurchaseNumber.prototype.getContext, function (fn)
    {
        var context = fn.apply(this, _.toArray(arguments).slice(1));
        var cart = LiveOrderModel.getInstance();
        var sessionpayingWith = sessionStorage.getItem('custbody_scapayingwithselection');
        var payingWith = cart.get('options') && cart.get('options').custbody_scapayingwithselection ? cart.get('options').custbody_scapayingwithselection : sessionpayingWith !='' && !_.isUndefined(sessionpayingWith) && !_.isNull(sessionpayingWith) ? sessionpayingWith : null;
        if (payingWith !== 'purchaseOrder')
        {
          context.hidePurchaseNumberModule = true;
        }

        return context;
    });
});

