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
var HomeStatistics = (function () {
    function HomeStatistics() {
    }
    HomeStatistics = __decorate([
        core_1.Component({
            selector: 'home-statistics',
            template: "\n<div class=\"statistics\">\n<div>\n          <div class=\"card\">\n                <div class=\"card-header\">Profile Views</div>\n                <div class=\"card-block\"></div>          \n          </div>\n           <div class=\"card\">\n                <div class=\"card-header\">Connections</div>\n                <div class=\"card-block\"></div>          \n          </div>\n           <div class=\"card\">\n                <div class=\"card-header\">Trusted by</div>\n                <div class=\"card-block\"></div>          \n          </div>\n           <div class=\"card\">\n                <div class=\"card-header\">Total Alliance Members</div>\n                <div class=\"card-block\"></div>          \n          </div>  \n          <div class=\"card\">\n                <div class=\"card-header\">Total Sales</div>\n                <div class=\"card-block\"></div>          \n          </div>  \n   </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], HomeStatistics);
    return HomeStatistics;
}());
exports.HomeStatistics = HomeStatistics;
//# sourceMappingURL=home-statistics.js.map