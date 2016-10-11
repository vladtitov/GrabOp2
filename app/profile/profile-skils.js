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
var ProfileSkills = (function () {
    function ProfileSkills() {
        this.size = 256;
    }
    Object.defineProperty(ProfileSkills.prototype, "user", {
        set: function (user) {
            if (user && user.skillset)
                this.myskilles = user.skillset.join(' , ');
        },
        enumerable: true,
        configurable: true
    });
    ProfileSkills.prototype.ngOnInit = function () {
    };
    ProfileSkills.prototype.loadServices = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOUserExt), 
        __metadata('design:paramtypes', [vos_1.VOUserExt])
    ], ProfileSkills.prototype, "user", null);
    ProfileSkills = __decorate([
        core_1.Component({
            selector: 'profile-skills',
            template: "\n<div >     \n      Profile Skills\n      <div>{{myskilles}}</div>\n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileSkills);
    return ProfileSkills;
}());
exports.ProfileSkills = ProfileSkills;
//# sourceMappingURL=profile-skils.js.map