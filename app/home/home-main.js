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
var HomeMain = (function () {
    function HomeMain() {
    }
    HomeMain = __decorate([
        core_1.Component({
            selector: 'home-main',
            template: "\n<div >\n            Home Main\n            <card-yours></card-yours>\n            <profile-complete></profile-complete>\n            <comments-home></comments-home>      \n            <home-statistics></home-statistics>\n            <they-need-you></they-need-you>\n            <you-need-them></you-need-them>\n            \n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], HomeMain);
    return HomeMain;
}());
exports.HomeMain = HomeMain;
//# sourceMappingURL=home-main.js.map