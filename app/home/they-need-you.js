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
/**
 * Created by Vlad on 9/6/2016.
 */
var core_1 = require("@angular/core");
var TheyNeedYou = (function () {
    function TheyNeedYou() {
    }
    TheyNeedYou = __decorate([
        core_1.Component({
            selector: 'they-need-you',
            template: "\n<div >\n            They need You\n            <posts-list></posts-list>\n            \n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], TheyNeedYou);
    return TheyNeedYou;
}());
exports.TheyNeedYou = TheyNeedYou;
//# sourceMappingURL=they-need-you.js.map