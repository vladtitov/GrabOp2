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
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/shared-module");
var opportunities_main_1 = require("./opportunities-main");
var myRoutes = [
    { path: ':id', component: opportunities_main_1.OpportunitiesMain },
    { path: '', component: opportunities_main_1.OpportunitiesMain, pathMatch: 'full', redirectTo: '/opportunities/pending' }
];
var OpportunitiesModule = (function () {
    function OpportunitiesModule() {
    }
    OpportunitiesModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(myRoutes),
                shared_module_1.SharedModule
            ],
            declarations: [
                opportunities_main_1.OpportunitiesMain
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], OpportunitiesModule);
    return OpportunitiesModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OpportunitiesModule;
//# sourceMappingURL=opportunities-module.js.map