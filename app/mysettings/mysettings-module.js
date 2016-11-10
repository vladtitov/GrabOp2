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
var common_1 = require("@angular/common");
var forms_1 = require('@angular/forms');
var router_1 = require("@angular/router");
var mysettings_main_1 = require("./mysettings-main");
var notifications_1 = require("./notifications");
var change_pass_1 = require("./change-pass");
var privacy_settings_1 = require("./privacy-settings");
var update_account_1 = require("./update-account");
var shared_module_1 = require("../shared/shared-module");
var user_service_1 = require("../myservices/user-service");
var login_service_1 = require("../join-us/login-service");
var myRoutes = [
    { path: '', component: mysettings_main_1.MySettingsMain }
];
var MySettingsModule = (function () {
    function MySettingsModule() {
    }
    MySettingsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(myRoutes),
                shared_module_1.SharedModule
            ],
            declarations: [
                mysettings_main_1.MySettingsMain,
                notifications_1.Notifications,
                change_pass_1.ChangePass,
                privacy_settings_1.PrivacySettings,
                update_account_1.UpdateAccount
            ],
            providers: [
                user_service_1.UserService,
                login_service_1.JoinUsService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MySettingsModule);
    return MySettingsModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MySettingsModule;
//# sourceMappingURL=mysettings-module.js.map