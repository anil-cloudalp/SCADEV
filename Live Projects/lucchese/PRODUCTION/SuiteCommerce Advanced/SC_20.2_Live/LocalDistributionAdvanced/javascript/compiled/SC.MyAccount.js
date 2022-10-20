/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("SC.MyAccount", ["require", "exports", "Environment", "MyAccount.Alone", "MyAccount.Full"], function (require, exports, Environment_1, MyAccount_Alone_1, MyAccount_Full_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SCMyAccount = /** @class */ (function () {
        function SCMyAccount() {
        }
        SCMyAccount.getInstance = function () {
            var SC = Environment_1.Environment.getSC();
            if (SC.ENVIRONMENT.standalone) {
                return MyAccount_Alone_1.MyAccountAlone.getInstance();
            }
            return MyAccount_Full_1.MyAccountFull.getInstance();
        };
        return SCMyAccount;
    }());
    exports.SCMyAccount = SCMyAccount;
});

//# sourceMappingURL=SC.MyAccount.js.map
