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
var login_service_1 = require("../join-us/login-service");
var ProfileEditUsername = (function () {
    function ProfileEditUsername(router, route, fb, joinusService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.joinusService = joinusService;
        this.password = '';
        this.confirm = new forms_1.FormControl('', [function (fc) { return _this.areEqual(_this.password, fc); }]);
        var password = new forms_1.FormControl(this.password, [forms_1.Validators.required, forms_1.Validators.minLength(3)]);
        this.myForm = fb.group({
            firstName: ['', [forms_1.Validators.required]],
            lastName: [''],
            username: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            primaryEmail: [''],
            password: password
        });
        password.registerOnChange(function (val) {
            console.log(val);
        });
        this.account = joinusService.account;
    }
    ProfileEditUsername.prototype.areEqual = function (password, repeat) {
        // console.log(password,repeat.value);
        if (password == repeat.value)
            return null;
        return { areEqual: false };
    };
    ProfileEditUsername.prototype.onPasswordChanged = function (evt) {
        this.password = evt;
        this.confirm.updateValueAndValidity();
    };
    ProfileEditUsername.prototype.ngOnInit = function () {
        // this.accountService.myAccount$.subscribe(person=>this.person = person);
    };
    ProfileEditUsername.prototype.fullUpdate = function () {
        this.myForm.setValue({
            username: " new username",
            email: "new email"
        });
    };
    ProfileEditUsername.prototype.reset = function () {
        this.myForm.reset();
    };
    ProfileEditUsername.prototype.evalueateForm = function () {
        return true;
    };
    ProfileEditUsername.prototype.onNextClick = function () {
        this.account.password = this.myForm.value['password'];
        this.account.username = this.myForm.value['username'];
        this.account.firstName = this.myForm.value['firstName'];
        this.account.lastName = this.myForm.value['lastName'];
        this.account.PrimaryEmail = this.myForm.value['email'];
        if (this.evalueateForm())
            this.router.navigate(['../company'], { relativeTo: this.route });
        console.log(this.account);
    };
    ProfileEditUsername = __decorate([
        core_1.Component({
            template: "\n<div>\n    <div class=\"card\">\n    <a class=\"btn fa fa-close pull-right\"></a>\n    <div class=\"card-block \">    \n    \n    <h2>Profile   Username</h2>\n        <form #f=\"ngForm\" [formGroup] = \"myForm\"  autocomplete=\"off\" novalidate>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\">First Name:</label>\n             <div class=\"col-sm-6\">\n              <input formControlName=\"firstName\" >\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\"   for=\"lastname\">Last Name:</label>\n              <div class=\"col-sm-6\">\n               <input formControlName=\"lastName\">\n            </div>\n          </div>\n           <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\"   for=\"username\">Username:</label>\n              <div class=\"col-sm-6\">\n               <input  formControlName=\"username\" >\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\"  for=\"email\">Email:</label>\n             <div class=\"col-sm-6\">\n             <input formControlName=\"primaryEmail\">\n            </div>\n          </div>\n             \n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">Password:</label>\n                    <div class=\"col-sm-6\">\n                 <input formControlName=\"password\"   (ngModelChange)=\"onPasswordChanged($event)\">\n                  </div>\n                </div>\n                 <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\" for=\"repassword\">Re-confirm Password:</label>\n                  <div class=\"col-sm-6\">\n                  <input [formControl]=\"confirm\"/>\n                  </div>\n                </div> \n             \n          \n        </form>    \n  <a  class=\"pull-right\" (click)=\"onNextClick()\">Company</a>\n  </div>\n  <div class=\"debug\"> {{ f.value | json }} </div>\n  </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder, login_service_1.JoinUsService])
    ], ProfileEditUsername);
    return ProfileEditUsername;
}());
exports.ProfileEditUsername = ProfileEditUsername;
//# sourceMappingURL=ProfileEditUsername.js.map