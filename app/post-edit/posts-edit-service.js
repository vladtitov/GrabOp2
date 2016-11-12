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
var PostEditService = (function () {
    function PostEditService(http) {
        this.http = http;
        console.log('PostsEditService');
        this.myServicesSubject = new Subject_1.Subject();
        this.myServices = this.myServicesSubject.asObservable();
        this.myServiceSubject = new Subject_1.Subject();
        this.myService = this.myServiceSubject.asObservable();
        // this.loadServices();
    }
    PostEditService.prototype.loadServices = function () {
        var _this = this;
        var url = vos_1.VOSettings.server + '/profiles/' + vos_1.VOSettings.user.id;
        this.http.get(url)
            .map(function (res) { return res.json().map(function (item) { return new vos_1.VOService(item); }); })
            .catch(this.handleError).subscribe(function (res) {
            _this.__posts = res;
            _this.myServicesSubject.next(res);
            if (_this.selectedId)
                _this._selectById();
        });
    };
    PostEditService.prototype.getAllPosts = function () {
        var url = vos_1.VOSettings.posts;
        return this.http.get(url)
            .map(function (res) {
            return res.json().map(function (item) { return new vos_1.VOPost(item); });
        })
            .catch(this.handleError);
    };
    PostEditService.prototype.getPosts = function () {
        var url = vos_1.VOSettings.server + 'posts';
        return this.http.get(url)
            .map(function (res) {
            return res.json().map(function (item) { return new vos_1.VOPost(item); });
        })
            .catch(this.handleError);
    };
    PostEditService.prototype.getPostById = function (id) {
        console.log('get post by id' + id);
        var url = vos_1.VOSettings.server + '/post/' + id;
        return this.http.get(url)
            .map(function (res) { return new vos_1.VOPost(res.json()); })
            .catch(this.handleError);
    };
    PostEditService.prototype.deleteAttachment = function (psot_id, id) {
        var url = vos_1.VOSettings.server + 'post/' + psot_id + '/attachment/' + id;
        return this.http.delete(url).toPromise()
            .then(function (res) { return new vos_1.VOResult(res.json()); });
    };
    PostEditService.prototype.getAttachments = function (post_id) {
        var url = vos_1.VOSettings.server + '/post/' + post_id + '/attachments';
        return this.http.get(url).toPromise()
            .then(function (res) {
            return res.json().map(function (item) { return new vos_1.VOImage(item); });
        });
    };
    PostEditService.prototype.saveAttachment = function (data, post_id) {
        var url = vos_1.VOSettings.server + 'post/' + post_id + '/attachment/' + data.id;
        console.log(url, data);
        return this.http.post(url, data).toPromise()
            .then(function (res) {
            console.log(res);
            return new vos_1.VOResult(res.json());
        });
    };
    PostEditService.prototype.getCategories = function () {
        var url = vos_1.VOSettings.server + '/posts-categories';
        return this.http.get(url).toPromise()
            .then(function (res) {
            return res.json().map(function (item) { return new vos_1.VOCategory(item); });
        });
    };
    PostEditService.prototype._selectById = function () {
        var id = this.selectedId;
        if (this.__posts) {
            var serv = this.__posts.filter(function (item) { return item.id === id; });
            if (serv.length)
                this.myServiceSubject.next(serv[0]);
        }
    };
    PostEditService.prototype.selectServiceById = function (id) {
        this.selectedId = id;
        this._selectById();
    };
    PostEditService.prototype.updatePost = function (post) {
        // var url:string = VOSettings.server+'/post/'+post.id;
        var url = vos_1.VOSettings.posts;
        //  var post:VOPost = this._currentService;
        console.log(url, post);
        return this.http.patch(url, post)
            .map(function (res) {
            console.log(res);
            return new vos_1.VOResult(res.json());
        }).catch(this.handleError);
    };
    PostEditService.prototype.insertPost = function (post) {
        // var url:string = VOSettings.server+'/post/'+post.id;
        var url = vos_1.VOSettings.posts;
        //  var post:VOPost = this._currentService;
        console.log(url, post);
        return this.http.put(url, post)
            .map(function (res) {
            console.log(res);
            return new vos_1.VOResult(res.json());
        }).catch(this.handleError);
    };
    PostEditService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            console.error(error);
        return Observable_1.Observable.throw(errMsg);
    };
    PostEditService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostEditService);
    return PostEditService;
}());
exports.PostEditService = PostEditService;
//# sourceMappingURL=posts-edit-service.js.map