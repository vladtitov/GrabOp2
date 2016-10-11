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
 */ var core_1 = require("@angular/core");
var posts_edit_service_1 = require("./posts-edit-service");
var PostEditTools = (function () {
    function PostEditTools(myService) {
        var _this = this;
        this.myService = myService;
        myService.myService.subscribe(function (service) {
            _this.currentService = service;
            console.log(service);
        });
    }
    PostEditTools.prototype.ngOnInit = function () {
        //this.loadService();
    };
    PostEditTools = __decorate([
        core_1.Component({
            selector: 'post-edit-tools',
            template: "\n<div class=\"myservice-tools\">      \n      <button class=\"btn btn-primary\" >edit</button>\n       <button class=\"btn btn-primary\" >edit alliance</button>\n        <button class=\"btn btn-primary\" >duplicate</button>\n         <button class=\"btn btn-primary\" >hide service</button>\n         <button class=\"btn btn-default\" >delete service</button>    \n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [posts_edit_service_1.PostEditService])
    ], PostEditTools);
    return PostEditTools;
}());
exports.PostEditTools = PostEditTools;
//# sourceMappingURL=post-edit-tools.js.map