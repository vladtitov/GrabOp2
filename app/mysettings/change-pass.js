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
var vos_1 = require("../models/vos");
var user_service_1 = require("../myservices/user-service");
var login_service_1 = require("../join-us/login-service");
var forms_1 = require("@angular/forms");
var ChangePass = (function () {
    function ChangePass(accountService, userService) {
        this.accountService = accountService;
        this.userService = userService;
        this.password = '';
        // @Input() account:VOAccount;
        this.account = new vos_1.VOAccount({});
    }
    ChangePass.prototype.ngOnInit = function () {
        var _this = this;
        // this.userService.user$.subscribe(
        //     user=>this.user = user
        // );
        this.confirm = new forms_1.FormControl(this.password, [function (fc) { return _this.areEqual(_this.password, fc); }]);
    };
    ChangePass.prototype.areEqual = function (password, repeat) {
        // console.log(password,repeat.value);
        if (password == repeat.value) {
            this.passwordOK = true;
            return null;
        }
        else {
            this.passwordOK = false;
            return { areEqual: false };
        }
    };
    ChangePass.prototype.onPasswordChanged = function (evt) {
        this.password = evt;
        this.confirm.updateValueAndValidity();
    };
    ChangePass.prototype.onChangeClick = function () {
        var _this = this;
        this.account.new_password = this.new_password;
        this.account.password = this.old_password;
        this.accountService.updateAccount(this.account, 'password').then(function (res) {
            // console.log('res', res);
            if (res.success) {
                _this.myMsg = 'password changed';
            }
            else {
                _this.myMsg = res.message;
            }
            setTimeout(function () { _this.myMsg = ''; }, 10000);
        });
    };
    ChangePass = __decorate([
        core_1.Component({
            selector: 'change-pass',
            template: "\n<div>\n        <div class=\"col-sm-5 offset-sm-1\">\n            <h5>Change Your Password</h5>\n            <div class=\"card-block\">\n                <form #f=\"ngForm\"  autocomplete=\"off\" novalidate>\n                    <div class=\"form-group row\">\n                      <label for=\"inputPassword1\" class=\"col-sm-6 col-form-label\">\n                        <strong>Current</strong>\n                      </label>\n                      <div class=\"col-sm-6\">\n                        <input [(ngModel)]=\"old_password\"\n                                type=\"password\"\n                                class=\"form-control\"\n                                id=\"inputPassword1\"\n                                placeholder=\"Password\"\n                                name=\"password\"\n                                required>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"inputPassword2\" class=\"col-sm-6 col-form-label\">\n                        <strong>New password</strong>\n                      </label>\n                      <div class=\"col-sm-6\">\n                        <input [(ngModel)]=\"new_password\"\n                                (ngModelChange)=\"onPasswordChanged($event)\"\n                                type=\"password\"\n                                class=\"form-control\"\n                                id=\"inputPassword2\"\n                                placeholder=\"Password\"\n                                name=\"new_password\"\n                                minlength=\"6\"\n                                maxlength=\"100\"\n                                required>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"inputPassword3\" class=\"col-sm-6 col-form-label\">\n                        <strong>Confirm new password</strong>\n                      </label>\n                      <div class=\"col-sm-6\">\n                        <input [formControl]=\"confirm\"\n                                type=\"password\"\n                                class=\"form-control\"\n                                id=\"inputPassword3\"\n                                placeholder=\"Password\"\n                                name=\"new_password_confirm\"\n                                minlength=\"6\"\n                                maxlength=\"100\"\n                                required>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6 offset-sm-6 text-sm-right\">\n                            <button type=\"button\" class=\"btn btn-primary\"\n                             [disabled] =\"!passwordOK || !f.valid\"\n                             (click)=\"onChangeClick()\">change password</button>\n                        </div>\n                        <div *ngIf=\"myMsg\">{{myMsg}}</div>\n                        <!--<div class=\"debug\"> {{ f.valid | json }} </div>-->\n                    </div>\n                </form>\n            </div>\n        </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [login_service_1.JoinUsService, user_service_1.UserService])
    ], ChangePass);
    return ChangePass;
}());
exports.ChangePass = ChangePass;
//# sourceMappingURL=change-pass.js.map