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
var vos_1 = require("../models/vos");
var login_service_1 = require("../join-us/login-service");
var Notifications = (function () {
    // accountSettings:VOAccountSettings = new VOAccountSettings({});
    function Notifications(accountService) {
        this.accountService = accountService;
        // this.accountService.getSettings().then(
        //     res=>{
        //         this.accountSettings = res;
        //         console.log('accountSettings', this.accountSettings);
        //     });
    }
    Notifications.prototype.ngOnInit = function () { };
    Notifications.prototype.onSaveClick = function () {
        var _this = this;
        this.accountService.setSettings(this.accountSettings).then(function (res) {
            if (res.success) {
                _this.myMsg = res.message;
            }
            else {
                _this.myMsg = res.message;
            }
            setTimeout(function () { _this.myMsg = ''; }, 10000);
            console.log('accountSettings', _this.accountSettings);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vos_1.VOAccountSettings)
    ], Notifications.prototype, "accountSettings", void 0);
    Notifications = __decorate([
        core_1.Component({
            selector: 'notifications',
            template: "\n<div>\n        <div class=\"col-sm-6\">\n            <h5>Manage Your Notifications</h5>\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6 offset-sm-6 text-sm-center\">Send an email notification</div>\n                </div>\n                <form #f=\"ngForm\"  autocomplete=\"off\" novalidate>\n                    <div class=\"form-group mb0 row has-warning\">\n                        <label class=\"col-sm-8 text-sm-left\"><strong>Connection requests</strong></label>\n                        <div class=\"col-sm-4 text-sm-center\">\n                          <label class=\"custom-control custom-checkbox\">\n                            <input [(ngModel)]=\"accountSettings.connection_requests\"\n                                 type=\"checkbox\"\n                                 class=\"custom-control-input\"\n                                 id=\"connection_requests\"\n                                 name=\"connection_requests\">\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description\">YES</span>\n                          </label>\n                        </div>\n                    </div>\n                    <div class=\"form-group mb0 row has-warning\">\n                        <label class=\"col-sm-8 text-sm-left\"><strong>New messages</strong></label>\n                        <div class=\"col-sm-4 text-sm-center\">\n                          <label class=\"custom-control custom-checkbox\">\n                            <input [(ngModel)]=\"accountSettings.new_messages\"\n                                    type=\"checkbox\"\n                                    class=\"custom-control-input\"\n                                    id=\"new_messages\"\n                                    name=\"new_messages\">\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description\">YES</span>\n                          </label>\n                        </div>\n                    </div>\n                    <div class=\"form-group mb0 row has-warning\">\n                        <label class=\"col-sm-8 text-sm-left\"><strong>Alliance notifications</strong></label>\n                        <div class=\"col-sm-4 text-sm-center\">\n                          <label class=\"custom-control custom-checkbox\">\n                            <input [(ngModel)]=\"accountSettings.alliance_notifications\"\n                                    type=\"checkbox\"\n                                    class=\"custom-control-input\"\n                                    id=\"alliance_notifications\"\n                                    name=\"alliance_notifications\">\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description\">YES</span>\n                          </label>\n                        </div>\n                    </div>\n                    <div class=\"form-group mb0 row has-warning\">\n                        <label class=\"col-sm-8 text-sm-left\"><strong>Task notifications</strong></label>\n                        <div class=\"col-sm-4 text-sm-center\">\n                          <label class=\"custom-control custom-checkbox\">\n                            <input [(ngModel)]=\"accountSettings.task_notifications\"\n                                    type=\"checkbox\"\n                                    class=\"custom-control-input\"\n                                    id=\"task_notifications\"\n                                    name=\"task_notifications\">\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description\">YES</span>\n                          </label>\n                        </div>\n                    </div>\n                    <div class=\"form-group mb0 row has-warning\">\n                        <label class=\"col-sm-8 text-sm-left\"><strong>Service notifications</strong></label>\n                        <div class=\"col-sm-4 text-sm-center\">\n                          <label class=\"custom-control custom-checkbox\">\n                            <input [(ngModel)]=\"accountSettings.service_notifications\"\n                                    type=\"checkbox\"\n                                    class=\"custom-control-input\"\n                                    id=\"service_notifications\"\n                                    name=\"service_notifications\">\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description\">YES</span>\n                          </label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <button type=\"button\" class=\"btn btn-primary\"\n                             [disabled] =\"!f.dirty\"\n                             (click)=\"onSaveClick()\">save</button>\n                        </div>\n                        <div *ngIf=\"myMsg\" class=\"col-sm-6 text-sm-right\">{{myMsg}}</div>\n                    </div>\n                </form>\n                <div class=\"debug\"> {{ accountSettings | json }} </div>\n            </div>\n        </div>\n</div>\n",
            styles: ["\n        .mb0 {\n             margin-bottom: 0; \n        }\n"]
        }), 
        __metadata('design:paramtypes', [login_service_1.JoinUsService])
    ], Notifications);
    return Notifications;
}());
exports.Notifications = Notifications;
//# sourceMappingURL=notifications.js.map