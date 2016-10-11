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
        var _this = this;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.joinusService = joinusService;
        this.password = '';
        this.model = joinusService.account;
        this.password = this.model.password;
        this.confirm = new forms_1.FormControl(this.password, [function (fc) { return _this.areEqual(_this.password, fc); }]);
        // var password = new FormControl(this.password,[Validators.required,Validators.minLength(3)]);
        this.myForm = fb.group({
            username: [this.model.username, [forms_1.Validators.required, forms_1.Validators.minLength(5), this.validateUsername.bind(this)]],
            PrimaryEmail: [this.model.PrimaryEmail]
        });
        /// password.registerOnChange((val)=>{
        //   console.log(val);
        //  })
        this.sb1 = route.params.subscribe(function (params) {
            //console.log(params);
        });
    }
    JoinUsUsername.prototype.validateUsername = function (ctr) {
        var service = this.joinusService;
        var p = new Promise(function (resolve) {
            service.exists(ctr.value).then(function (res) {
            });
        });
        //setTimeout(())
        console.log(ctr);
        return p;
    };
    JoinUsUsername.prototype.areEqual = function (password, repeat) {
        // console.log(password,repeat.value);
        if (password == repeat.value)
            return null;
        return { areEqual: false };
    };
    JoinUsUsername.prototype.onPasswordChanged = function (evt) {
        this.password = evt;
        this.confirm.updateValueAndValidity();
    };
    JoinUsUsername.prototype.ngOnInit = function () {
        // this.accountService.myAccount$.subscribe(person=>this.person = person);
    };
    JoinUsUsername.prototype.ngOnDestroy = function () {
        this.sb1.unsubscribe();
    };
    JoinUsUsername.prototype.fullUpdate = function () {
        this.myForm.setValue({
            username: " new username",
            email: "new email"
        });
    };
    JoinUsUsername.prototype.reset = function () {
        this.myForm.reset();
    };
    JoinUsUsername.prototype.onUsernameBlur = function () {
        this.joinusService.exists(this.model.username).then(function (res) {
            console.log(res);
            //this.userna.valid = false;
        });
        console.log(this.model.username);
    };
    JoinUsUsername.prototype.evalueateForm = function () {
        return true;
    };
    JoinUsUsername.prototype.onNextClick = function () {
        /*  this.person.password= this.myForm.value['password'];
          this.person.username= this.myForm.value['username'];
          this.person.firstName = this.myForm.value['firstName'];
          this.person.lastName= this.myForm.value['lastName'];
          this.person.PrimaryEmail = this.myForm.value['PrimaryEmail'];*/
        if (this.evalueateForm())
            this.router.navigate(['../company'], { relativeTo: this.route });
    };
    JoinUsUsername = __decorate([
        core_1.Component({
            template: "\n        <form #f=\"ngForm\"  autocomplete=\"off\" novalidate>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4 col-form-label\">First Name:</label>\n             <div class=\"col-sm-6\">\n              <input [(ngModel)]=\"model.firstName\" name=\"firstName\">\n            </div>\n          </div>\n          <div class=\"form-group row\" >\n            <label class=\"col-sm-4 col-form-label\"   for=\"lastname\">Last Name:</label>\n              <div class=\"col-sm-6\">\n               <input  [(ngModel)]=\"model.lastName\" name=\"lastName\" >\n            </div>\n          </div>\n           <div class=\"form-group row\" [formGroup]=\"myForm\">\n            <label class=\"col-sm-4 col-form-label\"   for=\"username\">Username:</label>\n              <div class=\"col-sm-6\">\n               <input formControlName=\"username\" name=\"username\" (blur)=\"onUsernameBlur()\"  >\n            </div>\n          </div>\n          <div class=\"form-group row\" [formGroup]=\"myForm\">\n            <label class=\"col-sm-4 col-form-label\"  for=\"email\">Email:</label>\n             <div class=\"col-sm-6\">\n             <input formControlName=\"PrimaryEmail\" name=\"PrimaryEmail\">\n            </div>\n          </div>\n             \n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\">Password:</label>\n                    <div class=\"col-sm-6\">\n                 <input [(ngModel)]=\"model.password\"  (ngModelChange)=\"onPasswordChanged($event)\" name=\"password\">\n                  </div>\n                </div>\n                 <div class=\"form-group row\">\n                  <label class=\"col-sm-4 col-form-label\" for=\"repassword\">Re-confirm Password:</label>\n                  <div class=\"col-sm-6\">\n                  <input [formControl]=\"confirm\"/>\n                  </div>\n                </div> \n             \n          \n        </form>    \n  <button  class=\"pull-right\" [disabled] =\"!f.valid\" (click)=\"onNextClick()\">Company</button>\n  \n   <div class=\"debug\"> {{ f.valid | json }} </div>\n  <div class=\"debug\"> {{ model | json }} </div>\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder, login_service_1.JoinUsService])
    ], JoinUsUsername);
    return JoinUsUsername;
}());
exports.JoinUsUsername = JoinUsUsername;
//# sourceMappingURL=join-us-username-FormBuilder.js.map