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
var login_service_1 = require("../join-us/login-service");
var UpdateAccount = (function () {
    function UpdateAccount(accountService) {
        this.accountService = accountService;
        // @Input() account:VOAccount;
        this.account = new vos_1.VOAccount({});
    }
    UpdateAccount.prototype.ngOnInit = function () { };
    UpdateAccount.prototype.onUpdateClick = function () {
        var _this = this;
        if (this.email)
            this.account.email = this.email;
        if (this.username)
            this.account.username = this.username;
        this.accountService.updateAccount(this.account, 'account').then(function (res) {
            if (res.success) {
                _this.myMsg = 'account updated';
            }
            else {
                _this.myMsg = res.message;
            }
            setTimeout(function () { _this.myMsg = ''; }, 10000);
        });
    };
    UpdateAccount = __decorate([
        core_1.Component({
            selector: 'update-account',
            template: "\n<div>\n        <div class=\"col-sm-5 offset-sm-1\">\n            <h5> Update Your Email Address or Username</h5>\n            <div class=\"card-block\">\n                <form  #f=\"ngForm\" autocomplete=\"off\" novalidate>\n                    <div class=\"form-group row\">\n                      <label for=\"inputEmail\" class=\"col-sm-6 col-form-label\"><strong>Account email</strong></label>\n                      <div class=\"col-sm-6\">\n                        <input [(ngModel)]=\"email\"\n                            type=\"email\"\n                             class=\"form-control\"\n                             id=\"inputEmail\"\n                             placeholder=\"Email\"\n                             name=\"email\"\n                             minlength=\"6\"\n                             maxlength=\"100\">\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"inputPassword3\" class=\"col-sm-6 col-form-label\"><strong>Username</strong></label>\n                      <div class=\"col-sm-6\">\n                        <input [(ngModel)]=\"username\"\n                            type=\"text\"\n                            class=\"form-control\"\n                            id=\"inputPassword3\"\n                            placeholder=\"Username\"\n                            name=\"username\"\n                            minlength=\"6\"\n                            maxlength=\"100\">\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6 offset-sm-6 text-sm-right\">\n                            <button type=\"button\" class=\"btn btn-primary\"\n                             [disabled] =\"!email && !username || !f.valid\"\n                             (click)=\"onUpdateClick()\">update</button>\n                        </div>\n                    </div>\n                </form>\n                <div *ngIf=\"myMsg\">{{myMsg}}</div>\n            </div>\n        </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [login_service_1.JoinUsService])
    ], UpdateAccount);
    return UpdateAccount;
}());
exports.UpdateAccount = UpdateAccount;
//# sourceMappingURL=update-account.js.map