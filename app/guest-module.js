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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var land_main_1 = require("./landing/land-main");
var nav_main_1 = require("./nav/nav-main");
var nav_service_1 = require("./nav/nav-service");
var login_login_1 = require("./login/login-login");
var user_service_1 = require("./myservices/user-service");
var shared_module_1 = require("./shared/shared-module");
var router_1 = require("@angular/router");
var land_module_1 = require("./landing/land-module");
var to_login_1 = require("./login/to-login");
var my_settings_1 = require("./mysettings/my-settings");
var how_it_works_1 = require("./pages/how-it-works");
var terms_of_use_1 = require("./pages/terms-of-use");
var contact_us_1 = require("./pages/contact-us");
var help_1 = require("./pages/help");
var search_module_1 = require("./search/search-module");
var upload_service_1 = require("./myservices/upload-service");
var guest_component_1 = require("./guest-component");
var join_us_module_1 = require("./join-us/join-us-module");
var join_us_main_1 = require("./join-us/join-us-main");
var indexRoute = { path: '', component: land_main_1.LandMain };
var fallBackRoute = { path: '**', component: land_main_1.LandMain };
exports.routeConfig = [
    { path: 'landing', component: land_main_1.LandMain },
    { path: 'login', component: login_login_1.LoginLogin, outlet: 'important' },
    { path: 'join-us', component: join_us_main_1.JoinUsMain, outlet: 'important' },
    { path: 'join-us', component: join_us_main_1.JoinUsMain },
    indexRoute,
    fallBackRoute
];
var GuestModule = (function () {
    function GuestModule() {
    }
    GuestModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(exports.routeConfig),
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                shared_module_1.SharedModule,
                land_module_1.LandModule,
                search_module_1.default,
                join_us_module_1.default
            ],
            declarations: [
                guest_component_1.GuestComponent,
                nav_main_1.NavMain,
                login_login_1.LoginLogin,
                to_login_1.ToLogin,
                my_settings_1.MySettings,
                how_it_works_1.HowItWorks,
                terms_of_use_1.TermsOfUse,
                help_1.Help,
                contact_us_1.ContactUs
            ],
            bootstrap: [guest_component_1.GuestComponent],
            providers: [
                ,
                nav_service_1.NavService,
                user_service_1.UserService,
                upload_service_1.UploadService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GuestModule);
    return GuestModule;
}());
exports.GuestModule = GuestModule;
//# sourceMappingURL=guest-module.js.map