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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var join_us_username_1 = require("./join-us-username");
var join_us_company_1 = require("./join-us-company");
var join_us_main_1 = require("./join-us-main");
var join_personal_1 = require("./join-personal");
var router_1 = require("@angular/router");
var join_us_assets_1 = require("./join-us-assets");
var account_edit_module_1 = require("../forms/account-edit-module");
var login_service_1 = require("./login-service");
var joinusRoutes = [
    {
        path: 'join-us', component: join_us_main_1.JoinUsMain, outlet: 'important',
        children: [
            { path: '', component: join_us_main_1.JoinUsMain, redirectTo: 'username' },
            { path: 'username', component: join_us_username_1.JoinUsUsername },
            { path: 'company', component: join_us_company_1.JoinUsCompany },
            { path: 'personal', component: join_personal_1.JoinUsPersonal },
            { path: 'assets', component: join_us_assets_1.JoinUsAssets }
        ]
    }
];
var JoinUsModule = (function () {
    function JoinUsModule() {
    }
    JoinUsModule = __decorate([
        core_1.NgModule({
            exports: [
                join_us_main_1.JoinUsMain
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                account_edit_module_1.default,
                router_1.RouterModule.forChild(joinusRoutes)
            ],
            declarations: [
                join_us_main_1.JoinUsMain,
                join_us_username_1.JoinUsUsername,
                join_us_company_1.JoinUsCompany,
                join_us_assets_1.JoinUsAssets,
                join_personal_1.JoinUsPersonal
            ],
            providers: [
                login_service_1.JoinUsService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], JoinUsModule);
    return JoinUsModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = JoinUsModule;
//# sourceMappingURL=join-us-module.js.map