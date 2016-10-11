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
var LandMain = (function () {
    function LandMain() {
    }
    LandMain = __decorate([
        core_1.Component({
            template: "\n<div class=\"container\">\n      <h1>Landing page</h1>\n      <land-header></land-header>\n      <land-cool></land-cool>\n      <land-ads></land-ads>\n      <land-footer></land-footer>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], LandMain);
    return LandMain;
}());
exports.LandMain = LandMain;
//# sourceMappingURL=land-main.js.map