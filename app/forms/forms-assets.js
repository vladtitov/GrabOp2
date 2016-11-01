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
 * Created by Vlad on 9/5/2016.
 */
var core_1 = require("@angular/core");
//import {UserService} from "../myservices/person-service";
var vos_1 = require("../models/vos");
var upload_service_1 = require("../myservices/upload-service");
var EditAssets = (function () {
    function EditAssets(uploadService) {
        this.uploadService = uploadService;
    }
    EditAssets.prototype.ngOnInit = function () {
        // this.accoutService.myAccount$.subscribe(person =>this.person = person)
    };
    EditAssets.prototype.onAddPhotoChange = function (evt) {
        var _this = this;
        var files = evt.target.files;
        if (files.length) {
            var form = new FormData();
            var file = files[0];
            form.append('file', file);
            if (files[0].size < 2000000) {
                this.uploadService.upload(form, 'user-phote', this.model.id).done(function (res) {
                    console.log(res);
                    if (res.success == 'success') {
                        _this.model.profile_pic = res.result;
                    }
                });
            }
            else
                alert('File should be less then 2 Megabite');
        }
    };
    EditAssets.prototype.onAddBackgroundChange = function (evt) {
        var _this = this;
        var files = evt.target.files;
        if (files.length) {
            var form = new FormData();
            var file = files[0];
            form.append('file', file);
            if (files[0].size < 2000000) {
                this.uploadService.upload(form, 'user-background', this.model.id).done(function (res) {
                    console.log(res);
                    if (res.success == 'success') {
                        _this.model.background_pic = res.result;
                    }
                });
            }
            else
                alert('File should be less then 2 Megabite');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOUserExt)
    ], EditAssets.prototype, "model", void 0);
    EditAssets = __decorate([
        core_1.Component({
            selector: 'edit-assets',
            template: "\n<div>\n          <!--<h2>Edit Assets</h2> -->\n          <div class=\"form-group row\">\n            <div class=\"col-sm-2 offset-sm-2\">\n              <img class=\"s100x100\" src=\"{{model?model.profile_pic:''}}\" />\n            </div>\n            <div class=\"col-sm-8 text-sm-left\">\n                <label>add photo</label>\n                <input type=\"file\" nane=\"file\" (change)=\"onAddPhotoChange($event)\" />\n            </div>\n          </div>\n           <div class=\"form-group row\">\n            <div class=\"col-sm-2 offset-sm-2\">\n              <img class=\"s100x100\" src=\"{{model?model.video:''}}\" />\n            </div>\n            <div class=\"col-sm-8 text-sm-left\">\n                <button>add video</button>\n            </div>\n          </div>\n           <div class=\"form-group row\">\n            <div class=\"col-sm-2 offset-sm-2\">\n              <img  class=\"s100x100\" src=\"{{model?model.background_pic:''}}\" />\n            </div>\n            <div class=\"col-sm-8 text-sm-left \">\n                 <label>background image</label>\n                 <input type=\"file\" nane=\"file\" (change)=\"onAddBackgroundChange($event)\" />\n            </div>\n          </div>\n <div class=\"debug\">{{ model | json }}  </div>  \n</div>\n"
        }), 
        __metadata('design:paramtypes', [upload_service_1.UploadService])
    ], EditAssets);
    return EditAssets;
}());
exports.EditAssets = EditAssets;
//# sourceMappingURL=forms-assets.js.map