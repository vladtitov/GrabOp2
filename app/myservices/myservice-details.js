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
var posts_edit_service_1 = require("../post-edit/posts-edit-service");
var MyServiceDetails = (function () {
    function MyServiceDetails(myService) {
        var _this = this;
        this.myService = myService;
        this.currentService = new vos_1.VOService({});
        myService.myService.subscribe(function (service) {
            _this.currentService = service;
            console.log(service);
        });
    }
    MyServiceDetails.prototype.ngOnChanges = function (obj) {
        // console.log(obj)
        // if(obj.my_service_id && this.my_service_id !== obj.my_service_id)  this.loadService();
    };
    MyServiceDetails.prototype.ngOnInit = function () {
        //this.loadService();
    };
    MyServiceDetails.prototype.loadService = function () {
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
        __metadata('design:type', Number)
    ], MyServiceDetails.prototype, "my_service_id", void 0);
    MyServiceDetails = __decorate([
        core_1.Component({
            selector: 'myservice-details',
            template: "\n<div class=\"container\">\n      <h1>Services Details</h1> \n           <div>{{currentService.title}}</div>\n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [posts_edit_service_1.PostEditService])
    ], MyServiceDetails);
    return MyServiceDetails;
}());
exports.MyServiceDetails = MyServiceDetails;
//# sourceMappingURL=myservice-details.js.map