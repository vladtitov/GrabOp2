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
var core_1 = require('@angular/core');
require('./rxjs-operators');
var router_1 = require("@angular/router");
var GuestComponent = (function () {
    function GuestComponent(router, aroute) {
        this.router = router;
        this.aroute = aroute;
        console.log('Guest');
    }
    GuestComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<div> \n<div  id=\"Navigation\">\n<nav-main></nav-main>\n</div>\n    <nav>    \n      <a [routerLink]=\"[{outlets:{ important: ['join-us'] } }]\" routerLinkActive=\"menu-active\" [routerLinkActiveOptions]=\"{ exact: true }\">Join US</a>\n      <!--<a routerLink=\"/join-us/username\" routerLinkActive=\"menu-active\">JOIN US 2</a> -->\n      <a  [routerLink]=\"[{outlets:{ important: ['sign-in'] } }]\" routerLinkActive=\"menu-active\" >Login</a>\n    </nav>    \n   \n    <div id=\"MyMainOutlet\">\n     <router-outlet></router-outlet> \n    </div>     \n      <div class=\"my-outlet\">\n          <router-outlet name=\"important\"></router-outlet> \n      </div>     \n      \n</div>\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], GuestComponent);
    return GuestComponent;
}());
exports.GuestComponent = GuestComponent;
//# sourceMappingURL=guest-component.js.map