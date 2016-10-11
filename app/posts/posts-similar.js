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
 * Created by Vlad on 9/10/2016.
 */
var core_1 = require("@angular/core");
var vos_1 = require("../models/vos");
var PostsSimilar = (function () {
    function PostsSimilar() {
        this.size = 256;
    }
    PostsSimilar.prototype.ngOnInit = function () {
    };
    PostsSimilar.prototype.loadServices = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOService)
    ], PostsSimilar.prototype, "my_item", void 0);
    PostsSimilar = __decorate([
        core_1.Component({
            selector: 'posts-similar',
            template: "\n<div class=\"posts-card\">     \n      <div class=\"card-{{size}}\">\n                <div class=\"thumb-{{size}}\" [class.selected]=\"my_item.selected\">\n                    <div class=\"image-container-{{size}}\">\n                            <img class=\"image-{{size}}\" src=\"{{my_item.image}}\" />\n                    </div>\n                    <div class=\"myid\"><span>{{my_item.id}}</span></div>\n                    <div class=\"info pos-bottom\">\n                        <div class=\"deviceText-{{size}}\"><span>{{my_item.title}}</span></div>\n                    </div>\n                </div>\n            </div>\n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], PostsSimilar);
    return PostsSimilar;
}());
exports.PostsSimilar = PostsSimilar;
//# sourceMappingURL=posts-similar.js.map