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
var common_1 = require("@angular/common");
var md_image_1 = require("./md-image");
var posts_edit_service_1 = require("../post-edit/posts-edit-service");
var posts_list_1 = require("./posts-list");
var posts_card_1 = require("./posts-card");
var members_list_1 = require("./members-list");
var list_row_1 = require("./list-row");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            exports: [
                md_image_1.MyMdImage,
                posts_list_1.PostsList,
                posts_card_1.PostsCard,
                members_list_1.MembersList,
                list_row_1.ListRow
            ],
            declarations: [
                md_image_1.MyMdImage,
                posts_list_1.PostsList,
                posts_card_1.PostsCard,
                members_list_1.MembersList,
                list_row_1.ListRow
            ],
            providers: [
                posts_edit_service_1.PostEditService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared-module.js.map