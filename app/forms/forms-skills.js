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
 * Created by Vlad on 9/18/2016.
 */
var core_1 = require("@angular/core");
//import {UserService} from "../myservices/person-service";
var vos_1 = require("../models/vos");
var FormsSkills = (function () {
    function FormsSkills() {
    }
    FormsSkills.prototype.ngOnInit = function () {
        //this.accoutService.myAccount$.subscribe(person =>this.person = person)
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOUserExt)
    ], FormsSkills.prototype, "account", void 0);
    FormsSkills = __decorate([
        core_1.Component({
            selector: 'forms-skills',
            template: "\n<div>\n          <h2>Skills edit</h2>        \n                  \n\n \n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], FormsSkills);
    return FormsSkills;
}());
exports.FormsSkills = FormsSkills;
//# sourceMappingURL=forms-skills.js.map