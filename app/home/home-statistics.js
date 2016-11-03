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
/**
 * Created by Vlad on 9/6/2016.
 */
var core_1 = require("@angular/core");
var user_service_1 = require("../myservices/user-service");
var HomeStatistics = (function () {
    function HomeStatistics(userService) {
        this.userService = userService;
    }
    HomeStatistics.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getStatistics().subscribe(function (res) {
            _this.statistics = res;
            console.log('statistics', _this.statistics);
        });
        // this.statistics = this.statistics.VOResalt;
    };
    HomeStatistics = __decorate([
        core_1.Component({
            selector: 'home-statistics',
            template: "\n<div class=\"statistics\">\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n          <div class=\"card text-md-center\">\n                <div class=\"card-header\">Profile Views</div>\n                <div class=\"card-block text-primary\"><h5>{{statistics?.profile_views}}</h5></div>          \n          </div>\n        </div>\n        <div class=\"col-md-2\">\n           <div class=\"card text-md-center\">\n                <div class=\"card-header\">Connections</div>\n                <div class=\"card-block text-primary\"><h5>{{statistics?.connections}}</h5></div>          \n           </div>\n        </div>\n        <div class=\"col-md-2\">\n           <div class=\"card text-md-center\">\n                <div class=\"card-header\">Trusted by</div>\n                <div class=\"card-block text-primary\"><h5>{{statistics?.trusted_by}}</h5></div>          \n          </div>\n        </div>\n        <div class=\"col-md-3\">\n           <div class=\"card text-md-center\">\n                <div class=\"card-header\">Total Alliance Members</div>\n                <div class=\"card-block text-primary\"><h5>{{statistics?.total_alliance_members}}</h5></div>          \n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"card text-md-center\">\n                <div class=\"card-header\">Total Sales</div>\n                <div class=\"card-block text-primary\"><h5>{{statistics?.total_sales}}</h5></div>          \n          </div>\n        </div>\n  </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], HomeStatistics);
    return HomeStatistics;
}());
exports.HomeStatistics = HomeStatistics;
//# sourceMappingURL=home-statistics.js.map