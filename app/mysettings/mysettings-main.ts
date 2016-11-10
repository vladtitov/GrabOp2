
import {Component, OnInit} from "@angular/core";
import {VOAccount, VOUserExt, VOAccountSettings} from "../models/vos";
import {JoinUsAssets} from "../join-us/join-us-assets";
import {JoinUsService} from "../join-us/login-service";
import {UserService} from "../myservices/user-service";

@Component({
    selector:'mysettings-main',
  template:`
<div>
<h1>Manage account settings</h1>

<div class="card-block">
    <div class="row">
        <notifications [accountSettings]="accountSettings"></notifications>
        <!--<notifications></notifications>-->
        <change-pass ></change-pass>
    </div>
</div>
<hr>
<div class="card-block">
    <div class="row">
        <privacy-settings [accountSettings]="accountSettings"></privacy-settings>
        <update-account></update-account>
    </div>
</div>
<!--<div class="debug">{{ person | json }}  </div>-->
<hr>
<div class="card-block">
    <button type="button" (click)="onDeactivateClick()" class="btn btn-outline-secondary pull-right">deactivate my account</button>
</div>

</div>

`
})
export class MySettingsMain implements OnInit{
    private account:VOAccount;
    // private user:VOUserExt;
    private accountSettings:VOAccountSettings;

    constructor(private accountService:JoinUsService){//, private userService:UserService
        // this.userService.user$.subscribe(
        //     user=>this.user = user
        // );
        // this.accountService.getAccount().then(
        //     res=>{
        //         this.account = res;
        //         // console.log('account', this.account);
        //     });

        this.accountService.accountSettings$.subscribe(
            accountService=> {
                this.accountSettings = accountService;
                console.log('this.accountSettings', this.accountSettings);
            }
        );
        // this.accountService.getSettings().then(
        //     res=>{
        //         this.accountSettings = res;
        //         console.log('accountSettings', this.accountSettings);
        //     });
    }

    ngOnInit():void{  }

    onDeactivateClick(){}
}
