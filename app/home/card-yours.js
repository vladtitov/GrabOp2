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
    function CardYours(loginService) {
        this.loginService = loginService;
        this.account = new vos_1.VOUserExt({});
        this.myImage = this.account.profile_pic;
    }
    CardYours.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.myAccount$.subscribe(function (acc) {
            console.log(acc);
            _this.account = acc;
        });
    };
    CardYours = __decorate([
        core_1.Component({
            selector: 'card-yours',
            template: "\n<div>\n Card Yours\n<div my-md-image=\"account.profile_pic\"></div>\n <div>{{account.displayName}}</div>\n        <div><span>{{account.city}}</span>, <span>{{account.province}}</span></div> \n        <div>\n          <div>Offerings: <span>{{account.offers}}</span></div>\n          <div>Needs: <span>{{account.needs}}</span></div>        \n        </div>        \n</div>\n"
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], CardYours);
    return CardYours;
}());
exports.CardYours = CardYours;
//# sourceMappingURL=card-yours.js.map