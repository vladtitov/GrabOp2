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
 * Created by Vlad on 9/6/2016.
 */
var core_1 = require("@angular/core");
var user_service_1 = require("../myservices/user-service");
var ToolsMenu = (function () {
    function ToolsMenu(accountService) {
        this.accountService = accountService;
    }
    ToolsMenu.prototype.onLogout = function () {
        this.accountService.logout({ lastURL: 'none' }).subscribe(function (res) {
        });
    };
    ToolsMenu.prototype.ngOnInit = function () { };
    ToolsMenu.prototype.onDocClick = function (evt) {
        if (this.isVisible)
            this.isVisible = false;
    };
    ToolsMenu.prototype.onClick = function (evt) {
        var _this = this;
        if (!this.isVisible)
            setTimeout(function () {
                _this.isVisible = true;
            }, 50);
    };
    ToolsMenu = __decorate([
        core_1.Component({
            selector: 'tools-menu',
            template: "\n<div>\n        <!--<span class=\"fa fa-bars btn\"></span>-->\n        <div class=\"dropdown\" [class.open]=\"isVisible\">\n            <a class=\" fa fa-bars btn\" (click)=\"onClick()\"></a>     \n            <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" [routerLink]=\"['/settings']\" routerLinkActive=\"active\">Settings</a>\n                <a class=\"dropdown-item\" [routerLink]=\"['/how-it-works']\" routerLinkActive=\"active\">How it works</a> \n                <a class=\"dropdown-item\" [routerLink]=\"['/contact-us']\" routerLinkActive=\"active\">Contact us</a>\n                <a class=\"dropdown-item\" [routerLink]=\"['/terms-of-use']\" routerLinkActive=\"active\">Terms of Use</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" (click)=\"onLogout()\">Sign out</a>             \n            </div>\n        </div>\n</div>\n",
            host: {
                '(document:click)': 'onDocClick($event)',
            }
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], ToolsMenu);
    return ToolsMenu;
}());
exports.ToolsMenu = ToolsMenu;
//# sourceMappingURL=tools-menu.js.map