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
///<reference path="../tsds/jquery.d.ts"/>
var core_1 = require("@angular/core");
var vos_1 = require("../models/vos");
var posts_edit_service_1 = require("./posts-edit-service");
var upload_service_1 = require("../myservices/upload-service");
var PostEditMedia = (function () {
    function PostEditMedia(uploadSerevice, postEditService) {
        this.uploadSerevice = uploadSerevice;
        this.postEditService = postEditService;
        this.selected$ = new core_1.EventEmitter();
    }
    PostEditMedia.prototype.ngOnChanges = function (obj) {
        console.log(obj);
        if (obj.model && obj.model.currentValue.id) {
            this.loadAttachments(obj.model.currentValue.id);
        }
    };
    PostEditMedia.prototype.onImageClick = function (image) {
        if (this.selected)
            this.selected.selected = false;
        image.selected = true;
        this.selected = image;
        this.selected$.emit(this.selected);
    };
    PostEditMedia.prototype.onDeleteClick = function () {
        if (this.selected) {
            if (confirm('You want to delete?')) {
                this.postEditService.deleteAttachment(this.model.id, this.selected.id);
            }
        }
    };
    PostEditMedia.prototype.saveAttachment = function (vo) {
        var _this = this;
        this.postEditService.saveAttachment(vo, this.model.id).then(function (res) {
            if (res.insertId) {
                _this.currentImage.id = res.insertId;
                if (!_this.images)
                    _this.images = [];
                _this.images.push(_this.currentImage);
            }
            _this.currentImage.dirty = false;
            console.log(res);
        });
    };
    PostEditMedia.prototype.onImageUploadChange = function ($evt) {
        var _this = this;
        var files = $evt.target.files;
        if (files.length) {
            var form = new FormData();
            var file = files[0];
            form.append('file', file);
            if (files[0].size < 2000000) {
                this.uploadSerevice.upload(form, 'post_attachments', this.model.id).done(function (res) {
                    console.log(res);
                    if (res.success == 'success') {
                        var img = new vos_1.VOImage({ src: res.result, type: 'image', posts_id: _this.model.id, dirty: true });
                        _this.currentImage = img;
                        _this.saveAttachment(img);
                        _this.model.attachments = _this.images.length;
                    }
                });
            }
            else
                alert('File should be less then 2 Megabite');
        }
    };
    PostEditMedia.prototype.loadAttachments = function (id) {
        var _this = this;
        this.postEditService.getAttachments(this.model.id).then(function (res) {
            _this.images = res;
            console.log(res);
        });
    };
    PostEditMedia.prototype.ngOnInit = function () {
        /*console.log(this.model);
          if(this.model.attachments){
            this.loadAttachments(this.model.id);
            //this.images = this.model.attachments.filter((item:VOImage)=>{return item.type=='image'})
          }
          else this.images=[];*/
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOPost)
    ], PostEditMedia.prototype, "model", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PostEditMedia.prototype, "model_id", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PostEditMedia.prototype, "selected$", void 0);
    PostEditMedia = __decorate([
        core_1.Component({
            selector: 'post-edit-media',
            template: "\n<div class=\"post-edit\">\n     <h6 class=\"text-sm-right\">Offering:Service Title</h6> \n         \n           <div >\n              <h5>Photos</h5>\n              <div>\n                <div *ngFor=\"let image of images\" class=\"d-inline-block\">\n                    <div (click)=\"onImageClick(image)\" [class.selected]=\"image.selected\" class=\"d-inline-block\">\n                      <img  class=\"img-thumbnail img-size-64\" src=\"{{image.src}}\"/>\n                    </div>\n                </div>\n                \n                <form #imageForm enctype=\"multipart/form-data\" class=\"d-inline-block\">\n                    <label class=\"btn btn-default btn-file img-thumbnail img-size-64 fa fa-download bg-faded\">\n                        <!--<img  class=\"img-thumbnail img-size-64 bg-faded\"/>-->\n                        <input style=\"display: none;\" name='file' ngModel type='file' (change)=\"onImageUploadChange($event)\"/>\n                    </label>\n                    <!--<input type=\"file\" name=\"file\" (change)=\"onImageUploadChange($event)\" />-->\n                </form>\n                <a class=\"btn fa fa-times-circle\" (click)=\"onDeleteClick()\"></a>\n              </div>\n           \n           </div>\n           <div>\n              <h5>Videos</h5>\n              <div>\n                <form #imageForm enctype=\"multipart/form-data\">\n                    <label class=\"btn btn-default btn-file fa fa-download\">\n                        <input style=\"display: none;\" name='file' ngModel type='file' (change)=\"onImageUploadChange($event)\"/>\n                    </label>\n                    <!--<input type=\"file\" name=\"file\" (change)=\"onImageUploadChange($event)\" />-->\n                    <a class=\"btn fa fa-times-circle\" (click)=\"onDeleteClick()\"></a>\n                </form>\n              </div>           \n          </div>\n          <div>\n            <h5>Documents</h5>\n              <div>\n                <form #imageForm enctype=\"multipart/form-data\">\n                    <label class=\"btn btn-default btn-file fa fa-download\">\n                        <input style=\"display: none;\" name='file' ngModel type='file' (change)=\"onImageUploadChange($event)\"/>\n                    </label>\n                    <!--<input type=\"file\" name=\"file\" (change)=\"onImageUploadChange($event)\" />-->\n                    <a class=\"btn fa fa-times-circle\" (click)=\"onDeleteClick()\"></a>\n                </form>\n              </div>\n          \n          </div>\n           <div class=\"debug\">{{ model | json }}</div>\n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [upload_service_1.UploadService, posts_edit_service_1.PostEditService])
    ], PostEditMedia);
    return PostEditMedia;
}());
exports.PostEditMedia = PostEditMedia;
//# sourceMappingURL=post-edit-media.js.map