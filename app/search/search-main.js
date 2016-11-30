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
 * Created by Vlad on 9/19/2016.
 */
var core_1 = require("@angular/core");
var vos_1 = require("../models/vos");
var router_1 = require("@angular/router");
var search_service_1 = require("./search-service");
var SearchMain = (function () {
    function SearchMain(route, postsService) {
        var _this = this;
        this.postsService = postsService;
        this.searchingPost = new vos_1.VOSearch({});
        route.params.subscribe(function (params) {
            if ('pattern' in params && params['pattern'] && params['pattern'] != "") {
                _this.searchingPost = new vos_1.VOSearch({ pattern: params['pattern'] });
                // this.searchingPost.pattern = params['pattern'];
                console.log('pattern main', _this.searchingPost);
            }
        });
    }
    SearchMain.prototype.onSearch = function (search) {
        this.searchingPost = search;
        // console.log('this.searchingPost', this.searchingPost);
    };
    SearchMain = __decorate([
        core_1.Component({
            template: "\n    <h2>Search Main</h2>\n    <div class=\"container\">\n        <div class=\"card-block\">\n            <div class=\"row\">\n                <div class=\"col-xs-4 br\">\n                    <form-search-advanced (search)=\"onSearch($event)\"></form-search-advanced>\n                </div>\n                <div class=\"col-xs-8\">\n                    <search-result  [search]=\"searchingPost\"></search-result>\n                </div>\n            </div>\n        </div>\n    </div>\n        \n ",
            styles: ["\n\n"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, search_service_1.SearchService])
    ], SearchMain);
    return SearchMain;
}());
exports.SearchMain = SearchMain;
//# sourceMappingURL=search-main.js.map