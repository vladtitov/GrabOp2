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
var OpportunitiesMain = (function () {
    function OpportunitiesMain(router, aroute) {
        this.router = router;
        this.aroute = aroute;
    }
    OpportunitiesMain.prototype.ngOnInit = function () {
        var _this = this;
        this.aroute.params.subscribe(function (params) {
            console.log(params);
            _this.topic = params['id'];
        });
    };
    OpportunitiesMain = __decorate([
        core_1.Component({
            template: "\n<div>\n        <h2>Opportunities Main</h2>\n         <nav>\n              <a routerLink=\"../panding\" routerLinkActive=\"menu-active\" >Panding</a>\n              <a routerLink=\"../active\" routerLinkActive=\"menu-active\" >Active</a>\n              <a routerLink=\"../complete\" routerLinkActive=\"menu-active\" >Complete</a>\n      </nav>\n      <div>\n        \n      </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], OpportunitiesMain);
    return OpportunitiesMain;
}());
exports.OpportunitiesMain = OpportunitiesMain;
//# sourceMappingURL=opportunities-main.js.map