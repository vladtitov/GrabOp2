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
var ToolsPost = (function () {
    function ToolsPost() {
    }
    ToolsPost.prototype.ngOnInit = function () {
    };
    ToolsPost.prototype.onDocClick = function (evt) {
        if (this.isVisible)
            this.isVisible = false;
    };
    ToolsPost.prototype.onClick = function (evt) {
        var _this = this;
        if (!this.isVisible)
            setTimeout(function () { _this.isVisible = true; }, 50);
    };
    ToolsPost = __decorate([
        core_1.Component({
            selector: 'tools-post',
            template: "\n<div>\n    <a class=\"fa fa-plus-circle btn\" (click)=\"onClick()\" ></a>     \n                \n      <div *ngIf=\"isVisible\" class=\"drop-holder\">\n          <div class=\"drop-container\">\n            <div class=\"drop-items\">\n                <a  [routerLink]=\"['/post-edit/basic',{type:'need'}]\"   routerLinkActive=\"active\">Post need</a>\n                <a  [routerLink]=\"['/post-edit/basic',{type:'offer'}]\"   routerLinkActive=\"active\">Post Offer</a> \n            </div>               \n          </div>\n      </div>  \n              \n             \n</div>\n",
            host: {
                '(document:click)': 'onDocClick($event)',
            }
        }), 
        __metadata('design:paramtypes', [])
    ], ToolsPost);
    return ToolsPost;
}());
exports.ToolsPost = ToolsPost;
//# sourceMappingURL=tools-post.js.map