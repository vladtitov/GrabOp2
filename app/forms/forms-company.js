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
var forms_1 = require("@angular/forms");
var FormsCompany = (function () {
    function FormsCompany(fb) {
        this.fb = fb;
    }
    FormsCompany.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOUser)
    ], FormsCompany.prototype, "person", void 0);
    FormsCompany = __decorate([
        core_1.Component({
            selector: 'forms-company',
            template: "\n<form #f=\"ngForm\"  autocomplete=\"off\" novalidate>\n          <fieldset>          \n              <div class=\"from-field\">              \n               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<label>Job Title</label>\n                <input  [(ngModel)]=\"person.jobtitle\" name=\"jobtitle\" />\n              </div>\n              \n               <div class=\"from-field\">                \n               <input  [(ngModel)]=\"person.occupation\" type=\"radio\" name=\"occupation\" value=\"company\" checked>\n                <label>Company</label>\n                <input [(ngModel)]=\"person.company\" name=\"company\" />             \n                  \n                  <br> <input [(ngModel)]=\"person.occupation\" type=\"radio\" name=\"occupation\" value=\"selfemployed\"> Self Employed\n                  <br><input  [(ngModel)]=\"person.occupation\" type=\"radio\" name=\"occupation\" value=\"seeling\"> Seeking an Opportunity\n                 <br><input  [(ngModel)]=\"person.occupation\" type=\"radio\" name=\"occupation\" value=\"other\"> Other\n                \n              </div>             \n          </fieldset>           \n</form> \n    <div class=\"debug\">{{ person | json }}</div>\n"
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], FormsCompany);
    return FormsCompany;
}());
exports.FormsCompany = FormsCompany;
//# sourceMappingURL=forms-company.js.map