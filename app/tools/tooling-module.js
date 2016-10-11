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
var tooling_main_1 = require("./tooling-main");
var tools_explore_1 = require("./tools-explore");
var tools_help_1 = require("./tools-help");
var tools_menu_1 = require("./tools-menu");
var tools_notifications_1 = require("./tools-notifications");
var tools_personal_1 = require("./tools-personal");
var tools_search_1 = require("./tools-search");
var tools_post_1 = require("./tools-post");
var shared_module_1 = require("../shared/shared-module");
var common_1 = require("@angular/common");
var tools_service_1 = require("./tools-service");
var router_1 = require("@angular/router");
var ToolingModule = (function () {
    function ToolingModule() {
    }
    ToolingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                router_1.RouterModule
            ],
            exports: [
                tooling_main_1.ToolingMain
            ],
            declarations: [
                tooling_main_1.ToolingMain,
                tools_explore_1.ToolsExplore,
                tools_help_1.ToolsHelp,
                tools_menu_1.ToolsMenu,
                tools_notifications_1.ToolsNotifications,
                tools_personal_1.ToolsPersonal,
                tools_search_1.ToolsSearch,
                tools_post_1.ToolsPost
            ],
            providers: [tools_service_1.ToolsService]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolingModule);
    return ToolingModule;
}());
exports.ToolingModule = ToolingModule;
//# sourceMappingURL=tooling-module.js.map