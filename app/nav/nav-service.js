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
 * Created by Vlad on 9/6/2016.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var vos_1 = require("../models/vos");
var router_1 = require("@angular/router");
var NavService = (function () {
    function NavService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.change = new core_1.EventEmitter();
        this.router.events.subscribe(function (evt) { return _this.hideMenu(); });
    }
    /*
      getNavigation():Observable<VONavigation> {
    
        return this.http.get('api/navigation.json').map((data:any)=>{
          return new VONavigation(data);
        }).catch(this.handleError);
    
      }*/
    NavService.prototype.getNavigationP = function () {
        return this.http.get('api/data/navigation.json').map(function (data) { return new vos_1.VONavigation(data.json()); }).toPromise();
    };
    NavService.prototype.showMenu = function () {
        if (!this.isVisible) {
            this.isVisible = true;
            this.change.emit({ visible: this.isVisible });
        }
    };
    NavService.prototype.hideMenu = function () {
        if (this.isVisible) {
            this.isVisible = false;
            this.change.emit({ visible: this.isVisible });
        }
    };
    NavService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], NavService);
    return NavService;
}());
exports.NavService = NavService;
//# sourceMappingURL=nav-service.js.map