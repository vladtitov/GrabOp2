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
var router_1 = require("@angular/router");
var login_service_1 = require("../join-us/login-service");
var LoginLogin = (function () {
    function LoginLogin(serviceLogin, router) {
        this.serviceLogin = serviceLogin;
        this.router = router;
        this.user = new vos_1.VOAccount({ password: 'mio,mio', username: 'al3kosvh@gmail.com' });
        this.isVisible = true;
    }
    LoginLogin.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.isIn = true; }, 100);
    };
    LoginLogin.prototype.removeMe = function () {
        this.router.navigate(['./', { outlets: { important: null } }]);
    };
    LoginLogin.prototype.hideMe = function () {
        var _this = this;
        this.isIn = false;
        setTimeout(function () { return _this.removeMe(); }, 600);
    };
    LoginLogin.prototype.onCloseClick = function () {
        this.hideMe();
    };
    LoginLogin.prototype.onSubmit = function (value) {
        var _this = this;
        var user = new vos_1.VOAccount(value);
        // console.log(user);
        this.serviceLogin.login(user).then(function (res) {
            if (res.success) {
                localStorage.setItem('person', JSON.stringify(res));
                _this.removeMe();
                setTimeout(function () {
                    // window.location.reload();
                }, 500);
            }
        });
    };
    LoginLogin = __decorate([
        core_1.Component({
            selector: 'login-login',
            template: "\n<div class=\"modal fade\" [class.d-block] =\"isVisible\" [class.in]=\"isIn\">     \n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n        <a  (click)=\"onCloseClick()\" class=\"btn fa fa-close\"></a>\n                <div class=\"logo\">\n                    <img src=\"../../images/hero.png\" alt=\"\">\n                </div>                \n                \n                    <div class=\"panel\" id=\"login\">\n                        <h3>Sign in to your account</h3>\n                        <hr>                                        \n                        <div *ngIf=\"wrongMessage\" class=\"errorMessage\">\n                            <h5> Incorrect username or password </h5>\n                            <hr>\n                        </div>\n                        <!--<form action=\"account/login\" method=\"post\" role=\"form\" #loginForm=\"ngForm\">-->\n                        <form (ngSubmit)=\"onSubmit(loginForm.value)\" #loginForm=\"ngForm\">                \n                            <div class=\"form-group\">\n                                <input class=\"form-control\"\n                                    placeholder=\"username\" \n                                    name=\"username\"                                    \n                                    required                         \n                                   \n                                   [(ngModel)]=\"user.username\"\n                                    />                                \n                            </div>\n                            <div class=\"form-group\">\n                                <input   class=\"form-control\"  placeholder=\"Password\"  name=\"password\"    required  minLength = \"6\"  [type]=\"showPass ? 'text': 'password'\"                \n                                    \n                                    [(ngModel)]=\"user.password\"\n                                                                      \n                                />\n                            </div>                            \n                          \n                            <button class=\"btn btn-primary btn-lg btn-block\"\n                                    type=\"submit\" value=\"Log In\"\n                                    [style.cursor]=\"cursorStyle\"\n                                    [disabled]=\"toolsDisadled\"><span class=\"fa fa-sign-in\"></span>Sign In</button>\n                        </form>\n                        <a class=\"panel-footer\"\n                            (click)=\"newUser()\"\n                            [style.pointer-events]=\"hrefDisadled ? 'none' : 'auto'\"><span class=\"fa fa-user-plus\"></span>Create Account</a>\n                    </div>\n                    <a (click)=\"resetPass()\"><span class=\"fa fa-unlock-alt\"></span>Reset Password</a>                \n                \n            </div>\n  </div>\n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [login_service_1.JoinUsService, router_1.Router])
    ], LoginLogin);
    return LoginLogin;
}());
exports.LoginLogin = LoginLogin;
//# sourceMappingURL=login-login-b4.js.map