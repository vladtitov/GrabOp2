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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var profile_main_1 = require("./profile-main");
var profile_header_1 = require("./profile-header");
var profile_skils_1 = require("./profile-skils");
var profile_connections_1 = require("./profile-connections");
var profile_title_1 = require("./profile-title");
var profile_media_1 = require("./profile-media");
var shared_module_1 = require("../shared/shared-module");
var myRoutes = [
    { path: '', component: profile_main_1.ProfileMain }
];
var ProfileModule = (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(myRoutes),
                shared_module_1.SharedModule
            ],
            declarations: [
                profile_main_1.ProfileMain,
                profile_header_1.ProfileHeader,
                profile_skils_1.ProfileSkills,
                profile_connections_1.ProfileConnections,
                profile_title_1.ProfileTitle,
                profile_media_1.ProfileMedia
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileModule);
    return ProfileModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileModule;
//# sourceMappingURL=profile-module.js.map