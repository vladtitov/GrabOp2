/**
 * Created by Vlad on 9/6/2016.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var VOCategory = (function () {
    function VOCategory(obj) {
        for (var str in obj)
            this[str] = obj[str];
    }
    return VOCategory;
}());
exports.VOCategory = VOCategory;
var VONavigationItem = (function () {
    function VONavigationItem(obj) {
        for (var str in obj)
            this[str] = obj[str];
    }
    return VONavigationItem;
}());
exports.VONavigationItem = VONavigationItem;
var VONavigation = (function () {
    function VONavigation(obj) {
        for (var str in obj)
            this[str] = obj[str];
        this.list = this.list.map(function (item) { return new VONavigationItem(item); });
    }
    return VONavigation;
}());
exports.VONavigation = VONavigation;
var VOImage = (function () {
    function VOImage(data) {
        for (var str in data)
            this[str] = data[str];
    }
    VOImage.THUMB = 't_thumbnail';
    VOImage.SMALL = 't_small';
    VOImage.MEDIUM = 't_medium';
    VOImage.LARGE = 't_large';
    VOImage.XLARGE = 't_xlarge';
    return VOImage;
}());
exports.VOImage = VOImage;
var VOAttachment = (function () {
    function VOAttachment(data) {
        for (var str in data)
            this[str] = data[str];
    }
    return VOAttachment;
}());
exports.VOAttachment = VOAttachment;
var VOMembership = (function () {
    function VOMembership() {
    }
    return VOMembership;
}());
exports.VOMembership = VOMembership;
var VOMember = (function () {
    function VOMember(data) {
        for (var str in data)
            this[str] = data[str];
    }
    return VOMember;
}());
exports.VOMember = VOMember;
var VOAlliance = (function () {
    function VOAlliance(data) {
        for (var str in data)
            this[str] = data[str];
    }
    return VOAlliance;
}());
exports.VOAlliance = VOAlliance;
var VOPost = (function () {
    function VOPost(obj) {
        for (var str in obj)
            this[str] = obj[str];
    }
    VOPost.NEED = 'need';
    VOPost.OFFER = 'offer';
    return VOPost;
}());
exports.VOPost = VOPost;
var VOService = (function (_super) {
    __extends(VOService, _super);
    function VOService(obj) {
        _super.call(this, obj);
        if (this.alliance)
            this.alliance = new VOAlliance(this.alliance);
        if (this.recommenderUser)
            this.recommenderUser = new VOMember(this.recommenderUser);
        if (this.user)
            this.user = new VOMember(this.user);
    }
    return VOService;
}(VOPost));
exports.VOService = VOService;
var VOAccount = (function () {
    function VOAccount(obj) {
        for (var str in obj)
            this[str] = obj[str];
    }
    return VOAccount;
}());
exports.VOAccount = VOAccount;
var VOUser = (function () {
    function VOUser(obj) {
        for (var str in obj)
            this[str] = obj[str];
        //this.profile_pic= VOSettings.images_small+this.profile_pic;
    }
    VOUser.ADMIN = 'admin';
    VOUser.MEMBER = 'member';
    return VOUser;
}());
exports.VOUser = VOUser;
var VOUserExt = (function (_super) {
    __extends(VOUserExt, _super);
    function VOUserExt(obj) {
        _super.call(this, obj);
    }
    return VOUserExt;
}(VOUser));
exports.VOUserExt = VOUserExt;
var VOSettings = (function () {
    function VOSettings() {
    }
    Object.defineProperty(VOSettings, "user", {
        get: function () {
            if (!VOSettings._user)
                VOSettings._user = new VOUser({ id: 154 });
            return VOSettings._user;
        },
        set: function (user) { VOSettings._user = user; },
        enumerable: true,
        configurable: true
    });
    ;
    VOSettings.saveVisit = function (loc) { localStorage.setItem('lastVisit', JSON.stringify(loc)); };
    VOSettings.getVisit = function () { return JSON.parse(localStorage.getItem('lastVisit')); };
    //static server:string = 'http://grabopapi2dev.us-west-2.elasticbeanstalk.com/api/v1';
    VOSettings.posts = 'api/posts.php';
    VOSettings.server = 'api/service.php?api=';
    VOSettings.upload = 'api/upload.php';
    VOSettings.login = 'api/login.php?api=';
    VOSettings.images = 'http://res.cloudinary.com/al3kosvh/image/upload/';
    VOSettings.SMALL = 't_thumbnail';
    VOSettings.images_small = 'http://res.cloudinary.com/al3kosvh/image/upload/';
    VOSettings.statistics = 'api/get_statistics.php';
    return VOSettings;
}());
exports.VOSettings = VOSettings;
var VOResult = (function () {
    function VOResult(obj) {
        for (var str in obj)
            this[str] = obj[str];
    }
    return VOResult;
}());
exports.VOResult = VOResult;
var VOSearch = (function () {
    function VOSearch(obj) {
        for (var str in obj)
            this[str] = obj[str];
    }
    return VOSearch;
}());
exports.VOSearch = VOSearch;
//# sourceMappingURL=vos.js.map