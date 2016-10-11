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
 * Created by Vlad on 9/16/2016.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AlliancesMain = (function () {
    function AlliancesMain(router, aroute) {
        this.router = router;
        this.aroute = aroute;
    }
    AlliancesMain.prototype.ngOnInit = function () {
        var _this = this;
        this.sub1 = this.aroute.params.subscribe(function (params) {
            console.log(params);
            _this.topic = params['id'];
        });
    };
    AlliancesMain.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
    };
    AlliancesMain = __decorate([
        core_1.Component({
            template: "\n<div>\n        <h2>Alliances Main</h2>\n        <nav>\n              <a routerLink=\"../sent\" routerLinkActive=\"menu-active\" >Sent Requests</a>\n              <a routerLink=\"../received\" routerLinkActive=\"menu-active\" >Received Requests</a>\n              <a routerLink=\"../confirmed\" routerLinkActive=\"menu-active\" >Confirmed</a>\n      </nav>\n      <div>\n        \n      </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], AlliancesMain);
    return AlliancesMain;
}());
exports.AlliancesMain = AlliancesMain;
//# sourceMappingURL=alliances-main.js.map