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
var PostEditStyle = (function () {
    function PostEditStyle() {
    }
    PostEditStyle.prototype.ngOnChanges = function (obj) {
    };
    PostEditStyle.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOPost)
    ], PostEditStyle.prototype, "model", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PostEditStyle.prototype, "model_id", void 0);
    PostEditStyle = __decorate([
        core_1.Component({
            selector: 'post-edit-style',
            template: "\n<div >\n           <h6 class=\"text-sm-right\">Offering:Service Title</h6>            \n           <form #f=\"ngForm\" class=\"form-horizontal\">\n              <div>                    \n                  <div class=\"form-group has-success\">\n                    <label class=\"custom-control custom-checkbox col-sm-offset-2\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"model.businessPartnership\" name=\"businessPartnership\">\n                      <span class=\"custom-control-indicator\"></span>\n                      <span class=\"custom-control-description\">Business Partnership</span>\n                    </label>\n                  </div>\n                  \n                  <div class=\"form-group has-warning\">\n                    <label class=\"custom-control custom-checkbox col-sm-offset-2\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"model.exchange\" name=\"exchange\">\n                      <span class=\"custom-control-indicator\"></span>\n                      <span class=\"custom-control-description\">Exchange</span>\n                    </label>\n                  </div>\n                  \n                  <div class=\"form-group has-danger m-b-0\">\n                    <label class=\"custom-control custom-checkbox col-sm-offset-2\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"model.donate\" name=\"donate\">\n                      <span class=\"custom-control-indicator\"></span>\n                      <span class=\"custom-control-description\">Donate</span>\n                    </label>\n                  </div>\n                  \n                  <div class=\"form-group has-warning\">\n                    <label class=\"custom-control custom-checkbox col-sm-offset-2\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"model.internship\" name=\"internship\">\n                      <span class=\"custom-control-indicator\"></span>\n                      <span class=\"custom-control-description\">Intership</span>\n                    </label>\n                  </div>\n                  \n                  <div class=\"form-group has-danger m-b-0\">\n                    <label class=\"custom-control custom-checkbox col-sm-offset-2\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"model.money\" name=\"money\">\n                      <span class=\"custom-control-indicator\"></span>\n                      <span class=\"custom-control-description\">Money</span>\n                    </label>\n                  </div>\n              </div>\n              \n              <div>\n                 <div class=\"form-group\">  \n                  <label class=\"col-sm-6 control-label\">Fixes $</label>                 \n                    <input [(ngModel)]=\"model.fixed\" name=\"name\">                  \n                </div>\n                \n                  <div class=\"form-group\">  \n                  <label class=\"col-sm-6 control-label\">Hourly $</label>                  \n                    <input [(ngModel)]=\"model.hourlyRate\" name=\"country\" >                  \n                </div>\n                \n                 <div class=\"form-group\">  \n                  <label class=\"col-sm-6 control-label\">Commission $</label>\n                    <input  [(ngModel)]=\"model.commission\" type=\"text\"  name=\"province\">\n                 </div> \n                             \n              </div>           \n           </form>\n          \n          <div class=\"debug\">{{ model | json }}</div>  \n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], PostEditStyle);
    return PostEditStyle;
}());
exports.PostEditStyle = PostEditStyle;
//# sourceMappingURL=post-edit-style.js.map