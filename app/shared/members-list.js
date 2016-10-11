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
var MembersList = (function () {
    function MembersList() {
        this.size = 256;
    }
    MembersList.prototype.ngOnInit = function () {
        if (this.my_type == 'recommended') {
            this.title = 'Services Recommended by:';
        }
        else {
            this.title = 'Alliance Members:';
        }
    };
    MembersList.prototype.loadServices = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MembersList.prototype, "my_type", void 0);
    MembersList = __decorate([
        core_1.Component({
            selector: 'members-list',
            template: "\n<div>     \n      <div class=\"card-{{size}}\">\n      <div>Members list</div>\n      <h4><span>{{title}}</span> <span>{{total}}</span></h4>\n                \n            </div>\n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], MembersList);
    return MembersList;
}());
exports.MembersList = MembersList;
//# sourceMappingURL=members-list.js.map