/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

define('SCA', [
    'Application',
    'Account.ForgotPassword.ServiceController',
    'Account.Login.ServiceController',
    'Account.Register.ServiceController',
    'Account.RegisterAsGuest.ServiceController',
    'Account.ResetPassword.ServiceController',
    'Address.ServiceController',
    'CheckoutEnvironment.ServiceController',
    'ShoppingUserEnvironment.ServiceController',
    'MyAccountEnvironment.ServiceController',
    'CreditCard.ServiceController',
    'CreditMemo.ServiceController',
    'CustomerPayment.ServiceController',
    'Deposit.ServiceController',
    'DepositApplication.ServiceController',
    'GoogleTagManager.ServiceController',
    'LiveOrder.GiftCertificate.ServiceController',
    'LiveOrder.Line.ServiceController',
    'LiveOrder.ServiceController',
    'LivePayment.ServiceController',
    'Newsletter.ServiceController',
    'ReorderItems.ServiceController',
    'OrderHistory.ServiceController',
    'PaymentInstrumentACH.ServiceController',
    'PaymentMethod.ServiceController',
    'PageType.ServiceController',
    'PrintStatement.ServiceController',
    'ProductList.ServiceController',
    'ProductList.Item.ServiceController',
    'ProductReviews.ServiceController',
    'Profile.ServiceController',
    'SiteSettings.ServiceController',
    'Quote.ServiceController',
    'Receipt.ServiceController',
    'ReturnAuthorization.ServiceController',
    'TransactionHistory.ServiceController',
    'ReleaseMetadata',
    'QuoteToSalesOrderValidator.Model',
    'QuoteToSalesOrder.ServiceController',
    'CMSadapter.Model',
    'Invoice.ServiceController',
    'Transaction.ServiceController',
    'StoreLocator.ServiceController',
    'Location.ServiceController',
    'ExternalPayment.Model',
    'SC.BaseComponent',
    'Cart.Component',
    'CardHolderAuthentication.Model',
    'CardHolderAuthentication.Utils',
    'SecurityHeaders'
], function() {});
