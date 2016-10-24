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
var PostEditAlliance = (function () {
    function PostEditAlliance() {
    }
    PostEditAlliance.prototype.ngOnChanges = function (obj) {
    };
    PostEditAlliance.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOPost)
    ], PostEditAlliance.prototype, "model", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PostEditAlliance.prototype, "model_id", void 0);
    PostEditAlliance = __decorate([
        core_1.Component({
            selector: 'post-edit-alliance',
            template: "\n<div>\n      <h6 class=\"text-sm-right\">Offering:Service Title</h6>\n           <form #myForm=\"ngForm\">                      \n               <div class=\"form-group has-danger m-b-0\">\n                    <label class=\"custom-control custom-checkbox\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"model.openToAllianace\" name=\"openToAllianace\">\n                      <span class=\"custom-control-indicator\"></span>\n                      <span class=\"custom-control-description\">Open to join</span>\n                    </label>\n                </div>  \n                 <div class=\"form-group has-danger m-b-0\">\n                    <label class=\"custom-control custom-checkbox\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"model.visibleToPublic\" name=\"visibleToPublic\">\n                      <span class=\"custom-control-indicator\"></span>\n                      <span class=\"custom-control-description\">Visible to public</span>\n                    </label>\n                </div>            \n            </form>\n            \n            <div>\n                <div class=\"form-group\">\n                  <label >Invite people to your alliance</label>\n                  <input type=\"search\" class=\"form-control\"  placeholder=\"Enter a name\" name=\"ivite\">\n                </div>            \n            </div>\n            \n            <div>\n            \n            \n              <members-list></members-list>\n                       <button class=\"btn btn-primary\">remove</button>\n                       <button class=\"btn btn-primary\">message</button>            \n            </div> \n                  \n                  \n       <div class=\"debug\">{{ model | json }}</div>\n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], PostEditAlliance);
    return PostEditAlliance;
}());
exports.PostEditAlliance = PostEditAlliance;
//# sourceMappingURL=post-edit-alliance.js.map