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
var PostsCard = (function () {
    // size:number= 128;
    function PostsCard() {
        this.urlIMG = 'img/pic05-300x195.jpg';
        this.imgURL = 'url(img/ingeniero.jpg)';
        // imgURL = 'url(img/img-girl.jpg)';
        this.size = 256;
    }
    PostsCard.prototype.ngOnInit = function () {
    };
    PostsCard.prototype.loadServices = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOService)
    ], PostsCard.prototype, "my_item", void 0);
    PostsCard = __decorate([
        core_1.Component({
            selector: 'posts-card',
            template: "\n<div class=\"posts-card text-xs-center\"> \n        <div class=\"card-{{size}}\">\n            <div class=\"thumb-{{size}}\" [class.selected]=\"my_item.selected\">\n                <div class=\"image-container-{{size}}\">\n                    <img class=\"image-{{size}}\" src=\"{{urlIMG}}\" />\n                    <div class=\"num s40x40 round\"><span>{{my_item.id}}</span></div>\n                    <div [userClass]=\"'accountIMG'\" [my-md-image]=\"imgURL\" [size]=\"'70x70'\"> </div>\n                </div>\n                <div class=\"info pos-bottom\">\n                    <div class=\"deviceText-{{size}}\">\n                        <span>{{my_item.title}}</span>\n                    </div>\n                    <!--<div class=\"row\">-->\n                        <div class=\"col-sm-7\">\n                            <table style=\"height: 102px;\">\n                              <tbody>\n                                <tr>\n                                    <td class=\"align-middle\">\n                                        <span>{{my_item.city}}, </span>\n                                        <span>{{my_item.province}}</span>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td class=\"align-bottom\">\n                                        <i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-users\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-tag fa-flip-horizontal\" aria-hidden=\"true\"></i>\n                                    </td>\n                                </tr>\n                              </tbody>\n                            </table>\n                        </div>\n                        <div class=\"col-sm-5 bl\" style=\"line-height: 1.1;\">\n                            <div class=\"row\"><div class=\"col-sm-12\"><span class=\"pull-right\">comm</span></div></div>\n                            <div class=\"row\"><div class=\"col-sm-12 text-warning\"><span class=\"pull-right\">{{my_item.commission}}</span></div></div>\n                            <div class=\"row\"><div class=\"col-sm-12\"><span class=\"pull-right\">fixed rate</span></div></div>\n                            <div class=\"row\"><div class=\"col-sm-12 text-warning\"><span class=\"pull-right\"><span>$</span>{{my_item.fixed}}</span></div></div>\n                            <div class=\"row\"><div class=\"col-sm-12\"><span class=\"pull-right\">hourly rate</span></div></div>\n                            <div class=\"row\"><div class=\"col-sm-12 text-warning\"><span class=\"pull-right\"><span>$</span>{{my_item.hourlyRate}}</span></div></div>\n                        </div>\n                    <!--</div>-->\n                </div>\n            </div>\n        </div>\n        \n        <!--<div class=\"card-{{size}}\">\n            <div class=\"thumb-{{size}}\">\n                <div class=\"image-container-{{size}}\">\n                        <img class=\"image-{{size}}\" src=\"{{my_item.image}}\" />\n                </div>\n                <div class=\"myid\"><span>{{my_item.id}}</span></div>\n                <div class=\"info pos-bottom\">\n                    <div class=\"deviceText-{{size}}\"><span>{{my_item.title}}</span></div>\n                </div>\n            </div>\n        </div>-->\n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], PostsCard);
    return PostsCard;
}());
exports.PostsCard = PostsCard;
//# sourceMappingURL=posts-card.js.map