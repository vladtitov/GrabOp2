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
var CommentsHome = (function () {
    function CommentsHome() {
    }
    CommentsHome = __decorate([
        core_1.Component({
            selector: 'comments-home',
            template: "\n<div >\n            <h3>GrabOp thought of the day</h3>\n            <p></p>\n            <div>\n                <span></span> Comments <a class=\"btn btn-primary\" tabindex=\"9\">comment</a> <a tabindex=\"10\" class=\"btn btn-primary\">share</a>\n            \n            </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], CommentsHome);
    return CommentsHome;
}());
exports.CommentsHome = CommentsHome;
//# sourceMappingURL=coments-home.js.map