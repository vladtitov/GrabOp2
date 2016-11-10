import {Component, OnInit, Input} from "@angular/core";
import {VOAccount} from "../models/vos";
import {JoinUsService} from "../join-us/login-service";

@Component({
    selector:'update-account',
    template:`
<div>
        <div class="col-sm-5 offset-sm-1">
            <h5> Update Your Email Address or Username</h5>
            <div class="card-block">
                <form  #f="ngForm" autocomplete="off" novalidate>
                    <div class="form-group row">
                      <label for="inputEmail" class="col-sm-6 col-form-label"><strong>Account email</strong></label>
                      <div class="col-sm-6">
                        <input [(ngModel)]="email"
                            type="email"
                             class="form-control"
                             id="inputEmail"
                             placeholder="Email"
                             name="email"
                             minlength="6"
                             maxlength="100">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="inputPassword3" class="col-sm-6 col-form-label"><strong>Username</strong></label>
                      <div class="col-sm-6">
                        <input [(ngModel)]="username"
                            type="text"
                            class="form-control"
                            id="inputPassword3"
                            placeholder="Username"
                            name="username"
                            minlength="6"
                            maxlength="100">
                      </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 offset-sm-6 text-sm-right">
                            <button type="button" class="btn btn-primary"
                             [disabled] ="!email && !username || !f.valid"
                             (click)="onUpdateClick()">update</button>
                        </div>
                    </div>
                </form>
                <div *ngIf="myMsg">{{myMsg}}</div>
            </div>
        </div>
</div>
`
})
export class UpdateAccount implements OnInit{

    email:string;
    username:string;
    myMsg:string;

    // @Input() account:VOAccount;
    account:VOAccount = new VOAccount({});

    constructor(private accountService:JoinUsService){}

    ngOnInit():void{}

    onUpdateClick():void{
        if(this.email) this.account.email = this.email;
        if(this.username) this.account.username = this.username;
        this.accountService.updateAccount(this.account,'account').then(
            res=>{
                if(res.success){
                    this.myMsg='account updated'
                }else {
                    this.myMsg = res.message;
                }
                setTimeout(()=>{this.myMsg=''},10000);
            }
        );
    }

}
