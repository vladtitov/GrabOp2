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
var router_1 = require("@angular/router");
var vos_1 = require("../models/vos");
var posts_edit_service_1 = require("./posts-edit-service");
var user_service_1 = require("../myservices/user-service");
var PostEditMain = (function () {
    function PostEditMain(postEditService, aroute, accountService) {
        this.postEditService = postEditService;
        this.aroute = aroute;
        this.accountService = accountService;
        this.model = new vos_1.VOPost({});
        this.model_id = 20;
    }
    PostEditMain.prototype.onSaveClick = function () {
        // console.log(this.myServiceService);
        this.postEditService.savePost(this.model).subscribe(function (res) {
            console.log(res);
        });
    };
    PostEditMain.prototype.ngOnChanges = function (obj) {
        // console.log(obj)
        // if(obj.my_service_id && this.my_service_id !== obj.my_service_id)  this.loadService();
    };
    PostEditMain.prototype.ngOnInit = function () {
        var _this = this;
        this.aroute.params.subscribe(function (params) {
            console.log(params);
            _this.myStep = params['step'] || 'basic';
            var id = +params['id'];
            if (_this.model_id !== id)
                _this.loadPost(id);
        });
        //this.loadService();
    };
    PostEditMain.prototype.loadPost = function (id) {
        var _this = this;
        console.log('load post ' + id);
        this.model_id = id;
        this.postEditService.getPostById(id).subscribe(function (res) {
            _this.model = res;
            console.log(res);
        });
    };
    PostEditMain = __decorate([
        core_1.Component({
            selector: 'post-edit-main',
            template: "\n<div class=\"post-edit-main\">\n      <h2>Post Edit <span>{{model.type}}</span></h2> \n           <nav class=\"mynav\">\n              <a class=\"basic\" routerLink=\"../basic\" routerLinkActive=\"menu-active\"  >BSIC</a>\n              <a class=\"style\" routerLink=\"../style\" routerLinkActive=\"menu-active\" >STYLE</a>  \n              <a class=\"assets\" routerLink=\"../assets\" routerLinkActive=\"menu-active\" >Pnoto/Video</a>  \n              <a class=\"alliance\" routerLink=\"../alliance\" routerLinkActive=\"menu-active\" >Alliance</a>\n          </nav>     \n      \n           <div>{{model.title}}</div>\n           <div>\n              <div *ngIf=\"myStep=='basic'\" class=\"mytab\">\n                  <post-edit-basic [model]=\"model\" ></post-edit-basic>\n              </div>           \n              <div *ngIf=\"myStep=='style'\" class=\"mytab\">\n               <post-edit-style [model]=\"model\" ></post-edit-style>\n              </div>\n              <div *ngIf=\"myStep=='assets'\" class=\"mytab\">\n                   <post-edit-media [model]=\"model\"></post-edit-media>\n              </div>\n              <div *ngIf=\"myStep=='alliance'\" class=\"mytab\">\n                   <post-edit-alliance [model]=\"model\"></post-edit-alliance>\n              </div>\n              <button (click)=\"onSaveClick()\" >SAVE</button>\n          </div>   \n                \n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [posts_edit_service_1.PostEditService, router_1.ActivatedRoute, user_service_1.UserService])
    ], PostEditMain);
    return PostEditMain;
}());
exports.PostEditMain = PostEditMain;
//# sourceMappingURL=post-edit-main.js.map