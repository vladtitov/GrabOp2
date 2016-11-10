import {Component, OnInit, Input} from "@angular/core";
import {VOAccount} from "../models/vos";
import {UserService} from "../myservices/user-service";
import {JoinUsService} from "../join-us/login-service";
import {FormControl} from "@angular/forms";

@Component({
    selector:'change-pass',
    template:`
<div>
        <div class="col-sm-5 offset-sm-1">
            <h5>Change Your Password</h5>
            <div class="card-block">
                <form #f="ngForm"  autocomplete="off" novalidate>
                    <div class="form-group row">
                      <label for="inputPassword1" class="col-sm-6 col-form-label">
                        <strong>Current</strong>
                      </label>
                      <div class="col-sm-6">
                        <input [(ngModel)]="old_password"
                                type="password"
                                class="form-control"
                                id="inputPassword1"
                                placeholder="Password"
                                name="password"
                                required>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="inputPassword2" class="col-sm-6 col-form-label">
                        <strong>New password</strong>
                      </label>
                      <div class="col-sm-6">
                        <input [(ngModel)]="new_password"
                                (ngModelChange)="onPasswordChanged($event)"
                                type="password"
                                class="form-control"
                                id="inputPassword2"
                                placeholder="Password"
                                name="new_password"
                                minlength="6"
                                maxlength="100"
                                required>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="inputPassword3" class="col-sm-6 col-form-label">
                        <strong>Confirm new password</strong>
                      </label>
                      <div class="col-sm-6">
                        <input [formControl]="confirm"
                                type="password"
                                class="form-control"
                                id="inputPassword3"
                                placeholder="Password"
                                name="new_password_confirm"
                                minlength="6"
                                maxlength="100"
                                required>
                      </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 offset-sm-6 text-sm-right">
                            <button type="button" class="btn btn-primary"
                             [disabled] ="!passwordOK || !f.valid"
                             (click)="onChangeClick()">change password</button>
                        </div>
                        <div *ngIf="myMsg">{{myMsg}}</div>
                        <!--<div class="debug"> {{ f.valid | json }} </div>-->
                    </div>
                </form>
            </div>
        </div>
</div>
`
})
export class ChangePass implements OnInit{
    password:string='';
    old_password:string;
    new_password:string;
    confirm:any;
    passwordOK:boolean;
    myMsg:string;

    // @Input() account:VOAccount;
    account:VOAccount = new VOAccount({});


    constructor(private accountService:JoinUsService, private userService:UserService){}

    ngOnInit():void{
        // this.userService.user$.subscribe(
        //     user=>this.user = user
        // );
        this.confirm = new FormControl(this.password, [(fc)=>this.areEqual(this.password,fc)]);
    }

    areEqual(password:string,repeat:any) {
        // console.log(password,repeat.value);
        if(password==repeat.value){
            this.passwordOK = true;
            return null;
        }else{
            this.passwordOK = false;
            return {areEqual:false}
        }

    }

    onPasswordChanged(evt):void{
        this.password = evt;
        this.confirm.updateValueAndValidity();
    }

    onChangeClick():void{
        this.account.new_password = this.new_password;
        this.account.password = this.old_password;
        this.accountService.updateAccount(this.account,'password').then(
            res=>{
                // console.log('res', res);
                if(res.success){
                    this.myMsg='password changed'
                }else {
                    this.myMsg = res.message;
                }
                setTimeout(()=>{this.myMsg=''},10000);
            }
        )
    }
}
