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
var nav_service_1 = require("./nav-service");
var router_1 = require("@angular/router");
var NavMain = (function () {
    function NavMain(navSevice, router, changes) {
        this.navSevice = navSevice;
        this.router = router;
        this.changes = changes;
        this.isOpen = false;
    }
    NavMain.prototype.onCloseClick = function () {
        this.navSevice.hideMenu();
    };
    NavMain.prototype.ngOnInit = function () {
        var _this = this;
        this.navSevice.change.subscribe(function (res) {
            _this.isOpen = res.visible;
        });
        this.navSevice.getNavigationP().then(function (res) {
            _this.navigation = res.list;
            _this.myStyle = res.css;
        }, function (err) { return _this.onError(err); });
    };
    NavMain.prototype.onError = function (err) {
        console.error('NavMain', err);
    };
    NavMain = __decorate([
        core_1.Component({
            selector: 'nav-main',
            template: "\n    <nav [ngStyle]=\"myStyle\" [class.open]=\"isOpen\">\n    <span class=\"pull-right fa fa-close\" (click)=\"onCloseClick()\"></span>\n        Nav Main\n        \n      <ul>\n        <li *ngFor=\"let mynav of navigation\">\n        <a routerLinkActive=\"menu-active\" routerLink=\"{{mynav.href}}\">{{mynav.label}}</a>        \n        </li>    \n      </ul>   \n    </nav>\n",
            providers: []
        }), 
        __metadata('design:paramtypes', [nav_service_1.NavService, router_1.Router, core_1.ChangeDetectorRef])
    ], NavMain);
    return NavMain;
}());
exports.NavMain = NavMain;
//# sourceMappingURL=nav-main.js.map