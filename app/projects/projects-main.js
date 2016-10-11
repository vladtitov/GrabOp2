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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProjectsMain = (function () {
    function ProjectsMain(router, aroute) {
        this.router = router;
        this.aroute = aroute;
    }
    ProjectsMain.prototype.ngOnInit = function () {
        var _this = this;
        this.aroute.params.subscribe(function (params) {
            console.log(params);
            _this.topic = params['id'];
        });
    };
    ProjectsMain = __decorate([
        core_1.Component({
            template: "\n<div>\n        <h2>Projects Main</h2>\n         <nav>\n              <a routerLink=\"../invitations\" routerLinkActive=\"menu-active\" >Invitations</a>\n              <a routerLink=\"../joined\" routerLinkActive=\"menu-active\" >Joined</a>\n              <a routerLink=\"../created\" routerLinkActive=\"menu-active\" >Created</a>\n      </nav>\n      <div>\n        \n      </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], ProjectsMain);
    return ProjectsMain;
}());
exports.ProjectsMain = ProjectsMain;
//# sourceMappingURL=projects-main.js.map