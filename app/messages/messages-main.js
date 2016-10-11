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
var MessagesMain = (function () {
    function MessagesMain(router, aroute) {
        this.router = router;
        this.aroute = aroute;
    }
    MessagesMain.prototype.ngOnInit = function () {
        var _this = this;
        this.aroute.params.subscribe(function (params) {
            console.log(params);
            _this.topic = params['id'];
        });
    };
    MessagesMain = __decorate([
        core_1.Component({
            template: "\n<div class=\"container\">\n      <h1>Messages Main</h1>\n      \n      <div>\n          <input type=\"search\" placeholder=\"Search\"/>      \n      </div>\n      <div>\n      Messages list\n        \n      </div>\n      <div>\n            Message\n      </div>\n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], MessagesMain);
    return MessagesMain;
}());
exports.MessagesMain = MessagesMain;
//# sourceMappingURL=messages-main.js.map