"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Vlad on 9/5/2016.
 */
var core_1 = require("@angular/core");
var nav_service_1 = require("../nav/nav-service");
var user_service_1 = require("../myservices/user-service");
var ToolingMain = (function () {
    function ToolingMain(navSevice, accountService) {
        this.navSevice = navSevice;
        this.accountService = accountService;
    }
    ToolingMain.prototype.onLogout = function () {
        this.accountService.logout({ lastURL: 'none' }).subscribe(function (res) {
        });
    };
    ToolingMain.prototype.onNavClick = function () {
        this.navSevice.showMenu();
    };
    ToolingMain = __decorate([
        core_1.Component({
            selector: 'tooling-main',
            template: "\n<div class=\"container\">\n\n  <div class=\"row hidden-sm-up\">\n    <div class=\"pull-xs-left\">GarbOp</div>\n    <tools-help class=\"pull-xs-right\"></tools-help> \n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-2\">\n      <a class=\"fa fa-bars\" (click)=\"onNavClick()\"></a>\n    </div>\n    <div class=\"col-xs-2\">\n      <tools-search ></tools-search>\n    </div>\n      <div class=\"hidden-xs-down\">\n      <tools-explore></tools-explore>\n    </div>\n    <div class=\"col-xs-2\">\n       <tools-post></tools-post>\n    </div>\n    <div class=\"col-xs-2\">\n      <tools-personal></tools-personal>  \n    </div>\n    <div class=\"hidden-xs-down\">\n        <tools-help></tools-help>\n     </div>\n     <div class=\"col-xs-2\">\n      <tools-menu></tools-menu>\n     </div>\n     <div class=\"col-xs-2\">\n      <tools-notifications></tools-notifications>\n    </div> \n    <a  class=\"btn\" (click)=\"onLogout()\">Logout</a>      \n  </div>     \n</div>         \n"
        }), 
        __metadata('design:paramtypes', [nav_service_1.NavService, user_service_1.UserService])
    ], ToolingMain);
    return ToolingMain;
}());
exports.ToolingMain = ToolingMain;
//# sourceMappingURL=tooling-main.js.map