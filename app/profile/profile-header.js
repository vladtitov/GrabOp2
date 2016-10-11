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
 * Created by Vlad on 9/10/2016.
 */
var core_1 = require("@angular/core");
var vos_1 = require("../models/vos");
var ProfileHeader = (function () {
    function ProfileHeader() {
        this.size = 256;
    }
    ProfileHeader.prototype.ngOnInit = function () {
    };
    ProfileHeader.prototype.loadServices = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOUserExt)
    ], ProfileHeader.prototype, "user", void 0);
    ProfileHeader = __decorate([
        core_1.Component({
            selector: 'profile-header',
            template: "\n<div>     \n      Profile header\n      <div>{{user.jobtitle}}</div>\n      <button routerLink=\"/profile-edit\" routerLinkActive=\"menu-active\"   class=\"btn btn-primary\">edit profile</button>\n      \n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileHeader);
    return ProfileHeader;
}());
exports.ProfileHeader = ProfileHeader;
//# sourceMappingURL=profile-header.js.map