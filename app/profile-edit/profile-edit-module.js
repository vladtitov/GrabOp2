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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var profile_edit_main_1 = require("./profile-edit-main");
var shared_module_1 = require("../shared/shared-module");
var account_edit_module_1 = require("../forms/account-edit-module");
var ProfileEditUsername_1 = require("./ProfileEditUsername");
var profile_edit_company_1 = require("./profile-edit-company");
var profile_edit_personal_1 = require("./profile-edit-personal");
var profile_edit_assets_1 = require("./profile-edit-assets");
var login_service_1 = require("../join-us/login-service");
var myRoutes = [
    { path: '', component: profile_edit_main_1.ProfileEditMain,
        children: [
            { path: '', component: profile_edit_main_1.ProfileEditMain, redirectTo: 'personal' },
            { path: 'username', component: ProfileEditUsername_1.ProfileEditUsername },
            { path: 'company', component: profile_edit_company_1.ProfileEditCompany },
            { path: 'personal', component: profile_edit_personal_1.ProfileEditPersonal },
            { path: 'assets', component: profile_edit_assets_1.ProfileEditAssets }
        ]
    }
];
var ProfileEditModule = (function () {
    function ProfileEditModule() {
    }
    ProfileEditModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(myRoutes),
                shared_module_1.SharedModule,
                account_edit_module_1.default
            ],
            declarations: [
                profile_edit_main_1.ProfileEditMain,
                ProfileEditUsername_1.ProfileEditUsername,
                profile_edit_company_1.ProfileEditCompany,
                profile_edit_personal_1.ProfileEditPersonal,
                profile_edit_assets_1.ProfileEditAssets
            ],
            providers: [
                login_service_1.JoinUsService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileEditModule);
    return ProfileEditModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileEditModule;
//# sourceMappingURL=profile-edit-module.js.map