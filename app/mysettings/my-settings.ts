/**
 * Created by Vlad on 9/17/2016.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "../myservices/user-service";
import {VOAccount} from "../models/vos";


@Component({
    selector:'my-settings',
  template:`
<div>
<h1>Manage account settings</h1>

<div class="card-block">
    <div class="row">
        <div class="col-sm-6">
            <h5>Manage Your Notifications</h5>
            <div class="card-block">
                <div class="row">
                    <div class="col-sm-6 offset-sm-6 text-sm-center">Send an email notification</div>
                </div>
                <form>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Connection requests</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>New messages</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Alliance notifications</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Task notifications</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Service notifications</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-sm-5 offset-sm-1">
            <h5>Change Your Password</h5>
            <div class="card-block">
                <form>
                    <div class="form-group row">
                      <label for="inputPassword3" class="col-sm-6 col-form-label"><strong>Current</strong></label>
                      <div class="col-sm-6">
                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="inputPassword3" class="col-sm-6 col-form-label"><strong>New password</strong></label>
                      <div class="col-sm-6">
                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="inputPassword3" class="col-sm-6 col-form-label"><strong>Confirm new password</strong></label>
                      <div class="col-sm-6">
                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                      </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 offset-sm-6 text-sm-right">
                            <button type="button" class="btn btn-primary" (click)="onChangeClick()">change password</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<hr>
<div class="card-block">
    <div class="row">
        <div class="col-sm-6">
            <h5>Privacy settings</h5>
            <div class="card-block">
                <div class="row">
                    <div class="col-sm-5 offset-sm-7 text-sm-center">Make visible to the public</div>
                </div>
                <form>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Phone Number</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Email Addres</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Connections</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Profile Views Count</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Individual Service Views Count</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Total Number of People Who Trust You</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Total Number of Alliance Members</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                    <div class="form-group mb0 row has-warning">
                        <label class="col-sm-8 text-sm-left"><strong>Total Sales</strong></label>
                        <div class="col-sm-4 text-sm-center">
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">YES</span>
                          </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-sm-5 offset-sm-1">
            <h5> Update Your Email Address or Username</h5>
            <div class="card-block">
                <form  #f="ngForm" autocomplete="off" novalidate>
                    <div class="form-group row">
                      <label for="inputPassword3" class="col-sm-6 col-form-label"><strong>Account email</strong></label>
                      <div class="col-sm-6">
                        <input type="email" class="form-control" id="inputPassword3" placeholder="Email">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="inputPassword3" class="col-sm-6 col-form-label"><strong>Username</strong></label>
                      <div class="col-sm-6">
                        <input type="text" class="form-control" id="inputPassword3" placeholder="Username">
                      </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 offset-sm-6 text-sm-right">
                            <button type="button" class="btn btn-primary" (click)="onUpdateClick()">update</button>
                        </div>
                    </div>
                </form>
                <div *ngIf="myMsg">{{myMsg}}</div>
            </div>
        </div>
    </div>
</div>
<div class="debug">{{ person | json }}  </div>
<hr>
<div class="card-block">
    <button type="button" class="btn btn-outline-secondary pull-right">deactivate my account</button>
</div>

</div>
`
    ,styles:[`
        .mb0 {
             margin-bottom: 0; 
        }
`]
})
export class MySettings implements OnInit{
    myMsg:string;
    private user:VOAccount;


    constructor(private userService:UserService){}

    ngOnInit():void{
        // this.userService.user$.subscribe(
        //     user=>this.user = user
        // )
    }

    onChangeClick():void{
        this.userService.saveUser().then(
            res=>{
                if(res.success){
                    this.myMsg='data Saved'
                }else {
                    this.myMsg = res.message;
                }
                setTimeout(()=>{this.myMsg=''},10000);
                this.userService.getUser();
            }
        )
    }

    onUpdateClick():void{
        this.userService.saveUser().then(
            res=>{
                if(res.success){
                    this.myMsg='data Saved'
                }else {
                    this.myMsg = res.message;
                }
                setTimeout(()=>{this.myMsg=''},10000);
                this.userService.getUser();
            }
        )

    }


}
