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
var MyMdImage = (function () {
    function MyMdImage(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.shape = 'round';
        this.size = '40x40';
    }
    MyMdImage.prototype.ngOnInit = function () {
        this.classNames = 's' + this.size + ' ' + this.shape;
        // this.renderer.setElementStyle(this.el.nativeElement,'bacground-image',this.url);
        // this.renderer.setElementClass(this.el.nativeElement,this.size,false);
        // this.renderer.setElementClass(this.el.nativeElement,this.shape,true);
        console.log(this.classNames);
    };
    __decorate([
        core_1.Input("my-md-image"), 
        __metadata('design:type', String)
    ], MyMdImage.prototype, "url", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MyMdImage.prototype, "shape", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MyMdImage.prototype, "size", void 0);
    MyMdImage = __decorate([
        core_1.Directive({
            selector: '[my-md-image]',
            host: {
                '[class.className]': 'className',
                '[class]': 'classNames',
                '[style.background-image]': "url"
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MyMdImage);
    return MyMdImage;
}());
exports.MyMdImage = MyMdImage;
//# sourceMappingURL=md-image.js.map