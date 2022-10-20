/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("QuoteToSalesOrderWizard", ["require", "exports", "Profile.Model", "QuoteToSalesOrderWizard.Router", "QuoteToSalesOrderWizard.View", "QuoteToSalesOrderWizard.Configuration", "QuoteToSalesOrder.Model"], function (require, exports, Profile_Model_1, QuoteToSalesOrderWizardRouter, QuoteToSalesOrderView, QuoteToSalesOrderWizard_Configuration_1, QuoteToSalesOrderModel) {
    "use strict";
    return {
        // @method mountToApp
        // @param {ApplicationSkeleton} application
        // @return {QuoteToSalesOrderWizard.Router} A new instance of the router class
        mountToApp: function (application) {
            var quoteRouter = new QuoteToSalesOrderWizardRouter(application, {
                steps: QuoteToSalesOrderWizard_Configuration_1.QuoteToSalesOrderWizardConfiguration.steps,
                model: new QuoteToSalesOrderModel(),
                profile: Profile_Model_1.ProfileModel.getInstance()
            });
            QuoteToSalesOrderView.wizard = quoteRouter;
            return quoteRouter;
        }
    };
});

//# sourceMappingURL=QuoteToSalesOrderWizard.js.map
