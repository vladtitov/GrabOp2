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
var vos_1 = require("../models/vos");
var JoinUsService = (function () {
    function JoinUsService(http) {
        this.http = http;
        this.account = new vos_1.VOAccount({});
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
    JoinUsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JoinUsService);
    return JoinUsService;
}());
exports.JoinUsService = JoinUsService;
//# sourceMappingURL=login-service.js.map