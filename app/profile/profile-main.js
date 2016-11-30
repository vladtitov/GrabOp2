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
 * Created by Vlad on 9/9/2016.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../myservices/user-service");
var posts_edit_service_1 = require("../post-edit/posts-edit-service");
var ProfileMain = (function () {
    function ProfileMain(aroute, router, userService, postsService) {
        this.aroute = aroute;
        this.router = router;
        this.userService = userService;
        this.postsService = postsService;
    }
    ProfileMain.prototype.onPostEditClick = function () {
        if (this.selectedPost) {
            this.router.navigate(['post-edit/' + this.selectedPost.id + '/basic']);
        }
    };
    ProfileMain.prototype.onPostSelect = function (item) {
        if (this.selectedPost)
            this.selectedPost.selected = false;
        item.selected = true;
        this.selectedPost = item;
    };
    ProfileMain.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user$.subscribe(function (user) { return _this.user = user; });
        this.aroute.params.subscribe(function (params) {
            var id = +params['id'];
            if (isNaN(id))
                return;
            // this.currentServiceId = id;
            /* this.myService.myAccount$.subscribe((profile)=>{
             console.log(profile);
             })*/
        });
        this.loadServices();
    };
    ProfileMain.prototype.loadServices = function () {
        var _this = this;
        console.log('load services');
        this.postsService.getPosts().subscribe(function (posts) {
            _this.need = posts.filter(function (item) {
                return item.type == 'need';
            });
            _this.offer = posts.filter(function (item) {
                return item.type == 'offer';
            });
            console.log(posts);
        });
    };
    ProfileMain = __decorate([
        core_1.Component({
            template: "\n<div class=\"profile-main\">\n      <h1>Profile Main</h1>\n      <profile-header [user]=\"user\"></profile-header>\n      <profile-title  [user]=\"user\"></profile-title>\n      <profile-connections [user]=\"user\" ></profile-connections>\n      <profile-media  [user]=\"user\" ></profile-media>\n      <profile-skills  [user]=\"user\"></profile-skills>\n           \n           <button class=\"btn btn-primary\" (click)=\"onPostEditClick()\">Edit post</button>\n       <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5>Need</h5>\n                <posts-list [posts]=\"need\" (selected)=\"onPostSelect($event)\"></posts-list>\n            </div>\n       </div>\n       <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5>Offer</h5>\n                <posts-list [posts]=\"offer\" (selected)=\"onPostSelect($event)\" ></posts-list>\n            </div>\n       </div>\n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, user_service_1.UserService, posts_edit_service_1.PostEditService])
    ], ProfileMain);
    return ProfileMain;
}());
exports.ProfileMain = ProfileMain;
//# sourceMappingURL=profile-main.js.map