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
var vos_1 = require("../models/vos");
var posts_edit_service_1 = require("../post-edit/posts-edit-service");
var PostsList = (function () {
    function PostsList(myService) {
        this.myService = myService;
        this.selected = new core_1.EventEmitter();
    }
    PostsList.prototype.ngOnInit = function () {
        this.allPosts = this.filtered = this.posts;
    };
    PostsList.prototype.onPostCardClick = function (item) {
        this.selected.emit(item);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PostsList.prototype, "posts", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOSearch)
    ], PostsList.prototype, "search", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PostsList.prototype, "selected", void 0);
    PostsList = __decorate([
        core_1.Component({
            selector: 'posts-list',
            template: "\n<div class=\"posts-list\">\n      <div *ngFor=\"let item of posts\">                \n            <posts-card (click)=\"onPostCardClick(item)\" [my_item]=\"item\"></posts-card>      \n      </div>\n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [posts_edit_service_1.PostEditService])
    ], PostsList);
    return PostsList;
}());
exports.PostsList = PostsList;
//# sourceMappingURL=posts-list.js.map