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
var upload_service_1 = require("../myservices/upload-service");
var FormsCompany = (function () {
    function FormsCompany(fb, uploadService) {
        this.fb = fb;
        this.uploadService = uploadService;
    }
    FormsCompany.prototype.ngOnInit = function () {
        // if(!this.person.skillset){
        //     this.person.skillset = [''];
        // }
        // console.log('this.person.skillset', this.person.skillset);
    };
    FormsCompany.prototype.onAddResumeChange = function (evt) {
        var _this = this;
        var files = evt.target.files;
        if (files.length) {
            var form = new FormData();
            var file = files[0];
            form.append('file', file);
            if (files[0].size < 2000000) {
                this.uploadService.upload(form, 'user-resume', this.person.id).done(function (res) {
                    console.log(res);
                    if (res.success == 'success') {
                        _this.person.resume = res.result;
                    }
                });
            }
            else
                alert('File should be less then 2 Megabite');
        }
    };
    FormsCompany.prototype.trackBySkills = function (index, obj) {
        return index;
    };
    FormsCompany.prototype.onAddClick = function () {
        this.person.skillset ? this.person.skillset.push('') : this.person.skillset = [''];
    };
    FormsCompany.prototype.onDeleteClick = function (index) {
        // console.log('index', index);
        // index == 0 ? this.person.skillset.shift(): this.person.skillset.splice(index,1);
        // if(index==0) this.person.skillset.shift();
        this.person.skillset.splice(index, 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOUserExt)
    ], FormsCompany.prototype, "person", void 0);
    FormsCompany = __decorate([
        core_1.Component({
            selector: 'forms-company',
            template: "\n<form #f=\"ngForm\"  autocomplete=\"off\" novalidate>\n          <fieldset>          \n              <div class=\"form-group row\">\n                <div class=\"col-sm-1 offset-sm-3 text-sm-right\">\n                    <label>Job Title</label>\n                </div>\n                <div class=\"col-sm-8 text-sm-left\">\n                    <input  [(ngModel)]=\"person.jobtitle\" name=\"jobtitle\" />\n                </div>\n              </div>\n              \n            <div class=\"form-group row\">\n                <!--<div class=\"col-sm-9 offset-sm-3 \">-->\n                    <!--<div class=\"form-check\">-->\n                        <!--<label class=\"form-check-label\">-->\n                            <!--<input class=\"form-check-input\" [(ngModel)]=\"person.occupation\" type=\"radio\" name=\"occupation\" value=\"company\" checked>-->\n                            <!--Company <input [(ngModel)]=\"person.company\" name=\"company\" />-->\n                        <!--</label>    -->\n                    <!--</div>-->\n                <!--</div>-->\n                <div class=\"col-sm-1 offset-sm-3 text-sm-right\">\n                    <label>Company</label>\n                </div>\n                <div class=\"col-sm-4 text-sm-left\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <input  [(ngModel)]=\"person.occupation\" type=\"radio\" name=\"occupation\" value=\"company\" checked>\n                        <!--<input type=\"radio\" aria-label=\"Radio button for following text input\">-->\n                      </span>\n                      <input [(ngModel)]=\"person.company\" type=\"text\" class=\"form-control\" name=\"company\" />\n                      <!--<input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\">-->\n                    </div>\n                </div>\n                <!--<div class=\"col-sm-1 text-sm-left\">Company</div>-->\n                <!--<div class=\"col-sm-7 text-sm-left\">-->\n                    <!--<input [(ngModel)]=\"person.company\" name=\"company\" />             -->\n                <!--</div>-->\n            </div>\n            <div class=\"form-group row text-sm-left\">\n              <div class=\"col-sm-9 offset-sm-3\">\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input [(ngModel)]=\"person.occupation\" type=\"radio\" name=\"occupation\" value=\"selfemployed\">\n                    Self Employed\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input  [(ngModel)]=\"person.occupation\" type=\"radio\" name=\"occupation\" value=\"seeling\">\n                    Seeking an Opportunity\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                   <input  [(ngModel)]=\"person.occupation\" type=\"radio\" name=\"occupation\" value=\"other\">\n                   Other\n                  </label>\n                </div>\n                  <!--<br> <input [(ngModel)]=\"person.occupation\" type=\"radio\" name=\"occupation\" value=\"selfemployed\"> Self Employed-->\n                  <!--<br><input  [(ngModel)]=\"person.occupation\" type=\"radio\" name=\"occupation\" value=\"seeling\"> Seeking an Opportunity-->\n                 <!--<br><input  [(ngModel)]=\"person.occupation\" type=\"radio\" name=\"occupation\" value=\"other\"> Other-->\n              </div>    \n            </div>          \n          </fieldset>\n          <div class=\"form-group row\">\n            <div class=\"col-sm-2 offset-sm-3\">\n                <div class=\"card\">\n                  <img class=\"card-img-top s70x70\" [src]=\"person.resume?'img/docx.png':''\">\n                  <p class=\"card-text\" *ngIf=\"person.resume\">resume</p>\n                </div>\n            </div>\n            <div class=\"col-sm-7 text-sm-left\">\n                <label>upload resume</label>\n                <input type=\"file\" nane=\"file\" (change)=\"onAddResumeChange($event)\" />\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-sm-2 offset-sm-3\">\n                  <p>Skills</p>\n            </div>\n            <div class=\"col-sm-7 text-sm-left\">\n                <div *ngFor=\"let skill of person.skillset; let i=index; trackBy:trackBySkills\">\n                    <a class=\"fa fa-minus-circle btn\" (click)=\"onDeleteClick(i)\"></a>\n                    <!--<input  [(ngModel)]=\"skill\" name=\"skill\"/> cannot assign to a reference or variable-->\n                    <input  [(ngModel)]=\"person.skillset[i]\" [ngModelOptions]=\"{standalone: true}\"/>\n                </div>\n                <a class=\"fa fa-plus-circle btn\" (click)=\"onAddClick()\"></a>\n            </div>\n          </div>\n</form> \n    <div class=\"debug\">{{ person | json }}</div>\n"
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, upload_service_1.UploadService])
    ], FormsCompany);
    return FormsCompany;
}());
exports.FormsCompany = FormsCompany;
//# sourceMappingURL=forms-company.js.map