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
var shared_module_1 = require("../shared/shared-module");
var post_edit_main_1 = require("./post-edit-main");
var post_edit_media_1 = require("./post-edit-media");
var post_edit_alliance_1 = require("./post-edit-alliance");
var post_edit_basic_1 = require("./post-edit-basic");
var post_edit_tools_1 = require("./post-edit-tools");
var post_edit_style_1 = require("./post-edit-style");
var posteditRoutes = [
    { path: ':step', component: post_edit_main_1.PostEditMain },
    { path: ':id/:step', component: post_edit_main_1.PostEditMain },
    { path: '', component: post_edit_main_1.PostEditMain, redirectTo: 'basic' }
];
var PostEditModule = (function () {
    function PostEditModule() {
    }
    PostEditModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(posteditRoutes)
            ],
            declarations: [
                post_edit_main_1.PostEditMain,
                post_edit_media_1.PostEditMedia,
                post_edit_alliance_1.PostEditAlliance,
                post_edit_basic_1.PostEditBasic,
                post_edit_tools_1.PostEditTools,
                post_edit_style_1.PostEditStyle
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], PostEditModule);
    return PostEditModule;
}());
exports.PostEditModule = PostEditModule;
//# sourceMappingURL=post-edit-module.js.map