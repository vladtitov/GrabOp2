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
 * Created by Vlad on 9/19/2016.
 */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var vos_1 = require("../models/vos");
var FormSearchAdvanced = (function () {
    function FormSearchAdvanced(fb) {
        this.fb = fb;
        this.search = new vos_1.VOSearch({});
    }
    FormSearchAdvanced = __decorate([
        core_1.Component({
            selector: 'form-search-advanced',
            template: "\n<div>\n<h2>Search Advanced</h2>\n <form  #f=\"ngForm\" autocomplete=\"off\" novalidate >\n          <fieldset>          \n              <div class=\"from-field\">                \n                <label>Search</label>\n                <input  [(ngModel)]=\"search.pattern\" name=\"pattern\" />\n              </div>\n               <div class=\"from-field\">                \n                <label>Country</label>\n                <input [(ngModel)]=\"search.country\" name=\"lcountry\" />\n              </div>\n               <div class=\"from-field\">                \n                <label>Province</label>\n                <input [(ngModel)]=\"search.province\" name=\"province\" />\n              </div>\n               <div class=\"from-field\">                \n                <label>City</label>\n                <input [(ngModel)]=\"search.city\" name=\"city\" />\n              </div>\n              \n              <h4>Business Style</h4>\n                   <div class=\"from-field\">                \n                    <label>Business Partnership</label>\n                    <input [(ngModel)]=\"search.partnership\" type=\"checkbox\" name=\"partnership\" />\n                  </div>\n                   <div class=\"from-field\">                \n                    <label>Exchange</label>\n                    <input [(ngModel)]=\"search.exchange\" type=\"checkbox\" name=\"exchange\" />\n                  </div>\n                   <div class=\"from-field\">                \n                    <label>Donate</label>\n                    <input [(ngModel)]=\"search.donate\"  type=\"checkbox\" name =\"donate\" />\n                  </div>\n                   <div class=\"from-field\">                \n                    <label>Internship</label>\n                    <input [(ngModel)]=\"search.internship\" type=\"checkbox\"  name=\"internship\" />\n                  </div>  \n                  <div class=\"from-field\">                \n                    <label>Money</label>\n                    <input [(ngModel)]=\"search.money\" type=\"checkbox\"  name=\"money\" />\n                  </div> \n                 \n                 \n              <div class=\"from-field\">                \n                <label>Fixed</label>\n                <input [(ngModel)]=\"search.fixedFrom\" name=\"fixedFrom\" /> to  <input [(ngModel)]=\"search.fixedTo\" name=\"fixedTo\" />\n              </div>\n              \n                  \n              <div class=\"from-field\">                \n                <label>Hourly</label>\n                <input [(ngModel)]=\"search.hourlyFrom\" name=\"hourlyFrom\" /> to  <input [(ngModel)]=\"search.hourlyTo\" name=\"hourlyTo\" />\n              </div>\n              \n               <div class=\"from-field\">                \n                <label>Commission</label>\n                <input [(ngModel)]=\"search.commissionFrom\" name=\"commissionFrom\" /> to  <input [(ngModel)]=\"search.commissionTo\" name=\"commissionTo\" />\n              </div>\n                 \n                 \n          </fieldset>          \n          </form> \n     <div class=\"debug\">\n        <h3>Form Value:</h3>\n        {{ f.value | json }}\n      </div>   \n   </div>   \n "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], FormSearchAdvanced);
    return FormSearchAdvanced;
}());
exports.FormSearchAdvanced = FormSearchAdvanced;
//# sourceMappingURL=form-search-advanced.js.map