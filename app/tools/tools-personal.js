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
var core_1 = require("@angular/core");
var user_service_1 = require("../myservices/user-service");
var ToolsPersonal = (function () {
    function ToolsPersonal(userService) {
        this.userService = userService;
        // myImage:string = 'url(img/img-girl.jpg)';
        this.myImage = '';
        this.name = '';
    }
    ToolsPersonal.prototype.ngOnInit = function () {
        var _this = this;
        //  this.profileService.myAccount$.subscribe(profile=>this.myImage = profile.profile_pic);
        this.userService.user$.subscribe(function (user) {
            _this.user = user;
            _this.myImage = 'url(' + _this.user.profile_pic + ')';
            _this.name = user.firstName + ' ' + user.lastName;
        });
    };
    ToolsPersonal = __decorate([
        core_1.Component({
            selector: 'tools-personal',
            template: "\n<div>\n    <!--<div class=\"s40x40 round\" [style.background-image] =\"myImage\"> </div>   -->\n    <div class=\"row\">\n        <div class=\"col-sm-4\"><div [my-md-image]=\"myImage\"> </div></div>\n        <!--<div [userClass]=\"'col-sm-2'\" [my-md-image]=\"myImage\"> </div>-->\n        <div class=\"col-sm-8\"><h5>{{name}}</h5></div>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], ToolsPersonal);
    return ToolsPersonal;
}());
exports.ToolsPersonal = ToolsPersonal;
//# sourceMappingURL=tools-personal.js.map