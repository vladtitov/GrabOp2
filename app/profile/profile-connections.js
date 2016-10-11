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
 * Created by Vlad on 9/11/2016.
 */
/**
 * Created by Vlad on 9/10/2016.
 */
var core_1 = require("@angular/core");
var vos_1 = require("../models/vos");
var ProfileConnections = (function () {
    function ProfileConnections() {
        this.size = 256;
    }
    ProfileConnections.prototype.ngOnInit = function () {
    };
    ProfileConnections.prototype.loadServices = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOUserExt)
    ], ProfileConnections.prototype, "user", void 0);
    ProfileConnections = __decorate([
        core_1.Component({
            selector: 'profile-connections',
            template: "\n<div>     \n    Profile Connections of <span>{{user.firstName}}</span>    \n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileConnections);
    return ProfileConnections;
}());
exports.ProfileConnections = ProfileConnections;
//# sourceMappingURL=profile-connections.js.map