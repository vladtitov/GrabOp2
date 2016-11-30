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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var vos_1 = require("../models/vos");
var rxjs_1 = require("rxjs");
var CardService = (function () {
    // private userSub:BehaviorSubject<VOUserExt>;
    function CardService(http) {
        this.http = http;
        this.userSub = new rxjs_1.BehaviorSubject(new vos_1.VOUserExt({}));
        this.user$ = this.userSub.asObservable();
        // console.log('person service init');
        this.getUser();
    }
    CardService.prototype.getUser = function () {
        // var url:string = VOSettings.server+'/profiles/'+VOSettings.user.id+'?format=json&expanded=true';
        var _this = this;
        var url = vos_1.VOSettings.login + '/user';
        this.http.get(url)
            .map(function (res) { return new vos_1.VOUser(res.json()); })
            .catch(function (err) { return _this.handleError(err); }).subscribe(function (res) {
            _this._user = res;
            _this.userSub.next(res);
        });
    };
    CardService.prototype.saveUser = function () {
        // var url:string = VOSettings.server+'/profiles/'+VOSettings.user.id+'?format=json&expanded=true';
        var url = vos_1.VOSettings.login + '/user';
        return this.http.post(url, this._user).toPromise()
            .then(function (res) { return new vos_1.VOResult(res.json()); });
    };
    CardService.prototype.handleError = function (error) {
        console.log(error);
        //this.id++;
        // if(this.id<1000) this.loadProfile();
        var errMsg = (error.message) ? error.message :
            console.error(error);
        return Observable_1.Observable.throw(errMsg);
    };
    CardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CardService);
    return CardService;
}());
exports.CardService = CardService;
//# sourceMappingURL=card-service.js.map