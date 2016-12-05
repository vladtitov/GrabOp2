///<reference path="../../typings/promise.d.ts"/>
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
var Subject_1 = require('rxjs/Subject');
var vos_1 = require("../models/vos");
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.postSub = new Subject_1.Subject();
        this.posts$ = this.postSub.asObservable();
        // this.get_AllPosts();
        console.warn('SearchService');
        // console.log('SearchService');
        this.myServicesSubject = new Subject_1.Subject();
        this.myServices = this.myServicesSubject.asObservable();
        this.myServiceSubject = new Subject_1.Subject();
        this.myService = this.myServiceSubject.asObservable();
        // this.loadServices();
    }
    SearchService.prototype.searchPosts = function (search) {
        console.log('seach -> ', search);
        // if(!Array.isArray(this.allPosts)){
        //     // console.error('this.allPosts not array');
        //     this.currentSearch = search;
        //     this.get_AllPosts();
        //     return;
        // }
        this.posts = this.allPosts.filter(function (post) {
            // title?      +         +      +
            // pattern, country, province, city
            //      +           +       +         +         +
            // partnership, exchange, donate, internship, money
            //          fixed              hourlyRate                 commission
            // fixedFrom - fixedTo, hourlyFrom - hourlyTo, commissionFrom - commissionTo
            for (var key in search) {
                switch (key) {
                    case 'pattern':
                        // if(search['pattern'] === "") break;
                        // console.log('title ', post['title'].indexOf((search['pattern'])));
                        if (post['title'].indexOf((search['pattern'])) < 0)
                            return false;
                        break;
                    case 'country': // if(search[key] != post[key]) return false; break;
                    case 'province': // if(search[key] != post[key]) return false; break;
                    case 'city':
                        // if(search[key] === "") break;
                        if (search[key] !== post[key])
                            return false;
                        break;
                    case 'partnership':
                    case 'exchange':
                    case 'donate':
                    case 'internship':
                    case 'money':
                        if (search[key]) {
                            if (search[key] != post[key])
                                return false;
                        }
                        // else {
                        //     console.log('post[key]', post[key]);
                        //     if(search[key] != post[key] && post[key] != null) return false;
                        // }
                        break;
                    case 'fixedFrom':
                        if ('fixedTo' in search) {
                            if (post['fixed'] < search['fixedFrom'] || post['fixed'] > search['fixedTo'])
                                return false;
                        }
                        else {
                            if (post['fixed'] < search['fixedFrom'])
                                return false;
                        }
                        break;
                    case 'fixedTo':
                        if ('fixedFrom' in search) {
                            if (post['fixed'] < search['fixedFrom'] || post['fixed'] > search['fixedTo'])
                                return false;
                        }
                        else {
                            if (post['fixed'] > search['fixedTo'])
                                return false;
                        }
                        break;
                    case 'hourlyFrom':
                        if ('hourlyTo' in search) {
                            if (post['hourlyRate'] < search['hourlyFrom'] || post['hourlyRate'] > search['hourlyTo'])
                                return false;
                        }
                        else {
                            if (post['hourlyRate'] < search['hourlyFrom'])
                                return false;
                        }
                        break;
                    case 'hourlyTo':
                        if ('hourlyFrom' in search) {
                            if (post['hourlyRate'] < search['hourlyFrom'] || post['hourlyRate'] > search['hourlyTo'])
                                return false;
                        }
                        else {
                            if (post['hourlyRate'] > search['hourlyTo'])
                                return false;
                        }
                        break;
                    case 'commissionFrom':
                        if ('commissionTo' in search) {
                            if (post['commission'] < search['commissionFrom'] || post['commission'] > search['commissionTo'])
                                return false;
                        }
                        else {
                            if (post['commission'] < search['commissionFrom'])
                                return false;
                        }
                        break;
                    case 'commissionTo':
                        if ('commissionFrom' in search) {
                            if (post['commission'] < search['commissionFrom'] || post['commission'] > search['commissionTo'])
                                return false;
                        }
                        else {
                            if (post['commission'] > search['commissionTo'])
                                return false;
                        }
                        break;
                    default:
                        return true;
                }
            }
            return true;
        });
        this.postSub.next(this.posts);
        console.log('this.posts', this.posts);
    };
    // checkPost(post:VOPost, search:VOSearch){
    //     for(var key in search){
    //         if(search[key] !== post[key]) return false;
    //     }
    //     return true;
    // }
    SearchService.prototype.get_AllPosts = function () {
        var _this = this;
        var url = vos_1.VOSettings.posts;
        this.http.get(url)
            .map(function (res) {
            // console.log('res:Res', res.json().map(function(item){ return new VOPost(item)}));
            return res.json().map(function (item) {
                return new vos_1.VOPost(item);
            });
        })
            .catch(this.handleError)
            .subscribe(function (res) {
            _this.posts = _this.allPosts = res;
            _this.postSub.next(res);
            // if(this.currentSearch) this.searchPosts(this.currentSearch);
            console.log('this.posts', _this.posts);
        });
    };
    // get_AllPosts():Observable<VOPost[]>{
    //     var url:string = VOSettings.posts;
    //     return this.http.get(url)
    //             .map((res:Response)=>{
    //                 // console.log('res:Res', res.json().map(function(item){ return new VOPost(item)}));
    //                 return res.json().map(function(item){ return new VOPost(item)});
    //             })
    //             .catch(this.handleError)
    // }
    SearchService.prototype.getAllPosts = function () {
        var url = vos_1.VOSettings.posts;
        return this.http.get(url)
            .map(function (res) {
            return res.json().map(function (item) {
                return new vos_1.VOPost(item);
            });
        })
            .catch(this.handleError);
    };
    SearchService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            console.error(error);
        return Observable_1.Observable.throw(errMsg);
    };
    SearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search-service.js.map