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
var login_service_1 = require("./login-service");
var JoinUsMain = (function () {
    function JoinUsMain(router, joinusService) {
        this.router = router;
        this.joinusService = joinusService;
        this.isVisible = true;
    }
    JoinUsMain.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.isIn = true; }, 100);
    };
    JoinUsMain.prototype.removeMe = function () {
        this.router.navigate(['./', { outlets: { important: null } }]);
    };
    JoinUsMain.prototype.hideMe = function () {
        var _this = this;
        this.isIn = false;
        setTimeout(function () { return _this.removeMe(); }, 600);
    };
    JoinUsMain.prototype.onCloseClick = function () {
        this.hideMe();
    };
    JoinUsMain = __decorate([
        core_1.Component({
            template: "\n<div id=\"JoinUsMain\" [class.in]=\"isIn\">\n     <div class=\"content\" >       \n         <div class=\"card\">    \n                <div class=\"card-block \">                      \n                           <a  (click)=\"onCloseClick()\" class=\"btn fa fa-close pull-right\"></a>                                                                    \n                                              \n                                      <router-outlet></router-outlet>           \n                           \n                       \n                 </div>\n          </div>    \n      </div>\n</div>\n "
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.JoinUsService])
    ], JoinUsMain);
    return JoinUsMain;
}());
exports.JoinUsMain = JoinUsMain;
//# sourceMappingURL=join-us-main.js.map