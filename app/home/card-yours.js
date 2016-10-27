/**
 * Created by Vlad on 9/6/2016.
 */
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
var vos_1 = require("../models/vos");
var user_service_1 = require("../myservices/user-service");
var CardYours = (function () {
    function CardYours(userService) {
        this.userService = userService;
        this.user = new vos_1.VOUserExt({});
        this.myImage = this.user.profile_pic;
    }
    CardYours.prototype.ngOnInit = function () {
        var _this = this;
        // this.loginService.myAccount$.subscribe(
        this.userService.user$.subscribe(function (user) {
            console.log(user);
            _this.user = user;
        });
    };
    CardYours = __decorate([
        core_1.Component({
            selector: 'card-yours',
            template: "\n<div>\n Card Yours\n<div my-md-image=\"account.profile_pic\"></div>\n <div>{{user.displayName}}</div>\n        <div><span>{{user.city}}</span>, <span>{{user.province}}</span></div> \n        <div>\n          <div>Offerings: <span>{{user.offers}}</span></div>\n          <div>Needs: <span>{{user.needs}}</span></div>        \n        </div>        \n</div>\n"
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], CardYours);
    return CardYours;
}());
exports.CardYours = CardYours;
//# sourceMappingURL=card-yours.js.map