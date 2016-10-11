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
//import {JoinUsService} from "./login-service";
var vos_1 = require("../models/vos");
var user_service_1 = require("../myservices/user-service");
var JoinUsCompany = (function () {
    function JoinUsCompany(userService) {
        this.userService = userService;
        this.user = new vos_1.VOUser({});
    }
    JoinUsCompany.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user$.subscribe(function (user) { return _this.user = user; });
    };
    JoinUsCompany = __decorate([
        core_1.Component({
            template: "\n<div> \n      <forms-company [person]=\"user\"></forms-company>\n        <a routerLink=\"../username\" routerLinkActive=\"active\">Username</a>\n        <a routerLink=\"../personal\" routerLinkActive=\"active\">Personal</a>\n      </div>\n"
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], JoinUsCompany);
    return JoinUsCompany;
}());
exports.JoinUsCompany = JoinUsCompany;
//# sourceMappingURL=join-us-company.js.map