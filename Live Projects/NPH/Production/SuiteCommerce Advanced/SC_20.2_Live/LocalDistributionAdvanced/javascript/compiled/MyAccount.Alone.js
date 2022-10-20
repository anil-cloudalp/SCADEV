/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("MyAccount.Alone", ["require", "exports", "underscore", "MyAccount.Full"], function (require, exports, _, MyAccount_Full_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MyAccountAlone = /** @class */ (function (_super) {
        __extends(MyAccountAlone, _super);
        function MyAccountAlone() {
            return _super.call(this) || this;
        }
        /**
         * @deprecated
         */
        MyAccountAlone.getName = function () {
            return MyAccountAlone.internalName;
        };
        MyAccountAlone.getInstance = function () {
            this.instance = this.instance || new MyAccountAlone();
            return this.instance;
        };
        MyAccountAlone.prototype.isStandalone = function () {
            return true;
        };
        MyAccountAlone.prototype.modulesToLoad = function (entryPointModules) {
            return _.filter(entryPointModules, function (module) { return module && !module.excludeFromMyAccount; });
        };
        /**
         * @deprecated
         */
        MyAccountAlone.internalName = 'MyAccount.Alone';
        return MyAccountAlone;
    }(MyAccount_Full_1.MyAccountFull));
    exports.MyAccountAlone = MyAccountAlone;
});

//# sourceMappingURL=MyAccount.Alone.js.map
