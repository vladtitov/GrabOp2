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
 * Created by Vlad on 9/6/2016.
 */
var core_1 = require("@angular/core");
var vos_1 = require("../models/vos");
var router_1 = require("@angular/router");
var ToolsSearch = (function () {
    function ToolsSearch(router) {
        this.router = router;
        this.search = new vos_1.VOSearch({});
    }
    ToolsSearch.prototype.onSearch = function () {
        this.router.navigate(['search', this.search.pattern]);
    };
    ToolsSearch = __decorate([
        core_1.Component({
            selector: 'tools-search',
            template: "\n<div>\n    <form class=\"form-inline\" #f=\"ngForm\" autocomplete=\"off\" novalidate>\n      <div class=\"form-group\">\n        <a class=\"fa fa-search\" (click)=\"onSearch()\"></a>\n        <!--<label for=\"searchInput\"><span class=\"fa fa-search\"></span></label>-->\n        <input [(ngModel)]=\"search.pattern\" (keyup.enter)=\"onSearch()\" name=\"pattern\" type=\"text\" class=\"form-control\" id=\"searchInput\" placeholder=\"search for services\">\n      </div>\n      <a class=\"btn btn-secondary\" [routerLink]=\"['/search']\"  routerLinkActive=\"active\">advanced</a>\n      <!--<button type=\"submit\" class=\"btn btn-primary\">advanced</button>-->\n    </form>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ToolsSearch);
    return ToolsSearch;
}());
exports.ToolsSearch = ToolsSearch;
//# sourceMappingURL=tools-search.js.map