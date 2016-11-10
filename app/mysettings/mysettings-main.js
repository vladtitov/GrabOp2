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
var core_1 = require("@angular/core");
var login_service_1 = require("../join-us/login-service");
var MySettingsMain = (function () {
    function MySettingsMain(accountService) {
        // this.userService.user$.subscribe(
        //     user=>this.user = user
        // );
        // this.accountService.getAccount().then(
        //     res=>{
        //         this.account = res;
        //         // console.log('account', this.account);
        //     });
        var _this = this;
        this.accountService = accountService;
        this.accountService.accountSettings$.subscribe(function (accountService) {
            _this.accountSettings = accountService;
            console.log('this.accountSettings', _this.accountSettings);
        });
        // this.accountService.getSettings().then(
        //     res=>{
        //         this.accountSettings = res;
        //         console.log('accountSettings', this.accountSettings);
        //     });
    }
    MySettingsMain.prototype.ngOnInit = function () { };
    MySettingsMain.prototype.onDeactivateClick = function () { };
    MySettingsMain = __decorate([
        core_1.Component({
            selector: 'mysettings-main',
            template: "\n<div>\n<h1>Manage account settings</h1>\n\n<div class=\"card-block\">\n    <div class=\"row\">\n        <notifications [accountSettings]=\"accountSettings\"></notifications>\n        <!--<notifications></notifications>-->\n        <change-pass ></change-pass>\n    </div>\n</div>\n<hr>\n<div class=\"card-block\">\n    <div class=\"row\">\n        <privacy-settings [accountSettings]=\"accountSettings\"></privacy-settings>\n        <update-account></update-account>\n    </div>\n</div>\n<!--<div class=\"debug\">{{ person | json }}  </div>-->\n<hr>\n<div class=\"card-block\">\n    <button type=\"button\" (click)=\"onDeactivateClick()\" class=\"btn btn-outline-secondary pull-right\">deactivate my account</button>\n</div>\n\n</div>\n\n"
        }), 
        __metadata('design:paramtypes', [login_service_1.JoinUsService])
    ], MySettingsMain);
    return MySettingsMain;
}());
exports.MySettingsMain = MySettingsMain;
//# sourceMappingURL=mysettings-main.js.map