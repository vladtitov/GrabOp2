import {Component, OnInit, Input} from "@angular/core";
import {VOAccountSettings} from "../models/vos";
import {JoinUsService} from "../join-us/login-service";

@Component({
    selector:'privacy-settings',
    template:`
<div>
        <div class="col-sm-6">
            <h5>Privacy settings</h5>
            <div class="card-block">
                <div class="row">
                    <div class="col-sm-5 offset-sm-7 text-sm-center">Make visible to the public</div>
                </div>
                <form #f="ngForm"  autocomplete="off" novalidate>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Phone Number</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input [(ngModel)]="accountSettings.phone_number"
                                type="checkbox" 
                                class="custom-control-input"
                                id="phone_number"
                                name="phone_number">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Email Addres</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input [(ngModel)]="accountSettings.email_addres"
                                type="checkbox" 
                                class="custom-control-input"
                                id="email_addres"
                                name="email_addres">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Connections</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input [(ngModel)]="accountSettings.connections"
                                type="checkbox" 
                                class="custom-control-input"
                                id="connections"
                                name="connections">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Profile Views Count</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input [(ngModel)]="accountSettings.profile_views_count"
                                type="checkbox" 
                                class="custom-control-input"
                                id="profile_views_count"
                                name="profile_views_count">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Individual Service Views Count</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input [(ngModel)]="accountSettings.service_views_count"
                                type="checkbox" 
                                class="custom-control-input"
                                id="service_views_count"
                                name="service_views_count">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Total Number of People Who Trust You</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input [(ngModel)]="accountSettings.total_number_people"
                                type="checkbox" 
                                class="custom-control-input"
                                id="total_number_people"
                                name="total_number_people">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Total Number of Alliance Members</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input [(ngModel)]="accountSettings.total_number_members"
                                type="checkbox" 
                                class="custom-control-input"
                                id="total_number_members"
                                name="total_number_members">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Total Sales</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input [(ngModel)]="accountSettings.total_sales"
                                type="checkbox" 
                                class="custom-control-input"
                                id="total_sales"
                                name="total_sales">
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
export class PrivacySettings implements OnInit{
    myMsg:string;


    @Input() accountSettings:VOAccountSettings;
    // accountSettings:VOAccountSettings = new VOAccountSettings({});

    constructor(private accountService:JoinUsService){}

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