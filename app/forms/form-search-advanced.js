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
// import {PostEditService} from "../post-edit/posts-edit-service";
var search_service_1 = require("../search/search-service");
var FormSearchAdvanced = (function () {
    function FormSearchAdvanced(postsService) {
        this.postsService = postsService;
        // @Input() searchPost:VOSearch;
        this.search = new vos_1.VOSearch({});
        this.searchOut = new core_1.EventEmitter();
        // if('pattern' in this.searchPost){
        //     console.log('pattern search', this.searchPost);
        //     this.search.pattern = this.searchPost.pattern;
        // }
    }
    FormSearchAdvanced.prototype.onSearchClick = function () {
        var searchPOst = new vos_1.VOSearch({});
        for (var key in this.search) {
            if (this.search[key] !== "")
                searchPOst[key] = this.search[key];
        }
        this.postsService.searchPosts(searchPOst);
        console.log('search', searchPOst);
        // this.searchOut.emit(this.search);
    };
    __decorate([
        core_1.Output("search"), 
        __metadata('design:type', Object)
    ], FormSearchAdvanced.prototype, "searchOut", void 0);
    FormSearchAdvanced = __decorate([
        core_1.Component({
            selector: 'form-search-advanced',
            template: "\n<div>\n    <h3 class=\"text-muted text-xs-center\">Advanced search</h3>\n    <br>\n    <form  #f=\"ngForm\" autocomplete=\"off\" novalidate class=\"form-horizontal\"> <!-- (ngSubmit)=\"onSubmit(f)\" -->\n              <div class=\"form-group row\">                \n                <label class=\"col-sm-3 text-sm-right\">Search</label>\n                <input class=\"col-sm-8\" [(ngModel)]=\"search.pattern\" name=\"pattern\" />\n              </div>\n               <div class=\"form-group row\">                \n                <label class=\"col-sm-3 text-sm-right\">Country</label>\n                <input class=\"col-sm-8\" [(ngModel)]=\"search.country\" name=\"country\" />\n              </div>\n               <div class=\"form-group row\">                \n                <label class=\"col-sm-3 text-sm-right\">Province</label>\n                <input class=\"col-sm-8\" [(ngModel)]=\"search.province\" name=\"province\" />\n              </div>\n               <div class=\"form-group row\">                \n                <label class=\"col-sm-3 text-sm-right\">City</label>\n                <input class=\"col-sm-8\" [(ngModel)]=\"search.city\" name=\"city\" />\n              </div>\n          <br>\n              <h5>Business Style</h5>\n               <div class=\"form-group has-success\">                \n                    <label class=\"custom-control custom-checkbox offset-sm-3\">\n                        <input [(ngModel)]=\"search.partnership\" type=\"checkbox\" class=\"custom-control-input\" name=\"partnership\" />\n                        <span class=\"custom-control-indicator\"></span>\n                        <span class=\"custom-control-description\">Business Partnership</span>\n                    </label>\n               </div>\n               <div class=\"form-group has-warning\">                \n                    <label class=\"custom-control custom-checkbox offset-sm-3\">\n                        <input [(ngModel)]=\"search.exchange\"  type=\"checkbox\" class=\"custom-control-input\" name=\"exchange\" />\n                        <span class=\"custom-control-indicator\"></span>\n                        <span class=\"custom-control-description\">Exchange</span>\n                    </label>\n               </div>\n               <div class=\"form-group has-danger\">                \n                    <label class=\"custom-control custom-checkbox offset-sm-3\">\n                        <input [(ngModel)]=\"search.donate\" class=\"custom-control-input\" type=\"checkbox\" name =\"donate\" />\n                        <span class=\"custom-control-indicator\"></span>\n                        <span class=\"custom-control-description\">Donate</span>\n                    </label>\n              </div>\n               <div class=\"form-group has-warning\">                \n                    <label class=\"custom-control custom-checkbox offset-sm-3\">\n                        <input [(ngModel)]=\"search.internship\" class=\"custom-control-input\" type=\"checkbox\"  name=\"internship\" />\n                        <span class=\"custom-control-indicator\"></span>\n                        <span class=\"custom-control-description\">Internship</span>\n                    </label>\n              </div>  \n              <div class=\"form-group has-danger\">\n                    <label class=\"custom-control custom-checkbox offset-sm-3\">\n                        <input [(ngModel)]=\"search.money\" class=\"custom-control-input\" type=\"checkbox\"  name=\"money\" />\n                        <span class=\"custom-control-indicator\"></span>\n                        <span class=\"custom-control-description\">Money</span>\n                    </label>\n              </div>\n              \n          \n              <div class=\"form-group form-inline row\">                \n                <label class=\"col-sm-4 text-sm-right pl-pr-0\"><span class=\"text-warning\">Fixed </span>$</label>\n                <input class=\"col-sm-3\" [(ngModel)]=\"search.fixedFrom\" name=\"fixedFrom\" /> \n                <label class=\"col-sm-1\">to</label>  \n                <input class=\"col-sm-3\" [(ngModel)]=\"search.fixedTo\" name=\"fixedTo\" />\n              </div>\n              \n              <div class=\"form-group row\">                \n                <label class=\"col-sm-4 text-sm-right pl-pr-0\"><span class=\"text-warning\">Hourly </span>$</label>\n                <input class=\"col-sm-3\" [(ngModel)]=\"search.hourlyFrom\" name=\"hourlyFrom\" />\n                <label class=\"col-sm-1\">to</label>\n                <input class=\"col-sm-3\" [(ngModel)]=\"search.hourlyTo\" name=\"hourlyTo\" />\n              </div>\n              \n               <div class=\"form-group row\">                \n                <label class=\"col-sm-4 text-sm-right pl-pr-0\"><span class=\"text-warning\">Commission </span>%</label>\n                <input class=\"col-sm-3\" [(ngModel)]=\"search.commissionFrom\" name=\"commissionFrom\" />\n                <label class=\"col-sm-1\">to</label>\n                <input class=\"col-sm-3\" [(ngModel)]=\"search.commissionTo\" name=\"commissionTo\" />\n              </div>\n          <!--<button class=\"btn btn-primary btn-lg btn-block\">search</button>-->\n          <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"onSearchClick()\">search</button>\n    </form>\n    <div class=\"debug\">\n        <h6>Form Value:</h6>\n        {{ f.value | json }}\n    </div>\n</div>   \n ",
            styles: ["\n        .pl-pr-0{\n            padding-left: 0;\n            padding-right: 0;\n        }\n"]
        }), 
        __metadata('design:paramtypes', [search_service_1.SearchService])
    ], FormSearchAdvanced);
    return FormSearchAdvanced;
}());
exports.FormSearchAdvanced = FormSearchAdvanced;
//# sourceMappingURL=form-search-advanced.js.map