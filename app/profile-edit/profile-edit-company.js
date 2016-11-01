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
var user_service_1 = require("../myservices/user-service");
var ProfileEditCompany = (function () {
    function ProfileEditCompany(userService) {
        this.userService = userService;
        //this.person = joinusService.person;
    }
    ProfileEditCompany.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user$.subscribe(function (user) { return _this.user = user; });
    };
    ProfileEditCompany = __decorate([
        core_1.Component({
            template: "\n<div>\n      <!--<h2>Profile</h2>-->\n      <div *ngIf=\"myMsg\">{{myMsg}}</div>\n      <forms-company [person]=\"user\"></forms-company>        \n        <!--<a routerLink=\"../personal\" routerLinkActive=\"active\">Personal</a>-->\n        \n</div>\n"
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], ProfileEditCompany);
    return ProfileEditCompany;
}());
exports.ProfileEditCompany = ProfileEditCompany;
//# sourceMappingURL=profile-edit-company.js.map