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
 * Created by Vlad on 9/6/2016.
 */
/**
 * Created by Vlad on 9/6/2016.
 */
var core_1 = require("@angular/core");
var vos_1 = require("../models/vos");
var posts_edit_service_1 = require("../post-edit/posts-edit-service");
var user_service_1 = require("../myservices/user-service");
var TheyNeedYou = (function () {
    function TheyNeedYou(postsService, userService) {
        this.postsService = postsService;
        this.userService = userService;
        this.user = new vos_1.VOUserExt({});
    }
    TheyNeedYou.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user$.subscribe(function (user) {
            _this.user = user;
        });
        this.postsService.getPosts().subscribe(function (posts) {
            _this.need = posts.filter(function (item) { return item.type == 'need'; });
            _this.user.needs = _this.need.length;
        });
    };
    TheyNeedYou = __decorate([
        core_1.Component({
            selector: 'they-need-you',
            template: "\n<div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5>They need You</h5>\n                <posts-list [posts]=\"need\"></posts-list>\n            </div>\n        </div>            \n</div>\n"
        }), 
        __metadata('design:paramtypes', [posts_edit_service_1.PostEditService, user_service_1.UserService])
    ], TheyNeedYou);
    return TheyNeedYou;
}());
exports.TheyNeedYou = TheyNeedYou;
//# sourceMappingURL=they-need-you.js.map