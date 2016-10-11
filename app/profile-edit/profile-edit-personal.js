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
//import {JoinUsService} from "../join-us/login-service";
var user_service_1 = require("../myservices/user-service");
var ProfileEditPersonal = (function () {
    function ProfileEditPersonal(userService) {
        this.userService = userService;
    }
    ProfileEditPersonal.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user$.subscribe(function (user) { return _this.user = user; });
    };
    ProfileEditPersonal = __decorate([
        core_1.Component({
            selector: 'join-us-personal',
            template: "\n<div>\n      <h2>Profile Personal</h2>\n      <forms-personal [person]=\"user\"></forms-personal>\n        <a routerLink=\"../company\" routerLinkActive=\"active\">Company back</a>\n        <a routerLink=\"../assets\" routerLinkActive=\"active\">Assets</a>        \n</div>\n\n"
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], ProfileEditPersonal);
    return ProfileEditPersonal;
}());
exports.ProfileEditPersonal = ProfileEditPersonal;
//# sourceMappingURL=profile-edit-personal.js.map