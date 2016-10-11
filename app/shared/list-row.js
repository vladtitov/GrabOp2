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
 * Created by Vlad on 9/10/2016.
 */
var core_1 = require("@angular/core");
var ListRow = (function () {
    function ListRow() {
        this.size = 256;
    }
    ListRow.prototype.ngOnInit = function () {
    };
    ListRow.prototype.loadServices = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListRow.prototype, "my_item", void 0);
    ListRow = __decorate([
        core_1.Component({
            selector: 'list-row',
            template: "\n<div>     \n      \n      <li><span>{{tiitle}}</span> <span>{{total}}</span></li>\n                \n            \n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ListRow);
    return ListRow;
}());
exports.ListRow = ListRow;
//# sourceMappingURL=list-row.js.map