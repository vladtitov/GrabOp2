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
var vos_1 = require("../models/vos");
var forms_1 = require("@angular/forms");
var FormsPersonal = (function () {
    function FormsPersonal(fb) {
        this.fb = fb;
    }
    FormsPersonal.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOUserExt)
    ], FormsPersonal.prototype, "person", void 0);
    FormsPersonal = __decorate([
        core_1.Component({
            selector: 'forms-personal',
            template: "\n<form  #f=\"ngForm\" autocomplete=\"off\" novalidate>\n          <fieldset>          \n              <div class=\"from-field\">                \n                <label>First Name</label>\n                <input  [(ngModel)]=\"person.firstName\" name=\"firstName\" />\n              </div>\n               <div class=\"from-field\">                \n                <label>Last Name</label>\n                <input [(ngModel)]=\"person.lastName\" name=\"lastName\" />\n              </div>\n               <div class=\"from-field\">                \n                <label>Phone Number</label>\n                <input [(ngModel)]=\"person.PhoneNumber\" name=\"PhoneNumber\" />\n              </div>\n               <div class=\"from-field\">                \n                <label>Email Address</label>\n                <input [(ngModel)]=\"person.PrimaryEmail\" name=\"PrimaryEmail\" />\n              </div>\n               <div class=\"from-field\">                \n                <label>Country</label>\n                <input [(ngModel)]=\"person.country\" name=\"country\" />\n              </div>\n               <div class=\"from-field\">                \n                <label>Province</label>\n                <input [(ngModel)]=\"person.province\" name=\"province\" />\n              </div>\n               <div class=\"from-field\">                \n                <label>City</label>\n                <input [(ngModel)]=\"person.city\" name =\"city\" placeholder=\"city\" />\n              </div>\n               <div class=\"from-field\">                \n                <label>Statement</label>\n                <textarea [(ngModel)]=\"person.description\" name=\"description\" ></textarea>\n              </div>              \n          </fieldset>          \n</form> \n     <div class=\"debug\">{{ person | json }}  </div>  \n\n"
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], FormsPersonal);
    return FormsPersonal;
}());
exports.FormsPersonal = FormsPersonal;
//# sourceMappingURL=forms-personal.js.map