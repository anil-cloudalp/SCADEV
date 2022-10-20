try {
/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/* eslint-disable */
/* global define: false */
/* global require: false */
/* global requirejs: false */

(function loadTemplateSafe()
{
	'use strict';

    define('SC.LoadTemplateSafe', [], function() {
        return {
            load: function(name, req, onload, config) {
                try {
                    req(
                        [name],
                        function(value) {
                            onload(value);
                        },
                        function() {
                            onload(null);
                        }
                    );
                } catch (e) {}
            }
        };
    });

    function copyProperties(source, dest) {
		for (var property in source)
		{
            if (source.hasOwnProperty(property)) {
                dest[property] = source[property];
            }
        }
    }

    function insertPlugin(deps) {
        if(deps.splice){
            for (var i = 0; i < deps.length; i++) {
                if (
                    deps[i].indexOf('.tpl') !== -1 &&
                    deps[i].indexOf('SC.LoadTemplateSafe!') === -1
                ) {
                    deps[i] = 'SC.LoadTemplateSafe!' + deps[i];
                }
            }
        }
    }
    function isInEcmaScriptModule(module, component) {
        if (typeof module === 'object' && module.__esModule){
            for (var exportedElement in module) {
                if (module.hasOwnProperty(exportedElement) &&
                    module[exportedElement] === component) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
    function setModuleName(module, name) {
        if(module._AMDModuleName === undefined){
            module._AMDModuleName = [name];
            return;
        }
        var existingModule = (srcRequire || require)(module._AMDModuleName[0]);
        if (existingModule === module || isInEcmaScriptModule(existingModule, module)) {
            module._AMDModuleName.push(name);
        } else {
            module._AMDModuleName = [name];
        }
    }

    function wrapDefine(func) {
        // define = function (name, deps, callback)
        function newFunc(name, deps, callback) {

            /* add AMD module name to modules that are functions or
             to functions exported in ECMA SCRIPT modules
             this is required by extensibility layer, especially by
             the visual component. The AMD name is used to enhance
             views */
            function newCallback() {
                var module = callback.apply(null, arguments);
                //In gulp-local some module could have no name
                if (name) {
                    // ECMA SCRIPT modules are not returned by the callback, they are
                    // passed as argument to the callback
                    if (deps.length >= 2 && deps[1] === 'exports' && arguments[1].__esModule) {
                        module = arguments[1];
                    }
                    if (module && typeof module === 'object' && module.__esModule) {
                        // Assign the AMD module name to each function exported in
                        // an ECMAScript module
                        for (var property in module) {
                            if (module.hasOwnProperty(property) &&
                                typeof module[property] === 'function') {
                                setModuleName(module[property], name);
                            }
                        }
                    } else if (typeof module === 'function') {
                        setModuleName(module, name);
                    }
                }
                return module;
            }
            if(SC.isDevelopment){
                // if gulp-local (uses requirejs)
                if (typeof name !== 'string') {
                    //Adjust args appropriately
                    callback = deps;
                    deps = name;
                    name = null;
                    //This module may not have dependencies
                    if (!deps.splice) {
                        callback = deps;
                        deps = null;
                        return func.call(null, newCallback);
                    }
                    insertPlugin(deps);
                    return func.call(null, deps, newCallback);
                }
                insertPlugin(deps);
                return func.call(null, name, deps, newCallback);
            } else {
                if (!deps.splice) {
                    //deps is not an array, so probably means
                    //an object literal or factory function for
                    //the value. Adjust args.
                    callback = deps;
                    deps = [];
                } else {
                    //apply plugin only if are dependencies
                    insertPlugin(deps);
                }
                return func.call(null, name, deps, newCallback);
            }

        }
        copyProperties(func, newFunc);

        return newFunc;
    }
    // require = function (deps, callback, relName, forceSync, alt)
    function wrapRequire(func) {
        function newFunc(deps, callback, relName, forceSync, alt) {
            insertPlugin(arguments[0]);
            if(!SC.isDevelopment){
                // if not gulp-local force almond.js to execute synchronously,
                // it's required to avoid issue with seo engine, if forceSync is 'false'
                // errors can not be captured!!
                if (typeof relName === 'function') {
                    //if relName is a function, the actual forceSync parameter will be the last one (alt)
                    return func.call(null, deps, callback, relName, forceSync, true);
                }
                return func.call(null, deps, callback, relName, true, alt);
            }
            return func.apply(null, arguments);
        }
        copyProperties(func, newFunc);

        return newFunc;
    }

    define = wrapDefine(define);
    requirejs = require = wrapRequire(require);
})();

require.config({
	"paths": {
		"Address.Collection": "javascript\\compiled\\Address.Collection",
		"Address.Details.View": "javascript\\compiled\\Address.Details.View",
		"Address.Edit.View": "javascript\\compiled\\Address.Edit.View",
		"Address.List.View": "javascript\\compiled\\Address.List.View",
		"Address.Model": "javascript\\compiled\\Address.Model",
		"Address": "javascript\\compiled\\Address",
		"AjaxRequestsKiller": "javascript\\compiled\\AjaxRequestsKiller",
		"Application": "javascript\\compiled\\Application",
		"ApplicationLayout": "javascript\\compiled\\ApplicationLayout",
		"Generic.LayoutComponent": "javascript\\compiled\\Generic.LayoutComponent",
		"SC.LayoutComponent": "javascript\\compiled\\SC.LayoutComponent",
		"Backbone.CollectionView": "javascript\\compiled\\Backbone.CollectionView",
		"Backbone.CompositeView.Fade": "javascript\\compiled\\Backbone.CompositeView.Fade",
		"Backbone.CompositeView": "javascript\\compiled\\Backbone.CompositeView",
		"Backbone.FormView": "javascript\\compiled\\Backbone.FormView",
		"Backbone.FormView.Type": "javascript\\compiled\\Backbone.FormView.Type",
		"Backbone.CachedCollection": "javascript\\compiled\\Backbone.CachedCollection",
		"Backbone.CachedModel": "javascript\\compiled\\Backbone.CachedModel",
		"Backbone.CachedSync": "javascript\\compiled\\Backbone.CachedSync",
		"Backbone.Model": "javascript\\compiled\\Backbone.Model",
		"Backbone.Sync": "javascript\\compiled\\Backbone.Sync",
		"Backbone.View.ApplyPermissions": "javascript\\compiled\\Backbone.View.ApplyPermissions",
		"Backbone.View.Bootstrap": "javascript\\compiled\\Backbone.View.Bootstrap",
		"Backbone.View.DatePicker": "javascript\\compiled\\Backbone.View.DatePicker",
		"Backbone.View.DebugTemplateName": "javascript\\compiled\\Backbone.View.DebugTemplateName",
		"Backbone.View.PageGeneratorImages": "javascript\\compiled\\Backbone.View.PageGeneratorImages",
		"Backbone.View.Plugin.ApplyPermissions": "javascript\\compiled\\Backbone.View.Plugin.ApplyPermissions",
		"Backbone.View.Plugin.Bootstrap": "javascript\\compiled\\Backbone.View.Plugin.Bootstrap",
		"Backbone.View.Plugin.DatePicker": "javascript\\compiled\\Backbone.View.Plugin.DatePicker",
		"Backbone.View.Plugin.DebugTemplateName": "javascript\\compiled\\Backbone.View.Plugin.DebugTemplateName",
		"Backbone.View.Plugin.OldIEFix": "javascript\\compiled\\Backbone.View.Plugin.OldIEFix",
		"Backbone.View.Plugin.PageGeneratorImages": "javascript\\compiled\\Backbone.View.Plugin.PageGeneratorImages",
		"Backbone.View.Plugins": "javascript\\compiled\\Backbone.View.Plugins",
		"Backbone.View.render": "javascript\\compiled\\Backbone.View.render",
		"Backbone.View.saveForm": "javascript\\compiled\\Backbone.View.saveForm",
		"Backbone.View.toggleReset": "javascript\\compiled\\Backbone.View.toggleReset",
		"Backbone.View": "javascript\\compiled\\Backbone.View",
		"Bootstrap.Rate": "javascript\\compiled\\Bootstrap.Rate",
		"Bootstrap.Slider": "javascript\\compiled\\Bootstrap.Slider",
		"Cart.AddToCart.Button.View": "javascript\\compiled\\Cart.AddToCart.Button.View",
		"Cart.Component": "javascript\\compiled\\Cart.Component",
		"Cart.Confirmation.Helpers": "javascript\\compiled\\Cart.Confirmation.Helpers",
		"Cart.Confirmation.View": "javascript\\compiled\\Cart.Confirmation.View",
		"Cart.Detailed.View": "javascript\\compiled\\Cart.Detailed.View",
		"Cart.Item.Actions.View": "javascript\\compiled\\Cart.Item.Actions.View",
		"Cart.Item.Summary.View": "javascript\\compiled\\Cart.Item.Summary.View",
		"Cart.Lines.Free.View": "javascript\\compiled\\Cart.Lines.Free.View",
		"Cart.Lines.View": "javascript\\compiled\\Cart.Lines.View",
		"Cart.Promocode.List.Item.View": "javascript\\compiled\\Cart.Promocode.List.Item.View",
		"Cart.Promocode.List.View": "javascript\\compiled\\Cart.Promocode.List.View",
		"Cart.Promocode.Notifications.View": "javascript\\compiled\\Cart.Promocode.Notifications.View",
		"Cart.PromocodeForm.View": "javascript\\compiled\\Cart.PromocodeForm.View",
		"Cart.QuickAddToCart.View": "javascript\\compiled\\Cart.QuickAddToCart.View",
		"Cart.Summary.View": "javascript\\compiled\\Cart.Summary.View",
		"Cart": "javascript\\compiled\\Cart",
		"ICart.Component": "javascript\\compiled\\ICart.Component",
		"Categories.Collection": "javascript\\compiled\\Categories.Collection",
		"Categories.Model": "javascript\\compiled\\Categories.Model",
		"Categories": "javascript\\compiled\\Categories",
		"Categories.Utils": "javascript\\compiled\\Categories.Utils",
		"CreditCard.Edit.Form.SecurityCode.Tooltip.View": "javascript\\compiled\\CreditCard.Edit.Form.SecurityCode.Tooltip.View",
		"CreditCard.Edit.Form.SecurityCode.View": "javascript\\compiled\\CreditCard.Edit.Form.SecurityCode.View",
		"CreditCard.Edit.Form.View": "javascript\\compiled\\CreditCard.Edit.Form.View",
		"CreditCard.View": "javascript\\compiled\\CreditCard.View",
		"CreditMemo.Details.View": "javascript\\compiled\\CreditMemo.Details.View",
		"CreditMemo.Model": "javascript\\compiled\\CreditMemo.Model",
		"CancelableEventEmitter": "javascript\\compiled\\CancelableEventEmitter",
		"Collection": "javascript\\compiled\\Collection",
		"CollectionView": "javascript\\compiled\\CollectionView",
		"Environment": "javascript\\compiled\\Environment",
		"Error": "javascript\\compiled\\Error",
		"EventEmitter": "javascript\\compiled\\EventEmitter",
		"ExportedModulesNames": "javascript\\compiled\\ExportedModulesNames",
		"FormView": "javascript\\compiled\\FormView",
		"Model": "javascript\\compiled\\Model",
		"PageTypeFormView": "javascript\\compiled\\PageTypeFormView",
		"PageTypeView": "javascript\\compiled\\PageTypeView",
		"RowView": "javascript\\compiled\\RowView",
		"ServiceClient": "javascript\\compiled\\ServiceClient",
		"Types": "javascript\\compiled\\Types",
		"Validator": "javascript\\compiled\\Validator",
		"View": "javascript\\compiled\\View",
		"BackboneExtras": "javascript\\compiled\\BackboneExtras",
		"BackboneValidationExtras": "javascript\\compiled\\BackboneValidationExtras",
		"JQueryExtras": "javascript\\compiled\\JQueryExtras",
		"CustomFields": "javascript\\compiled\\CustomFields",
		"ErrorManagement.ExpiredLink.View": "javascript\\compiled\\ErrorManagement.ExpiredLink.View",
		"ErrorManagement.InternalError.View": "javascript\\compiled\\ErrorManagement.InternalError.View",
		"ErrorManagement.PageNotFound.View": "javascript\\compiled\\ErrorManagement.PageNotFound.View",
		"ErrorManagement.View": "javascript\\compiled\\ErrorManagement.View",
		"SCCollection": "javascript\\compiled\\SCCollection",
		"SCCollectionView": "javascript\\compiled\\SCCollectionView",
		"SCFormView": "javascript\\compiled\\SCFormView",
		"SCModel": "javascript\\compiled\\SCModel",
		"SCView": "javascript\\compiled\\SCView",
		"Facets.Browse.CategoryHeading.View": "javascript\\compiled\\Facets.Browse.CategoryHeading.View",
		"Facets.Browse.View": "javascript\\compiled\\Facets.Browse.View",
		"Facets.CategoryCell.View": "javascript\\compiled\\Facets.CategoryCell.View",
		"Facets.CategoryCellList.View": "javascript\\compiled\\Facets.CategoryCellList.View",
		"Facets.Collection": "javascript\\compiled\\Facets.Collection",
		"Facets.Empty.View": "javascript\\compiled\\Facets.Empty.View",
		"Facets.FacetCategoriesList.View": "javascript\\compiled\\Facets.FacetCategoriesList.View",
		"Facets.FacetCategory.View": "javascript\\compiled\\Facets.FacetCategory.View",
		"Facets.FacetedNavigation.View": "javascript\\compiled\\Facets.FacetedNavigation.View",
		"Facets.FacetedNavigationItemCategory.View": "javascript\\compiled\\Facets.FacetedNavigationItemCategory.View",
		"Facets.FacetsDisplay.View": "javascript\\compiled\\Facets.FacetsDisplay.View",
		"Facets.Helper": "javascript\\compiled\\Facets.Helper",
		"Facets.ItemListSummary.View": "javascript\\compiled\\Facets.ItemListSummary.View",
		"Facets.Router": "javascript\\compiled\\Facets.Router",
		"Facets.Translator": "javascript\\compiled\\Facets.Translator",
		"Facets": "javascript\\compiled\\Facets",
		"FacetsItemRowView": "javascript\\compiled\\FacetsItemRowView",
		"FacetsItemsCollectionView": "javascript\\compiled\\FacetsItemsCollectionView",
		"ProductListPage.Component": "javascript\\compiled\\ProductListPage.Component",
		"GlobalViews.BackToTop.View": "javascript\\compiled\\GlobalViews.BackToTop.View",
		"GlobalViews.CenteredModal.View": "javascript\\compiled\\GlobalViews.CenteredModal.View",
		"GlobalViews.Confirmation.View": "javascript\\compiled\\GlobalViews.Confirmation.View",
		"GlobalViews.CountriesDropdown.View": "javascript\\compiled\\GlobalViews.CountriesDropdown.View",
		"GlobalViews.CurrencySelector.View": "javascript\\compiled\\GlobalViews.CurrencySelector.View",
		"GlobalViews.FormatPaymentMethod.View": "javascript\\compiled\\GlobalViews.FormatPaymentMethod.View",
		"GlobalViews.HostSelector.View": "javascript\\compiled\\GlobalViews.HostSelector.View",
		"GlobalViews.Message.View": "javascript\\compiled\\GlobalViews.Message.View",
		"GlobalViews.RatingByStar.View": "javascript\\compiled\\GlobalViews.RatingByStar.View",
		"GlobalViews.ShowingCurrent.View": "javascript\\compiled\\GlobalViews.ShowingCurrent.View",
		"GlobalViews.States.View": "javascript\\compiled\\GlobalViews.States.View",
		"Handlebars.CompilerNameLookup": "javascript\\compiled\\Handlebars.CompilerNameLookup",
		"HandlebarsExtras": "javascript\\compiled\\HandlebarsExtras",
		"APMTrackerParameters": "javascript\\compiled\\APMTrackerParameters",
		"InstrumentationAddToCart": "javascript\\compiled\\InstrumentationAddToCart",
		"Item.Collection": "javascript\\compiled\\Item.Collection",
		"Item.KeyMapping": "javascript\\compiled\\Item.KeyMapping",
		"Item.Model": "javascript\\compiled\\Item.Model",
		"Item.Option.Collection": "javascript\\compiled\\Item.Option.Collection",
		"Item.Option.Model": "javascript\\compiled\\Item.Option.Model",
		"Item": "javascript\\compiled\\Item",
		"ItemRelations.Correlated.Collection": "javascript\\compiled\\ItemRelations.Correlated.Collection",
		"ItemRelations.Correlated.View": "javascript\\compiled\\ItemRelations.Correlated.View",
		"ItemRelations.Related.Collection": "javascript\\compiled\\ItemRelations.Related.Collection",
		"ItemRelations": "javascript\\compiled\\ItemRelations",
		"LiveOrder.Line.Collection": "javascript\\compiled\\LiveOrder.Line.Collection",
		"LiveOrder.Line.Model": "javascript\\compiled\\LiveOrder.Line.Model",
		"LiveOrder.Model": "javascript\\compiled\\LiveOrder.Model",
		"Loggers.Appender.Dummy": "javascript\\compiled\\Loggers.Appender.Dummy",
		"Loggers.Appender.ElasticLogger.Cart": "javascript\\compiled\\Loggers.Appender.ElasticLogger.Cart",
		"Loggers.Appender.ElasticLogger.Tracker": "javascript\\compiled\\Loggers.Appender.ElasticLogger.Tracker",
		"Loggers.Appender.ElasticLogger": "javascript\\compiled\\Loggers.Appender.ElasticLogger",
		"Loggers.Appender": "javascript\\compiled\\Loggers.Appender",
		"Loggers.Configuration": "javascript\\compiled\\Loggers.Configuration",
		"Loggers": "javascript\\compiled\\Loggers",
		"Application.Error.Client": "javascript\\compiled\\Application.Error.Client",
		"Application.Error.Mapping": "javascript\\compiled\\Application.Error.Mapping",
		"Singleton": "javascript\\compiled\\Singleton",
		"MenuTree.Node.View": "javascript\\compiled\\MenuTree.Node.View",
		"MenuTree.View": "javascript\\compiled\\MenuTree.View",
		"MyAccountMenu.Component": "javascript\\compiled\\MyAccountMenu.Component",
		"String.format": "javascript\\compiled\\String.format",
		"NavigationHelper.Plugins.DataTouchPoint": "javascript\\compiled\\NavigationHelper.Plugins.DataTouchPoint",
		"NavigationHelper.Plugins.Modals": "javascript\\compiled\\NavigationHelper.Plugins.Modals",
		"NavigationHelper.Plugins.Pushers": "javascript\\compiled\\NavigationHelper.Plugins.Pushers",
		"NavigationHelper.Plugins.Standard": "javascript\\compiled\\NavigationHelper.Plugins.Standard",
		"NavigationHelper": "javascript\\compiled\\NavigationHelper",
		"Notifications.Order.Promocodes.View": "javascript\\compiled\\Notifications.Order.Promocodes.View",
		"Notifications.Order.View": "javascript\\compiled\\Notifications.Order.View",
		"Notifications.Profile.View": "javascript\\compiled\\Notifications.Profile.View",
		"Notifications.View": "javascript\\compiled\\Notifications.View",
		"PageType.Collection": "javascript\\compiled\\PageType.Collection",
		"PageType.Component": "javascript\\compiled\\PageType.Component",
		"PageType.Model": "javascript\\compiled\\PageType.Model",
		"PageType.Router": "javascript\\compiled\\PageType.Router",
		"PageType": "javascript\\compiled\\PageType",
		"PaymentInstrument.CreditCard.Edit.Form.SecurityCode.Tooltip.View": "javascript\\compiled\\PaymentInstrument.CreditCard.Edit.Form.SecurityCode.Tooltip.View",
		"PaymentInstrument.CreditCard.Edit.Form.SecurityCode.View": "javascript\\compiled\\PaymentInstrument.CreditCard.Edit.Form.SecurityCode.View",
		"PaymentInstrument.CreditCard.Edit.Form.View": "javascript\\compiled\\PaymentInstrument.CreditCard.Edit.Form.View",
		"PaymentInstrument.CreditCard.Edit.View": "javascript\\compiled\\PaymentInstrument.CreditCard.Edit.View",
		"PaymentInstrument.CreditCard.Model": "javascript\\compiled\\PaymentInstrument.CreditCard.Model",
		"PaymentInstrument.CreditCard.View": "javascript\\compiled\\PaymentInstrument.CreditCard.View",
		"PluginContainer": "javascript\\compiled\\PluginContainer",
		"Product.Collection": "javascript\\compiled\\Product.Collection",
		"Product.Option.Collection": "javascript\\compiled\\Product.Option.Collection",
		"Product.Option.Model": "javascript\\compiled\\Product.Option.Model",
		"ProductLine.Common.Image": "javascript\\compiled\\ProductLine.Common.Image",
		"ProductLine.Common": "javascript\\compiled\\ProductLine.Common",
		"ProductLine.Common.Url": "javascript\\compiled\\ProductLine.Common.Url",
		"ProductLine.Option.Collection": "javascript\\compiled\\ProductLine.Option.Collection",
		"ProductLine.Option.Model": "javascript\\compiled\\ProductLine.Option.Model",
		"ProductLine.Sku.View": "javascript\\compiled\\ProductLine.Sku.View",
		"ProductLine.Stock.View": "javascript\\compiled\\ProductLine.Stock.View",
		"ProductLine.StockDescription.View": "javascript\\compiled\\ProductLine.StockDescription.View",
		"ProductList.Collection": "javascript\\compiled\\ProductList.Collection",
		"ProductList.Control.View": "javascript\\compiled\\ProductList.Control.View",
		"ProductList.ControlNewItem.View": "javascript\\compiled\\ProductList.ControlNewItem.View",
		"ProductList.Item.Collection": "javascript\\compiled\\ProductList.Item.Collection",
		"ProductList.Item.Model": "javascript\\compiled\\ProductList.Item.Model",
		"ProductList.Model": "javascript\\compiled\\ProductList.Model",
		"ProductReviews.Center.View": "javascript\\compiled\\ProductReviews.Center.View",
		"ProductReviews.Collection": "javascript\\compiled\\ProductReviews.Collection",
		"ProductReviews.Form.View": "javascript\\compiled\\ProductReviews.Form.View",
		"ProductReviews.FormConfirmation.View": "javascript\\compiled\\ProductReviews.FormConfirmation.View",
		"ProductReviews.FormPreview.View": "javascript\\compiled\\ProductReviews.FormPreview.View",
		"ProductReviews.Model": "javascript\\compiled\\ProductReviews.Model",
		"ProductReviews.Preview.View": "javascript\\compiled\\ProductReviews.Preview.View",
		"ProductReviews.Review.View": "javascript\\compiled\\ProductReviews.Review.View",
		"ProductReviews": "javascript\\compiled\\ProductReviews",
		"ProductViews.Option.View": "javascript\\compiled\\ProductViews.Option.View",
		"ProductViews": "javascript\\compiled\\ProductViews",
		"Checkout.Profile": "javascript\\compiled\\Checkout.Profile",
		"MyAccount.Profile": "javascript\\compiled\\MyAccount.Profile",
		"Profile.ChangeEmailAddress.Model": "javascript\\compiled\\Profile.ChangeEmailAddress.Model",
		"Profile.ChangeEmailAddress.View": "javascript\\compiled\\Profile.ChangeEmailAddress.View",
		"Profile.Component": "javascript\\compiled\\Profile.Component",
		"Profile.EmailPreferences.View": "javascript\\compiled\\Profile.EmailPreferences.View",
		"Profile.Model": "javascript\\compiled\\Profile.Model",
		"Profile.UpdatePassword.Model": "javascript\\compiled\\Profile.UpdatePassword.Model",
		"Profile.UpdatePassword.View": "javascript\\compiled\\Profile.UpdatePassword.View",
		"Quote.Collection": "javascript\\compiled\\Quote.Collection",
		"Quote.Details.View": "javascript\\compiled\\Quote.Details.View",
		"Quote.List.View": "javascript\\compiled\\Quote.List.View",
		"Quote.ListExpirationDate.View": "javascript\\compiled\\Quote.ListExpirationDate.View",
		"Quote.Model": "javascript\\compiled\\Quote.Model",
		"Quote": "javascript\\compiled\\Quote",
		"RecentlyViewedItems.Collection": "javascript\\compiled\\RecentlyViewedItems.Collection",
		"RecentlyViewedItems": "javascript\\compiled\\RecentlyViewedItems",
		"ComponentContainer": "javascript\\compiled\\ComponentContainer",
		"SC.BaseComponent.ChildViewsComponent": "javascript\\compiled\\SC.BaseComponent.ChildViewsComponent",
		"SC.BaseComponent.Plugin.PostRender": "javascript\\compiled\\SC.BaseComponent.Plugin.PostRender",
		"SC.BaseComponent.Plugin.RecollectCMSSelectors": "javascript\\compiled\\SC.BaseComponent.Plugin.RecollectCMSSelectors",
		"SC.BaseComponent": "javascript\\compiled\\SC.BaseComponent",
		"SC.CancelableEvents": "javascript\\compiled\\SC.CancelableEvents",
		"SC.ComponentContainer": "javascript\\compiled\\SC.ComponentContainer",
		"SC.ComponentErrors": "javascript\\compiled\\SC.ComponentErrors",
		"SC.VisualComponent": "javascript\\compiled\\SC.VisualComponent",
		"SC.Extensions": "javascript\\compiled\\SC.Extensions",
		"Session": "javascript\\compiled\\Session",
		"Tracker": "javascript\\compiled\\Tracker",
		"Transaction.Collection": "javascript\\compiled\\Transaction.Collection",
		"Transaction.Line.Collection": "javascript\\compiled\\Transaction.Line.Collection",
		"Transaction.Line.Model": "javascript\\compiled\\Transaction.Line.Model",
		"Transaction.Line.Option.Collection": "javascript\\compiled\\Transaction.Line.Option.Collection",
		"Transaction.Line.Option.Model": "javascript\\compiled\\Transaction.Line.Option.Model",
		"Transaction.Model": "javascript\\compiled\\Transaction.Model",
		"Transaction.Paymentmethod.Collection": "javascript\\compiled\\Transaction.Paymentmethod.Collection",
		"Transaction.Paymentmethod.Model": "javascript\\compiled\\Transaction.Paymentmethod.Model",
		"Transaction.Shipmethod.Collection": "javascript\\compiled\\Transaction.Shipmethod.Collection",
		"Transaction.Shipmethod.Model": "javascript\\compiled\\Transaction.Shipmethod.Model",
		"Transaction.Line.Views.Cell.Actionable.Expanded.View": "javascript\\compiled\\Transaction.Line.Views.Cell.Actionable.Expanded.View",
		"Transaction.Line.Views.Cell.Actionable.View": "javascript\\compiled\\Transaction.Line.Views.Cell.Actionable.View",
		"Transaction.Line.Views.Cell.Navigable.Actionable.View": "javascript\\compiled\\Transaction.Line.Views.Cell.Navigable.Actionable.View",
		"Transaction.Line.Views.Cell.Selectable.View": "javascript\\compiled\\Transaction.Line.Views.Cell.Selectable.View",
		"Transaction.Line.Views.Cell.SelectableActionable.View": "javascript\\compiled\\Transaction.Line.Views.Cell.SelectableActionable.View",
		"Transaction.Line.Views.Cell.SelectableActionableNavigable.View": "javascript\\compiled\\Transaction.Line.Views.Cell.SelectableActionableNavigable.View",
		"Transaction.Line.Views.Tax": "javascript\\compiled\\Transaction.Line.Views.Tax",
		"Transaction.Line.Views": "javascript\\compiled\\Transaction.Line.Views",
		"UnitTestHelper.DummyData": "javascript\\compiled\\UnitTestHelper.DummyData",
		"UnitTestHelper.Preconditions": "javascript\\compiled\\UnitTestHelper.Preconditions",
		"UnitTestHelper": "javascript\\compiled\\UnitTestHelper",
		"UrlHelper": "javascript\\compiled\\UrlHelper",
		"Console.Polyfill": "javascript\\compiled\\Console.Polyfill",
		"Exceptions": "javascript\\compiled\\Exceptions",
		"SessionStorageHandler": "javascript\\compiled\\SessionStorageHandler",
		"StorageHandler": "javascript\\compiled\\StorageHandler",
		"Url": "javascript\\compiled\\Url",
		"Utilities.ResizeImage": "javascript\\compiled\\Utilities.ResizeImage",
		"Utils.Interfaces": "javascript\\compiled\\Utils.Interfaces",
		"jQuery.scPush": "javascript\\compiled\\jQuery.scPush",
		"jQuery.scSeeMoreLess": "javascript\\compiled\\jQuery.scSeeMoreLess",
		"jQuery.scStickyButton": "javascript\\compiled\\jQuery.scStickyButton",
		"jQuery.html": "javascript\\compiled\\jQuery.html",
		"jQuery.overflowing": "javascript\\compiled\\jQuery.overflowing",
		"jQuery.serializeObject": "javascript\\compiled\\jQuery.serializeObject",
		"Account.ForgotPassword.Model": "javascript\\compiled\\Account.ForgotPassword.Model",
		"Account.Login.Model": "javascript\\compiled\\Account.Login.Model",
		"Account.Register.Model": "javascript\\compiled\\Account.Register.Model",
		"Account.RegisterAsGuest.Model": "javascript\\compiled\\Account.RegisterAsGuest.Model",
		"Account.ResetPassword.Model": "javascript\\compiled\\Account.ResetPassword.Model",
		"Balance": "javascript\\compiled\\Balance",
		"Balance.View": "javascript\\compiled\\Balance.View",
		"BrontoIntegration": "javascript\\compiled\\BrontoIntegration",
		"CMSadapter.Component": "javascript\\compiled\\CMSadapter.Component",
		"CMSadapter.Impl.Categories": "javascript\\compiled\\CMSadapter.Impl.Categories",
		"CMSadapter.Impl.Categories.v2": "javascript\\compiled\\CMSadapter.Impl.Categories.v2",
		"CMSadapter.Impl.Categories.v3": "javascript\\compiled\\CMSadapter.Impl.Categories.v3",
		"CMSadapter.Impl.Core": "javascript\\compiled\\CMSadapter.Impl.Core",
		"CMSadapter.Impl.Core.v2": "javascript\\compiled\\CMSadapter.Impl.Core.v2",
		"CMSadapter.Impl.Core.v3": "javascript\\compiled\\CMSadapter.Impl.Core.v3",
		"CMSadapter.Impl.CustomContentType": "javascript\\compiled\\CMSadapter.Impl.CustomContentType",
		"CMSadapter.Impl.Enhanced": "javascript\\compiled\\CMSadapter.Impl.Enhanced",
		"CMSadapter.Impl.Landing": "javascript\\compiled\\CMSadapter.Impl.Landing",
		"CMSadapter.Impl.Landing.v2": "javascript\\compiled\\CMSadapter.Impl.Landing.v2",
		"CMSadapter.Impl.Landing.v3": "javascript\\compiled\\CMSadapter.Impl.Landing.v3",
		"CMSadapter.Impl.Merchandising": "javascript\\compiled\\CMSadapter.Impl.Merchandising",
		"CMSadapter.Impl.Merchandising.v2": "javascript\\compiled\\CMSadapter.Impl.Merchandising.v2",
		"CMSadapter.Impl.Merchandising.v3": "javascript\\compiled\\CMSadapter.Impl.Merchandising.v3",
		"CMSadapter.Impl.PageTypes": "javascript\\compiled\\CMSadapter.Impl.PageTypes",
		"CMSadapter.Impl.ThemeCustomizerPreview": "javascript\\compiled\\CMSadapter.Impl.ThemeCustomizerPreview",
		"CMSadapter.Landing.View": "javascript\\compiled\\CMSadapter.Landing.View",
		"CMSadapter.Page.Collection": "javascript\\compiled\\CMSadapter.Page.Collection",
		"CMSadapter.Page.Model": "javascript\\compiled\\CMSadapter.Page.Model",
		"CMSadapter.Page.Router": "javascript\\compiled\\CMSadapter.Page.Router",
		"CMSadapter.Plugin.PostRender": "javascript\\compiled\\CMSadapter.Plugin.PostRender",
		"CMSadapter.Plugin.RecollectCMSSelectors": "javascript\\compiled\\CMSadapter.Plugin.RecollectCMSSelectors",
		"CMSadapter": "javascript\\compiled\\CMSadapter",
		"CMSadapter.v2": "javascript\\compiled\\CMSadapter.v2",
		"CMSadapter.v3": "javascript\\compiled\\CMSadapter.v3",
		"CMSadapterInstaller": "javascript\\compiled\\CMSadapterInstaller",
		"Case.Collection": "javascript\\compiled\\Case.Collection",
		"Case.Create.View": "javascript\\compiled\\Case.Create.View",
		"Case.Detail.View": "javascript\\compiled\\Case.Detail.View",
		"Case.Fields.Model": "javascript\\compiled\\Case.Fields.Model",
		"Case.List.View": "javascript\\compiled\\Case.List.View",
		"Case.Model": "javascript\\compiled\\Case.Model",
		"Case": "javascript\\compiled\\Case",
		"CaseListItemsCollectionView": "javascript\\compiled\\CaseListItemsCollectionView",
		"CheckoutStepsFactory": "javascript\\compiled\\CheckoutStepsFactory",
		"SC.Checkout.Configuration.Steps.BillingFirst": "javascript\\compiled\\SC.Checkout.Configuration.Steps.BillingFirst",
		"SC.Checkout.Configuration.Steps.Standard": "javascript\\compiled\\SC.Checkout.Configuration.Steps.Standard",
		"SC.Checkout.Configuration": "javascript\\compiled\\SC.Checkout.Configuration",
		"SC.Checkout.Layout": "javascript\\compiled\\SC.Checkout.Layout",
		"SC.Checkout.Starter": "javascript\\compiled\\SC.Checkout.Starter",
		"SC.Checkout": "javascript\\compiled\\SC.Checkout",
		"CheckoutSkipLogin": "javascript\\compiled\\CheckoutSkipLogin",
		"Content.DataModels": "javascript\\compiled\\Content.DataModels",
		"Content.EnhancedViews": "javascript\\compiled\\Content.EnhancedViews",
		"Content.LandingPages.View": "javascript\\compiled\\Content.LandingPages.View",
		"Content": "javascript\\compiled\\Content",
		"CookieWarningBanner": "javascript\\compiled\\CookieWarningBanner",
		"CookieWarningBanner.View": "javascript\\compiled\\CookieWarningBanner.View",
		"CustomContentType.Base.View": "javascript\\compiled\\CustomContentType.Base.View",
		"CustomContentType.Container.View": "javascript\\compiled\\CustomContentType.Container.View",
		"CustomerPayment.Details.View": "javascript\\compiled\\CustomerPayment.Details.View",
		"CustomerPayment.Model": "javascript\\compiled\\CustomerPayment.Model",
		"Deposit.Details.DepositApplication.Link.View": "javascript\\compiled\\Deposit.Details.DepositApplication.Link.View",
		"Deposit.Details.View": "javascript\\compiled\\Deposit.Details.View",
		"Deposit.Model": "javascript\\compiled\\Deposit.Model",
		"DepositApplication.Details.View": "javascript\\compiled\\DepositApplication.Details.View",
		"DepositApplication.Model": "javascript\\compiled\\DepositApplication.Model",
		"ErrorManagementOnline.ForbiddenError.View": "javascript\\compiled\\ErrorManagementOnline.ForbiddenError.View",
		"ErrorManagementOnline.ResponseErrorParser": "javascript\\compiled\\ErrorManagementOnline.ResponseErrorParser",
		"PageType.Base.View": "javascript\\compiled\\PageType.Base.View",
		"ExternalPayment": "javascript\\compiled\\ExternalPayment",
		"Footer.Simplified.View": "javascript\\compiled\\Footer.Simplified.View",
		"GoogleAdWords": "javascript\\compiled\\GoogleAdWords",
		"GoogleTagManager.Model": "javascript\\compiled\\GoogleTagManager.Model",
		"GoogleTagManager.NavigationHelper.Plugins.Standard": "javascript\\compiled\\GoogleTagManager.NavigationHelper.Plugins.Standard",
		"GoogleTagManager": "javascript\\compiled\\GoogleTagManager",
		"GoogleUniversalAnalytics": "javascript\\compiled\\GoogleUniversalAnalytics",
		"Header.Logo.View": "javascript\\compiled\\Header.Logo.View",
		"Header.MiniCartSummary.View": "javascript\\compiled\\Header.MiniCartSummary.View",
		"Header.Simplified.View": "javascript\\compiled\\Header.Simplified.View",
		"Header": "javascript\\compiled\\Header",
		"jQuery.sidebarMenu": "javascript\\compiled\\jQuery.sidebarMenu",
		"MyAccountMenu": "javascript\\compiled\\MyAccountMenu",
		"Home": "javascript\\compiled\\Home",
		"Home.View": "javascript\\compiled\\Home.View",
		"ImageLoader": "javascript\\compiled\\ImageLoader",
		"ImageNotAvailable": "javascript\\compiled\\ImageNotAvailable",
		"Invoice.Collection": "javascript\\compiled\\Invoice.Collection",
		"Invoice.Date.View": "javascript\\compiled\\Invoice.Date.View",
		"Invoice.Details.View": "javascript\\compiled\\Invoice.Details.View",
		"Invoice.Model": "javascript\\compiled\\Invoice.Model",
		"Invoice.OpenList.View": "javascript\\compiled\\Invoice.OpenList.View",
		"Invoice.PaidList.View": "javascript\\compiled\\Invoice.PaidList.View",
		"Invoice": "javascript\\compiled\\Invoice",
		"ItemsSearcher.Collection": "javascript\\compiled\\ItemsSearcher.Collection",
		"ItemsSearcher.Item.View": "javascript\\compiled\\ItemsSearcher.Item.View",
		"ItemsSearcher.Utils": "javascript\\compiled\\ItemsSearcher.Utils",
		"jQuery.ajaxTransport": "javascript\\compiled\\jQuery.ajaxTransport",
		"jQuery.Loader": "javascript\\compiled\\jQuery.Loader",
		"jQuerySCAExtras": "javascript\\compiled\\jQuerySCAExtras",
		"LivePayment.Model": "javascript\\compiled\\LivePayment.Model",
		"LivePayment": "javascript\\compiled\\LivePayment",
		"Location.Collection": "javascript\\compiled\\Location.Collection",
		"Location.Model": "javascript\\compiled\\Location.Model",
		"Location.ProductLine": "javascript\\compiled\\Location.ProductLine",
		"Location": "javascript\\compiled\\Location",
		"Location.VenueDetails.View": "javascript\\compiled\\Location.VenueDetails.View",
		"Logger.Appender.Sensor.DataContractVersion": "javascript\\compiled\\Logger.Appender.Sensor.DataContractVersion",
		"Loggers.Appender.Sensors.Bundle": "javascript\\compiled\\Loggers.Appender.Sensors.Bundle",
		"Loggers.Appender.Sensors.Cart": "javascript\\compiled\\Loggers.Appender.Sensors.Cart",
		"Loggers.Appender.Sensors.Customer": "javascript\\compiled\\Loggers.Appender.Sensors.Customer",
		"Loggers.Appender.Sensors.Device": "javascript\\compiled\\Loggers.Appender.Sensors.Device",
		"Loggers.Appender.Sensors.ErrorStatus": "javascript\\compiled\\Loggers.Appender.Sensors.ErrorStatus",
		"Loggers.Appender.Sensors.Shopper": "javascript\\compiled\\Loggers.Appender.Sensors.Shopper",
		"Loggers.Appender.Sensors.SiteData": "javascript\\compiled\\Loggers.Appender.Sensors.SiteData",
		"Loggers.Appender.Sensors": "javascript\\compiled\\Loggers.Appender.Sensors",
		"Loggers.Configuration.SCA": "javascript\\compiled\\Loggers.Configuration.SCA",
		"LoginRegister.CheckoutAsGuest.View": "javascript\\compiled\\LoginRegister.CheckoutAsGuest.View",
		"LoginRegister.Component": "javascript\\compiled\\LoginRegister.Component",
		"LoginRegister.ForgotPassword.View": "javascript\\compiled\\LoginRegister.ForgotPassword.View",
		"LoginRegister.ResetPassword.View": "javascript\\compiled\\LoginRegister.ResetPassword.View",
		"LoginRegister": "javascript\\compiled\\LoginRegister",
		"LoginRegister.Utils": "javascript\\compiled\\LoginRegister.Utils",
		"Merchandising.Context.DefaultHandlers": "javascript\\compiled\\Merchandising.Context.DefaultHandlers",
		"Merchandising.Context": "javascript\\compiled\\Merchandising.Context",
		"Merchandising.Item.Collection": "javascript\\compiled\\Merchandising.Item.Collection",
		"Merchandising.jQueryPlugin": "javascript\\compiled\\Merchandising.jQueryPlugin",
		"Merchandising.Rule": "javascript\\compiled\\Merchandising.Rule",
		"Merchandising": "javascript\\compiled\\Merchandising",
		"Merchandising.View": "javascript\\compiled\\Merchandising.View",
		"Merchandising.Zone": "javascript\\compiled\\Merchandising.Zone",
		"MyAccount.Alone": "javascript\\compiled\\MyAccount.Alone",
		"MyAccount.Full": "javascript\\compiled\\MyAccount.Full",
		"SC.MyAccount.Layout": "javascript\\compiled\\SC.MyAccount.Layout",
		"SC.MyAccount": "javascript\\compiled\\SC.MyAccount",
		"SC.MyAccount.Configuration": "javascript\\compiled\\SC.MyAccount.Configuration",
		"SC.MyAccount.Starter": "javascript\\compiled\\SC.MyAccount.Starter",
		"Newsletter.Model": "javascript\\compiled\\Newsletter.Model",
		"Newsletter": "javascript\\compiled\\Newsletter",
		"Newsletter.View": "javascript\\compiled\\Newsletter.View",
		"OrderHistory.Cancel.View": "javascript\\compiled\\OrderHistory.Cancel.View",
		"OrderHistory.Collection": "javascript\\compiled\\OrderHistory.Collection",
		"OrderHistory.Details.View": "javascript\\compiled\\OrderHistory.Details.View",
		"OrderHistory.Item.Actions.View": "javascript\\compiled\\OrderHistory.Item.Actions.View",
		"OrderHistory.Line.Collection": "javascript\\compiled\\OrderHistory.Line.Collection",
		"OrderHistory.Line.Model": "javascript\\compiled\\OrderHistory.Line.Model",
		"OrderHistory.List.Tracking.Number.View": "javascript\\compiled\\OrderHistory.List.Tracking.Number.View",
		"OrderHistory.List.View": "javascript\\compiled\\OrderHistory.List.View",
		"OrderHistory.Model": "javascript\\compiled\\OrderHistory.Model",
		"OrderHistory.Other.Payments.View": "javascript\\compiled\\OrderHistory.Other.Payments.View",
		"OrderHistory.Packages.View": "javascript\\compiled\\OrderHistory.Packages.View",
		"OrderHistory.Payments.View": "javascript\\compiled\\OrderHistory.Payments.View",
		"OrderHistory.ReturnAutorization.View": "javascript\\compiled\\OrderHistory.ReturnAutorization.View",
		"OrderHistory.Summary.View": "javascript\\compiled\\OrderHistory.Summary.View",
		"OrderHistory": "javascript\\compiled\\OrderHistory",
		"Checkout.Component": "javascript\\compiled\\Checkout.Component",
		"OrderWizard.Model": "javascript\\compiled\\OrderWizard.Model",
		"OrderWizard.Router": "javascript\\compiled\\OrderWizard.Router",
		"OrderWizard": "javascript\\compiled\\OrderWizard",
		"OrderWizard.View": "javascript\\compiled\\OrderWizard.View",
		"OrderWizard.Module.Address.Billing": "javascript\\compiled\\OrderWizard.Module.Address.Billing",
		"OrderWizard.Module.Address.Shipping": "javascript\\compiled\\OrderWizard.Module.Address.Shipping",
		"OrderWizard.Module.Address": "javascript\\compiled\\OrderWizard.Module.Address",
		"OrderWizard.Module.MultiShipTo.Select.Addresses.Shipping": "javascript\\compiled\\OrderWizard.Module.MultiShipTo.Select.Addresses.Shipping",
		"OrderWizard.Module.CartItems.PickupInStore.Details.View": "javascript\\compiled\\OrderWizard.Module.CartItems.PickupInStore.Details.View",
		"OrderWizard.Module.CartItems.PickupInStore.List": "javascript\\compiled\\OrderWizard.Module.CartItems.PickupInStore.List",
		"OrderWizard.Module.CartItems.PickupInStore.Package.View": "javascript\\compiled\\OrderWizard.Module.CartItems.PickupInStore.Package.View",
		"OrderWizard.Module.CartItems.PickupInStore": "javascript\\compiled\\OrderWizard.Module.CartItems.PickupInStore",
		"OrderWizard.Module.CartItems": "javascript\\compiled\\OrderWizard.Module.CartItems",
		"OrderWizard.Module.Confirmation": "javascript\\compiled\\OrderWizard.Module.Confirmation",
		"OrderWizard.Module.MultiShipTo.EnableLink": "javascript\\compiled\\OrderWizard.Module.MultiShipTo.EnableLink",
		"OrderWizard.Module.MultiShipTo.RemovedPromoCodes": "javascript\\compiled\\OrderWizard.Module.MultiShipTo.RemovedPromoCodes",
		"OrderWizard.Module.MultiShipTo.Package.Creation.Address.Selector": "javascript\\compiled\\OrderWizard.Module.MultiShipTo.Package.Creation.Address.Selector",
		"OrderWizard.Module.MultiShipTo.Package.Creation.EditQuantity": "javascript\\compiled\\OrderWizard.Module.MultiShipTo.Package.Creation.EditQuantity",
		"OrderWizard.Module.MultiShipTo.Package.Creation": "javascript\\compiled\\OrderWizard.Module.MultiShipTo.Package.Creation",
		"OrderWizard.Module.MultiShipTo.Package.Details.Actions": "javascript\\compiled\\OrderWizard.Module.MultiShipTo.Package.Details.Actions",
		"OrderWizard.Module.MultiShipTo.Package.Details.Quantity": "javascript\\compiled\\OrderWizard.Module.MultiShipTo.Package.Details.Quantity",
		"OrderWizard.Module.MultiShipTo.Package.Details": "javascript\\compiled\\OrderWizard.Module.MultiShipTo.Package.Details",
		"OrderWizard.Module.MultiShipTo.Package.List": "javascript\\compiled\\OrderWizard.Module.MultiShipTo.Package.List",
		"OrderWizard.Module.PaymentMethod.Creditcard": "javascript\\compiled\\OrderWizard.Module.PaymentMethod.Creditcard",
		"OrderWizard.Module.PaymentMethod.External": "javascript\\compiled\\OrderWizard.Module.PaymentMethod.External",
		"OrderWizard.Module.PaymentMethod.GiftCertificates.Record": "javascript\\compiled\\OrderWizard.Module.PaymentMethod.GiftCertificates.Record",
		"OrderWizard.Module.PaymentMethod.GiftCertificates": "javascript\\compiled\\OrderWizard.Module.PaymentMethod.GiftCertificates",
		"OrderWizard.Module.PaymentMethod.Invoice": "javascript\\compiled\\OrderWizard.Module.PaymentMethod.Invoice",
		"OrderWizard.Module.PaymentMethod.Others": "javascript\\compiled\\OrderWizard.Module.PaymentMethod.Others",
		"OrderWizard.Module.PaymentMethod.PayPal": "javascript\\compiled\\OrderWizard.Module.PaymentMethod.PayPal",
		"OrderWizard.Module.PaymentMethod.PurchaseNumber": "javascript\\compiled\\OrderWizard.Module.PaymentMethod.PurchaseNumber",
		"OrderWizard.Module.PaymentMethod.Selector": "javascript\\compiled\\OrderWizard.Module.PaymentMethod.Selector",
		"OrderWizard.Module.PaymentMethod.ThreeDSecure": "javascript\\compiled\\OrderWizard.Module.PaymentMethod.ThreeDSecure",
		"OrderWizard.Module.PaymentMethod": "javascript\\compiled\\OrderWizard.Module.PaymentMethod",
		"OrderWizard.Module.ShowPayments": "javascript\\compiled\\OrderWizard.Module.ShowPayments",
		"OrderWizard.Module.PromocodeForm": "javascript\\compiled\\OrderWizard.Module.PromocodeForm",
		"OrderWizard.Module.PromocodeNotifications": "javascript\\compiled\\OrderWizard.Module.PromocodeNotifications",
		"OrderWizard.Module.RegisterEmail": "javascript\\compiled\\OrderWizard.Module.RegisterEmail",
		"OrderWizard.Module.RegisterGuest": "javascript\\compiled\\OrderWizard.Module.RegisterGuest",
		"OrderWizard.Module.MultiShipTo.Shipmethod.Package.View": "javascript\\compiled\\OrderWizard.Module.MultiShipTo.Shipmethod.Package.View",
		"OrderWizard.Module.MultiShipTo.Shipmethod": "javascript\\compiled\\OrderWizard.Module.MultiShipTo.Shipmethod",
		"OrderWizard.Module.Shipmethod": "javascript\\compiled\\OrderWizard.Module.Shipmethod",
		"OrderWizard.Module.ShowShipments.Actionable": "javascript\\compiled\\OrderWizard.Module.ShowShipments.Actionable",
		"OrderWizard.Module.ShowShipments": "javascript\\compiled\\OrderWizard.Module.ShowShipments",
		"OrderWizard.Module.SubmitButton": "javascript\\compiled\\OrderWizard.Module.SubmitButton",
		"OrderWizard.Module.TermsAndConditions": "javascript\\compiled\\OrderWizard.Module.TermsAndConditions",
		"OrderWizard.Module.Title": "javascript\\compiled\\OrderWizard.Module.Title",
		"Overview.Banner.View": "javascript\\compiled\\Overview.Banner.View",
		"Overview.Home.Standalone.View": "javascript\\compiled\\Overview.Home.Standalone.View",
		"Overview.Payment.View": "javascript\\compiled\\Overview.Payment.View",
		"Overview.Profile.View": "javascript\\compiled\\Overview.Profile.View",
		"Overview.Shipping.View": "javascript\\compiled\\Overview.Shipping.View",
		"Overview": "javascript\\compiled\\Overview",
		"PaymentMethod.Collection": "javascript\\compiled\\PaymentMethod.Collection",
		"PaymentMethod.CreditCard.List.View": "javascript\\compiled\\PaymentMethod.CreditCard.List.View",
		"PaymentMethod.Helper": "javascript\\compiled\\PaymentMethod.Helper",
		"PaymentMethod.Model": "javascript\\compiled\\PaymentMethod.Model",
		"PaymentMethod": "javascript\\compiled\\PaymentMethod",
		"PaymentWizard.Configuration": "javascript\\compiled\\PaymentWizard.Configuration",
		"PaymentWizard.CreditTransaction.Collection": "javascript\\compiled\\PaymentWizard.CreditTransaction.Collection",
		"PaymentWizard.CreditTransaction.Model": "javascript\\compiled\\PaymentWizard.CreditTransaction.Model",
		"PaymentWizard.EditAmount.View": "javascript\\compiled\\PaymentWizard.EditAmount.View",
		"PaymentWizard.Module.Addresses": "javascript\\compiled\\PaymentWizard.Module.Addresses",
		"PaymentWizard.Module.Confirmation": "javascript\\compiled\\PaymentWizard.Module.Confirmation",
		"PaymentWizard.Module.ConfirmationSummary": "javascript\\compiled\\PaymentWizard.Module.ConfirmationSummary",
		"PaymentWizard.Module.CreditTransaction.Edit.Action.View": "javascript\\compiled\\PaymentWizard.Module.CreditTransaction.Edit.Action.View",
		"PaymentWizard.Module.CreditTransaction": "javascript\\compiled\\PaymentWizard.Module.CreditTransaction",
		"PaymentWizard.Module.Invoice.Action.View": "javascript\\compiled\\PaymentWizard.Module.Invoice.Action.View",
		"PaymentWizard.Module.Invoice.Subject.View": "javascript\\compiled\\PaymentWizard.Module.Invoice.Subject.View",
		"PaymentWizard.Module.Invoice": "javascript\\compiled\\PaymentWizard.Module.Invoice",
		"PaymentWizard.Module.PaymentMethod.Creditcard": "javascript\\compiled\\PaymentWizard.Module.PaymentMethod.Creditcard",
		"PaymentWizard.Module.PaymentMethod.Selector": "javascript\\compiled\\PaymentWizard.Module.PaymentMethod.Selector",
		"PaymentWizard.Module.ShowCreditTransaction": "javascript\\compiled\\PaymentWizard.Module.ShowCreditTransaction",
		"PaymentWizard.Module.ShowInvoices": "javascript\\compiled\\PaymentWizard.Module.ShowInvoices",
		"PaymentWizard.Module.ShowPayments": "javascript\\compiled\\PaymentWizard.Module.ShowPayments",
		"PaymentWizard.Module.Summary": "javascript\\compiled\\PaymentWizard.Module.Summary",
		"PaymentWizard.Router": "javascript\\compiled\\PaymentWizard.Router",
		"PaymentWizard": "javascript\\compiled\\PaymentWizard",
		"PaymentWizard.View": "javascript\\compiled\\PaymentWizard.View",
		"PickupInStore.AddToCart.Button": "javascript\\compiled\\PickupInStore.AddToCart.Button",
		"PickupInStore.FulfillmentOptions.View": "javascript\\compiled\\PickupInStore.FulfillmentOptions.View",
		"PickupInStore.StoreSelector.ItemDetail.View": "javascript\\compiled\\PickupInStore.StoreSelector.ItemDetail.View",
		"PickupInStore.StoreSelector.List.Row.View": "javascript\\compiled\\PickupInStore.StoreSelector.List.Row.View",
		"PickupInStore.StoreSelector.List.View": "javascript\\compiled\\PickupInStore.StoreSelector.List.View",
		"PickupInStore.StoreSelector.View": "javascript\\compiled\\PickupInStore.StoreSelector.View",
		"PickupInStore": "javascript\\compiled\\PickupInStore",
		"PickupInStore.View": "javascript\\compiled\\PickupInStore.View",
		"PrintStatement.Model": "javascript\\compiled\\PrintStatement.Model",
		"PrintStatement": "javascript\\compiled\\PrintStatement",
		"PrintStatement.View": "javascript\\compiled\\PrintStatement.View",
		"ProductDetails.AddToProductList.View": "javascript\\compiled\\ProductDetails.AddToProductList.View",
		"ProductDetails.Base.View": "javascript\\compiled\\ProductDetails.Base.View",
		"ProductDetails.Component": "javascript\\compiled\\ProductDetails.Component",
		"ProductDetails.Full.View": "javascript\\compiled\\ProductDetails.Full.View",
		"ProductDetails.ImageGallery.View": "javascript\\compiled\\ProductDetails.ImageGallery.View",
		"ProductDetails.Information.View": "javascript\\compiled\\ProductDetails.Information.View",
		"ProductDetails.Options.Selector.Pusher.View": "javascript\\compiled\\ProductDetails.Options.Selector.Pusher.View",
		"ProductDetails.Options.Selector.View": "javascript\\compiled\\ProductDetails.Options.Selector.View",
		"ProductDetails.Quantity.View": "javascript\\compiled\\ProductDetails.Quantity.View",
		"ProductDetails.QuickView.View": "javascript\\compiled\\ProductDetails.QuickView.View",
		"ProductDetails": "javascript\\compiled\\ProductDetails",
		"ProductDetailToQuote": "javascript\\compiled\\ProductDetailToQuote",
		"ProductDetailToQuote.View": "javascript\\compiled\\ProductDetailToQuote.View",
		"ProductList.AddedToCart.View": "javascript\\compiled\\ProductList.AddedToCart.View",
		"ProductList.BulkActions.View": "javascript\\compiled\\ProductList.BulkActions.View",
		"ProductList.ControlSingle.View": "javascript\\compiled\\ProductList.ControlSingle.View",
		"ProductList.Deletion.View": "javascript\\compiled\\ProductList.Deletion.View",
		"ProductList.Details.View": "javascript\\compiled\\ProductList.Details.View",
		"ProductList.DetailsLater.View": "javascript\\compiled\\ProductList.DetailsLater.View",
		"ProductList.DetailsLaterMacro.View": "javascript\\compiled\\ProductList.DetailsLaterMacro.View",
		"ProductList.DetailsMinQuantity.View": "javascript\\compiled\\ProductList.DetailsMinQuantity.View",
		"ProductList.DisplayFull.View": "javascript\\compiled\\ProductList.DisplayFull.View",
		"ProductList.Edit.View": "javascript\\compiled\\ProductList.Edit.View",
		"ProductList.Item.Edit.View": "javascript\\compiled\\ProductList.Item.Edit.View",
		"ProductList.ListDetails.View": "javascript\\compiled\\ProductList.ListDetails.View",
		"ProductList.Lists.View": "javascript\\compiled\\ProductList.Lists.View",
		"ProductList.Utils": "javascript\\compiled\\ProductList.Utils",
		"ProductListOnline": "javascript\\compiled\\ProductListOnline",
		"PromocodeSupport": "javascript\\compiled\\PromocodeSupport",
		"QuantityPricing": "javascript\\compiled\\QuantityPricing",
		"QuantityPricing.View": "javascript\\compiled\\QuantityPricing.View",
		"QuickAdd.Item.View": "javascript\\compiled\\QuickAdd.Item.View",
		"QuickAdd.ItemsSearcher.Plugins": "javascript\\compiled\\QuickAdd.ItemsSearcher.Plugins",
		"QuickAdd.Model": "javascript\\compiled\\QuickAdd.Model",
		"QuickAdd.View": "javascript\\compiled\\QuickAdd.View",
		"QuickOrder.EmptyCart.View": "javascript\\compiled\\QuickOrder.EmptyCart.View",
		"QuickOrder": "javascript\\compiled\\QuickOrder",
		"QuickOrder.View": "javascript\\compiled\\QuickOrder.View",
		"QuickOrderAccessPoints.HeaderLink.View": "javascript\\compiled\\QuickOrderAccessPoints.HeaderLink.View",
		"QuickOrderAccessPoints": "javascript\\compiled\\QuickOrderAccessPoints",
		"QuoteToSalesOrder.Model": "javascript\\compiled\\QuoteToSalesOrder.Model",
		"QuoteToSalesOrderWizard.Configuration": "javascript\\compiled\\QuoteToSalesOrderWizard.Configuration",
		"QuoteToSalesOrderWizard.Module.Confirmation": "javascript\\compiled\\QuoteToSalesOrderWizard.Module.Confirmation",
		"QuoteToSalesOrderWizard.Module.PaymentMethod.Selector": "javascript\\compiled\\QuoteToSalesOrderWizard.Module.PaymentMethod.Selector",
		"QuoteToSalesOrderWizard.Module.QuoteDetails": "javascript\\compiled\\QuoteToSalesOrderWizard.Module.QuoteDetails",
		"QuoteToSalesOrderWizard.Router": "javascript\\compiled\\QuoteToSalesOrderWizard.Router",
		"QuoteToSalesOrderWizard.Step": "javascript\\compiled\\QuoteToSalesOrderWizard.Step",
		"QuoteToSalesOrderWizard": "javascript\\compiled\\QuoteToSalesOrderWizard",
		"QuoteToSalesOrderWizard.View": "javascript\\compiled\\QuoteToSalesOrderWizard.View",
		"Receipt.Details.Item.Actions.View": "javascript\\compiled\\Receipt.Details.Item.Actions.View",
		"Receipt.Details.Item.Summary.View": "javascript\\compiled\\Receipt.Details.Item.Summary.View",
		"Receipt.Details.View": "javascript\\compiled\\Receipt.Details.View",
		"Receipt.Model": "javascript\\compiled\\Receipt.Model",
		"Receipt": "javascript\\compiled\\Receipt",
		"MyAccountListView": "javascript\\compiled\\MyAccountListView",
		"RecordViews.Selectable.View": "javascript\\compiled\\RecordViews.Selectable.View",
		"RecordViews.SelectableActionable.View": "javascript\\compiled\\RecordViews.SelectableActionable.View",
		"RecordViews.View": "javascript\\compiled\\RecordViews.View",
		"ReorderItems.Actions.AddToCart.View": "javascript\\compiled\\ReorderItems.Actions.AddToCart.View",
		"ReorderItems.Actions.Quantity.View": "javascript\\compiled\\ReorderItems.Actions.Quantity.View",
		"ReorderItems.Model": "javascript\\compiled\\ReorderItems.Model",
		"ReorderItems": "javascript\\compiled\\ReorderItems",
		"RequestQuoteAccessPoints.HeaderLink.View": "javascript\\compiled\\RequestQuoteAccessPoints.HeaderLink.View",
		"RequestQuoteAccessPoints": "javascript\\compiled\\RequestQuoteAccessPoints",
		"RequestQuoteWizard.Configuration": "javascript\\compiled\\RequestQuoteWizard.Configuration",
		"RequestQuoteWizard.Module.Comments": "javascript\\compiled\\RequestQuoteWizard.Module.Comments",
		"RequestQuoteWizard.Module.Confirmation": "javascript\\compiled\\RequestQuoteWizard.Module.Confirmation",
		"RequestQuoteWizard.Module.Header": "javascript\\compiled\\RequestQuoteWizard.Module.Header",
		"RequestQuoteWizard.Module.Items.Line.Actions.View": "javascript\\compiled\\RequestQuoteWizard.Module.Items.Line.Actions.View",
		"RequestQuoteWizard.Module.Items.Line.Quantity.View": "javascript\\compiled\\RequestQuoteWizard.Module.Items.Line.Quantity.View",
		"RequestQuoteWizard.Module.Items": "javascript\\compiled\\RequestQuoteWizard.Module.Items",
		"RequestQuoteWizard.Module.Message": "javascript\\compiled\\RequestQuoteWizard.Module.Message",
		"RequestQuoteWizard.Module.QuickAdd": "javascript\\compiled\\RequestQuoteWizard.Module.QuickAdd",
		"RequestQuoteWizard.Permission.Error.View": "javascript\\compiled\\RequestQuoteWizard.Permission.Error.View",
		"RequestQuoteWizard.Router": "javascript\\compiled\\RequestQuoteWizard.Router",
		"RequestQuoteWizard.Step": "javascript\\compiled\\RequestQuoteWizard.Step",
		"RequestQuoteWizard": "javascript\\compiled\\RequestQuoteWizard",
		"RequestQuoteWizard.View": "javascript\\compiled\\RequestQuoteWizard.View",
		"ReturnAuthorization.Cancel.View": "javascript\\compiled\\ReturnAuthorization.Cancel.View",
		"ReturnAuthorization.Collection": "javascript\\compiled\\ReturnAuthorization.Collection",
		"ReturnAuthorization.Confirmation.View": "javascript\\compiled\\ReturnAuthorization.Confirmation.View",
		"ReturnAuthorization.Detail.View": "javascript\\compiled\\ReturnAuthorization.Detail.View",
		"ReturnAuthorization.Form.Item.Actions.View": "javascript\\compiled\\ReturnAuthorization.Form.Item.Actions.View",
		"ReturnAuthorization.Form.Item.Summary.View": "javascript\\compiled\\ReturnAuthorization.Form.Item.Summary.View",
		"ReturnAuthorization.Form.View": "javascript\\compiled\\ReturnAuthorization.Form.View",
		"ReturnAuthorization.GetReturnableLines": "javascript\\compiled\\ReturnAuthorization.GetReturnableLines",
		"ReturnAuthorization.List.View": "javascript\\compiled\\ReturnAuthorization.List.View",
		"ReturnAuthorization.Model": "javascript\\compiled\\ReturnAuthorization.Model",
		"ReturnAuthorization": "javascript\\compiled\\ReturnAuthorization",
		"SC.CCT.Html": "javascript\\compiled\\SC.CCT.Html",
		"SC.CCT.Html.View": "javascript\\compiled\\SC.CCT.Html.View",
		"ApplicationOnline": "javascript\\compiled\\ApplicationOnline",
		"ApplicationOnlineLayout": "javascript\\compiled\\ApplicationOnlineLayout",
		"Configuration": "javascript\\compiled\\Configuration",
		"SC.Environment.Component": "javascript\\compiled\\SC.Environment.Component",
		"SC.Shopping.Configuration": "javascript\\compiled\\SC.Shopping.Configuration",
		"SC.Shopping.Layout": "javascript\\compiled\\SC.Shopping.Layout",
		"SC.Shopping.Starter": "javascript\\compiled\\SC.Shopping.Starter",
		"SC.Shopping": "javascript\\compiled\\SC.Shopping",
		"SiteSearch.Button.View": "javascript\\compiled\\SiteSearch.Button.View",
		"SiteSearch": "javascript\\compiled\\SiteSearch",
		"SocialSharing.Flyout.Hover.View": "javascript\\compiled\\SocialSharing.Flyout.Hover.View",
		"SocialSharing.Flyout.View": "javascript\\compiled\\SocialSharing.Flyout.View",
		"SocialSharing.Plugins.AddThis": "javascript\\compiled\\SocialSharing.Plugins.AddThis",
		"SocialSharing.Plugins.Facebook": "javascript\\compiled\\SocialSharing.Plugins.Facebook",
		"SocialSharing.Plugins.GooglePlus": "javascript\\compiled\\SocialSharing.Plugins.GooglePlus",
		"SocialSharing.Plugins.Pinterest.Hover": "javascript\\compiled\\SocialSharing.Plugins.Pinterest.Hover",
		"SocialSharing.Plugins.Pinterest": "javascript\\compiled\\SocialSharing.Plugins.Pinterest",
		"SocialSharing.Plugins.Twitter": "javascript\\compiled\\SocialSharing.Plugins.Twitter",
		"SocialSharing": "javascript\\compiled\\SocialSharing",
		"StoreLocator.Collection": "javascript\\compiled\\StoreLocator.Collection",
		"StoreLocator.Details.View": "javascript\\compiled\\StoreLocator.Details.View",
		"StoreLocator.List.All.Store.View": "javascript\\compiled\\StoreLocator.List.All.Store.View",
		"StoreLocator.List.All.View": "javascript\\compiled\\StoreLocator.List.All.View",
		"StoreLocator.List.View": "javascript\\compiled\\StoreLocator.List.View",
		"StoreLocator.Main.View": "javascript\\compiled\\StoreLocator.Main.View",
		"StoreLocator.Map.View": "javascript\\compiled\\StoreLocator.Map.View",
		"StoreLocator.Model": "javascript\\compiled\\StoreLocator.Model",
		"StoreLocator.Results.View": "javascript\\compiled\\StoreLocator.Results.View",
		"StoreLocator.Search.View": "javascript\\compiled\\StoreLocator.Search.View",
		"StoreLocator.Tooltip.View": "javascript\\compiled\\StoreLocator.Tooltip.View",
		"StoreLocator": "javascript\\compiled\\StoreLocator",
		"StoreLocator.Upgrade.View": "javascript\\compiled\\StoreLocator.Upgrade.View",
		"StoreLocatorAccessPoints.HeaderLink.View": "javascript\\compiled\\StoreLocatorAccessPoints.HeaderLink.View",
		"StoreLocatorAccessPoints": "javascript\\compiled\\StoreLocatorAccessPoints",
		"GoogleMap.Configuration": "javascript\\compiled\\GoogleMap.Configuration",
		"GoogleMap": "javascript\\compiled\\GoogleMap",
		"ReferenceMap.Configuration": "javascript\\compiled\\ReferenceMap.Configuration",
		"ReferenceMap.Promise.Handler": "javascript\\compiled\\ReferenceMap.Promise.Handler",
		"ReferenceMap": "javascript\\compiled\\ReferenceMap",
		"Subscriptions.AddOn.Details.View": "javascript\\compiled\\Subscriptions.AddOn.Details.View",
		"Subscriptions.AddOn.List.View": "javascript\\compiled\\Subscriptions.AddOn.List.View",
		"Subscriptions.AddOn.Quantity.Amount.View": "javascript\\compiled\\Subscriptions.AddOn.Quantity.Amount.View",
		"Subscriptions.AddOn.Review.View": "javascript\\compiled\\Subscriptions.AddOn.Review.View",
		"Subscriptions.AddOn.Summary.View": "javascript\\compiled\\Subscriptions.AddOn.Summary.View",
		"Subscriptions.AddOn.View": "javascript\\compiled\\Subscriptions.AddOn.View",
		"Subscriptions.Collection": "javascript\\compiled\\Subscriptions.Collection",
		"Subscriptions.Details.View": "javascript\\compiled\\Subscriptions.Details.View",
		"Subscriptions.Line.Collection": "javascript\\compiled\\Subscriptions.Line.Collection",
		"Subscriptions.Line.Model": "javascript\\compiled\\Subscriptions.Line.Model",
		"Subscriptions.Line.View": "javascript\\compiled\\Subscriptions.Line.View",
		"Subscriptions.List.View": "javascript\\compiled\\Subscriptions.List.View",
		"Subscriptions.Model": "javascript\\compiled\\Subscriptions.Model",
		"Subscriptions.Pricing.View": "javascript\\compiled\\Subscriptions.Pricing.View",
		"Subscriptions.Status.View": "javascript\\compiled\\Subscriptions.Status.View",
		"Subscriptions": "javascript\\compiled\\Subscriptions",
		"TrackingServices": "javascript\\compiled\\TrackingServices",
		"TransactionHistory.Collection": "javascript\\compiled\\TransactionHistory.Collection",
		"TransactionHistory.List.View": "javascript\\compiled\\TransactionHistory.List.View",
		"TransactionHistory.Model": "javascript\\compiled\\TransactionHistory.Model",
		"TransactionHistory": "javascript\\compiled\\TransactionHistory",
		"WebSiteConfiguration.Model": "javascript\\compiled\\WebSiteConfiguration.Model",
		"Wizard.Module": "javascript\\compiled\\Wizard.Module",
		"Wizard.Router": "javascript\\compiled\\Wizard.Router",
		"Wizard.Step": "javascript\\compiled\\Wizard.Step",
		"Wizard.StepGroup": "javascript\\compiled\\Wizard.StepGroup",
		"Wizard.StepModule": "javascript\\compiled\\Wizard.StepModule",
		"Wizard.StepNavigation.View": "javascript\\compiled\\Wizard.StepNavigation.View",
		"Wizard.View": "javascript\\compiled\\Wizard.View",
		"almond": "third_parties/almond/0.3.3/almond",
		"backbone.custom": "third_parties/backbone.js/1.4.0-custom/backbone.custom",
		"backbone.stickit": "third_parties/backbone.stickit/0.9.2/backbone.stickit",
		"backbone-validation": "third_parties/backbone.validation/0.11.5-custom/backbone-validation",
		"bignumber": "third_parties/bignumber/9.0.0/bignumber",
		"bootstrap-datepicker": "third_parties/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker",
		"handlebars.runtime-v4.5.3": "third_parties/handlebars/4.5.3/handlebars.runtime-v4.5.3",
		"jquery.custom": "third_parties/jQuery/3.5.1-custom/jquery.custom",
		"jquery.bxslider": "third_parties/jQuery-bxslider/4.2.15/jquery.bxslider",
		"zoom": "third_parties/zoom/2.1.0/JavaScript/zoom",
		"require": "third_parties/require.js/2.3.6/require",
		"js.cookie": "third_parties/js-cookie/2.2.1/src/js.cookie",
		"sass": "third_parties/sass.js/0.11.1-custom/dist/sass",
		"bootstrap": "third_parties/twitter-bootstrap-sass/3.4.1/assets/javascripts/bootstrap",
		"typeahead.bundle": "third_parties/twitter-typeahead/0.11.1-custom/typeahead.bundle",
		"underscore": "third_parties/underscore.js/1.10.2-custom/underscore",
		"captcha": "javascript\\compiled\\captcha",
		"Getinfo.View": "javascript\\compiled\\Getinfo.View",
		"Musician.Get.Model": "javascript\\compiled\\Musician.Get.Model",
		"MusicianResource.List.View": "javascript\\compiled\\MusicianResource.List.View",
		"MusicianResource.Model": "javascript\\compiled\\MusicianResource.Model",
		"MusicianResource": "javascript\\compiled\\MusicianResource",
		"MusicianResource.View": "javascript\\compiled\\MusicianResource.View",
		"Home.View.Ext": "javascript\\compiled\\Home.View.Ext",
		"NewAndNoteWorthy.View": "javascript\\compiled\\NewAndNoteWorthy.View",
		"NPHRecommends.View": "javascript\\compiled\\NPHRecommends.View",
		"Cart.AddToCart.Button.View.Ext": "javascript\\compiled\\Cart.AddToCart.Button.View.Ext",
		"Cart.Detailed.View.Ext": "javascript\\compiled\\Cart.Detailed.View.Ext",
		"Cart.Item.Actions.View.Ext": "javascript\\compiled\\Cart.Item.Actions.View.Ext",
		"Cart.Item.Summary.View.Ext": "javascript\\compiled\\Cart.Item.Summary.View.Ext",
		"Cart.Lines.View.Ext": "javascript\\compiled\\Cart.Lines.View.Ext",
		"Cart.Summary.View.Ext": "javascript\\compiled\\Cart.Summary.View.Ext",
		"ProductDetails.Base.View.Ext": "javascript\\compiled\\ProductDetails.Base.View.Ext",
		"ProductDetails.Full.View.Ext": "javascript\\compiled\\ProductDetails.Full.View.Ext",
		"ProductDetails.ImageGallery.View.Ext": "javascript\\compiled\\ProductDetails.ImageGallery.View.Ext",
		"ProductDetails.ImprintOption.Model": "javascript\\compiled\\ProductDetails.ImprintOption.Model",
		"ProductDetails.ImprintOption.View": "javascript\\compiled\\ProductDetails.ImprintOption.View",
		"ProductDetails.Information.View.Ext": "javascript\\compiled\\ProductDetails.Information.View.Ext",
		"ProductDetails.Options.Selector.Pusher.View.Ext": "javascript\\compiled\\ProductDetails.Options.Selector.Pusher.View.Ext",
		"ProductDetails.Options.Selector.View.Ext": "javascript\\compiled\\ProductDetails.Options.Selector.View.Ext",
		"ProductDetails.SubItems.View": "javascript\\compiled\\ProductDetails.SubItems.View",
		"AboutUs.View": "javascript\\compiled\\AboutUs.View",
		"ContactUs.View": "javascript\\compiled\\ContactUs.View",
		"ContactUsForm.View": "javascript\\compiled\\ContactUsForm.View",
		"Copyrights.View": "javascript\\compiled\\Copyrights.View",
		"CustomerMigration.View": "javascript\\compiled\\CustomerMigration.View",
		"CustomModules.Model": "javascript\\compiled\\CustomModules.Model",
		"CustomModules": "javascript\\compiled\\CustomModules",
		"ExtraRewards.View": "javascript\\compiled\\ExtraRewards.View",
		"ExtraWorks.View": "javascript\\compiled\\ExtraWorks.View",
		"JoinOurTeam.View": "javascript\\compiled\\JoinOurTeam.View",
		"LinkToNph.View": "javascript\\compiled\\LinkToNph.View",
		"Manuscript.View": "javascript\\compiled\\Manuscript.View",
		"MoreAboutCopyright.View": "javascript\\compiled\\MoreAboutCopyright.View",
		"MultiplyingEfforts.View": "javascript\\compiled\\MultiplyingEfforts.View",
		"OurHistory.View": "javascript\\compiled\\OurHistory.View",
		"PrivacyPolicy.View": "javascript\\compiled\\PrivacyPolicy.View",
		"PromoteNph.View": "javascript\\compiled\\PromoteNph.View",
		"PublishingProgram.View": "javascript\\compiled\\PublishingProgram.View",
		"ReturnsExchanges.View": "javascript\\compiled\\ReturnsExchanges.View",
		"RewardsBenefits.View": "javascript\\compiled\\RewardsBenefits.View",
		"ShippingPolicy.View": "javascript\\compiled\\ShippingPolicy.View",
		"ShopGifts.View": "javascript\\compiled\\ShopGifts.View",
		"WelsRelationship.View": "javascript\\compiled\\WelsRelationship.View",
		"WhatPeopleSaying.View": "javascript\\compiled\\WhatPeopleSaying.View",
		"BswSubscription.View": "javascript\\compiled\\BswSubscription.View",
		"DailyMeditations.View": "javascript\\compiled\\DailyMeditations.View",
		"EficSubscription.View": "javascript\\compiled\\EficSubscription.View",
		"MySubscriptions.View": "javascript\\compiled\\MySubscriptions.View",
		"SubscriptionsExt": "javascript\\compiled\\SubscriptionsExt",
		"WelsConnection.View": "javascript\\compiled\\WelsConnection.View",
		"DownItems.List.View": "javascript\\compiled\\DownItems.List.View",
		"OrderHistory.Collection.Ext": "javascript\\compiled\\OrderHistory.Collection.Ext",
		"OrderHistory.Details.View.Ext": "javascript\\compiled\\OrderHistory.Details.View.Ext",
		"OrderHistory.List.Tracking.Number.View.Ext": "javascript\\compiled\\OrderHistory.List.Tracking.Number.View.Ext",
		"OrderHistory.List.View.Ext": "javascript\\compiled\\OrderHistory.List.View.Ext",
		"OrderHistory.MusicianResource.List.View": "javascript\\compiled\\OrderHistory.MusicianResource.List.View",
		"OrderHistory.Packages.View.Ext": "javascript\\compiled\\OrderHistory.Packages.View.Ext",
		"OrderHistoryExt": "javascript\\compiled\\OrderHistoryExt",
		"Account.Register.Model.Ext": "javascript\\compiled\\Account.Register.Model.Ext",
		"CheckoutCustomFields": "javascript\\compiled\\CheckoutCustomFields",
		"CheckoutExt": "javascript\\compiled\\CheckoutExt",
		"SC.Checkout.Starter.Dependencies": "javascript-dependencies/SC.Checkout.Starter.Dependencies",
		"SC.MyAccount.Starter.Dependencies": "javascript-dependencies/SC.MyAccount.Starter.Dependencies",
		"SC.Shopping.Starter.Dependencies": "javascript-dependencies/SC.Shopping.Starter.Dependencies",
		"Transaction.Line.Views.Price.View": "javascript\\compiled\\Transaction.Line.Views.Price.View",
		"Transaction.Line.Views.Cell.Navigable.View": "javascript\\compiled\\Transaction.Line.Views.Cell.Navigable.View",
		"Transaction.Line.Views.Option.View": "javascript\\compiled\\Transaction.Line.Views.Option.View",
		"Transaction.Line.Views.Options.Selected.View": "javascript\\compiled\\Transaction.Line.Views.Options.Selected.View",
		"Transaction.Line.Views.QuantityAmount.View": "javascript\\compiled\\Transaction.Line.Views.QuantityAmount.View",
		"LoginRegister.Login.View": "javascript\\compiled\\LoginRegister.Login.View",
		"LoginRegister.Register.View": "javascript\\compiled\\LoginRegister.Register.View",
		"LoginRegister.View": "javascript\\compiled\\LoginRegister.View",
		"Header.MiniCartItemCell.View": "javascript\\compiled\\Header.MiniCartItemCell.View",
		"Header.MiniCart.View": "javascript\\compiled\\Header.MiniCart.View",
		"Header.View": "javascript\\compiled\\Header.View",
		"Header.Profile.View": "javascript\\compiled\\Header.Profile.View",
		"Header.Menu.View": "javascript\\compiled\\Header.Menu.View",
		"Header.Menu.MyAccount.View": "javascript\\compiled\\Header.Menu.MyAccount.View",
		"Facets.Model": "javascript\\compiled\\Facets.Model",
		"Facets.ItemCell.View": "javascript\\compiled\\Facets.ItemCell.View",
		"Facets.FacetedNavigationItem.View": "javascript\\compiled\\Facets.FacetedNavigationItem.View",
		"Facets.ItemListDisplaySelector.View": "javascript\\compiled\\Facets.ItemListDisplaySelector.View",
		"Facets.ItemListShowSelector.View": "javascript\\compiled\\Facets.ItemListShowSelector.View",
		"Facets.ItemListSortSelector.View": "javascript\\compiled\\Facets.ItemListSortSelector.View",
		"ItemRelations.Related.View": "javascript\\compiled\\ItemRelations.Related.View",
		"ItemRelations.RelatedItem.View": "javascript\\compiled\\ItemRelations.RelatedItem.View",
		"GlobalViews.Pagination.View": "javascript\\compiled\\GlobalViews.Pagination.View",
		"Address.Edit.Fields.View": "javascript\\compiled\\Address.Edit.Fields.View",
		"GlobalViews.StarRating.View": "javascript\\compiled\\GlobalViews.StarRating.View",
		"ListHeader.View": "javascript\\compiled\\ListHeader.View",
		"ProductViews.Price.View": "javascript\\compiled\\ProductViews.Price.View",
		"Product.Model": "javascript\\compiled\\Product.Model",
		"Profile.Information.View": "javascript\\compiled\\Profile.Information.View",
		"RecentlyViewedItems.View": "javascript\\compiled\\RecentlyViewedItems.View",
		"Transaction.List.View": "javascript\\compiled\\Transaction.List.View",
		"ProductList.ControlItem.View": "javascript\\compiled\\ProductList.ControlItem.View",
		"Utils": "javascript\\compiled\\Utils",
		"ItemsSearcher.View": "javascript\\compiled\\ItemsSearcher.View",
		"OrderWizard.Module.CartItems.Ship": "javascript\\compiled\\OrderWizard.Module.CartItems.Ship",
		"OrderWizard.Module.CartSummary": "javascript\\compiled\\OrderWizard.Module.CartSummary",
		"OrderWizard.Module.NonShippableItems": "javascript\\compiled\\OrderWizard.Module.NonShippableItems",
		"OrderWizard.Step": "javascript\\compiled\\OrderWizard.Step",
		"Overview.Home.View": "javascript\\compiled\\Overview.Home.View",
		"PaymentWizard.Step": "javascript\\compiled\\PaymentWizard.Step",
		"QuantityPricing.Utils": "javascript\\compiled\\QuantityPricing.Utils",
		"RecordViews.Actionable.View": "javascript\\compiled\\RecordViews.Actionable.View",
		"ReorderItems.List.View": "javascript\\compiled\\ReorderItems.List.View",
		"SiteSearch.View": "javascript\\compiled\\SiteSearch.View",
		"SC.Checkout.Configuration.Steps.OPC": "javascript\\compiled\\SC.Checkout.Configuration.Steps.OPC",
		"ProductList.CartSaveForLater.View": "javascript\\compiled\\ProductList.CartSaveForLater.View",
		"ReorderItems.Collection": "javascript\\compiled\\ReorderItems.Collection",
		"Footer.View": "javascript\\compiled\\Footer.View",
		"GlobalViews.Breadcrumb.View": "javascript\\compiled\\GlobalViews.Breadcrumb.View",
		"GlobalViews.Modal.View": "javascript\\compiled\\GlobalViews.Modal.View",
		"jQuery": "third_parties/jQuery/3.5.1-custom/jquery.custom",
		"Backbone": "third_parties/backbone.js/1.4.0-custom/backbone.custom",
		"Backbone.Validation": "third_parties/backbone.validation/0.11.5-custom/backbone-validation",
		"jQuery.bxSlider": "third_parties/jQuery-bxslider/4.2.15/jquery.bxslider",
		"Handlebars": "third_parties/handlebars/4.5.3/handlebars.runtime-v4.5.3",
		"typeahead": "third_parties/twitter-typeahead/0.11.1-custom/typeahead.bundle",
		"jasmine": "/jasmine/lib/jasmine-3.4.0/jasmine",
		"jasmine-html": "/jasmine/lib/jasmine-3.4.0/jasmine-html",
		"jasmine-boot": "/jasmine/lib/jasmine-3.4.0/boot"
	},
	"shim": {
		"jQuery": {
			"exports": "jQuery"
		},
		"jquery.cookie": {
			"deps": [
				"jQuery"
			]
		},
		"zoom": {
			"deps": [
				"jQuery"
			]
		},
		"jQuery.bxSlider": {
			"deps": [
				"jQuery"
			]
		},
		"bootstrap": {
			"deps": [
				"jQuery"
			]
		},
		"bootstrap-datepicker": {
			"deps": [
				"jQuery",
				"bootstrap"
			]
		},
		"Backbone.Validation": {
			"deps": [
				"Backbone"
			]
		},
		"typeahead": {
			"deps": [
				"jQuery"
			]
		},
		"captcha": {
			"deps": [
				"jQuery"
			]
		},
		"jasmine-html": {
			"deps": [
				"jasmine"
			]
		},
		"jasmine-boot": {
			"deps": [
				"jasmine",
				"jasmine-html"
			]
		}
	},
	"findNestedDependencies": true,
	"optimize": "none",
	"generateSourceMaps": false,
	"skipModuleInsertion": false,
	"wrapShim": true,
	"preserveLicenseComments": false,
	"rawText": {},
	"baseUrl": "http://localhost:7777"
});
var SCCheckoutStarter= true;
 }
catch(e){};
SC.ENVIRONMENT.JS_MODULE_NAMES = ["Address.Collection","Address.Details.View","Address.Edit.View","Address.List.View","Address.Model","Address","AjaxRequestsKiller","Application","ApplicationLayout","Generic.LayoutComponent","SC.LayoutComponent","Backbone.CollectionView","Backbone.CompositeView.Fade","Backbone.CompositeView","Backbone.FormView","Backbone.FormView.Type","Backbone.CachedCollection","Backbone.CachedModel","Backbone.CachedSync","Backbone.Model","Backbone.Sync","Backbone.View.ApplyPermissions","Backbone.View.Bootstrap","Backbone.View.DatePicker","Backbone.View.DebugTemplateName","Backbone.View.PageGeneratorImages","Backbone.View.Plugin.ApplyPermissions","Backbone.View.Plugin.Bootstrap","Backbone.View.Plugin.DatePicker","Backbone.View.Plugin.DebugTemplateName","Backbone.View.Plugin.OldIEFix","Backbone.View.Plugin.PageGeneratorImages","Backbone.View.Plugins","Backbone.View.render","Backbone.View.saveForm","Backbone.View.toggleReset","Backbone.View","Bootstrap.Rate","Bootstrap.Slider","Cart.AddToCart.Button.View","Cart.Component","Cart.Confirmation.Helpers","Cart.Confirmation.View","Cart.Detailed.View","Cart.Item.Actions.View","Cart.Item.Summary.View","Cart.Lines.Free.View","Cart.Lines.View","Cart.Promocode.List.Item.View","Cart.Promocode.List.View","Cart.Promocode.Notifications.View","Cart.PromocodeForm.View","Cart.QuickAddToCart.View","Cart.Summary.View","Cart","ICart.Component","Categories.Collection","Categories.Model","Categories","Categories.Utils","CreditCard.Edit.Form.SecurityCode.Tooltip.View","CreditCard.Edit.Form.SecurityCode.View","CreditCard.Edit.Form.View","CreditCard.View","CreditMemo.Details.View","CreditMemo.Model","CancelableEventEmitter","Collection","CollectionView","Environment","Error","EventEmitter","ExportedModulesNames","FormView","Model","PageTypeFormView","PageTypeView","RowView","ServiceClient","Types","Validator","View","BackboneExtras","BackboneValidationExtras","JQueryExtras","CustomFields","ErrorManagement.ExpiredLink.View","ErrorManagement.InternalError.View","ErrorManagement.PageNotFound.View","ErrorManagement.View","SCCollection","SCCollectionView","SCFormView","SCModel","SCView","Facets.Browse.CategoryHeading.View","Facets.Browse.View","Facets.CategoryCell.View","Facets.CategoryCellList.View","Facets.Collection","Facets.Empty.View","Facets.FacetCategoriesList.View","Facets.FacetCategory.View","Facets.FacetedNavigation.View","Facets.FacetedNavigationItemCategory.View","Facets.FacetsDisplay.View","Facets.Helper","Facets.ItemListSummary.View","Facets.Router","Facets.Translator","Facets","FacetsItemRowView","FacetsItemsCollectionView","ProductListPage.Component","GlobalViews.BackToTop.View","GlobalViews.CenteredModal.View","GlobalViews.Confirmation.View","GlobalViews.CountriesDropdown.View","GlobalViews.CurrencySelector.View","GlobalViews.FormatPaymentMethod.View","GlobalViews.HostSelector.View","GlobalViews.Message.View","GlobalViews.RatingByStar.View","GlobalViews.ShowingCurrent.View","GlobalViews.States.View","Handlebars.CompilerNameLookup","HandlebarsExtras","APMTrackerParameters","InstrumentationAddToCart","Item.Collection","Item.KeyMapping","Item.Model","Item.Option.Collection","Item.Option.Model","Item","ItemRelations.Correlated.Collection","ItemRelations.Correlated.View","ItemRelations.Related.Collection","ItemRelations","LiveOrder.Line.Collection","LiveOrder.Line.Model","LiveOrder.Model","Loggers.Appender.Dummy","Loggers.Appender.ElasticLogger.Cart","Loggers.Appender.ElasticLogger.Tracker","Loggers.Appender.ElasticLogger","Loggers.Appender","Loggers.Configuration","Loggers","Application.Error.Client","Application.Error.Mapping","Singleton","MenuTree.Node.View","MenuTree.View","MyAccountMenu.Component","String.format","NavigationHelper.Plugins.DataTouchPoint","NavigationHelper.Plugins.Modals","NavigationHelper.Plugins.Pushers","NavigationHelper.Plugins.Standard","NavigationHelper","Notifications.Order.Promocodes.View","Notifications.Order.View","Notifications.Profile.View","Notifications.View","PageType.Collection","PageType.Component","PageType.Model","PageType.Router","PageType","PaymentInstrument.CreditCard.Edit.Form.SecurityCode.Tooltip.View","PaymentInstrument.CreditCard.Edit.Form.SecurityCode.View","PaymentInstrument.CreditCard.Edit.Form.View","PaymentInstrument.CreditCard.Edit.View","PaymentInstrument.CreditCard.Model","PaymentInstrument.CreditCard.View","PluginContainer","Product.Collection","Product.Option.Collection","Product.Option.Model","ProductLine.Common.Image","ProductLine.Common","ProductLine.Common.Url","ProductLine.Option.Collection","ProductLine.Option.Model","ProductLine.Sku.View","ProductLine.Stock.View","ProductLine.StockDescription.View","ProductList.Collection","ProductList.Control.View","ProductList.ControlNewItem.View","ProductList.Item.Collection","ProductList.Item.Model","ProductList.Model","ProductReviews.Center.View","ProductReviews.Collection","ProductReviews.Form.View","ProductReviews.FormConfirmation.View","ProductReviews.FormPreview.View","ProductReviews.Model","ProductReviews.Preview.View","ProductReviews.Review.View","ProductReviews","ProductViews.Option.View","ProductViews","Checkout.Profile","MyAccount.Profile","Profile.ChangeEmailAddress.Model","Profile.ChangeEmailAddress.View","Profile.Component","Profile.EmailPreferences.View","Profile.Model","Profile.UpdatePassword.Model","Profile.UpdatePassword.View","Quote.Collection","Quote.Details.View","Quote.List.View","Quote.ListExpirationDate.View","Quote.Model","Quote","RecentlyViewedItems.Collection","RecentlyViewedItems","ComponentContainer","SC.BaseComponent.ChildViewsComponent","SC.BaseComponent.Plugin.PostRender","SC.BaseComponent.Plugin.RecollectCMSSelectors","SC.BaseComponent","SC.CancelableEvents","SC.ComponentContainer","SC.ComponentErrors","SC.VisualComponent","SC.Extensions","Session","Tracker","Transaction.Collection","Transaction.Line.Collection","Transaction.Line.Model","Transaction.Line.Option.Collection","Transaction.Line.Option.Model","Transaction.Model","Transaction.Paymentmethod.Collection","Transaction.Paymentmethod.Model","Transaction.Shipmethod.Collection","Transaction.Shipmethod.Model","Transaction.Line.Views.Cell.Actionable.Expanded.View","Transaction.Line.Views.Cell.Actionable.View","Transaction.Line.Views.Cell.Navigable.Actionable.View","Transaction.Line.Views.Cell.Selectable.View","Transaction.Line.Views.Cell.SelectableActionable.View","Transaction.Line.Views.Cell.SelectableActionableNavigable.View","Transaction.Line.Views.Tax","Transaction.Line.Views","UnitTestHelper.DummyData","UnitTestHelper.Preconditions","UnitTestHelper","UrlHelper","Console.Polyfill","Exceptions","SessionStorageHandler","StorageHandler","Url","Utilities.ResizeImage","Utils.Interfaces","jQuery.scPush","jQuery.scSeeMoreLess","jQuery.scStickyButton","jQuery.html","jQuery.overflowing","jQuery.serializeObject","Account.ForgotPassword.Model","Account.Login.Model","Account.Register.Model","Account.RegisterAsGuest.Model","Account.ResetPassword.Model","Balance","Balance.View","BrontoIntegration","CMSadapter.Component","CMSadapter.Impl.Categories","CMSadapter.Impl.Categories.v2","CMSadapter.Impl.Categories.v3","CMSadapter.Impl.Core","CMSadapter.Impl.Core.v2","CMSadapter.Impl.Core.v3","CMSadapter.Impl.CustomContentType","CMSadapter.Impl.Enhanced","CMSadapter.Impl.Landing","CMSadapter.Impl.Landing.v2","CMSadapter.Impl.Landing.v3","CMSadapter.Impl.Merchandising","CMSadapter.Impl.Merchandising.v2","CMSadapter.Impl.Merchandising.v3","CMSadapter.Impl.PageTypes","CMSadapter.Impl.ThemeCustomizerPreview","CMSadapter.Landing.View","CMSadapter.Page.Collection","CMSadapter.Page.Model","CMSadapter.Page.Router","CMSadapter.Plugin.PostRender","CMSadapter.Plugin.RecollectCMSSelectors","CMSadapter","CMSadapter.v2","CMSadapter.v3","CMSadapterInstaller","Case.Collection","Case.Create.View","Case.Detail.View","Case.Fields.Model","Case.List.View","Case.Model","Case","CaseListItemsCollectionView","CheckoutStepsFactory","SC.Checkout.Configuration.Steps.BillingFirst","SC.Checkout.Configuration.Steps.Standard","SC.Checkout.Configuration","SC.Checkout.Layout","SC.Checkout.Starter","SC.Checkout","CheckoutSkipLogin","Content.DataModels","Content.EnhancedViews","Content.LandingPages.View","Content","CookieWarningBanner","CookieWarningBanner.View","CustomContentType.Base.View","CustomContentType.Container.View","CustomerPayment.Details.View","CustomerPayment.Model","Deposit.Details.DepositApplication.Link.View","Deposit.Details.View","Deposit.Model","DepositApplication.Details.View","DepositApplication.Model","ErrorManagementOnline.ForbiddenError.View","ErrorManagementOnline.ResponseErrorParser","PageType.Base.View","ExternalPayment","Footer.Simplified.View","GoogleAdWords","GoogleTagManager.Model","GoogleTagManager.NavigationHelper.Plugins.Standard","GoogleTagManager","GoogleUniversalAnalytics","Header.Logo.View","Header.MiniCartSummary.View","Header.Simplified.View","Header","jQuery.sidebarMenu","MyAccountMenu","Home","Home.View","ImageLoader","ImageNotAvailable","Invoice.Collection","Invoice.Date.View","Invoice.Details.View","Invoice.Model","Invoice.OpenList.View","Invoice.PaidList.View","Invoice","ItemsSearcher.Collection","ItemsSearcher.Item.View","ItemsSearcher.Utils","jQuery.ajaxTransport","jQuery.Loader","jQuerySCAExtras","LivePayment.Model","LivePayment","Location.Collection","Location.Model","Location.ProductLine","Location","Location.VenueDetails.View","Logger.Appender.Sensor.DataContractVersion","Loggers.Appender.Sensors.Bundle","Loggers.Appender.Sensors.Cart","Loggers.Appender.Sensors.Customer","Loggers.Appender.Sensors.Device","Loggers.Appender.Sensors.ErrorStatus","Loggers.Appender.Sensors.Shopper","Loggers.Appender.Sensors.SiteData","Loggers.Appender.Sensors","Loggers.Configuration.SCA","LoginRegister.CheckoutAsGuest.View","LoginRegister.Component","LoginRegister.ForgotPassword.View","LoginRegister.ResetPassword.View","LoginRegister","LoginRegister.Utils","Merchandising.Context.DefaultHandlers","Merchandising.Context","Merchandising.Item.Collection","Merchandising.jQueryPlugin","Merchandising.Rule","Merchandising","Merchandising.View","Merchandising.Zone","MyAccount.Alone","MyAccount.Full","SC.MyAccount.Layout","SC.MyAccount","SC.MyAccount.Configuration","SC.MyAccount.Starter","Newsletter.Model","Newsletter","Newsletter.View","OrderHistory.Cancel.View","OrderHistory.Collection","OrderHistory.Details.View","OrderHistory.Item.Actions.View","OrderHistory.Line.Collection","OrderHistory.Line.Model","OrderHistory.List.Tracking.Number.View","OrderHistory.List.View","OrderHistory.Model","OrderHistory.Other.Payments.View","OrderHistory.Packages.View","OrderHistory.Payments.View","OrderHistory.ReturnAutorization.View","OrderHistory.Summary.View","OrderHistory","Checkout.Component","OrderWizard.Model","OrderWizard.Router","OrderWizard","OrderWizard.View","OrderWizard.Module.Address.Billing","OrderWizard.Module.Address.Shipping","OrderWizard.Module.Address","OrderWizard.Module.MultiShipTo.Select.Addresses.Shipping","OrderWizard.Module.CartItems.PickupInStore.Details.View","OrderWizard.Module.CartItems.PickupInStore.List","OrderWizard.Module.CartItems.PickupInStore.Package.View","OrderWizard.Module.CartItems.PickupInStore","OrderWizard.Module.CartItems","OrderWizard.Module.Confirmation","OrderWizard.Module.MultiShipTo.EnableLink","OrderWizard.Module.MultiShipTo.RemovedPromoCodes","OrderWizard.Module.MultiShipTo.Package.Creation.Address.Selector","OrderWizard.Module.MultiShipTo.Package.Creation.EditQuantity","OrderWizard.Module.MultiShipTo.Package.Creation","OrderWizard.Module.MultiShipTo.Package.Details.Actions","OrderWizard.Module.MultiShipTo.Package.Details.Quantity","OrderWizard.Module.MultiShipTo.Package.Details","OrderWizard.Module.MultiShipTo.Package.List","OrderWizard.Module.PaymentMethod.Creditcard","OrderWizard.Module.PaymentMethod.External","OrderWizard.Module.PaymentMethod.GiftCertificates.Record","OrderWizard.Module.PaymentMethod.GiftCertificates","OrderWizard.Module.PaymentMethod.Invoice","OrderWizard.Module.PaymentMethod.Others","OrderWizard.Module.PaymentMethod.PayPal","OrderWizard.Module.PaymentMethod.PurchaseNumber","OrderWizard.Module.PaymentMethod.Selector","OrderWizard.Module.PaymentMethod.ThreeDSecure","OrderWizard.Module.PaymentMethod","OrderWizard.Module.ShowPayments","OrderWizard.Module.PromocodeForm","OrderWizard.Module.PromocodeNotifications","OrderWizard.Module.RegisterEmail","OrderWizard.Module.RegisterGuest","OrderWizard.Module.MultiShipTo.Shipmethod.Package.View","OrderWizard.Module.MultiShipTo.Shipmethod","OrderWizard.Module.Shipmethod","OrderWizard.Module.ShowShipments.Actionable","OrderWizard.Module.ShowShipments","OrderWizard.Module.SubmitButton","OrderWizard.Module.TermsAndConditions","OrderWizard.Module.Title","Overview.Banner.View","Overview.Home.Standalone.View","Overview.Payment.View","Overview.Profile.View","Overview.Shipping.View","Overview","PaymentMethod.Collection","PaymentMethod.CreditCard.List.View","PaymentMethod.Helper","PaymentMethod.Model","PaymentMethod","PaymentWizard.Configuration","PaymentWizard.CreditTransaction.Collection","PaymentWizard.CreditTransaction.Model","PaymentWizard.EditAmount.View","PaymentWizard.Module.Addresses","PaymentWizard.Module.Confirmation","PaymentWizard.Module.ConfirmationSummary","PaymentWizard.Module.CreditTransaction.Edit.Action.View","PaymentWizard.Module.CreditTransaction","PaymentWizard.Module.Invoice.Action.View","PaymentWizard.Module.Invoice.Subject.View","PaymentWizard.Module.Invoice","PaymentWizard.Module.PaymentMethod.Creditcard","PaymentWizard.Module.PaymentMethod.Selector","PaymentWizard.Module.ShowCreditTransaction","PaymentWizard.Module.ShowInvoices","PaymentWizard.Module.ShowPayments","PaymentWizard.Module.Summary","PaymentWizard.Router","PaymentWizard","PaymentWizard.View","PickupInStore.AddToCart.Button","PickupInStore.FulfillmentOptions.View","PickupInStore.StoreSelector.ItemDetail.View","PickupInStore.StoreSelector.List.Row.View","PickupInStore.StoreSelector.List.View","PickupInStore.StoreSelector.View","PickupInStore","PickupInStore.View","PrintStatement.Model","PrintStatement","PrintStatement.View","ProductDetails.AddToProductList.View","ProductDetails.Base.View","ProductDetails.Component","ProductDetails.Full.View","ProductDetails.ImageGallery.View","ProductDetails.Information.View","ProductDetails.Options.Selector.Pusher.View","ProductDetails.Options.Selector.View","ProductDetails.Quantity.View","ProductDetails.QuickView.View","ProductDetails","ProductDetailToQuote","ProductDetailToQuote.View","ProductList.AddedToCart.View","ProductList.BulkActions.View","ProductList.ControlSingle.View","ProductList.Deletion.View","ProductList.Details.View","ProductList.DetailsLater.View","ProductList.DetailsLaterMacro.View","ProductList.DetailsMinQuantity.View","ProductList.DisplayFull.View","ProductList.Edit.View","ProductList.Item.Edit.View","ProductList.ListDetails.View","ProductList.Lists.View","ProductList.Utils","ProductListOnline","PromocodeSupport","QuantityPricing","QuantityPricing.View","QuickAdd.Item.View","QuickAdd.ItemsSearcher.Plugins","QuickAdd.Model","QuickAdd.View","QuickOrder.EmptyCart.View","QuickOrder","QuickOrder.View","QuickOrderAccessPoints.HeaderLink.View","QuickOrderAccessPoints","QuoteToSalesOrder.Model","QuoteToSalesOrderWizard.Configuration","QuoteToSalesOrderWizard.Module.Confirmation","QuoteToSalesOrderWizard.Module.PaymentMethod.Selector","QuoteToSalesOrderWizard.Module.QuoteDetails","QuoteToSalesOrderWizard.Router","QuoteToSalesOrderWizard.Step","QuoteToSalesOrderWizard","QuoteToSalesOrderWizard.View","Receipt.Details.Item.Actions.View","Receipt.Details.Item.Summary.View","Receipt.Details.View","Receipt.Model","Receipt","MyAccountListView","RecordViews.Selectable.View","RecordViews.SelectableActionable.View","RecordViews.View","ReorderItems.Actions.AddToCart.View","ReorderItems.Actions.Quantity.View","ReorderItems.Model","ReorderItems","RequestQuoteAccessPoints.HeaderLink.View","RequestQuoteAccessPoints","RequestQuoteWizard.Configuration","RequestQuoteWizard.Module.Comments","RequestQuoteWizard.Module.Confirmation","RequestQuoteWizard.Module.Header","RequestQuoteWizard.Module.Items.Line.Actions.View","RequestQuoteWizard.Module.Items.Line.Quantity.View","RequestQuoteWizard.Module.Items","RequestQuoteWizard.Module.Message","RequestQuoteWizard.Module.QuickAdd","RequestQuoteWizard.Permission.Error.View","RequestQuoteWizard.Router","RequestQuoteWizard.Step","RequestQuoteWizard","RequestQuoteWizard.View","ReturnAuthorization.Cancel.View","ReturnAuthorization.Collection","ReturnAuthorization.Confirmation.View","ReturnAuthorization.Detail.View","ReturnAuthorization.Form.Item.Actions.View","ReturnAuthorization.Form.Item.Summary.View","ReturnAuthorization.Form.View","ReturnAuthorization.GetReturnableLines","ReturnAuthorization.List.View","ReturnAuthorization.Model","ReturnAuthorization","SC.CCT.Html","SC.CCT.Html.View","ApplicationOnline","ApplicationOnlineLayout","Configuration","SC.Environment.Component","SC.Shopping.Configuration","SC.Shopping.Layout","SC.Shopping.Starter","SC.Shopping","SiteSearch.Button.View","SiteSearch","SocialSharing.Flyout.Hover.View","SocialSharing.Flyout.View","SocialSharing.Plugins.AddThis","SocialSharing.Plugins.Facebook","SocialSharing.Plugins.GooglePlus","SocialSharing.Plugins.Pinterest.Hover","SocialSharing.Plugins.Pinterest","SocialSharing.Plugins.Twitter","SocialSharing","StoreLocator.Collection","StoreLocator.Details.View","StoreLocator.List.All.Store.View","StoreLocator.List.All.View","StoreLocator.List.View","StoreLocator.Main.View","StoreLocator.Map.View","StoreLocator.Model","StoreLocator.Results.View","StoreLocator.Search.View","StoreLocator.Tooltip.View","StoreLocator","StoreLocator.Upgrade.View","StoreLocatorAccessPoints.HeaderLink.View","StoreLocatorAccessPoints","GoogleMap.Configuration","GoogleMap","ReferenceMap.Configuration","ReferenceMap.Promise.Handler","ReferenceMap","Subscriptions.AddOn.Details.View","Subscriptions.AddOn.List.View","Subscriptions.AddOn.Quantity.Amount.View","Subscriptions.AddOn.Review.View","Subscriptions.AddOn.Summary.View","Subscriptions.AddOn.View","Subscriptions.Collection","Subscriptions.Details.View","Subscriptions.Line.Collection","Subscriptions.Line.Model","Subscriptions.Line.View","Subscriptions.List.View","Subscriptions.Model","Subscriptions.Pricing.View","Subscriptions.Status.View","Subscriptions","TrackingServices","TransactionHistory.Collection","TransactionHistory.List.View","TransactionHistory.Model","TransactionHistory","WebSiteConfiguration.Model","Wizard.Module","Wizard.Router","Wizard.Step","Wizard.StepGroup","Wizard.StepModule","Wizard.StepNavigation.View","Wizard.View","almond","Backbone","backbone.stickit","Backbone.Validation","bignumber","bootstrap-datepicker","Handlebars","jQuery","jQuery.bxSlider","zoom","require","js.cookie","sass","bootstrap","typeahead","underscore","captcha","Getinfo.View","Musician.Get.Model","MusicianResource.List.View","MusicianResource.Model","MusicianResource","MusicianResource.View","Home.View.Ext","NewAndNoteWorthy.View","NPHRecommends.View","Cart.AddToCart.Button.View.Ext","Cart.Detailed.View.Ext","Cart.Item.Actions.View.Ext","Cart.Item.Summary.View.Ext","Cart.Lines.View.Ext","Cart.Summary.View.Ext","ProductDetails.Base.View.Ext","ProductDetails.Full.View.Ext","ProductDetails.ImageGallery.View.Ext","ProductDetails.ImprintOption.Model","ProductDetails.ImprintOption.View","ProductDetails.Information.View.Ext","ProductDetails.Options.Selector.Pusher.View.Ext","ProductDetails.Options.Selector.View.Ext","ProductDetails.SubItems.View","AboutUs.View","ContactUs.View","ContactUsForm.View","Copyrights.View","CustomerMigration.View","CustomModules.Model","CustomModules","ExtraRewards.View","ExtraWorks.View","JoinOurTeam.View","LinkToNph.View","Manuscript.View","MoreAboutCopyright.View","MultiplyingEfforts.View","OurHistory.View","PrivacyPolicy.View","PromoteNph.View","PublishingProgram.View","ReturnsExchanges.View","RewardsBenefits.View","ShippingPolicy.View","ShopGifts.View","WelsRelationship.View","WhatPeopleSaying.View","BswSubscription.View","DailyMeditations.View","EficSubscription.View","MySubscriptions.View","SubscriptionsExt","WelsConnection.View","DownItems.List.View","OrderHistory.Collection.Ext","OrderHistory.Details.View.Ext","OrderHistory.List.Tracking.Number.View.Ext","OrderHistory.List.View.Ext","OrderHistory.MusicianResource.List.View","OrderHistory.Packages.View.Ext","OrderHistoryExt","Account.Register.Model.Ext","CheckoutCustomFields","CheckoutExt","SC.Checkout.Starter.Dependencies","SC.MyAccount.Starter.Dependencies","SC.Shopping.Starter.Dependencies","Transaction.Line.Views.Price.View","Transaction.Line.Views.Cell.Navigable.View","Transaction.Line.Views.Option.View","Transaction.Line.Views.Options.Selected.View","Transaction.Line.Views.QuantityAmount.View","LoginRegister.Login.View","LoginRegister.Register.View","LoginRegister.View","Header.MiniCartItemCell.View","Header.MiniCart.View","Header.View","Header.Profile.View","Header.Menu.View","Header.Menu.MyAccount.View","Facets.Model","Facets.ItemCell.View","Facets.FacetedNavigationItem.View","Facets.ItemListDisplaySelector.View","Facets.ItemListShowSelector.View","Facets.ItemListSortSelector.View","ItemRelations.Related.View","ItemRelations.RelatedItem.View","GlobalViews.Pagination.View","Address.Edit.Fields.View","GlobalViews.StarRating.View","ListHeader.View","ProductViews.Price.View","Product.Model","Profile.Information.View","RecentlyViewedItems.View","Transaction.List.View","ProductList.ControlItem.View","Utils","ItemsSearcher.View","OrderWizard.Module.CartItems.Ship","OrderWizard.Module.CartSummary","OrderWizard.Module.NonShippableItems","OrderWizard.Step","Overview.Home.View","PaymentWizard.Step","QuantityPricing.Utils","RecordViews.Actionable.View","ReorderItems.List.View","SiteSearch.View","SC.Checkout.Configuration.Steps.OPC","ProductList.CartSaveForLater.View","ReorderItems.Collection","Footer.View","GlobalViews.Breadcrumb.View","GlobalViews.Modal.View","jQuery","Backbone","Backbone.Validation","jQuery.bxSlider","Handlebars","typeahead"];
/* jshint esversion: 5 */

// This should be deleted ASAP!!! And never more used in future
// This is a workaround to avoid break sites due to the modules
// that changed the way they're exported

// HEADS UP! Keep this using "var" instead const/let because
// it's not being transpiled and needs to run in SEO
(function() {
    srcRequire = require;
    var srcDefine = define;

    var modulesMap = {
        'Footer.Simplified.View': 'FooterSimplifiedView',
        'Footer.View': 'FooterView',
        'GlobalViews.Message.View': 'GlobalViewsMessageView',
        'GlobalViews.Pagination.View': 'GlobalViewsPaginationView',
        'GlobalViews.ShowingCurrent.View': 'GlobalViewsShowingCurrentView',
        'ListHeader.View': 'ListHeaderView',
        'Profile.Model': 'ProfileModel',
        Configuration: 'Configuration',
        'Address.Model': 'AddressModel',
        'Address.Details.View': 'AddressDetailsView',
        AjaxRequestsKiller: 'AjaxRequestsKiller',
        'Categories.Model': 'CategoriesModel',
        'Newsletter.Model': 'NewsletterModel',
        'Newsletter.View': 'NewsletterView',
        MyAccountMenu: 'MyAccountMenu',
        'RecordViews.View': 'RecordViewsView',
        'ReorderItems.Actions.Quantity.View': 'ReorderItemsActionsQuantityView',
        'SC.MyAccount.Layout': 'MyAccountLayout',
        'Transaction.Line.Views.Cell.Navigable.View': 'TransactionLineViewsCellNavigableView',
        'Quote.Details.View': 'QuoteDetailsView',
        ApplicationLayout: 'ApplicationLayout',
        Application: 'Application',
        'SC.BaseComponent': 'SCBaseComponent'
    };
    var namesMap = {
        'SC.Configuration': 'Configuration',
        'ApplicationSkeleton.Layout': 'ApplicationLayout'
    };

    // Core Modules considered part of the extLay. Extensions can use them
    var extLayModules = [
        'Backbone',
        'Backbone.Validation',
        'Backbone.Model',
        'Backbone.View',
        'Backbone.CompositeView',
        'Backbone.CachedModel',
        'Backbone.CollectionView',
        'Backbone.FormView',
        'Backbone.CachedCollection',
        'Handlebars', // Needed for gulp local
        'Handlebars.CompilerNameLookup', // Needed for gulp local
        'jQuery',
        'Wizard.Module',
        'CustomContentType.Base.View',
        'PageTypeView',
        'PageType.Base.View',
        'SCCollection',
        'SCCollectionView',
        'SCFormView',
        'SCModel',
        'SCView',
        'Utils',
        'underscore',
        'require' // Needed for gulp local
    ];
    // Core Modules currently (20.2) being used by extensions.
    // We allow extensions to keep using them for a while.
    // This list should be empty some day in the future.
    var coreModulesWhiteList = [
        'Account.ForgotPassword.Model',
        'Account.Login.Model',
        'Address.Details.View',
        'Address.Edit.Fields.View',
        'Address.Edit.View',
        'AjaxRequestsKiller',
        'ApplicationSkeleton.Layout',
        'Cart.AddToCart.Button.View',
        'Cart.Confirmation.Helpers',
        'Cart.Confirmation.View',
        'Cart.Detailed.View',
        'Cart.Item.Actions.View',
        'Cart.Item.Summary.View',
        'Cart.Lines.Free.View',
        'Cart.Lines.View',
        'Cart.Promocode.List.Item.View',
        'Cart.Promocode.Notifications.View',
        'Cart.QuickAddToCart.View',
        'Cart.Summary.View',
        'Categories',
        'Categories.Utils',
        'CreditCard',
        'CreditCard.Edit.Form.View',
        'CreditCard.View',
        'ErrorManagement',
        'ErrorManagement.PageNotFound.View',
        'ErrorManagement.ResponseErrorParser',
        'Facets.Browse.CategoryHeading.View',
        'Facets.Browse.View',
        'Facets.CategoryCell.View',
        'Facets.Helper',
        'Facets.ItemCell.View',
        'Facets.Model',
        'Facets.Router',
        'Facets.Translator',
        'Footer.Simplified.View',
        'Footer.View',
        'GlobalViews.BackToTop.View',
        'GlobalViews.Breadcrumb.View',
        'GlobalViews.Confirmation.View',
        'GlobalViews.CountriesDropdown.View',
        'GlobalViews.Message.View',
        'GlobalViews.Modal.View',
        'GlobalViews.Pagination.View',
        'GlobalViews.ShowingCurrent.View',
        'GlobalViews.StarRating.View',
        'GlobalViews.States.View',
        'GoogleTagManager',
        'GoogleTagManager.Model',
        'GoogleTagManager.NavigationHelper.Plugins.Standard',
        'Header.Logo.View',
        'Header.Menu.MyAccount.View',
        'Header.Menu.View',
        'Header.MiniCart.View',
        'Header.MiniCartItemCell.View',
        'Header.Profile.View',
        'Header.Simplified.View',
        'Header.View',
        'Home.View',
        'Invoice.Collection',
        'Invoice.Details.View',
        'Invoice.OpenList.View',
        'Invoice.PaidList.View',
        'Item.Collection',
        'Item.KeyMapping',
        'Item.Model',
        'Item.Option.Collection',
        'ItemDetails.Collection',
        'ItemDetails.View',
        'ItemRelations.Correlated.Collection',
        'ItemRelations.Correlated.View',
        'ItemRelations.Related.Collection',
        'ItemRelations.RelatedItem.View',
        'ItemsSearcher.Item.View',
        'ItemsSearcher.View',
        'ListHeader.View',
        'LiveOrder.Line.Model',
        'LiveOrder.Model',
        'Location',
        'Location.Collection',
        'Location.Model',
        'LoginRegister.CheckoutAsGuest.View',
        'LoginRegister.ForgotPassword.View',
        'LoginRegister.Login.View',
        'LoginRegister.Register.View',
        'LoginRegister.Utils',
        'LoginRegister.View',
        'MenuTree.View',
        'Merchandising.View',
        'MyAccountMenu',
        'NavigationHelper',
        'Newsletter.Model',
        'Newsletter.View',
        'Notifications.Order.Promocodes.View',
        'Notifications.Order.View',
        'Notifications.Profile.View',
        'OrderHistory.Details.View',
        'OrderHistory.Item.Actions.View',
        'OrderHistory.Line.Collection',
        'OrderHistory.List.Tracking.Number.View',
        'OrderHistory.List.View',
        'OrderHistory.Packages.View',
        'OrderHistory.Summary.View',
        'OrderWizard.Model',
        'OrderWizard.Module.Address',
        'OrderWizard.Module.Address.Billing',
        'OrderWizard.Module.Address.Shipping',
        'OrderWizard.Module.CartItems',
        'OrderWizard.Module.CartItems.PickupInStore',
        'OrderWizard.Module.CartItems.PickupInStore.List',
        'OrderWizard.Module.CartItems.Ship',
        'OrderWizard.Module.CartSummary',
        'OrderWizard.Module.Confirmation',
        'OrderWizard.Module.MultiShipTo.EnableLink',
        'OrderWizard.Module.MultiShipTo.Package.Creation',
        'OrderWizard.Module.MultiShipTo.Package.List',
        'OrderWizard.Module.MultiShipTo.Select.Addresses.Shipping',
        'OrderWizard.Module.MultiShipTo.Shipmethod',
        'OrderWizard.Module.NonShippableItems',
        'OrderWizard.Module.PaymentMethod',
        'OrderWizard.Module.PaymentMethod.Creditcard',
        'OrderWizard.Module.PaymentMethod.GiftCertificates',
        'OrderWizard.Module.PaymentMethod.Invoice',
        'OrderWizard.Module.PaymentMethod.PurchaseNumber',
        'OrderWizard.Module.PaymentMethod.Selector',
        'OrderWizard.Module.PromocodeForm',
        'OrderWizard.Module.PromocodeNotifications',
        'OrderWizard.Module.RegisterEmail',
        'OrderWizard.Module.RegisterGuest',
        'OrderWizard.Module.Shipmethod',
        'OrderWizard.Module.ShowPayments',
        'OrderWizard.Module.ShowShipments',
        'OrderWizard.Module.SubmitButton',
        'OrderWizard.Module.TermsAndConditions',
        'OrderWizard.Module.Title',
        'OrderWizard.Router',
        'OrderWizard.Step',
        'Overview.Home.View',
        'Overview.Shipping.View',
        'PaymentInstrument.CreditCard.Edit.Form.View',
        'PaymentInstrument.CreditCard.View',
        'PaymentWizard.Module.Confirmation',
        'PaymentWizard.Module.ConfirmationSummary',
        'PaymentWizard.Module.CreditTransaction',
        'PaymentWizard.Module.Invoice',
        'PaymentWizard.Module.PaymentMethod.Creditcard',
        'PaymentWizard.Module.PaymentMethod.Selector',
        'PaymentWizard.Module.ShowCreditTransaction',
        'PaymentWizard.Module.ShowInvoices',
        'PaymentWizard.Module.ShowPayments',
        'PaymentWizard.Module.Summary',
        'PickupInStore.FulfillmentOptions.View',
        'PickupInStore.View',
        'PluginContainer',
        'PrintStatement.View',
        'Product.Model',
        'Product.Option.Model',
        'ProductComparison.Helper',
        'ProductDetailToQuote.View',
        'ProductDetails.Base.View',
        'ProductDetails.Component',
        'ProductDetails.Full.View',
        'ProductDetails.ImageGallery.View',
        'ProductDetails.Information.View',
        'ProductDetails.Options.Selector.Pusher.View',
        'ProductDetails.Options.Selector.View',
        'ProductDetails.Quantity.View',
        'ProductDetails.QuickView.View',
        'ProductLine.Common.Url',
        'ProductLine.Sku.View',
        'ProductLine.Stock.View',
        'ProductLine.StockDescription.View',
        'ProductList.Control.View',
        'ProductList.DetailsLaterMacro.View',
        'ProductList.Edit.View',
        'ProductList.Item.Edit.View',
        'ProductList.Item.Model',
        'ProductList.Model',
        'ProductReviews.Center.View',
        'ProductViews.Option.View',
        'ProductViews.Price.View',
        'Profile.Information.View',
        'Profile.Model',
        'Profile.Router',
        'QuantityPricing.Utils',
        'QuantityPricing.View',
        'QuickAdd.Item.View',
        'QuickAdd.ItemsSearcher.Plugins',
        'QuickAdd.Model',
        'QuickAdd.View',
        'QuickOrder.View',
        'Quote',
        'Quote.Details.View',
        'Quote.List.View',
        'Quote.ListExpirationDate.View',
        'QuoteToSalesOrderWizard.Module.Confirmation',
        'QuoteToSalesOrderWizard.Module.PaymentMethod.Selector',
        'QuoteToSalesOrderWizard.Module.QuoteDetails',
        'QuoteToSalesOrderWizard.Router',
        'Receipt.Details.View',
        'RecordViews.Actionable.View',
        'RecordViews.View',
        'ReferenceMap',
        'ReorderItems.Actions.AddToCart.View',
        'ReorderItems.Actions.Quantity.View',
        'RequestQuoteWizard.Configuration',
        'RequestQuoteWizard.Module.Comments',
        'RequestQuoteWizard.Module.Confirmation',
        'RequestQuoteWizard.Module.Header',
        'RequestQuoteWizard.Module.Items',
        'RequestQuoteWizard.Module.Message',
        'RequestQuoteWizard.Module.QuickAdd',
        'ReturnAuthorization.Collection',
        'SC.Configuration',
        'SC.MyAccount.Layout',
        'SC.Shopping.Configuration',
        'Session',
        'Singleton',
        'SiteSearch.View',
        'SocialSharing.Flyout.Hover.View',
        'SocialSharing.Flyout.View',
        'Tracker',
        'Transaction.Collection',
        'Transaction.Line.Model',
        'Transaction.Line.Views.Cell.Actionable.Expanded.View',
        'Transaction.Line.Views.Cell.Actionable.View',
        'Transaction.Line.Views.Cell.Navigable.View',
        'Transaction.Line.Views.Cell.Selectable.View',
        'Transaction.Line.Views.Option.View',
        'Transaction.Line.Views.Options.Selected.View',
        'Transaction.Line.Views.Price.View',
        'Transaction.Line.Views.QuantityAmount.View',
        'Transaction.List.View',
        'Transaction.Model',
        'Transaction.Paymentmethod.Model',
        'TransactionHistory.List.View',
        'TransactionHistory.Model',
        'Url',
        'Utilities.ResizeImage',
        'Wizard.Router',
        'Wizard.Step',
        'Wizard.View',
        'bignumber',
        'jQuery.bxSlider',
        'jQuery.scPush',
        'js.cookie',
        'zoom'
    ];

    function mapNames(deps) {
        // Workaround for Modules that changed its name
        for (var i = 0; i < (deps || []).length; i++) {
            var newName = namesMap[deps[i]];
            if (newName) {
                deps[i] = newName;
            }
        }

        return deps;
    }

    function mapModules(modules, deps) {
        for (var i = 0; i < (deps || []).length; i++) {
            var exportedName = modulesMap[deps[i]];
            if (exportedName) {
                modules[i] = modules[i][exportedName];
            }

            if (deps[i] === 'require') {
                modules[i] = require;
            }
        }

        return modules;
    }

    function getNewCallback(deps, callback) {
        function newCallback() {
            var modules = mapModules(arguments, deps);
            return callback && callback.apply(null, modules);
        }

        return newCallback;
    }

    function copyProperties(source, dest) {
        for (var property in source) {
            if (source.hasOwnProperty(property)) {
                dest[property] = source[property];
            }
        }
    }

    function checkCoreModulesUsage(name, deps) {
        if (!(SC.CONFIGURATION || SC.Configuration || {}).isSafeMode) {
            return;
        }

        var coreModules = extLayModules.concat(coreModulesWhiteList);
        var invalidModules = [];
        var warningModules = [];

        for (var i = 0; i < (deps || []).length; i++) {
            var dependency = deps[i];
            var isCoreModule = SC.ENVIRONMENT.JS_MODULE_NAMES.indexOf(dependency) > -1;
            var isWhiteListed = coreModules.indexOf(dependency) > -1;

            if (isCoreModule && !isWhiteListed) {
                invalidModules.push(dependency);
            } else if (coreModulesWhiteList.indexOf(dependency) > -1) {
                warningModules.push(dependency);
            }
        }

        if (invalidModules.length || warningModules.length) {
            var msg =
                'Extension ' +
                name.replace(/^([^.]+\.[^.]+)\..*$/, '$1') +
                (invalidModules.length
                    ? ' has not been loaded due to is using private core modules'
                    : ' uses private core modules') +
                ' and that might break your site.\nIts ' +
                name +
                ' module is using:\n\t' +
                (invalidModules.length ? invalidModules : warningModules).join(', ') +
                '\nSafe Mode is on. It can be turn off in SC Configuration: Advanced/Extensions';

            if (invalidModules.length) {
                throw new Error(msg);
            }
            console.warn(msg);
        }
    }

    require = function(deps, callback, failCallback) {
        if (deps.splice) {
            deps = mapNames(deps);
            return srcRequire(deps, getNewCallback(deps, callback), failCallback);
        }

        var newName = mapNames([deps])[0];
        var module = srcRequire(newName);
        return mapModules([module], [newName])[0];
    };

    define = function(name, deps, callback) {
        if (typeof name !== 'string' || SC.ENVIRONMENT.JS_MODULE_NAMES.indexOf(name) !== -1) {
            return srcDefine.call(null, name, deps, callback);
        }

        checkCoreModulesUsage(name, deps);

        deps = mapNames(deps);

        // Workaround for the other affected modules
        var newCallback = getNewCallback(deps, callback);

        if (typeof name !== 'string') {
            // Adjust args appropriately
            callback = deps;
            deps = name;
            name = null;
            // This module may not have dependencies
            if (!deps.splice) {
                callback = deps;
                deps = null;
                return srcDefine.call(null, newCallback);
            }
            return srcDefine.call(null, deps, newCallback);
        }
        return srcDefine.call(null, name, deps, newCallback);
    };

    copyProperties(srcDefine, define);
    copyProperties(srcRequire, require);
})();

SC.ENVIRONMENT.TEMPLATES_MODULE_NAMES = undefined;