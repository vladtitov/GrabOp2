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
var ProfileEditMain = (function () {
    function ProfileEditMain(userService) {
        this.userService = userService;
        // this.person = joinusService.person;
    }
    ProfileEditMain.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user$.subscribe(function (user) { return _this.user = user; });
    };
    ProfileEditMain.prototype.onSubmitClick = function () {
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
    ProfileEditMain = __decorate([
        core_1.Component({
            template: "\n        <h2>Profile Edit</h2>\n        <div class=\"card text-xs-center\">\n            <a [routerLink]=\"['/']\" routerLinkActive=\"active\" class=\"btn fa fa-close pull-right\"></a>\n          <div class=\"card-header\">\n            <ul class=\"nav nav-tabs card-header-tabs float-xs-left\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/profile-edit/personal\" routerLinkActive=\"active\">Basics</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/profile-edit/company\" routerLinkActive=\"active\">Professional</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/profile-edit/assets\" routerLinkActive=\"active\">Photo/Video</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"card-block\">\n          <div *ngIf=\"myMsg\">{{myMsg}}</div>\n            <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n            <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n            <!--<a href=\"#\" class=\"btn btn-primary\">update</a>-->\n          <!--</div>-->\n          <router-outlet></router-outlet>\n          <button class=\"btn btn-primary\" (click)=\"onSubmitClick()\">update</button>\n        </div>\n      </div>\n "
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], ProfileEditMain);
    return ProfileEditMain;
}());
exports.ProfileEditMain = ProfileEditMain;
//# sourceMappingURL=profile-edit-main.js.map