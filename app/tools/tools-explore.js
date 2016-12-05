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
var ToolsExplore = (function () {
    function ToolsExplore() {
    }
    ToolsExplore.prototype.ngOnInit = function () {
    };
    ToolsExplore.prototype.onDocClick = function (evt) {
        if (this.isVisible)
            this.isVisible = false;
    };
    ToolsExplore.prototype.onClick = function (evt) {
        var _this = this;
        if (!this.isVisible)
            setTimeout(function () {
                _this.isVisible = true;
            }, 50);
    };
    ToolsExplore = __decorate([
        core_1.Component({
            selector: 'tools-explore',
            template: "\n<div>\n    <div class=\"dropdown\" [class.open]=\"isVisible\">\n        <a class=\"btn\" (click)=\"onClick()\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">explore</a>     \n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n            <h6><span>Business Style</span></h6>\n            <a class=\"dropdown-item\" [routerLink]=\"['/post-edit/basic',{type:'need'}]\"  routerLinkActive=\"active\">Business Partnership</a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/post-edit/basic',{type:'offer'}]\" routerLinkActive=\"active\">Exchange</a> \n            <a class=\"dropdown-item\" href=\"#\">Internship</a>\n            <a class=\"dropdown-item\" href=\"#\">Donate</a>\n            <a class=\"dropdown-item\" href=\"#\">Money</a>\n            <h6><span>Categories</span></h6>\n            <a class=\"dropdown-item fa fa-caret-up\" href=\"#\"></a>\n            <a class=\"dropdown-item\" href=\"#\">Item 1</a>\n            <a class=\"dropdown-item\" href=\"#\">Item 2</a>\n            <a class=\"dropdown-item\" href=\"#\">Item 3</a>\n            <a class=\"dropdown-item fa fa-caret-down\" href=\"#\"></a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n    </div>\n</div>\n",
            host: {
                '(document:click)': 'onDocClick($event)',
            },
            styles: ["\n          h6 {\n            position: relative;\n            overflow: hidden;\n            font-size: 12px;\n            /*font-weight: normal;*/\n            text-align: center;\n          }\n          h6 > span {\n            display: inline-block;\n            margin: 0 .4em;\n          }\n          h6 > span:before,\n          h6 > span:after {\n            content: '';\n            position: absolute;\n            width: 100%;\n            border-top: 2px solid #4e4e4e;\n            margin-top: .6em;\n          }\n          h6 > span:before {\n            margin-left: -102%;\n          }\n          h6 > span:after {\n            margin-left: 2%;\n          }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolsExplore);
    return ToolsExplore;
}());
exports.ToolsExplore = ToolsExplore;
//# sourceMappingURL=tools-explore.js.map