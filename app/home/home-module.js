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
var router_1 = require("@angular/router");
var card_yours_1 = require("./card-yours");
var coments_home_1 = require("./coments-home");
var home_header_1 = require("./home-header");
var home_statistics_1 = require("./home-statistics");
var profile_complete_1 = require("./profile-complete");
var they_need_you_1 = require("./they-need-you");
var you_need_them_1 = require("./you-need-them");
var home_main_1 = require("./home-main");
var shared_module_1 = require("../shared/shared-module");
var myRoutes = [
    { path: '', component: home_main_1.HomeMain },
];
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(myRoutes),
                shared_module_1.SharedModule
            ],
            declarations: [
                home_main_1.HomeMain,
                card_yours_1.CardYours,
                coments_home_1.CommentsHome,
                home_header_1.HomeHeader,
                home_statistics_1.HomeStatistics,
                profile_complete_1.ProfileComplete,
                they_need_you_1.TheyNeedYou,
                you_need_them_1.YouNeedThem
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeModule;
//# sourceMappingURL=home-module.js.map