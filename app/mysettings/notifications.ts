import {Component, OnInit, Input} from "@angular/core";
import {VOAccountSettings} from "../models/vos";
import {JoinUsService} from "../join-us/login-service";

@Component({
    selector:'notifications',
    template:`
<div>
        <div class="col-sm-6">
            <h5>Manage Your Notifications</h5>
            <div class="card-block">
                <div class="row">
                    <div class="col-sm-6 offset-sm-6 text-sm-center">Send an email notification</div>
                </div>
                <form #f="ngForm"  autocomplete="off" novalidate>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Connection requests</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input [(ngModel)]="accountSettings.connection_requests"
                                 type="checkbox"
                                 class="custom-control-input"
                                 id="connection_requests"
                                 name="connection_requests">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>New messages</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input [(ngModel)]="accountSettings.new_messages"
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="new_messages"
                                    name="new_messages">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Alliance notifications</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input [(ngModel)]="accountSettings.alliance_notifications"
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="alliance_notifications"
                                    name="alliance_notifications">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Task notifications</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input [(ngModel)]="accountSettings.task_notifications"
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="task_notifications"
                                    name="task_notifications">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Service notifications</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input [(ngModel)]="accountSettings.service_notifications"
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="service_notifications"
                                    name="service_notifications">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <button type="button" class="btn btn-primary"
                             [disabled] ="!f.dirty"
                             (click)="onSaveClick()">save</button>
                        </div>
                        <div *ngIf="myMsg" class="col-sm-6 text-sm-right">{{myMsg}}</div>
                    </div>
                </form>
                <div class="debug"> {{ accountSettings | json }} </div>
            </div>
        </div>
</div>
`
    ,styles:[`
        .mb0 {
             margin-bottom: 0; 
        }
`]
})
export class Notifications implements OnInit{
    myMsg:string;

    @Input() accountSettings:VOAccountSettings;
    // accountSettings:VOAccountSettings = new VOAccountSettings({});

    constructor(private accountService:JoinUsService){
        // this.accountService.getSettings().then(
        //     res=>{
        //         this.accountSettings = res;
        //         console.log('accountSettings', this.accountSettings);
        //     });
    }

    ngOnInit():void{}

    onSaveClick(){
        this.accountService.setSettings(this.accountSettings).then(
            res=>{
                if(res.success){
                    this.myMsg = res.message;
                } else {
                    this.myMsg = res.message;
                }
                setTimeout(()=>{this.myMsg=''},10000);
                console.log('accountSettings', this.accountSettings);
            });
    }
}