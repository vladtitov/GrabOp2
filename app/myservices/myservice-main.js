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
 * Created by Vlad on 9/9/2016.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var posts_edit_service_1 = require("../post-edit/posts-edit-service");
var MyServicesMain = (function () {
    function MyServicesMain(aroute, router, myService) {
        this.aroute = aroute;
        this.router = router;
        this.myService = myService;
    }
    MyServicesMain.prototype.ngOnInit = function () {
        var _this = this;
        this.aroute.params.subscribe(function (params) {
            var id = +params['id'];
            if (isNaN(id))
                return;
            // this.currentServiceId = id;
            _this.myService.selectServiceById(id);
        });
        // this.loadServices();
    };
    MyServicesMain.prototype.loadServices = function () {
        /* this.myService.getMyServices(1).subscribe(
           services=>{
             console.log(services);
           }
         )*/
    };
    MyServicesMain = __decorate([
        core_1.Component({
            template: "\n<div class=\"container\">\n      <h1>Services Main</h1>\n      <myservice-details [my_service_id]=\"currentServiceId\"></myservice-details>\n      <post-edit-tools></post-edit-tools>\n      \n       <my-profile></my-profile>\n       <members-list [my_type]=\"members\"></members-list>\n        <members-list [my_type]=\"recommended\"></members-list>\n      <posts-list></posts-list>\n           \n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, posts_edit_service_1.PostEditService])
    ], MyServicesMain);
    return MyServicesMain;
}());
exports.MyServicesMain = MyServicesMain;
//# sourceMappingURL=myservice-main.js.map