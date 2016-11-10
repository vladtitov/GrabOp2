/**
 * Created by Vlad on 9/9/2016.
 */
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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var vos_1 = require("../models/vos");
var JoinUsService = (function () {
    function JoinUsService(http) {
        this.http = http;
        this.account = new vos_1.VOAccount({});
        this.accountSettingsSub = new BehaviorSubject_1.BehaviorSubject(new vos_1.VOAccountSettings({}));
        this.accountSettings$ = this.accountSettingsSub.asObservable();
        this.get_Settings();
    }
    JoinUsService.prototype.exists = function (value, column) {
        var url = vos_1.VOSettings.login + '/exists/' + column;
        return this.http.post(url, value).toPromise().then(function (res) { return new vos_1.VOResult(res.json()); });
    };
    JoinUsService.prototype.confirmPassword = function (password, ctrl) {
        return password === ctrl.value ? null : { confirmPassword: false };
    };
    JoinUsService.prototype.createAccount = function (account) {
        this.account = account;
        var url = vos_1.VOSettings.login + '/create';
        console.log(url, account);
        return this.http.post(url, account).toPromise()
            .then(function (resp) {
            return new vos_1.VOResult(resp.json());
        });
    };
    JoinUsService.prototype.login = function (account) {
        this.account = account;
        var url = vos_1.VOSettings.login + '/auth';
        console.log(url, account);
        return this.http.post(url, account).toPromise()
            .then(function (resp) {
            return new vos_1.VOResult(resp.json());
        });
    };
    JoinUsService.prototype.getAccount = function () {
        var url = vos_1.VOSettings.login + '/account';
        console.log(url);
        return this.http.get(url).toPromise()
            .then(function (res) {
            return new vos_1.VOAccount(res.json());
        });
    };
    JoinUsService.prototype.updateAccount = function (account, column) {
        // this.account = account;
        var url = vos_1.VOSettings.login + '/update/' + column;
        console.log(url, account);
        return this.http.post(url, account).toPromise()
            .then(function (resp) {
            return new vos_1.VOResult(resp.json());
        });
    };
    JoinUsService.prototype.get_Settings = function () {
        var _this = this;
        var url = vos_1.VOSettings.settings;
        this.http.get(url)
            .map(function (res) { return new vos_1.VOAccountSettings(res.json()); })
            .catch(function (err) { return _this.handleError(err); })
            .subscribe(function (res) {
            _this.accountSettings = res;
            _this.accountSettingsSub.next(res);
        });
    };
    JoinUsService.prototype.getSettings = function () {
        var url = vos_1.VOSettings.settings;
        return this.http.get(url).toPromise()
            .then(function (res) {
            return new vos_1.VOAccountSettings(res.json());
        });
    };
    // getSettings(model:VOAccountSettings):Observable<VOAccountSettings>{
    //     return this.http.get('server/get_icons3.php').map((res:any)=>{
    //         return new VOIcons(res.json());
    //     });
    // }
    JoinUsService.prototype.setSettings = function (accountSettings) {
        var url = vos_1.VOSettings.settings;
        return this.http.post(url, accountSettings).toPromise()
            .then(function (resp) {
            return new vos_1.VOResult(resp.json());
        });
    };
    JoinUsService.prototype.handleError = function (error) {
        console.log(error);
        //this.id++;
        // if(this.id<1000) this.loadProfile();
        var errMsg = (error.message) ? error.message :
            console.error(error);
        return Observable_1.Observable.throw(errMsg);
    };
    JoinUsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JoinUsService);
    return JoinUsService;
}());
exports.JoinUsService = JoinUsService;
//# sourceMappingURL=login-service.js.map