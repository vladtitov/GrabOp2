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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var login_service_1 = require("./login-service");
var JoinUsUsername = (function () {
    function JoinUsUsername(router, route, fb, joinusService) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.joinusService = joinusService;
        // myForm:FormGroup;
        this.password = '';
        this.sb1 = route.params.subscribe(function (params) {
            //console.log(params);
        });
    }
    JoinUsUsername.prototype.areEqual = function (password, repeat) {
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
    JoinUsUsername.prototype.onPasswordChanged = function (evt) {
        this.password = evt;
        this.confirm.updateValueAndValidity();
    };
    JoinUsUsername.prototype.ngOnInit = function () {
        var _this = this;
        this.model = this.joinusService.account;
        this.password = this.model.password;
        this.confirm = new forms_1.FormControl(this.password, [function (fc) { return _this.areEqual(_this.password, fc); }]);
    };
    JoinUsUsername.prototype.ngOnDestroy = function () {
        this.sb1.unsubscribe();
    };
    JoinUsUsername.prototype.onUsernameFocus = function () {
        this.usernameMsg = '';
    };
    JoinUsUsername.prototype.onUsernameBlur = function () {
        var _this = this;
        this.joinusService.exists({ username: this.model.username }, 'username').then(function (res) {
            console.log(res);
            if (res.error == 'exists') {
                _this.usernameOK = false;
                _this.usernameMsg = 'Username exists';
            }
            else if (res.success) {
                _this.usernameOK = true;
                _this.usernameMsg = 'OK';
            }
        });
    };
    JoinUsUsername.prototype.onEmailFocus = function () {
        this.emailMsg = '';
        this.restoreUsername = false;
    };
    JoinUsUsername.prototype.onEmailBlur = function () {
        var _this = this;
        this.joinusService.exists({ email: this.model.email }, 'email').then(function (res) {
            console.log(res);
            if (res.error == 'exists') {
                _this.emailOK = false;
                _this.emailMsg = 'email exists';
                _this.restoreUsername = true;
            }
            else if (res.success) {
                _this.emailMsg = 'OK';
                _this.emailOK = true;
            }
            //this.userna.valid = false;
        });
    };
    JoinUsUsername.prototype.evalueateForm = function () {
        return true;
    };
    JoinUsUsername.prototype.goNext = function () {
        this.router.navigate(['../company'], { relativeTo: this.route });
    };
    JoinUsUsername.prototype.onNextClick = function () {
        var _this = this;
        this.joinusService.createAccount(this.model).then(function (res) {
            if (res.success)
                _this.goNext();
            else
                _this.usernameOK = false;
        });
    };
    JoinUsUsername = __decorate([
        core_1.Component({
            template: "\n        <form #f=\"ngForm\"  autocomplete=\"off\" novalidate>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\">First Name:</label>\n             <div class=\"col-sm-6\">\n              <input [(ngModel)]=\"model.firstName\" name=\"firstName\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\"   for=\"lastname\">Last Name:</label>\n              <div class=\"col-sm-6\">\n               <input  [(ngModel)]=\"model.lastName\" name=\"lastName\" >\n            </div>\n          </div>\n           <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\"   for=\"username\">Username:</label>\n              <div class=\"col-sm-6\">\n               <input [(ngModel)]=\"model.username\" name=\"username\" (focus)=\"onUsernameFocus()\" (blur)=\"onUsernameBlur()\" required minlength=\"6\" maxlength=\"100\">\n              <div *ngIf=\"usernameMsg\">{{usernameMsg}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\"  for=\"email\">Email:</label>\n             <div class=\"col-sm-6\">\n             <input [(ngModel)]=\"model.email\" name=\"email\" (focus)=\"onEmailFocus()\" (blur)=\"onEmailBlur()\" required type=\"email\" minlength=\"6\" maxlength=\"100\">\n             <div *ngIf=\"emailMsg\">{{emailMsg}}</div>\n             <div *ngIf=\"restoreUsername\"><a [routerLink]=\"['/restore-username']\">Restore Username</a> </div>\n            </div>\n          </div>\n             \n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">Password:</label>\n                    <div class=\"col-sm-6\">\n                 <input [(ngModel)]=\"model.password\"  (ngModelChange)=\"onPasswordChanged($event)\" name=\"password\">\n                  </div>\n                </div>\n                 <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\" for=\"repassword\">Re-confirm Password:</label>\n                  <div class=\"col-sm-6\">\n                  <input [formControl]=\"confirm\"/>\n                  </div>\n                </div> \n             \n          \n        </form>    \n  <button  class=\"pull-right\" \n    [disabled] =\"!(usernameOK && emailOK && passwordOK)\"\n   (click)=\"onNextClick()\">Company</button>   \n   <div class=\"debug\"> {{ f.valid | json }} </div>\n  <div class=\"debug\"> {{ model | json }} </div>\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder, login_service_1.JoinUsService])
    ], JoinUsUsername);
    return JoinUsUsername;
}());
exports.JoinUsUsername = JoinUsUsername;
//# sourceMappingURL=join-us-username.js.map