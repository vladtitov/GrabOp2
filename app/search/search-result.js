"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
 * Created by Vlad on 9/19/2016.
 */
var core_1 = require("@angular/core");
var posts_edit_service_1 = require("../post-edit/posts-edit-service");
var SearchResult = (function (_super) {
    __extends(SearchResult, _super);
    function SearchResult(postsService) {
        var _this = this;
        _super.call(this);
        this.postsService = postsService;
        this.postsService.getAllPosts().subscribe(function (posts) {
            _this.need = posts.filter(function (item) { return item.type == 'need'; });
            _this.offer = posts.filter(function (item) { return item.type == 'offer'; });
            _this.numberPosts = posts.length;
            _this.numberNeeds = _this.need.length;
            _this.numberOffers = _this.offer.length;
            console.log(posts);
        });
    }
    SearchResult.prototype.ngOnInit = function () {
        this.onOfferings = true;
    };
    SearchResult.prototype.onOfferingsClick = function () {
        this.onOfferings = true;
        this.onNeeds = false;
        this.onPeople = false;
    };
    SearchResult.prototype.onNeedsClick = function () {
        this.onOfferings = false;
        this.onNeeds = true;
        this.onPeople = false;
    };
    SearchResult.prototype.onPeopleClick = function () {
        this.onOfferings = false;
        this.onNeeds = false;
        this.onPeople = true;
    };
    SearchResult = __decorate([
        core_1.Component({
            selector: 'search-result',
            template: "\n    <h5>Results: {{numberPosts}}</h5>\n    <br>\n    <div class=\"card text-xs-center\">\n          <div class=\"card-header\">\n            <ul class=\"nav nav-tabs card-header-tabs float-xs-left\">\n              <li class=\"nav-item\">\n                <!--<a class=\"nav-link\" routerLink=\"/profile-edit/personal\" routerLinkActive=\"active\">Offerings</a>-->\n                <a class=\"nav-link\" [class.active]=\"onOfferings\" (click)=\"onOfferingsClick()\">\n                    <span class=\"text-muted\">Offerings </span><span class=\"text-primary\">({{numberOffers}})</span>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <!--<a class=\"nav-link\" routerLink=\"/profile-edit/company\" routerLinkActive=\"active\">Needs</a>-->\n                <a class=\"nav-link\" [class.active]=\"onNeeds\" (click)=\"onNeedsClick()\">\n                    <span class=\"text-muted\">Needs </span><span class=\"text-primary\">({{numberNeeds}})</span>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <!--<a class=\"nav-link\" routerLink=\"/profile-edit/assets\" routerLinkActive=\"active\">People</a>-->\n                <a class=\"nav-link\" [class.active]=\"onPeople\" (click)=\"onPeopleClick()\">People</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"card-block\">\n          <div *ngIf=\"myMsg\">{{myMsg}}</div>\n            <posts-list *ngIf=\"onOfferings\" [posts]=\"offer\" (selected)=\"onPostSelect($event)\"></posts-list>\n            <posts-list *ngIf=\"onNeeds\" [posts]=\"need\" (selected)=\"onPostSelect($event)\"></posts-list>\n            <posts-list *ngIf=\"onPeople\" [posts]=\"people\" (selected)=\"onPostSelect($event)\"></posts-list>\n            <!--<h4 class=\"card-title\">Special title treatment</h4>-->\n            <!--<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>-->\n            <!--<a href=\"#\" class=\"btn btn-primary\">update</a>-->\n          <!--</div>-->\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n "
        }), 
        __metadata('design:paramtypes', [posts_edit_service_1.PostEditService])
    ], SearchResult);
    return SearchResult;
}(core_1.OnInit));
exports.SearchResult = SearchResult;
//# sourceMappingURL=search-result.js.map