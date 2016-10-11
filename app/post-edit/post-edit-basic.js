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
var vos_1 = require("../models/vos");
var posts_edit_service_1 = require("./posts-edit-service");
var PostEditBasic = (function () {
    function PostEditBasic(postEditService) {
        this.postEditService = postEditService;
    }
    PostEditBasic.prototype.ngOnChanges = function (obj) {
        // console.log(obj)
        // if(obj.my_service_id && this.my_service_id !== obj.my_service_id)  this.loadService();
    };
    PostEditBasic.prototype.ngOnInit = function () {
        var _this = this;
        this.postEditService.getCategories().then(function (res) { return _this.categories = res; });
        //this.loadService();
    };
    PostEditBasic.prototype.loadService = function () {
        /*console.log('loadService()' +this.my_service_id)
         if(isNaN(this.my_service_id)) return;
         this.myService.getPostById(this.my_service_id).subscribe(
         res=>{
         this.currentService = res;
         //console.log(services);
         }
         )*/
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOPost)
    ], PostEditBasic.prototype, "model", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PostEditBasic.prototype, "model_id", void 0);
    PostEditBasic = __decorate([
        core_1.Component({
            selector: 'post-edit-basic',
            template: "\n<div>    <h5 class=\"text-md-center\">Basic</h5>  \n      <form #f=\"ngForm\">\n                 <div class=\"from-field\">     \n                  <label>Title</label>                 \n                    <input type=\"text\"  [(ngModel)]=\"model.title\" name=\"name\">                  \n                </div>\n                \n               <div class=\"from-field\">  \n                  <label>Country</label>                  \n                    <input [(ngModel)]=\"model.country\" name=\"country\" >                 \n                </div>\n                \n                <div class=\"from-field\">  \n                  <label>Province</label>                  \n                    <input  [(ngModel)]=\"model.province\" name=\"province\">                  \n                </div>\n                \n               <div class=\"from-field\">  \n                  <label>City</label>                  \n                    <input [(ngModel)]=\"model.city\"  name=\"city\">\n                \n                </div>\n               <div class=\"from-field\">  \n                  <label>Category</label>\n                 \n                  <select  [(ngModel)]=\"model.categoryid\" name=\"categoryid\">\n                                   <option *ngFor=\"let category of categories\" [ngValue]=\"category.id\">{{category.label}}</option>\n                  </select>                   \n                  \n                </div>\n                <div class=\"from-field\">  \n                  <label>Keywords</label>\n                  <div>\n                    <textarea [(ngModel)]=\"model.keywords\" name=\"keywords\" ></textarea>\n                  </div>\n                </div>\n                <div class=\"from-field\"> \n                  <label >Description</label>\n                  <div>\n                    <textarea [(ngModel)]=\"model.description\" name=\"description\"> </textarea>\n                  </div>\n                </div>                \n        </form>\n        \n         <div class=\"debug\">{{ model | json }}</div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [posts_edit_service_1.PostEditService])
    ], PostEditBasic);
    return PostEditBasic;
}());
exports.PostEditBasic = PostEditBasic;
//# sourceMappingURL=post-edit-basic.js.map