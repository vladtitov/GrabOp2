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
 * Created by Vlad on 9/17/2016.
 */
var core_1 = require("@angular/core");
//import {JoinUsService} from "../join-us/login-service";
var user_service_1 = require("../myservices/user-service");
var ProfileEditAssets = (function () {
    function ProfileEditAssets(userService) {
        this.userService = userService;
        // this.person = joinusService.person;
    }
    ProfileEditAssets.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user$.subscribe(function (user) { return _this.user = user; });
    };
    ProfileEditAssets.prototype.onSubmitClick = function () {
        var _this = this;
        this.userService.saveUser().then(function (res) {
            if (res.success) {
                _this.myMsg = 'data Saved';
            }
            else {
                _this.myMsg = res.message;
            }
            setTimeout(function () { _this.myMsg = ''; }, 10000);
            _this.userService.getUser();
        });
    };
    ProfileEditAssets = __decorate([
        core_1.Component({
            template: "\n<div>\n<div *ngIf=\"myMsg\">{{myMsg}}</div>\n<edit-assets [model]=\"user\" ></edit-assets>\n  <!--<a routerLink=\"../personal\" routerLinkActive=\"active\">Personal</a>-->\n        <!--<button class=\"btn btn-primary\"   (click)=\"onSubmitClick()\">update</button>-->\n</div>\n"
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], ProfileEditAssets);
    return ProfileEditAssets;
}());
exports.ProfileEditAssets = ProfileEditAssets;
//# sourceMappingURL=profile-edit-assets.js.map