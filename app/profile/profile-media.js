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
var ProfileMedia = (function () {
    function ProfileMedia() {
        this.size = 256;
    }
    ProfileMedia.prototype.ngOnInit = function () {
    };
    ProfileMedia.prototype.loadServices = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOUserExt)
    ], ProfileMedia.prototype, "user", void 0);
    ProfileMedia = __decorate([
        core_1.Component({
            selector: 'profile-media',
            template: "\n<div>     \n      Profile media\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileMedia);
    return ProfileMedia;
}());
exports.ProfileMedia = ProfileMedia;
//# sourceMappingURL=profile-media.js.map