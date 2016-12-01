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
var app_component_1 = require('./app.component');
var tooling_module_1 = require("./tools/tooling-module");
var land_main_1 = require("./landing/land-main");
var nav_main_1 = require("./nav/nav-main");
var nav_service_1 = require("./nav/nav-service");
var login_login_1 = require("./login/login-login");
var user_service_1 = require("./myservices/user-service");
var shared_module_1 = require("./shared/shared-module");
var router_1 = require("@angular/router");
var land_module_1 = require("./landing/land-module");
var to_login_1 = require("./login/to-login");
var how_it_works_1 = require("./pages/how-it-works");
var terms_of_use_1 = require("./pages/terms-of-use");
var contact_us_1 = require("./pages/contact-us");
var help_1 = require("./pages/help");
var search_module_1 = require("./search/search-module");
var search_main_1 = require("./search/search-main");
var upload_service_1 = require("./myservices/upload-service");
var my_settings_1 = require("./mysettings/my-settings");
// import {MySettingsModule} from "./mysettings/mysettings-module";
var indexRoute = { path: '', component: land_main_1.LandMain };
var fallBackRoute = { path: '**', component: land_main_1.LandMain };
exports.routeConfig = [
    { path: 'landing', component: land_main_1.LandMain },
    { path: 'login', component: to_login_1.ToLogin },
    { path: 'sign-in', component: login_login_1.LoginLogin, outlet: 'important' },
    { path: 'home', loadChildren: 'app/home/home-module' },
    { path: 'messages', loadChildren: 'app/messages/messages-module' },
    { path: 'connections', loadChildren: 'app/connections/connections-module' },
    { path: 'opportunities', loadChildren: 'app/opportunities/opportunities-module' },
    { path: 'projects', loadChildren: 'app/projects/projects-module' },
    { path: 'alliances', loadChildren: 'app/alliances/alliances-module' },
    { path: 'settings', loadChildren: 'app/mysettings/mysettings-module' },
    { path: 'how-it-works', component: how_it_works_1.HowItWorks },
    { path: 'terms-of-use', component: terms_of_use_1.TermsOfUse },
    { path: 'help', component: help_1.Help },
    { path: 'search', component: search_main_1.SearchMain },
    { path: 'contact-us', component: contact_us_1.ContactUs },
    { path: 'profile', loadChildren: 'app/profile/profile-module' },
    { path: 'profile-edit', loadChildren: 'app/profile-edit/profile-edit-module' },
    { path: 'post-edit', loadChildren: 'app/post-edit/post-edit-module#PostEditModule' },
    indexRoute
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(exports.routeConfig),
                forms_1.FormsModule,
                tooling_module_1.ToolingModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                shared_module_1.SharedModule,
                land_module_1.LandModule,
                search_module_1.default
            ],
            declarations: [
                app_component_1.AppComponent,
                nav_main_1.NavMain,
                login_login_1.LoginLogin,
                to_login_1.ToLogin,
                how_it_works_1.HowItWorks,
                terms_of_use_1.TermsOfUse,
                contact_us_1.ContactUs,
                help_1.Help,
                my_settings_1.MySettings
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                ,
                nav_service_1.NavService,
                user_service_1.UserService,
                upload_service_1.UploadService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map